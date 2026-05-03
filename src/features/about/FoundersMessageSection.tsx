import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';
import { Squares, ScrollReveal } from '../../components/animations';

// Import co-founder images
import enockImg from '../../assets/Enock.jpg';
import barakaImg from '../../assets/baraka.png';

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
            <ScrollReveal yOffset={10}>
              <h2 className="text-2xl sm:text-3xl font-black font-heading text-white uppercase tracking-tighter">
                Founders&apos; <span className="text-[#00BFFF]">Message</span>
              </h2>
            </ScrollReveal>
          </div>
        </div>

        {/* Content Container - Overlapping Layout squeezed to edges */}
        <div className="relative w-full flex items-center justify-center min-h-[500px] lg:min-h-[550px]">
          
          {/* Baraka Opiyo Image (Left) */}
          <div 
            className="absolute left-[-10px] lg:left-[-20px] top-1/2 -translate-y-1/2 z-10 w-[280px] sm:w-[350px] lg:w-[450px] aspect-[4/5] hidden sm:block"
          >
            <div className="relative w-full h-full">
                <img 
                src={barakaImg}
                alt="Baraka Opiyo" 
                className="w-full h-full object-cover border-[10px] border-black transition-all duration-500 shadow-2xl"
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="bg-black p-2 border border-[#00BFFF]/30">
                        <p className="text-white font-black text-[9px] uppercase tracking-widest">Baraka Opiyo</p>
                    </div>
                    <div className="flex gap-2">
                        <a href="https://www.linkedin.com/posts/isaca-tanzania-chapter_congratulations-mrbaraka-opiyo-cia-cisa-activity-7111588925013434369-VoQm" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-black flex items-center justify-center hover:bg-[#00BFFF] hover:text-black text-[#00BFFF] transition-all border border-[#00BFFF]/20">
                            <Linkedin size={14} />
                        </a>
                        <a href="#" onClick={(e) => e.preventDefault()} className="w-8 h-8 bg-black flex items-center justify-center hover:bg-[#00BFFF] hover:text-black text-[#00BFFF] transition-all border border-[#00BFFF]/20">
                            <Twitter size={14} />
                        </a>
                    </div>
                </div>
            </div>
          </div>

          {/* Enock Nkaina Image (Right) */}
          <div 
            className="absolute right-[-10px] lg:right-[-20px] top-1/2 -translate-y-1/2 z-10 w-[280px] sm:w-[350px] lg:w-[450px] aspect-[4/5] hidden sm:block"
          >
            <div className="relative w-full h-full">
                <img 
                src={enockImg}
                alt="Enock Nkaina" 
                className="w-full h-full object-cover border-[10px] border-black transition-all duration-500 shadow-2xl"
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex gap-2">
                        <a href="https://tz.linkedin.com/in/enock-mwita-nkaina-b60648111" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-black flex items-center justify-center hover:bg-[#00BFFF] hover:text-black text-[#00BFFF] transition-all border border-[#00BFFF]/20">
                            <Linkedin size={14} />
                        </a>
                        <a href="https://x.com/enocknkaina" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-black flex items-center justify-center hover:bg-[#00BFFF] hover:text-black text-[#00BFFF] transition-all border border-[#00BFFF]/20">
                            <Twitter size={14} />
                        </a>
                    </div>
                    <div className="bg-black p-2 border border-[#00BFFF]/30">
                        <p className="text-white font-black text-[9px] uppercase tracking-widest text-right">Enock Nkaina</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Main Message Box (Center - Relative Z-30) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="w-full max-w-2xl p-6 sm:p-10 border-[10px] border-black relative overflow-hidden z-30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            style={{
              background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)'
            }}
          >
            <div className="relative z-10 space-y-8">
              {/* Message 1 - Enock */}
              <div className="space-y-4">
                <blockquote className="text-sm sm:text-base font-medium text-white leading-relaxed relative italic">
                  <span className="text-[#00BFFF] text-4xl font-serif absolute -top-5 -left-3 opacity-30">&ldquo;</span>
                  In a world where digital boundaries are constantly shifting, the greatest asset any
                  organization possesses is its people. At Ebanex, we invest in that human potential
                  to build resilient institutions.
                </blockquote>
                <div className="flex items-center justify-end">
                    <div className="text-right">
                        <h3 className="text-xs font-black text-[#00BFFF] uppercase tracking-widest">Enock Nkaina</h3>
                        <p className="text-white/40 text-[8px] uppercase font-bold">Co-Founder & Director</p>
                    </div>
                </div>
              </div>

              {/* Message 2 - Baraka */}
              <div className="space-y-4">
                <blockquote className="text-sm sm:text-base font-medium text-white leading-relaxed relative italic text-right">
                  Our vision was born from a simple belief: that sustainable development requires
                  empowered people. Every training program we design and institution we strengthen is a step toward a more secure global community.
                  <span className="text-[#00BFFF] text-4xl font-serif absolute -bottom-8 -right-3 opacity-30">&rdquo;</span>
                </blockquote>
                <div className="flex items-center justify-start">
                    <div className="text-left">
                        <h3 className="text-xs font-black text-[#00BFFF] uppercase tracking-widest">Baraka Opiyo</h3>
                        <p className="text-white/40 text-[8px] uppercase font-bold">Co-Founder & Director</p>
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
