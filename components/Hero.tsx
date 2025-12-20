import React, { useState, useEffect } from 'react';

const PHRASES = [
  "Historias que merecen ser eternas.",
  "Capturando la esencia de tus momentos más puros.",
  "Tu vida, retratada para siempre."
];

export const Hero: React.FC = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % PHRASES.length);
        setFade(true);
      }, 800);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToGallery = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('galeria');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1920" 
          alt="Portafolio Vero Valentini" 
          className="w-full h-full object-cover filter brightness-[0.25] scale-105 animate-slow-zoom"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-neutral-900/90"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-7xl flex flex-col items-center pt-40 pb-20"> 
        
        {/* Nombre Principal con fuente elegante Cormorant Garamond */}
        <div className="opacity-0 animate-fade-in-up">
          <h1 className="font-elegant text-5xl md:text-7xl lg:text-[7.5rem] tracking-[0.08em] mb-2 leading-tight uppercase font-medium text-gold-metallic drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            VERO VALENTINI
          </h1>
          {/* STUDIO en un gris suave (Neutral 400) para contraste */}
          <span className="tracking-[0.4em] text-2xl md:text-3xl lg:text-4xl block text-neutral-400 font-serif opacity-80 uppercase mt-2">
            STUDIO
          </span>
        </div>
        
   
        {/* Sub-headline dinámico con fuente Tangerine */}
        <div className="h-20 md:h-28 flex items-center justify-center opacity-0 animate-fade-in-up delay-500">
          <p className={`font-cursive text-3xl md:text-5xl lg:text-6xl text-white/90 transition-all duration-1000 transform font-normal tracking-wide ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            {PHRASES[currentPhrase]}
          </p>
        </div>

        {/* Especialidades */}
        <div className="mt-8 opacity-0 animate-fade-in-up delay-700">
          <p className="text-white/30 font-sans text-[8px] md:text-[9px] tracking-[0.7em] uppercase font-light">
            Ph Deportiva · Familias · Newborn · Eventos
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center opacity-0 animate-fade-in-up delay-700">
          <a 
            href="#galeria" 
            onClick={scrollToGallery}
            className="group relative px-14 py-4 bg-transparent border border-accent/20 text-accent text-[9px] tracking-[0.6em] uppercase overflow-hidden transition-all duration-700 hover:border-accent shadow-2xl"
          >
            <span className="relative z-10 group-hover:text-neutral-900 transition-colors duration-500 font-bold">Ver Portafolio</span>
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></div>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.12); }
        }
        .animate-slow-zoom { animation: slow-zoom 25s infinite alternate ease-in-out; }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards; }

        .delay-300 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.8s; }
        .delay-700 { animation-delay: 1.2s; }
      `}</style>
    </section>
  );
};