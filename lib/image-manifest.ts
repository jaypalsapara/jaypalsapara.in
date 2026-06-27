import manifestJson from '@/public/assets/images/manifest.json';

type ManifestEntry = Record<string, string>;
type Manifest = Record<string, ManifestEntry>;

const manifest = manifestJson as Manifest;

// ─── Config ────────────────────────────────────────────────────────────────

const BASE = '/assets/images';

// ─── Helpers ───────────────────────────────────────────────────────────────

function resolveUrl(entry: string, ext: 'webp' | 'avif'): string {
  return `${BASE}/${entry}.${ext}`;
}

/** Returns all widths actually present in the manifest for this key, sorted ascending. */
function getAvailableWidths(entry: ManifestEntry): number[] {
  return Object.keys(entry)
    .filter((entry) => entry !== 'original')
    .map(Number)
    .sort((a, b) => a - b);
}

// ─── Public API ────────────────────────────────────────────────────────────

export function getSrcSet(key: string, ext: 'webp' | 'avif'): string {
  const entry = manifest[key];
  if (!entry) throw new Error(`Image not found in manifest: "${key}"`);

  // Read widths from manifest directly — not from a hardcoded WIDTHS array
  const widths = getAvailableWidths(entry);

  return [...widths.map((w) => `${resolveUrl(entry[w], ext)} ${w}w`), `${resolveUrl(entry['original'], ext)}`].join(
    ', ',
  );
}

export function getSrc(key: string, ext: 'webp' | 'avif', width?: number): string {
  const entry = manifest[key];
  if (!entry) throw new Error(`Image not found in manifest: "${key}"`);

  const widths = getAvailableWidths(entry);
  if (widths.length === 0) return resolveUrl(entry['original'], ext);

  // Exact match → use it. Otherwise fall back to the largest available.
  const best = width && widths.includes(width) ? width : widths[widths.length - 1];

  return resolveUrl(entry[best], ext);
}
