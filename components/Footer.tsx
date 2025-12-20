import React from 'react';
import { SOCIAL_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 py-24 px-6 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h3 className="font-serif text-3xl tracking-[0.3em] mb-12">VERO VALENTINI</h3>
        
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-16">
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-3 text-white/50 hover:text-accent transition-colors">
            <span className="text-[10px] uppercase tracking-[0.4em]">Instagram</span>
          </a>
          <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-3 text-white/50 hover:text-accent transition-colors">
            <span className="text-[10px] uppercase tracking-[0.4em]">Facebook</span>
          </a>
          <a href={SOCIAL_LINKS.email} className="group flex items-center space-x-3 text-white/50 hover:text-accent transition-colors">
            <span className="text-[10px] uppercase tracking-[0.4em]">Email</span>
          </a>
        </div>

        <div className="w-full h-px bg-white/5 mb-12"></div>

        <div className="text-center space-y-4">
          <p className="text-[9px] text-white/30 uppercase tracking-[0.5em]">
            © {new Date().getFullYear()} VERO VALENTINI STUDIO · QUILMES - BUENOS AIRES
          </p>
          <p className="text-[9px] text-white/20 uppercase tracking-[0.3em] italic font-light">
            Arte, luz y sentimiento capturados en cada disparo.
          </p>
        </div>
      </div>
    </footer>
  );
};