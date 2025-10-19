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
      className={twMerge('pad-x top-16 left-1/2 h-[calc(100dvh-4rem)] w-full max-w-[1512px] -translate-x-1/2 border bg-background py-14', className)}
      onBeforeToggle={handlePopoverToggle}
      popover="auto"
      ref={popoverRef}
    >
      {children}
    </div>
  );
};

export default Popover;
