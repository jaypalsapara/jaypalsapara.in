'use client';

import { MotionClientCldImage } from '@/components/client-cld-image';
import H1 from '@/components/h1';
import TransitionLink from '@/components/transition-link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { motion, useMotionValue } from 'motion/react';
import { Activity, MouseEvent, useCallback, useState } from 'react';

const tabsData = [
  {
    title: 'Web solutions that turn ideas into results',
    action: {
      url: '/work',
      title: 'Work',
    },
    image: '/images/hero-bg.png',
  },
  {
    title: 'Services to build, fix & scale your product',
    action: {
      url: '/service',
      title: 'Service',
    },
    image: '/images/hero-bg-service.png',
  },
  {
    title: 'Encrypt text or files with Encrypto',
    action: {
      url: 'https://jaypalsapara.github.io/encrypto/',
      title: 'Encrypto',
    },
    image: '/images/encrypto-art.png',
  },
];

export default function HomeHeroSection() {
  const [activeTab, setActiveTab] = useState(0);
  const x = useMotionValue(-26);
  const y = useMotionValue(-26);

  const handleTabChange = useCallback((e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;

    if (target.closest('a')) return;

    setActiveTab((old) => (old + 1) % tabsData.length);
  }, []);

  return (
    <>
      <motion.main
        className="w-full pile relative isolate min-h-screen select-none cursor-none peer overflow-hidden"
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
        <div className="absolute inset-0 flex items-center justify-center">
          {tabsData.map((tab, index) => (
            <Activity key={`tab-activity-${index}`} mode={activeTab === index ? 'visible' : 'hidden'}>
              <MotionClientCldImage
                src={tab.image}
                alt={`${tab.title} hero section image`}
                width={3840}
                height={2560}
                preload={index === 0}
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority="high"
                className="object-cover size-full bg-background pointer-events-none object-center will-change-transform"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: 'easeIn',
                }}
              />
            </Activity>
          ))}
        </div>
        <div data-slot="hero-text-section" className="grid xl:grid-cols-2 py-8 px-4 w-full self-start z-10">
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
                      'bg-muted-foreground/25 h-1 will-change-[width] ease transition-[width_color] w-5 inline-block rounded-full ease-[cubic-bezier(0.215, 0.610, 0.355, 1.000)] duration-300',
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
      <motion.div
        className={cn(
          'rounded-full self-start fixed z-20 opacity-0 peer-hover:opacity-100 -translate-1/2 bg-foreground pointer-events-none pile will-change-[width,height,transform] ease-in transition-[width,height]',
          'size-10 peer-active:size-12!',
          'peer-has-[[data-slot=hero-text-section]:hover]:*:hidden',
          'peer-has-[[data-slot=hero-text-section]:hover]:size-4',
          'peer-has-[[data-slot=hero-text-section]:active]:size-6!',
        )}
        style={{ x, y }}
      >
        <ArrowRight className="size-5 text-background" />
      </motion.div>
    </>
  );
}
