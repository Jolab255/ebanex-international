import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], ['-30%', '0%', '30%']), {
    stiffness: 40,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[45vh] sm:h-[50vh] lg:h-[55vh] overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 w-full h-[180%] -top-[40%]"
        style={{ y: backgroundY }}
      >
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000"
          alt="Sustainability and growth"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/50" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 xl:px-24 max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-blue-500 text-xs sm:text-sm lg:text-base font-medium tracking-widest uppercase mb-3 sm:mb-4"
        >
          Building Institutional Excellence
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 relative"
        >
          Who We Are
          <span className="absolute -bottom-2 left-0 w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-2 text-xs sm:text-sm text-slate-300"
        >
          <Link to="/" className="flex items-center gap-1 hover:text-blue-500 transition-colors">
            <Home size={14} className="sm:w-4 sm:h-4" />
            <span>Home</span>
          </Link>
          <ChevronRight size={14} className="text-blue-500 sm:w-4 sm:h-4" />
          <span className="text-white">Who We Are</span>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
