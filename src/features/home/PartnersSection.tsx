import React from 'react';
import { motion } from 'framer-motion';

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
    <section className="py-16 sm:py-20 lg:py-24 border-b border-white/5 bg-slate-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-blue-500 font-bold uppercase tracking-[0.3em] text-sm block mb-4"
          >
            More than 50+ brands trust us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-black leading-none uppercase tracking-tighter text-[clamp(0.6rem,7vw,5rem)] bg-center bg-no-repeat bg-clip-text text-transparent select-none filter brightness-125 animate-bg-pan whitespace-nowrap overflow-hidden text-ellipsis mb-4"
            style={{
              backgroundImage:
                "url('https://assets.avant.org.au/cdf6134c-01d7-0292-26f5-2f5cf1db96f8/4645803d-67d3-4662-9f18-816e532b82a1/Responding-to-a-cyber-security-incident.jpg')",
              WebkitBackgroundClip: 'text',
            }}
          >
            T r u s t e d - P a r t n e r s
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-slate-400 max-w-2xl mx-auto text-center text-base sm:text-lg"
          >
            From innovative startups to Fortune 500 companies, our client list spans a spectrum of
            sectors, each with unique challenges that we've successfully navigated.
          </motion.p>
        </div>

        {/* Marquee Container */}
        <div className="marquee-container overflow-hidden w-full relative max-w-5xl mx-auto select-none py-8">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 h-full w-20 sm:w-32 z-10 pointer-events-none bg-gradient-to-r from-slate-950 to-transparent" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 h-full w-20 sm:w-32 z-10 pointer-events-none bg-gradient-to-l from-slate-950 to-transparent" />

          {/* Marquee Track - 4 copies for smooth seamless loop */}
          <div className="marquee-track flex">
            {[...Array(4)].map((_, copyIndex) => (
              <div key={copyIndex} className="marquee-set flex shrink-0">
                {partners.map((partner, index) => (
                  <div
                    key={`${partner.name}-${copyIndex}-${index}`}
                    className="marquee-item flex-shrink-0 px-3 sm:px-4"
                  >
                    <div className="h-20 sm:h-24 w-36 sm:w-44 rounded-xl border border-white/10 bg-slate-900/50 flex items-center justify-center overflow-hidden hover:bg-slate-800/50 hover:border-blue-500/30 transition-all duration-300 group p-6">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter brightness-200"
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
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 mx-auto flex items-center gap-2 px-8 py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/5 hover:border-blue-500/50 transition-all duration-300"
        >
          See all partners
        </motion.button>
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
