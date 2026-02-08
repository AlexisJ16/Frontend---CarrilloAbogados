'use client';

import { useState, useEffect } from 'react';

interface LegalFactsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const legalFacts = [
  {
    icon: '⚖️',
    title: 'Protección Internacional',
    fact: 'Una marca registrada en Colombia puede extenderse a más de 120 países usando el Sistema de Madrid, sin necesidad de registros individuales en cada país.',
    color: 'from-carrillo-blue-light to-carrillo-blue-dark'
  },
  {
    icon: '🎯',
    title: 'Tiempo de Protección',
    fact: 'Una patente en Colombia protege tu invención por 20 años, mientras que un diseño industrial puede protegerse hasta por 10 años renovables.',
    color: 'from-[#9DA8C5] to-carrillo-blue-light'
  },
  {
    icon: '💡',
    title: 'Primera Marca Registrada',
    fact: 'La primera marca registrada del mundo fue el triángulo rojo de la cerveza Bass en 1876 en Reino Unido. Hoy protege miles de millones en valor de marca.',
    color: 'from-carrillo-blue-dark to-[#66728D]'
  },
  {
    icon: '🚀',
    title: 'Transformación Digital',
    fact: 'En Colombia, el 60% de las empresas que registran su marca digitalmente aumentan sus ventas en el primer año, según la Superintendencia de Industria y Comercio.',
    color: 'from-[#51679C] to-carrillo-blue-light'
  }
];

export default function LegalFactsModal({ isOpen, onClose }: LegalFactsModalProps) {
  const [currentFact, setCurrentFact] = useState(0);

  // Cambiar dato curioso automáticamente cada 5 segundos
  useEffect(() => {
    if (!isOpen) return;
    
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % legalFacts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isOpen]);

  // Reset al abrir
  useEffect(() => {
    if (isOpen) {
      setCurrentFact(Math.floor(Math.random() * legalFacts.length)); // Dato aleatorio al abrir
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const fact = legalFacts[currentFact];

  return (
    <>
      {/* Overlay con blur */}
      <div 
        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
        <div 
          className="pointer-events-auto max-w-2xl w-full bg-gradient-to-br from-[#000000] via-[#66728D] to-[#51679C] rounded-3xl shadow-2xl border border-white/20 overflow-hidden animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative p-8 pb-6">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all hover:scale-110 group"
            >
              <span className="text-white text-2xl group-hover:rotate-90 transition-transform">×</span>
            </button>

            <div className="text-center">
              <div className="inline-block mb-4">
                <div className={`text-6xl p-4 rounded-2xl bg-gradient-to-br ${fact.color} shadow-lg animate-bounce-slow`}>
                  {fact.icon}
                </div>
              </div>
              
              <h3 className="text-3xl font-black text-white mb-2">
                ¿Sabías que...?
              </h3>
              <p className="text-carrillo-blue-light text-sm font-semibold">
                Dato Curioso Legal {currentFact + 1} de {legalFacts.length}
              </p>
            </div>
          </div>

          {/* Contenido */}
          <div className="px-8 pb-8">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h4 className="text-xl font-bold text-carrillo-blue-light mb-4">
                {fact.title}
              </h4>
              <p className="text-white/90 text-base leading-relaxed">
                {fact.fact}
              </p>
            </div>

            {/* Indicadores de paginación */}
            <div className="flex justify-center gap-2 mt-6">
              {legalFacts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFact(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentFact 
                      ? 'w-8 bg-carrillo-blue-light' 
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Botones de navegación */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setCurrentFact((prev) => (prev - 1 + legalFacts.length) % legalFacts.length)}
                className="flex-1 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition-all hover:scale-105"
              >
                ← Anterior
              </button>
              <button
                onClick={() => setCurrentFact((prev) => (prev + 1) % legalFacts.length)}
                className="flex-1 px-6 py-3 rounded-full bg-gradient-to-r from-carrillo-blue-light to-carrillo-blue-dark hover:shadow-lg hover:shadow-carrillo-blue/50 text-white font-semibold transition-all hover:scale-105"
              >
                Siguiente →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
