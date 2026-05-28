'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

export const IdeaText = () => {
  const { scrollY } = useScroll();
  const { cloudY } = useTransform(
    scrollY,
    [0, 1],
    {
      cloudY: [1, 0.65],
    },
    { clamp: false },
  );
  return (
    <div className="inline-flex relative">
      idea
      <motion.div
        className="absolute -top-6 lg:-top-8 xl:-top-9"
        style={{
          y: cloudY,
        }}
      >
        <Image src={'/images/cloud.png'} width={256} height={256} alt="Cloud" priority className="drop-shadow-xl" />
      </motion.div>
    </div>
  );
};
