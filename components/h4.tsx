import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export default function H4({ children, className, ...props }: PropsWithChildren<{ className?: string }>) {
  return (
    <h4 className={cn('text-balance text-3xl tracking-tighter', className)} {...props}>
      {children}
    </h4>
  );
}
