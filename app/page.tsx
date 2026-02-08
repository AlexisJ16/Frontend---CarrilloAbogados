'use client';

import { useState } from 'react';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
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
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#000000] via-[#66728D] to-[#51679C]">
        {/* Efectos de fondo - siempre visibles */}
        <ParticlesBackground />
        <FloatingShapes />
        
        {/* Gradiente overlay para profundidad */}
        <div className="fixed inset-0 bg-gradient-to-b from-trasparent via-[#66728D]/20 to-[#000000]/40 pointer-events-none z-1" />

        {/* Contenido principal - siempre renderizado */}
        <div className="relative z-10">
          
          {/* Modal de datos curiosos */}
          <LegalFactsModal isOpen={showFactsModal} onClose={() => setShowFactsModal(false)} />
          
          {/* Header con branding destacado */}
          <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/60 via-black/30 to-transparent backdrop-blur-md border-b border-white/5">
            <div className="container mx-auto px-4 py-5 flex justify-between items-center">
              {/* Logo unificado con layoutId para animación compartida */}
              {!showSplash && (
                <BrandLogo 
                  variant="header" 
                  layoutId="brand-logo"
                  onClick={() => setShowFactsModal(true)}
                />
              )}
              
              <div className="hidden md:flex items-center gap-4 text-sm ml-auto">
                <a 
                  href="https://wa.me/NUMERO_PENDIENTE" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-carrillo-blue-light/20 to-carrillo-blue-dark/20 border border-carrillo-blue-light/30 text-white hover:bg-carrillo-blue-light/30 transition-all hover:scale-105 font-semibold"
                >
                  💬 Contacto
                </a>
                <div className="w-px h-4 bg-carrillo-gray/30" />
                <span className="text-carrillo-blue-light font-semibold">Marzo 2026</span>
              </div>
            </div>
          </header>

        {/* Hero section GIGANTE */}
        <section className="min-h-screen flex items-center justify-center px-4 pt-32 md:pt-28">
          <div className="max-w-7xl w-full">
            
            {/* Badge animado */}
            <div className="flex justify-center mb-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-carrillo-blue-light/20 to-carrillo-blue-dark/20 border border-carrillo-blue-light/30 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-carrillo-blue-light animate-pulse"></div>
                <span className="text-sm font-semibold text-carrillo-blue-light">23 años de experiencia legal</span>
              </div>
            </div>

            {/* Mensaje principal IMPACTANTE */}
            <div className="text-center space-y-8 animate-slide-up">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
                <div className="bg-gradient-to-r from-white via-carrillo-blue-light to-white bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                  El futuro legal
                </div>
                <div className="mt-4 bg-gradient-to-r from-carrillo-blue-light via-[#9DA8C5] to-carrillo-blue-dark bg-clip-text text-transparent">
                  ahora es digital
                </div>
              </h1>
              
              <p className="text-xl md:text-3xl text-carrillo-gray font-light max-w-4xl mx-auto leading-relaxed">
                Transformamos <span className="text-white font-semibold">23 años de excelencia jurídica</span> en la plataforma legal más 
                <span className="bg-gradient-to-r from-carrillo-blue-light to-carrillo-blue-dark bg-clip-text text-transparent font-semibold"> innovadora de Colombia</span>
              </p>
            </div>

            {/* Countdown elegante integrado */}
            <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-2 rounded-full bg-carrillo-blue-dark/30 border border-carrillo-blue-light/20">
                  <span className="text-carrillo-blue-light text-sm font-bold tracking-widest">LANZAMIENTO</span>
                </div>
              </div>
              <Countdown />
            </div>

          </div>
        </section>

        {/* Sección de servicios PROTAGONISTA */}
        <section className="py-32 px-4 relative">
          {/* Línea decorativa superior */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-carrillo-blue-light to-transparent" />
          
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-fade-in">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                Excelencia en
                <span className="block bg-gradient-to-r from-carrillo-blue-light to-carrillo-blue-dark bg-clip-text text-transparent">
                  cada servicio
                </span>
              </h2>
              <p className="text-xl text-carrillo-gray max-w-2xl mx-auto">
                Protección legal integral con tecnología de vanguardia
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <ServiceCard
                icon={<span className="filter drop-shadow-[0_0_20px_rgba(157,168,197,0.5)]">®</span>}
                title="Marcas y Patentes"
                description="Protección integral de tu propiedad intelectual con estrategias personalizadas y alcance internacional vía Sistema de Madrid"
                delay="0.1s"
              />
              
              <ServiceCard
                icon={<span className="filter drop-shadow-[0_0_20px_rgba(157,168,197,0.5)]">⚖️</span>}
                title="Derecho Corporativo"
                description="Asesoría empresarial especializada para fusiones, gobierno corporativo y estructuras societarias complejas"
                delay="0.2s"
              />
              
              <ServiceCard
                icon={<span className="filter drop-shadow-[0_0_20px_rgba(157,168,197,0.5)]">⚡</span>}
                title="Respuesta Inmediata"
                description="Transformamos 24 horas de espera en menos de 1 minuto. Consulta el estado de tus casos 24/7 en nuestra plataforma digital"
                delay="0.3s"
              />
            </div>

            {/* Estadísticas impactantes */}
            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
              <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-5xl font-black bg-gradient-to-r from-carrillo-blue-light to-white bg-clip-text text-transparent">23</div>
                <div className="text-sm text-carrillo-gray mt-2">Años de trayectoria</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-5xl font-black bg-gradient-to-r from-carrillo-blue-light to-white bg-clip-text text-transparent">15x</div>
                <div className="text-sm text-carrillo-gray mt-2">Más leads proyectados</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-5xl font-black bg-gradient-to-r from-carrillo-blue-light to-white bg-clip-text text-transparent">&lt;1min</div>
                <div className="text-sm text-carrillo-gray mt-2">Tiempo de respuesta</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-5xl font-black bg-gradient-to-r from-carrillo-blue-light to-white bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-carrillo-gray mt-2">Plataforma activa</div>
              </div>
            </div>
          </div>
        </section>

        {/* Experiencia destacada del Dr. Carrillo */}
        <section className="py-20 px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-12 rounded-3xl bg-gradient-to-br from-carrillo-blue-dark/30 to-carrillo-blue/20 border border-carrillo-blue-light/20 backdrop-blur-xl relative overflow-hidden animate-fade-in">
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-carrillo-blue-light to-carrillo-blue-dark flex items-center justify-center">
                  <span className="text-3xl">👨‍⚖️</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Dr. Omar Carrillo
                </h3>
                <p className="text-xl text-carrillo-blue-light font-semibold mb-4">
                  15 años en la Superintendencia de Industria y Comercio (SIC)
                </p>
                <p className="text-carrillo-gray leading-relaxed">
                  Experiencia única en el corazón de la regulación colombiana de marcas y patentes, 
                  ahora al servicio de tu empresa con tecnología de vanguardia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Formulario de suscripción moderno */}
        <section className="py-32 px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                Sé el <span className="bg-gradient-to-r from-carrillo-blue-light to-carrillo-blue-dark bg-clip-text text-transparent">primero</span>
              </h2>
              <p className="text-xl text-carrillo-gray">
                Recibe acceso prioritario cuando lancemos la plataforma más innovadora del sector legal
              </p>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <SubscriptionForm />
            </div>

            {/* Mensaje adicional */}
            <p className="text-center text-sm text-carrillo-gray mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Mientras tanto, nuestro equipo sigue brindando asesoría legal de excelencia
            </p>
          </div>
        </section>

        {/* Botón de contacto flotante */}
        <div className="fixed bottom-8 right-8 z-50 animate-slide-in-right">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=asesora@carrilloabgd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-6 py-4 bg-gradient-to-r from-carrillo-blue-light to-carrillo-blue-dark rounded-full shadow-2xl hover:shadow-carrillo-blue/50 transform hover:-translate-y-1 hover:scale-110 transition-all duration-300 flex items-center gap-3"
          >
            <span className="text-2xl">📧</span>
            <span className="text-white font-bold text-sm hidden group-hover:block">Escríbenos</span>
          </a>
        </div>

        {/* Footer minimalista */}
        <footer className="py-16 px-4 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="text-white font-bold mb-3">Carrillo ABGD SAS</h4>
                <p className="text-sm text-carrillo-gray leading-relaxed">
                  23 años transformando la excelencia legal tradicional en soluciones digitales innovadoras
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-bold mb-3">Ubicación</h4>
                <p className="text-sm text-carrillo-gray leading-relaxed">
                  Cra. 40 #27-26, Torre de Cali<br />
                  Piso 21, Oficina 2102A<br />
                  Cali, Valle del Cauca, Colombia
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-bold mb-3">Contacto</h4>
                <div className="space-y-2 text-sm">
                  <a href="mailto:director@carrilloabgd.com" className="block text-carrillo-gray hover:text-carrillo-blue-light transition-colors">
                    director@carrilloabgd.com
                  </a>
                  <a href="mailto:asesora@carrilloabgd.com" className="block text-carrillo-gray hover:text-carrillo-blue-light transition-colors">
                    asesora@carrilloabgd.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/10 text-center text-sm text-carrillo-gray">
              <p>© 2026 Carrillo ABGD SAS. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>

      </div>

      {/* Splash Screen con AnimatePresence para transición fluida */}
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

    </div>
    </LayoutGroup>
  );
}
