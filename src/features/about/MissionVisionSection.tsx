import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import { Squares } from '../../components/animations';

const MissionVisionSection: React.FC = () => {
  return (
    <section className="relative isolate bg-slate-950 border-t border-white/5 pt-48 sm:pt-56 lg:pt-64 pb-16 sm:pb-20 lg:pb-24">
      <div className="absolute inset-0 z-0">
        <Squares
          speed={0.05}
          squareSize={60}
          direction="diagonal"
          borderColor="#1e293b"
          hoverFillColor="#1a1a1a"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm border border-white/10 p-8 sm:p-10 lg:p-12 hover:border-blue-500/30 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Target className="text-blue-500 w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <span className="text-blue-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
                  What We Do
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
                Our Mission
              </h3>
              <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed">
                To provide transformative training and strategic advisory that strengthens
                institutional frameworks, secures digital assets, and cultivates high-performance
                leadership worldwide.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm border border-white/10 p-8 sm:p-10 lg:p-12 hover:border-blue-500/30 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Eye className="text-blue-500 w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <span className="text-blue-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
                  Where We're Going
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
                Our Vision
              </h3>
              <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed">
                To be the premier global partner for professional development, known for setting the
                standard in cybersecurity excellence and sustainable organizational evolution.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
