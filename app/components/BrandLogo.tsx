'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface BrandLogoProps {
  variant?: 'splash' | 'header';
  layoutId?: string;
  onClick?: () => void;
}

export default function BrandLogo({ variant = 'header', layoutId, onClick }: BrandLogoProps) {
  const isSplash = variant === 'splash';
  
  return (
    <motion.div 
      layoutId={layoutId}
      className={`flex items-center gap-4 ${onClick ? 'cursor-pointer group' : ''}`}
      onClick={onClick}
    >
      {/* Logo */}
      <motion.div 
        className={`relative transition-all duration-300 ${
          isSplash 
            ? 'w-24 h-24 md:w-32 md:h-32' 
            : 'w-16 h-16 hover:scale-110 hover:shadow-xl hover:shadow-carrillo-blue/40'
        }`}
      >
        <Image 
          src="/logo-carrillo.jpg" 
          alt="Carrillo Abogados" 
          width={isSplash ? 128 : 64}
          height={isSplash ? 128 : 64}
          className="rounded-2xl object-cover shadow-lg shadow-carrillo-blue/20"
          priority
        />
      </motion.div>

      {/* Nombre y Subtítulo */}
      <motion.div>
        <motion.div 
          className={`font-black bg-gradient-to-r from-white via-carrillo-blue-light to-white bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] ${
            isSplash 
              ? 'text-3xl md:text-4xl' 
              : 'text-2xl group-hover:scale-105 transition-transform'
          }`}
        >
          Carrillo Abogados
        </motion.div>
        <motion.div 
          className={`text-carrillo-blue-light font-semibold tracking-wider ${
            isSplash ? 'text-sm md:text-base' : 'text-xs'
          }`}
        >
          Excelencia Legal Digital
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
