'use client';

import { animate, inView } from 'motion/react';
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

export default function FeedGrid() {
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
          className="target-card"
          key={item.id}
          style={{
            aspectRatio: item.aspectRatio,
            borderRadius: 12,
            background: '#e5e7eb',
            padding: 16,
            opacity: 0,
            transform: 'translateY(20px)',
          }}
        >
          <h3>{item.title}</h3>
        </div>
      ))}
    </MasonryLayout>
  );
}
