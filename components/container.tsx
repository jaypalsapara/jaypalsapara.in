import { cn } from 'cn';
import { ComponentProps, PropsWithChildren } from 'react'

export default function Container({ children, className, ...props }: PropsWithChildren<ComponentProps<'div'>>) {
    return (
        <div
            className={cn('border-x mx-auto max-w-screen md:max-w-5xl p-4 w-full py-12 screen-line-bottom', className)}
            {...props}
        >
            {children}
        </div>
    )
}
