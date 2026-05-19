'use client';

import Footer from '@/components/footer';
import H1 from '@/components/h1';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

export default function Work() {
  const { scrollY } = useScroll();
  const { foregroundY } = useTransform(
    scrollY,
    [0, 1],
    {
      foregroundY: [1, 0.65],
    },
    { clamp: false },
  );
  return (
    <>
      <main className="flex w-full flex-1 flex-col relative">
        <section className="grid lg:grid-cols-2 pt-8 pb-16 lg:pb-24 px-4 w-full">
          <div className="lg:col-start-2">
            <H1 className="font-bold">
              <span className="text-muted-foreground/50">I</span> develop{' '}
              <span className="text-muted-foreground/50">and</span> deploy{' '}
              <span className="text-muted-foreground/50">web and experience from</span>{' '}
              <div className="inline-flex relative">
                idea
                <motion.div
                  className="absolute -top-6 lg:-top-8 xl:-top-9"
                  style={{
                    y: foregroundY,
                  }}
                >
                  <Image src={'/images/cloud.png'} width={256} height={256} alt="Cloud" className="drop-shadow-xl" />
                </motion.div>
              </div>{' '}
              <span className="text-muted-foreground/50 me-1">to</span>
              <div className="inline-flex bg-yellow-300 px-6 items-center justify-center rounded-full">
                <span>final_fixed</span>
              </div>
              product.
            </H1>
          </div>
        </section>
      </main>
      <Footer navigation={{ name: 'About', path: '/about' }} />
    </>
  );
}
