import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Globe as GlobeIcon } from 'lucide-react';
import Globe from '../../components/ui/Globe';

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], ['0%', '20%']);

  return (
    <section className="relative min-h-screen flex items-center pb-10 sm:pt-0 lg:pt-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/20 via-slate-950/90 to-slate-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] max-w-[1200px] max-h-[1200px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full overflow-visible">
        {/* First Container: Globe + Title + Subtitle */}
        <div className="relative  overflow-visible">
          {/* 3D Globe Background */}
          <Globe
            baseColor="#050029"
            glowColor="#05010dff"
            markerColor="#ffffff"
            scale={1.2}
            mapBrightness={30}
            diffuse={1.2}
            className="absolute
              top-1/2 left-[66%] -translate-x-1/2 -translate-y-1/2 w-[min(85vw,500px)] h-[min(85vw,500px)]

              sm:top-1/2 sm:left-[75%] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-[550px] sm:h-[550px]

              md:top-[35%] md:left-[97%] md:-translate-x-1/2 md:-translate-y-1/2 md:w-[600px] md:h-[600px]

              lg:top-1/2 lg:left-[106%] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-[650px] lg:h-[650px]
                            
              xl:top-1/2 xl:left-[107%] xl:-translate-x-1/2 xl:-translate-y-1/2 xl:w-[700px] xl:h-[700px]
              
              2xl:top-1/2 2xl:left-[108%] 2xl:-translate-x-1/2 2xl:-translate-y-1/2 2xl:w-[750px] 2xl:h-[750px]

              pointer-events-none z-[1]"
          />

          {/* Title and Subtitle */}
          <div className="relative z-20  overflow-visible">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-4 mb-12 ">
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

              <h1 className="font-heading tracking-tight leading-[0.9] mb-12 text-white select-none text-center md:text-left lg:text-left  relative z-20">
                <div className="flex flex-col gap-4 items-center md:items-start lg:items-start  overflow-visible">
                  <motion.span
                    className="block text-[clamp(1.25rem,3.5vw,2.25rem)] font-light opacity-60 tracking-[-0.01em] uppercase"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 0.6, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    Empowering People.
                  </motion.span>

                  <motion.span
                    className="resilience-gradient font-black tracking-[-0.04em] uppercase text-[clamp(.25rem,5.5vw,5.2rem)] leading-none  w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 1 }}
                  >
                    Strengthening <br /> <span className="ml-0 sm:ml-[6%]">Organizations.</span>
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

              <div className="flex flex-col gap-12 mt-4 ">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed font-light border-l border-purple-500/20 pl-4 sm:pl-6 lg:pl-8"
                >
                  Ebanex International is a global training and advisory firm delivering
                  professional development, cybersecurity training, digital transformation capacity
                  building, and institutional strengthening solutions across industries.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Second Container: Buttons */}
        <div className="relative z-10 mt-8 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap gap-3 sm:gap-4 "
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
              <ArrowRight
                className="text-white group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </button>
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
