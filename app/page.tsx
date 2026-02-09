'use client';

import { useState } from 'react';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { ShieldCheck, Building2, Zap, MessageCircle, Mail } from 'lucide-react';
import ParticlesBackground from './components/ParticlesBackground';
import FloatingShapes from './components/FloatingShapes';
import ServiceCard from './components/ServiceCard';
import Countdown from './components/Countdown';
import SubscriptionForm from './components/SubscriptionForm';
import SplashScreen from './components/SplashScreen';
import LegalFactsModal from './components/LegalFactsModal';
import BrandLogo from './components/BrandLogo';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [showFactsModal, setShowFactsModal] = useState(false);

  return (
    <LayoutGroup>
      <div className="relative min-h-screen overflow-hidden bg-[#050505]">
        {/* Efectos de fondo - siempre visibles */}
        <ParticlesBackground />
        <FloatingShapes />
        
        {/* Gradiente cinemático para profundidad */}
        <div className="fixed inset-0 bg-gradient-to-br from-carrillo-blue-dark/10 via-transparent to-black/80 pointer-events-none z-[1]" />

        {/* Contenido principal - siempre renderizado */}
        <div className="relative z-10">
          
          {/* Modal de datos curiosos */}
          <LegalFactsModal isOpen={showFactsModal} onClose={() => setShowFactsModal(false)} />
          
          {/* Header con branding destacado */}
          <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
              {/* Logo unificado con layoutId para animación compartida */}
              {!showSplash && (
                <BrandLogo 
                  variant="header" 
                  layoutId="brand-logo"
                  onClick={() => setShowFactsModal(true)}
                />
              )}
              
              <div className="hidden md:flex items-center gap-6 text-sm ml-auto">
                <a 
                  href="https://wa.me/573001234567" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-carrillo-blue/20 transition-all duration-300 hover:scale-105 hover:border-carrillo-blue-light/30"
                >
                  <MessageCircle className="w-4 h-4 text-carrillo-blue-light group-hover:text-white transition-colors" />
                  <span className="text-white font-medium">WhatsApp</span>
                </a>
                <div className="w-px h-5 bg-white/10" />
                <span className="text-carrillo-blue-light tracking-wide font-medium">Coming 2026</span>
              </div>
            </div>
          </header>

        {/* Hero section GIGANTE - Diseño Editorial */}
        <section className="min-h-screen flex flex-col justify-center px-4 pt-32 pb-20 relative overflow-hidden">
          <div className="max-w-[90rem] mx-auto w-full relative z-10 text-center">
            
            {/* Badge animado */}
            <div className="flex justify-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-carrillo-blue-light opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-carrillo-blue-light"></span>
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-carrillo-blue-light font-bold">Relanzamiento oficial</span>
              </div>
            </div>

            {/* Mensaje principal IMPACTANTE */}
            <div className="space-y-6 mb-16 animate-slide-up">
              <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.9] tracking-tighter">
                <span className="block text-white mix-blend-difference hover:tracking-wide transition-all duration-700">
                  EL FUTURO
                </span>
                <span className="block bg-gradient-to-r from-carrillo-blue-light via-white to-carrillo-blue-light bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] pb-4">
                  ES AHORA
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-carrillo-gray/80 font-light max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
                23 años de litigio tradicional evolucionan hacia la <span className="text-white font-medium">primera firma legal 100% digital</span> de Colombia.
              </p>
            </div>

            {/* Countdown integrado con Fecha Esperada */}
            <div className="relative animate-fade-in flex flex-col items-center" style={{ animationDelay: '0.8s' }}>
              <Countdown />
              <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
                <p className="text-carrillo-blue-light text-sm uppercase tracking-widest font-bold mb-1">Fecha esperada</p>
                <p className="text-2xl text-white font-light">27 de Marzo de 2026</p>
              </div>
            </div>

          </div>
          
          {/* Scroll Indicator Eliminado (Espacio reservado para flujo) */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-20 pointer-events-none" />
        </section>

        {/* Sección de servicios PROTAGONISTA */}
        <section className="py-32 px-4 relative">
          {/* Línea decorativa superior con gradiente */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24 animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Innovación Legal
              </h2>
              <p className="text-lg text-carrillo-gray max-w-2xl mx-auto font-light">
                Redefiniendo la práctica jurídica con tecnología y experiencia
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              <ServiceCard
                icon={<ShieldCheck size={40} strokeWidth={1.5} />}
                title="Marcas y Patentes"
                description="Protección de activos intangibles con monitoreo automatizado y alcance global vía Protocolo de Madrid."
                delay="0.1s"
              />
              
              <ServiceCard
                icon={<Building2 size={40} strokeWidth={1.5} />}
                title="Derecho Corporativo"
                description="Estructuración societaria inteligente y gobierno corporativo adaptado a la era digital."
                delay="0.2s"
              />
              
              <ServiceCard
                icon={<Zap size={40} strokeWidth={1.5} />}
                title="Respuesta Inmediata"
                description="Sistema de gestión en tiempo real. Eliminamos la burocracia tradicional para resultados ágiles."
                delay="0.3s"
              />
            </div>

            {/* Estadísticas impactantes - Diseño Refinado */}
            <div className="mt-32 border-t border-white/10 pt-12 animate-fade-in">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: "23", label: "Años de Experiencia" },
                  { number: "15x", label: "Crecimiento Digital" },
                  { number: "<1m", label: "Tiempo de Respuesta" },
                  { number: "24/7", label: "Disponibilidad" }
                ].map((stat, i) => (
                  <div key={i} className="text-center group cursor-default">
                    <div className="text-4xl md:text-5xl font-light text-white mb-2 group-hover:text-carrillo-blue-light transition-colors duration-500">{stat.number}</div>
                    <div className="text-xs uppercase tracking-widest text-carrillo-gray/60 group-hover:text-carrillo-gray transition-colors">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dr. Omar Carrillo - Sección Minimalista */}
        <section className="py-24 px-4 bg-gradient-to-b from-transparent to-black/40">
           <div className="max-w-5xl mx-auto bg-[#0A0A0A] border border-white/5 rounded-[3rem] p-8 md:p-16 relative overflow-hidden group hover:border-white/10 transition-colors duration-500">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-carrillo-blue-dark/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
             
             <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
               <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/5 shadow-2xl flex-shrink-0 animate-float">
                  {/* Placeholder elegante para foto */}
                 <div className="w-full h-full bg-gradient-to-br from-carrillo-blue via-carrillo-blue-dark to-black flex items-center justify-center">
                    <span className="text-4xl">👨‍⚖️</span>
                 </div>
               </div>
               
               <div className="text-center md:text-left">
                 <h3 className="text-3xl font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-3">
                   Dr. Omar Carrillo
                   <ShieldCheck className="w-5 h-5 text-carrillo-blue-light" />
                 </h3>
                 <p className="text-carrillo-blue-light font-medium mb-6 uppercase tracking-wider text-sm">Socio Fundador</p>
                 <p className="text-carrillo-gray leading-relaxed text-lg font-light italic">
                   "La abogacía no puede seguir siendo lenta y reactiva. Estamos construyendo el sistema legal que Colombia merece: transparente, inmediato y eficaz."
                 </p>
               </div>
             </div>
           </div>
        </section>

        {/* Newsletter / Captura - Diseño Limpio */}
        <section className="py-20 px-4 pb-32">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold text-white">Sé el primero en el futuro</h2>
            <p className="text-carrillo-gray">Recibe una invitación exclusiva cuando lancemos nuestra plataforma.</p>
            <SubscriptionForm />
          </div>
        </section>

        {/* Footer Minimalista */}
        <footer className="py-12 border-t border-white/5 text-center text-sm text-carrillo-gray/40">
          <p className="mb-4">© 2026 Carrillo Abogados S.A.S. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-8">
             <a 
               href="https://mail.google.com/mail/?view=cm&fs=1&to=director@carrilloabgd.com" 
               target="_blank"
               rel="noopener noreferrer"
               className="hover:text-white transition-colors"
             >
               Director
             </a>
             <a 
               href="https://mail.google.com/mail/?view=cm&fs=1&to=asesora@carrilloabgd.com" 
               target="_blank"
               rel="noopener noreferrer"
               className="hover:text-white transition-colors"
             >
               Asesoría
             </a>
          </div>
        </footer>

        {/* Splash Screen Condicional */}
        <AnimatePresence mode="wait">
          {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
        </AnimatePresence>

         {/* Botón flotante Correo */}
        {!showSplash && (
           <a 
             href="https://mail.google.com/mail/?view=cm&fs=1&to=asesora@carrilloabgd.com&su=Consulta%20Legal%20-%20Landing%20Page"
             target="_blank"
             rel="noopener noreferrer"
             className="fixed bottom-8 right-8 z-40 p-4 rounded-full bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform duration-300 group"
             title="Escríbenos"
           >
             <Mail className="w-6 h-6" />
             <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
               Escríbenos
             </span>
           </a>
        )}
        </div>
      </div>
    </LayoutGroup>
  );
}