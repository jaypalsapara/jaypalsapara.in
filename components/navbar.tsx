'use client';

import { cn } from '@/lib/utils';
import { NavLink } from '@/types/navigation';
import { usePathname } from 'next/navigation';
import TransitionLink from './transition-link';
import { Button } from './ui/button';

const pages: NavLink[] = [
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
    <nav className="flex items-center h-14 sticky top-0 px-2 z-40 bg-background">
      <ul className="flex">
        {pages.map((item) => (
          <li key={`nav-link-wrapper-${item.name}`}>
            <Button
              variant={'ghost'}
              className={cn('text-muted-foreground px-2 optical-display', {
                'text-foreground': pathname === item.path,
              })}
              asChild
            >
              <TransitionLink href={item.path}>{item.name}</TransitionLink>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
