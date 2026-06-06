'use client';

import { ViewTransitions } from 'next-view-transitions';

export default function ViewTransitionShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ViewTransitions>{children}</ViewTransitions>;
}
