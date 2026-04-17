import React from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen } from 'lucide-react';
import { DarkVeil } from '../../components/animations';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-black pt-20">
      <DarkVeil />
      
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
                Thought Leadership
              </span>
            </div>

            <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] font-black tracking-tighter leading-[0.9] text-white uppercase mb-8">
              Research & <br />
              <span className="text-blue-500">Insights</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/60 leading-relaxed font-light border-l border-blue-500/20 pl-6 mb-12">
              Deep-dive analysis and evidence-based perspectives on the evolving landscape of 
              cybersecurity, digital transformation, and institutional capacity building.
            </p>

            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
              <input 
                type="text" 
                placeholder="Search publications..."
                className="w-full bg-white/5 border border-white/10 rounded-sm py-4 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
