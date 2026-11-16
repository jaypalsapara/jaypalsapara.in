import { cn } from 'cn';
import { ComponentProps } from 'react';

function Frame({ className, size = 'default', ...props }: ComponentProps<'div'> & { size?: 'default' | 'sm' }) {
    return (
        <div
            data-slot="frame"
            data-size={size}
            className={cn('group/frame flex w-full flex-col gap-1 rounded-xl border bg-muted/50 p-1', className)}
            {...props}
        />
    );
}

function FrameHeader({ className, ...props }: ComponentProps<'div'>) {
    return (
        <div
            data-slot="frame-header"
            className={cn(
                'px-4 py-2',
                'grid auto-rows-min items-start gap-x-2',
                'group-data-[size=sm]/frame:text-sm',
                'has-data-[slot=card-description]:grid-rows-[auto_auto] has-data-[slot=frame-action]:grid-cols-[1fr_auto] has-data-[slot=frame-icon]:grid-cols-[auto_1fr]',
                'has-[[data-slot=frame-icon]~[data-slot=frame-action]]:grid-cols-[auto_1fr_auto]',
                className,
            )}
            {...props}
        />
    );
}

function FrameIcon({ className, ...props }: ComponentProps<'div'>) {
    return (
        <div
            data-slot="frame-icon"
            className={cn(
                'mt-0.75',
                "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
                "group-data-[size=sm]/frame:[&_svg:not([class*='size-'])]:size-4",
                'col-start-1 row-span-2 row-start-1',
                className,
            )}
            {...props}
        />
    );
}

function FrameTitle({ className, ...props }: ComponentProps<'div'>) {
    return (
        <div
            data-slot="frame-title"
            className={cn(
                'font-heading text-base leading-normal font-medium',
                'group-data-[size=sm]/frame:text-sm',
                className,
            )}
            {...props}
        />
    );
}

function FrameDescription({ className, ...props }: ComponentProps<'div'>) {
    return <div data-slot="frame-description" className={cn('text-sm text-muted-foreground', className)} {...props} />;
}

function FrameAction({ className, ...props }: ComponentProps<'div'>) {
    return (
        <div
            data-slot="frame-action"
            className={cn(
                '-col-end-1 row-span-2 row-start-1 has-data-[slot=frame-icon]:col-start-3',
                'group-not-has-data-[slot=frame-description]/frame:row-span-1',
                className,
            )}
            {...props}
        />
    );
}

function FrameContent({
    className,
    shadow = 'none',
    ...props
}: ComponentProps<'div'> & { shadow?: 'none' | 'default' }) {
    return (
        <div
            data-slot="frame-content"
            data-shadow={shadow}
            className={cn(
                'rounded-lg border bg-card p-4',
                'group-data-[size=sm]/frame:text-sm',
                'has-[+[data-slot=frame-content]]:rounded-b-xs [[data-slot=frame-content]+&]:rounded-t-xs',
                'data-[shadow=default]:shadow-lg/5 data-[shadow=default]:drop-shadow-2xl/10',
                className,
            )}
            {...props}
        />
    );
}

function FrameFooter({ className, ...props }: ComponentProps<'div'>) {
    return (
        <div
            data-slot="frame-footer"
            className={cn('px-4 py-2 text-muted-foreground', 'group-data-[size=sm]/frame:text-sm', className)}
            {...props}
        />
    );
}

export { Frame, FrameHeader, FrameIcon, FrameTitle, FrameDescription, FrameAction, FrameContent, FrameFooter };
