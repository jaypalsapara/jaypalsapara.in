import { TZDate } from '@date-fns/tz';
import { useEffect, useRef } from 'react';

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const FooterClock = () => {
  const timeRef = useRef<HTMLLIElement | null>(null);
  const dayRef = useRef<HTMLLIElement | null>(null);
  const clockRef = useRef<number | null>(null);
  useEffect(() => {
    const updateClock = () => {
      const now = TZDate.tz('Asia/Kolkata');
      if (timeRef.current) timeRef.current.textContent = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')} (IST)`;
      if (dayRef.current) dayRef.current.textContent = `${dayNames[now.getDay()]}`;
    };

    clockRef.current = setInterval(updateClock, 1000);

    updateClock();

    return () => {
      if (clockRef.current) clearInterval(clockRef.current);
    };
  }, []);
  return (
    <>
      <li ref={dayRef} className="font-medium text-foreground"></li>
      <li ref={timeRef}></li>
    </>
  );
};

export default FooterClock;
