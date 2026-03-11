import cn from '@/supports/style';
import { type ReactNode } from 'react';

export default function Div({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('relative border-t', className)}>{children}</div>;
}
