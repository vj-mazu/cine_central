import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const Introduction = () => {
  return (
    <section className="py-20 md:py-32 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group"
          >
            <img 
              src="/images/theater.png" 
              alt="Luxury Theater Seating" 
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="text-white font-serif-italic italic text-2xl md:text-3xl font-bold">
                Premium Luxury Sofas
              </span>
            </div>
          </motion.div>

          {/* Text Side */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-brand-gold" />
              <span className="text-brand-gold font-sans text-[10px] uppercase tracking-[5px] font-bold">
                The Ultimate Comfort
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif-italic text-brand-dark italic mb-8 leading-[1.1] font-bold"
            >
              Sink into <span className="text-brand-gold">Luxury Seating</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-brand-dark/70 font-sans text-base md:text-lg leading-relaxed mb-10 font-medium"
            >
              Forget traditional theatre seats. Our private space is furnished with ultra-premium luxury sofas designed for maximum relaxation. Whether you're watching a blockbuster or a live match, experience it in a cozy, intimate environment that feels like home, but looks like a palace.
            </motion.p>

            <div className="grid grid-cols-2 gap-6 mb-12">
              {[
                { label: "Plush Comfort", desc: "Ultra-soft cushioning" },
                { label: "Private Space", desc: "100% exclusive access" },
                { label: "Full Recline", desc: "Relax as you watch" },
                { label: "AC Control", desc: "Personalized cooling" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex flex-col"
                >
                  <span className="text-brand-dark font-sans text-sm font-bold mb-1 flex items-center gap-2">
                    <Sparkles size={14} className="text-brand-gold" /> {item.label}
                  </span>
                  <span className="text-brand-dark/50 font-sans text-xs">{item.desc}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="w-fit px-10 py-5 bg-brand-dark text-white font-sans text-xs uppercase tracking-[4px] font-black rounded-full hover:bg-brand-gold hover:text-white transition-all shadow-xl"
            >
              View Amenities
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
