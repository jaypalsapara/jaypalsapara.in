import { getSrc, getSrcSet } from '@/lib/image-manifest';

type Props = {
  imageKey: string; // matches folder path from INPUT_DIR root
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  className?: string;
  priority?: boolean; // true = eager load (above the fold)
};

export default function OptimizedImage({
  imageKey,
  alt,
  width,
  height,
  sizes = '100vw',
  className,
  priority = false,
}: Props) {
  return (
    <picture>
      <source type="image/avif" srcSet={getSrcSet(imageKey, 'avif')} sizes={sizes} />
      <source type="image/webp" srcSet={getSrcSet(imageKey, 'webp')} sizes={sizes} />
      <img
        src={getSrc(imageKey, 'webp')}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        className={className}
      />
    </picture>
  );
}
