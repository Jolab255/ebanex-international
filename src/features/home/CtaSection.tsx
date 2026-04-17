import React from 'react';
import { motion } from 'framer-motion';
import { Squares } from '../../components/animations';
import { FitText } from '../../components/common';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => (
  <section className="h-[90vh] relative z-40 overflow-visible bg-[linear-gradient(135deg,#00bfff_50%,#000000_50%)] flex flex-col items-center justify-center py-8 sm:py-12 px-4">
    {/* Background */}
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <Squares
        speed={0.13}
        squareSize={40}
        direction="diagonal"
        borderColor="rgba(255,255,255,0.08)"
        hoverFillColor="rgba(255,255,255,0.05)"
      />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <div className="select-none mb-2 inline-block bg-black py-4 px-8">
          <FitText
            minScale={0.35}
            textClassName="font-heading font-black leading-none uppercase tracking-tighter text-[clamp(1.25rem,6vw,3.5rem)]"
          >
            <span 
              style={{
                backgroundImage: "linear-gradient(135deg, #FFFFFF 0%, #00BFFF 50%, #FFFFFF 100%)",
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              TAKE THE NEXT STEP
            </span>
          </FitText>
        </div>
        <div className="mt-2">
          <span className="text-[#00BFFF] font-black uppercase tracking-[0.4em] text-[clamp(0.6rem,1vw,0.75rem)] inline-block bg-black py-1.5 px-6">
            Elite Advisory & Training
          </span>
        </div>
      </div>

      {/* CTA Card Container */}
      <div className="relative w-full max-w-4xl flex items-center justify-center lg:justify-start">
        {/* Background Image (Stacked Under) */}
        <div className="absolute right-[-10%] lg:right-[-15%] top-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] lg:w-[500px] aspect-square z-0 opacity-100">
          <img 
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop" 
            className="w-full h-full object-cover rounded-full border-[10px] border-black"
            alt="Decoration"
          />
        </div>

        {/* CTA Card */}
        <div 
          className="w-full max-w-2xl p-6 sm:p-10 border-[10px] border-black relative z-10 overflow-hidden"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)'
          }}
        >
          <div className="relative z-10 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight mb-4 uppercase tracking-tighter">
              Ready to <span className="text-[#00BFFF]">Secure</span> Your <br className="hidden sm:block" /> 
              Institutional Future?
            </h2>
            
            <p className="text-white/80 text-xs sm:text-sm mb-8 leading-relaxed font-medium max-w-lg">
              Empower your workforce with industry-leading cybersecurity competencies and strategic advisory 
              tailored to your organization's unique digital landscape.
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-3">
              <button className="h-11 sm:h-12 px-6 bg-[#00BFFF] text-black rounded-none font-black text-[10px] sm:text-xs uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 active:scale-95 flex items-center gap-2">
                Explore Programs <ArrowRight size={14} />
              </button>

              <button className="h-11 sm:h-12 px-6 border-2 border-white text-white rounded-none font-black text-[10px] sm:text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all transform hover:-translate-y-1 active:scale-95">
                Contact Expert
              </button>
            </div>
          </div>
          
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#00BFFF]/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>
      </div>
    </div>
  </section>
);

export default CtaSection;
