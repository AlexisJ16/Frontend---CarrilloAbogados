'use client';

import { ShieldCheck, Building2, Zap } from 'lucide-react';
import ServiceCard from './ServiceCard';
import CountUp from './CountUp';
import AnimatedSection from './AnimatedSection';

export default function ServicesSection() {
  return (
    <section className="py-20 sm:py-32 px-4 relative" aria-labelledby="services-heading">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16 sm:mb-24">
          <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            Innovación Legal
          </h2>
          <p className="text-base sm:text-lg text-carrillo-gray max-w-2xl mx-auto font-light">
            Redefiniendo la práctica jurídica con tecnología y experiencia
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <ServiceCard
            icon={<ShieldCheck size={40} strokeWidth={1.5} />}
            title="Marcas y Patentes"
            description="Protección de activos intangibles con monitoreo automatizado y alcance global vía Protocolo de Madrid."
            index={0}
          />
          <ServiceCard
            icon={<Building2 size={40} strokeWidth={1.5} />}
            title="Derecho Corporativo"
            description="Estructuración societaria inteligente y gobierno corporativo adaptado a la era digital."
            index={1}
          />
          <ServiceCard
            icon={<Zap size={40} strokeWidth={1.5} />}
            title="Respuesta Inmediata"
            description="Sistema de gestión en tiempo real. Eliminamos la burocracia tradicional para resultados ágiles."
            index={2}
          />
        </div>

        {/* Statistics */}
        <AnimatedSection className="mt-20 sm:mt-32 border-t border-white/10 pt-12" delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <CountUp target="23" label="Años de Experiencia" />
            <CountUp target="15x" label="Crecimiento Digital" />
            <CountUp target="<1m" label="Tiempo de Respuesta" />
            <CountUp target="24/7" label="Disponibilidad" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
