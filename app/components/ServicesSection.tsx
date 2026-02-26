'use client';

import { useState } from 'react';
import { BadgeCheck, Lightbulb, Landmark, FileSearch } from 'lucide-react';
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
    metric: 'Especialistas certificados ante la SIC con 23 años de trayectoria',
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
    metric: '23 años protegiendo contratos con el Estado colombiano',
  },
  {
    icon: <FileSearch size={32} strokeWidth={1.5} />,
    title: 'Licitación Pública',
    tagline: 'Acompañamiento experto para maximizar tu éxito en procesos licitatorios del Estado.',
    steps: [
      {
        title: 'Revisión de requisitos',
        description:
          'Analizamos tu capacidad jurídica, financiera y técnica para determinar la viabilidad de tu participación en el proceso.',
      },
      {
        title: 'Elaboración de propuesta',
        description:
          'Redactamos documentos técnicos y financieros de alto impacto, diferenciadores y ajustados a los pliegos de condiciones.',
      },
      {
        title: 'Presentación y sustentación',
        description:
          'Te representamos ante la entidad en todas las etapas del proceso licitatorio con argumentos jurídicos sólidos.',
      },
      {
        title: 'Adjudicación y contrato',
        description:
          'Gestionamos la adjudicación, revisamos el contrato y aseguramos condiciones favorables para tu empresa o entidad.',
      },
    ],
    metric: 'Expertos en licitaciones del sector público y privado colombiano',
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
            tecnología y 23 años de experiencia
          </p>
        </AnimatedSection>

        {/* Service cards — items-start prevents cross-column height stretching */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-start">
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
