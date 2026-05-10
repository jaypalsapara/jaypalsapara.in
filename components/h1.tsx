import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export default function H1({ children, className, ...props }: PropsWithChildren<{ className?: string }>) {
  return (
    <h1 className={cn('text-balance text-5xl lg:text-6xl xl:text-7xl tracking-tighter', className)} {...props}>
      {children}
    </h1>
  );
}
