import type { ReactNode } from 'react';

export default function Nav({ children, className }: { children: ReactNode; className?: string }) {
  return <nav className={className}>{children}</nav>;
}
