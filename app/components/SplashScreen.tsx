'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import BrandLogo from './BrandLogo';

interface SplashScreenProps {
  onComplete: () => void;
}

// Generar partículas aleatorias para el fondo
const particleCount = 20;
const particles = Array.from({ length: particleCount }).map((_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  duration: Math.random() * 20 + 10,
}));

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [stage, setStage] = useState<'initial' | 'reveal' | 'holding' | 'exit'>('initial');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Secuencia de tiempo
    const timings = [
      setTimeout(() => setStage('reveal'), 500),
      setTimeout(() => setStage('holding'), 2000),
      setTimeout(() => setStage('exit'), 4500),
      setTimeout(onComplete, 5500),
    ];

    // Barra de progreso simulada
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Velocidad variable para realismo
        const increment = Math.random() * 5; 
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => {
      timings.forEach(clearTimeout);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  // Variantes de texto
  const letterContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.5,
      },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
  };

  const letterItem = {
    hidden: { y: 20, opacity: 0, filter: 'blur(10px)' },
    show: { y: 0, opacity: 1, filter: 'blur(0px)' },
  };

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020205] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      {/* --- CINEMATIC BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        {/* Nebulosa azul profunda */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-carrillo-blue-dark/30 rounded-full blur-[120px]" 
        />
        {/* Nebulosa cian acento */}
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, -50, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-carrillo-blue/20 rounded-full blur-[100px]" 
        />
        
        {/* Partículas flotantes sutiles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white/30"
            style={{ 
              left: `${p.x}%`, 
              top: `${p.y}%`, 
              width: p.size, 
              height: p.size 
            }}
            animate={{ 
              y: [0, -100, 0], 
              opacity: [0, 1, 0] 
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 5 
            }}
          />
        ))}

        {/* Textura de ruido overlay */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
        
        {/* Viñeta cinematográfica */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020205_90%)]" />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl px-4">
        
        {/* 1. Logo Sequence */}
        <motion.div
           layoutId="brand-logo"
           initial={{ scale: 0.8, opacity: 0, filter: 'blur(20px)' }}
           animate={{ 
             scale: stage === 'exit' ? 0.9 : 1.3, // Mantiene presencia
             opacity: stage === 'exit' ? 0 : 1, 
             filter: 'blur(0px)',
             y: stage === 'exit' ? -100 : 0
           }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="mb-12 relative"
        >
          {/* Efecto de fulgor detrás del logo */}
          <div className="absolute inset-0 bg-carrillo-blue-light/50 blur-3xl opacity-20 animate-pulse-slow" />
          <BrandLogo variant="splash" hideText={true} />
        </motion.div>

        {/* 2. Typography Reveal - Staggered Letters */}
        <div className="h-24 md:h-32 flex flex-col justify-center items-center overflow-hidden">
          <AnimatePresence mode="wait">
            {stage !== 'exit' && (
              <motion.div
                variants={letterContainer}
                initial="hidden"
                animate="show"
                exit="exit"
                className="flex flex-col items-center gap-4"
              >
                <div className="flex overflow-hidden">
                  {Array.from("CARRILLO ABOGADOS").map((char, i) => (
                    <motion.span
                      key={i}
                      variants={letterItem}
                      className={`text-3xl md:text-6xl font-black text-white tracking-wider ${char === " " ? "w-4" : ""}`}
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>

                <motion.div 
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "100%", opacity: 1 }}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="h-[1px] bg-gradient-to-r from-transparent via-carrillo-blue-light to-transparent w-full max-w-md"
                />
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-carrillo-gray text-sm md:text-base tracking-[0.2em] font-light uppercase">
                    Firma Legal Digital
                  </span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 3. Progress Bar & Loading Stats */}
        <motion.div 
          className="absolute bottom-10 md:bottom-20 w-full max-w-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: stage === 'exit' ? 0 : 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="flex justify-between text-[10px] text-carrillo-gray font-mono mb-2 uppercase tracking-widest">
            <span>Cargando Experiencia</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-carrillo-blue to-carrillo-blue-light shadow-[0_0_15px_rgba(56,189,248,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}

