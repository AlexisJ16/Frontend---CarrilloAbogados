import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header / Navigation */}
      <header className="bg-primary-800 text-white shadow-lg">
        <nav className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              Carrillo Abogados
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#inicio" className="hover:text-accent-400 transition-colors">Inicio</Link>
              <Link href="#servicios" className="hover:text-accent-400 transition-colors">Servicios</Link>
              <Link href="#sobre-nosotros" className="hover:text-accent-400 transition-colors">Sobre Nosotros</Link>
              <Link href="#contacto" className="hover:text-accent-400 transition-colors">Contacto</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-900 mb-6">
            Servicios Legales Profesionales
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Expertos en brindar soluciones legales integrales con experiencia, dedicación y compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#contacto" 
              className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-lg"
            >
              Consulta Gratuita
            </Link>
            <Link 
              href="#servicios" 
              className="bg-white hover:bg-gray-50 text-primary-800 font-bold py-4 px-8 rounded-lg border-2 border-primary-800 transition-colors"
            >
              Nuestros Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary-900 mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-primary-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-nosotros" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Sobre Nosotros
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              En Carrillo Abogados, contamos con años de experiencia brindando servicios legales de excelencia. 
              Nuestro equipo de profesionales está comprometido con la defensa de sus derechos y la búsqueda 
              de las mejores soluciones para cada caso.
            </p>
            <p className="text-lg text-gray-700">
              Nos caracterizamos por nuestra atención personalizada, profesionalismo y resultados efectivos.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 bg-primary-800 text-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Contáctenos
            </h2>
            <p className="text-lg mb-8">
              Estamos listos para ayudarle. Comuníquese con nosotros para una consulta inicial.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <span className="text-2xl">📧</span>
                <span className="text-lg">contacto@carrilloabogados.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span className="text-2xl">📞</span>
                <span className="text-lg">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span className="text-2xl">📍</span>
                <span className="text-lg">Dirección de la oficina</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Carrillo Abogados. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

const services = [
  {
    icon: "⚖️",
    title: "Derecho Civil",
    description: "Asesoría en contratos, propiedad, familia y sucesiones."
  },
  {
    icon: "🏢",
    title: "Derecho Corporativo",
    description: "Constitución de empresas, fusiones y asesoría corporativa."
  },
  {
    icon: "🔨",
    title: "Derecho Laboral",
    description: "Defensa de derechos laborales y asesoría en relaciones de trabajo."
  },
  {
    icon: "🏠",
    title: "Derecho Inmobiliario",
    description: "Compraventa, arrendamiento y litigios inmobiliarios."
  },
  {
    icon: "💼",
    title: "Derecho Mercantil",
    description: "Contratos comerciales y resolución de conflictos mercantiles."
  },
  {
    icon: "⚡",
    title: "Consultoría Legal",
    description: "Asesoramiento legal preventivo y estratégico para empresas."
  }
];
