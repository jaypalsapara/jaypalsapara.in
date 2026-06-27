import { OptimizerConfig } from '@/lib/image-optimizer';

const config: OptimizerConfig = {
  // ── Directories ────────────────────────────────────────────────────────────
  inputDir: './public/images',
  outputDir: './public/assets/images',

  // ── Performance ────────────────────────────────────────────────────────────
  /** How many images to process in parallel */
  concurrency: 4,

  /** Skip files smaller than this (bytes). 0 = process everything */
  minFileSize: 0, // 10_000 = 10 KB

  // ── Source extensions to pick up ───────────────────────────────────────────
  /** Omit to use defaults: jpg, jpeg, png, gif, tiff, webp */
  extensions: ['jpg', 'jpeg', 'png', 'webp'],

  // ── Output formats ─────────────────────────────────────────────────────────
  /**
   * Add/remove a key to enable/disable a format.
   * Options map directly to sharp's AvifOptions / WebpOptions.
   */
  formats: {
    webp: {
      quality: 82,
      effort: 4, // 0 (fast) – 6 (slow, better compression)
      lossless: false,
      smartSubsample: true,
    },
    avif: {
      quality: 60,
      effort: 4, // 0 (fast) – 9 (slow, better compression)
      lossless: false,
      chromaSubsampling: '4:2:0',
    },
  },

  // ── Responsive widths (optional) ───────────────────────────────────────────
  /**
   * Only widths SMALLER than the source are generated.
   * The original size is always included as well.
   * Remove this key entirely to skip width variants.
   */
  widths: [1920],

  // ── Manifest ───────────────────────────────────────────────────────────────
  /** Where to write the manifest JSON for cache busting */
  manifestPath: './public/assets/images/manifest.json',
};

export default config;
