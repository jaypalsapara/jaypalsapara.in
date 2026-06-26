'use client';

import H1 from '@/components/h1';
import TransitionLink from '@/components/transition-link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function HomeHeroSection() {
  return (
    <motion.main
      className="w-full pile relative isolate min-h-dvh"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: { ease: [0.39, 0.575, 0.565, 1.0], delay: 0.4 },
      }}
    >
      <div className="size-full">
        <Image
          src="/images/hero-bg.png"
          alt="Hero section image"
          width={3840}
          height={2160}
          priority
          loading="eager"
          className="min-h-210 object-cover size-full hidden md:block"
        />
        <Image
          src="/images/hero-bg-mobile.png"
          alt="Hero section image"
          width={2160}
          height={2160}
          priority
          loading="eager"
          className="min-h-210 object-cover size-full block md:hidden"
        />
      </div>
      <div className="grid xl:grid-cols-2 py-8 px-4 w-full self-start">
        <div className="xl:col-start-2">
          <H1 className="font-bold max-w-[16ch]">Web solutions that deliver results</H1>
          <Button className="w-44 h-10 mt-9 rounded-full" asChild>
            <TransitionLink href={'/work'}>
              <span className="sr-only">Work</span>
              <ArrowRight className="size-6" strokeLinejoin="miter" strokeLinecap="square" />
            </TransitionLink>
          </Button>
        </div>
      </div>
    </motion.main>
  );
}
