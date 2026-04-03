'use client';

import { useState } from 'react';
import { BadgeCheck, Lightbulb, Landmark, Scale, Building2 } from 'lucide-react';
import ServiceCard, { ServiceStep } from './ServiceCard';
import CountUp from './CountUp';
import AnimatedSection from './AnimatedSection';

interface Service {
  icon: React.ReactNode;
  title: string;
  tagline: string;
  steps: ServiceStep[];
  metric: string;
}

const SERVICES: Service[] = [
  {
    icon: <BadgeCheck size={32} strokeWidth={1.5} />,
    title: 'Registro de Marcas',
    tagline: 'Protege tu identidad empresarial ante la SIC con alcance nacional e internacional.',
    steps: [
      {
        title: 'Búsqueda de disponibilidad',
        description:
          'Analizamos bases de datos nacionales e internacionales para verificar la disponibilidad y viabilidad de registro de tu marca.',
      },
      {
        title: 'Estrategia y clasificación',
        description:
          'Definimos la clase de Niza correcta y la estrategia de cobertura geográfica para maximizar tu protección legal.',
      },
      {
        title: 'Solicitud ante la SIC',
        description:
          'Radicamos la solicitud oficial ante la Superintendencia de Industria y Comercio con toda la documentación en orden.',
      },
      {
        title: 'Seguimiento y registro',
        description:
          'Monitoreamos el proceso, respondemos observaciones y obtenemos tu certificado de registro oficial.',
      },
    ],
    metric: '15+ años de experiencia en propiedad industrial ante la SIC',
  },
  {
    icon: <Lightbulb size={32} strokeWidth={1.5} />,
    title: 'Propiedad Intelectual',
    tagline: 'Salvaguarda tus creaciones, inventos y activos intangibles con asesoría integral.',
    steps: [
      {
        title: 'Diagnóstico del activo',
        description:
          'Identificamos y valoramos todos tus activos: obras literarias, inventos, software, secretos empresariales y diseños industriales.',
      },
      {
        title: 'Estructuración legal',
        description:
          'Diseñamos la estrategia de protección más adecuada según el tipo de activo y tus objetivos comerciales a largo plazo.',
      },
      {
        title: 'Registro y protección',
        description:
          'Formalizamos la protección ante las autoridades competentes nacionales e internacionales con plena cobertura jurídica.',
      },
      {
        title: 'Gestión y defensa',
        description:
          'Monitoreamos posibles infracciones y actuamos legalmente ante cualquier vulneración de tus derechos intelectuales.',
      },
    ],
    metric: 'Especialistas certificados ante la SIC con 35 años de trayectoria',
  },
  {
    icon: <Landmark size={32} strokeWidth={1.5} />,
    title: 'Contratación Estatal',
    tagline: 'Representación y asesoría experta en contratación con entidades públicas colombianas.',
    steps: [
      {
        title: 'Análisis del proceso',
        description:
          'Estudiamos en detalle los pliegos de condiciones, requisitos habilitantes y criterios de evaluación de cada proceso.',
      },
      {
        title: 'Estructuración de propuesta',
        description:
          'Preparamos una oferta técnica y económica competitiva, minimizando riesgos y maximizando el puntaje evaluado.',
      },
      {
        title: 'Representación técnica',
        description:
          'Te acompañamos en audiencias, respuesta a aclaraciones y presentación de recursos legales cuando sea necesario.',
      },
      {
        title: 'Ejecución y supervisión',
        description:
          'Asesoramos durante toda la ejecución del contrato, anticipamos riesgos jurídicos y resolvemos controversias contractuales.',
      },
    ],
    metric: '35 años protegiendo contratos con el Estado colombiano',
  },
  {
    icon: <Scale size={32} strokeWidth={1.5} />,
    title: 'Derecho Constitucional',
    tagline: 'Defensa de derechos fundamentales y acciones constitucionales ante la jurisdiccion colombiana.',
    steps: [
      {
        title: 'Analisis constitucional',
        description:
          'Evaluamos la situacion juridica e identificamos los derechos fundamentales vulnerados o amenazados.',
      },
      {
        title: 'Estrategia legal',
        description:
          'Definimos la accion constitucional mas efectiva: tutela, accion popular, accion de cumplimiento o habeas corpus.',
      },
      {
        title: 'Presentacion y seguimiento',
        description:
          'Radicamos la accion ante la autoridad competente y realizamos seguimiento hasta obtener sentencia favorable.',
      },
      {
        title: 'Cumplimiento y ejecucion',
        description:
          'Garantizamos el cumplimiento efectivo de la decision judicial y la restitucion de derechos fundamentales.',
      },
    ],
    metric: '50+ acciones constitucionales exitosas',
  },
  {
    icon: <Building2 size={32} strokeWidth={1.5} />,
    title: 'Derecho Administrativo',
    tagline: 'Representacion ante entidades publicas y defensa en procesos administrativos y contenciosos.',
    steps: [
      {
        title: 'Asesoria preventiva',
        description:
          'Orientamos a personas y empresas sobre sus derechos y obligaciones frente a la administracion publica.',
      },
      {
        title: 'Gestion administrativa',
        description:
          'Tramitamos recursos, peticiones y reclamaciones ante entidades del Estado para proteger tus intereses.',
      },
      {
        title: 'Litigio contencioso',
        description:
          'Representamos ante la jurisdiccion contencioso-administrativa en acciones de nulidad, reparacion directa y controversias contractuales.',
      },
      {
        title: 'Conciliacion y resolucion',
        description:
          'Buscamos soluciones negociadas cuando es viable, protegiendo tus derechos sin necesidad de litigio prolongado.',
      },
    ],
    metric: '95% tasa de exito en procesos administrativos',
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function handleToggle(index: number) {
    setActiveIndex(prev => (prev === index ? null : index));
  }

  return (
    <section className="py-20 sm:py-32 px-4 relative" aria-labelledby="services-heading">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16 sm:mb-24">
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight"
          >
            Innovación Legal
          </h2>
          <p className="text-base sm:text-lg text-carrillo-gray max-w-2xl mx-auto font-light">
            La abogacía ya no puede ser lenta y reactiva — redefinimos la práctica jurídica con
            tecnología y 35 años de experiencia
          </p>
        </AnimatedSection>

        {/* Service cards — items-start prevents cross-column height stretching */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 items-start">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              tagline={service.tagline}
              steps={service.steps}
              metric={service.metric}
              index={i}
              isOpen={activeIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>

        {/* Statistics */}
        <AnimatedSection className="mt-20 sm:mt-32 border-t border-white/10 pt-12" delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <CountUp target="35" label="Años de Experiencia" />
            <CountUp target="15x" label="Crecimiento Digital" />
            <CountUp target="<1m" label="Tiempo de Respuesta" />
            <CountUp target="24/7" label="Disponibilidad" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
