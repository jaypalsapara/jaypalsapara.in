import { useAppearance, type Appearance } from '@/hooks/use-appearance';
import { Contrast, Moon, Sun, type LucideIcon } from 'lucide-react';
import { memo, type HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export default memo(function AppearanceToggle({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  const { appearance, updateAppearance } = useAppearance();

  const tabs: { value: Appearance; icon: LucideIcon; label: string }[] = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Contrast, label: 'System' },
  ];

  return (
    <div className={twMerge('inline-flex gap-1', className)} {...props}>
      {tabs.map(({ value, icon: Icon }, index) => {
        const nextMode = tabs.at(index + 1) || tabs.at(0);
        const nextModeValue = nextMode?.value || 'system';
        return (
          <button
            key={value}
            onClick={() => updateAppearance(nextModeValue)}
            className={twMerge('flex cursor-pointer items-center transition-colors', appearance === value ? '' : 'hidden')}
            aria-label="Appearance Toggle"
            title="Appearance Toggle"
          >
            <Icon />
          </button>
        );
      })}
    </div>
  );
});
