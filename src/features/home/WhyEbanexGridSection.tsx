import React, { useRef } from 'react';
import { Globe as GlobeIcon, Shield, Zap } from 'lucide-react';
import { Squares, ScrollReveal } from '../../components/animations';
import { FitText } from '../../components/common';
import FeatureCard from './components/FeatureCard';

const WhyEbanexGridSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const features = [
    {
      title: 'Global Training',
      desc: 'Multidisciplinary global training capability tailored for enterprise-scale professional development.',
      icon: <GlobeIcon />,
    },
    {
      title: 'Cyber Expertise',
      desc: 'Strong cybersecurity and digital transformation expertise focused on resilient infrastructure.',
      icon: <Shield />,
    },
    {
      title: 'Practical Learning',
      desc: 'Practical and hands-on learning methodology that translates theory into immediate operational value.',
      icon: <Zap />,
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative z-30 pt-4 sm:pt-6 pb-16 sm:pb-24 w-full bg-[linear-gradient(135deg,#00bfff_50%,#000000_50%)]"
    >
      <div className="sticky top-0 h-screen w-full z-0 pointer-events-none overflow-hidden">
        <Squares
          speed={0.13}
          squareSize={40}
          direction="diagonal"
          borderColor="rgba(255,255,255,0.08)"
          hoverFillColor="rgba(255,255,255,0.05)"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col h-full items-center -mt-[100vh]">
        {/* Title Area */}
        <div className="mb-12 text-center shrink-0">
          <ScrollReveal yOffset={10} delay={0.1}>
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
                  WHY EBANEX
                </span>
              </FitText>
            </div>
          </ScrollReveal>

          <ScrollReveal yOffset={20} delay={0.2}>
            <div className="mt-4">
              <span className="text-[#00BFFF] font-black uppercase tracking-[0.4em] text-[clamp(0.7rem,1.2vw,0.85rem)] inline-block bg-black py-1.5 px-6">
                Global Expertise
              </span>
            </div>
          </ScrollReveal>
        </div>
        <div className="w-full flex items-start justify-center">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 sm:gap-x-10 sm:gap-y-12 max-w-7xl mx-auto">
            {features.map((feature, i) => {
              const isMiddle = i % 3 === 1;
              
              return (
                <div 
                  key={i} 
                  className={isMiddle ? "lg:border-t-[10px] lg:border-l-[10px] lg:border-black" : ""}
                >
                  <FeatureCard feature={feature} hasOutline={i !== 0} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEbanexGridSection;
