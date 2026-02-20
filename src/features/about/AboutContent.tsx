import React from 'react';
import { motion } from 'framer-motion';

const AboutContent: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24">
      <div className="max-w-4xl mx-auto mb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading mb-6 sm:mb-8"
        >
          About <span className="text-blue-500">Ebanex International</span>
        </motion.h1>
        <p className="text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed mb-6">
          Ebanex International is a global consulting and training firm specializing in professional
          capacity building, cybersecurity training, digital transformation, and institutional
          strengthening.
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed">
          We support governments, organizations, and professionals through high-quality training,
          advisory services, and knowledge transfer programs designed to deliver measurable results
          and long-term institutional impact.
        </p>
      </div>
    </div>
  );
};

export default AboutContent;
