import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export default function InlineChip({ className, children }: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        'bg-black inline-flex items-center justify-center h-11 px-6 lg:h-14 lg:px-8 xl:h-16 xl:px-10 rounded-full text-white translate-y-1',
        className,
      )}
    >
      {children}
    </div>
  );
}
