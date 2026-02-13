import { Mail, Phone, MapPin, Scale } from 'lucide-react';

export default function Footer() {
  return (
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
                  <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                  director@carrilloabgd.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:asesora@carrilloabgd.com"
                  className="hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" aria-hidden="true" />
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
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
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
                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  Cra. 40 #27-26, Torre de Cali,<br />
                  Piso 21, Oficina 2102A<br />
                  Cali, Valle del Cauca, Colombia
                </span>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-carrillo-gray/40">
          <p>© 2026 Carrillo ABGD S.A.S. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            <Scale className="w-3 h-3" aria-hidden="true" />
            Firma Legal Digital — Cali, Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
