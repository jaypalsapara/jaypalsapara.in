import { cn } from 'cn';

interface Props {
  className?: string;
}

export default function StripeDivider({ className }: Props) {
  return (
    <div className={cn('stripe-divider h-6 screen-line-bottom', className)}>
      <div className="border-x max-w-5xl mx-auto h-full"></div>
    </div>
  );
}
