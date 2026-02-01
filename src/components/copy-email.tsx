import { EMAIL } from '@/data/defines';
import { Check, Copy } from 'lucide-react';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function CopyEmail({ className }: { className?: string }) {
  const [isCopied, setIsCopied] = useState(false);
  //   Handle copy click
  const handleClick = () => {
    navigator.clipboard.writeText(EMAIL);
    setIsCopied(true);
  };
  //   Event effect
  useEffect(() => {
    let timer = null;

    if (isCopied) timer = setTimeout(() => setIsCopied(false), 2000);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isCopied]);
  return (
    <div className={twMerge('group flex cursor-pointer items-center gap-2 text-muted-foreground', className)} onClick={handleClick}>
      <p className="leading-none">{EMAIL}</p>
      {isCopied ? <Check className="size-4 text-foreground" /> : <Copy className="invisible size-4 group-hover:visible" />}
    </div>
  );
}
