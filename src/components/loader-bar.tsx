import { useCallback, useEffect, useRef } from 'react';
import { useNavigation } from 'react-router';

export default function LoaderBar() {
  const loaderBarRef = useRef<HTMLSpanElement | null>(null);
  const loaderTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const loaderBarValue = useRef(0);
  const navigate = useNavigation();

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

  /**
   * Effect
   */
  useEffect(() => {
    if (navigate.state === 'idle') complete();
    else start();

    return () => {
      clearTimer();
    };
  }, [start, clearTimer, complete, navigate.state]);

  return <span ref={loaderBarRef} className="fixed top-0 left-0 z-999999999 h-0.5 bg-accent"></span>;
}
