import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from '../../components/animations';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-black pt-20">
      <div className="absolute inset-0 z-0 opacity-20">
        <Globe />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-blue-500" />
              <span className="text-blue-500 text-[10px] font-black tracking-[0.6em] uppercase">
                Global Collaboration
              </span>
            </div>

            <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] font-black tracking-tighter leading-[0.9] text-white uppercase mb-8">
              Strategic <br />
              <span className="text-blue-500">Partnerships</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/60 leading-relaxed font-light border-l border-blue-500/20 pl-6 mb-12">
              Building a global network of excellence through strategic alliances with 
              international certification bodies, academic institutions, and technology leaders.
            </p>

            <button className="h-14 px-10 bg-blue-600 text-white rounded-sm font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)]">
              Partner With Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
