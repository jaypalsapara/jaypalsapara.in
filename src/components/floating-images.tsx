import '@/styles/floating-images.css';
import { useEffect, useRef } from 'react';
import NDALockLabel from './nda-lock-label';

export type FloatingThumbnails = {
  path: string;
  is_lock: boolean;
};

const FloatingImages = ({ thumbnails }: { thumbnails: FloatingThumbnails[] }) => {
  const floating = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!floating.current) return;
    const controller = new AbortController();
    let mouseX = 0;
    let mouseY = 0;
    // Mousemove Event
    window.addEventListener(
      'mousemove',
      function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
      },
      { signal: controller.signal },
    );

    function animate() {
      floating.current?.style.setProperty('--x', mouseX + 'px');
      floating.current?.style.setProperty('--y', mouseY + 'px');
      requestAnimationFrame(animate);
    }
    animate();
    // Clean up
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!floating.current) return;
    const controller = new AbortController();
    const floatingTrigger = [...(floating.current?.parentElement?.querySelectorAll(`.floating-trigger`) ?? [])];
    if (!floatingTrigger?.length) return;
    const count = floatingTrigger?.length;
    const wrapper = document.querySelector('.floating-image-wrapper') as HTMLDivElement;
    floatingTrigger.forEach((child, index) => {
      child.addEventListener(
        'mouseenter',
        function () {
          if (wrapper) wrapper.style.transform = `translateY(${(index * 100) / (count * -1)}%)`;
        },
        { signal: controller.signal },
      );
    });
    // Clean up
    return () => controller.abort();
  }, []);

  return (
    <div
      className="bg-secondary-foreground pointer-events-none fixed top-0 left-0 z-50 aspect-video w-80 scale-0 overflow-hidden rounded-sm transition-transform will-change-transform peer-hover:scale-100 md:w-lg lg:w-xl"
      id="floater"
      ref={floating}
      aria-hidden="true"
    >
      <div className="floating-image-wrapper flex w-full shrink-0 flex-col bg-muted transition-transform duration-300 ease-in-out will-change-transform">
        {thumbnails.map((thumbnail, index) => (
          <span
            key={`floating-child-${index}`}
            id={`floating-child-${index}`}
            className={`relative grid aspect-video w-full shrink-0 place-content-center text-5xl text-white`}
          >
            {thumbnail.is_lock && <NDALockLabel />}

            <img src={thumbnail.path} alt="" className="h-full w-full object-cover" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default FloatingImages;
