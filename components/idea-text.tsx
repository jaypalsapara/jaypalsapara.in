'use client';

import ClientCldImage from '@/components/client-cld-image';
import { motion, useScroll, useTransform } from 'motion/react';

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
        <ClientCldImage
          src={'/images/cloud.png'}
          width={256}
          height={256}
          alt="Cloud"
          priority
          className="drop-shadow-xl"
          data-bg-placeholder="false"
        />
      </motion.div>
    </div>
  );
};
