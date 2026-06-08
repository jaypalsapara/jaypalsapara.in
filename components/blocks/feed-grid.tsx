'use client';

import { cn } from '@/lib/utils';
import { FeedsProps } from '@/types/table';
import { animate, inView } from 'motion/react';
import Image from 'next/image';
import MasonryLayout from '../masonry-layout';

const items = [
  { id: 1, title: 'Item 1', aspectRatio: '16 / 9' },
  { id: 2, title: 'Item 2', aspectRatio: '1 / 1' },
  { id: 3, title: 'Item 3', aspectRatio: '9 / 16' },
  { id: 4, title: 'Item 4', aspectRatio: '2 / 1' },
  { id: 5, title: 'Item 5', aspectRatio: '4 / 3' },
  { id: 6, title: 'Item 6', aspectRatio: '16 / 9' },
  { id: 7, title: 'Item 7', aspectRatio: '2 / 1' },
  { id: 8, title: 'Item 8', aspectRatio: '1 / 1' },
  { id: 1, title: 'Item 1', aspectRatio: '16 / 9' },
  { id: 2, title: 'Item 2', aspectRatio: '1 / 1' },
  { id: 3, title: 'Item 3', aspectRatio: '9 / 16' },
  { id: 4, title: 'Item 4', aspectRatio: '2 / 1' },
  { id: 5, title: 'Item 5', aspectRatio: '4 / 3' },
  { id: 6, title: 'Item 6', aspectRatio: '16 / 9' },
  { id: 7, title: 'Item 7', aspectRatio: '2 / 1' },
  { id: 8, title: 'Item 8', aspectRatio: '1 / 1' },
];

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
        1024: {
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
          className="target-card rounded-xl overflow-hidden pile bg-muted"
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
            <p className={'text-sm font-medium'}>{item.name}</p>
            {item.date && <p className={'text-xs opacity-50 font-medium'}>{item.date.getFullYear()}</p>}
          </div>
        </div>
      ))}
    </MasonryLayout>
  );
}
