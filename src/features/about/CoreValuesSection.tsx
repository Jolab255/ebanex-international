import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Heart, Sparkles, Handshake } from 'lucide-react';

const CoreValuesSection: React.FC = () => {
  const values = [
    { title: 'Excellence', icon: <Sparkles className="text-yellow-400" /> },
    { title: 'Integrity', icon: <ShieldCheck className="text-green-400" /> },
    { title: 'Innovation', icon: <Heart className="text-red-400" /> },
    { title: 'Impact', icon: <Target className="text-blue-500" /> },
    { title: 'Professionalism', icon: <Handshake className="text-blue-500" /> },
    { title: 'Global Collaboration', icon: <Eye className="text-indigo-400" /> },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24">
      <div className="mb-32">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-black leading-none uppercase tracking-tighter text-[clamp(0.6rem,7vw,5rem)] bg-center bg-no-repeat bg-clip-text text-transparent select-none filter brightness-125 animate-bg-pan text-center whitespace-nowrap overflow-hidden text-ellipsis"
          style={{
            backgroundImage:
              "url('https://assets.avant.org.au/cdf6134c-01d7-0292-26f5-2f5cf1db96f8/4645803d-67d3-4662-9f18-816e532b82a1/Responding-to-a-cyber-security-incident.jpg')",
            WebkitBackgroundClip: 'text',
          }}
        >
          C o r e - V a l u e s
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-2 text-center"
        >
          <span className="text-blue-500 font-bold uppercase tracking-[0.4em] text-[clamp(0.7rem,2vw,1rem)]">
            What Drives Us
          </span>
        </motion.div>

        <div className="relative flex flex-col items-center mt-12 sm:mt-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <div className="bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg sm:text-xl lg:text-2xl shadow-lg shadow-blue-500/30">
              Ebanex International
            </div>
          </motion.div>

          <svg
            className="w-full h-32 sm:h-40 lg:h-48 overflow-visible"
            viewBox="0 0 800 120"
            preserveAspectRatio="xMidYMid meet"
          >
            <motion.path
              d="M400 0 L400 40"
              stroke="#3b82f6"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
            <motion.path
              d="M80 40 L720 40"
              stroke="#3b82f6"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
            />
            {values.map((_, idx) => {
              const xPosition = 80 + idx * 128;
              return (
                <motion.path
                  key={idx}
                  d={`M${xPosition} 40 Q${xPosition} 70 ${xPosition} 100`}
                  stroke="#3b82f6"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.1, ease: 'easeInOut' }}
                />
              );
            })}
          </svg>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 w-full">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 sm:p-8 rounded-2xl border border-white/10 text-center flex flex-col items-center gap-4 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  {val.icon}
                </div>
                <span className="font-bold text-sm tracking-wide">{val.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValuesSection;
