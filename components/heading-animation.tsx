'use client';

import { motion, stagger, Variants } from 'motion/react';
import { ComponentProps, PropsWithChildren } from 'react';

const headingParent: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: stagger(0.075, { startDelay: 0 }),
    },
  },
};

const headingChild: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const HeadingParent = ({ children }: PropsWithChildren) => {
  return (
    <motion.span variants={headingParent} initial="hidden" animate="visible">
      {children}
    </motion.span>
  );
};

export const HeadingChild = ({ children, ...props }: PropsWithChildren & ComponentProps<typeof motion.span>) => {
  return (
    <motion.span variants={headingChild} style={{ display: 'inline-block', marginRight: '0.16em' }} {...props}>
      {children}
    </motion.span>
  );
};
