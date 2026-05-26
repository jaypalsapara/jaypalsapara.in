'use client';

import { useEffect, useState } from 'react';

const formatter = new Intl.DateTimeFormat('en-IN', {
  timeZone: 'Asia/Kolkata',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

export default function Clock({ className }: { className?: string }) {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => setTime(formatter.format(new Date()));

    updateTime();

    const timer = setInterval(() => updateTime(), 1000);

    return () => clearInterval(timer);
  }, []);

  return <span className={className}>{time}</span>;
}
