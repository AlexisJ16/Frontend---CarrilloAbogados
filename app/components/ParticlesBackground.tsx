'use client';

import { useEffect, useRef, useCallback } from 'react';

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  const getParticleCount = useCallback(() => {
    if (typeof window === 'undefined') return 40;
    const width = window.innerWidth;
    if (width < 480) return 20;
    if (width < 768) return 30;
    if (width < 1024) return 50;
    return 70;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let dpr = window.devicePixelRatio || 1;
    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;

    function resizeCanvas() {
      if (!canvas) return;
      dpr = window.devicePixelRatio || 1;
      canvasWidth = window.innerWidth;
      canvasHeight = window.innerHeight;
      canvas.width = canvasWidth * dpr;
      canvas.height = canvasHeight * dpr;
      canvas.style.width = `${canvasWidth}px`;
      canvas.style.height = `${canvasHeight}px`;
      ctx!.scale(dpr, dpr);
    }

    resizeCanvas();

    const particleCount = getParticleCount();
    const connectionDistance = canvasWidth < 768 ? 100 : 150;

    // Particle data stored in typed arrays for performance
    const x = new Float32Array(particleCount);
    const y = new Float32Array(particleCount);
    const vx = new Float32Array(particleCount);
    const vy = new Float32Array(particleCount);
    const radius = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      x[i] = Math.random() * canvasWidth;
      y[i] = Math.random() * canvasHeight;
      vx[i] = (Math.random() - 0.5) * 0.4;
      vy[i] = (Math.random() - 0.5) * 0.4;
      radius[i] = Math.random() * 1.5 + 0.5;
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Update and draw particles
      for (let i = 0; i < particleCount; i++) {
        x[i] += vx[i];
        y[i] += vy[i];

        if (x[i] < 0 || x[i] > canvasWidth) vx[i] *= -1;
        if (y[i] < 0 || y[i] > canvasHeight) vy[i] *= -1;

        ctx.beginPath();
        ctx.arc(x[i], y[i], radius[i], 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(157, 168, 197, 0.35)';
        ctx.fill();

        // Draw connections (only check forward to avoid duplicates)
        for (let j = i + 1; j < particleCount; j++) {
          const dx = x[j] - x[i];
          const dy = y[j] - y[i];
          const distSq = dx * dx + dy * dy;
          const connDistSq = connectionDistance * connectionDistance;

          if (distSq < connDistSq) {
            const alpha = 0.12 * (1 - distSq / connDistSq);
            ctx.beginPath();
            ctx.moveTo(x[i], y[i]);
            ctx.lineTo(x[j], y[j]);
            ctx.strokeStyle = `rgba(102, 114, 141, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    }

    animationRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [getParticleCount]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
      aria-hidden="true"
    />
  );
}
