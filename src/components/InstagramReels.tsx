import { motion } from 'framer-motion';
import { Play, Camera } from 'lucide-react';

const reels = [
  {
    id: 1,
    url: "https://www.instagram.com/reel/DHN_xGYyJEX/?igsh=MW15OTd2cWdiejZ4bg%3D%3D",
    coverImage: "/images/img4.jpg",
    title: "Magical Birthday Surprises",
    views: "12.4K"
  },
  {
    id: 2,
    url: "https://www.instagram.com/reel/DFrkfPXS3bW/?igsh=MWprcGxrMHp0eWs2Mw==",
    coverImage: "/images/img7.jpg",
    title: "Luxury Private Screening",
    views: "8.9K"
  },
  {
    id: 3,
    url: "https://www.instagram.com/reel/DF-dfjbtMzM/?igsh=MWZmNG1vZzRlNmE3Zg==",
    coverImage: "/images/img11.jpg",
    title: "Unforgettable Gatherings",
    views: "15.2K"
  }
];

export const InstagramReels = () => {
  return (
    <section className="py-24 md:py-40 px-4 sm:px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden border-t border-black/5">
      {/* Broad Aesthetic Highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Decorative Background Text */}
      <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.03]">
        <h3 className="text-[200px] font-black text-brand-dark whitespace-nowrap -ml-20">
          INSTAGRAM FEED INSTAGRAM FEED
        </h3>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-brand-gold" />
            <span className="text-brand-gold font-sans text-[10px] uppercase tracking-[5px] font-bold flex items-center gap-2">
              <Camera size={14} /> @CineCentralRaichur
            </span>
            <div className="w-8 h-[1px] bg-brand-gold" />
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif-italic text-brand-dark italic font-bold max-w-2xl leading-tight relative">
            Follow the <span className="text-brand-gold animate-pulse shadow-brand-gold/20">Experience</span>
          </h2>
          <p className="mt-6 text-brand-dark/60 font-sans text-sm md:text-base max-w-xl leading-relaxed font-medium">
            Watch our latest reels to see how we turn ordinary moments into extraordinary cinematic memories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring", bounce: 0.4 }}
              className="relative group"
            >
              <motion.a
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover="hover"
                className="relative block aspect-[9/16] rounded-[2.5rem] p-2 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] ring-1 ring-black/5 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_40px_80px_rgba(201,160,80,0.25)]"
              >
                {/* Dual Aesthetic Border */}
                <div className="absolute inset-0 rounded-[2.5rem] ring-2 ring-brand-gold/30 group-hover:ring-brand-gold transition-all duration-500" />
                
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                  <motion.img
                    src={reel.coverImage}
                    alt={reel.title}
                    className="w-full h-full object-cover contrast-[1.1] saturate-[1.1] transition-transform duration-[2s] group-hover:scale-110"
                  />
                  
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Instagram Icon Top Right */}
                  <div className="absolute top-6 right-6 text-white/80 group-hover:text-brand-gold transition-colors duration-500">
                    <Camera size={20} />
                  </div>

                  {/* Play Button Center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      variants={{
                        hover: { scale: 1.1, backgroundColor: "rgba(201,160,80,0.4)", borderColor: "rgba(201,160,80,0.8)" }
                      }}
                      className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-all duration-500 shadow-2xl"
                    >
                      <Play size={20} className="ml-1 fill-white" />
                    </motion.div>
                  </div>

                  {/* Content Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-[1px] bg-brand-gold" />
                      <span className="text-white/60 font-sans text-[9px] uppercase tracking-[2px] font-bold">
                        {reel.views} Views
                      </span>
                    </div>
                    <h3 className="text-white font-serif-italic italic text-xl font-bold leading-tight group-hover:text-brand-gold transition-colors duration-500">
                      {reel.title}
                    </h3>
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Broad Highlight Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex flex-col items-center"
        >
          <a
            href="https://www.instagram.com/cinecentral36raichur?igsh=bzg4cmQ0dXN4anhu"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 bg-brand-dark text-white px-10 py-5 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl active:scale-95"
          >
            <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 font-sans text-xs font-black uppercase tracking-[4px] group-hover:text-brand-dark transition-colors duration-500">
              Join the Community
            </span>
            <Camera size={18} className="relative z-10 group-hover:text-brand-dark transition-colors duration-500" />
          </a>
          <p className="mt-6 text-brand-dark/30 font-sans text-[9px] uppercase tracking-[3px] font-bold">
            Tag us to get featured
          </p>
        </motion.div>
      </div>
    </section>
  );
};
