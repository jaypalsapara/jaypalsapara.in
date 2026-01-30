import { Lock } from 'lucide-react';

export default function NDALockLabel() {
  return (
    <div className="pointer-events-none absolute top-1/2 z-10 left-1/2 flex -translate-1/2 items-center gap-2 rounded-lg border-2 border-accent bg-background px-3 py-2 text-sm font-medium text-accent">
      <Lock className="stroke-2 size-4" /> Under NDA
    </div>
  );
}
