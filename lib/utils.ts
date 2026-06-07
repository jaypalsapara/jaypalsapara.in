import { clsx, type ClassValue } from 'clsx';
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
