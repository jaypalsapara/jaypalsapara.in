'use client';

import Footer from '@/components/footer';
import H1 from '@/components/h1';
import TransitionLink from '@/components/transition-link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <motion.main
        className="flex w-full flex-1 flex-col relative isolate"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: { ease: [0.39, 0.575, 0.565, 1.0], delay: 0.4 },
        }}
      >
        <div className="grid xl:grid-cols-2 py-8 px-4 absolute w-full">
          <div className="xl:col-start-2">
            <H1 className="font-bold max-w-[16ch]">Builds result-driven web applications</H1>
            <Button className="w-44 h-10 mt-9 rounded-full" asChild>
              <TransitionLink href={'/work'}>
                <span className="sr-only">Work</span>
                <ArrowRight className="size-6" strokeLinejoin="miter" strokeLinecap="square" />
              </TransitionLink>
            </Button>
          </div>
        </div>
        <Image
          src="/images/hero-bg.png"
          alt="Hero section image"
          width={3840}
          height={2160}
          priority
          className="-z-1 min-h-210 object-cover w-full hidden md:block"
        />
        <Image
          src="/images/hero-bg-mobile.png"
          alt="Hero section image"
          width={2160}
          height={2160}
          priority
          className="-z-1 min-h-210 object-cover w-full block md:hidden"
        />
      </motion.main>
      <Footer navigation={{ name: 'About', path: '/about' }} />
    </>
  );
}
