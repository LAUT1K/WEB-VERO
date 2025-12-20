import React, { useState, useEffect } from 'react';
import { GALLERY_IMAGES } from '../constants';

export const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const navigate = (direction: number) => {
    if (selectedIndex === null) return;
    const newIndex = (selectedIndex + direction + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    setSelectedIndex(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <section id="galeria" className="py-32 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center reveal">
          <span className="text-accent text-[10px] tracking-[0.5em] uppercase mb-4 block font-bold">Portafolio</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Galería Visual</h2>
          <div className="w-12 h-px bg-accent/40 mx-auto mb-8"></div>
          <p className="text-neutral-500 max-w-2xl mx-auto text-sm leading-relaxed tracking-wide font-light">
            Momentos capturados en su color y esencia natural, preservando la magia de cada instante.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {GALLERY_IMAGES.map((photo, index) => (
            <div 
              key={photo.id} 
              className="masonry-item relative group overflow-hidden cursor-zoom-in reveal bg-white shadow-sm"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={photo.url} 
                alt={photo.title}
                className="w-full object-cover transition-all duration-1000 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-center p-8 text-center backdrop-blur-[2px]">
                <span className="text-accent text-[9px] tracking-[0.4em] uppercase mb-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                  {photo.category}
                </span>
                <h3 className="text-white text-lg font-serif italic transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 delay-75">
                  {photo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[110] bg-neutral-950/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 animate-fade-in"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-8 right-8 text-white/40 hover:text-accent transition-all duration-300 z-[120]"
            onClick={closeLightbox}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button 
            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-white/20 hover:text-accent transition-all p-4 hidden md:block"
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
          >
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="relative max-w-full max-h-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={GALLERY_IMAGES[selectedIndex].url} 
              alt={GALLERY_IMAGES[selectedIndex].title} 
              className="max-w-full max-h-[80vh] object-contain shadow-2xl animate-scale-in"
            />
            <div className="mt-10 text-center animate-fade-in-up">
              <span className="text-accent text-[11px] tracking-[0.5em] uppercase">{GALLERY_IMAGES[selectedIndex].category}</span>
              <h4 className="text-white font-serif text-2xl mt-4 italic">{GALLERY_IMAGES[selectedIndex].title}</h4>
            </div>
          </div>

          <button 
            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-white/20 hover:text-accent transition-all p-4 hidden md:block"
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
          >
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        @keyframes scale-in { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-scale-in { animation: scale-in 0.8s cubic-bezier(0.22, 1, 0.36, 1); }
      `}</style>
    </section>
  );
};