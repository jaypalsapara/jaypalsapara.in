import cn from '@/supports/style';
import { type ReactNode } from 'react';

export default function H1({ children, className }: { children: ReactNode; className?: string }) {
  return <h1 className={cn('text-7xl tracking-tighter', className)}>{children}</h1>;
}
