import React from 'react';
import { Sparkles, Handshake, Zap } from 'lucide-react';
import { Squares, ScrollReveal } from '../../components/animations';
import FeatureCard from '../home/components/FeatureCard';

const CoreValuesSection: React.FC = () => {
  const values = [
    { 
      title: 'Excellence', 
      desc: 'We strive for the highest quality in everything we do, setting benchmarks for professional standards.',
      icon: <Sparkles />,
    },
    { 
      title: 'Innovation', 
      desc: 'Embracing forward-thinking approaches to solve complex challenges in the digital age.',
      icon: <Zap />,
    },
    { 
      title: 'Professionalism', 
      desc: 'A commitment to excellence, respect, and responsibility in every interaction.',
      icon: <Handshake />,
    },
  ];

  return (
    <section className="relative pt-8 sm:pt-12 pb-16 sm:pb-24 w-full bg-[linear-gradient(135deg,#00bfff_50%,#000000_50%)] overflow-visible">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col h-full items-center">
        {/* Section Header */}
        <div className="mb-12 text-center shrink-0 relative z-50">
          <div className="select-none inline-block bg-black py-3 px-6 border border-white/10">
            <ScrollReveal yOffset={10}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black font-heading text-white uppercase tracking-tight">
                Core <span className="text-[#00BFFF]">Values</span>
              </h2>
            </ScrollReveal>
          </div>
        </div>

        <div className="w-full flex items-start justify-center">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 sm:gap-x-10 sm:gap-y-12 max-w-7xl mx-auto">
            {values.map((value, i) => {
              const isMiddle = i % 3 === 1;
              
              return (
                <div 
                  key={i} 
                  className={isMiddle ? "lg:border-t-[10px] lg:border-l-[10px] lg:border-black" : ""}
                >
                  <FeatureCard feature={value} hasOutline={i !== 0} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
