'use client';

import { motion } from 'framer-motion';
import BrandLogo from './BrandLogo';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-auto"
    >
      {/* Overlay con blur */}
      <motion.div 
        initial={{ backdropFilter: 'blur(0px)' }}
        animate={{ backdropFilter: 'blur(12px)' }}
        exit={{ backdropFilter: 'blur(0px)' }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-black/60"
      />

      {/* Cuadro de bienvenida que entra volando */}
      <motion.div
        initial={{ x: '-100vw', opacity: 0, scale: 0.8, rotate: -15 }}
        animate={{ 
          x: 0, 
          opacity: 1, 
          scale: 1, 
          rotate: 0,
          transition: {
            type: 'spring',
            damping: 20,
            stiffness: 100,
            duration: 1.2
          }
        }}
        className="relative z-10 max-w-2xl mx-4 bg-gradient-to-br from-[#000000] via-[#66728D] to-[#51679C] rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
      >
        {/* Contenido del cuadro */}
        <div className="p-8 md:p-12">
          {/* Logo y título unificado con layoutId para animación */}
          <div className="flex justify-center mb-8">
            <BrandLogo variant="splash" layoutId="brand-logo" />
          </div>

          {/* Mensaje de bienvenida */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center space-y-4 mb-8"
          >
            <div className="inline-block p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4">
              <span className="text-5xl animate-bounce-slow">👋</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-white">
              ¡Bienvenido!
            </h2>
            
            <p className="text-lg text-carrillo-blue-light leading-relaxed max-w-md mx-auto">
              Estás a punto de descubrir la plataforma legal más innovadora de Colombia
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-carrillo-gray">
              <div className="w-2 h-2 rounded-full bg-carrillo-blue-light animate-pulse"></div>
              <span>23 años de excelencia transformándose en digital</span>
            </div>
          </motion.div>

          {/* Botón para continuar */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onComplete}
            className="w-full py-4 px-8 bg-gradient-to-r from-carrillo-blue-light to-carrillo-blue-dark rounded-full text-white font-bold text-lg shadow-lg hover:shadow-carrillo-blue/50 transition-all relative overflow-hidden group"
          >
            {/* Efecto shimmer en el botón */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            <span className="relative flex items-center justify-center gap-3">
              <span>Explorar Ahora</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </span>
          </motion.button>

          {/* Texto secundario */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center text-xs text-carrillo-gray mt-4"
          >
            Lanzamiento: Marzo 2026
          </motion.p>
        </div>

        {/* Decoración: efecto de brillo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-carrillo-blue-light/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-carrillo-blue-dark/20 rounded-full blur-3xl -z-10" />
      </motion.div>
    </motion.div>
  );
}
