import React from 'react';
import { motion } from 'framer-motion';

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
    <section className="relative bg-slate-950 min-h-[50vh] py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-blue-500 text-sm font-semibold tracking-widest uppercase">
            What We Focus On
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white mt-3">
            Our Strategic Focus
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {focusAreas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-blue-500 rounded-2xl transform ${
                  idx % 2 === 0 ? 'rotate-1' : '-rotate-1'
                } group-hover:rotate-0 transition-transform duration-300`}
              />
              <div className="relative bg-slate-900 rounded-2xl p-8 lg:p-10 shadow-lg border border-white/10 group-hover:border-blue-500/50 group-hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    {area.icon}
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold text-white mb-2">{area.title}</h3>
                    <p className="text-slate-400 text-sm lg:text-base">{area.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicFocusSection;
