import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const PrivacyPolicy = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if URL hash is #privacy
    const checkHash = () => {
      if (window.location.hash === '#privacy') {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    // Check on mount
    checkHash();

    // Listen for hash changes
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const closeModal = () => {
    window.location.hash = '';
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-12"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="bg-brand-bg w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 md:top-8 md:right-8 bg-black/5 hover:bg-black/10 text-brand-dark p-3 rounded-full transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-brand-gold" />
                <span className="text-brand-gold font-sans text-[10px] uppercase tracking-[5px] font-bold">
                  Legal & Guidelines
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-serif-italic text-brand-dark italic mb-12 font-bold">
                Privacy & Policy
              </h2>

              <div className="space-y-12">
                {/* Section 1 */}
                <div>
                  <h3 className="text-brand-dark font-sans text-xs uppercase tracking-[3px] mb-4 font-bold">
                    1. Booking & Cancellation
                  </h3>
                  <div className="space-y-4 text-brand-dark/70 font-sans text-sm leading-relaxed font-medium">
                    <p>
                      All bookings are managed directly through our official WhatsApp number. A partial advance payment may be required to confirm your slot.
                    </p>
                    <p>
                      Cancellations made at least 4 hours prior to the scheduled screening time are eligible for a reschedule or refund. Last-minute cancellations may result in forfeiture of the advance payment.
                    </p>
                  </div>
                </div>

                {/* Section 2 */}
                <div>
                  <h3 className="text-brand-dark font-sans text-xs uppercase tracking-[3px] mb-4 font-bold">
                    2. Venue Guidelines
                  </h3>
                  <div className="space-y-4 text-brand-dark/70 font-sans text-sm leading-relaxed font-medium">
                    <p>
                      <strong className="text-brand-dark">Outside Food:</strong> We gladly allow outside food and beverages in the theatre. However, we request guests to maintain cleanliness and use the provided disposal bins.
                    </p>
                    <p>
                      <strong className="text-brand-dark">Capacity Limit:</strong> For "Traditional Functions" and "Family Room" bookings, the maximum guest capacity agreed upon during booking must be strictly followed to ensure comfort and safety.
                    </p>
                    <p>
                      <strong className="text-brand-dark">Damage Policy:</strong> Any damage to the screen, audio equipment, seating, or decor will be billed to the booking party.
                    </p>
                  </div>
                </div>

                {/* Section 3 */}
                <div>
                  <h3 className="text-brand-dark font-sans text-xs uppercase tracking-[3px] mb-4 font-bold">
                    3. Privacy & Data Collection
                  </h3>
                  <div className="space-y-4 text-brand-dark/70 font-sans text-sm leading-relaxed font-medium">
                    <p>
                      Cine Central Raichur collects minimal personal information (Name, Contact Number, Event Details) strictly for managing your booking.
                    </p>
                    <p>
                      We do not share, sell, or distribute your personal contact information to any third parties. Promotional messages via WhatsApp will only be sent with your prior consent.
                    </p>
                    <p>
                      For security purposes, the common areas and entrance of the venue may be under CCTV surveillance. However, the private screening rooms are strictly 100% private with no cameras.
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-black/5 mt-12">
                  <p className="text-brand-dark/50 font-sans text-xs italic font-medium">
                    Last updated: April 2026. For any queries regarding our policies, please contact us at +91 84310 05515.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
