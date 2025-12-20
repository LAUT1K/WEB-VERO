
import { Photo, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Galería', href: '#galeria' },
  { name: 'Sobre Mí', href: '#sobre-mi' },
  { name: 'Contacto', href: '#contacto' },
];

const WHATSAPP_NUMBER = "5491153234814";
const WHATSAPP_MESSAGE = "¡Hola Vero! Me interesa contratar tus servicios de fotografía. ¿Podrías darme más info?";

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/verol_valentini/',
  facebook: 'https://www.facebook.com/veronica.valentini.924686',
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  email: 'mailto:hola@verovalentini.com'
};

// Array centralizado para fácil edición de portafolio
export const GALLERY_IMAGES: Photo[] = [
  { id: 1, url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800', category: 'Retrato', title: 'Esencia Natural' },
  { id: 2, url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800', category: 'Moda', title: 'Texturas Urbanas' },
  { id: 3, url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800', category: 'Editorial', title: 'Minimalismo' },
  { id: 4, url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800', category: 'Estilo de Vida', title: 'Luz Cálida' },
  { id: 5, url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800', category: 'Retrato', title: 'Profundidad' },
  { id: 6, url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800', category: 'Moda', title: 'Contraste' },
  { id: 7, url: 'https://images.unsplash.com/photo-1621112904887-419379ce6824?auto=format&fit=crop&q=80&w=800', category: 'Deportiva', title: 'Acción Pura' },
  { id: 8, url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800', category: 'Eventos', title: 'Celebración' },
  { id: 9, url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800', category: 'Bodas', title: 'El Gran Día' },
];
