'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface BrandLogoProps {
  variant?: 'splash' | 'header';
  layoutId?: string;
  onClick?: () => void;
  hideText?: boolean;
}

export default function BrandLogo({ variant = 'header', layoutId, onClick, hideText = false }: BrandLogoProps) {
  const isSplash = variant === 'splash';
  
  return (
    <motion.div 
      layoutId={layoutId}
      className={`relative flex items-center gap-5 ${onClick ? 'cursor-pointer group' : ''}`}
      onClick={onClick}
    >
      {/* Container Unificado con el efecto hover compartido */}
      <motion.div 
        className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/10 group-hover:border-carrillo-blue-light/30 group-hover:shadow-[0_0_30px_rgba(157,168,197,0.2)] ${
          isSplash 
            ? 'w-24 h-24 md:w-32 md:h-32 p-1' 
            : 'w-14 h-14 p-0.5'
        }`}
      >
        <Image 
          src="/logo-carrillo.jpg" 
          alt="Carrillo Abogados" 
          width={isSplash ? 128 : 64}
          height={isSplash ? 128 : 64}
          className="w-full h-full object-cover rounded-xl"
          priority
        />
      </motion.div>

      {/* Nombre y Subtítulo - Alineación perfecta */}
      {!hideText && (
        <div className="flex flex-col justify-center">
          <motion.span 
            className={`font-black tracking-tight leading-none bg-gradient-to-r from-white via-carrillo-blue-light to-white bg-clip-text text-transparent group-hover:to-carrillo-blue-light transition-all duration-500 ${
              isSplash 
                ? 'text-3xl md:text-5xl mb-2' 
                : 'text-xl md:text-2xl mb-1'
            }`}
          >
            Carrillo Abogados
          </motion.span>
          
          <motion.span 
            className={`text-carrillo-gray font-medium tracking-widest uppercase transition-colors group-hover:text-white ${
              isSplash ? 'text-sm md:text-base' : 'text-[10px] md:text-xs'
            }`}
          >
            Excelencia Legal Digital
          </motion.span>
        </div>
      )}
    </motion.div>
  );
}
