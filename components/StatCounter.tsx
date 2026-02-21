'use client';
import { useEffect, useState } from 'react';

interface StatCounterProps {
  title: string;
  value: number;
  suffix?: string;
}

export default function StatCounter({ title, value, suffix = '' }: StatCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      start = Math.floor(progress * value);
      setCount(start);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [value]);

  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-white md:text-4xl">
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-sm uppercase tracking-wide text-white/60">{title}</p>
    </div>
  );
}
