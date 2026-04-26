import React from 'react';
import { Squares, ScrollReveal } from '../../components/animations';
import { FitText } from '../../components/common';

const PartnersSection: React.FC = () => {
  const partners = [
    {
      name: 'Palo Alto Networks',
      logo: 'https://cdn.brandfetch.io/idfPYio-v-/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    },
    {
      name: 'CrowdStrike',
      logo: 'https://cdn.brandfetch.io/idfOAAUeK0/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    },
    {
      name: 'Fortinet',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Fortinet_logo.svg',
    },
    {
      name: 'Cisco',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg',
    },
    {
      name: 'Check Point',
      logo: 'https://cdn.brandfetch.io/idu77Civ2h/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    },
    {
      name: 'FireEye',
      logo: 'https://cdn.brandfetch.io/idiGgQesnl/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B',
    },
    {
      name: 'Splunk',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Splunk_logo.svg',
    },
    {
      name: 'IBM Security',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    },
    {
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    },
    {
      name: 'Amazon AWS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    },
  ];

  return (
    <section className="relative z-30 h-[90vh] flex flex-col justify-center overflow-hidden w-full bg-[linear-gradient(135deg,#000000_50%,#00bfff_50%)]">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-100">
        <Squares
          speed={0.13}
          squareSize={40}
          direction="diagonal"
          borderColor="rgba(255,255,255,0.15)"
          hoverFillColor="rgba(0,191,255,0.05)"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <ScrollReveal yOffset={10} delay={0.1}>
            <div className="select-none mb-3 inline-block bg-black py-4 px-8">
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
                  TRUSTED PARTNERS
                </span>
              </FitText>
            </div>
          </ScrollReveal>

          <ScrollReveal yOffset={20} delay={0.2}>
            <div className="mt-3">
              <span className="text-[#00BFFF] font-black uppercase tracking-[0.4em] text-[clamp(0.7rem,1.2vw,0.85rem)] inline-block bg-black py-1.5 px-6">
                More than 50+ brands trust us
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Marquee Container */}
        <div className="marquee-container overflow-hidden w-full relative max-w-5xl mx-auto select-none py-6">
          {/* Marquee Track - 4 copies for smooth seamless loop */}
          <div className="marquee-track flex">
            {[...Array(4)].map((_, copyIndex) => (
              <div key={copyIndex} className="marquee-set flex shrink-0">
                {partners.map((partner, index) => (
                  <div
                    key={`${partner.name}-${copyIndex}-${index}`}
                    className="marquee-item flex-shrink-0 px-3 sm:px-4"
                  >
                    <div className="h-18 sm:h-22 w-34 sm:w-42 rounded-none border border-white/5 bg-black flex items-center justify-center overflow-hidden hover:border-[#00BFFF]/50 transition-all duration-300 group p-5 sm:p-6">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-contain opacity-100 transition-opacity duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <button
            className="px-8 py-3 rounded-none border-2 border-black bg-black text-white font-bold uppercase tracking-widest text-xs hover:bg-[#00BFFF] hover:border-[#00BFFF] hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
          >
            See all partners
          </button>
        </div>
      </div>

      {/* Marquee Animation Styles */}
      <style>{`
        .marquee-container {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 80s linear infinite;
          will-change: transform;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .marquee-set {
          display: flex;
        }

        .marquee-item {
          display: flex;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Force GPU acceleration */
        .marquee-track {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;
