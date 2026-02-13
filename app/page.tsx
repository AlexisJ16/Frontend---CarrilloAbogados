'use client';

import { useState, useRef } from 'react';
import { AnimatePresence, LayoutGroup, motion, useInView } from 'framer-motion';
import { ShieldCheck, Building2, Zap, MessageCircle, Mail, MapPin, Phone, Scale } from 'lucide-react';
import ParticlesBackground from './components/ParticlesBackground';
import FloatingShapes from './components/FloatingShapes';
import ServiceCard from './components/ServiceCard';
import Countdown from './components/Countdown';
import SubscriptionForm from './components/SubscriptionForm';
import SplashScreen from './components/SplashScreen';
import LegalFactsModal from './components/LegalFactsModal';
import BrandLogo from './components/BrandLogo';
import CountUp from './components/CountUp';

/* ─── Scroll-triggered section wrapper ─── */
function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [showFactsModal, setShowFactsModal] = useState(false);

  return (
    <LayoutGroup>
      <div className="relative min-h-screen overflow-hidden bg-[#050505]">
        {/* Background effects */}
        <ParticlesBackground />
        <FloatingShapes />

        {/* Cinematic gradient overlay */}
        <div className="fixed inset-0 bg-gradient-to-br from-carrillo-blue-dark/10 via-transparent to-black/80 pointer-events-none z-[1]" />

        {/* Main content */}
        <div className="relative z-10">

          {/* Legal facts modal */}
          <LegalFactsModal isOpen={showFactsModal} onClose={() => setShowFactsModal(false)} />

          {/* ═══════════════════ HEADER ═══════════════════ */}
          <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
              {!showSplash && (
                <BrandLogo
                  variant="header"
                  layoutId="brand-logo"
                  onClick={() => setShowFactsModal(true)}
                />
              )}

              <div className="hidden md:flex items-center gap-4 lg:gap-6 text-sm ml-auto">
                <a
                  href="https://wa.me/573001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-carrillo-blue/20 transition-all duration-300 hover:scale-105 hover:border-carrillo-blue-light/30"
                  aria-label="Contactar por WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-carrillo-blue-light group-hover:text-white transition-colors" />
                  <span className="text-white font-medium">WhatsApp</span>
                </a>
                <div className="w-px h-5 bg-white/10" />
                <span className="text-carrillo-blue-light tracking-wide font-medium">Coming 2026</span>
              </div>

              {/* Mobile WhatsApp button */}
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden ml-auto flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10"
                aria-label="Contactar por WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-carrillo-blue-light" />
              </a>
            </div>
          </header>

          {/* ═══════════════════ HERO ═══════════════════ */}
          <section className="min-h-screen flex flex-col justify-center px-4 pt-28 sm:pt-32 pb-20 relative overflow-hidden">
            <div className="max-w-[90rem] mx-auto w-full relative z-10 text-center">

              {/* Animated badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center mb-8 sm:mb-12"
              >
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-carrillo-blue-light opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-carrillo-blue-light"></span>
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-carrillo-blue-light font-bold">Relanzamiento oficial</span>
                </div>
              </motion.div>

              {/* Main headline - responsive sizes */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-4 sm:space-y-6 mb-12 sm:mb-16"
              >
                <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black leading-[0.9] tracking-tighter">
                  <span className="block text-white">
                    EL FUTURO
                  </span>
                  <span className="block bg-gradient-to-r from-carrillo-blue-light via-white to-carrillo-blue-light bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] pb-2 sm:pb-4">
                    ES AHORA
                  </span>
                </h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-lg sm:text-xl md:text-2xl text-carrillo-gray/80 font-light max-w-3xl mx-auto leading-relaxed px-2"
                >
                  23 años de litigio tradicional evolucionan hacia la <span className="text-white font-medium">primera firma legal 100% digital</span> de Colombia.
                </motion.p>
              </motion.div>

              {/* Countdown */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="relative flex flex-col items-center"
              >
                <Countdown />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="mt-6 sm:mt-8 text-center"
                >
                  <p className="text-carrillo-blue-light text-sm uppercase tracking-widest font-bold mb-1">Fecha esperada</p>
                  <p className="text-xl sm:text-2xl text-white font-light">27 de Marzo de 2026</p>
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-20 pointer-events-none" />
          </section>

          {/* ═══════════════════ SERVICES ═══════════════════ */}
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

              {/* Statistics with count-up */}
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

          {/* ═══════════════════ DR. OMAR CARRILLO ═══════════════════ */}
          <section className="py-16 sm:py-24 px-4 bg-gradient-to-b from-transparent to-black/40" aria-labelledby="about-heading">
            <AnimatedSection className="max-w-5xl mx-auto">
              <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl sm:rounded-[3rem] p-6 sm:p-8 md:p-16 relative overflow-hidden group hover:border-white/10 transition-colors duration-500">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-carrillo-blue-dark/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  {/* Professional SVG placeholder instead of emoji */}
                  <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/5 shadow-2xl flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-carrillo-blue via-carrillo-blue-dark to-black flex items-center justify-center">
                      <svg viewBox="0 0 100 100" className="w-3/5 h-3/5 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="50" cy="32" r="14" />
                        <path d="M25 85c0-14 11-25 25-25s25 11 25 25" />
                        <path d="M38 28l12-12 12 12" strokeWidth="1.2" opacity="0.6" />
                      </svg>
                    </div>
                  </div>

                  <div className="text-center md:text-left">
                    <h3 id="about-heading" className="text-2xl sm:text-3xl font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-3">
                      Dr. Omar Carrillo
                      <ShieldCheck className="w-5 h-5 text-carrillo-blue-light" />
                    </h3>
                    <p className="text-carrillo-blue-light font-medium mb-4 sm:mb-6 uppercase tracking-wider text-sm">Socio Fundador</p>
                    <p className="text-carrillo-gray leading-relaxed text-base sm:text-lg font-light italic">
                      &ldquo;La abogacía no puede seguir siendo lenta y reactiva. Estamos construyendo el sistema legal que Colombia merece: transparente, inmediato y eficaz.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </section>

          {/* ═══════════════════ NEWSLETTER ═══════════════════ */}
          <section className="py-16 sm:py-20 px-4 pb-24 sm:pb-32" aria-labelledby="newsletter-heading">
            <AnimatedSection className="max-w-2xl mx-auto text-center space-y-6 sm:space-y-8">
              <h2 id="newsletter-heading" className="text-2xl sm:text-3xl font-bold text-white">Sé el primero en el futuro</h2>
              <p className="text-carrillo-gray">Recibe una invitación exclusiva cuando lancemos nuestra plataforma.</p>
              <SubscriptionForm />
            </AnimatedSection>
          </section>

          {/* ═══════════════════ FOOTER ═══════════════════ */}
          <footer className="border-t border-white/5 bg-black/20" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">

                {/* Brand */}
                <div className="sm:col-span-2 lg:col-span-1">
                  <h3 className="text-white font-bold text-lg mb-3">Carrillo Abogados</h3>
                  <p className="text-carrillo-gray/60 text-sm leading-relaxed max-w-xs">
                    23 años de experiencia legal evolucionando hacia la primera firma 100% digital de Colombia.
                  </p>
                </div>

                {/* Services */}
                <div>
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Servicios</h4>
                  <ul className="space-y-2 text-sm text-carrillo-gray/60">
                    <li>Marcas y Patentes</li>
                    <li>Derecho Corporativo</li>
                    <li>Contratación Estatal</li>
                    <li>Telecomunicaciones Legal</li>
                    <li>Derecho de Competencias</li>
                  </ul>
                </div>

                {/* Contact */}
                <div>
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contacto</h4>
                  <ul className="space-y-3 text-sm text-carrillo-gray/60">
                    <li>
                      <a
                        href="mailto:director@carrilloabgd.com"
                        className="hover:text-white transition-colors inline-flex items-center gap-2"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        director@carrilloabgd.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:asesora@carrilloabgd.com"
                        className="hover:text-white transition-colors inline-flex items-center gap-2"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        asesora@carrilloabgd.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://wa.me/573001234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors inline-flex items-center gap-2"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        WhatsApp
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Location */}
                <div>
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Ubicación</h4>
                  <address className="not-italic text-sm text-carrillo-gray/60 space-y-2">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                      <span>Cra. 40 #27-26, Torre de Cali,<br />Piso 21, Oficina 2102A<br />Cali, Valle del Cauca, Colombia</span>
                    </p>
                  </address>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="border-t border-white/5 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-carrillo-gray/40">
                <p>© 2026 Carrillo ABGD S.A.S. Todos los derechos reservados.</p>
                <p className="flex items-center gap-1">
                  <Scale className="w-3 h-3" />
                  Firma Legal Digital — Cali, Colombia
                </p>
              </div>
            </div>
          </footer>

          {/* Splash Screen */}
          <AnimatePresence mode="wait">
            {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
          </AnimatePresence>

          {/* ═══════════════════ FLOATING ACTION BUTTONS ═══════════════════ */}
          {!showSplash && (
            <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 flex flex-col gap-3">
              {/* WhatsApp */}
              <motion.a
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 sm:p-4 rounded-full bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:scale-110 transition-transform duration-300 group"
                aria-label="Contactar por WhatsApp"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
                  WhatsApp
                </span>
              </motion.a>

              {/* Email */}
              <motion.a
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
                href="mailto:asesora@carrilloabgd.com?subject=Consulta%20Legal%20-%20Landing%20Page"
                className="p-3.5 sm:p-4 rounded-full bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-110 transition-transform duration-300 group"
                aria-label="Enviar correo electrónico"
                title="Escríbenos"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
                  Escríbenos
                </span>
              </motion.a>
            </div>
          )}
        </div>
      </div>
    </LayoutGroup>
  );
}
