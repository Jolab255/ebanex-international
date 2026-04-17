import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Layer 1: Subtitle ("Empowering People") - Slowest parallax
  const subtitleY = useTransform(smoothProgress, [0, 1], [0, -50]);
  const subtitleOpacity = useTransform(smoothProgress, [0, 0.5], [0.6, 0]);
  const subtitleBlur = useTransform(smoothProgress, [0, 0.5], ["blur(0px)", "blur(10px)"]);

  // Layer 2: Main Title ("Strengthening Organizations") - Medium parallax
  const titleY = useTransform(smoothProgress, [0, 1], [0, -120]);
  const titleOpacity = useTransform(smoothProgress, [0, 0.7], [1, 0]);
  const titleScale = useTransform(smoothProgress, [0, 1], [1, 0.9]);

  // Layer 3: Description Paragraph - Fast parallax
  const descY = useTransform(smoothProgress, [0, 1], [0, -180]);
  const descOpacity = useTransform(smoothProgress, [0, 0.4], [1, 0]);
  const descBlur = useTransform(smoothProgress, [0, 0.4], ["blur(0px)", "blur(8px)"]);

  // Layer 4: Buttons - Fastest parallax
  const btnY = useTransform(smoothProgress, [0, 1], [0, -250]);
  const btnOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);

  // Background effects
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.1]);
  const bgOpacity = useTransform(smoothProgress, [0, 1], [1, 0.3]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-[90vh] flex items-center overflow-hidden bg-black"
    >
      {/* Dynamic Background */}
      <motion.div 
        style={{ scale: bgScale, opacity: bgOpacity }}
        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,191,255,0.08),transparent_70%)]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        {/* Main Content Wrapper */}
        <div className="relative lg:grid lg:grid-cols-[minmax(0,1fr)_48%] gap-12 items-center">
          <div className="relative z-20">
            {/* Badge & Title Area */}
            <div className="relative z-20">
              {/* Entrance & Scroll Animation Wrapper */}
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

              {/* Parallax Headline Area */}
              <h1 className="font-heading tracking-tight leading-[0.9] mb-8 text-white select-none text-center md:text-left lg:text-left relative z-20">
                <div className="flex flex-col gap-3 items-center md:items-start lg:items-start">

                  {/* Layer 1: Subtitle */}
                  <motion.span
                    style={{ y: subtitleY, opacity: subtitleOpacity, filter: subtitleBlur }}
                    className="block text-[clamp(1.25rem,3vw,2rem)] font-light tracking-[-0.01em] uppercase text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 0.8, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    Empowering People.
                  </motion.span>

                  {/* Layer 2: Main Title */}
                  <motion.span
                    style={{ y: titleY, opacity: titleOpacity, scale: titleScale }}
                    className="resilience-gradient font-black tracking-[-0.04em] uppercase text-[clamp(2.5rem,5vw,4.5rem)] leading-none w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 1 }}
                  >
                    Strengthening <br /> <span className="ml-0 sm:ml-[6%]">Organizations.</span>
                  </motion.span>

                  {/* Layer 3: Drifting Slogan */}
                  <motion.span
                    style={{ y: descY, opacity: descOpacity }}
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

              {/* Layer 3: Description Paragraph */}
              <motion.div 
                style={{ y: descY, opacity: descOpacity, filter: descBlur }}
                className="flex flex-col gap-10"
              >
                <p className="text-sm sm:text-base text-white/60 max-w-xl leading-relaxed font-light border-l border-[#00BFFF]/20 pl-4 sm:pl-6">
                  Ebanex International is a global training and advisory firm delivering
                  professional development, cybersecurity training, digital transformation capacity
                  building, and institutional strengthening solutions across industries.
                </p>
              </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Premium Video Player Box */}
          <div className="relative z-20 hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="relative aspect-video lg:aspect-square xl:aspect-video bg-[#00BFFF] rounded-none overflow-hidden group cursor-pointer shadow-none border-none"
            >
              {/* Mock Video Thumbnail / Background */}
              <div className="absolute inset-0 bg-[#00BFFF]">
                <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-multiply group-hover:scale-110 transition-transform duration-1000" />
              </div>

              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />

              {/* Play Button Interface */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="relative">
                  {/* Pulsing Glow */}
                  <div className="absolute inset-0 bg-black/20 rounded-full blur-2xl opacity-40 animate-pulse" />
                  
                  {/* Button Square */}
                  <div className="relative w-24 h-24 bg-black/90 backdrop-blur-md border border-white/10 rounded-none flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-500">
                    <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[24px] border-l-[#00BFFF] border-b-[14px] border-b-transparent ml-2 group-hover:border-l-black transition-colors" />
                  </div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="mt-8 text-center"
                >
                  <span className="text-[11px] font-black uppercase tracking-[0.5em] text-black">
                    Watch Intro
                  </span>
                  <h3 className="text-black font-black text-2xl mt-1 tracking-tighter uppercase">
                    EBANEX INTERNATIONAL
                  </h3>
                </motion.div>
              </div>

              {/* Bottom Progress Bar Mockup */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/20">
                <div className="h-full bg-white w-1/4 group-hover:w-full transition-all duration-1500" />
              </div>
            </motion.div>

            {/* Floating Info Tag */}
            <div className="absolute -bottom-4 -left-4 bg-white text-black p-4 rounded-none border-none shadow-2xl hidden xl:block z-30">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-black rounded-none animate-ping" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-black">
                  DISCOVER OUR VISION
                </span>
              </div>
            </div>
          </div>
        </div>        
        
        {/* Layer 4: Action Buttons */}
        <motion.div 
          style={{ y: btnY, opacity: btnOpacity }}
          className="relative z-10 mt-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap gap-3"
          >
            <button className="h-12 px-6 bg-[#00BFFF] text-black rounded-sm font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(0,191,255,0.4)] active:scale-95">
              View Training Programs
            </button>
            <button className="h-12 px-6 border border-[#00BFFF]/30 text-white rounded-sm font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-[#00BFFF]/10 hover:border-[#00BFFF] transition-all transform hover:-translate-y-1 active:scale-95">
              Partner With Us
            </button>
            <button className="h-12 px-6 border border-[#00BFFF]/30 text-white rounded-sm font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-[#00BFFF]/10 hover:border-[#00BFFF] transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 group">
              Contact Us
              <ArrowRight
                className="text-[#00BFFF] group-hover:translate-x-1 transition-transform"
                size={16}
              />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
