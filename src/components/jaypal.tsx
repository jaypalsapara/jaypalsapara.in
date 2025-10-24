import { useEffect, useRef } from 'react';
import SVG from './svg';

export default function Jaypal() {
  const jaypalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const controller = new AbortController();
    if (jaypalRef.current) {
      jaypalRef.current.addEventListener(
        'mousemove',
        function (e) {
          const spotlight = {
            x: e.clientX - this.getBoundingClientRect().left,
            y: e.clientY - this.getBoundingClientRect().top,
          };

          this.style.maskImage = `radial-gradient(circle at ${spotlight.x}px ${spotlight.y}px, black 0%, transparent 300px)`;
        },
        { signal: controller.signal },
      );
    }
    return () => controller.abort();
  }, []);
  return (
    <div className="grid grid-cols-1 grid-rows-1">
      <div className="z-10 flex aspect-[28.5/7] items-start overflow-hidden opacity-100 [grid-area:1/1] dark:opacity-100" ref={jaypalRef} style={{maskImage:`radial-gradient(circle at 0px 0px, black 0%, transparent 300px)`}}>
        <SVG src="/images/jaypal.svg" />
      </div>
      <div className="flex aspect-[28.5/7] items-start overflow-hidden opacity-70 [grid-area:1/1] dark:opacity-10">
        <SVG src="/images/jaypal.svg" />
      </div>
    </div>
  );
}
