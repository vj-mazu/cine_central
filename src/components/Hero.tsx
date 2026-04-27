import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.8]);

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Background Video with Parallax Zoom */}
      <motion.div className="absolute inset-0 z-0" style={{ scale: videoScale }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260206_044704_dd33cb15-c23f-4cfc-aa09-a0465d4dcb54.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* Dynamic Overlay - Keep it dark for the cinematic feel */}
      <motion.div className="absolute inset-0 bg-black z-[1]" style={{ opacity: overlayOpacity }} />

      {/* Grain Texture */}
      <div className="absolute inset-0 z-[2] opacity-[0.03]" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        backgroundRepeat: 'repeat',
      }} />

      {/* Content Layer with Parallax */}
      <motion.div className="relative z-10 container mx-auto px-4 sm:px-6 pt-32 md:pt-48 pb-20" style={{ y: textY }}>
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex items-center gap-4 mb-8 overflow-hidden"
          >
            <div className="w-12 h-[1px] bg-brand-gold" />
            <span className="text-brand-gold font-sans text-[10px] uppercase tracking-[5px] whitespace-nowrap">
              Private Theatre & Events
            </span>
          </motion.div>

          {/* Headline — Character Stagger */}
          <h1 className="hero-headline flex flex-col font-bold text-white uppercase">
            {["PREMIUM", "CINEMA &", "EVENTS"].map((line, lineIndex) => (
              <span key={lineIndex} className="block overflow-hidden">
                <motion.span
                  initial={{ y: '120%', rotateX: -40 }}
                  animate={{ y: '0%', rotateX: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.5 + lineIndex * 0.15,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="block text-5xl sm:text-6xl md:text-8xl lg:text-[100px] xl:text-[120px]"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-white/90 font-sans text-base sm:text-lg max-w-2xl mt-8 leading-relaxed"
          >
            <span className="font-serif-italic italic text-brand-gold text-2xl sm:text-3xl pr-1">Premium</span> 
            Private Theatre & Event Space. Book your 
            <span className="font-serif-italic italic text-brand-gold text-2xl sm:text-3xl px-1">exclusive</span> 
            slot for movies, birthdays, anniversaries, and private parties.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/918431005515"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-[184px] h-[65px] flex items-center justify-center transition-transform duration-300 active:scale-95 hover:scale-105"
            >
              <svg
                viewBox="0 0 184 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full"
              >
                <path d="M0 0H184V45L164 65H0V0Z" fill="white" />
              </svg>
              <span className="relative z-10 font-rubik font-bold text-[16px] sm:text-[20px] text-black uppercase">
                GET STARTED
              </span>
            </a>

            <a
              href="#services"
              className="flex items-center gap-3 text-white/60 hover:text-white font-sans text-xs uppercase tracking-[3px] transition-colors duration-300 py-4 sm:py-0 sm:pl-6"
            >
              <span className="w-8 h-[1px] bg-white/40" />
              Explore Services
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Floating Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-4 sm:left-6 md:left-12 right-4 sm:right-6 md:right-12 z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4"
      >
        <div>
          <p className="text-white/40 font-sans text-[10px] uppercase tracking-[3px]">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-[1px] h-8 bg-gradient-to-b from-white/60 to-transparent mt-2 mx-auto sm:mx-0"
          />
        </div>
        <div className="text-right hidden md:block">
          <p className="text-white font-bold text-sm uppercase tracking-widest">Cine Central Raichur</p>
          <p className="text-white/60 text-xs mt-1">Raichur's Luxury Private Theatre</p>
        </div>
      </motion.div>
    </section>
  );
};
