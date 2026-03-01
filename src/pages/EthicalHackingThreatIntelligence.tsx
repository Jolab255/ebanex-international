import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Users,
  CheckCircle,
  Clock,
  ArrowRight,
  PlayCircle,
  BookOpen,
  Calendar,
  Shield,
  AlertTriangle,
  Target,
  Award,
} from 'lucide-react';
import {
  FaCertificate,
  FaClock,
  FaChalkboardTeacher,
  FaLevelUpAlt,
  FaLaptopCode,
} from 'react-icons/fa';

const Counter: React.FC<{ target: number; suffix?: string; duration?: number }> = ({
  target,
  suffix = '',
  duration = 2,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start * 10) / 10);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const EthicalHackingThreatIntelligence: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isOverviewExpanded, setIsOverviewExpanded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isInSyllabus, setIsInSyllabus] = useState(false);
  const syllabusRef = useRef<HTMLDivElement>(null);

  const syllabusScrollY = useScroll({
    target: syllabusRef,
    offset: ['start end', 'end start'],
  }).scrollYProgress;

  useEffect(() => {
    const unsubscribe = syllabusScrollY.on('change', (latest) => {
      setIsInSyllabus(latest > 0 && latest < 1);
    });
    return unsubscribe;
  }, [syllabusScrollY]);

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'outline', label: 'Course Outline' },
    { id: 'prerequisites', label: 'Prerequisites' },
    { id: 'objectives', label: 'Objectives' },
    { id: 'pricing', label: 'Pricing & Dates' },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Wave animation variables for testimonial
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

  const programFeatures = [
    {
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: 'Offensive Security Fundamentals',
      description:
        'Master the mindset and techniques used by malicious hackers to exploit vulnerabilities before they do.',
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: 'Active Defense & Threat Hunting',
      description:
        'Proactively identify invisible threats in your network environments using advanced intelligence.',
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-400" />,
      title: 'Vulnerability Exploitation',
      description:
        'Learn the practical execution of penetration testing methodologies from reconnaissance to post-exploitation.',
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-400" />,
      title: 'Open Source Intelligence (OSINT)',
      description:
        'Gather and analyze actionable threat data from public sources and the dark web to secure your perimeter.',
    },
  ];

  const learningObjectives = [
    'Execute comprehensive penetration testing engagements',
    'Perform network and web application vulnerability assessments',
    'Gather and analyze threat intelligence data to predict attacks',
    'Understand exploit development and post-exploitation tactics',
    'Write professional security audit reports for executive stakeholders',
    'Utilize industry-standard offensive security tools (Kali Linux, Metasploit, Nmap)',
  ];

  const modules = [
    {
      title: 'Introduction to Ethical Hacking & Footprinting',
      topics: ['Hacking Methodologies', 'Reconnaissance Techniques', 'Network Scanning', 'OSINT Fundamentals'],
    },
    {
      title: 'Network & System Exploitation',
      topics: [
        'Vulnerability Analysis',
        'System Hacking',
        'Malware Threats',
        'Sniffing & Social Engineering',
      ],
    },
    {
      title: 'Web Application & Wireless Security',
      topics: ['SQL Injection', 'Cross-Site Scripting (XSS)', 'Wireless Network Exploitation', 'Session Hijacking'],
    },
    {
      title: 'Threat Intelligence & Defensive Strategies',
      topics: [
        'Cyber Threat Intelligence (CTI)',
        'Threat Actors & APTs',
        'Incident Response Integration',
        'Report Generation',
      ],
    },
  ];

  return (
    <>
      <div>
        <Helmet>
          <title>Ethical Hacking & Threat Intelligence | EBANEX International</title>
          <meta
            name="description"
            content="Master offensive security tactics and threat intelligence. Learn penetration testing, vulnerability assessment, and proactive defense with EBANEX International."
          />
          <meta
            name="keywords"
            content="ethical hacking, penetration testing, threat intelligence, vulnerability assessment, CEH training, cyber defense"
          />
          <meta
            property="og:title"
            content="Ethical Hacking & Threat Intelligence | EBANEX International"
          />
          <meta
            property="og:description"
            content="Become a certified ethical hacker and learn to neutralize threats before they exploit your network."
          />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ebanex.com/training/ethical-hacking" />
        </Helmet>

        {/* Hero Section */}
        <header className="bg-slate-950 text-white pt-12 pb-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1">
                {/* Breadcrumbs & Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex flex-wrap items-center gap-3 mb-8"
                >
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-300">
                    <span>Cybersecurity Programs</span>
                    <span className="text-slate-500">/</span>
                    <span>Offensive Security</span>
                  </div>
                  <span className="bg-[#00C4D4] text-[#0a1628] text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-tighter">
                    Offensive Security
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-6"
                >
                  <span className="bg-[#00C4D4] text-[#0a1628] text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-tight">
                    New 2026 Curriculum
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
                  <span>Advanced Training</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-heading leading-[1.1] mb-8 max-w-3xl"
                >
                  Ethical Hacking & Threat Intelligence
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-lg text-slate-300 mb-8 max-w-2xl"
                >
                  Master the tools and techniques of malicious hackers to preemptively secure your organization's digital assets. Learn offensive security, penetration testing, and predictive threat intelligence.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex items-center gap-6 md:gap-8"
                >
                  {/* Left Column - Duration Info */}
                  <div className="flex flex-col gap-3 text-sm font-medium text-slate-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-400" />
                      <span>8 Days (Instructor-Led Labs)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-green-400" />
                      <span>45 Hours (Hands-on Practice)</span>
                    </div>
                  </div>

                  {/* Vertical Separator */}
                  <div className="w-px bg-slate-700 h-12"></div>

                  {/* Right Column - Designer Info */}
                  <div className="text-sm font-medium text-white">
                    <p className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">
                      Led by Active Practitioners
                    </p>
                    <p className="text-sm md:text-base font-semibold text-white">
                      EBANEX Red Team Specialists
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="flex flex-wrap gap-4 py-8"
                >
                  <button className="bg-[#00C4D4] text-[#0a1628] px-6 py-2 rounded-full font-bold hover:bg-[#00b0c0] transition-all flex items-center gap-4 group">
                    Enroll in Cohort{' '}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-4 group">
                    Request Syllabus{' '}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </div>

              {/* Video Preview Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full lg:w-[500px] relative group cursor-pointer"
              >
                <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-sm shadow-2xl">
                  <img
                    src="https://picsum.photos/seed/ethicalhacking/800/800"
                    alt="Course Preview"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay with red bar and play button */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#00C4D4] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-black border-b-[10px] border-b-transparent ml-1"></div>
                    </div>
                  </div>

                  {/* Red bar at bottom */}
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#FF0000]"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </header>

        {/* Certification Info Section */}
        <div className="px-5">
          <div className="max-w-7xl mx-auto">
            <div className="border-t border-slate-700 my-5"></div>
            <div className="grid grid-cols-5 gap-[5px]">
              <div className="text-left">
                <FaCertificate className="w-6 h-6 text-blue-400 mb-2" />
                <div className="text-lg font-light text-slate-300 mb-1">CEH Aligned</div>
                <div className="text-sm font-light text-slate-500">
                  Certified Ethical Hacker prep - Develop critical skills for offensive security certifications
                </div>
                <button className="mt-2 text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1">
                  Read about certification
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="text-left">
                <FaClock className="w-6 h-6 text-green-400 mb-2" />
                <div className="text-lg font-light text-slate-300 mb-1">45 CPE</div>
                <div className="text-sm font-light text-slate-500">
                  Earn rigorous Continuing Professional Education credits for completing live technical labs
                </div>
              </div>
              <div className="text-left">
                <FaChalkboardTeacher className="w-6 h-6 text-purple-400 mb-2" />
                <div className="text-lg font-light text-slate-300 mb-1">Lab-Intensive</div>
                <div className="text-sm font-light text-slate-500">
                  Extensive practical exercises in simulated environments designed by real-world red teamers
                </div>
              </div>
              <div className="text-left">
                <FaLevelUpAlt className="w-6 h-6 text-orange-400 mb-2" />
                <div className="text-lg font-light text-slate-300 mb-1">Advanced</div>
                <div className="text-sm font-light text-slate-500">
                  High technical skill level - requires foundational networking and systems administration knowledge
                </div>
              </div>
              <div className="text-left">
                <FaLaptopCode className="w-6 h-6 text-cyan-400 mb-2" />
                <div className="text-lg font-light text-slate-300 mb-1">Cyber Range</div>
                <div className="text-sm font-light text-slate-500">
                  Hack into realistic vulnerable environments and practice zero-day exploitation methodologies
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-5">
            <div className="border-t border-slate-700 my-5"></div>
          </div>
        </div>

        {/* Jump To Navigation - Sticky */}
        <div
          className={`sticky top-0 z-50 backdrop-blur-md pt-12 py-6 transition-all duration-500 ${isInSyllabus
            ? 'bg-gradient-to-r from-[#0a1628] via-[#0f2744] to-[#0a1628] border-b border-blue-500/20'
            : 'bg-slate-950/95'
            }`}
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
            {/* Left side - Jump to label */}
            <div
              className={`text-sm font-semibold pl-0 transition-colors duration-300 ${isInSyllabus ? 'text-[#00C4D4]' : 'text-white'
                }`}
            >
              Jump to:
            </div>

            {/* Right side - Navigation links */}
            <div className="flex items-center gap-6 mr-[3%]">
              <button
                onClick={() => scrollToSection('overview')}
                className={`text-sm transition-all duration-300 border-2 px-4 py-2 rounded-full ${isInSyllabus
                  ? 'border-[#00C4D4]/40 text-slate-200 hover:text-[#00C4D4] hover:border-[#00C4D4]'
                  : 'border-white/40 text-white hover:text-blue-400'
                  }`}
              >
                Overview
              </button>
              <button
                onClick={() => scrollToSection('syllabus')}
                className={`text-sm transition-all duration-300 border-2 px-4 py-2 rounded-full ${isInSyllabus
                  ? 'border-[#00C4D4]/40 text-slate-200 hover:text-[#00C4D4] hover:border-[#00C4D4]'
                  : 'border-white/40 text-white hover:text-blue-400'
                  }`}
              >
                Syllabus
              </button>
              <button
                onClick={() => scrollToSection('faqs')}
                className={`text-sm transition-all duration-300 border-2 px-4 py-2 rounded-full ${isInSyllabus
                  ? 'border-[#00C4D4]/40 text-slate-200 hover:text-[#00C4D4] hover:border-[#00C4D4]'
                  : 'border-white/40 text-white hover:text-blue-400'
                  }`}
              >
                FAQs
              </button>
              <button
                onClick={() => scrollToSection('schedule')}
                className={`text-sm transition-all duration-300 border-2 px-4 py-2 rounded-full ${isInSyllabus
                  ? 'border-[#00C4D4]/40 text-slate-200 hover:text-[#00C4D4] hover:border-[#00C4D4]'
                  : 'border-white/40 text-white hover:text-blue-400'
                  }`}
              >
                Schedule & Pricing
              </button>
              <button
                onClick={() => scrollToSection('register')}
                className={`text-sm transition-all duration-300 border-2 px-4 py-2 rounded-full ${isInSyllabus
                  ? 'border-[#00C4D4]/40 text-slate-200 hover:text-[#00C4D4] hover:border-[#00C4D4]'
                  : 'border-white/40 text-white hover:text-blue-400'
                  }`}
              >
                Register
              </button>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="w-full py-16 sm:pt-24 sm:pb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-serif text-xl md:text-3xl font-extralight leading-relaxed text-slate-200 text-center mx-auto block w-full px-[100px]"
          >
            To defeat a hacker, you must understand <br className="hidden md:block" />
            how they operate. Plunge into advanced <br className="hidden md:block" />
            offensive tactics, and transform proactive <br className="hidden md:block" />
            threat intelligence into your ultimate shield.
          </motion.h1>
        </div>

        {/* Testimonial Section with Animated Wave Background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-visible rounded-2xl bg-[#0a2a43] p-10 md:p-16 border border-[#00C4D4]/20 shadow-2xl"
          >
            {/* Animated Wave Background - Extended outside the box */}
            <motion.div
              style={{
                scale: waveScale,
                opacity: waveOpacity,
                rotate: waveRotate,
              }}
              className="absolute -right-20 -bottom-40 w-[600px] h-[600px] pointer-events-none z-0"
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <radialGradient id="waveGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <motion.circle
                  style={{ scale: circle1Scale }}
                  cx="100"
                  cy="100"
                  r="40"
                  fill="none"
                  stroke="url(#waveGradient)"
                  strokeWidth="8"
                />
                <motion.circle
                  style={{ scale: circle2Scale }}
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="url(#waveGradient)"
                  strokeWidth="12"
                />
                <motion.circle
                  style={{ scale: circle3Scale }}
                  cx="100"
                  cy="100"
                  r="100"
                  fill="none"
                  stroke="url(#waveGradient)"
                  strokeWidth="16"
                />

                <circle
                  cx="100"
                  cy="100"
                  r="40"
                  fill="none"
                  stroke="#2dd4bf"
                  strokeOpacity="0.3"
                  strokeWidth="0.5"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#2dd4bf"
                  strokeOpacity="0.3"
                  strokeWidth="0.5"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="100"
                  fill="none"
                  stroke="#2dd4bf"
                  strokeOpacity="0.3"
                  strokeWidth="0.5"
                />
              </svg>
            </motion.div>

            {/* Additional decorative circles on left */}
            <motion.div
              className="absolute -left-32 top-10 w-[400px] h-[400px] pointer-events-none z-0"
              animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <radialGradient id="waveGradientLeft" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle
                  cx="100"
                  cy="100"
                  r="60"
                  fill="none"
                  stroke="url(#waveGradientLeft)"
                  strokeWidth="10"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="url(#waveGradientLeft)"
                  strokeWidth="6"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="40"
                  fill="none"
                  stroke="#3b82f6"
                  strokeOpacity="0.2"
                  strokeWidth="0.5"
                />
              </svg>
            </motion.div>

            <div className="relative z-10">
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-slate-200 italic">
                "The hands-on rigor of the Ebanex Ethical Hacking labs prepared my team to think like real attackers. We transitioned from simply running automated vulnerability scanners to actively hunting hidden threats—securing our corporate infrastructure from advanced persistent threats."
              </p>

              <div className="mt-8">
                <h4 className="font-bold text-lg text-white">David Osei</h4>
                <p className="text-[#00C4D4] font-medium italic">
                  Head of Information Security, Pan-African Financial Group
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Program Overview */}
        <div id="overview" className="w-full px-[100px] py-0 sm:py-4">
          <motion.div {...fadeInUp}>
            <h2 className="text-[clamp(1.25rem,4vw,2.5rem)] font-light font-heading mb-12">
              Program Overview
            </h2>

            {/* Overview Content */}
            <div className="w-full">
              <p className="text-slate-300 text-lg font-light leading-relaxed text-justify">
                Our Ethical Hacking and Threat Intelligence training is an immersive, highly technical course designed to build expert-level penetration testers and security analysts. As digital transformation accelerates, the sophistication of global cyber criminal networks grows concurrently. Passive defense is no longer sufficient. Organizations require professionals capable of proactively identifying network flaws, exploiting them in controlled lab scenarios, and delivering actionable mitigation strategies. This program drops you into complex, real-world topologies where you will learn to scan, enumerate, exploit, and pivot just like an adversarial nation-state or ransomware operation.
              </p>

              {/* Hidden paragraphs */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: isOverviewExpanded ? 1 : 0,
                  height: isOverviewExpanded ? 'auto' : 0,
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="overflow-hidden"
              >
                <p className="text-slate-300 text-lg font-light leading-relaxed text-justify mt-8">
                  Integrated closely with Threat Intelligence frameworks, this program teaches you not just "how" to hack, but "why" attackers behave the way they do. Students will learn how to harvest Open Source Intelligence (OSINT), interact with threat hunting frameworks (like MITRE ATT&CK), and analyze Indicators of Compromise (IoCs). You will script custom exploits, break into Active Directory environments, perform wireless auditing, and understand the nuances of bypassing modern Intrusion Detection Systems (IDS) and Next-Generation Firewalls (NGFW).
                </p>
                <p className="text-slate-300 text-lg font-light leading-relaxed text-justify mt-8">
                  Ebanex International aligns this intensive cyber curriculum with top global security standards, ensuring that content covers the requirements for certifications such as the Certified Ethical Hacker (CEH) and CompTIA PenTest+. Led by veteran security practitioners, graduates of this cohort emerge combat-ready, capable of transforming vulnerability assessments into comprehensive risk management victories for governments, financial institutions, and critical infrastructure operators.
                </p>
              </motion.div>

              {/* Read More Button */}
              <motion.button
                onClick={() => setIsOverviewExpanded(!isOverviewExpanded)}
                className="mt-8 text-[#00C4D4] hover:text-blue-300 font-medium flex items-center gap-2 transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {isOverviewExpanded ? 'Show Less' : 'Read More'}
                <motion.span
                  animate={{ rotate: isOverviewExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.button>
            </div>
          </motion.div>

          {/* What You'll Learn & Measurable Impact - Combined Section */}
          <div
            ref={syllabusRef}
            className="relative mt-20"
            style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0f2744 50%, #0a1628 100%)' }}
          >
            {/* Wave Background */}
            <motion.div
              style={{ scale: waveScale, opacity: waveOpacity, rotate: waveRotate }}
              className="absolute -right-40 -bottom-40 w-[600px] h-[600px] pointer-events-none"
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <radialGradient id="waveGradientCombined" cx="50%" cy="50%" r="50%">
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
                  stroke="url(#waveGradientCombined)"
                  strokeWidth="8"
                />
                <motion.circle
                  style={{ scale: circle2Scale }}
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="url(#waveGradientCombined)"
                  strokeWidth="12"
                />
                <motion.circle
                  style={{ scale: circle3Scale }}
                  cx="100"
                  cy="100"
                  r="100"
                  fill="none"
                  stroke="url(#waveGradientCombined)"
                  strokeWidth="16"
                />
                <circle cx="100" cy="100" r="40" fill="none" stroke="#00C4D4" strokeOpacity="0.2" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="70" fill="none" stroke="#00C4D4" strokeOpacity="0.2" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="100" fill="none" stroke="#00C4D4" strokeOpacity="0.2" strokeWidth="0.5" />
              </svg>
            </motion.div>

            <motion.div
              className="absolute -left-20 top-20 w-[400px] h-[400px] pointer-events-none"
              animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <radialGradient id="waveGradientCombined2" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle
                  cx="100"
                  cy="100"
                  r="60"
                  fill="none"
                  stroke="url(#waveGradientCombined2)"
                  strokeWidth="10"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="url(#waveGradientCombined2)"
                  strokeWidth="6"
                />
              </svg>
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-[100px] py-20">
              {/* What You'll Learn Content */}
              <motion.div
                id="syllabus"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-20"
              >
                <h2 className="text-[clamp(1.25rem,4vw,2.5rem)] font-light font-heading mb-12">
                  What You'll Learn
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                  {/* Technical Skills */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-3">
                      <span className="w-2 h-8 bg-[#00C4D4] rounded-full"></span>
                      Technical Skills
                    </h3>
                    <ul className="space-y-4">
                      {[
                        'Execute complex penetration tests across network, web, and cloud environments',
                        'Write custom exploit scripts and automate vulnerability discovery',
                        'Perform advanced active directory exploitation and privilege escalation',
                        'Analyze cyber threat intelligence feeds and attribute attacks to specific threat actors',
                        'Conduct evasion techniques against modern EDR and firewall solutions',
                        'Reverse engineer basic malware samples and extract indicators of compromise',
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-3 text-slate-300 font-light leading-relaxed"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0 flex-shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Business Benefits */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-3">
                      <span className="w-2 h-8 bg-teal-500 rounded-full"></span>
                      Business Benefits
                    </h3>
                    <ul className="space-y-4">
                      {[
                        'Proactively identify critical vulnerabilities before they are exploited by real attackers',
                        'Demonstrate rigorous security testing compliance for PCI-DSS, SOC2, and ISO 27001',
                        'Reduce external penetration testing costs by building internal Red Team capabilities',
                        'Minimize the blast radius of potential breaches through architectural hardening',
                        'Improve incident response metrics through intelligence-driven defense strategies',
                        'Protect intellectual property and maintain customer trust in your digital platforms',
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-3 text-slate-300 font-light leading-relaxed"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="w-5 h-5 text-teal-400 mt-0.5 shrink-0 flex-shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Measurable Impact Section */}
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Left Side - Static/Sticky */}
                <div className="lg:sticky lg:top-[120px] lg:h-fit">
                  <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-light font-heading mb-8 text-white">
                    Measurable Impact
                  </h2>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      { metric: 80, suffix: '%', label: 'Faster Remediation' },
                      { metric: 100, suffix: '%', label: 'Lab Certified' },
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className="text-center p-4 border border-white/10 bg-transparent/30"
                      >
                        <div className="text-4xl font-light text-[#00C4D4] mb-1">
                          <Counter target={stat.metric} suffix={stat.suffix} />
                        </div>
                        <div className="text-sm text-slate-300 font-light">{stat.label}</div>
                        <p className="text-xs text-slate-500 mt-2">
                          {index === 0 ? 'Identify flaws before exploitation' : 'Tested in live cyber ranges'}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-[#00C4D4] text-[#0a1628] px-6 py-3 rounded-full font-medium hover:bg-[#00b0c0] transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                      Request Corporate Training
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="bg-transparent text-white border border-white/30 px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors flex items-center justify-center whitespace-nowrap">
                      Schedule & Pricing
                    </button>
                  </div>
                </div>

                {/* Right Side - Scrollable */}
                <div className="space-y-12 pb-32">
                  <div>
                    <h3 className="text-2xl font-light text-white mb-8 pb-3 border-b border-white/10">
                      Curriculum Overview
                    </h3>
                    <div className="space-y-8 mb-12">
                      {modules.map((module, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-700 last:before:hidden"
                        >
                          <div className="absolute left-[-4px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#2dd4bf] ring-4 ring-slate-950"></div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <h4 className="text-xl font-medium text-white">{module.title}</h4>
                          </div>
                          <p className="text-slate-400 text-sm leading-relaxed mb-3">
                            {module.topics.join(' • ')}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    <h3 className="text-xl font-light text-white mb-4 pb-3 border-b border-white/10">
                      Offensive Frameworks Learning Pathway
                    </h3>
                    <p className="text-sm text-slate-400 mb-6">
                      Master industry-standard adversarial frameworks and methodologies used by elite red teams globally
                    </p>
                    <ul className="space-y-4">
                      {[
                        {
                          title: 'Offensive Security Fundamentals',
                          desc: 'Master the mindset and techniques used by malicious hackers to exploit vulnerabilities before they do',
                        },
                        {
                          title: 'Active Defense & Threat Hunting',
                          desc: 'Proactively identify invisible threats in your network environments using advanced intelligence',
                        },
                        {
                          title: 'Vulnerability Exploitation',
                          desc: 'Learn the practical execution of penetration testing methodologies from reconnaissance to post-exploitation',
                        },
                        {
                          title: 'Open Source Intelligence (OSINT)',
                          desc: 'Gather and analyze actionable threat data from public sources and the dark web to secure your perimeter',
                        },
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-4 p-4 bg-transparent/30 border border-white/5"
                        >
                          <span className="w-2 h-2 rounded-full bg-teal-400 mt-2 flex-shrink-0"></span>
                          <div>
                            <span className="text-white font-medium text-sm block">
                              {item.title}
                            </span>
                            <span className="text-slate-400 text-sm font-light">{item.desc}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-4 pb-3 border-b border-white/10">
                      How You'll Be Evaluated
                    </h3>
                    <p className="text-sm text-slate-400 mb-6">
                      Our comprehensive assessment framework ensures you master every competency
                      through four key phases
                    </p>
                    <ul className="space-y-4">
                      {[
                        {
                          phase: 'Phase 1: Pre-Assessment',
                          desc: 'Baseline knowledge evaluation, security posture questionnaire, skill gap analysis',
                        },
                        {
                          phase: 'Phase 2: Module Assessments',
                          desc: 'End-of-module quizzes, practical lab exercises, scenario-based evaluations',
                        },
                        {
                          phase: 'Phase 3: Final Examination',
                          desc: 'Comprehensive written exam, hands-on simulation test, case study analysis',
                        },
                        {
                          phase: 'Phase 4: Continuous Evaluation',
                          desc: 'Phishing simulation results, behavior tracking metrics, peer assessments',
                        },
                      ].map((phase, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-4 p-4 bg-transparent/30 border border-white/5"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#00C4D4] mt-2 flex-shrink-0"></span>
                          <div>
                            <span className="text-white font-light block mb-1">{phase.phase}</span>
                            <span className="text-slate-400 text-sm font-light">{phase.desc}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meet Your Instructor Section */}
        <div className="w-full py-16 px-[100px] bg-transparent">
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
              {/* Instructor Photo */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full md:w-72 flex-shrink-0"
              >
                <div className="relative">
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-slate-800">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=533&fit=crop&crop=faces"
                      alt="Instructor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-[#00C4D4] text-[#0a1628] px-4 py-2 rounded-full text-sm font-bold">
                    {['CISSP', 'CISM', 'CEH', 'CISA', 'CRMA', 'ISO 27001 Lead Auditor'][0]}, {['CISSP', 'CISM', 'CEH', 'CISA', 'CRMA', 'ISO 27001 Lead Auditor'][1]}
                  </div>
                </div>
              </motion.div>

              {/* Instructor Details */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <h3 className="text-2xl font-bold text-white mb-2">Sarah Chen</h3>
                <p className="text-[#00C4D4] font-medium mb-4">
                  Lead Red Team Operator & Threat Intelligence Analyst
                </p>
                <p className="text-slate-300 font-light leading-relaxed mb-6">
                  Sarah brings over a decade of offensive security experience from both the financial sector and defense contractor environments. She has discovered multiple zero-day vulnerabilities in enterprise software and frequently presents at major security conferences like DEF CON and Black Hat. Her training emphasizes the hacker mindset over automated tools.
                </p>

                {/* Certifications */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'OSCP', 'OSCE', 'CTI', 'CISSP', 'GPEN'
                    ].map(
                      (cert, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-800 border border-white/10 rounded-full text-sm text-slate-300"
                        >
                          {cert}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                {/* Experience Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { number: '15+', label: 'Years Experience' },
                    { number: '5000+', label: 'Professionals Trained' },
                    { number: '200+', label: 'Organizations Served' },
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-3 bg-slate-800/50 rounded-lg">
                      <div className="text-xl font-bold text-[#00C4D4]">{stat.number}</div>
                      <div className="text-xs text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div >

        {/* FAQ Section */}
        < motion.div
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
            {[
              {
                question: 'Do I need programming experience for this course?',
                answer: 'Yes, basic proficiency in Python and bash scripting is highly recommended. While we cover the fundamentals of exploit modification, you will need to understand how to read and execute custom scripts during the practical labs.'
              },
              {
                question: 'Are the lab environments realistic?',
                answer: 'We utilize a fully isolated, ephemeral cyber range that accurately mimics modern enterprise networks, complete with Active Directory domains, simulated user traffic, and multi-tier web applications.'
              },
              {
                question: 'Is this course focused on network or web application hacking?',
                answer: 'The program provides a comprehensive methodology covering both. The first half focuses on infrastructure and network penetration, while the second half dives deeply into web application vulnerabilities (OWASP Top 10) and API exploitation.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <motion.div
                  className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${openFaq === index
                    ? 'bg-gradient-to-r from-[#0a2a43]/40 to-[#0f2744]/30 border-[#00C4D4]/30'
                    : 'bg-[#0a2a43]/50 border border-white/10 hover:border-white/20'
                    }`}
                >
                  {/* Background glow effect when open */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: openFaq === index ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-r from-[#00C4D4]/5 to-[#00C4D4]/5"
                  />

                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="relative w-full flex items-center justify-between p-6 text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <motion.span
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${openFaq === index
                          ? 'bg-[#00C4D4] text-[#0a1628]'
                          : 'bg-white/10 text-slate-400 group-hover:bg-white/20'
                          }`}
                        animate={{ scale: openFaq === index ? 1 : 1 }}
                      >
                        {index + 1}
                      </motion.span>
                      <span
                        className={`font-medium text-lg transition-colors ${openFaq === index ? 'text-white' : 'text-slate-300 group-hover:text-white'
                          }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${openFaq === index
                        ? 'bg-[#00C4D4] text-[#0a1628]'
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
        </motion.div >

        {/* Call to Action */}
        < motion.div
          id="register"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative min-h-[500px] flex items-center">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/90 to-[#0a2a43]/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-[100px] py-20 w-full">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    Ready to Build Offensive Security Capabilities?
                  </h2>
                  <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                    Train your team to think and act like advanced persistent threats. Partner with Ebanex International to develop a world-class internal Red Team that proactively defends your enterprise.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <motion.button
                      className="inline-flex items-center gap-3 px-8 py-4 bg-[#00C4D4] hover:bg-[#00b0c0] text-[#0a1628] font-bold rounded-full transition-colors"
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

            {/* Decorative elements */}
            <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#00C4D4]/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 right-20 w-40 h-40 bg-[#00C4D4]/20 rounded-full blur-3xl pointer-events-none" />
          </div>
        </motion.div >
      </div>
    </>
  );
};

export default EthicalHackingThreatIntelligence;