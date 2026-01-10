import { createContext, useCallback, useRef, type ReactNode } from 'react';

interface LoaderBarContextProps {
  start: () => void;
  complete: () => void;
}

const LoaderBarContext = createContext<LoaderBarContextProps | undefined>(undefined);

export const LoaderBarContainer = ({ children, props }: { children: ReactNode; props?: unknown }) => {
  const loaderBarRef = useRef<HTMLDivElement | null>(null);
  const loaderTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const loaderBarValue = useRef(0);
  /**
   * Clear Timer
   */
  const clearTimer = useCallback(() => {
    if (loaderTimer.current) {
      clearInterval(loaderTimer.current);
      loaderTimer.current = null;
    }
  }, []);

  /**
   * Start
   */
  const start = useCallback(() => {
    loaderBarValue.current = 0;
    if (loaderBarRef.current) loaderBarRef.current.style.width = loaderBarValue.current + '%';

    loaderTimer.current = setInterval(() => {
      loaderBarValue.current += 20;
      if (loaderBarValue.current > 80) {
        loaderBarValue.current = 80;
        clearTimer();
      }
      if (loaderBarRef.current) loaderBarRef.current.style.width = loaderBarValue.current + '%';
    }, 1000);
  }, [clearTimer]);

  /**
   * Complete
   */
  const complete = useCallback(() => {
    clearTimer();
    loaderBarValue.current = 100;
    if (loaderBarRef.current) loaderBarRef.current.style.width = loaderBarValue.current + '%';
  }, [clearTimer]);
  return (
    <LoaderBarContext.Provider value={{ start, complete }}>
      <div ref={loaderBarRef} className="fixed top-0 left-0 z-999999999 h-0.5 bg-accent"></div>
      {children}
    </LoaderBarContext.Provider>
  );
};

export { LoaderBarContext as default };
