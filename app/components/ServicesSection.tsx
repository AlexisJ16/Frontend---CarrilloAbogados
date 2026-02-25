'use client';

import { BadgeCheck, Lightbulb, Landmark, FileSearch } from 'lucide-react';
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
            La abogacía ya no puede ser lenta y reactiva — redefinimos la práctica jurídica con tecnología y 23 años de experiencia
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <ServiceCard
            icon={<BadgeCheck size={40} strokeWidth={1.5} />}
            title="Registro de Marcas"
            description="Protege tu identidad empresarial ante la SIC. Alcance nacional e internacional vía Protocolo de Madrid."
            index={0}
          />
          <ServiceCard
            icon={<Lightbulb size={40} strokeWidth={1.5} />}
            title="Propiedad Intelectual"
            description="Salvaguarda tus creaciones e inventos. Asesoría integral en derechos de autor, patentes y secretos empresariales."
            index={1}
          />
          <ServiceCard
            icon={<Landmark size={40} strokeWidth={1.5} />}
            title="Contratación Estatal"
            description="Representación y asesoría en contratación con entidades públicas. Transparencia y eficiencia garantizadas."
            index={2}
          />
          <ServiceCard
            icon={<FileSearch size={40} strokeWidth={1.5} />}
            title="Licitación Pública"
            description="Acompañamiento experto en procesos licitatorios. Maximizamos tus posibilidades de éxito ante el Estado colombiano."
            index={3}
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
