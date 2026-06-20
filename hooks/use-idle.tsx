'use client';

import { useEffect, useState } from 'react';

export function useIdle(timeout = 1000) {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const resetTimer = () => {
      setIsIdle(false);

      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsIdle(true);
      }, timeout);
    };

    const events = ['mousemove', 'mousedown', 'keydown', 'scroll', 'touchstart'];

    events.forEach((event) => window.addEventListener(event, resetTimer));

    resetTimer();

    return () => {
      clearTimeout(timer);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, [timeout]);

  return isIdle;
}
