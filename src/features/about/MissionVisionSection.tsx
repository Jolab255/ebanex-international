import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import { Squares } from '../../components/animations';

const MissionVisionSection: React.FC = () => {
  return (
    <section className="relative z-30 min-h-[70vh] flex flex-col justify-center py-12 sm:py-16 w-full bg-[linear-gradient(135deg,#000000_50%,#00bfff_50%)] overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Squares
          speed={0.13}
          squareSize={40}
          direction="diagonal"
          borderColor="rgba(255,255,255,0.08)"
          hoverFillColor="rgba(255,255,255,0.05)"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col items-center">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 w-full max-w-6xl">
          {/* Mission Box */}
          <motion.div 
            className="w-full p-8 sm:p-12 border-[10px] border-black shadow-none relative overflow-hidden h-full"
            style={{
              background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)'
            }}
          >
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-3">
                <div className="w-12 h-12 bg-[#00BFFF]/20 flex items-center justify-center">
                  <Target className="text-[#00BFFF] w-6 h-6" />
                </div>
                <span className="text-[#00BFFF] text-xs font-black tracking-widest uppercase bg-black py-1 px-3">
                  Our Mission
                </span>
              </div>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-medium text-justify">
                To provide transformative training and strategic advisory that strengthens
                institutional frameworks, secures digital assets, and cultivates high-performance
                leadership worldwide.
              </p>
            </div>
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00BFFF]/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          </motion.div>

          {/* Vision Box */}
          <motion.div 
            className="w-full p-8 sm:p-12 border-[10px] border-black shadow-none relative overflow-hidden h-full"
            style={{
              background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)'
            }}
          >
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-3">
                <div className="w-12 h-12 bg-[#00BFFF]/20 flex items-center justify-center">
                  <Eye className="text-[#00BFFF] w-6 h-6" />
                </div>
                <span className="text-[#00BFFF] text-xs font-black tracking-widest uppercase bg-black py-1 px-3">
                  Our Vision
                </span>
              </div>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-medium text-justify">
                To be the premier global partner for professional development, known for setting the
                standard in cybersecurity excellence and sustainable organizational evolution.
              </p>
            </div>
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00BFFF]/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
