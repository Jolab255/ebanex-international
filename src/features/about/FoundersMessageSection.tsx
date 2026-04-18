import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';
import { Squares } from '../../components/animations';
import { FitText } from '../../components/common';

const FoundersMessageSection: React.FC = () => {
  return (
    <section className="relative h-[90vh] flex flex-col justify-center py-8 sm:py-12 w-full bg-[linear-gradient(135deg,#000000_50%,#00bfff_50%)] overflow-visible">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col items-center h-full justify-center">
        {/* Section Header */}
        <div className="mb-8 text-center shrink-0 relative z-50">
          <div className="select-none inline-block bg-black py-3 px-6 border border-white/10">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-xl sm:text-2xl lg:text-3xl font-black font-heading text-white uppercase tracking-tight"
            >
              Founder's <span className="text-[#00BFFF]">Message</span>
            </motion.h2>
          </div>
        </div>

        {/* Content Container (Matching About style) */}
        <div className="relative w-full max-w-5xl flex items-center justify-center lg:justify-end">
          {/* Background Image (Stacked Under, Left Side) */}
          <div className="absolute left-[-5%] lg:left-[-10%] top-[45%] -translate-y-1/2 w-[350px] sm:w-[500px] lg:w-[600px] aspect-[4/5] z-20 opacity-100">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800"
              alt="Dr. Amara Okoro" 
              className="w-full h-full object-cover border-[10px] border-black"
            />
          </div>

          {/* Main Message Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-2xl p-6 sm:p-10 border-[10px] border-black shadow-none relative overflow-hidden z-30 ml-auto"
            style={{
              background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)'
            }}
          >
            <div className="relative z-10">
              <blockquote className="text-base sm:text-lg lg:text-xl font-normal text-white leading-relaxed mb-8 relative">
                <span className="text-[#00BFFF] text-5xl font-serif absolute -top-8 -left-4 opacity-40">&ldquo;</span>
                In a world where digital boundaries are constantly shifting, the greatest asset any
                organization possesses is its people. At Ebanex, we invest in that human potential
                to build resilient institutions.
                <span className="text-[#00BFFF] text-5xl font-serif absolute -bottom-8 -right-4 opacity-40">&rdquo;</span>
              </blockquote>

              <div className="space-y-6">
                <p className="text-white/80 leading-relaxed font-normal text-xs sm:text-sm text-justify">
                  Our vision was born from a simple belief: that sustainable development requires
                  empowered people. Every training program we design and institution we strengthen is a step toward a more secure global community.
                </p>
                
                <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                  <div className="flex gap-3">
                    <a href="#" className="w-9 h-9 bg-black flex items-center justify-center hover:bg-[#00BFFF] transition-colors border border-white/10">
                      <Linkedin size={16} className="text-white" />
                    </a>
                    <a href="#" className="w-9 h-9 bg-black flex items-center justify-center hover:bg-[#00BFFF] transition-colors border border-white/10">
                      <Twitter size={16} className="text-white" />
                    </a>
                  </div>
                  <div className="border-l border-white/10 pl-6">
                    <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-tighter leading-tight">Dr. Amara Okoro</h3>
                    <p className="text-[#00BFFF] text-[10px] sm:text-xs font-bold uppercase tracking-widest mt-1">Founding Director</p>
                  </div>
                </div>
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
