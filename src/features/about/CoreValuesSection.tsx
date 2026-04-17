import React from 'react';
import { Target, Eye, ShieldCheck, Heart, Sparkles, Handshake } from 'lucide-react';
import { Squares } from '../../components/animations';
import { FitText } from '../../components/common';
import FeatureCard from '../home/components/FeatureCard';

const CoreValuesSection: React.FC = () => {
  const values = [
    { 
      title: 'Excellence', 
      desc: 'We strive for the highest quality in everything we do, setting benchmarks for professional standards.',
      icon: <Sparkles />,
    },
    { 
      title: 'Integrity', 
      desc: 'Transparency, honesty, and ethical conduct form the bedrock of our relationships and services.',
      icon: <ShieldCheck />,
    },
    { 
      title: 'Innovation', 
      desc: 'Embracing forward-thinking approaches to solve complex challenges in the digital age.',
      icon: <Heart />,
    },
    { 
      title: 'Impact', 
      desc: 'Focusing on measurable results that deliver long-term institutional value and professional growth.',
      icon: <Target />,
    },
    { 
      title: 'Professionalism', 
      desc: 'A commitment to excellence, respect, and responsibility in every interaction.',
      icon: <Handshake />,
    },
    { 
      title: 'Collaboration', 
      desc: 'Building strong global partnerships to foster knowledge transfer and mutual growth.',
      icon: <Eye />,
    },
  ];

  return (
    <section className="relative z-30 pt-8 sm:pt-12 pb-16 sm:pb-24 w-full bg-[linear-gradient(135deg,#00bfff_50%,#000000_50%)] overflow-hidden">
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
        {/* Title Area */}
        <div className="mb-12 text-center shrink-0">
          <div className="select-none inline-block bg-black py-4 px-8">
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
                CORE VALUES
              </span>
            </FitText>
          </div>

          <div className="mt-4">
            <span className="text-[#00BFFF] font-black uppercase tracking-[0.4em] text-[clamp(0.7rem,1.2vw,0.85rem)] inline-block bg-black py-1.5 px-6">
              What Drives Us
            </span>
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
