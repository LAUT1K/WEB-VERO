import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulación de envío
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 5000);
    }, 1800);
  };

  return (
    <section id="contacto" className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <div className="reveal">
            <span className="text-accent text-[10px] tracking-[0.5em] uppercase mb-4 block font-semibold">Conversemos</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">¿Tienes un momento para crear algo eterno?</h2>
            <p className="text-neutral-500 text-sm leading-[1.8] mb-12 font-light tracking-wide">
              Ya sea para una sesión familiar, deportiva o un evento único, estoy aquí para ayudarte a capturar lo que las palabras no pueden expresar.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-6 group">
                <div className="w-12 h-12 rounded-full border border-neutral-100 flex items-center justify-center group-hover:border-accent transition-colors">
                  <svg className="w-5 h-5 text-neutral-400 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-neutral-400">Email Directo</p>
                  <a href="mailto:hola@verovalentini.com" className="text-sm font-medium hover:text-accent transition-colors">hola@verovalentini.com</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 group">
                <div className="w-12 h-12 rounded-full border border-neutral-100 flex items-center justify-center group-hover:border-accent transition-colors">
                  <svg className="w-5 h-5 text-neutral-400 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-neutral-400">Estudio</p>
                  <p className="text-sm font-medium">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-50 p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.03)] reveal relative">
            {status === 'success' && (
              <div className="absolute inset-0 bg-neutral-50 z-20 flex flex-col items-center justify-center text-center animate-fade-in p-6">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-8">
                  <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-3">¡Gracias por escribir!</h3>
                <p className="text-neutral-500 text-sm font-light">Tu mensaje ha sido recibido. Te responderé muy pronto.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className={status !== 'idle' ? 'opacity-20 pointer-events-none' : 'space-y-8 transition-opacity duration-500'}>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-semibold">Nombre Completo</label>
                <input 
                  type="text" 
                  required
                  placeholder="Ej. Juan Pérez"
                  className="w-full bg-transparent border-b border-neutral-200 py-3 focus:outline-none focus:border-accent transition-colors text-sm placeholder:text-neutral-300"
                />
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-semibold">Correo Electrónico</label>
                <input 
                  type="email" 
                  required
                  placeholder="ejemplo@correo.com"
                  className="w-full bg-transparent border-b border-neutral-200 py-3 focus:outline-none focus:border-accent transition-colors text-sm placeholder:text-neutral-300"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-semibold">Mensaje</label>
                <textarea 
                  rows={4} 
                  required
                  placeholder="¿Cómo puedo ayudarte?"
                  className="w-full bg-transparent border-b border-neutral-200 py-3 focus:outline-none focus:border-accent transition-colors text-sm resize-none placeholder:text-neutral-300"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-neutral-900 text-white text-[10px] tracking-[0.5em] uppercase hover:bg-accent transition-all duration-500 relative overflow-hidden group shadow-lg"
              >
                <span className={status === 'sending' ? 'opacity-0' : 'opacity-100'}>Enviar Mensaje</span>
                {status === 'sending' && (
                   <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};