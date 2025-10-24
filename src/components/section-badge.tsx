import type { LucideIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

type SectionBadgeProps = {
  Icon: LucideIcon;
  title: string;
  className?: string;
};
const SectionBadge = ({ Icon, title, className }: SectionBadgeProps) => {
  return (
    <div className={twMerge('pad-x mt-22 lg:mt-32', className)}>
      <div className="highlight-line"></div>
      <div className="flex h-12 items-center gap-4 text-accent">
        <Icon className="size-5.5" />
        <p className="font-mono">{title}</p>
      </div>
    </div>
  );
};

export default SectionBadge;
