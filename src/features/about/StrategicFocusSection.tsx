import React from 'react';
import { motion } from 'framer-motion';
import { Squares } from '../../components/animations';
import { FitText } from '../../components/common';

const StrategicFocusSection: React.FC = () => {
  const focusAreas = [
    {
      title: 'Technology-led Capacity Building',
      description:
        'Empowering institutions through innovative digital solutions and modern methodologies.',
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: 'Cybersecurity & Digital Resilience',
      description:
        'Protecting digital assets and building resilient infrastructure for the modern age.',
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016"
          />
        </svg>
      ),
    },
    {
      title: 'Leadership & Workforce Development',
      description:
        'Cultivating visionary leaders and skilled professionals for organizational excellence.',
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Institutional Strengthening',
      description:
        'Building robust frameworks that enable sustainable growth and organizational impact.',
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center py-16 sm:py-20 lg:py-24 w-full bg-[linear-gradient(135deg,#00bfff_50%,#000000_50%)] overflow-visible">
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
        {/* Section Header */}
        <div className="mb-12 text-center shrink-0 relative z-[100] translate-y-[2px] sm:-translate-y-[14px]">
          <div className="select-none inline-block bg-black py-3 px-6 border border-white/10">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-xl sm:text-2xl lg:text-3xl font-black font-heading text-white uppercase tracking-tight"
            >
              Strategic <span className="text-[#00BFFF]">Focus</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 w-full max-w-6xl">
          {focusAreas.map((area, idx) => (
            <div
              key={idx}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-[#00bfff] transform ${
                  idx % 2 === 0 ? 'rotate-1' : '-rotate-1'
                } group-hover:rotate-0 transition-transform duration-300`}
              />
              <div 
                className="relative p-8 lg:p-10 shadow-lg border-[10px] border-black group-hover:shadow-xl transition-all duration-300"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)'
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#00bfff] flex items-center justify-center flex-shrink-0">
                    {area.icon}
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold text-white mb-2">{area.title}</h3>
                    <p className="text-slate-400 text-sm lg:text-base">{area.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicFocusSection;
