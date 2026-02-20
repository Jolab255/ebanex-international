import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const FoundersMessageSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="mb-16 sm:mb-24 lg:mb-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-blue-500 text-sm font-semibold tracking-widest uppercase"
          >
            Leadership Voice
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading mt-3"
          >
            Founders&apos; <span className="text-blue-500">Message</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800"
                alt="Dr. Amara Okoro - Founding Director"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Dr. Amara Okoro</h3>
                  <p className="text-blue-400 text-sm sm:text-base">Founding Director</p>
                  <div className="flex items-center gap-3 mt-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition-colors"
                    >
                      <Linkedin size={18} className="text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition-colors"
                    >
                      <Twitter size={18} className="text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition-colors"
                    >
                      <Mail size={18} className="text-white" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="absolute -z-10 -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
            <div className="absolute -z-10 -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-slate-300 leading-relaxed mb-8 relative z-10">
              <span className="absolute -top-6 -left-2 text-blue-500/30 text-6xl sm:text-7xl lg:text-8xl font-serif leading-none">
                &ldquo;
              </span>
              <span className="relative z-10 pl-8 sm:pl-10">
                In a world where digital boundaries are constantly shifting, the greatest asset any
                organization possesses is its people. At Ebanex, we invest in that human potential
                to build resilient institutions that thrive in the face of change.
              </span>
              <span className="absolute -bottom-10 right-0 text-blue-500/30 text-6xl sm:text-7xl lg:text-8xl font-serif leading-none">
                &rdquo;
              </span>
            </blockquote>

            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-400 leading-relaxed"
              >
                Our vision was born from a simple belief: that sustainable development requires
                empowered people. Every training program we design, every partnership we forge, and
                every institution we strengthen is a step toward a more capable, secure, and
                prosperous global community.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-slate-400 leading-relaxed"
              >
                We remain committed to excellence, integrity, and innovation in all that we do,
                knowing that our work today shapes the leaders and institutions of tomorrow.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 pt-8 border-t border-white/10"
            >
              <p className="text-blue-400 font-medium">Dr. Amara Okoro</p>
              <p className="text-slate-500 text-sm">Founding Director, Ebanex International</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FoundersMessageSection;
