'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { Kbd } from '@/components/ui/kbd';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useCallback } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

export function ThemeToggle() {
  // Hooks
  const { resolvedTheme, systemTheme, setTheme } = useTheme();

  // Methods
  const switchTheme = useCallback(() => {
    const next = resolvedTheme === 'dark' ? 'light' : 'dark';

    setTheme(next === systemTheme ? 'system' : next);
  }, [setTheme, resolvedTheme, systemTheme]);

  // Effects
  useHotkeys('d', switchTheme);

  // Render
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button onClick={switchTheme} variant={'ghost'} size={'icon'}>
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        }
      />
      <TooltipContent>
        Toggle theme <Kbd>D</Kbd>
      </TooltipContent>
    </Tooltip>
  );
}
