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
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simular envío
    setTimeout(() => {
      setStatus('success');
      setFormData({ nombre: '', email: '', telefono: '', servicio: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="relative">
      {/* Efecto de brillo de fondo */}
      <div className="absolute -inset-4 bg-gradient-to-r from-carrillo-blue-light/20 to-carrillo-blue-dark/20 rounded-3xl blur-2xl opacity-50" />
      
      <form onSubmit={handleSubmit} className="relative w-full max-w-3xl mx-auto p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 space-y-6">
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group">
            <div className="relative">
              <input
                type="text"
                placeholder="Nombre completo *"
                required
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                onFocus={() => setFocusedField('nombre')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-2xl text-white placeholder-carrillo-gray/60 focus:outline-none focus:border-carrillo-blue-light focus:bg-white/10 transition-all duration-300"
              />
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-carrillo-blue-light to-carrillo-blue-dark transition-all duration-300 ${focusedField === 'nombre' ? 'w-full' : 'w-0'}`} />
            </div>
          </div>
          
          <div className="group">
            <div className="relative">
              <input
                type="email"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-2xl text-white placeholder-carrillo-gray/60 focus:outline-none focus:border-carrillo-blue-light focus:bg-white/10 transition-all duration-300"
              />
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-carrillo-blue-light to-carrillo-blue-dark transition-all duration-300 ${focusedField === 'email' ? 'w-full' : 'w-0'}`} />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="group">
            <div className="relative">
              <input
                type="tel"
                placeholder="Teléfono (opcional)"
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                onFocus={() => setFocusedField('telefono')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-2xl text-white placeholder-carrillo-gray/60 focus:outline-none focus:border-carrillo-blue-light focus:bg-white/10 transition-all duration-300"
              />
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-carrillo-blue-light to-carrillo-blue-dark transition-all duration-300 ${focusedField === 'telefono' ? 'w-full' : 'w-0'}`} />
            </div>
          </div>
          
          <div className="group">
            <div className="relative">
              <select
                value={formData.servicio}
                onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                onFocus={() => setFocusedField('servicio')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-2xl text-white focus:outline-none focus:border-carrillo-blue-light focus:bg-white/10 transition-all duration-300 appearance-none cursor-pointer"
                style={{ colorScheme: 'dark' }}
              >
                <option value="" className="bg-carrillo-blue-dark text-white">Servicio de interés</option>
                <option value="marcas" className="bg-carrillo-blue-dark text-white">Registro de Marcas y Patentes</option>
                <option value="administrativo" className="bg-carrillo-blue-dark text-white">Derecho Administrativo</option>
                <option value="corporativo" className="bg-carrillo-blue-dark text-white">Derecho Corporativo</option>
                <option value="competencias" className="bg-carrillo-blue-dark text-white">Derecho de Competencias</option>
                <option value="telecomunicaciones" className="bg-carrillo-blue-dark text-white">Derecho de Telecomunicaciones</option>
              </select>
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-carrillo-blue-light to-carrillo-blue-dark transition-all duration-300 ${focusedField === 'servicio' ? 'w-full' : 'w-0'}`} />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="group relative w-full px-8 py-5 bg-gradient-to-r from-carrillo-blue-light to-carrillo-blue-dark text-white font-black text-lg rounded-2xl overflow-hidden transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl hover:shadow-carrillo-blue/40"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
          <span className="relative z-10 flex items-center justify-center gap-3">
            {status === 'loading' && (
              <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
            )}
            {status === 'loading' ? 'Procesando...' : status === 'success' ? '¡Registrado con éxito! ✓' : 'Acceso Prioritario →'}
          </span>
        </button>

        {status === 'success' && (
          <div className="p-6 rounded-2xl bg-gradient-to-r from-carrillo-blue-light/20 to-carrillo-blue-dark/20 border border-carrillo-blue-light/30 animate-fade-in">
            <p className="text-center text-white font-semibold flex items-center justify-center gap-2">
              <span className="text-2xl">🎉</span>
              ¡Gracias! Serás el primero en conocer la plataforma
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
