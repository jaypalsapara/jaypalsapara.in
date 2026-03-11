import cn from '@/supports/style';
import { type ReactNode } from 'react';

export default function H3({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={cn('text-3xl tracking-tight', className)}>{children}</h3>;
}
