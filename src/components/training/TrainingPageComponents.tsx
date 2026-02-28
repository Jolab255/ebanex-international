import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Calendar, Clock } from 'lucide-react';
import {
  FaCertificate,
  FaClock,
  FaChalkboardTeacher,
  FaLevelUpAlt,
  FaLaptopCode,
} from 'react-icons/fa';
import Counter from './Counter';

interface TrainingPageHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  durationInstructorLed: string;
  durationSelfPaced: string;
  programType: string;
}

export const TrainingPageHero: React.FC<TrainingPageHeroProps> = ({
  title,
  subtitle,
  badge = 'Featured Program',
  durationInstructorLed,
  durationSelfPaced,
  programType,
}) => {
  return (
    <header className="bg-slate-950 text-white pt-12 pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-300">
                <span>Cybersecurity Programs</span>
                <span className="text-slate-500">/</span>
                <span>{programType}</span>
              </div>
              <span className="bg-[#00C4D4] text-black text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-tighter">
                {badge}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="bg-[#00C4D4] text-black text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-tight">
                New 2025 Edition
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-2 text-slate-400 text-sm font-medium mb-4"
            >
              <span className="font-bold text-white">Ebanex International</span>
              <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
              <span>Cybersecurity Training</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading leading-[1.1] mb-8 max-w-3xl"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-slate-300 mb-8 max-w-2xl"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-6 md:gap-8"
            >
              <div className="flex flex-col gap-3 text-sm font-medium text-slate-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <span>{durationInstructorLed}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-400" />
                  <span>{durationSelfPaced}</span>
                </div>
              </div>

              <div className="w-px bg-slate-700 h-12"></div>

              <div className="text-sm font-medium text-white">
                <p className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">
                  Designed and delivered by
                </p>
                <p className="text-sm md:text-base font-semibold text-white">
                  EBANEX International Faculty Team
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 py-8"
            >
              <button className="bg-[#00C4D4] text-black px-6 py-2 rounded-full font-bold hover:bg-[#00b0c0] transition-all flex items-center justify-center gap-4 group">
                View Training Programs{' '}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-4 group">
                Request Corporate Training{' '}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-[500px] relative group cursor-pointer"
          >
            <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-sm shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=800&fit=crop"
                alt="Course Preview"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#00C4D4] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-black border-b-[10px] border-b-transparent ml-1"></div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#FF0000]"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

interface CertificationInfoProps {
  certifications: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
}

export const CertificationInfo: React.FC<CertificationInfoProps> = ({ certifications }) => {
  return (
    <div className="px-5">
      <div className="max-w-7xl mx-auto">
        <div className="border-t border-slate-700 my-5"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-[5px]">
          {certifications.map((cert, index) => (
            <div key={index} className="text-left">
              {cert.icon}
              <div className="text-lg font-light text-slate-300 mb-1">{cert.title}</div>
              <div className="text-sm font-light text-slate-500">{cert.description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-5">
        <div className="border-t border-slate-700 my-5"></div>
      </div>
    </div>
  );
};

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({ value, suffix, label }) => {
  return (
    <div className="text-center p-4 border border-white/10 bg-slate-900/30">
      <div className="text-4xl font-light text-[#00C4D4] mb-1">
        <Counter target={value} suffix={suffix} />
      </div>
      <div className="text-sm text-slate-300 font-light">{label}</div>
    </div>
  );
};

interface InstructorProps {
  name: string;
  title: string;
  description: string;
  certifications: string[];
  stats: Array<{ number: string; label: string }>;
  imageUrl: string;
}

export const MeetInstructor: React.FC<InstructorProps> = ({
  name,
  title,
  description,
  certifications,
  stats,
  imageUrl,
}) => {
  return (
    <div className="w-full py-16 px-[100px] bg-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <motion.h2
          className="text-[clamp(1.25rem,4vw,2.5rem)] font-light font-heading mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Meet Your Instructor
        </motion.h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Learn from industry experts with years of hands-on experience in cybersecurity
        </p>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-72 flex-shrink-0"
          >
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-slate-800">
                <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#00C4D4] text-black px-4 py-2 rounded-full text-sm font-bold">
                {certifications.slice(0, 2).join(', ')}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
            <p className="text-[#00C4D4] font-medium mb-4">{title}</p>
            <p className="text-slate-300 font-light leading-relaxed mb-6">{description}</p>

            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-slate-800 border border-white/10 rounded-full text-sm text-slate-300"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-3 bg-slate-800/50 rounded-lg">
                  <div className="text-xl font-bold text-[#00C4D4]">{stat.number}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC<{ faqs: FAQItem[] }> = ({ faqs }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <motion.div
      id="faqs"
      className="w-full py-16 px-[100px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-[clamp(1.25rem,4vw,2.5rem)] font-light font-heading mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="max-w-5xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <motion.div
              className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
                openFaq === index
                  ? 'bg-gradient-to-r from-blue-900/40 to-teal-900/30 border-blue-500/30'
                  : 'bg-slate-900/50 border border-white/10 hover:border-white/20'
              }`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: openFaq === index ? 1 : 0 }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-teal-500/5"
              />

              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="relative w-full flex items-center justify-between p-6 text-left group"
              >
                <div className="flex items-center gap-4">
                  <motion.span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      openFaq === index
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/10 text-slate-400 group-hover:bg-white/20'
                    }`}
                  >
                    {index + 1}
                  </motion.span>
                  <span
                    className={`font-medium text-lg transition-colors ${
                      openFaq === index ? 'text-white' : 'text-slate-300 group-hover:text-white'
                    }`}
                  >
                    {faq.question}
                  </span>
                </div>

                <motion.div
                  animate={{ rotate: openFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    openFaq === index
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/10 text-slate-400 group-hover:bg-white/20 group-hover:text-white'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openFaq === index ? 'auto' : 0,
                  opacity: openFaq === index ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <div className="relative px-6 pb-6 pl-[72px] pr-16">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: openFaq === index ? 1 : 0,
                      y: openFaq === index ? 0 : 10,
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-slate-400 font-light leading-relaxed"
                  >
                    {faq.answer}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export const CTASection: React.FC = () => {
  return (
    <motion.div
      id="register"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="relative min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80"
            alt="Team training session"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-[100px] py-20 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1 bg-blue-500/20 text-blue-400 text-sm font-semibold rounded-full mb-6">
                Partner With Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Build a Security-Aware Workforce?
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Partner with Ebanex International to transform your employees into your first line
                of defense against cyber threats. Our comprehensive training programs are tailored
                to your organization's unique needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#00C4D4] hover:bg-[#00b0c0] text-black font-bold rounded-full transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Corporate Training
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white text-white font-semibold rounded-full transition-colors"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Programs
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default TrainingPageHero;
