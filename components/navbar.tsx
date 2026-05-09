'use client';

import { cn } from '@/lib/utils';
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
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center h-12 sticky top-0 px-2">
      <ul className="flex">
        {pages.map((item) => (
          <li key={`nav-link-wrapper-${item.name}`}>
            <Button
              variant={'ghost'}
              className={cn('text-muted-foreground px-2', {
                'text-foreground': pathname === item.path,
              })}
            >
              <Link href={item.path}>{item.name}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
