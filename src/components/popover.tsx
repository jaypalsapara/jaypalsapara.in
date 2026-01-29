import { useRef, type ReactNode, type ToggleEvent } from 'react';
import { twMerge } from 'tailwind-merge';

type PopoverProps = {
  children: ReactNode;
  id: string;
  className?: string;
  handlePopoverToggle?: (e: ToggleEvent) => void;
};
const Popover = ({ children, id, className, handlePopoverToggle }: PopoverProps) => {
  const popoverRef = useRef<HTMLDivElement | null>(null);
  return (
    <div
      id={id}
      className={twMerge('top-16 left-1/2 h-[calc(100dvh-4rem)] w-full max-w-[90rem] -translate-x-1/2 border bg-background p-4 lg:px-8 lg:py-4', className)}
      onBeforeToggle={handlePopoverToggle}
      popover="auto"
      ref={popoverRef}
    >
      {children}
    </div>
  );
};

export default Popover;
