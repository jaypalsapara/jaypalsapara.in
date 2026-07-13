'use client';

import { cn } from '@/lib/utils';
import { NavLink } from '@/types/navigation';
import { usePathname } from 'next/navigation';
import TransitionLink from './transition-link';
import { buttonVariants } from './ui/button';

export const PagesLinks: NavLink[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Feed',
    path: '/feed',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Work',
    path: '/work',
  },
  {
    name: 'Service',
    path: '/service',
  },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="items-center h-14 sticky top-0 px-2 z-40 bg-background md:flex hidden">
      <ul className="flex">
        {PagesLinks.map((item) => (
          <li key={`nav-link-wrapper-${item.name}`}>
            <TransitionLink
              href={item.path}
              className={cn(
                buttonVariants({ variant: 'ghost', className: 'text-muted-foreground px-2 optical-display' }),
                {
                  'text-foreground': pathname === item.path,
                },
              )}
            >
              {item.name}
            </TransitionLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
