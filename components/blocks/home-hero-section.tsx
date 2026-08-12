'use client';

import ClientCldImage from '@/components/client-cld-image';
import H1 from '@/components/h1';
import TransitionLink from '@/components/transition-link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { motion, useMotionValue } from 'motion/react';
import { Activity, MouseEvent, useCallback, useState } from 'react';

const tabsData = [
  {
    title: 'Web solutions that deliver results',
    action: {
      url: '/work',
      title: 'Work',
    },
  },
  {
    title: 'Services that turn your vision into results',
    action: {
      url: '/service',
      title: 'Service',
    },
  },
];

export default function HomeHeroSection() {
  const [activeTab, setActiveTab] = useState(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleTabChange = useCallback((e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;

    if (target.closest('a')) return;

    setActiveTab((old) => (old + 1) % tabsData.length);
  }, []);

  return (
    <motion.main
      className="w-full pile relative isolate min-h-dvh select-none cursor-none group/hero"
      onPointerMove={(e) => {
        x.set(e.clientX);
        y.set(e.clientY);
      }}
      onClick={handleTabChange}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: { ease: [0.39, 0.575, 0.565, 1.0], delay: 0.4 },
      }}
    >
      <motion.div
        className={cn(
          'rounded-full left-0 top-0 self-start fixed z-20 opacity-0 group-hover/hero:opacity-100 -translate-1/2 bg-foreground pointer-events-none pile will-change-[width,height] ease-in transition-[width,height] ',
          'size-10 group-active/hero:size-12!',
          'group-has-[[data-slot=hero-text-section]:hover]/hero:*:hidden',
          'group-has-[[data-slot=hero-text-section]:hover]/hero:size-4',
          'group-has-[[data-slot=hero-text-section]:active]/hero:size-6!',
        )}
        style={{ x, y }}
      >
        <ArrowRight className="size-4 text-background" />
      </motion.div>
      <div className="size-full pointer-events-none">
        <Activity mode={activeTab === 0 ? 'visible' : 'hidden'}>
          <ClientCldImage
            src="/images/hero-bg.png"
            alt="Hero section image"
            width={3840}
            height={2160}
            preload
            loading="eager"
            fetchPriority="high"
            className="min-h-210 object-cover size-full bg-background"
          />
        </Activity>
        <Activity mode={activeTab === 1 ? 'visible' : 'hidden'}>
          <ClientCldImage
            src="/images/hero-bg-service.png"
            alt="Hero section image"
            width={3840}
            height={2160}
            loading="lazy"
            className="min-h-210 object-cover size-full bg-background"
          />
        </Activity>
      </div>
      <div data-slot="hero-text-section" className="grid xl:grid-cols-2 py-8 px-4 w-full self-start">
        <div className="xl:col-start-2">
          <H1 className="font-bold max-w-[16ch]">{tabsData[activeTab].title}</H1>
          <div className="flex items-center mt-9 gap-6">
            <TransitionLink
              href={tabsData[activeTab].action.url}
              className={cn(buttonVariants({ className: 'w-44 h-10 rounded-full cursor-none' }))}
            >
              <span className="sr-only">{tabsData[activeTab].action.title}</span>
              <ArrowRight className="size-6" strokeLinejoin="miter" strokeLinecap="square" />
            </TransitionLink>
            <div className="items-center gap-1 hidden md:flex">
              {Array.from({ length: tabsData.length }).map((_, i) => (
                <div
                  key={`indicator-${i}`}
                  className={cn(
                    'bg-muted-foreground/25 h-1 will-change-[width] ease transition-[width_color] w-5 inline-block rounded-full',
                    {
                      'bg-foreground w-20': activeTab === i,
                    },
                  )}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
