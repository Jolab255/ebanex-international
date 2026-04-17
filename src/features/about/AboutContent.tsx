import React from 'react';
import { motion } from 'framer-motion';
import { Squares } from '../../components/animations';
import { FitText } from '../../components/common';

const AboutContent: React.FC = () => {
  return (
    <section className="relative z-30 h-[80vh] flex flex-col justify-center py-8 sm:py-12 w-full bg-[linear-gradient(135deg,#000000_50%,#00bfff_50%)] overflow-hidden">
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
        {/* Header - Positioned on top of everything */}
        <div className="mb-8 text-center shrink-0 relative z-50">
          <div className="select-none inline-block bg-black py-3 px-6 border border-white/10">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl sm:text-2xl lg:text-3xl font-black font-heading text-white uppercase tracking-tight"
            >
              About <span className="text-[#00BFFF]">Ebanex International</span>
            </motion.h1>
          </div>
        </div>

        {/* Content Container (Matching CTA style) */}
        <div className="relative w-full max-w-5xl flex items-center justify-center lg:justify-end">
          {/* Background Image (Stacked Under, Left Side) */}
          <div className="absolute left-[-5%] lg:left-[-10%] top-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] lg:w-[550px] aspect-square z-0 opacity-100">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" 
              alt="Corporate Building" 
              className="w-full h-full object-cover border-[10px] border-black shadow-[15px_15px_0px_0px_rgba(0,191,255,0.2)]"
            />
          </div>

          {/* Main Content Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-2xl p-6 sm:p-10 border-[10px] border-black shadow-none relative overflow-hidden z-10 ml-auto"
            style={{
              background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)'
            }}
          >
            <div className="relative z-10 space-y-6">
              <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed font-normal text-justify">
                Ebanex International is a global consulting and training firm specializing in professional
                capacity building, cybersecurity training, digital transformation, and institutional
                strengthening.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed font-normal text-justify">
                We support governments, organizations, and professionals through high-quality training,
                advisory services, and knowledge transfer programs designed to deliver measurable results
                and long-term institutional impact.
              </p>
            </div>
            
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00BFFF]/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
