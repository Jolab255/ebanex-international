import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import aboutVideo from '../../assets/aboutv.mp4';

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section 
      className="relative min-h-screen w-full flex flex-col-reverse lg:flex-row overflow-hidden bg-black"
    >
      {/* Dynamic Background Overlay */}
      <motion.div 
        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,191,255,0.05),transparent_70%)]"
      />

      {/* Left Content Half (40%) */}
      <div className="w-full lg:w-[40%] flex items-center justify-center lg:justify-end px-6 sm:px-12 lg:pr-16 xl:pr-24 py-16 lg:py-24 relative z-20">
        <div className="max-w-xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-4 mb-6">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-[1px] bg-[#00BFFF]"
              />
              <span className="text-[#00BFFF] text-[10px] font-black tracking-[0.6em] uppercase">
                Institutional Intelligence
              </span>
            </div>

            {/* Headline Area */}
            <h1 className="font-heading tracking-tight leading-[0.9] mb-8 text-white select-none text-center md:text-left relative">
              <div className="flex flex-col gap-3 items-center md:items-start">
                <motion.span
                  className="block text-[clamp(1.25rem,3vw,2rem)] font-light tracking-[-0.01em] uppercase text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 0.8, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Empowering People.
                </motion.span>

                <motion.span
                  className="resilience-gradient font-black tracking-[-0.04em] uppercase text-[clamp(2.5rem,5vw,4.5rem)] leading-none w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 1 }}
                >
                  Strengthening <br /> <span className="ml-0 sm:ml-[6%]">Organizations.</span>
                </motion.span>

                <motion.span
                  className="block font-light text-[clamp(1rem,2.5vw,1.75rem)] text-white/70 tracking-tight flex items-center gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <span className="h-[1px] w-12 bg-[#00BFFF]/50 hidden sm:block" />
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
              <p className="text-sm sm:text-base text-white/60 max-w-xl leading-relaxed font-light border-l border-[#00BFFF]/20 pl-4 sm:pl-6 text-center md:text-left">
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
              className="flex flex-wrap gap-3 mt-10 justify-center md:justify-start"
            >
              <button 
                onClick={() => navigate('/training')}
                className="h-12 px-6 bg-[#00BFFF] text-black rounded-none font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(0,191,255,0.4)] active:scale-95"
              >
                View Training Programs
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="h-12 px-6 border border-[#00BFFF]/30 text-white rounded-none font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-[#00BFFF]/10 hover:border-[#00BFFF] transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 group"
              >
                Contact Us
                <ArrowRight
                  className="text-[#00BFFF] group-hover:translate-x-1 transition-transform"
                  size={16}
                />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Right Video Half (60%) - Optimized for 1350x1080 (5:4) */}
      <div className="w-full lg:w-[60%] flex items-center justify-center bg-black relative p-4 sm:p-8 lg:p-0">
        <div className="w-full max-w-[1350px] max-h-[1080px] relative z-10 overflow-hidden group">
          {/* Subtle Glow Frame */}
          <div className="absolute inset-0 border border-white/10 group-hover:border-[#00BFFF]/30 transition-colors duration-700 z-20 pointer-events-none" />
          
          <video 
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-auto block max-h-[1080px] object-contain"
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

