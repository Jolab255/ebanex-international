import React from 'react';
import { motion } from 'framer-motion';
import { Squares } from '../../components/animations';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-black pt-20">
      <div className="absolute inset-0 z-0 opacity-30">
        <Squares 
          direction="diagonal"
          speed={0.5}
          borderColor="#333"
          squareSize={40}
          hoverFillColor="#00BFFF"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-blue-500" />
            <span className="text-blue-500 text-[10px] font-black tracking-[0.6em] uppercase">
              Future Talent
            </span>
            <div className="w-12 h-[1px] bg-blue-500" />
          </div>

          <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-black tracking-tighter leading-[0.9] text-white uppercase mb-8">
            Join The <br />
            <span className="text-blue-500">Elite</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/60 leading-relaxed font-light max-w-2xl mx-auto mb-12">
            Ebanex International is looking for world-class specialists to help us 
            empower governments, organizations, and professionals worldwide.
          </p>

          <button className="h-14 px-10 bg-white text-black rounded-sm font-bold text-xs uppercase tracking-[0.2em] hover:bg-blue-500 transition-all">
            View All Openings
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
