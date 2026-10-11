'use client';

import { TooltipProvider } from '@/components/ui/tooltip';
import { ProgressProvider } from '@bprogress/next/app';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <ProgressProvider color="var(--foreground)" height="2px" delay={500} options={{ showSpinner: false }}>
        <TooltipProvider>{children}</TooltipProvider>
      </ProgressProvider>
    </ThemeProvider>
  );
}
