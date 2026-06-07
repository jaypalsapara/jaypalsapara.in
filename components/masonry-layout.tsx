'use client';

import { Children, ComponentProps, ReactNode, useEffect, useMemo, useRef, useState } from 'react';

type MasonryLayoutProps = {
  children: ReactNode;
  columnWidth?: number;
  gap?: number;
  breakpoints?: Record<number, MasonryLayoutBreakpointsProps>;
  container?: 'parent' | 'window';
  onReady?: () => void;
};

type MasonryLayoutBreakpointsProps = {
  columns: number;
  gap?: number;
};

export default function MasonryLayout({
  children,
  breakpoints,
  columnWidth = 320,
  gap = 16,
  container = 'parent',
  onReady,
  ...props
}: MasonryLayoutProps & ComponentProps<'div'>) {
  const items = Children.toArray(children);

  const measureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [heights, setHeights] = useState<number[]>([]);
  const [columnCount, setColumnCount] = useState<number>(0);
  const [gutter, setGutter] = useState<number>(gap);

  useEffect(() => {
    const targetContainer = container === 'window' ? document.body : containerRef.current;

    const updateHeights = () => {
      setHeights(measureRefs.current.map((el) => el?.getBoundingClientRect().height ?? 0));
    };

    const updateColumnCount = () => {
      if (targetContainer) {
        if (breakpoints) {
          const bp = getBreakpointConfig(targetContainer.clientWidth, breakpoints);

          setColumnCount(bp?.columns || 1);

          setGutter(bp?.gap || gap);
        } else {
          setColumnCount(Math.max(1, Math.floor(targetContainer.clientWidth / columnWidth)));
        }
      }
    };

    updateHeights();

    updateColumnCount();

    const observer = new ResizeObserver(updateColumnCount);

    if (targetContainer) {
      observer.observe(targetContainer);
    }

    return () => observer.disconnect();
  }, [items.length, columnWidth, breakpoints, container, gap]);

  const masonryColumns = useMemo(() => {
    if (columnCount < 1) return;
    const cols = Array.from({ length: columnCount }, () => ({
      height: 0,
      items: [] as { node: ReactNode; index: number }[],
    }));

    items.forEach((item, index) => {
      const shortest = cols.reduce((a, b) => (a.height <= b.height ? a : b));

      shortest.items.push({
        node: item,
        index,
      });

      shortest.height += (heights[index] ?? 0) + gap;
    });

    return cols;
  }, [items, heights, columnCount, gap]);

  useEffect(() => {
    if (masonryColumns?.length) {
      onReady?.();
    }
  }, [masonryColumns, onReady]);

  return (
    <>
      {/* Hidden measurement layer */}
      {heights.length === 0 && (
        <div
          style={{
            position: 'absolute',
            visibility: 'hidden',
            pointerEvents: 'none',
            width: columnWidth,
            top: 0,
            left: 0,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                measureRefs.current[index] = el;
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}

      {/* Masonry */}
      <div
        ref={containerRef}
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columnCount}, minmax(0,1fr))`,
          gap: gutter,
        }}
        {...props}
      >
        {masonryColumns?.map((column, columnIndex) => (
          <div
            key={columnIndex}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: gutter,
            }}
          >
            {column.items.map((item) => (
              <div key={item.index}>{item.node}</div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

const getBreakpointConfig = (width: number, breakpoints?: Record<number, MasonryLayoutBreakpointsProps>) => {
  if (!breakpoints) return null;

  const matched = Object.entries(breakpoints)
    .map(([key, value]) => ({
      minWidth: Number(key),
      ...value,
    }))
    .sort((a, b) => a.minWidth - b.minWidth)
    .filter((bp) => width >= bp.minWidth)
    .pop();

  return matched ?? null;
};
