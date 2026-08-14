import { clsx, type ClassValue } from 'clsx';
import { getCldImageUrl, GetCldImageUrlOptions } from 'next-cloudinary';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const remToPx = (rem: number) => {
  if (typeof window === 'undefined') {
    return rem * 16;
  }

  return rem * Number.parseFloat(getComputedStyle(document.documentElement).fontSize);
};

export function shuffle<T>(array: T[]): T[] {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

export const prefetchImage = (src: string) => {
  const image = new Image();
  image.src = src;
};

export const cloudinaryUrl = (option: GetCldImageUrlOptions) => {
  const constructOptions: GetCldImageUrlOptions = {
    ...option,
    crop: option.crop || 'limit',
    format: option.format || 'auto',
    quality: option.quality || 'auto',
  };

  return getCldImageUrl(constructOptions);
};
