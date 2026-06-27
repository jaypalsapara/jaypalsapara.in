import * as crypto from 'crypto';
import * as fs from 'fs/promises';
import * as path from 'path';
import sharp, { AvifOptions, WebpOptions } from 'sharp';

// ─── Config ───────────────────────────────────────────────────────────────────

export interface FormatConfig {
  webp?: WebpOptions;
  avif?: AvifOptions;
}

export interface OptimizerConfig {
  /** Directory to scan for source images */
  inputDir: string;
  /** Directory to write optimised images */
  outputDir: string;
  /** Number of images processed in parallel (default: 4) */
  concurrency?: number;
  /** Skip files smaller than this byte size (default: 0 – process all) */
  minFileSize?: number;
  /** Output format options. Include a key to enable that format */
  formats: FormatConfig;
  /** Source extensions to pick up (default: jpg, jpeg, png, gif, tiff, webp) */
  extensions?: string[];
  /**
   * Output widths in pixels.
   * Only widths SMALLER than the source image are generated.
   * When omitted the original dimensions are kept.
   */
  widths?: number[];
  /**
   * Path (including filename) for the manifest JSON.
   * Default: <outputDir>/manifest.json
   */
  manifestPath?: string;
}

// ─── Types ────────────────────────────────────────────────────────────────────

type OutputFormat = 'webp' | 'avif';

/**
 * Hash is derived from the source file — same for webp and avif of the same image.
 *
 * {
 *   "demo-image": {
 *     "original": "demo-image-a1b2c3d4",
 *     "1920":     "demo-image-1920-a1b2c3d4"
 *   }
 * }
 *
 * Files on disk: demo-image-a1b2c3d4.webp  demo-image-a1b2c3d4.avif
 * Append the format extension you need when referencing the file.
 */
type ManifestImageEntry = Record<string, string>; // widthKey → basename (no ext)
type Manifest = Record<string, ManifestImageEntry>; // imageKey → variants

// ─── Helpers ──────────────────────────────────────────────────────────────────

const DEFAULT_EXTENSIONS = ['jpg', 'jpeg', 'png', 'gif', 'tiff', 'webp'];

function resolvedExtensions(cfg: OptimizerConfig): Set<string> {
  return new Set((cfg.extensions ?? DEFAULT_EXTENSIONS).map((e) => e.toLowerCase().replace(/^\./, '')));
}

/** Replace spaces (and runs of spaces) with a single '-' */
function slugify(name: string): string {
  return name.replace(/\s+/g, '-');
}

async function hashFile(filePath: string): Promise<string> {
  const buf = await fs.readFile(filePath);
  return crypto.createHash('md5').update(buf).digest('hex').slice(0, 8);
}

async function ensureDir(dir: string): Promise<void> {
  await fs.mkdir(dir, { recursive: true });
}

async function fileExists(p: string): Promise<boolean> {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function collectImages(dir: string, validExts: Set<string>): Promise<string[]> {
  const results: string[] = [];

  async function walk(current: string) {
    const entries = await fs.readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        await walk(full);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).slice(1).toLowerCase();
        if (validExts.has(ext)) results.push(full);
      }
    }
  }

  await walk(dir);
  return results;
}

/** Run tasks with bounded concurrency */
async function runWithConcurrency<T>(
  tasks: (() => Promise<T>)[],
  concurrency: number,
  onProgress?: (done: number, total: number) => void,
): Promise<T[]> {
  const results: T[] = [];
  let index = 0;
  let done = 0;
  const total = tasks.length;

  async function worker() {
    while (index < total) {
      const i = index++;
      results[i] = await tasks[i]();
      done++;
      onProgress?.(done, total);
    }
  }

  const workers = Array.from({ length: Math.min(concurrency, total) }, worker);
  await Promise.all(workers);
  return results;
}

// ─── Core processing ──────────────────────────────────────────────────────────

interface ProcessTask {
  srcPath: string;
  outDir: string;
  format: OutputFormat;
  width: number | null;
  formatOptions: AvifOptions | WebpOptions;
  inputDir: string;
  outputDir: string;
  /** Slugified base name used as the manifest top-level key, e.g. "demo-image" */
  imageKey: string;
  /** Manifest width key: "original" or pixel value as string e.g. "1920" */
  widthKey: string;
  /** Final basename without extension — shared across formats, e.g. "demo-image-a1b2c3d4" */
  finalBasename: string;
}

async function processOne(task: ProcessTask, manifest: Manifest): Promise<void> {
  const { srcPath, outDir, format, width, formatOptions, imageKey, widthKey, finalBasename, outputDir } = task;

  // Skip if the output file for this specific format already exists on disk
  const finalPath = path.join(outputDir, outDir.replace(outputDir, ''), `${finalBasename}.${format}`);
  const destPath = path.join(outDir, `${finalBasename}.${format}`);
  if (await fileExists(destPath)) {
    if (!manifest[imageKey]) manifest[imageKey] = {};
    manifest[imageKey][widthKey] = finalBasename;
    return;
  }

  await ensureDir(outDir);

  let pipeline = sharp(srcPath);

  if (width !== null) {
    pipeline = pipeline.resize({ width, withoutEnlargement: true });
  }

  if (format === 'webp') {
    pipeline = pipeline.webp(formatOptions as WebpOptions);
  } else {
    pipeline = pipeline.avif(formatOptions as AvifOptions);
  }

  await pipeline.toFile(destPath);

  // Write into manifest — basename only, no extension
  if (!manifest[imageKey]) manifest[imageKey] = {};
  manifest[imageKey][widthKey] = finalBasename;
}

// ─── Public API ───────────────────────────────────────────────────────────────

export async function optimizeImages(cfg: OptimizerConfig): Promise<void> {
  const concurrency = cfg.concurrency ?? 4;
  const minFileSize = cfg.minFileSize ?? 0;
  const manifestPath = cfg.manifestPath ?? path.join(cfg.outputDir, 'manifest.json');
  const validExts = resolvedExtensions(cfg);

  await ensureDir(cfg.outputDir);

  // Load existing manifest so we don't re-process already-converted files
  let manifest: Manifest = {};
  if (await fileExists(manifestPath)) {
    try {
      const raw = await fs.readFile(manifestPath, 'utf8');
      manifest = JSON.parse(raw);
    } catch {
      // Corrupt manifest – start fresh
      manifest = {};
    }
  }

  console.log(`🔍  Scanning ${cfg.inputDir} …`);
  const images = await collectImages(cfg.inputDir, validExts);
  console.log(`    Found ${images.length} image(s)`);

  const enabledFormats = (Object.keys(cfg.formats) as OutputFormat[]).filter((f) => cfg.formats[f] !== undefined);

  if (enabledFormats.length === 0) {
    throw new Error('No output formats configured. Add at least one key to cfg.formats.');
  }

  // Build task list
  const tasks: ProcessTask[] = [];

  for (const srcPath of images) {
    const stat = await fs.stat(srcPath);
    if (stat.size < minFileSize) {
      console.log(`  ⏭  Skipping (too small): ${path.relative(cfg.inputDir, srcPath)}`);
      continue;
    }

    // Hash the SOURCE file once — shared by all format/width variants of this image
    const srcHash = await hashFile(srcPath);

    // Determine widths to generate
    let widthsToProcess: (number | null)[];
    if (cfg.widths && cfg.widths.length > 0) {
      const meta = await sharp(srcPath).metadata();
      const originalWidth = meta.width ?? Infinity;
      const smallerWidths = cfg.widths.filter((w) => w < originalWidth);
      widthsToProcess = [...smallerWidths, null];
    } else {
      widthsToProcess = [null];
    }

    const relPath = path.relative(cfg.inputDir, srcPath);
    const parsed = path.parse(relPath);
    const slugName = slugify(parsed.name);
    const imageKey = parsed.dir ? `${parsed.dir.replace(/\\/g, '/')}/${slugName}` : slugName;
    const outDir = path.join(cfg.outputDir, parsed.dir);

    for (const format of enabledFormats) {
      for (const width of widthsToProcess) {
        const widthKey = width !== null ? String(width) : 'original';
        const widthSegment = width !== null ? `-${width}` : '';
        // basename is the same for .webp and .avif — only extension differs
        const finalBasename = `${slugName}${widthSegment}-${srcHash}`;

        tasks.push({
          srcPath,
          outDir,
          format,
          width,
          formatOptions: cfg.formats[format] as AvifOptions | WebpOptions,
          inputDir: cfg.inputDir,
          outputDir: cfg.outputDir,
          imageKey,
          widthKey,
          finalBasename,
        });
      }
    }
  }

  if (tasks.length === 0) {
    console.log('✅  Nothing to process.');
    await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));
    return;
  }

  console.log(`\n⚙️   Processing ${tasks.length} task(s) with concurrency=${concurrency}\n`);

  let processed = 0;
  let skipped = 0;
  const errors: string[] = [];

  const runnables = tasks.map((task) => async () => {
    try {
      const destPath = path.join(task.outDir, `${task.finalBasename}.${task.format}`);
      const existed = await fileExists(destPath);
      await processOne(task, manifest);
      if (existed) {
        skipped++;
      } else {
        processed++;
        console.log(`  ✓ ${task.finalBasename}.${task.format}`);
      }
    } catch (err) {
      const msg = `❌  ${path.relative(task.inputDir, task.srcPath)} → ${task.widthKey} (${task.format}): ${(err as Error).message}`;
      errors.push(msg);
      console.error(msg);
    }
  });

  await runWithConcurrency(runnables, concurrency, (done, total) => {
    const pct = Math.round((done / total) * 100);
    process.stdout.write(`\r    ${done}/${total} (${pct}%)`);
  });

  console.log('\n');

  // Persist manifest
  await ensureDir(path.dirname(manifestPath));
  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));

  // Summary
  console.log('─'.repeat(50));
  console.log(`✅  Done`);
  console.log(`    Processed : ${processed}`);
  console.log(`    Skipped   : ${skipped} (already existed)`);
  console.log(`    Errors    : ${errors.length}`);
  console.log(`    Manifest  : ${manifestPath}`);
  console.log('─'.repeat(50));

  if (errors.length > 0) {
    process.exitCode = 1;
  }
}
