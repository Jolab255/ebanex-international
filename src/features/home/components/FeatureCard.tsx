import React from 'react';
import { motion } from 'framer-motion';
import type { Feature } from '../../../types/content';

const FeatureCard: React.FC<{ 
  feature: Feature; 
  hasOutline?: boolean;
}> = ({ feature, hasOutline }) => {
  return (
    <div className={`h-full relative overflow-hidden group ${hasOutline ? 'shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]' : ''}`}>
      {/* Cyber Circuit Decoration */}
      <div className="absolute top-0 left-0 w-full h-10 pointer-events-none z-20 opacity-70">
        <svg width="100%" height="100%" viewBox="0 0 400 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 2H150L170 15H230L250 2H400" stroke="#00BFFF" strokeWidth="3" />
          <circle cx="200" cy="15" r="5" fill="#00BFFF" />
          <rect x="180" y="14" width="40" height="3" fill="#00BFFF" opacity="0.4" />
        </svg>
      </div>

      <div 
        className="h-full p-6 sm:p-8 lg:p-10 flex flex-col items-start relative z-10 shadow-2xl"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)'
        }}
      >
        <div className="text-[#00BFFF] mb-4 sm:mb-6 mt-4">
          {React.cloneElement(feature.icon as React.ReactElement, { size: 28 })}
        </div>

        <h3 className="text-lg sm:text-xl font-black font-heading mb-2 sm:mb-3 tracking-tight uppercase text-white">
          {feature.title}
        </h3>

        <p className="text-white/80 font-medium leading-relaxed text-xs sm:text-sm max-w-xs text-justify">
          {feature.desc}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
