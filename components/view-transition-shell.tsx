'use client';

import { ViewTransitions } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import { useLayoutEffect, useRef } from 'react';

export default function ViewTransitionShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const previousPathname = useRef<string | null>(null);

  useLayoutEffect(() => {
    if (previousPathname.current !== null && previousPathname.current !== pathname) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    previousPathname.current = pathname;
  }, [pathname]);

  return <ViewTransitions>{children}</ViewTransitions>;
}
