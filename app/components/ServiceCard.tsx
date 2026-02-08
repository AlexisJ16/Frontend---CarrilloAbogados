'use client';

import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: string;
}

export default function ServiceCard({ icon, title, description, delay = '0s' }: ServiceCardProps) {
  return (
    <div 
      className="group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:scale-105 animate-fade-in bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-carrillo-blue-light/50 hover:shadow-2xl hover:shadow-carrillo-blue/20"
      style={{ animationDelay: delay }}
    >
      {/* Efecto de brillo al hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-carrillo-blue-light/0 to-carrillo-blue-dark/0 group-hover:from-carrillo-blue-light/10 group-hover:to-carrillo-blue-dark/10 transition-all duration-500" />
      
      {/* Línea animada superior */}
      <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-carrillo-blue-light to-carrillo-blue-dark group-hover:w-full transition-all duration-700" />
      
      <div className="relative z-10">
        {/* Icono con animación */}
        <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
          {icon}
        </div>
        
        {/* Título */}
        <h3 className="text-2xl font-black text-white mb-4 group-hover:text-carrillo-blue-light transition-colors duration-300">
          {title}
        </h3>
        
        {/* Descripción */}
        <p className="text-carrillo-gray text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
          {description}
        </p>
      </div>
      
      {/* Efecto decorativo esquina */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-carrillo-blue-light/10 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500" />
    </div>
  );
}
