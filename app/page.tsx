import Countdown from './components/Countdown';
import SubscriptionForm from './components/SubscriptionForm';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-carrillo-blue-dark via-carrillo-blue to-carrillo-blue-light relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-carrillo-blue-light/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16 min-h-screen flex flex-col">
        
        {/* Header / Logo Section */}
        <header className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-2xl">
              <Image 
                src="/logo-carrillo.jpg" 
                alt="Carrillo Abogados" 
                width={300}
                height={120}
                priority
                className="h-auto w-auto max-w-[250px] md:max-w-[300px]"
              />
            </div>
          </div>
          <p className="text-carrillo-gray text-lg md:text-xl font-light tracking-wide">
            REGISTROS DE MARCAS Y PATENTES
          </p>
        </header>

        {/* Hero Section */}
        <section className="flex-1 flex flex-col justify-center items-center text-center space-y-12 md:space-y-16 animate-slide-up">
          
          {/* Main Message */}
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              El futuro legal<br />
              <span className="text-carrillo-blue-light">ahora es digital</span>
            </h1>
            <p className="text-xl md:text-2xl text-carrillo-gray font-light max-w-2xl mx-auto">
              23 años de experiencia jurídica se transforman en la plataforma legal más innovadora de Colombia
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="space-y-6 w-full">
            <p className="text-carrillo-blue-light text-2xl md:text-3xl font-bold tracking-wider">
              LANZAMIENTO MARZO 2026
            </p>
            <Countdown />
          </div>

          {/* Value Proposition */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl w-full mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-4">®</div>
              <h3 className="text-xl font-bold text-white mb-2">Marcas y Patentes</h3>
              <p className="text-carrillo-gray text-sm">
                Protección integral de tu propiedad intelectual
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-white mb-2">Derecho Corporativo</h3>
              <p className="text-carrillo-gray text-sm">
                Asesoría empresarial especializada
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">Respuesta Inmediata</h3>
              <p className="text-carrillo-gray text-sm">
                De 24 horas a menos de 1 minuto
              </p>
            </div>
          </div>

          {/* Subscription Form */}
          <div className="w-full max-w-4xl mt-12 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Sé el primero en conocer nuestra nueva plataforma
            </h2>
            <p className="text-carrillo-gray text-lg">
              Mientras preparamos la nueva experiencia digital, nuestro equipo sigue atendiendo tus necesidades legales
            </p>
            <SubscriptionForm />
          </div>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="mailto:asesora@carrilloabgd.com"
              className="px-8 py-4 bg-white text-carrillo-blue-dark font-bold rounded-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              📧 Escríbenos
            </a>
            <a
              href="mailto:director@carrilloabgd.com"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              ¿Consulta Urgente?
            </a>
          </div>

        </section>

        {/* Footer */}
        <footer className="mt-16 text-center space-y-4 text-carrillo-gray text-sm">
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
            <p>📍 Cra. 40 #27-26, Torre de Cali, Piso 21, Oficina 2102A</p>
            <span className="hidden md:inline">|</span>
            <p>Cali, Valle del Cauca, Colombia</p>
          </div>
          <div className="flex justify-center gap-6 text-xs">
            <a href="mailto:director@carrilloabgd.com" className="hover:text-white transition-colors">
              director@carrilloabgd.com
            </a>
            <span>|</span>
            <a href="mailto:asesora@carrilloabgd.com" className="hover:text-white transition-colors">
              asesora@carrilloabgd.com
            </a>
          </div>
          <p className="text-xs mt-6">
            © 2026 Carrillo ABGD SAS. Todos los derechos reservados. | 23 años de experiencia legal
          </p>
          <p className="text-xs italic">
            Dr. Omar Carrillo - 15 años en la Superintendencia de Industria y Comercio (SIC)
          </p>
        </footer>

      </div>
    </div>
  );
}
