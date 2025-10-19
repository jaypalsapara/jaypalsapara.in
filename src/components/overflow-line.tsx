import { twMerge } from 'tailwind-merge';

const OverflowLine = ({ className }: { className?: string }) => {
  return <div className={twMerge('left-1/2 w-[200vw] -translate-x-1/2 border-t', className)} />;
};

export default OverflowLine;
