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

const CybersecurityAwarenessPrograms: React.FC = () => {
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
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: 'Comprehensive Security Fundamentals',
      description:
        'Master the core principles of cybersecurity including confidentiality, integrity, and availability (CIA triad).',
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'Human-Centric Security',
      description:
        'Learn why humans are often the weakest link and how to build a security-aware culture.',
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-400" />,
      title: 'Threat Recognition',
      description:
        'Identify common cyber threats including phishing, malware, social engineering, and insider threats.',
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-400" />,
      title: 'Best Practices Implementation',
      description:
        'Apply industry-standard security practices for password management, data handling, and incident reporting.',
    },
  ];

  const learningObjectives = [
    'Understand fundamental cybersecurity concepts and terminology',
    'Recognize and respond to common cyber threats',
    'Implement secure practices in daily work activities',
    'Contribute to organizational security culture',
    'Report security incidents appropriately',
    'Protect sensitive information and systems',
  ];

  const modules = [
    {
      title: 'Cybersecurity Foundations',
      duration: '2 hours',
      topics: ['CIA Triad', 'Security Principles', 'Risk Concepts', 'Compliance Basics'],
    },
    {
      title: 'Common Threats & Attacks',
      duration: '3 hours',
      topics: [
        'Phishing & Social Engineering',
        'Malware Types',
        'Network Attacks',
        'Physical Security',
      ],
    },
    {
      title: 'Secure Practices',
      duration: '2 hours',
      topics: ['Password Security', 'Data Handling', 'Remote Work Security', 'Device Security'],
    },
    {
      title: 'Incident Response',
      duration: '2 hours',
      topics: [
        'Incident Recognition',
        'Reporting Procedures',
        'Basic Response Actions',
        'Prevention Strategies',
      ],
    },
  ];

  return (
    <>
      <div>
        <Helmet>
          <title>Cybersecurity Awareness Programs | EBANEX International</title>
          <meta
            name="description"
            content="Comprehensive cybersecurity awareness training programs designed to build security-conscious organizations. Learn threat recognition, secure practices, and incident response."
          />
          <meta
            name="keywords"
            content="cybersecurity awareness, security training, threat recognition, secure practices, incident response, cybersecurity education"
          />
          <meta
            property="og:title"
            content="Cybersecurity Awareness Programs | EBANEX International"
          />
          <meta
            property="og:description"
            content="Build a security-aware culture with our comprehensive cybersecurity awareness training programs."
          />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ebanex.com/training/cybersecurity-awareness" />
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
                    <span>Awareness & Digital Resilience</span>
                  </div>
                  <span className="bg-[#00C4D4] text-black text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-tighter">
                    Featured Program
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-6"
                >
                  <span className="bg-[#00C4D4] text-black text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-tight">
                    New 2026 Edition
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
                  Cybersecurity Awareness Program
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-lg text-slate-300 mb-8 max-w-2xl"
                >
                  Build a security-aware workforce equipped to recognize threats, protect sensitive
                  data, and respond effectively to incidents.
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
                      <span>6 Days (Instructor-Led)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-green-400" />
                      <span>38 Hours (Self-Paced)</span>
                    </div>
                  </div>

                  {/* Vertical Separator */}
                  <div className="w-px bg-slate-700 h-12"></div>

                  {/* Right Column - Designer Info */}
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
                  className="flex flex-wrap gap-4 py-8"
                >
                  <button className="bg-[#00C4D4] text-black px-6 py-2 rounded-full font-bold hover:bg-[#00b0c0] transition-all flex items-center gap-4 group">
                    View Training Programs{' '}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-4 group">
                    Request Corporate Training{' '}
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
                    src="https://picsum.photos/seed/sans-hero/800/800"
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
                <div className="text-lg font-light text-slate-300 mb-1">CISSP</div>
                <div className="text-sm font-light text-slate-500">
                  Certified Information Systems Security Professional - Industry-recognized
                  certification for security leadership and management
                </div>
                <button className="mt-2 text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1">
                  Read about certification
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="text-left">
                <FaClock className="w-6 h-6 text-green-400 mb-2" />
                <div className="text-lg font-light text-slate-300 mb-1">32 CPE</div>
                <div className="text-sm font-light text-slate-500">
                  Continuing Professional Education credits to maintain your certification status
                  and stay current in the field
                </div>
              </div>
              <div className="text-left">
                <FaChalkboardTeacher className="w-6 h-6 text-purple-400 mb-2" />
                <div className="text-lg font-light text-slate-300 mb-1">Instructor-Led</div>
                <div className="text-sm font-light text-slate-500">
                  Virtual and self-paced options available to suit your schedule and learning
                  preferences
                </div>
              </div>
              <div className="text-left">
                <FaLevelUpAlt className="w-6 h-6 text-orange-400 mb-2" />
                <div className="text-lg font-light text-slate-300 mb-1">Foundation</div>
                <div className="text-sm font-light text-slate-500">
                  Intermediate skill level - suitable for professionals with IT or cybersecurity
                  background
                </div>
              </div>
              <div className="text-left">
                <FaLaptopCode className="w-6 h-6 text-cyan-400 mb-2" />
                <div className="text-lg font-light text-slate-300 mb-1">Hands-On Labs</div>
                <div className="text-sm font-light text-slate-500">
                  Practical exercises and simulation exercises to apply your knowledge in real-world
                  scenarios
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
          className={`sticky top-0 z-50 backdrop-blur-md pt-12 py-6 transition-all duration-500 ${
            isInSyllabus
              ? 'bg-gradient-to-r from-[#0a1628] via-[#0f2744] to-[#0a1628] border-b border-blue-500/20'
              : 'bg-slate-950/95'
          }`}
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
            {/* Left side - Jump to label */}
            <div
              className={`text-sm font-semibold pl-0 transition-colors duration-300 ${
                isInSyllabus ? 'text-[#00C4D4]' : 'text-white'
              }`}
            >
              Jump to:
            </div>

            {/* Right side - Navigation links */}
            <div className="flex items-center gap-6 mr-[3%]">
              <button
                onClick={() => scrollToSection('overview')}
                className={`text-sm transition-all duration-300 border-2 px-4 py-2 rounded-full ${
                  isInSyllabus
                    ? 'border-[#00C4D4]/40 text-slate-200 hover:text-[#00C4D4] hover:border-[#00C4D4]'
                    : 'border-white/40 text-white hover:text-blue-400'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => scrollToSection('syllabus')}
                className={`text-sm transition-all duration-300 border-2 px-4 py-2 rounded-full ${
                  isInSyllabus
                    ? 'border-[#00C4D4]/40 text-slate-200 hover:text-[#00C4D4] hover:border-[#00C4D4]'
                    : 'border-white/40 text-white hover:text-blue-400'
                }`}
              >
                Syllabus
              </button>
              <button
                onClick={() => scrollToSection('faqs')}
                className={`text-sm transition-all duration-300 border-2 px-4 py-2 rounded-full ${
                  isInSyllabus
                    ? 'border-[#00C4D4]/40 text-slate-200 hover:text-[#00C4D4] hover:border-[#00C4D4]'
                    : 'border-white/40 text-white hover:text-blue-400'
                }`}
              >
                FAQs
              </button>
              <button
                onClick={() => scrollToSection('schedule')}
                className={`text-sm transition-all duration-300 border-2 px-4 py-2 rounded-full ${
                  isInSyllabus
                    ? 'border-[#00C4D4]/40 text-slate-200 hover:text-[#00C4D4] hover:border-[#00C4D4]'
                    : 'border-white/40 text-white hover:text-blue-400'
                }`}
              >
                Schedule & Pricing
              </button>
              <button
                onClick={() => scrollToSection('register')}
                className={`text-sm transition-all duration-300 border-2 px-4 py-2 rounded-full ${
                  isInSyllabus
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
            Build a security-aware workforce that <br className="hidden md:block" />
            recognizes threats, protects sensitive data, <br className="hidden md:block" />
            and responds effectively to incidents. In today's <br className="hidden md:block" />
            digital landscape, your people are your first <br className="hidden md:block" />
            line of defense.
          </motion.h1>
        </div>

        {/* Testimonial Section with Animated Wave Background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-visible rounded-2xl bg-[#0a2a43] p-10 md:p-16 border border-white/10 shadow-2xl"
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
                    <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.4" />
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

                {/* Thin sharp lines for detail */}
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

            {/* Additional decorative circles on left - extended outside */}
            <motion.div
              className="absolute -left-32 top-10 w-[400px] h-[400px] pointer-events-none z-0"
              animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <radialGradient id="waveGradientLeft" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
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
                "The cybersecurity awareness training from Ebanex International transformed how our
                entire organization approaches security. What used to be ignored as 'IT stuff' is
                now part of our daily conversations. The phishing simulations alone reduced our
                click-through rate by 85% within three months."
              </p>

              <div className="mt-8">
                <h4 className="font-bold text-lg text-white">Sarah Mitchell</h4>
                <p className="text-teal-400 font-medium italic">
                  Chief Operating Officer, Regional Healthcare Network
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

            {/* Overview Content - Collapsible */}
            <div className="w-full">
              <p className="text-slate-300 text-lg font-light leading-relaxed text-justify">
                Our Cybersecurity Awareness Program is designed to transform your employees from
                potential security vulnerabilities into your organization's first line of defense.
                In today's increasingly connected world, cyber threats are evolving faster than
                ever—phishing attacks, ransomware, social engineering, and insider threats target
                organizations of all sizes. This comprehensive training equips your workforce with
                the knowledge and skills to identify, prevent, and respond to these threats
                effectively, protecting your organization's critical assets and reputation.
              </p>

              {/* Hidden paragraphs - visible on expand */}
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
                  Through interactive modules, real-world case studies, and hands-on simulations,
                  participants gain practical experience recognizing suspicious emails, secure
                  password practices, data protection protocols, and incident reporting procedures.
                  Our curriculum is continuously updated to address emerging threats and compliance
                  requirements, including GDPR, ISO 27001, and industry-specific regulations.
                  Whether your team works in finance, healthcare, manufacturing, or government, our
                  program can be customized to address the unique security challenges your industry
                  faces.
                </p>
                <p className="text-slate-300 text-lg font-light leading-relaxed text-justify mt-8">
                  By investing in employee cybersecurity awareness, you significantly reduce the
                  risk of costly data breaches, regulatory penalties, and operational disruptions.
                  Organizations with trained employees report up to 70% fewer security incidents.
                  Upon completion, participants receive a recognized certification that demonstrates
                  their commitment to cybersecurity best practices, enhancing both individual
                  professional development and your organization's overall security posture.
                </p>
              </motion.div>

              {/* Read More Button */}
              <motion.button
                onClick={() => setIsOverviewExpanded(!isOverviewExpanded)}
                className="mt-8 text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 transition-colors"
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
            className="relative"
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
                <circle
                  cx="100"
                  cy="100"
                  r="40"
                  fill="none"
                  stroke="#00C4D4"
                  strokeOpacity="0.2"
                  strokeWidth="0.5"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#00C4D4"
                  strokeOpacity="0.2"
                  strokeWidth="0.5"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="100"
                  fill="none"
                  stroke="#00C4D4"
                  strokeOpacity="0.2"
                  strokeWidth="0.5"
                />
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
                      <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                      Technical Skills
                    </h3>
                    <ul className="space-y-4">
                      {[
                        'Recognize and identify phishing attempts, suspicious links, and malicious attachments',
                        'Implement strong password policies and multi-factor authentication best practices',
                        'Apply data protection protocols and secure file handling procedures',
                        'Understand cloud security fundamentals and identify shadow IT risks',
                        'Respond effectively to security incidents to limit damage and downtime',
                        'Conduct basic vulnerability assessments and risk evaluations',
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
                        'Reduce security incidents by up to 70% through informed employee behavior',
                        'Protect sensitive customer data and maintain regulatory compliance',
                        'Strengthen organizational security culture and threat awareness',
                        'Minimize financial losses from data breaches and cyber incidents',
                        'Enhance customer trust and brand reputation through demonstrated security commitment',
                        'Meet industry compliance requirements including GDPR, ISO 27001, and sector-specific standards',
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
                      { metric: 70, suffix: '%', label: 'Reduction in Security Incidents' },
                      { metric: 85, suffix: '%', label: 'Decrease in Phishing Clicks' },
                      { metric: 90, suffix: '%', label: 'Knowledge Retention Rate' },
                      { metric: 3, suffix: 'x', label: 'ROI Within First Year' },
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className="text-center p-4 border border-white/10 bg-slate-900/30"
                      >
                        <div className="text-4xl font-light text-[#00C4D4] mb-1">
                          <Counter target={stat.metric} suffix={stat.suffix} />
                        </div>
                        <div className="text-sm text-slate-300 font-light">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-[#00C4D4] text-black px-6 py-3 rounded-full font-medium hover:bg-[#00b0c0] transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
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
                          className="flex items-start gap-4 p-4 bg-slate-900/30 border border-white/5"
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
                  <div>
                    <h3 className="text-xl font-light text-white mb-4 pb-3 border-b border-white/10">
                      Tailored for Your Industry
                    </h3>
                    <p className="text-sm text-slate-400 mb-6">
                      Our curriculum is customized to address the unique security challenges and
                      compliance requirements of your sector
                    </p>
                    <ul className="space-y-4">
                      {[
                        {
                          title: 'Financial Services',
                          desc: 'PCI-DSS compliance, fraud prevention, customer data protection',
                        },
                        {
                          title: 'Healthcare',
                          desc: 'HIPAA compliance, patient data security, medical device protection',
                        },
                        {
                          title: 'Government & Public Sector',
                          desc: 'National security compliance, citizen data protection, critical infrastructure',
                        },
                        {
                          title: 'Manufacturing & Industrial',
                          desc: 'OT security, intellectual property protection, supply chain security',
                        },
                        {
                          title: 'Technology & SaaS',
                          desc: 'Cloud security, API security, customer trust',
                        },
                        {
                          title: 'Education',
                          desc: 'Student data privacy, remote learning security, research protection',
                        },
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-4 p-4 bg-slate-900/30 border border-white/5"
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
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="absolute -left-20 top-20 w-[400px] h-[400px] pointer-events-none"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <radialGradient id="waveGradientSticky2" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle
                cx="100"
                cy="100"
                r="60"
                fill="none"
                stroke="url(#waveGradientSticky2)"
                strokeWidth="10"
              />
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="url(#waveGradientSticky2)"
                strokeWidth="6"
              />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Meet Your Instructor Section */}
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
                <div className="absolute -bottom-4 -right-4 bg-[#00C4D4] text-black px-4 py-2 rounded-full text-sm font-bold">
                  CISSP, CISM
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
              <h3 className="text-2xl font-bold text-white mb-2">Dr. James Morrison</h3>
              <p className="text-[#00C4D4] font-medium mb-4">
                Senior Cybersecurity Consultant & Lead Instructor
              </p>
              <p className="text-slate-300 font-light leading-relaxed mb-6">
                With over 15 years of experience in cybersecurity, Dr. Morrison has helped Fortune
                500 companies and government agencies strengthen their security posture. He holds
                multiple industry-recognized certifications and has trained thousands of
                professionals worldwide. His practical approach to cybersecurity education ensures
                participants gain real-world skills they can immediately apply in their
                organizations.
              </p>

              {/* Certifications */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Certifications</h4>
                <div className="flex flex-wrap gap-2">
                  {['CISSP', 'CISM', 'CEH', 'CISA', 'CRMA', 'ISO 27001 Lead Auditor'].map(
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
      </div>

      {/* FAQ Section */}
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
          {[
            {
              question: 'Who should take the Cybersecurity Awareness Training?',
              answer:
                'This program is designed for all employees across an organization, regardless of their technical background. From executives to frontline staff, anyone who uses computers, emails, or handles sensitive data will benefit from this training. It is particularly valuable for organizations looking to build a strong security culture.',
            },
            {
              question: 'How long does the training program take to complete?',
              answer:
                'The program duration varies based on the delivery method chosen. Our instructor-led classroom training runs for 6 days, while our self-paced online option consists of approximately 38 hours of content. We also offer accelerated bootcamp options for organizations with time constraints.',
            },
            {
              question: 'Do participants receive a certification upon completion?',
              answer:
                'Yes, participants who successfully complete the Cybersecurity Awareness Program receive a recognized certification from Ebanex International. This certification demonstrates commitment to cybersecurity best practices and can be applied toward continuing professional education (CPE) credits for other certifications.',
            },
            {
              question: 'Can the training be customized for our specific industry?',
              answer:
                'Absolutely. We understand that different industries face unique security challenges. Our team can customize the curriculum to address sector-specific threats, compliance requirements (such as GDPR, HIPAA, or PCI-DSS), and real-world scenarios relevant to your organization.',
            },
            {
              question:
                'What is the minimum number of participants required for corporate training?',
              answer:
                'We offer flexible group pricing for organizations. Corporate in-house training is available for groups of 10 or more participants. For smaller organizations or individual enrollment, our virtual live training sessions allow you to join scheduled cohorts.',
            },
            {
              question: 'How do you measure training effectiveness?',
              answer:
                'We provide comprehensive reporting that includes pre and post-training assessments, phishing simulation results, knowledge retention scores, and behavioral metrics. Our analytics dashboard helps organizations track security awareness progress over time and identify areas requiring additional training.',
            },
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
                className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
                  openFaq === index
                    ? 'bg-gradient-to-r from-blue-900/40 to-teal-900/30 border-blue-500/30'
                    : 'bg-slate-900/50 border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Background glow effect when open */}
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
                      animate={{ scale: openFaq === index ? 1 : 1 }}
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

      {/* Call to Action */}
      <motion.div
        id="register"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="relative min-h-[500px] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80"
              alt="Team training session"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70" />
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

          {/* Decorative elements */}
          <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        </div>
      </motion.div>
    </>
  );
};
export default CybersecurityAwarenessPrograms;
