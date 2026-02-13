'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Mail } from 'lucide-react';

export default function FloatingActions() {
  return (
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
  );
}
