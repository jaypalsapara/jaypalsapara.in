import { cva } from 'class-variance-authority';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva('cursor-pointer border-transparent transition-colors border inline-flex justify-center items-center gap-2 rounded-sm', {
  variants: {
    variant: {
      default:
        'bg-primary dark:bg-primary/8 dark:border-white/8 dark:hover:bg-primary/9 dark:text-primary text-primary-foreground hover:bg-primary/95 shadow-xs',
      secondary: 'bg-primary/8 hover:bg-primary/10 shadow-xs dark:bg-primary/6 dark:hover:bg-primary/8',
      outline: 'border-border bg-background hover:border-black/25 shadow-xs dark:hover:border-white/15',
      ghost: 'bg-transparent hover:bg-black/7 dark:hover:bg-white/7',
    },
    size: {
      default: ' px-4 py-2 h-9 text-base lg:text-sm font-medium',
      small: 'px-2 py-1 h-8 text-base lg:text-sm',
      tiny: 'px-1.5 py-0.5 h-7 text-sm lg:text-xs tracking-wide',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

type Variants = 'default' | 'secondary' | 'outline' | 'ghost';
type Size = 'default' | 'small' | 'tiny';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: Variants;
  size?: Size;
  children: ReactNode;
}

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return <button {...props} className={twMerge(buttonVariants({ variant, size, className }))} />;
};

export default Button;
