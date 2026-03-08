import { cva } from 'class-variance-authority';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
const buttonVariants = cva('', {
  variants: {
    variant: {
      default: '',
      secondary: '',
      outline: '',
      ghost: '',
    },
    size: {
      default: '',
      sm: '',
      xs: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

type Variants = 'default' | 'secondary' | 'outline' | 'ghost';
type Size = 'default' | 'sm' | 'xs';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: Variants;
  size?: Size;
  children: ReactNode;
}

export default function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button {...props} className={twMerge(buttonVariants({ variant, size, className }))} />;
}
