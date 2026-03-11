import cn from '@/supports/style';
import { type ReactNode } from 'react';

export default function H4({ children, className }: { children: ReactNode; className?: string }) {
  return <h4 className={cn('text-xl', className)}>{children}</h4>;
}
