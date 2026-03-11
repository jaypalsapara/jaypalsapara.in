import cn from '@/supports/style';
import type { ReactNode } from 'react';

export default function P({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn('text-base/relaxed', className)}>{children}</p>;
}
