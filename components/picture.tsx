import { getSrc, getSrcSet } from '@/lib/image-manifest';
import { ImgHTMLAttributes } from 'react';

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & { srcKey: string };

export default function Picture({ srcKey, alt, width, height, sizes = '100vw', className, ...props }: Props) {
  return (
    <picture>
      <source type="image/avif" srcSet={getSrcSet(srcKey, 'avif')} sizes={sizes} />
      <source type="image/webp" srcSet={getSrcSet(srcKey, 'webp')} sizes={sizes} />
      <img
        src={getSrc(srcKey, 'webp')}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className={className}
        {...props}
      />
    </picture>
  );
}
