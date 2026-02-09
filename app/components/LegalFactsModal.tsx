'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Scale, Globe, ShieldCheck, ChevronRight, X, Sparkles } from 'lucide-react';

interface LegalFactsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const legalFacts = [
  {
    icon: Globe,
    title: 'Alcance Global',
    fact: 'El Sistema de Madrid permite proteger tu marca en más de 120 países con una sola solicitud. En Carrillo Abogados, eliminamos fronteras para tu propiedad intelectual.',
    gradient: 'from-blue-600 to-indigo-900',
    stat: '120+ Países',
    accent: 'border-blue-500/30'
  },
  {
    icon: ShieldCheck,
    title: 'Blindaje de Diseño',
    fact: 'Un diseño industrial puede ser tu activo más valioso. En Colombia la protección inicial es de 10 años, asegurando que tu estética única siga siendo exclusivamente tuya.',
    gradient: 'from-emerald-600 to-teal-900',
    stat: '10 Años',
    accent: 'border-emerald-500/30'
  },
  {
    icon: Lightbulb,
    title: 'Valor de Marca',
    fact: 'La primera marca del mundo (1876) sigue vigente hoy. Una marca bien gestionada no es un gasto, es una inversión que crece en valor exponencialmente con el tiempo.',
    gradient: 'from-amber-600 to-orange-900',
    stat: 'Activo #1',
    accent: 'border-amber-500/30'
  },
  {
    icon: Scale,
    title: 'Impacto Digital',
    fact: 'Las empresas legalmente constituidas y con marcas registradas tienen un 60% más de probabilidad de éxito en rondas de inversión y marketplaces digitales.',
    gradient: 'from-purple-600 to-violet-900',
    stat: '+60% Éxito',
    accent: 'border-purple-500/30'
  }
];

export default function LegalFactsModal({ isOpen, onClose }: LegalFactsModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(Math.floor(Math.random() * legalFacts.length));
    }
  }, [isOpen]);

  const nextFact = () => {
    setCurrentIndex((prev) => (prev + 1) % legalFacts.length);
  };

  const currentFact = legalFacts[currentIndex];
  const Icon = currentFact.icon;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* 1. Backdrop Enhancements - High Contrast Blur */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#020205]/60 backdrop-blur-md transition-all"
          />

          {/* 2. Premium Card Container - High Readability */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 30, rotateX: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden group"
          >
             {/* Card Structure */}
             <div className="relative bg-[#0A0F1E] rounded-[2rem] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] overflow-hidden">
                
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-15 mix-blend-overlay pointer-events-none" />
                
                {/* Dynamic Gradient Orb behind content */}
                <motion.div 
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.25, scale: 1.2 }}
                  transition={{ duration: 1 }}
                  className={`absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br ${currentFact.gradient} rounded-full blur-[100px]`} 
                />

                {/* --- Content Body --- */}
                <div className="relative p-8 md:p-12 flex flex-col items-center text-center z-10">
                  
                  {/* Close Button UI */}
                  <button 
                    onClick={onClose}
                    className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-colors z-20"
                    aria-label="Cerrar modal"
                  >
                    <X size={20} />
                  </button>

                  {/* Header Decoration */}
                  <div className="mb-8 flex flex-col items-center">
                    <motion.div 
                       initial={{ opacity: 0, y: -20 }} 
                       animate={{ opacity: 1, y: 0 }}
                       className="flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-white/5 border border-white/5"
                    >
                      <Sparkles size={12} className="text-yellow-400" />
                      <span className="text-[10px] font-bold text-white/60 tracking-widest uppercase">
                        Sabías Que
                      </span>
                    </motion.div>

                    {/* Main Icon with Glow Ring */}
                    <motion.div 
                      key={`icon-${currentIndex}`}
                      initial={{ scale: 0.5, opacity: 0, rotate: -30 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="relative"
                    >
                      <div className={`p-6 rounded-2xl bg-gradient-to-br ${currentFact.gradient} shadow-2xl ring-1 ring-white/20 relative z-10`}>
                        <Icon size={48} className="text-white drop-shadow-md" strokeWidth={1.5} />
                      </div>
                      
                      {/* Stat Bubble */}
                      <motion.div 
                        initial={{ scale: 0, x: -20 }}
                        animate={{ scale: 1, x: 0 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="absolute -bottom-3 -right-6 px-3 py-1.5 bg-[#050B14] border border-carrillo-blue-light/30 rounded-lg shadow-lg z-20"
                      >
                         <span className="text-xs font-bold text-white bg-clip-text bg-gradient-to-r from-white to-gray-400">
                           {currentFact.stat}
                         </span>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Text Block - High Contrast Container */}
                  <motion.div
                    key={`text-${currentIndex}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-4 mb-10 w-full"
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                      {currentFact.title}
                    </h3>
                    
                    {/* Darker box for text readability */}
                    <div className="p-4 rounded-xl bg-black/20 border border-white/5">
                        <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">
                        {currentFact.fact}
                        </p>
                    </div>
                  </motion.div>

                  {/* Enhanced Navigation */}
                  <div className="w-full flex items-center justify-between border-t border-white/5 pt-6">
                    <div className="flex gap-1">
                      {legalFacts.map((_, idx) => (
                        <div 
                          key={idx}
                          className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-carrillo-blue-light' : 'w-1.5 bg-white/20'}`}
                        />
                      ))}
                    </div>

                    <button 
                      onClick={nextFact}
                      className="group relative px-6 py-2.5 rounded-lg bg-white text-black font-bold text-sm tracking-wide overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Siguiente <ChevronRight size={14} />
                      </span>
                    </button>
                  </div>

                </div>
             </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
