import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Squares } from '../../components/animations';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[40vh] bg-[linear-gradient(135deg,#00bfff_50%,#000000_50%)] overflow-hidden flex flex-col justify-center items-center text-center">
      {/* Background Squares */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Squares
          speed={0.13}
          squareSize={40}
          direction="diagonal"
          borderColor="rgba(255,255,255,0.08)"
          hoverFillColor="rgba(255,255,255,0.05)"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Title Area */}
        <div className="mb-6 relative z-50">
          <div className="bg-black py-4 px-8">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black font-heading text-white uppercase tracking-tight"
            >
              Who We <span className="text-[#00BFFF]">Are</span>
            </motion.h1>
          </div>
        </div>
        
        {/* Breadcrumbs Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center gap-3 bg-black py-2.5 px-6"
        >
          <Link to="/" className="flex items-center gap-2 hover:text-[#00BFFF] transition-colors font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs text-slate-300">
            <Home size={14} className="sm:w-4 sm:h-4 text-[#00BFFF]" />
            <span>Home</span>
          </Link>
          <ChevronRight size={14} className="text-[#00BFFF] sm:w-4 sm:h-4 opacity-50" />
          <span className="text-white font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs">Who We Are</span>
        </motion.div>
      </div>
      
      {/* Decorative corner accents */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00BFFF]/10 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00BFFF]/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
