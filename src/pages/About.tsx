
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Heart, Sparkles, Handshake } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    { title: 'Excellence', icon: <Sparkles className="text-yellow-400" /> },
    { title: 'Integrity', icon: <ShieldCheck className="text-green-400" /> },
    { title: 'Innovation', icon: <Heart className="text-red-400" /> },
    { title: 'Impact', icon: <Target className="text-blue-400" /> },
    { title: 'Professionalism', icon: <Handshake className="text-purple-400" /> },
    { title: 'Global Collaboration', icon: <Eye className="text-indigo-400" /> }
  ];

  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section 1: Intro */}
        <div className="max-w-4xl mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[clamp(1.5rem,5vw,4.5rem)] font-bold font-heading mb-6 sm:mb-8 whitespace-nowrap"
          >
            Engineering Institutional <span className="text-purple-500">Resilience.</span>
          </motion.h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed">
            Ebanex International stands at the intersection of expertise and execution.
            We are more than consultants; we are architects of institutional capacity,
            empowering global organizations to thrive in an era of rapid digital disruption.
          </p>
        </div>

        {/* Section 2: Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <div className="glass p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-[2.5rem] border-white/5">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
              <Target className="text-blue-400 w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Our Mission</h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              To provide transformative training and strategic advisory that strengthens institutional
              frameworks, secures digital assets, and cultivates high-performance leadership worldwide.
            </p>
          </div>
          <div className="glass p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-[2.5rem] border-white/5">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
              <Eye className="text-purple-400 w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Our Vision</h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              To be the premier global partner for professional development, known for setting
              the standard in cybersecurity excellence and sustainable organizational evolution.
            </p>
          </div>
        </div>

        {/* Section 3: Values */}
        <div className="mb-32">
          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold font-heading text-center mb-8 sm:mb-12 lg:mb-16 whitespace-nowrap">Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="glass p-8 rounded-2xl border-white/5 text-center flex flex-col items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  {val.icon}
                </div>
                <span className="font-bold text-sm tracking-wide">{val.title}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 4: Founder Message */}
        <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 xl:p-24 relative overflow-hidden mb-16 sm:mb-24 lg:mb-32">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=800"
              className="w-full h-full object-cover"
              alt="Leadership"
              loading="lazy"
            />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-[clamp(1.25rem,3.5vw,1.875rem)] font-bold mb-4 sm:mb-6 lg:mb-8 whitespace-nowrap">Message from our Leadership</h2>
            <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium italic text-slate-300 mb-4 sm:mb-6 lg:mb-8 leading-snug">
              &quot;In a world where digital boundaries are constantly shifting, the greatest asset
              any organization possesses is its people. At Ebanex, we invest in that human potential.&quot;
            </blockquote>
            <div>
              <p className="font-bold text-xl">Dr. Amara Okoro</p>
              <p className="text-purple-400">Founding Director, Ebanex International</p>
            </div>
          </div>
        </div>

        {/* Section 5: Strategic Focus */}
        <div className="mb-24">
          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold font-heading text-center mb-8 sm:mb-12 lg:mb-16 whitespace-nowrap">Our Strategic Focus</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Technology-led capacity building",
              "Cybersecurity and digital resilience",
              "Leadership and workforce development",
              "Institutional strengthening"
            ].map((focus, idx) => (
              <div key={idx} className="glass p-8 rounded-2xl border-white/5 text-center border-t-2 border-t-purple-500/50">
                <p className="font-bold text-slate-300">{focus}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
