import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  CheckCircle,
  ArrowRight,
  Calendar,
  Clock,
  Shield,
  AlertTriangle,
  Activity,
  Phone,
  FileWarning,
} from 'lucide-react';
import {
  FaCertificate,
  FaClock,
  FaChalkboardTeacher,
  FaLevelUpAlt,
  FaLaptopCode,
} from 'react-icons/fa';
import Counter from './Counter';

const IncidentResponseTraining: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isInSyllabus, setIsInSyllabus] = useState(false);
  const syllabusRef = useRef<HTMLDivElement>(null);
  const syllabusScrollY = useScroll({
    target: syllabusRef,
    offset: ['start end', 'end start'],
  }).scrollYProgress;
  useEffect(() => {
    const unsubscribe = syllabusScrollY.on('change', (latest) =>
      setIsInSyllabus(latest > 0 && latest < 1),
    );
    return unsubscribe;
  }, [syllabusScrollY]);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const waveScale = useTransform(smoothProgress, [0, 1], [0.9, 1.3]);
  const waveOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.4, 0.8, 0.4]);
  const waveRotate = useTransform(smoothProgress, [0, 1], [-5, 20]);
  const circle1Scale = useTransform(smoothProgress, [0, 1], [1, 1.1]);
  const circle2Scale = useTransform(smoothProgress, [0, 1], [1, 1.15]);
  const circle3Scale = useTransform(smoothProgress, [0, 1], [1, 1.2]);

  const modules = [
    {
      title: 'Incident Response Foundations',
      duration: '4 hours',
      topics: [
        'IR Framework',
        'Roles & Responsibilities',
        'Communication Plans',
        'Escalation Procedures',
      ],
    },
    {
      title: 'Threat Detection & Analysis',
      duration: '6 hours',
      topics: ['Log Analysis', 'Malware Analysis', 'Forensic Basics', 'Threat Hunting'],
    },
    {
      title: 'Containment & Eradication',
      duration: '5 hours',
      topics: ['Isolation Techniques', 'Malware Removal', 'System Recovery', 'Patch Management'],
    },
    {
      title: 'Recovery & Post-Incident',
      duration: '4 hours',
      topics: ['System Restoration', 'Lessons Learned', 'Report Writing', 'Improvement Planning'],
    },
  ];
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) window.scrollTo({ top: element.offsetTop - 120, behavior: 'smooth' });
  };
  const faqs = [
    {
      question: 'Who should take the Incident Response Training?',
      answer:
        'This program is designed for IT security professionals, SOC analysts, incident responders, and anyone responsible for handling security incidents.',
    },
    {
      question: 'What prerequisites are needed?',
      answer:
        'Basic understanding of networking and operating systems is recommended. Prior security experience is helpful but not required.',
    },
    {
      question: 'Will I get hands-on experience?',
      answer:
        'Yes, our training includes realistic incident response simulations and hands-on labs.',
    },
    {
      question: 'What certifications does this prepare me for?',
      answer: 'This training prepares you for GCIH, ECIH, and CompTIA Security+ certifications.',
    },
    {
      question: 'Can this be customized for our organization?',
      answer:
        'Absolutely. We can tailor the training to your specific incident response procedures and tools.',
    },
    {
      question: 'How is this training delivered?',
      answer: 'We offer instructor-led, virtual live, and self-paced online options.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Incident Response Training | EBANEX International</title>
        <meta
          name="description"
          content="Master incident response with our comprehensive training program. Learn to detect, analyze, and respond to security incidents effectively."
        />
        <meta
          name="keywords"
          content="incident response, cybersecurity training, SOC, security operations, forensics, incident handling"
        />
        <meta property="og:title" content="Incident Response Training | EBANEX International" />
        <link rel="canonical" href="https://ebanex.com/training/incident-response" />
      </Helmet>
      <div>
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
                    <span>Incident Response</span>
                  </div>
                  <span className="bg-[#00C4D4] text-black text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-tighter">
                    Specialization
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
                  Incident Response <span className="text-[#00C4D4]">Training</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-lg text-slate-300 mb-8 max-w-2xl"
                >
                  Learn to detect, analyze, and respond to security incidents. Master incident
                  response frameworks and become your organization's first line of defense.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex items-center gap-6 md:gap-8"
                >
                  <div className="flex flex-col gap-3 text-sm font-medium text-slate-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-[#00C4D4]" />
                      <span>8 Days (Instructor-Led)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-green-400" />
                      <span>48 Hours (Self-Paced)</span>
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
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
                  </button>
                  <button className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-4 group">
                    Request Corporate Training{' '}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
                  </button>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full lg:w-[500px] relative group"
              >
                <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-sm shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop"
                    alt="Incident Response"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#00C4D4] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-black border-b-[10px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#00C4D4]"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </header>
        <div className="px-5">
          <div className="max-w-7xl mx-auto">
            <div className="border-t border-slate-700 my-5"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-[5px]">
              <div className="text-left">
                <FaCertificate className="w-6 h-6 text-[#00C4D4] mb-2" />
                <div className="text-lg font-light text-slate-300 mb-1">GCIH</div>
                <div className="text-sm font-light text-slate-500">
                  GIAC Incident Handler certification
                </div>
              </div>
              <div className="text-left">
                <FaClock className="w-6 h-6 text-green-400 mb-2" />
                <div className="text-lg font-light text-slate-300 mb-1">32 CPE</div>
                <div className="text-sm font-light text-slate-500">
                  Continuing Professional Education
                </div>
              </div>
              <div className="text-left">
                <FaChalkboardTeacher className="w-6 h-6 text-purple-400 mb-2" />
                <div className="text-lg font-light text-slate-300 mb-1">Instructor-Led</div>
                <div className="text-sm font-light text-slate-500">
                  Virtual and self-paced options
                </div>
              </div>
              <div className="text-left">
                <FaLevelUpAlt className="w-6 h-6 text-orange-400 mb-2" />
                <div className="text-lg font-light text-slate-300 mb-1">Intermediate</div>
                <div className="text-sm font-light text-slate-500">
                  For IT security professionals
                </div>
              </div>
              <div className="text-left">
                <FaLaptopCode className="w-6 h-6 text-cyan-400 mb-2" />
                <div className="text-lg font-light text-slate-300 mb-1">Hands-On Labs</div>
                <div className="text-sm font-light text-slate-500">
                  Realistic incident simulations
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-5">
            <div className="border-t border-slate-700 my-5"></div>
          </div>
        </div>
        <div
          className={`sticky top-0 z-50 backdrop-blur-md pt-12 py-6 transition-all duration-500 ${isInSyllabus ? 'bg-gradient-to-r from-[#0a1628] via-[#0f2744] to-[#0a1628] border-b border-[#00C4D4]/20' : 'bg-slate-950/95'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
            <div
              className={`text-sm font-semibold pl-0 transition-colors ${isInSyllabus ? 'text-[#00C4D4]' : 'text-white'}`}
            >
              Jump to:
            </div>
            <div className="flex items-center gap-6 mr-[3%]">
              <button
                onClick={() => scrollToSection('overview')}
                className={`text-sm border-2 px-4 py-2 rounded-full ${isInSyllabus ? 'border-[#00C4D4]/40 text-slate-200 hover:text-[#00C4D4]' : 'border-white/40 text-white hover:text-[#00C4D4]'}`}
              >
                Overview
              </button>
              <button
                onClick={() => scrollToSection('syllabus')}
                className={`text-sm border-2 px-4 py-2 rounded-full ${isInSyllabus ? 'border-[#00C4D4]/40 text-slate-200 hover:text-[#00C4D4]' : 'border-white/40 text-white hover:text-[#00C4D4]'}`}
              >
                Syllabus
              </button>
              <button
                onClick={() => scrollToSection('faqs')}
                className={`text-sm border-2 px-4 py-2 rounded-full ${isInSyllabus ? 'border-[#00C4D4]/40 text-slate-200 hover:text-[#00C4D4]' : 'border-white/40 text-white hover:text-[#00C4D4]'}`}
              >
                FAQs
              </button>
              <button
                onClick={() => scrollToSection('register')}
                className={`text-sm border-2 px-4 py-2 rounded-full ${isInSyllabus ? 'border-[#00C4D4]/40 text-slate-200 hover:text-[#00C4D4]' : 'border-white/40 text-white hover:text-[#00C4D4]'}`}
              >
                Register
              </button>
            </div>
          </div>
        </div>
        <div className="w-full py-16 sm:pt-24 sm:pb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-xl md:text-3xl font-extralight leading-relaxed text-slate-200 text-center mx-auto block w-full px-[100px]"
          >
            When a security incident occurs, every second counts. Our incident response training
            gives you the skills to detect, contain, and recover from incidents while minimizing
            damage and downtime.
          </motion.h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-visible rounded-2xl bg-[#0a2a43] p-10 md:p-16 border border-white/10"
          >
            <motion.div
              style={{ scale: waveScale, opacity: waveOpacity, rotate: waveRotate }}
              className="absolute -right-20 -bottom-40 w-[600px] h-[600px] pointer-events-none z-0"
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <radialGradient id="waveGradientIR" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#00C4D4" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#00C4D4" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <motion.circle
                  style={{ scale: circle1Scale }}
                  cx="100"
                  cy="100"
                  r="40"
                  fill="none"
                  stroke="url(#waveGradientIR)"
                  strokeWidth="8"
                />
                <motion.circle
                  style={{ scale: circle2Scale }}
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="url(#waveGradientIR)"
                  strokeWidth="12"
                />
                <motion.circle
                  style={{ scale: circle3Scale }}
                  cx="100"
                  cy="100"
                  r="100"
                  fill="none"
                  stroke="url(#waveGradientIR)"
                  strokeWidth="16"
                />
              </svg>
            </motion.div>
            <div className="relative z-10">
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-slate-200 italic">
                "The incident response training was a game-changer for our security team. We reduced
                our mean time to respond from 4 hours to under 30 minutes."
              </p>
              <div className="mt-8">
                <h4 className="font-bold text-lg text-white">David Park</h4>
                <p className="text-[#00C4D4] font-medium italic">
                  SOC Manager, Technology Corporation
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <div
          ref={syllabusRef}
          className="relative"
          style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0f2744 50%, #0a1628 100%)' }}
        >
          <motion.div
            style={{ scale: waveScale, opacity: waveOpacity, rotate: waveRotate }}
            className="absolute -right-40 -bottom-40 w-[600px] h-[600px] pointer-events-none"
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <radialGradient id="waveGradientIR2" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00C4D4" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#00C4D4" stopOpacity="0" />
                </radialGradient>
              </defs>
              <motion.circle
                style={{ scale: circle1Scale }}
                cx="100"
                cy="100"
                r="40"
                fill="none"
                stroke="url(#waveGradientIR2)"
                strokeWidth="8"
              />
              <motion.circle
                style={{ scale: circle2Scale }}
                cx="100"
                cy="100"
                r="70"
                fill="none"
                stroke="url(#waveGradientIR2)"
                strokeWidth="12"
              />
              <motion.circle
                style={{ scale: circle3Scale }}
                cx="100"
                cy="100"
                r="100"
                fill="none"
                stroke="url(#waveGradientIR2)"
                strokeWidth="16"
              />
            </svg>
          </motion.div>
          <div className="relative z-10 max-w-7xl mx-auto px-[100px] py-20">
            <motion.div
              id="syllabus"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-[clamp(1.25rem,4vw,2.5rem)] font-light font-heading mb-12">
                What You'll Learn
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-[#00C4D4] rounded-full"></span>Technical Skills
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'Detect and analyze security incidents',
                      'Implement incident response frameworks',
                      'Perform forensic analysis',
                      'Contain and isolate threats',
                      'Recover systems and data',
                      'Document and report incidents',
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="flex items-start gap-3 text-slate-300"
                      >
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-teal-500 rounded-full"></span>Career Benefits
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'Prepare for GCIH and ECIH certifications',
                      'Access SOC analyst positions',
                      'Join incident response teams',
                      'Earn industry-recognized credentials',
                      'Fast-track your security career',
                      'Network with security professionals',
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="flex items-start gap-3 text-slate-300"
                      >
                        <CheckCircle className="w-5 h-5 text-teal-400 mt-0.5 shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="lg:sticky lg:top-[120px] lg:h-fit">
                <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-light font-heading mb-8 text-white">
                  Measurable Impact
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { metric: 70, suffix: '%', label: 'Faster Response' },
                    { metric: 85, suffix: '%', label: 'Containment' },
                    { metric: 90, suffix: '%', label: 'Retention' },
                    { metric: 3, suffix: 'x', label: 'ROI' },
                  ].map((s, i) => (
                    <div key={i} className="text-center p-4 border border-white/10 bg-slate-900/30">
                      <div className="text-4xl font-light text-[#00C4D4] mb-1">
                        <Counter target={s.metric} suffix={s.suffix} />
                      </div>
                      <div className="text-sm text-slate-300">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-[#00C4D4] text-black px-6 py-3 rounded-full font-medium hover:bg-[#00b0c0] flex items-center gap-2">
                    Request Training <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="bg-transparent text-white border border-white/30 px-6 py-3 rounded-full">
                    Schedule & Pricing
                  </button>
                </div>
              </div>
              <div className="space-y-12 pb-32">
                <div>
                  <h3 className="text-xl text-white mb-4 pb-3 border-b border-white/10">
                    Course Modules
                  </h3>
                  <ul className="space-y-4">
                    {modules.map((m, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 p-4 bg-slate-900/30 border border-white/5"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#00C4D4] mt-2"></span>
                        <div className="flex-1">
                          <span className="text-white font-medium block">{m.title}</span>
                          <span className="text-slate-400 text-sm">{m.topics.join(' • ')}</span>
                        </div>
                        <span className="text-[#00C4D4] text-sm">{m.duration}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl text-white mb-4 pb-3 border-b border-white/10">
                    Tools You'll Use
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['SIEM', 'Splunk', 'Wireshark', 'FTK Imager', 'Autopsy', 'Malwarebytes'].map(
                      (t, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[#00C4D4]/10 text-[#00C4D4] text-sm rounded-full border border-[#00C4D4]/20"
                        >
                          {t}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-16 px-[100px] bg-slate-900">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <motion.h2
              className="text-[clamp(1.25rem,4vw,2.5rem)] font-light font-heading mb-4 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              Meet Your Instructor
            </motion.h2>
            <p className="text-slate-400 text-center mb-12">
              Learn from experienced incident responders
            </p>
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="w-full md:w-72"
              >
                <div className="relative">
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=533"
                      alt="Instructor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-[#00C4D4] text-black px-4 py-2 rounded-full text-sm font-bold">
                    GCIH, GCFA
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex-1"
              >
                <h3 className="text-2xl font-bold text-white mb-2">Marcus Johnson</h3>
                <p className="text-[#00C4D4] mb-4">Senior Incident Response Manager</p>
                <p className="text-slate-300 mb-6">
                  With over 14 years in incident response, Marcus has led response efforts for major
                  security breaches across financial services and government.
                </p>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {['GCIH', 'GCFA', 'OSCP', 'CISSP'].map((c, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-800 rounded-full text-sm">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { n: '14+', l: 'Years' },
                    { n: '300+', l: 'Incidents' },
                    { n: '40+', l: 'Orgs' },
                  ].map((s, i) => (
                    <div key={i} className="text-center p-3 bg-slate-800/50">
                      <div className="text-xl font-bold text-[#00C4D4]">{s.n}</div>
                      <div className="text-xs text-slate-400">{s.l}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <motion.div
          id="faqs"
          className="w-full py-16 px-[100px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <motion.h2 className="text-[clamp(1.25rem,4vw,2.5rem)] font-light font-heading mb-12 text-center">
            Frequently Asked Questions
          </motion.h2>
          <div className="max-w-5xl mx-auto">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mb-4"
              >
                <div
                  className={`rounded-2xl p-6 ${openFaq === i ? 'bg-gradient-to-r from-blue-900/40 to-teal-900/30 border-[#00C4D4]/30' : 'bg-slate-900/50 border border-white/10'}`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${openFaq === i ? 'bg-[#00C4D4] text-black' : 'bg-white/10'}`}
                      >
                        {i + 1}
                      </span>
                      <span className="text-lg">{faq.question}</span>
                    </div>
                    <span
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${openFaq === i ? 'bg-[#00C4D4] text-black' : 'bg-white/10'}`}
                    >
                      ▼
                    </span>
                  </button>
                  {openFaq === i && <div className="pl-16 pt-4 text-slate-400">{faq.answer}</div>}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div id="register" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <div className="relative min-h-[500px] flex items-center">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600"
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70" />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-[100px] py-20">
              <div className="max-w-2xl">
                <span className="inline-block px-4 py-1 bg-[#00C4D4]/20 text-[#00C4D4] rounded-full mb-6">
                  Partner With Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Become an Incident Responder?
                </h2>
                <p className="text-lg text-slate-300 mb-8">
                  Join our incident response program and gain the skills to protect your
                  organization.
                </p>
                <button className="bg-[#00C4D4] text-black px-8 py-4 rounded-full font-bold">
                  Request Corporate Training
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default IncidentResponseTraining;
