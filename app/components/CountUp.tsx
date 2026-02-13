'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
  target: string;
  label: string;
}

export default function CountUp({ target, label }: CountUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part and suffix
    const match = target.match(/^(\d+)(.*)/);
    if (!match) {
      setDisplay(target);
      return;
    }

    const numericTarget = parseInt(match[1], 10);
    const suffix = match[2]; // e.g., "x", "+", etc.
    const duration = 2000;
    const startTime = performance.now();

    function step(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * numericTarget);
      setDisplay(`${current}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center group cursor-default">
      <div className="text-4xl md:text-5xl font-light text-white mb-2 group-hover:text-carrillo-blue-light transition-colors duration-500">
        {display}
      </div>
      <div className="text-xs uppercase tracking-widest text-carrillo-gray/60 group-hover:text-carrillo-gray transition-colors">
        {label}
      </div>
    </div>
  );
}
