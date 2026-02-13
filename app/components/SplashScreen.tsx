'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import BrandLogo from './BrandLogo';

interface SplashScreenProps {
  onComplete: () => void;
}

// Interfaz para partículas estables
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [stage, setStage] = useState<'initial' | 'reveal' | 'holding' | 'exit'>('initial');
  const [particles, setParticles] = useState<Particle[]>([]);

  // 1. Solución al error de hidratación: Generar partículas solo en cliente
  useEffect(() => {
    const generatedParticles = Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1, // Tamaño variado entre 1px y 4px
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 2
    }));
    setParticles(generatedParticles);
  }, []);

  // 2. Secuencia Maestra de Tiempo - Ajustada para mayor impacto
  useEffect(() => {
    const timings = [
      setTimeout(() => setStage('reveal'), 800),     // Inicio del reveal
      setTimeout(() => setStage('holding'), 3200),   // Momento de contemplación
      setTimeout(() => setStage('exit'), 5500),      // Inicio de transición de salida
      setTimeout(onComplete, 6500),                  // Desmontaje total
    ];

    return () => timings.forEach(clearTimeout);
  }, [onComplete]);

  // Variantes para animación de letras
  const letterContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.5,
      },
    },
    exit: { 
      opacity: 0, 
      filter: 'blur(10px)',
      transition: { duration: 0.8 } 
    }
  };

  const letterItem = {
    hidden: { y: 40, opacity: 0, filter: 'blur(12px)' },
    show: { 
      y: 0, 
      opacity: 1, 
      filter: 'blur(0px)',
      transition: { 
        type: "spring" as const, 
        damping: 12, 
        stiffness: 100 
      } 
    },
  };

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020205] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, pointerEvents: 'none', transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }}
    >
      {/* --- CINEMATIC BACKGROUND (Atmósfera) --- */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Nebulosa Principal - Azul Profundo */}
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-carrillo-blue-dark/40 rounded-full blur-[150px]" 
        />
        
        {/* Nebulosa Acento - Cian/Teal más brillante a la derecha */}
        <motion.div 
          animate={{ 
            x: [0, 30, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[-5%] w-[60vw] h-[60vw] bg-carrillo-blue/30 rounded-full blur-[120px]" 
        />
        
        {/* Renderizado de Partículas con coordenadas estables */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white/40 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            style={{ 
              left: `${p.x}%`, 
              top: `${p.y}%`, 
              width: p.size, 
              height: p.size 
            }}
            animate={{ 
              y: [0, -120, 0], 
              opacity: [0, 0.8, 0] 
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity, 
              ease: "linear",
              delay: p.delay 
            }}
          />
        ))}

        {/* Textura Granulada para realismo de cine */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
        
        {/* Viñeta dramática */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020205_100%)]" />
      </div>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-4">
        
        {/* 1. Logotipo Iconográfico - Presencia Central */}
        <motion.div
           layoutId="brand-logo" // Conexión fluida con el header
           initial={{ scale: 0.5, opacity: 0, filter: 'blur(20px)' }}
           animate={{ 
             scale: stage === 'exit' ? 0.9 : 1.2, 
             opacity: stage === 'exit' ? 0 : 1, 
             filter: 'blur(0px)',
             y: stage === 'exit' ? -50 : 0
           }}
           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
           className="mb-14 relative"
        >
          {/* Resplandor divino detrás del logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-carrillo-blue-light/20 blur-[60px] rounded-full" />
          <BrandLogo variant="splash" hideText={true} />
        </motion.div>

        {/* 2. Tipografía Cinematic - "CARRILLO ABOGADOS" */}
        <div className="h-32 md:h-40 flex flex-col justify-start items-center overflow-visible">
          <AnimatePresence mode="wait">
            {stage !== 'exit' && (
              <motion.div
                variants={letterContainer}
                initial="hidden"
                animate="show"
                exit="exit"
                className="flex flex-col items-center gap-6"
              >
                {/* Título Principal */}
                <div className="flex flex-wrap justify-center overflow-hidden gap-x-[0.5em] md:gap-x-[0.2em]">
                  {Array.from("CARRILLO ABOGADOS").map((char, i) => (
                    <motion.span
                      key={i}
                      variants={letterItem}
                      className={`text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 tracking-wider ${char === " " ? "w-4 md:w-8" : ""}`}
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>

                {/* Línea Divisoria Elegante */}
                <motion.div 
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1.2, ease: "circOut" }}
                  className="h-[1px] bg-gradient-to-r from-transparent via-carrillo-blue-light/80 to-transparent w-full max-w-lg shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                />
                
                {/* Slogan Corporativo */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2, duration: 1 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-carrillo-gray/80 text-sm md:text-lg tracking-[0.3em] font-light uppercase">
                    Firma Legal Digital
                  </span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 3. Footer de Bienvenida - Reemplazo de "Cargando" */}
        <motion.div 
          className="absolute bottom-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: stage === 'exit' ? 0 : 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <motion.div 
             animate={{ opacity: [0.4, 1, 0.4] }}
             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             className="text-white/30 text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] mb-2"
          >
            Estableciendo Conexión Segura
          </motion.div>
          {/* Indicador visual minimalista */}
          <div className="flex justify-center gap-1">
             <motion.div className="w-1 h-1 bg-carrillo-blue-light rounded-full" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} />
             <motion.div className="w-1 h-1 bg-carrillo-blue-light rounded-full" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} />
             <motion.div className="w-1 h-1 bg-carrillo-blue-light rounded-full" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} />
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}

