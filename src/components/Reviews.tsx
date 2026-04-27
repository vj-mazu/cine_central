import { motion } from 'framer-motion';
import { Star, MapPin, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Priya Sharma",
    text: "I had my daughter's 1st birthday here and it was amazing!!! Lots of enjoyment... The decoration was nice, good ambience and top notch. Kids had a great time. I'm so glad, would recommend it to anyone.",
    rating: 5,
    source: "Google Review",
    timeAgo: "2 months ago"
  },
  {
    name: "Monika R",
    text: "We had a wonderful time at the private theatre with our family and friends. The space was clean, cozy, and well-equipped with great sound and visuals. Perfect for small private screenings!",
    rating: 5,
    source: "Local Guide",
    timeAgo: "1 month ago"
  },
  {
    name: "Rahul K",
    text: "Often, there's a party vibe with balloons, lights, and a dance floor. A perfect spot for intimate gatherings. The Dolby Atmos sound is absolutely incredible for a private setup.",
    rating: 5,
    source: "Google Review",
    timeAgo: "3 weeks ago"
  },
  {
    name: "Sneha Patil",
    text: "Celebrated our anniversary here — surprise decoration was beautiful! The 4K screen quality is theatre-grade. Staff was very cooperative and the outside food policy is a huge plus.",
    rating: 5,
    source: "Google Review",
    timeAgo: "1 week ago"
  }
];

const RatingStars = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={12} className={i < rating ? 'text-brand-gold fill-brand-gold' : 'text-black/10'} />
    ))}
  </div>
);

export const Reviews = () => {
  return (
    <section id="reviews" className="py-20 md:py-40 px-4 sm:px-6 md:px-12 lg:px-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 'auto' }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6 overflow-hidden"
          >
            <div className="w-12 h-[1px] bg-brand-gold" />
            <span className="text-brand-gold font-sans text-[10px] uppercase tracking-[5px] whitespace-nowrap font-bold">
              Voice of our guests
            </span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl sm:text-6xl md:text-8xl font-serif-italic text-brand-dark italic font-bold"
              >
                Reviews
              </motion.h2>
            </div>

            {/* Rating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2">
                  <span className="text-5xl md:text-6xl font-serif-italic text-brand-dark italic font-bold">4.9</span>
                  <Star size={24} className="text-brand-gold fill-brand-gold" />
                </div>
                <span className="text-brand-dark/40 font-sans text-[10px] uppercase tracking-[3px] mt-1 font-bold">
                  on Google Maps
                </span>
              </div>
              <a
                href="https://maps.app.goo.gl/6qarzDbpHwW5ELde9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold/70 hover:text-brand-gold transition-colors"
              >
                <MapPin size={20} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative flex flex-col p-8 md:p-10 rounded-2xl bg-white border border-black/5 hover:shadow-lg transition-all duration-500 group"
            >
              {/* Quote icon */}
              <Quote size={40} className="text-brand-gold/[0.1] absolute top-6 right-6 group-hover:text-brand-gold/[0.15] transition-colors duration-500" />

              <RatingStars rating={review.rating} />

              <p className="text-brand-dark/70 font-sans text-sm sm:text-base leading-relaxed mt-6 mb-8 flex-grow relative z-10 font-medium">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div>
                  <h4 className="text-brand-dark font-sans text-sm font-bold">{review.name}</h4>
                  <span className="text-brand-dark/40 font-sans text-[10px] uppercase tracking-[2px] font-bold">
                    {review.source}
                  </span>
                </div>
                <span className="text-brand-dark/30 font-sans text-[10px] font-bold">
                  {review.timeAgo}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="https://maps.app.goo.gl/6qarzDbpHwW5ELde9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-brand-gold hover:text-[#b58c40] font-sans text-xs uppercase tracking-[3px] transition-colors duration-300 group font-bold"
          >
            <MapPin size={14} />
            <span>View all reviews on Google Maps</span>
            <span className="w-0 group-hover:w-6 h-[1px] bg-brand-gold transition-all duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
