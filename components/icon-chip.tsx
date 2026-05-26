import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export default function InlineChip({ className, children }: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        'bg-black inline-flex items-center justify-center w-full aspect-video rounded-full text-white translate-y-1',
        className,
      )}
    >
      {children}
    </div>
  );
}
