
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
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section 1: Intro */}
        <div className="max-w-4xl mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-bold font-heading mb-8"
          >
            Engineering Institutional <br />
            <span className="text-purple-500">Resilience.</span>
          </motion.h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Ebanex International stands at the intersection of expertise and execution. 
            We are more than consultants; we are architects of institutional capacity, 
            empowering global organizations to thrive in an era of rapid digital disruption.
          </p>
        </div>

        {/* Section 2: Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <div className="glass p-12 rounded-[2.5rem] border-white/5">
            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-8">
              <Target className="text-blue-400 w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-slate-400 leading-relaxed">
              To provide transformative training and strategic advisory that strengthens institutional 
              frameworks, secures digital assets, and cultivates high-performance leadership worldwide.
            </p>
          </div>
          <div className="glass p-12 rounded-[2.5rem] border-white/5">
            <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mb-8">
              <Eye className="text-purple-400 w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-400 leading-relaxed">
              To be the premier global partner for professional development, known for setting 
              the standard in cybersecurity excellence and sustainable organizational evolution.
            </p>
          </div>
        </div>

        {/* Section 3: Values */}
        <div className="mb-32">
          <h2 className="text-4xl font-bold font-heading text-center mb-16">Core Values</h2>
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
        <div className="glass rounded-[3rem] p-12 lg:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=800" 
              className="w-full h-full object-cover" 
              alt="Leadership" 
            />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-bold mb-8">Message from our Leadership</h2>
            <blockquote className="text-2xl font-medium italic text-slate-300 mb-8 leading-snug">
              "In a world where digital boundaries are constantly shifting, the greatest asset 
              any organization possesses is its people. At Ebanex, we invest in that human potential."
            </blockquote>
            <div>
              <p className="font-bold text-xl">Dr. Amara Okoro</p>
              <p className="text-purple-400">Founding Director, Ebanex International</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
