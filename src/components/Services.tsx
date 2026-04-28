import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, UtensilsCrossed, Cake, Gamepad2, Coffee, Sparkles, Armchair, Tv, Monitor, Wind } from 'lucide-react';

interface ServiceItem {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  coverImage: string;
  galleryImages: string[];
  num: string;
  highlights: string[];
}

const services: ServiceItem[] = [
  {
    title: "Private Screening",
    subtitle: "Your Cinema, Your Rules",
    description: "Experience movies in absolute privacy with a 150-inch 4K Ultra HD cinematic screen and immersive Dolby Atmos surround sound.",
    longDescription: "Enjoy your favorite content on a massive 150-inch 4K Ultra HD screen with immersive Dolby Atmos surround sound. Compatible with all major OTT platforms — Netflix, Prime Video, Disney+ Hotstar, Zee5, SonyLiv, Apple TV+, and YouTube. Catch all the action live with IPL matches, World Cup, and your favorite sports. Every seat is a premium luxury experience.",
    coverImage: "/images/private-screening-main.png",
    galleryImages: ["/images/private-screening-main.png", "/images/theater.png", "/images/match-screening.png", "/images/ambiance.png", "/images/img1.jpg", "/images/img2.jpg"],
    num: "01",
    highlights: ["Massive 150-inch 4K Theatre Screen", "Immersive Dolby Atmos Sound", "Live IPL & All Major OTTs", "Ultra-Premium Luxury Recliners"]
  },
  {
    title: "Birthdays & Anniversaries",
    subtitle: "Celebrate in Style",
    description: "Make your special day unforgettable with free basic decoration, cake-cutting arrangements, and surprise setups.",
    longDescription: "Our team specializes in creating magical birthday and anniversary experiences. From balloon arches and LED lights to cake-cutting arrangements and surprise reveals — every detail is crafted for your joy. Professional decorations are included with every booking, and you can customize the setup to match your theme.",
    coverImage: "/images/birthday-setup.jpeg",
    galleryImages: ["/images/birthday-setup.jpeg", "/images/img4.jpg", "/images/img5.jpg", "/images/img6.jpg"],
    num: "02",
    highlights: ["Grand Celebration Decor Included", "Customized Cake-Cutting Setup", "Special Surprise Reveal", "Cinematic Lighting & Music"]
  },
  {
    title: "Private Parties",
    subtitle: "Intimate & Exclusive",
    description: "The perfect venue for bride-to-be parties, kitty parties, farewells, and intimate gatherings with a dance floor.",
    longDescription: "Whether it's a bride-to-be celebration, a kitty party with friends, or a farewell for someone special — our private space transforms into whatever you need. Features include a dedicated dance floor, customizable lighting, and a cozy atmosphere. Bring your own playlist and let the party begin.",
    coverImage: "/images/private-party.png",
    galleryImages: ["/images/private-party.png", "/images/celebration.png", "/images/img7.jpg", "/images/img8.jpg"],
    num: "03",
    highlights: ["Exclusive Bride-to-Be Setup", "Private Kitty Party Venue", "Dedicated Dance Floor", "High-End Audio System"]
  },
  {
    title: "Traditional Functions",
    subtitle: "Heritage Meets Luxury",
    description: "Host traditional ceremonies and family functions in our exclusive private venue, available for a limited number of guests.",
    longDescription: "Celebrate traditional occasions — from poojas and naming ceremonies to small family gatherings — in an intimate, air-conditioned private setting. We keep the guest count limited to preserve the exclusivity of the experience. Outside food is welcome, so you can bring homemade favorites or order from your preferred caterer.",
    coverImage: "/images/ambiance.png",
    galleryImages: ["/images/ambiance.png", "/images/img10.jpg", "/images/img11.jpg", "/images/img12.jpg"],
    num: "04",
    highlights: ["Intimate Family Gatherings", "Outside Catering Welcome", "Full AC Comfort", "Traditional Ceremony Setup"]
  }
];

const extras = [
  { icon: <UtensilsCrossed size={22} />, label: "Outside Food Allowed", desc: "Bring your own food & beverages — no restrictions" },
  { icon: <Armchair size={22} />, label: "Luxury Recliner Seating", desc: "Premium plush recliners for maximum comfort & relaxation" },
  { icon: <Tv size={22} />, label: "All OTT Platforms", desc: "Netflix, Prime, Hotstar, Zee5, SonyLiv, Apple TV+ & more" },
  { icon: <Monitor size={22} />, label: "Live Matches", desc: "Watch IPL, World Cup & sports on a 150-inch screen" },
  { icon: <Cake size={22} />, label: "Birthday Special", desc: "Props, sashes, and magical surprises for your day" },
  { icon: <Coffee size={22} />, label: "In-House Café", desc: "Freshly prepared snacks & beverages available" },
  { icon: <Gamepad2 size={22} />, label: "VR & PS Gaming", desc: "Virtual Reality headsets & PlayStation console" },
  { icon: <Wind size={22} />, label: "Full AC Control", desc: "100% private air-conditioned space for your group" },
];

// ─── Image Gallery Modal ───
// KEEP THIS DARK for best image viewing experience
const ImageGallery = ({ images, title, onClose }: { images: string[]; title: string; onClose: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goNext = () => setCurrentIndex((p) => (p + 1) % images.length);
  const goPrev = () => setCurrentIndex((p) => (p - 1 + images.length) % images.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <button onClick={onClose} className="absolute top-4 right-4 md:top-8 md:right-8 text-white/40 hover:text-white z-50 p-2">
        <X size={28} />
      </button>

      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-white font-serif-italic italic text-2xl md:text-4xl mb-6 font-bold"
      >
        {title}
      </motion.h3>

      <div className="relative w-full max-w-4xl aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${title} ${currentIndex + 1}`}
            initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        <button onClick={(e) => { e.stopPropagation(); goPrev(); }}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 md:p-3 backdrop-blur-sm transition-colors">
          <ChevronLeft size={24} />
        </button>
        <button onClick={(e) => { e.stopPropagation(); goNext(); }}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 md:p-3 backdrop-blur-sm transition-colors">
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="flex gap-2 mt-6">
        {images.map((_, i) => (
          <button key={i} onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-brand-gold w-8' : 'bg-white/20 w-1.5'}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

// ─── Individual Service Block (Editorial Style) ───
const ServiceBlock = ({ service, index, onOpenGallery }: { service: ServiceItem; index: number; onOpenGallery: () => void }) => {
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center ${isReversed ? 'lg:direction-rtl' : ''}`}
    >
      {/* Image Side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        className={`aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-2xl md:rounded-3xl relative cursor-pointer group shadow-[0_20px_50px_rgba(0,0,0,0.1)] ${isReversed ? 'lg:order-2' : ''}`}
        onClick={onOpenGallery}
      >
        <motion.img
          src={service.coverImage}
          alt={service.title}
          className="w-full h-full object-cover object-center contrast-[1.1] saturate-[1.1] transition-transform duration-[1.5s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
        
        {/* Number overlay */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          className="absolute -top-4 -left-2 text-[120px] sm:text-[180px] md:text-[220px] font-serif-italic italic text-white font-bold leading-none select-none pointer-events-none"
        >
          {service.num}
        </motion.span>

        {/* Tap hint */}
        <div className="absolute bottom-6 left-6 right-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Sparkles size={14} className="text-brand-gold" />
          <span className="text-[10px] text-white/90 font-sans uppercase tracking-[3px] font-bold">
            View gallery
          </span>
        </div>
      </motion.div>

      {/* Text Side */}
      <div className={`flex flex-col justify-center ${isReversed ? 'lg:order-1 lg:text-right lg:items-end' : ''}`}>
        <motion.span
          initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-brand-gold font-sans text-xs uppercase tracking-[5px] mb-4 block font-black bg-brand-gold/10 px-4 py-2 rounded-md inline-block w-fit"
        >
          {service.subtitle}
        </motion.span>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-serif-italic text-brand-dark italic mb-6 leading-[0.9] font-black"
        >
          {service.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-brand-dark/80 font-sans text-base sm:text-lg leading-relaxed mb-8 max-w-lg font-medium line-clamp-3 md:line-clamp-none ${isReversed ? 'lg:ml-auto' : ''}`}
        >
          {service.longDescription}
        </motion.p>

        {/* Highlights */}
        <div className={`flex flex-wrap gap-3 mb-10 ${isReversed ? 'lg:justify-end' : ''}`}>
          {service.highlights.map((h, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="px-5 py-2.5 rounded-xl bg-brand-dark text-white font-sans text-[10px] uppercase tracking-[2px] shadow-md font-bold"
            >
              {h}
            </motion.span>
          ))}
        </div>

        {/* Action Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          onClick={onOpenGallery}
          className="px-8 py-4 bg-brand-gold text-white font-sans text-xs uppercase tracking-[3px] font-black rounded-full hover:bg-[#b58c40] hover:scale-105 transition-all shadow-xl shadow-brand-gold/20 flex items-center gap-3 w-fit"
        >
          <Sparkles size={16} /> Open Gallery
        </motion.button>
      </div>
    </motion.div>
  );
};

// ─── Main Services Component ───
export const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <>
      <section id="services" className="py-20 md:py-40 px-4 sm:px-6 md:px-12 lg:px-24 bg-brand-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="mb-20 md:mb-32">
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 'auto' }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-6 overflow-hidden"
            >
              <div className="w-12 h-[1px] bg-brand-gold" />
              <span className="text-brand-gold font-sans text-[10px] uppercase tracking-[5px] whitespace-nowrap font-bold">
                Curated Experiences
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif-italic text-brand-dark italic font-bold"
              >
                Services
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-brand-dark/60 font-sans text-sm max-w-lg mt-6 leading-relaxed"
            >
              From private movie screenings to grand celebrations — every experience is designed to be exclusively yours.
            </motion.p>
          </div>

          {/* Services List - Editorial Layout */}
          <div className="flex flex-col gap-24 md:gap-40">
            {services.map((service, index) => (
              <ServiceBlock
                key={index}
                service={service}
                index={index}
                onOpenGallery={() => setSelectedService(service)}
              />
            ))}
          </div>

          {/* ─── In-Theatre Amenities ─── */}
          <div className="mt-32 md:mt-48">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-brand-gold" />
                <span className="text-brand-gold font-sans text-[10px] uppercase tracking-[5px] font-bold">
                  What's Included
                </span>
              </div>
              <h3 className="text-4xl md:text-6xl font-serif-italic text-brand-dark italic font-bold">
                In-Theatre Amenities
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {extras.map((extra, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="flex items-start gap-5 p-6 md:p-8 rounded-2xl bg-white border border-black/5 hover:shadow-lg transition-all duration-500 group"
                >
                  <div className="text-brand-gold group-hover:scale-110 transition-transform duration-500 shrink-0 mt-1">
                    {extra.icon}
                  </div>
                  <div>
                    <span className="text-brand-dark font-sans text-sm font-bold block mb-1">
                      {extra.label}
                    </span>
                    <span className="text-brand-dark/60 font-sans text-xs leading-relaxed font-medium">
                      {extra.desc}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedService && (
          <ImageGallery
            images={selectedService.galleryImages}
            title={selectedService.title}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};
