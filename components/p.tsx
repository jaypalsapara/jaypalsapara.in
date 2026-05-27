import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export default function P({ children, className, ...props }: PropsWithChildren<{ className?: string }>) {
  return (
    <p className={cn('text-base lg:text-lg xl:text-xl leading-normal text-pretty tracking-tight', className)} {...props}>
      {children}
    </p>
  );
}
