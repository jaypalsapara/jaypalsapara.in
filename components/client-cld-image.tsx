'use client';

import { motion } from 'motion/react';
import { CldImage } from 'next-cloudinary';

export const ClientCldImage = CldImage;
export const MotionClientCldImage = motion.create(CldImage);
