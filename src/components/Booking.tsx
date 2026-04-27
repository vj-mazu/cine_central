import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const benefits = [
  "150-inch 4K Ultra HD Screen",
  "Immersive Dolby Atmos Sound",
  "100% Private Luxury Space",
  "Free Basic Decoration Included",
  "All OTT Platforms Supported",
  "In-house Café & Gaming Zone"
];

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

const Booking = () => {
  return (
    <section id="booking" className="py-32 px-6 md:px-12 lg:px-24 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#1a1a1a] to-brand-black border border-white/5 p-8 md:p-20">
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-brand-gold font-inter text-xs uppercase tracking-[5px] block mb-6"
              >
                Reservations
              </motion.span>
              <h2 className="text-5xl md:text-7xl font-serif-italic text-brand-white mb-8 leading-tight italic">
                Ready for your <br /> <span className="text-brand-gold">Private Premiere?</span>
              </h2>
              <p className="text-brand-white/60 font-inter text-sm leading-relaxed mb-12 max-w-md uppercase tracking-widest">
                Book your exclusive slot for birthdays, anniversaries, or a private movie night. Experience cinematic magic tailored for you.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-gold/20 flex items-center justify-center">
                      <Check size={12} className="text-brand-gold" />
                    </div>
                    <span className="text-brand-white/70 text-xs font-inter uppercase tracking-widest">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="w-full max-w-sm p-10 rounded-[2.5rem] bg-brand-gold flex flex-col items-center text-center shadow-2xl"
              >
                <span className="text-brand-black font-inter text-[10px] font-black uppercase tracking-[4px] mb-4">Starting From</span>
                <span className="text-brand-black font-serif-italic text-6xl mb-6 italic">₹ 999</span>
                <p className="text-brand-black/60 font-inter text-xs mb-10 leading-relaxed uppercase tracking-widest">
                  Customized packages available for <br /> decorations & refreshments.
                </p>
                <a 
                  href="https://wa.me/918431005515"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-5 rounded-full bg-brand-black text-brand-gold font-inter font-black text-xs uppercase tracking-[3px] flex items-center justify-center gap-2 hover:bg-brand-black/90 transition-all"
                >
                  Book via WhatsApp <WhatsAppIcon size={16} />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
