import { cva, VariantProps } from 'class-variance-authority';
import { cn } from 'cn';
import { Laptop, Monitor, Smartphone, Tablet, TvMinimal } from 'lucide-react';

interface Props {
    className?: string;
}

export const indicatorVariant = cva(
    "fixed z-9999 m-3 flex items-center justify-center gap-1 rounded-md p-1 px-1 pr-1.5 text-sm font-medium opacity-50 select-none hover:opacity-100 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='stroke-'])]:stroke-[2.5]",
    {
        variants: {
            variant: {
                default: 'bg-primary text-primary-foreground',
                secondary: 'bg-secondary text-secondary-foreground',
                outline: 'border bg-background text-foreground',
                ghost: 'bg-transparent text-foreground',
            },
            position: {
                'top-left': 'top-0 left-0',
                'top-right': 'top-0 right-0',
                'bottom-left': 'bottom-0 left-0',
                'bottom-right': 'right-0 bottom-0',
            },
        },
        defaultVariants: {
            variant: 'default',
            position: 'bottom-left',
        },
    },
);

function ScreenIndicator({
    variant = 'default',
    position = 'bottom-left',
    className,
}: Props & VariantProps<typeof indicatorVariant>) {
    return (
        <div className={cn(indicatorVariant({ variant, position, className }))}>
            <Smartphone className="hidden opacity-50 max-md:block" />
            <Tablet className="hidden opacity-50 md:max-lg:block" />
            <Laptop className="hidden opacity-50 lg:max-xl:block" />
            <Monitor className="hidden opacity-50 xl:max-2xl:block" />
            <TvMinimal className="hidden opacity-50 2xl:block" />
            <div className="hidden max-sm:block">vs</div>
            <div className="hidden sm:max-md:block">sm</div>
            <div className="hidden md:max-lg:block">md</div>
            <div className="hidden lg:max-xl:block">lg</div>
            <div className="hidden xl:max-2xl:block">xl</div>
            <div className="hidden 2xl:block">2xl</div>
        </div>
    );
}

export { ScreenIndicator };
