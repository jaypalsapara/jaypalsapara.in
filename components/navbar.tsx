'use client';

import { cn } from '@/lib/utils';
import { NavLink } from '@/types/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';

const pages: NavLink[] = [
  {
    name: 'Home',
    path: '/',
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
    <nav className="flex items-center h-12 sticky top-0 px-2 z-40 bg-background">
      <ul className="flex">
        {pages.map((item) => (
          <li key={`nav-link-wrapper-${item.name}`}>
            <Button
              variant={'ghost'}
              className={cn('text-muted-foreground px-2', {
                'text-foreground': pathname === item.path,
              })}
              asChild
            >
              <Link href={item.path}>{item.name}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
