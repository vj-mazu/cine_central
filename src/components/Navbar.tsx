import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl py-3 md:py-4 shadow-sm'
          : 'bg-transparent py-5 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex flex-col group">
          <span className={`text-lg sm:text-xl md:text-2xl font-serif-italic font-black tracking-tighter uppercase italic transition-colors duration-500 ${
            isScrolled ? 'text-brand-dark group-hover:text-brand-gold' : 'text-white group-hover:text-brand-gold'
          }`}>
            CINE CENTRAL
          </span>
          <span className="text-[9px] sm:text-[10px] font-sans text-brand-gold tracking-[3px] md:tracking-[4px] uppercase -mt-1 ml-1 font-bold">
            Raichur
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className={`text-[10px] font-sans font-bold uppercase tracking-[3px] transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-brand-gold hover:after:w-full after:transition-all after:duration-500 ${
                isScrolled ? 'text-brand-dark/60 hover:text-brand-dark' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            href="https://wa.me/918431005515"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 xl:px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[2px] flex items-center gap-2 hover:bg-brand-gold hover:text-white hover:scale-105 transition-all duration-300 shadow-sm ${
              isScrolled ? 'bg-brand-dark text-white' : 'bg-white text-black'
            }`}
          >
            Reserve <WhatsAppIcon size={14} />
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden z-50 relative ${isMobileMenuOpen ? 'text-brand-dark' : (isScrolled ? 'text-brand-dark' : 'text-white')}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 lg:hidden bg-brand-bg flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
               <motion.a
                 key={link.name}
                 href={link.href}
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                 className="text-3xl sm:text-4xl font-serif-italic text-brand-dark italic hover:text-brand-gold transition-colors font-bold"
                 onClick={() => setIsMobileMenuOpen(false)}
               >
                 {link.name}
               </motion.a>
             ))}
             <motion.a
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.6 }}
               href="https://wa.me/918431005515"
               className="mt-4 text-brand-gold font-sans text-xs uppercase tracking-[5px] border-b border-brand-gold/30 pb-2 font-bold"
             >
               Book Now
             </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
