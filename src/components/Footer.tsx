import { Camera, MapPin, Phone, Clock } from 'lucide-react';

const WhatsAppIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);
export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
        {/* Brand Section */}
        <div className="col-span-1 sm:col-span-2">
          <h2 className="text-3xl md:text-4xl font-serif-italic font-black mb-6 md:mb-8 tracking-tighter uppercase italic text-white">
            CINE CENTRAL <span className="text-brand-gold">RAICHUR</span>
          </h2>
          <p className="text-white/70 max-w-sm mb-8 md:mb-12 font-sans text-xs uppercase tracking-widest leading-loose font-medium">
            Experience movies in absolute privacy with 4K visuals and immersive sound. Raichur's most exclusive venue for personal celebrations.
          </p>
          <div className="flex gap-6 md:gap-8">
            <a 
              href="https://www.instagram.com/cinecentral36raichur?igsh=bzg4cmQ0dXN4anhu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-brand-gold transition-colors"
            >
              <Camera size={20} />
            </a>
            <a 
              href="https://wa.me/918431005515" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-brand-gold transition-colors"
            >
              <WhatsAppIcon size={20} />
            </a>
            <a 
              href="https://maps.app.goo.gl/6qarzDbpHwW5ELde9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-brand-gold transition-colors"
            >
              <MapPin size={20} />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6 md:gap-8">
          <h4 className="text-[10px] font-sans font-bold uppercase tracking-[5px] text-brand-gold">Contact</h4>
          <ul className="space-y-4 md:space-y-6">
            <li className="flex items-start gap-3 md:gap-4 text-white/70">
              <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" />
              <a 
                href="https://maps.app.goo.gl/6qarzDbpHwW5ELde9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-sans uppercase tracking-widest leading-relaxed hover:text-white transition-colors font-medium"
              >
                2nd Floor, Opposite Vishal Mart, <br />
                Above Yes Bank, Haji Colony, <br />
                Raichur, Karnataka 584101
              </a>
            </li>
            <li className="flex items-center gap-3 md:gap-4 text-white/70">
              <Phone size={18} className="text-brand-gold shrink-0" />
              <a href="tel:+918431005515" className="text-xs font-sans uppercase tracking-widest hover:text-white transition-colors font-medium">+91 84310 05515</a>
            </li>
          </ul>
        </div>

        {/* Hours & Links */}
        <div className="flex flex-col gap-6 md:gap-8">
          <h4 className="text-[10px] font-sans font-bold uppercase tracking-[5px] text-brand-gold">Hours</h4>
          <ul className="space-y-4 md:space-y-6">
            <li className="flex items-center gap-3 md:gap-4 text-white/70">
              <Clock size={18} className="text-brand-gold shrink-0" />
              <span className="text-xs font-sans uppercase tracking-widest font-medium">Daily: 10:00 AM - 10:30 PM</span>
            </li>
          </ul>

          <h4 className="text-[10px] font-sans font-bold uppercase tracking-[5px] text-brand-gold mt-4">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="#services" className="text-white/60 hover:text-white text-xs font-sans uppercase tracking-widest transition-colors font-bold">Services</a></li>
            <li><a href="#pricing" className="text-white/60 hover:text-white text-xs font-sans uppercase tracking-widest transition-colors font-bold">Pricing</a></li>
            <li><a href="#reviews" className="text-white/60 hover:text-white text-xs font-sans uppercase tracking-widest transition-colors font-bold">Reviews</a></li>
            <li><a href="#privacy" className="text-white/60 hover:text-white text-xs font-sans uppercase tracking-widest transition-colors font-bold">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 md:mt-32 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-8 text-[10px] text-white/50 uppercase tracking-[4px] font-bold">
        <p>© 2026 Cine Central Raichur.</p>
        <p>Private Theater & Event Venue</p>
      </div>
    </footer>
  );
};
