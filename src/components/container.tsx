import cn from '@/supports/style';
import type { ReactNode } from 'react';

export default function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('relative mx-auto w-full max-w-7xl', className)}>{children}</div>;
}
