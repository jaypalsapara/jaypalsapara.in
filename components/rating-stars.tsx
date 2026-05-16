import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

export default function RatingStars({ rating, className }: { rating: number; className?: string }) {
  return (
    <>
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={`rate-${i}`} className={cn('size-4 fill-amber-400 stroke-yellow-500', className)} />
      ))}
    </>
  );
}
