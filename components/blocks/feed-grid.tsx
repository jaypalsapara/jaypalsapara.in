'use client';
import { useMemo } from 'react';

type Item = {
  id: number;
  height: number;
  title: string;
};

const items = [
  { id: 1, height: 300, title: 'Item 1' },
  { id: 2, height: 200, title: 'Item 2' },
  { id: 3, height: 250, title: 'Item 3' },
  { id: 4, height: 180, title: 'Item 4' },
  { id: 5, height: 350, title: 'Item 5' },
  { id: 6, height: 150, title: 'Item 6' },
  { id: 7, height: 220, title: 'Item 7' },
  { id: 8, height: 400, title: 'Item 8' },
];

export default function FeedGrid() {
  const columnCount = 3;
  const gap = 16;
  const columns = useMemo(() => {
    const cols = Array.from({ length: columnCount }, () => ({
      height: 0,
      items: [] as Item[],
    }));

    for (const item of items) {
      const shortestColumn = cols.reduce((a, b) => (a.height <= b.height ? a : b));

      shortestColumn.items.push(item);

      // Add item height to track column size
      shortestColumn.height += item.height + gap;
    }

    return cols;
  }, [items, columnCount, gap]);
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
        gap,
      }}
    >
      {columns.map((column, columnIndex) => (
        <div
          key={columnIndex}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap,
          }}
        >
          {column.items.map((item) => (
            <div
              key={item.id}
              style={{
                height: item.height,
                borderRadius: 12,
                background: '#e5e7eb',
                padding: 16,
              }}
            >
              <h3>{item.title}</h3>
              <p>Height: {item.height}px</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
