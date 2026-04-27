import { motion, AnimatePresence } from 'framer-motion';
import { Film, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

const quotes = [
  "Cinema is a mirror that can focus the world.",
  "Every frame is a painting, every memory a masterpiece.",
  "Movies touch our hearts and awaken our vision.",
  "Where every story finds its spotlight.",
  "Experience the magic of private cinema."
];

export const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    // Pick a random quote
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);

    // End loading after 3.5 seconds (3s for progress + 0.5s for exit)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[9999] bg-brand-dark flex flex-col items-center justify-center p-6 text-center"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/2 -right-1/2 w-full h-full border-[1px] border-brand-gold/30 rounded-full"
            />
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl relative z-10"
          >
            <div className="mb-12 flex flex-col items-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                className="mb-6"
              >
                <Film size={60} className="text-brand-gold" />
              </motion.div>
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-serif-italic text-white italic font-black tracking-tighter uppercase">
                  CINE CENTRAL
                </span>
                <span className="text-[10px] font-sans text-brand-gold tracking-[8px] uppercase mt-1 font-bold">
                  Raichur
                </span>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-12"
            >
              <div className="w-12 h-[1px] bg-brand-gold/50 mx-auto mb-8" />
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-white font-serif-italic italic text-2xl md:text-4xl font-bold leading-tight px-4"
              >
                "{quote}"
              </motion.h3>
              <div className="w-12 h-[1px] bg-brand-gold/50 mx-auto mt-8" />
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-64 mx-auto space-y-4">
              <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                  className="h-full bg-brand-gold shadow-[0_0_20px_rgba(201,160,80,1)]"
                />
              </div>
              
              <div className="flex items-center justify-center gap-3 text-white/40 font-sans text-[9px] uppercase tracking-[4px] font-bold">
                <Loader2 size={12} className="animate-spin" /> 
                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Dimming the lights...
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* Bottom Branding */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-12 left-0 w-full"
          >
            <p className="text-white/20 font-sans text-[8px] uppercase tracking-[5px] font-bold">
              EST. 2024 • PREMIUM PRIVATE THEATRE
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
