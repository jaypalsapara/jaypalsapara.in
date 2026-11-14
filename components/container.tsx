import { cn } from 'cn';
import { ComponentProps, PropsWithChildren } from 'react';

export default function Container({ children, className, ...props }: PropsWithChildren<ComponentProps<'div'>>) {
    return (
        <div
            className={cn('screen-line-bottom mx-auto w-full max-w-screen border-x p-12 md:max-w-7xl', className)}
            {...props}
        >
            {children}
        </div>
    );
}
