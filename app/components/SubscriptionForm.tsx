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
  const [errorMsg, setErrorMsg] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || 'Error al enviar. Intente de nuevo.');
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
        return;
      }

      setStatus('success');
      setFormData({ nombre: '', email: '', telefono: '', servicio: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setErrorMsg('Error de conexión. Intente de nuevo.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-carrillo-cyan/10 via-carrillo-blue-light/20 to-carrillo-violet/10 rounded-3xl blur-2xl opacity-50" />

      <form onSubmit={handleSubmit} className="relative w-full max-w-3xl mx-auto p-6 sm:p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 space-y-6">

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          <div className="group">
            <div className="relative">
              <label htmlFor="contact-nombre" className="sr-only">Nombre completo</label>
              <input
                id="contact-nombre"
                type="text"
                placeholder="Nombre completo *"
                required
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                onFocus={() => setFocusedField('nombre')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-2xl text-white placeholder-carrillo-gray/60 focus:outline-none focus:border-carrillo-blue-light focus:bg-white/10 transition-all duration-300"
              />
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-carrillo-cyan to-carrillo-blue-light transition-all duration-300 ${focusedField === 'nombre' ? 'w-full' : 'w-0'}`} />
            </div>
          </div>

          <div className="group">
            <div className="relative">
              <label htmlFor="contact-email" className="sr-only">Email</label>
              <input
                id="contact-email"
                type="email"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-2xl text-white placeholder-carrillo-gray/60 focus:outline-none focus:border-carrillo-blue-light focus:bg-white/10 transition-all duration-300"
              />
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-carrillo-cyan to-carrillo-blue-light transition-all duration-300 ${focusedField === 'email' ? 'w-full' : 'w-0'}`} />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          <div className="group">
            <div className="relative">
              <label htmlFor="contact-telefono" className="sr-only">Teléfono</label>
              <input
                id="contact-telefono"
                type="tel"
                placeholder="Teléfono (opcional)"
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                onFocus={() => setFocusedField('telefono')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-2xl text-white placeholder-carrillo-gray/60 focus:outline-none focus:border-carrillo-blue-light focus:bg-white/10 transition-all duration-300"
              />
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-carrillo-cyan to-carrillo-blue-light transition-all duration-300 ${focusedField === 'telefono' ? 'w-full' : 'w-0'}`} />
            </div>
          </div>

          <div className="group">
            <div className="relative">
              <label htmlFor="contact-servicio" className="sr-only">Servicio de interés</label>
              <select
                id="contact-servicio"
                value={formData.servicio}
                onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                onFocus={() => setFocusedField('servicio')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-2xl text-white focus:outline-none focus:border-carrillo-blue-light focus:bg-white/10 transition-all duration-300 appearance-none cursor-pointer"
                style={{ colorScheme: 'dark' }}
              >
                <option value="" className="bg-carrillo-blue-dark text-white">Servicio de interés</option>
                <option value="marcas" className="bg-carrillo-blue-dark text-white">Registro de Marcas</option>
                <option value="propiedad-intelectual" className="bg-carrillo-blue-dark text-white">Propiedad Intelectual</option>
                <option value="contratacion-estatal" className="bg-carrillo-blue-dark text-white">Contratación Estatal</option>
                <option value="licitacion-publica" className="bg-carrillo-blue-dark text-white">Licitación Pública</option>
              </select>
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-carrillo-cyan to-carrillo-blue-light transition-all duration-300 ${focusedField === 'servicio' ? 'w-full' : 'w-0'}`} />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="group relative w-full px-8 py-4 sm:py-5 bg-carrillo-orange text-white font-black text-base sm:text-lg rounded-2xl overflow-hidden transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl hover:shadow-carrillo-orange/40 hover:brightness-110"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
          <span className="relative z-10 flex items-center justify-center gap-3">
            {status === 'loading' && (
              <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
            )}
            {status === 'loading'
              ? 'Procesando...'
              : status === 'success'
                ? 'Registrado con éxito'
                : status === 'error'
                  ? 'Reintentar'
                  : 'Acceso Prioritario'}
          </span>
        </button>

        {status === 'success' && (
          <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-carrillo-blue-light/20 to-carrillo-blue-dark/20 border border-carrillo-blue-light/30 animate-fade-in">
            <p className="text-center text-white font-semibold">
              Gracias — serás el primero en conocer la plataforma
            </p>
          </div>
        )}

        {status === 'error' && errorMsg && (
          <div className="p-4 sm:p-6 rounded-2xl bg-red-500/10 border border-red-500/30 animate-fade-in">
            <p className="text-center text-red-300 font-medium text-sm">{errorMsg}</p>
          </div>
        )}
      </form>
    </div>
  );
}
