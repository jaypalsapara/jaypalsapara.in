import type { HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Wrapper = ({ children, className, ...props }: WrapperProps) => {
  return (
    <div className={twMerge('grid grid-cols-4 gap-x-2 px-4 lg:grid-cols-12 lg:gap-x-4 lg:px-18', className)} {...props}>
      {children}
    </div>
  );
};

export default Wrapper;
