'use client';

import { cn } from '@/lib/utils';
import { FeedsProps } from '@/types/table';
import { animate, inView } from 'motion/react';
import Image from 'next/image';
import MasonryLayout from '../masonry-layout';

export default function FeedGrid({ items }: { items: FeedsProps[] }) {
  return (
    <MasonryLayout
      id={'container'}
      container="window"
      gap={4}
      breakpoints={{
        0: {
          columns: 1,
        },
        768: {
          columns: 2,
        },
        1280: {
          columns: 3,
        },
        1536: {
          columns: 4,
        },
      }}
      onReady={() => {
        inView(`#container`, (element) => {
          animate(
            element,
            { opacity: 1, y: 0 },
            {
              delay: 0.3,
              onComplete: () => {
                inView(`#container .target-card`, (element) => {
                  animate(element, { opacity: 1, y: 0 });
                });
              },
            },
          );
        });
      }}
    >
      {items.map((item) => (
        <div
          className="target-card rounded-xl overflow-hidden pile bg-muted border border-border/10"
          key={item.id}
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
          }}
        >
          <Image
            src={`/images/feeds/${item.image.name}`}
            alt={item.name}
            width={item.image.resolution.w}
            height={item.image.resolution.h}
            loading="lazy"
          />
          <div
            className={cn('flex self-end w-full p-3 items-center justify-between', {
              'text-white': item.image?.color === 'white',
              'text-black': item.image?.color === 'black',
            })}
          >
            <p className={'text-xs font-semibold'}>{item.name}</p>
            {item.date && <p className={'text-xs opacity-50 font-medium'}>{item.date.getFullYear()}</p>}
          </div>
        </div>
      ))}
    </MasonryLayout>
  );
}
