import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[300] bg-neutral-900 flex flex-col items-center justify-center animate-fade-out">
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Anillo de enfoque */}
        <div className="absolute inset-0 border-[1px] border-accent/30 rounded-full animate-ping"></div>
        <div className="absolute inset-2 border-[1px] border-accent/20 rounded-full animate-pulse"></div>
        
        {/* Icono de Obturador SVG */}
        <svg viewBox="0 0 100 100" className="w-20 h-20 text-accent fill-none stroke-current stroke-[1.5] animate-spin-slow">
          <circle cx="50" cy="50" r="45" strokeDasharray="5, 10" />
          <path d="M50 5 L50 95" className="opacity-20" />
          <path d="M5 50 L95 50" className="opacity-20" />
          <g className="animate-lens-focus">
             <circle cx="50" cy="50" r="15" className="fill-accent/10" />
             <path d="M35 50 L65 50 M50 35 L50 65" strokeWidth="1" />
          </g>
        </svg>
      </div>
      
      <div className="mt-12 overflow-hidden">
        <h2 className="text-white font-serif text-xl tracking-[0.8em] uppercase animate-slide-up">
          VERO VALENTINI
        </h2>
        <p className="text-accent/60 text-[8px] uppercase tracking-[0.4em] mt-4 text-center animate-fade-in delay-500">
          Enfocando momentos...
        </p>
      </div>

      <style>{`
        @keyframes lens-focus {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-lens-focus { animation: lens-focus 2s infinite ease-in-out; }
        .animate-spin-slow { animation: spin 8s linear infinite; }
        .animate-slide-up { animation: slide-up 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-fade-out { animation: fadeOut 0.5s ease-in forwards; animation-delay: 1.6s; }
        
        @keyframes fadeOut {
          to { opacity: 0; visibility: hidden; }
        }
      `}</style>
    </div>
  );
};