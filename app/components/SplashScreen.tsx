'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import BrandLogo from './BrandLogo';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [stage, setStage] = useState<'initial' | 'reveal' | 'exit'>('initial');

  useEffect(() => {
    const timings = [
      setTimeout(() => setStage('reveal'), 300),
      setTimeout(() => setStage('exit'), 2800),
      setTimeout(onComplete, 3500),
    ];
    return () => timings.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020205] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeOut' } }}
    >
      {/* Background - static gradients, no animated blurs */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-carrillo-blue-dark/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[50vw] h-[50vw] bg-carrillo-blue/20 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020205_100%)]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-4">

        {/* Logo */}
        <motion.div
          layoutId="brand-logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: stage === 'exit' ? 0.9 : 1,
            opacity: stage === 'exit' ? 0 : 1,
            y: stage === 'exit' ? -30 : 0,
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-carrillo-blue-light/15 blur-[50px] rounded-full" />
          <BrandLogo variant="splash" hideText={true} />
        </motion.div>

        {/* Title - simple fade, no per-letter blur */}
        <AnimatePresence mode="wait">
          {stage !== 'exit' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center gap-5"
            >
              <h1 className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 tracking-wider text-center">
                CARRILLO ABOGADOS
              </h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: 'circOut' }}
                className="h-[1px] bg-gradient-to-r from-transparent via-carrillo-blue-light/80 to-transparent w-full max-w-md"
              />

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="text-carrillo-gray/80 text-sm md:text-lg tracking-[0.3em] font-light uppercase"
              >
                Firma Legal Digital
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Connection status - bigger, more visible */}
        <motion.div
          className="absolute bottom-10 sm:bottom-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: stage === 'exit' ? 0 : 1 }}
          transition={{ delay: 1, duration: 0.4 }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <motion.div
              className="w-1.5 h-1.5 bg-carrillo-blue-light rounded-full"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="text-white/50 text-xs sm:text-sm font-medium uppercase tracking-[0.25em]">
              Estableciendo Conexión Segura
            </span>
            <motion.div
              className="w-1.5 h-1.5 bg-carrillo-blue-light rounded-full"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            />
          </div>
          {/* Progress bar */}
          <div className="w-40 sm:w-48 h-[2px] bg-white/10 rounded-full mx-auto overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-carrillo-blue-light to-white/60 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.5, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
