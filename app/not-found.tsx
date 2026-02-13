import Link from 'next/link';
import { Scale } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-carrillo-blue-dark/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-carrillo-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg">
        {/* 404 number */}
        <div className="text-8xl sm:text-9xl font-black text-white/5 leading-none mb-4 select-none">
          404
        </div>

        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-8">
          <Scale className="w-8 h-8 text-carrillo-blue-light" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Página no encontrada
        </h1>

        <p className="text-carrillo-gray text-base sm:text-lg mb-8 leading-relaxed">
          La página que buscas no existe o ha sido movida. Vuelve al inicio para conocer más sobre nuestros servicios legales.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-carrillo-blue-light to-carrillo-blue-dark text-white font-bold rounded-2xl hover:scale-105 active:scale-95 transition-transform duration-300 shadow-xl hover:shadow-2xl hover:shadow-carrillo-blue/30"
        >
          Volver al inicio
        </Link>

        <p className="mt-12 text-xs text-carrillo-gray/40">
          © 2026 Carrillo ABGD S.A.S.
        </p>
      </div>
    </div>
  );
}
