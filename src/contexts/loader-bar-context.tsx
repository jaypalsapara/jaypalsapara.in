import { randomValue } from '@/constants/utils';
import { createContext, useCallback, useRef, type ReactNode } from 'react';

interface LoaderBarContextProps {
  start: () => void;
  complete: () => void;
}

const LoaderBarContext = createContext<LoaderBarContextProps | undefined>(undefined);

export const LoaderBarContainer = ({ children }: { children: ReactNode }) => {
  const loaderBarRef = useRef<HTMLDivElement | null>(null);
  const loaderTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const loaderStartTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const loaderBarValue = useRef(0);
  const startLoaderDelay = 200;
  const intervalLoader = 1000;
  /**
   * Clear Timer
   */
  const clearTimer = useCallback(() => {
    if (loaderStartTimer.current) {
      clearTimeout(loaderStartTimer.current);
      loaderStartTimer.current = null;
    }
    if (loaderTimer.current) {
      clearInterval(loaderTimer.current);
      loaderTimer.current = null;
    }
  }, []);

  /**
   * Start
   */
  const start = useCallback(() => {
    // Start if it take sometime
    loaderStartTimer.current = setTimeout(() => {
      loaderBarValue.current = 0;
      if (loaderBarRef.current) {
        loaderBarRef.current.style.width = loaderBarValue.current + '%';
        loaderBarRef.current.classList.remove('animate-loader-bar-finish', 'opacity-0');
      }

      // Loader interval
      loaderTimer.current = setInterval(() => {
        const minValue = Math.min(10, (100 - loaderBarValue.current) / 5);
        const maxValue = Math.min(20, (100 - loaderBarValue.current) / 3);
        const random = randomValue(minValue, maxValue);

        loaderBarValue.current += random;

        if (loaderBarValue.current > 95) {
          loaderBarValue.current = 95;
          clearTimer();
        }
        if (loaderBarRef.current) loaderBarRef.current.style.width = loaderBarValue.current + '%';
      }, intervalLoader);
    }, startLoaderDelay);
  }, [clearTimer]);

  /**
   * Complete
   */
  const complete = useCallback(() => {
    clearTimer();
    loaderBarValue.current = 100;
    if (loaderBarRef.current) {
      loaderBarRef.current.style.width = loaderBarValue.current + '%';
      loaderBarRef.current.classList.add('animate-loader-bar-finish');
    }
  }, [clearTimer]);
  return (
    <LoaderBarContext.Provider value={{ start, complete }}>
      <div ref={loaderBarRef} className="fixed top-0 left-0 z-999999999 h-0.5 bg-accent opacity-0 transition-[width] will-change-[width]"></div>
      {children}
    </LoaderBarContext.Provider>
  );
};

export { LoaderBarContext as default };
