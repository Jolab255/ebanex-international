import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Building2, ArrowRight } from 'lucide-react';
import { Beams } from '../../components/animations';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const titleY = useTransform(smoothProgress, [0, 1], [0, -100]);
  const titleOpacity = useTransform(smoothProgress, [0, 0.7], [1, 0]);
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.2]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[80vh] flex items-center overflow-hidden bg-black pt-20"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <Beams />
        <motion.div 
          style={{ scale: bgScale }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,191,255,0.05),transparent_70%)]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#00BFFF]" />
              <span className="text-[#00BFFF] text-[10px] font-black tracking-[0.6em] uppercase">
                Institutional Growth
              </span>
            </div>

            <motion.h1 
              style={{ y: titleY, opacity: titleOpacity }}
              className="text-[clamp(2.5rem,8vw,5rem)] font-black tracking-tighter leading-[0.9] text-white uppercase mb-8"
            >
              Corporate & <br />
              <span className="text-[#00BFFF]">Institutional</span> <br />
              Solutions
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed font-light border-l border-[#00BFFF]/20 pl-6 mb-12"
            >
              Partnering with organizations to design and deliver customized capacity-building 
              and advisory solutions aligned with institutional strategies and workforce development goals.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button className="h-14 px-8 bg-[#00BFFF] text-black rounded-sm font-bold text-xs uppercase tracking-[0.2em] hover:bg-white transition-all shadow-[0_0_30px_rgba(0,191,255,0.3)] active:scale-95 flex items-center gap-3">
                Request Proposal <ArrowRight size={16} />
              </button>
              <button className="h-14 px-8 border border-white/20 text-white rounded-sm font-bold text-xs uppercase tracking-[0.2em] hover:bg-white/5 transition-all active:scale-95">
                Download Brochure
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Decorative Element */}
      <div className="absolute right-[10%] bottom-[15%] hidden lg:block opacity-20">
        <Building2 size={300} strokeWidth={0.5} className="text-[#00BFFF]" />
      </div>
    </section>
  );
};

export default HeroSection;
