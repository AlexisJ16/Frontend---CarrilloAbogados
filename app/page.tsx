'use client';

import { useState } from 'react';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import ParticlesBackground from './components/ParticlesBackground';
import FloatingShapes from './components/FloatingShapes';
import SplashScreen from './components/SplashScreen';
import LegalFactsModal from './components/LegalFactsModal';
import BrandLogo from './components/BrandLogo';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [showFactsModal, setShowFactsModal] = useState(false);

  return (
    <LayoutGroup>
      <div className="relative min-h-screen overflow-hidden bg-[#050505]">
        {/* Background effects */}
        <ParticlesBackground />
        <FloatingShapes />
        <div className="fixed inset-0 bg-gradient-to-br from-carrillo-blue-dark/10 via-transparent to-black/80 pointer-events-none z-[1]" />

        {/* Main content */}
        <div className="relative z-10">
          <LegalFactsModal isOpen={showFactsModal} onClose={() => setShowFactsModal(false)} />

          {/* Header */}
          <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
              {!showSplash && (
                <BrandLogo
                  variant="header"
                  layoutId="brand-logo"
                  onClick={() => setShowFactsModal(true)}
                />
              )}

              <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm ml-auto" aria-label="Navegación principal">
                <a
                  href="https://wa.me/573001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-carrillo-orange/20 transition-all duration-300 hover:scale-105 hover:border-carrillo-orange/40"
                  aria-label="Contactar por WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-carrillo-blue-light group-hover:text-white transition-colors" />
                  <span className="text-white font-medium">WhatsApp</span>
                </a>
                <div className="w-px h-5 bg-white/10" aria-hidden="true" />
                <span className="text-carrillo-blue-light tracking-wide font-medium">Coming 2026</span>
              </nav>

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

          {/* Page sections */}
          <main>
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <NewsletterSection />
          </main>

          <Footer />

          {/* Splash screen */}
          <AnimatePresence mode="wait">
            {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
          </AnimatePresence>

          {/* Floating action buttons */}
          {!showSplash && <FloatingActions />}
        </div>
      </div>
    </LayoutGroup>
  );
}
