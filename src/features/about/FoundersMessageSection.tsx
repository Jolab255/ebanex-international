import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import { Squares } from '../../components/animations';
import { FitText } from '../../components/common';

const FoundersMessageSection: React.FC = () => {
  return (
    <section className="relative z-30 h-[80vh] flex flex-col justify-center py-8 sm:py-12 w-full bg-[linear-gradient(135deg,#000000_50%,#00bfff_50%)] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Squares
          speed={0.13}
          squareSize={40}
          direction="diagonal"
          borderColor="rgba(255,255,255,0.08)"
          hoverFillColor="rgba(255,255,255,0.05)"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col items-center h-full justify-center">
        {/* Title Area */}
        <div className="mb-6 sm:mb-8 text-center shrink-0">
          <div className="select-none inline-block bg-black py-3 px-6">
            <FitText
              minScale={0.35}
              textClassName="font-heading font-black leading-none uppercase tracking-tighter text-[clamp(1.25rem,6vw,3rem)]"
            >
              <span 
                style={{
                  backgroundImage: "linear-gradient(135deg, #FFFFFF 0%, #00BFFF 50%, #FFFFFF 100%)",
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                FOUNDER'S MESSAGE
              </span>
            </FitText>
          </div>

          <div className="mt-2">
            <span className="text-[#00BFFF] font-black uppercase tracking-[0.4em] text-[clamp(0.6rem,1vw,0.75rem)] inline-block bg-black py-1.5 px-6">
              Leadership Voice
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center w-full max-w-6xl">
          {/* Image Box */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative hidden sm:block"
          >
            <div className="relative border-[8px] border-black shadow-[15px_15px_0px_0px_rgba(0,191,255,0.2)] overflow-hidden aspect-[4/5] max-w-[320px] mx-auto lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800"
                alt="Dr. Amara Okoro - Founding Director"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tighter">Dr. Amara Okoro</h3>
                <p className="text-[#00BFFF] text-xs font-bold uppercase tracking-widest mt-1">Founding Director</p>
              </div>
            </div>
          </motion.div>

          {/* Message Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full p-6 sm:p-10 border-[10px] border-black shadow-none relative overflow-hidden"
            style={{
              background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)'
            }}
          >
            <div className="relative z-10">
              <blockquote className="text-base sm:text-lg lg:text-xl font-normal text-white leading-relaxed mb-6 relative">
                <span className="text-[#00BFFF] text-5xl font-serif absolute -top-8 -left-4 opacity-40">&ldquo;</span>
                In a world where digital boundaries are constantly shifting, the greatest asset any
                organization possesses is its people. At Ebanex, we invest in that human potential
                to build resilient institutions.
              </blockquote>

              <div className="space-y-4">
                <p className="text-white/80 leading-relaxed font-normal text-xs sm:text-sm text-justify">
                  Our vision was born from a simple belief: that sustainable development requires
                  empowered people. Every training program we design and institution we strengthen is a step toward a more secure global community.
                </p>
                
                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10">
                  <div className="flex gap-3">
                    <a href="#" className="w-9 h-9 bg-black flex items-center justify-center hover:bg-[#00BFFF] transition-colors border border-white/10">
                      <Linkedin size={16} className="text-white" />
                    </a>
                    <a href="#" className="w-9 h-9 bg-black flex items-center justify-center hover:bg-[#00BFFF] transition-colors border border-white/10">
                      <Twitter size={16} className="text-white" />
                    </a>
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
