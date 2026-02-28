import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
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

const CybersecurityAwarenessPrograms: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isOverviewExpanded, setIsOverviewExpanded] = useState(false);

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'outline', label: 'Course Outline' },
    { id: 'prerequisites', label: 'Prerequisites' },
    { id: 'objectives', label: 'Objectives' },
    { id: 'pricing', label: 'Pricing & Dates' },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
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
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-300">
                    <span>Cybersecurity Programs</span>
                    <span className="text-slate-500">/</span>
                    <span>Awareness & Digital Resilience</span>
                  </div>
                  <span className="bg-[#00C4D4] text-black text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-tighter">
                    Core Offering
                  </span>
                </div>

                <div className="mb-6">
                  <span className="bg-[#00C4D4] text-black text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-tight">
                    Major Updates
                  </span>
                </div>

                <div className="flex items-center gap-2 text-slate-400 text-sm font-medium mb-4">
                  <span className="font-bold text-white">Awareness Program</span>
                  <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
                  <span>Enterprise Security Culture</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading leading-[1.1] mb-8 max-w-3xl">
                  Cybersecurity Awareness & Digital Resilience Programs
                </h1>

                <div className="grid grid-cols-2 gap-6 md:gap-8 mb-12 items-center">
                  {/* Left Column - Duration Info */}
                  <div className="flex flex-col gap-4 text-sm font-medium text-slate-300">
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
                  <div className="hidden md:block w-px bg-slate-700 h-12"></div>

                  {/* Right Column - Designer Info */}
                  <div className="flex flex-col items-center justify-center gap-4 text-sm font-medium text-white">
                    <div className="leading-tight text-center">
                      <p className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">
                        Designed and delivered by
                      </p>
                      <p className="text-sm md:text-base font-semibold text-white">
                        EBANEX International Faculty Team
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#00C4D4] text-black px-6 py-2 rounded-full font-bold hover:bg-[#00b0c0] transition-all flex items-center gap-4 group">
                    View Training Options{' '}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-4 group">
                    View Course Preview{' '}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Video Preview Image */}
              <div className="w-full lg:w-[500px] relative group cursor-pointer">
                <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-sm shadow-2xl">
                  <img
                    src="https://picsum.photos/seed/sans-hero/800/800"
                    alt="Course Preview"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay with red bar and play button */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Logo in top right */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#00C4D4] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-black border-b-[10px] border-b-transparent ml-1"></div>
                    </div>
                  </div>

                  {/* Red bar at bottom */}
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#FF0000]"></div>
                </div>
              </div>
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
        <div className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md pt-12 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
            {/* Left side - Jump to label */}
            <div className="text-sm font-semibold text-white pl-0">Jump to:</div>

            {/* Right side - Navigation links */}
            <div className="flex items-center gap-6 mr-[3%]">
              <a
                href="#overview"
                className="text-sm text-white hover:text-blue-400 transition-colors border-2 border-white/40 px-4 py-2 rounded-full"
              >
                Overview
              </a>
              <a
                href="#syllabus"
                className="text-sm text-white hover:text-blue-400 transition-colors border-2 border-white/40 px-4 py-2 rounded-full"
              >
                Syllabus
              </a>
              <a
                href="#faqs"
                className="text-sm text-white hover:text-blue-400 transition-colors border-2 border-white/40 px-4 py-2 rounded-full"
              >
                FAQs
              </a>
              <a
                href="#schedule"
                className="text-sm text-white hover:text-blue-400 transition-colors border-2 border-white/40 px-4 py-2 rounded-full"
              >
                Schedule & Pricing
              </a>
              <a
                href="#register"
                className="text-sm text-white hover:text-blue-400 transition-colors border-2 border-white/40 px-4 py-2 rounded-full"
              >
                Register
              </a>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:pt-24 sm:pb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-serif text-2xl md:text-4xl font-extralight leading-tight text-slate-200 text-center mx-auto block"
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
            className="relative overflow-hidden rounded-2xl bg-[#0a2a43] p-10 md:p-16 border border-white/10 shadow-2xl"
          >
            {/* Animated Wave Background */}
            <motion.div
              style={{
                scale: waveScale,
                opacity: waveOpacity,
                rotate: waveRotate,
              }}
              className="absolute -right-10 -bottom-20 w-[500px] h-[500px] pointer-events-none z-0"
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

            <div className="relative z-10">
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-slate-200 italic">
                "The cybersecurity awareness training transformed how our entire team approaches
                security. What used to be ignored as 'IT stuff' is now part of our daily
                conversations. The phishing simulations alone reduced our click-through rate by 85%
                within three months."
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

          {/* Key Features */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-20"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {programFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="glass p-8 rounded-2xl border-white/5 hover:border-blue-500/20 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Learning Objectives */}
          <motion.div
            className="glass rounded-3xl p-8 sm:p-12 mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Learning Objectives</h3>
              <p className="text-slate-400">What participants will achieve</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningObjectives.map((objective, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                  <span className="text-slate-300">{objective}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Course Modules */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h3 className="text-[clamp(1.25rem,3vw,2rem)] font-bold font-heading mb-4">
                Course Modules
              </h3>
              <p className="text-slate-400 max-w-xl mx-auto">
                Structured learning path covering essential cybersecurity awareness topics
              </p>
            </div>

            <div className="space-y-6">
              {modules.map((module, index) => (
                <motion.div
                  key={index}
                  className="glass p-6 sm:p-8 rounded-2xl border-white/5"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <h4 className="text-xl font-bold">{module.title}</h4>
                    <div className="flex items-center gap-2 text-blue-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">{module.duration}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {module.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full border border-blue-500/20"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Delivery Methods */}
          <motion.div
            className="glass rounded-3xl p-8 sm:p-12 mb-20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Flexible Delivery Options</h3>
              <p className="text-slate-400">
                Choose the format that works best for your organization
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <BookOpen className="w-6 h-6" />,
                  title: 'Self-Paced Online',
                  desc: 'Learn at your own schedule',
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: 'Instructor-Led',
                  desc: 'Interactive virtual or in-person sessions',
                },
                {
                  icon: <PlayCircle className="w-6 h-6" />,
                  title: 'Video Modules',
                  desc: 'Engaging multimedia content',
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  title: 'Custom Workshops',
                  desc: 'Tailored to your sector and risk profile',
                },
              ].map((method, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400">
                    {method.icon}
                  </div>
                  <h4 className="font-bold mb-2">{method.title}</h4>
                  <p className="text-sm text-slate-400">{method.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto">
              <Award className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Ready to Enhance Your Security Awareness?</h3>
              <p className="text-slate-400 mb-8">
                Join thousands of professionals who have strengthened their cybersecurity knowledge
                with our comprehensive awareness programs.
              </p>
              <motion.button
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default CybersecurityAwarenessPrograms;
