import { cn } from 'cn';

interface Props {
    className?: string;
}

export default function StripeDivider({ className }: Props) {
    return (
        <div className={cn('screen-line-bottom stripe-divider h-6', className)}>
            <div className="mx-auto h-full max-w-5xl border-x"></div>
        </div>
    );
}
