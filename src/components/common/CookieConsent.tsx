import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('ebanex_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('ebanex_cookie_consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:w-[400px] z-[1000]"
        >
          <div className="relative group">
            {/* Background offset */}
            <div className="absolute inset-0 bg-[#00BFFF] translate-x-2 translate-y-2" />
            
            {/* Content box */}
            <div className="relative bg-black border-[4px] border-black p-6 shadow-2xl" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-black uppercase text-xs tracking-widest">Cookie Policy</h3>
                  <button onClick={() => setIsVisible(false)} className="text-white/40 hover:text-white transition-colors">
                    <X size={16} />
                  </button>
                </div>
                <p className="text-white/70 text-[11px] leading-relaxed font-medium uppercase tracking-wider mb-6">
                  We use cookies to improve your experience on our website. By continuing to browse, you agree to our use of cookies.
                </p>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={handleAccept}
                    className="flex-1 bg-[#00BFFF] hover:bg-white text-black text-[10px] font-black uppercase py-3 tracking-[0.2em] transition-all active:scale-95 border-2 border-black"
                  >
                    Accept
                  </button>
                  <button 
                    onClick={() => setIsVisible(false)}
                    className="flex-1 bg-black border-2 border-white/20 hover:border-white text-white text-[10px] font-black uppercase py-3 tracking-[0.2em] transition-all"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
