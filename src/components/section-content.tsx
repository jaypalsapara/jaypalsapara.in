import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const SectionContent = ({ children, className, ...props }: { children: ReactNode; className?: string }) => {
  return (
    <div className={twMerge('mt-14 lg:mt-18', className)} {...props}>
      {children}
    </div>
  );
};

export default SectionContent;
