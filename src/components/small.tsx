import cn from '@/supports/style';
import type { ReactNode } from 'react';

export default function Small({ children, className }: { children: ReactNode; className?: string }) {
  return <small className={cn('text-xs tracking-wide', className)}>{children}</small>;
}
