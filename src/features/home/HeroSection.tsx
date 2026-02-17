import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Globe as GlobeIcon } from 'lucide-react';
import Globe from '../../components/ui/Globe';

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], ['0%', '20%']);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-radial-at-t from-slate-900/20 via-slate-950/90 to-slate-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] max-w-[1200px] max-h-[1200px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="absolute top-1/5 inset-y-0 right-0 w-full max-w-[100vw] pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-y-1/2 translate-x-[5%] w-[min(90vw,400px)] h-[min(90vw,400px)] sm:w-[min(80vw,500px)] sm:h-[min(80vw,500px)] lg:w-[600px] lg:h-[600px] opacity-100 py-4 sm:py-6 lg:py-10">
            <Globe
              baseColor="#050029"
              glowColor="#05010dff"
              markerColor="#ffffff"
              scale={1.2}
              mapBrightness={30}
              diffuse={1.2}
            />
          </div>
        </div>

        <div className="max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-4 mb-12 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-[1px] bg-purple-500"
              />
              <span className="text-purple-400 text-[10px] font-black tracking-[0.6em] uppercase">
                Institutional Intelligence
              </span>
            </div>

            <h1 className="font-heading tracking-tight leading-[0.9] mb-12 text-white select-none">
              <div className="flex flex-col gap-4">
                <motion.span
                  className="block text-[clamp(1.25rem,3.5vw,2.25rem)] font-light opacity-60 tracking-[-0.01em] uppercase"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 0.6, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Empowering People.
                </motion.span>

                <motion.span
                  className="resilience-gradient font-black tracking-[-0.04em] uppercase text-[clamp(2.5rem,7vw,5.0rem)] leading-none"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 1 }}
                >
                  Strengthening <br /> <span className="ml-[8%]">Organizations.</span>
                </motion.span>

                <motion.span
                  className="block font-light text-[clamp(1.25rem,3.5vw,2.25rem)] text-slate-400 tracking-tight flex items-center gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <span className="h-[1px] w-12 bg-purple-500/50 hidden sm:block" />
                  Securing the Future<span className="text-purple-500 font-heading">.</span>
                </motion.span>
              </div>
            </h1>

            <div className="flex flex-col gap-12 mt-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed font-light border-l border-purple-500/20 pl-4 sm:pl-6 lg:pl-8"
              >
                Ebanex International is a global training and advisory firm delivering professional development,
                cybersecurity training, digital transformation capacity building, and institutional strengthening
                solutions across industries.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-wrap gap-3 sm:gap-4"
              >
                <button className="h-12 sm:h-14 px-4 sm:px-6 lg:px-8 bg-white text-slate-950 rounded-sm font-bold text-[clamp(0.625rem,1.5vw,0.75rem)] uppercase tracking-[0.2em] hover:bg-purple-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-xl active:scale-95">
                  View Training Programs
                </button>
                <button className="h-12 sm:h-14 px-4 sm:px-6 lg:px-8 border border-white/10 text-white rounded-sm font-bold text-[clamp(0.625rem,1.5vw,0.75rem)] uppercase tracking-[0.2em] hover:bg-white/5 hover:border-purple-500 transition-all transform hover:-translate-y-1 active:scale-95">
                  Partner With Us
                </button>
                <button className="h-12 sm:h-14 px-4 sm:px-6 lg:px-8 border border-white/10 text-white rounded-sm font-bold text-[clamp(0.625rem,1.5vw,0.75rem)] uppercase tracking-[0.2em] hover:bg-white/5 hover:border-purple-500 transition-all transform hover:-translate-y-1 active:scale-95">
                  Request Corporate Training
                </button>
                <button className="h-12 sm:h-14 px-4 sm:px-6 lg:px-8 border border-white/10 text-white rounded-sm font-bold text-[clamp(0.625rem,1.5vw,0.75rem)] uppercase tracking-[0.2em] hover:bg-white/5 hover:border-purple-500 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center gap-2 sm:gap-3 group">
                  Contact Us
                  <ArrowRight className="text-white group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        style={{ y: backgroundY }}
        className="pointer-events-none absolute inset-0 z-0 opacity-0"
      >
        <GlobeIcon className="hidden" />
      </motion.div>
    </section>
  );
};

export default HeroSection;

