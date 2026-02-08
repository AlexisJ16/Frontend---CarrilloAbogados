'use client';

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Círculo grande superior derecha */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-carrillo-blue-light/20 to-carrillo-blue-dark/10 blur-3xl animate-float" />
      
      {/* Forma hexagonal izquierda */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-tr from-carrillo-blue/15 to-transparent rotate-45 animate-float-slow" />
      
      {/* Círculo mediano inferior izquierda */}
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-gradient-to-t from-carrillo-blue-dark/20 to-carrillo-slate/10 blur-2xl animate-pulse-slow" />
      
      {/* Forma rectangular derecha */}
      <div className="absolute bottom-1/3 right-20 w-72 h-96 bg-gradient-to-bl from-carrillo-blue-light/10 to-transparent rounded-3xl rotate-12 animate-float" />
      
      {/* Pequeño círculo centro */}
      <div className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full bg-carrillo-blue/20 blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      {/* Líneas decorativas */}
      <div className="absolute top-1/3 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-carrillo-blue-light/30 to-transparent animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/3 w-px h-24 bg-gradient-to-b from-transparent via-carrillo-blue/40 to-transparent animate-float" style={{ animationDelay: '0.5s' }} />
    </div>
  );
}
