import React, { useRef, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import aboutVideo from '../../assets/aboutv.mp4';

const TIPS = [
  "Cybersecurity is not just about technology; it's about people, processes, and a culture of vigilance.",
  "Digital transformation can increase business margins by up to 20% through operational efficiency.",
  "Continuous professional development is the single most important factor in long-term career resilience.",
  "By 2025, 75% of the global workforce will be millennials, requiring new approaches to institutional leadership.",
  "Organizations with strong digital trust foundations grow their revenue 10% faster than their peers.",
  "Data literacy is becoming as fundamental as reading and writing in the modern corporate environment.",
  "Effective risk management is not about avoiding risks, but about making informed decisions to take the right ones.",
  "Soft skills like emotional intelligence are now ranked as top priorities by 92% of talent professionals.",
  "A single cybersecurity breach can cost an organization an average of $4.45 million globally.",
  "Strategic thinking is a skill that can be developed at any level of an organization, not just at the top."
];

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  // Simple logic to get a "daily" tip
  const dailyTip = useMemo(() => {
    const today = new Date();
    // Use the day of the year to pick a tip
    const start = new Date(today.getFullYear(), 0, 0);
    const diff = today.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    return TIPS[dayOfYear % TIPS.length];
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section 
      className="relative min-h-[85vh] lg:min-h-[90vh] w-full flex flex-col-reverse lg:flex-row overflow-hidden bg-black"
    >
      {/* Dynamic Background Overlay */}
      <motion.div 
        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,191,255,0.05),transparent_70%)]"
      />

      {/* Left Content Half (40%) */}
      <div className="w-full lg:w-[40%] flex items-start justify-center lg:justify-end px-6 sm:px-12 lg:pr-0 xl:pr-0 pt-0 pb-12 lg:pt-0 lg:pb-20 relative z-20">
        <div className="max-w-xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-4 mb-4 mt-8 lg:mt-12">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-[1px] bg-[#00BFFF]"
              />
              <span className="text-[#00BFFF] text-[9px] font-black tracking-[0.6em] uppercase">
                Institutional Intelligence
              </span>
            </div>

            {/* Headline Area */}
            <h1 className="font-heading tracking-tight leading-[0.9] mb-6 text-white select-none text-center md:text-left relative">
              <div className="flex flex-col gap-2 items-center md:items-start">
                <motion.span
                  className="block text-[clamp(1.1rem,2.5vw,1.75rem)] font-light tracking-[-0.01em] uppercase text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 0.8, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Empowering People.
                </motion.span>

                <motion.span
                  className="resilience-gradient font-black tracking-[-0.04em] uppercase text-[clamp(2.25rem,4.5vw,4rem)] leading-none w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 1 }}
                >
                  Strengthening <br /> <span className="ml-0 sm:ml-[6%]">Organizations.</span>
                </motion.span>

                <motion.span
                  className="block font-light text-[clamp(0.9rem,2vw,1.5rem)] text-white/70 tracking-tight flex items-center gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <span className="h-[1px] w-10 bg-[#00BFFF]/50 hidden sm:block" />
                  Securing the Future<span className="text-[#00BFFF] font-heading">.</span>
                </motion.span>
              </div>
            </h1>

            {/* Description */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <p className="text-xs sm:text-sm text-white/60 max-w-xl leading-relaxed font-light border-l border-[#00BFFF]/20 pl-4 sm:pl-6 text-center md:text-left">
                Ebanex International is a global training and advisory firm delivering
                professional development, cybersecurity training, digital transformation capacity
                building, and institutional strengthening solutions across industries.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start"
            >
              <button 
                onClick={() => navigate('/training')}
                className="h-10 px-5 bg-[#00BFFF] text-black rounded-none font-bold text-[9px] uppercase tracking-[0.2em] hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(0,191,255,0.4)] active:scale-95"
              >
                View Training Programs
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="h-10 px-5 border border-[#00BFFF]/30 text-white rounded-none font-bold text-[9px] uppercase tracking-[0.2em] hover:bg-[#00BFFF]/10 hover:border-[#00BFFF] transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 group"
              >
                Contact Us
                <ArrowRight
                  className="text-[#00BFFF] group-hover:translate-x-1 transition-transform"
                  size={14}
                />
              </button>
            </motion.div>

            {/* Daily Tip Section - Redesigned for minimal intelligence-feed aesthetic */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
              className="mt-16 relative"
            >
              <div className="flex items-start gap-6 group">
                {/* Minimal Indicator */}
                <div className="flex flex-col items-center gap-2 pt-1.5">
                  <div className="w-1 h-1 bg-[#00BFFF] rotate-45 group-hover:scale-125 transition-transform" />
                  <div className="w-[1px] h-12 bg-gradient-to-b from-[#00BFFF]/50 to-transparent" />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[8px] font-black uppercase tracking-[0.4em] text-[#00BFFF]/60">
                      Expert Perspective
                    </span>
                    <span className="w-8 h-[1px] bg-[#00BFFF]/20" />
                    <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-white/20">
                      Daily Insight
                    </span>
                  </div>
                  
                  <p className="text-[11px] sm:text-xs text-white/40 leading-relaxed font-light max-w-md transition-colors group-hover:text-white/60 duration-500">
                    {dailyTip}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Right Video Half (60%) - Optimized for 1350x1080 (5:4) */}
      <div className="w-full lg:w-[60%] flex items-center justify-center bg-black relative p-4 sm:p-8 lg:p-0">
        <div className="w-full max-w-[1200px] max-h-[900px] relative z-10 overflow-hidden group">
          {/* Subtle Glow Frame */}
          <div className="absolute inset-0 border border-white/10 group-hover:border-[#00BFFF]/30 transition-colors duration-700 z-20 pointer-events-none" />
          
          <video 
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-auto block max-h-[900px] object-contain"
          >
            <source src={aboutVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Video Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />

          {/* Floating Info Tag */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-6 right-6 bg-[#00BFFF] text-black py-2 px-4 rounded-none shadow-2xl z-30"
          >
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-black animate-pulse" />
              <span className="text-[9px] uppercase tracking-[0.3em] font-black">
                OUR VISION IN ACTION
              </span>
            </div>
          </motion.div>
        </div>

        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(0,191,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      </div>
    </section>
  );
};

export default HeroSection;

