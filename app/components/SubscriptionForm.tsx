'use client';

import { useState, FormEvent } from 'react';

export default function SubscriptionForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simular envío - aquí se conectaría con tu backend o servicio de email
    setTimeout(() => {
      setStatus('success');
      setFormData({ nombre: '', email: '', telefono: '', servicio: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <input
            type="text"
            placeholder="Nombre completo *"
            required
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-carrillo-gray focus:outline-none focus:ring-2 focus:ring-carrillo-blue-light transition-all"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email *"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-carrillo-gray focus:outline-none focus:ring-2 focus:ring-carrillo-blue-light transition-all"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <input
            type="tel"
            placeholder="Teléfono (opcional)"
            value={formData.telefono}
            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
            className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-carrillo-gray focus:outline-none focus:ring-2 focus:ring-carrillo-blue-light transition-all"
          />
        </div>
        <div>
          <select
            value={formData.servicio}
            onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
            className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-carrillo-blue-light transition-all appearance-none cursor-pointer"
          >
            <option value="" className="bg-carrillo-blue-dark text-white">Servicio de interés</option>
            <option value="marcas" className="bg-carrillo-blue-dark text-white">Registro de Marcas y Patentes</option>
            <option value="administrativo" className="bg-carrillo-blue-dark text-white">Derecho Administrativo</option>
            <option value="corporativo" className="bg-carrillo-blue-dark text-white">Derecho Corporativo</option>
            <option value="competencias" className="bg-carrillo-blue-dark text-white">Derecho de Competencias</option>
            <option value="telecomunicaciones" className="bg-carrillo-blue-dark text-white">Derecho de Telecomunicaciones</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-8 py-5 bg-gradient-to-r from-carrillo-blue-light to-carrillo-blue-dark text-white font-bold text-lg rounded-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Enviando...' : status === 'success' ? '¡Registrado con éxito! ✓' : 'Quiero ser el primero'}
      </button>

      {status === 'success' && (
        <p className="text-center text-carrillo-blue-light animate-fade-in">
          ¡Gracias! Te notificaremos cuando lancemos la plataforma.
        </p>
      )}
    </form>
  );
}
