import { cva } from 'class-variance-authority';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const badgeVariants = cva('inline-block max-w-max rounded-xs text-xs font-medium', {
  variants: {
    variant: {
      default: 'bg-accent-100/85 dark:bg-accent-900/28 text-accent-600',
      secondary: 'bg-muted text-muted-foreground',
    },
    size: {
      default: 'px-1.5 py-0.5',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

type Variants = 'default' | 'secondary';
type Size = 'default';

interface BadgeProps {
  className?: string;
  variant?: Variants;
  size?: Size;
  children: ReactNode;
}

const Badge = ({ children, className, variant, size }: BadgeProps) => {
  return <div className={twMerge(badgeVariants({ variant, size, className }))}>{children}</div>;
};

export default Badge;
