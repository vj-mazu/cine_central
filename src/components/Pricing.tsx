import { motion } from 'framer-motion';
import { Users, Film, Check, Star } from 'lucide-react';

const plans = [
  {
    icon: <Film size={28} />,
    name: "BASE PACKAGE",
    price: "₹500",
    period: "per session",
    description: "Perfect for a solo or small group private screening experience.",
    features: [
      "150-inch 4K Screen",
      "Dolby Atmos Sound",
      "OTT Platform Access",
      "Air-Conditioned Space",
      "Basic Seating"
    ],
    popular: false,
  },
  {
    icon: <Users size={28} />,
    name: "FAMILY / EVENT ROOM",
    price: "₹1,300",
    period: "per session",
    description: "Full family cinema and event experience with premium comfort.",
    features: [
      "Extended Group Seating",
      "Birthday/Anniversary Setup",
      "VR & PS Gaming Access",
      "Outside Food Allowed",
      "Complimentary Décor"
    ],
    popular: true,
  }
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

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-brand-bg relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-gold/[0.05] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-brand-gold" />
            <span className="text-brand-gold font-sans text-[10px] uppercase tracking-[5px] font-bold">Business Pricing</span>
            <div className="w-12 h-[1px] bg-brand-gold" />
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '100%' }}
              whileInView={{ y: '0%' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-8xl font-serif-italic text-brand-dark italic mb-6 font-bold"
            >
              Rates
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-brand-dark/70 font-sans text-sm max-w-md mx-auto leading-relaxed font-bold"
          >
            Transparent business pricing with no hidden charges. Outside food is welcome.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative flex flex-col p-8 md:p-12 transition-all duration-500 bg-white rounded-3xl ${
                plan.popular
                  ? 'md:-translate-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.08)] ring-2 ring-brand-gold'
                  : 'border border-black/10 shadow-md hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2"
                >
                  <span className="bg-brand-gold text-white font-sans text-[10px] font-bold uppercase tracking-[2px] px-6 py-2 rounded-full flex items-center gap-2 shadow-lg shadow-brand-gold/30">
                    <Star size={12} fill="currentColor" /> Premium Choice
                  </span>
                </motion.div>
              )}

              <div className={`mb-8 ${plan.popular ? 'text-brand-gold' : 'text-brand-dark'}`}>{plan.icon}</div>

              <h3 className="text-brand-dark font-sans text-xs font-bold uppercase tracking-[4px] mb-6">
                {plan.name}
              </h3>

              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl md:text-6xl font-serif-italic text-brand-dark italic font-black">
                  {plan.price}
                </span>
              </div>
              <span className="text-brand-dark/50 font-sans text-[10px] uppercase tracking-[3px] mb-8 block font-bold">
                {plan.period}
              </span>

              <p className="text-brand-dark/80 font-sans text-sm leading-relaxed mb-8 font-medium">
                {plan.description}
              </p>

              <ul className="flex flex-col gap-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 text-brand-dark font-sans text-sm font-bold">
                    <div className={`p-1 rounded-full ${plan.popular ? 'bg-brand-gold/10 text-brand-gold' : 'bg-black/5 text-brand-dark'}`}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/918431005515"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-center font-sans text-[10px] font-bold uppercase tracking-[3px] py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-brand-gold text-white hover:bg-[#b58c40] hover:scale-105 shadow-md hover:shadow-xl'
                    : 'bg-brand-dark text-white hover:bg-black hover:scale-105 shadow-md'
                }`}
              >
                Book on WhatsApp <WhatsAppIcon size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-brand-dark/50 font-sans text-[10px] uppercase tracking-[3px] mt-16 max-w-lg mx-auto leading-relaxed font-bold"
        >
          * Business rates apply. Contact us for custom corporate or large event packages.
        </motion.p>
      </div>
    </section>
  );
};
