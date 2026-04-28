import { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

const items = [
  { id: 1, title: 'Private Cinema', image: '/images/img1.jpg' },
  { id: 2, title: 'Celebrations', image: '/images/img2.jpg' },
  { id: 3, title: 'Birthday Setup', image: '/images/img3.jpg' },
  { id: 4, title: 'Anniversary', image: '/images/img4.jpg' },
  { id: 5, title: 'Luxury Seating', image: '/images/img5.jpg' },
  { id: 6, title: 'Memorable Nights', image: '/images/img6.jpg' },
  { id: 7, title: 'Surprise Setups', image: '/images/img7.jpg' },
  { id: 8, title: 'Private Moments', image: '/images/img8.jpg' },
  { id: 9, title: 'Elegant Decor', image: '/images/img9.jpg' },
  { id: 10, title: 'Royal Experience', image: '/images/img10.jpg' },
];

export const HorizontalShowcase = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.3]);

  return (
    <section id="gallery" ref={targetRef} className="relative h-[400vh] bg-brand-bg">
      {/* Gradient borders */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/5 to-transparent z-10" />

      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6 md:gap-12 px-4 sm:px-6 md:px-24 items-center">
          {/* Header Card */}
          <motion.div
            style={{ opacity: headerOpacity }}
            className="flex flex-col justify-center min-w-[280px] sm:min-w-[350px] md:min-w-[500px] pr-4 md:pr-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-brand-gold" />
              <span className="text-brand-gold font-sans text-[10px] uppercase tracking-[6px] font-bold">Gallery</span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-9xl font-serif-italic text-brand-dark leading-[0.85] uppercase italic font-bold">
              Cinematic <br />
              <span className="text-brand-gold">Moments</span>
            </h2>
            <p className="text-brand-dark/50 font-sans text-xs uppercase tracking-[3px] mt-6 max-w-xs hidden md:block font-bold">
              Swipe through real moments captured at Cine Central Raichur
            </p>
          </motion.div>

          {/* Gallery Items */}
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative h-[400px] w-[280px] sm:h-[500px] sm:w-[350px] md:h-[700px] md:w-[500px] overflow-hidden rounded-2xl md:rounded-3xl bg-neutral-900 shrink-0 group"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-[1.2s] md:group-hover:scale-105"
              />
              {/* Title overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 md:p-8">
                <span className="text-white font-serif-italic italic text-xl md:text-2xl">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
