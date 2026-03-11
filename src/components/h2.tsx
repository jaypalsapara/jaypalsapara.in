import cn from '@/supports/style';
import { type ReactNode } from 'react';

export default function H2({ children, className }: { children: ReactNode; className?: string }) {
  return <h2 className={cn('text-5xl tracking-tighter', className)}>{children}</h2>;
}
