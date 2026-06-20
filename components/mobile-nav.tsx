'use client';

import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerTrigger } from '@/components/ui/drawer';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { SocialLinks } from './footer';
import { PagesLinks } from './navbar';
import TransitionLink from './transition-link';

export default function MobileNav() {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const previousPathname = useRef<string | null>(null);

  useEffect(() => {
    if (previousPathname.current !== null && previousPathname.current !== pathname) {
      setOpen(false);
    }
    previousPathname.current = pathname;
  }, [pathname]);

  return (
    <Drawer key={`drawer-${pathname}`} onOpenChange={setOpen} open={open}>
      <DrawerTrigger className="fixed bottom-4 z-40 -translate-x-1/2 left-1/2 rounded-full size-14 grid place-items-center bg-background text-foreground lg:hidden">
        <Menu />
      </DrawerTrigger>
      <DrawerContent className="h-screen dark max-h-screen! rounded-none! lg:hidden">
        <motion.ul
          className="flex flex-col mx-auto items-center py-12 gap-y-4 grow justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.15,
            duration: 0.4,
            ease: 'easeOut',
          }}
        >
          {PagesLinks.map((item) => (
            <li key={`nav-link-wrapper-${item.name}`}>
              <TransitionLink href={item.path} className="text-5xl font-bold text-center">
                {item.name}
              </TransitionLink>
            </li>
          ))}

          <li className="flex gap-4 pt-6">
            {SocialLinks.map((item) => (
              <a href={item.url} key={`social-link-wrapper-${item.name}`} className="text-muted-foreground/50 text-xl">
                {item.name}
              </a>
            ))}
          </li>
        </motion.ul>
        <DrawerFooter>
          <DrawerClose className="mx-auto size-14 grid place-items-center bg-foreground text-background rounded-full">
            <X />
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
