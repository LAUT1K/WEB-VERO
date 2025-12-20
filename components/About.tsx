import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="w-full md:w-1/2 relative reveal">
            <div className="absolute -top-6 -left-6 w-full h-full border border-neutral-100 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=800" 
              alt="Vero Valentini trabajando" 
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
              loading="lazy"
            />
          </div>

          <div className="w-full md:w-1/2 reveal">
            <span className="text-accent text-xs font-sans tracking-[0.4em] uppercase mb-4 block font-semibold">La mirada detrás</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Vero Valentini</h2>
            <div className="space-y-6 text-neutral-600 text-sm md:text-base leading-[1.8] tracking-wide font-light">
              <p>
                Con más de una década dedicada a la captura de momentos, mi enfoque se basa en la honestidad visual y el minimalismo. Creo que la fotografía es el arte de hacer eterno lo que apenas dura un instante.
              </p>
              <p>
                Especializada en fotografía familiar, deportiva y newborn, busco siempre la luz natural y la conexión genuina. Mi trabajo es un equilibrio entre la técnica y la emoción pura del momento presente.
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-neutral-100 flex flex-wrap gap-12">
              <div>
                <h4 className="font-serif text-2xl mb-1">10+</h4>
                <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold">Años de Exp.</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl mb-1">200+</h4>
                <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold">Sesiones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};