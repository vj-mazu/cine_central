import { Maximize, Music, Monitor, Wind, Tv, Armchair, Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const specs = [
  { icon: <Maximize size={24} />, label: "Screen", value: "150 INCH", detail: "4K Ultra HD Cinematic Screen" },
  { icon: <Music size={24} />, label: "Audio", value: "DOLBY ATMOS", detail: "Immersive Surround Sound System" },
  { icon: <Monitor size={24} />, label: "Visuals", value: "4K ULTRA HD", detail: "Crystal-clear HDR Picture" },
  { icon: <Wind size={24} />, label: "Comfort", value: "FULL AC", detail: "100% Private Air-Conditioned" },
  { icon: <Tv size={24} />, label: "Content", value: "ALL OTT", detail: "Netflix, Prime, Hotstar & More" },
  { icon: <Sparkles size={24} />, label: "Privacy", value: "100% PRIVATE", detail: "Exclusive Venue for Your Group" },
  { icon: <Star size={24} />, label: "Ambience", value: "AMBIENT LIGHT", detail: "Customizable Mood Lighting" },
  { icon: <Armchair size={24} />, label: "Seating", value: "LUXURY SOFAS", detail: "Premium Luxury Sofa Seating" },
];

const Specs = () => {
  return (
    <section className="py-20 md:py-28 bg-brand-bg relative overflow-hidden">
      {/* Subtle top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center gap-4 mb-12 md:mb-16"
        >
          <div className="w-12 h-[1px] bg-brand-gold" />
          <span className="text-brand-gold font-sans text-[10px] uppercase tracking-[5px] font-bold">
            Theatre Specifications
          </span>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-black/5 rounded-2xl overflow-hidden border border-black/5 shadow-sm">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="flex flex-col items-start gap-3 p-6 md:p-8 bg-white hover:bg-[#fafafa] transition-colors duration-500 group"
            >
              <div className="text-brand-gold/60 group-hover:text-brand-gold transition-colors duration-500">
                {spec.icon}
              </div>
              <div>
                <span className="text-brand-dark/50 font-sans text-[9px] uppercase tracking-[3px] block mb-1.5 font-bold">{spec.label}</span>
                <p className="text-base md:text-lg font-serif-italic text-brand-dark tracking-wide uppercase italic leading-tight font-bold">{spec.value}</p>
                <span className="text-brand-dark/60 font-sans text-[10px] block mt-1.5 leading-relaxed">{spec.detail}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specs;
