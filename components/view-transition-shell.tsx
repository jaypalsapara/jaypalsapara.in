'use client';

import { ViewTransitions } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import { useLayoutEffect } from 'react';

export default function ViewTransitionShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return <ViewTransitions>{children}</ViewTransitions>;
}
