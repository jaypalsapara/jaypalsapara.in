import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export default function H3({ children, className, ...props }: PropsWithChildren<{ className?: string }>) {
  return (
    <h3 className={cn('text-balance text-5xl tracking-tighter', className)} {...props}>
      {children}
    </h3>
  );
}
