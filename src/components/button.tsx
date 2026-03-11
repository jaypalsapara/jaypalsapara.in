import { cva } from 'class-variance-authority';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 border border-transparent text-sm leading-none font-medium text-nowrap transition-colors duration-150 outline-none supports-text-box:[text-box:trim-both_cap_alphabetic] [&_svg]:size-4',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary-600',
        secondary: 'bg-muted',
        outline: 'border-border hover:bg-black/5',
        ghost: '',
      },
      size: {
        lg: 'h-10 rounded-md px-4.5 py-2',
        default: 'h-9 rounded-md px-4 py-2',
        sm: 'h-8 rounded-md px-3 py-1.5',
        xs: 'h-7 rounded-md px-1.5 py-0.5 text-xs',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type Variants = 'default' | 'secondary' | 'outline' | 'ghost';
type Size = 'default' | 'sm' | 'xs' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: Variants;
  size?: Size;
  children: ReactNode;
}

export default function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button {...props} className={twMerge(buttonVariants({ variant, size, className }))} />;
}
