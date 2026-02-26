'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function FloatingActions() {
  const [emailConfig, setEmailConfig] = useState({
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=asesora@carrilloabgd.com&subject=Consulta%20Legal%20-%20Carrillo%20ABGD',
    external: true,
  });

  useEffect(() => {
    const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
    if (isMobile) {
      setEmailConfig({
        href: 'mailto:asesora@carrilloabgd.com?subject=Consulta%20Legal%20-%20Carrillo%20ABGD',
        external: false,
      });
    }
  }, []);

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40">
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        href={emailConfig.href}
        target={emailConfig.external ? '_blank' : undefined}
        rel={emailConfig.external ? 'noopener noreferrer' : undefined}
        className="relative p-3.5 sm:p-4 rounded-full bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-110 transition-transform duration-200 group flex items-center justify-center"
        aria-label="Enviar correo electrónico"
        title="Escríbenos"
      >
        <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap border border-white/10 pointer-events-none">
          Escríbenos
        </span>
      </motion.a>
    </div>
  );
}
