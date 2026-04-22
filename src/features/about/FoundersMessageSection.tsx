import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';
import { Squares } from '../../components/animations';

const FoundersMessageSection: React.FC = () => {
  return (
    <section className="relative h-auto flex flex-col justify-center py-12 sm:py-16 w-full bg-[linear-gradient(135deg,#000000_50%,#00bfff_50%)] overflow-hidden">
      {/* Background Squares */}
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
        {/* Section Header */}
        <div className="mb-10 text-center relative z-50">
          <div className="select-none inline-block bg-black py-3 px-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,191,255,0.2)]">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl sm:text-3xl font-black font-heading text-white uppercase tracking-tighter"
            >
              Founders' <span className="text-[#00BFFF]">Message</span>
            </motion.h2>
          </div>
        </div>

        {/* Content Container - Overlapping Layout squeezed to edges */}
        <div className="relative w-full flex items-center justify-center min-h-[500px] lg:min-h-[550px]">
          
          {/* Founder 1 Image (Left - Absolute Overflow) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute left-[-10px] lg:left-[-20px] top-1/2 -translate-y-1/2 z-10 w-[280px] sm:w-[350px] lg:w-[450px] aspect-[4/5] hidden sm:block"
          >
            <div className="relative w-full h-full">
                <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800"
                alt="Enock Nkaina" 
                className="w-full h-full object-cover border-[10px] border-black grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl"
                />
                <div className="absolute bottom-4 left-4 bg-black p-2 border border-[#00BFFF]/30">
                    <p className="text-white font-black text-[9px] uppercase tracking-widest">Enock Nkaina</p>
                </div>
            </div>
          </motion.div>

          {/* Founder 2 Image (Right - Absolute Overflow) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute right-[-10px] lg:right-[-20px] top-1/2 -translate-y-1/2 z-10 w-[280px] sm:w-[350px] lg:w-[450px] aspect-[4/5] hidden sm:block"
          >
            <div className="relative w-full h-full">
                <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800"
                alt="Baraka Richard" 
                className="w-full h-full object-cover border-[10px] border-black grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl"
                />
                <div className="absolute bottom-4 right-4 bg-black p-2 border border-[#00BFFF]/30">
                    <p className="text-white font-black text-[9px] uppercase tracking-widest text-right">Baraka Richard</p>
                </div>
            </div>
          </motion.div>

          {/* Main Message Box (Center - Relative Z-30) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-2xl p-6 sm:p-10 border-[10px] border-black relative overflow-hidden z-30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            style={{
              background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)'
            }}
          >
            <div className="relative z-10 space-y-8">
              {/* Message 1 - Enock */}
              <div className="space-y-3">
                <blockquote className="text-sm sm:text-base font-medium text-white leading-relaxed relative italic">
                  <span className="text-[#00BFFF] text-4xl font-serif absolute -top-5 -left-3 opacity-30">&ldquo;</span>
                  In a world where digital boundaries are constantly shifting, the greatest asset any
                  organization possesses is its people. At Ebanex, we invest in that human potential
                  to build resilient institutions.
                </blockquote>
                <div className="flex items-center gap-3">
                    <div className="h-px bg-[#00BFFF]/30 flex-grow" />
                    <div className="text-right">
                        <h3 className="text-xs font-black text-[#00BFFF] uppercase tracking-widest">Enock Nkaina</h3>
                        <p className="text-white/40 text-[8px] uppercase font-bold">Co-Founder & Director</p>
                    </div>
                </div>
              </div>

              {/* Message 2 - Baraka */}
              <div className="space-y-3">
                <blockquote className="text-sm sm:text-base font-medium text-white leading-relaxed relative italic text-right">
                  Our vision was born from a simple belief: that sustainable development requires
                  empowered people. Every training program we design and institution we strengthen is a step toward a more secure global community.
                  <span className="text-[#00BFFF] text-4xl font-serif absolute -bottom-8 -right-3 opacity-30">&rdquo;</span>
                </blockquote>
                <div className="flex items-center gap-3">
                    <div className="text-left">
                        <h3 className="text-xs font-black text-[#00BFFF] uppercase tracking-widest">Baraka Richard</h3>
                        <p className="text-white/40 text-[8px] uppercase font-bold">Co-Founder & Director</p>
                    </div>
                    <div className="h-px bg-[#00BFFF]/30 flex-grow" />
                </div>
              </div>

              {/* Shared Socials */}
              <div className="flex justify-center gap-3 pt-2">
                <a href="#" onClick={(e) => e.preventDefault()} className="w-8 h-8 bg-black flex items-center justify-center hover:bg-[#00BFFF] hover:text-black text-[#00BFFF] transition-all border border-[#00BFFF]/20">
                  <Linkedin size={14} />
                </a>
                <a href="#" onClick={(e) => e.preventDefault()} className="w-8 h-8 bg-black flex items-center justify-center hover:bg-[#00BFFF] hover:text-black text-[#00BFFF] transition-all border border-[#00BFFF]/20">
                  <Twitter size={14} />
                </a>
              </div>
            </div>
            
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00BFFF]/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FoundersMessageSection;
