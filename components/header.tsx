import { ThemeToggle } from '@/components/theme-toggle';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { Separator } from './ui/separator';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 overflow-x-clip bg-background-dark px-2">
            <div className="screen-line-bottom mx-auto flex h-16 w-full max-w-screen items-center border-x ps-4 pe-2 after:z-1 md:max-w-7xl md:ps-12 md:pe-10">
                <div>Jaypal Sapara</div>

                <div className="ms-auto flex items-center gap-2">
                    <NavigationMenu align="center">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle({ className: 'h-8' })}
                                    render={<Link href={'/about'}>About</Link>}
                                />
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className={'h-8'}>Products</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <Separator orientation="vertical" className={'h-4 data-vertical:self-center'} />
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
