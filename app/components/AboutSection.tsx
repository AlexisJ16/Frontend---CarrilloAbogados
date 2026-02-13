'use client';

import { ShieldCheck } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function AboutSection() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-gradient-to-b from-transparent to-black/40" aria-labelledby="about-heading">
      <AnimatedSection className="max-w-5xl mx-auto">
        <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl sm:rounded-[3rem] p-6 sm:p-8 md:p-16 relative overflow-hidden group hover:border-white/10 transition-colors duration-500">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-carrillo-blue-dark/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Professional SVG placeholder */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/5 shadow-2xl flex-shrink-0">
              <div className="w-full h-full bg-gradient-to-br from-carrillo-blue via-carrillo-blue-dark to-black flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="w-3/5 h-3/5 text-white/80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="50" cy="32" r="14" />
                  <path d="M25 85c0-14 11-25 25-25s25 11 25 25" />
                  <path d="M38 28l12-12 12 12" strokeWidth="1.2" opacity="0.6" />
                </svg>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 id="about-heading" className="text-2xl sm:text-3xl font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-3">
                Dr. Omar Carrillo
                <ShieldCheck className="w-5 h-5 text-carrillo-blue-light" aria-hidden="true" />
              </h3>
              <p className="text-carrillo-blue-light font-medium mb-4 sm:mb-6 uppercase tracking-wider text-sm">Socio Fundador</p>
              <blockquote className="text-carrillo-gray leading-relaxed text-base sm:text-lg font-light italic">
                &ldquo;La abogacía no puede seguir siendo lenta y reactiva. Estamos construyendo el sistema legal que Colombia merece: transparente, inmediato y eficaz.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
