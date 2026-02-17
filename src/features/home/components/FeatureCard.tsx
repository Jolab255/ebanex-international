import React from 'react';
import { motion } from 'framer-motion';
import type { Feature } from '../../../types/content';

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: feature.delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group h-full relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line
            x1="0"
            y1="99.5"
            x2="100"
            y2="99.5"
            stroke="url(#fade-grad-new)"
            strokeWidth="0.75"
            className="transition-opacity duration-300"
          />

          <motion.path
            d="M 4,99.5 H 96 A 3.5,3.5 0 0 0 99.5,96 V 4 A 3.5,3.5 0 0 0 96,0.5 H 4 A 3.5,3.5 0 0 0 0.5,4 V 96 A 3.5,3.5 0 0 0 4,99.5"
            fill="none"
            stroke="#A855F7"
            strokeWidth="0.2"
            strokeLinecap="round"
            animate={{
              pathLength: isHovered ? 1 : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
            }}
          />

          <defs>
            <linearGradient id="fade-grad-new" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="40%" stopColor="#A855F7" stopOpacity="0.4" />
              <stop offset="80%" stopColor="#A855F7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="h-full p-6 sm:p-8 lg:p-10 flex flex-col items-start relative z-10 transition-all duration-700 bg-transparent">
        <div
          className={`text-purple-400 mb-4 sm:mb-6 transition-all transform ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        >
          {React.cloneElement(feature.icon as React.ReactElement, { size: 28 })}
        </div>

        <h3
          className={`text-lg sm:text-xl font-black font-heading mb-2 sm:mb-3 tracking-tight transition-colors uppercase ${
            isHovered ? 'text-purple-400' : 'text-white'
          }`}
        >
          {feature.title}
        </h3>

        <p className="text-slate-400 font-light leading-relaxed text-xs sm:text-sm max-w-xs text-justify">
          {feature.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;

