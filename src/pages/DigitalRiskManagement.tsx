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
  Globe,
  Briefcase
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

const DigitalRiskManagement: React.FC = () => {
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
      icon: <Briefcase className="w-8 h-8 text-blue-400" />,
      title: 'Enterprise Risk Frameworks',
      description:
        'Bridge the gap between IT risks and corporate strategy utilizing frameworks like ISO 27005 and NIST RMF.',
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: 'IT Governance & Compliance',
      description:
        'Navigate the complicated landscape of data regulations, corporate governance, and continuous audit readiness.',
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-yellow-400" />,
      title: 'Quantitative Risk Assessment',
      description:
        'Translate cyber threats into financial impact using advanced quantitative modeling (e.g., FAIR methodology).',
    },
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      title: 'Third-Party & Supply Chain Risk',
      description:
        'Secure your ecosystem by assessing and managing threats originating from vendors and external partners.',
    },
  ];

  const learningObjectives = [
    'Design and implement an enterprise-wide IT risk management program',
    'Align IT risk strategy with overall corporate governance objectives',
    'Conduct comprehensive qualitative and quantitative risk assessments',
    'Establish continuous monitoring and key risk indicators (KRIs)',
    'Prepare for ISACA CRISC examination and related governance certs',
    'Manage vendor and third-party cyber risk effectively',
  ];

  const modules = [
    {
      title: 'IT Risk Identification & Framing',
      duration: '4 hours',
      topics: ['Risk Taxonomy', 'Asset Valuation', 'Threat Scenarios', 'Business Context'],
    },
    {
      title: 'Risk Assessment & Analysis',
      duration: '5 hours',
      topics: [
        'Vulnerability vs. Threat',
        'Quantitative Analysis (FAIR)',
        'Qualitative Matrices',
        'Risk Registers',
      ],
    },
    {
      title: 'Risk Response & Mitigation',
      duration: '4 hours',
      topics: ['Control Frameworks', 'Risk Acceptance, Transfer & Avoidance', 'Cost-Benefit Analysis', 'Insurance'],
    },
    {
      title: 'Risk Monitoring & Reporting',
      duration: '3 hours',
      topics: [
        'Key Risk Indicators (KRIs)',
        'Continuous Compliance',
        'Executive Dashboards',
        'Audit Preparation',
      ],
    },
  ];

  return (
    <>
      <div>
        <Helmet>
          <title>Digital Risk Management | EBANEX International</title>
          <meta
            name="description"
            content="Align cyber risk with business strategy. Master IT governance, continuous compliance, and enterprise risk management."
          />
          <meta
            name="keywords"
            content="digital risk management, CRISC, IT governance, enterprise risk, compliance, cybersecurity risk"
          />
          <meta
            property="og:title"
            content="Digital Risk Management | EBANEX International"
          />
          <meta
            property="og:description"
            content="Transform how your organization identifies, assesses, and mitigates digital risk across the enterprise."
          />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ebanex.com/training/digital-risk" />
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
                    <span>Governance & Strategy</span>
                  </div>
                  <span className="bg-[#00C4D4] text-[#0a1628] text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-tighter">
                    Executive Track
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-6"
                >
                  <span className="bg-[#00C4D4] text-[#0a1628] text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-tight">
                    CRISC Aligned
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
                  <span>Strategic Leadership</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-heading leading-[1.1] mb-8 max-w-3xl"
                >
                  Digital Risk Management
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-lg text-slate-300 mb-8 max-w-2xl"
                >
                  Bridge the critical gap between technical security controls and executive business strategy. Learn to quantify, govern, and mitigate IT risk across your enterprise ecosystem.
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
                      <span>5 Days (Instructor-Led)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-green-400" />
                      <span>32 Hours (Blended)</span>
                    </div>
                  </div>

                  {/* Vertical Separator */}
                  <div className="w-px bg-slate-700 h-12"></div>

                  {/* Right Column - Designer Info */}
                  <div className="text-sm font-medium text-white">
                    <p className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">
                      Target Audience
                    </p>
                    <p className="text-sm md:text-base font-semibold text-white">
                      Risk Managers, CISOs, IT Auditors
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
                    Register Now{' '}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-4 group">
                    Download Brochure{' '}
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
                    src="https://picsum.photos/seed/riskmanagement/800/800"
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

                  {/* Yellow bar at bottom */}
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#00C4D4]"></div>
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
                <div className="text-lg font-light text-slate-300 mb-1">CRISC Prep</div>
                <div className="text-sm font-light text-slate-500">
                  Certified in Risk and Information Systems Control aligned curriculum
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
                  Earn credits mapped directly to ISACA continuing education requirements
                </div>
              </div>
              <div className="text-left">
                <FaChalkboardTeacher className="w-6 h-6 text-purple-400 mb-2" />
                <div className="text-lg font-light text-slate-300 mb-1">Expert-Led</div>
                <div className="text-sm font-light text-slate-500">
                  Instructed by veteran Risk Officers with global consulting experience
                </div>
              </div>
              <div className="text-left">
                <FaLevelUpAlt className="w-6 h-6 text-orange-400 mb-2" />
                <div className="text-lg font-light text-slate-300 mb-1">Strategic</div>
                <div className="text-sm font-light text-slate-500">
                  High-level focus requiring an understanding of business operations and IT
                </div>
              </div>
              <div className="text-left">
                <FaLaptopCode className="w-6 h-6 text-cyan-400 mb-2" />
                <div className="text-lg font-light text-slate-300 mb-1">Case Studies</div>
                <div className="text-sm font-light text-slate-500">
                  Analyze real-world breaches and build complete executive risk portfolios
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
            ? 'bg-gradient-to-r from-[#0a1628] via-[#0f2744] to-[#0a1628] border-b border-yellow-500/20'
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
            Digital risk is business risk. <br className="hidden md:block" />
            Empower your leadership with the frameworks <br className="hidden md:block" />
            needed to make informed, data-driven security <br className="hidden md:block" />
            investments while maintaining strict compliance.
          </motion.h1>
        </div>

        {/* Testimonial Section with Animated Wave Background */}
        <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
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
                "Ebanex transformed our approach to IT risk. We shifted from a 'culture of compliance checklists' to a dynamic risk management strategy. This training gave our CISO and Risk teams a unified language to communicate cyber threats effectively to the Board of Directors."
              </p>

              <div className="mt-8">
                <h4 className="font-bold text-lg text-white">Elena Rostova</h4>
                <p className="text-[#00C4D4] font-medium italic">
                  Chief Risk Officer, Global Logistics Corp
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

            <div className="w-full">
              <p className="text-slate-300 text-lg font-light leading-relaxed text-justify">
                Digital Risk Management (DRM) is no longer a niche technical discipline—it is a core pillar of modern corporate governance. As organizations migrate to the cloud and integrate complex third-party supply chains, the attack surface expands exponentially. This executive-focused program provides the strategic tools required to identify vulnerabilities, quantify their potential business impact, and implement controls that align perfectly with enterprise risk tolerance.
              </p>

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
                  Moving beyond technical jargon, this course trains professionals to translate cyber risk into financial terms using quantitative methodologies. You will explore globally recognized frameworks such as ISO 31000, ISO 27005, NIST RMF, and COBIT. By learning how to build comprehensive risk registers and establish Key Risk Indicators (KRIs), you will enable continuous compliance tracking and more effective board-level reporting.
                </p>
              </motion.div>

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
                  <div>
                    <h3 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-3">
                      <span className="w-2 h-8 bg-[#00C4D4] rounded-full"></span>
                      Technical Skills
                    </h3>
                    <ul className="space-y-4">
                      {[
                        'Map complex digital assets directly to tangible corporate risk registers and business continuity plans',
                        'Calculate quantitative impacts using industry frameworks like FAIR',
                        'Govern third-party vendor portfolios and identify systemic supply chain vulnerabilities',
                        'Determine cyber insurance adequacy and liability limitations during contract negotiations',
                        'Perform compliance assessments for GDPR, HIPAA, and industry-specific regulations',
                        'Present board-level cyber risk dashboards with clear financial correlations',
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

                  <div>
                    <h3 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-3">
                      <span className="w-2 h-8 bg-teal-500 rounded-full"></span>
                      Business Benefits
                    </h3>
                    <ul className="space-y-4">
                      {[
                        'Minimize catastrophic, uninsurable security incidents by proactively discovering hidden vulnerabilities',
                        'Ensure compliance and avoid devastating regulatory fines and customer lawsuits',
                        'Integrate security investments tightly into overall corporate planning and expenditure',
                        'Bridge the gap between executive boards and technical IT security personnel',
                        'Accelerate merger and acquisition due diligence processes with quantifiable risk matrices',
                        'Drive cultural change where security is viewed as a business enabler rather than an obstacle',
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
                      { metric: 95, suffix: '%', label: 'Regulatory Compliance Readiness' },
                      { metric: 60, suffix: '%', label: 'Reduction in Unquantified Cyber Risk' },
                      { metric: 40, suffix: '%', label: 'Improvement in Security ROI' },
                      { metric: 100, suffix: '%', label: 'Executive Board Risk Visibility' },
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
                      Governance Modules
                    </h3>
                    <p className="text-sm text-slate-400 mb-6">
                      Master the core pillars of IT risk management through our comprehensive four-step identification and response framework.
                    </p>
                    <ul className="space-y-4">
                      {[
                        {
                          phase: 'IT Risk Identification & Framing',
                          desc: 'Risk Taxonomy, Asset Valuation, Threat Scenarios, Business Context',
                        },
                        {
                          phase: 'IT Risk Assessment & Analysis',
                          desc: 'Risk Assessment Methodologies, Vulnerability Analysis, Threat Modeling, Risk Scoring',
                        },
                        {
                          phase: 'Risk Response & Mitigation',
                          desc: 'Control Frameworks, Risk Acceptance, Transfer & Avoidance, Cost-Benefit Analysis, Insurance',
                        },
                        {
                          phase: 'Risk Monitoring & Reporting',
                          desc: 'Risk Monitoring Frameworks, Key Risk Indicators (KRIs), Reporting & Communication, Continuous Improvement',
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


                    <div>
                      <h3 className="text-xl font-light text-white pt-10 mb-4 pb-3 border-b border-white/10">
                        Strategic Focus Areas
                      </h3>
                      <p className="text-sm text-slate-400 mb-6">
                        Align IT risk with organizational strategy through advanced methodologies, compliance governance, and quantitative modeling.
                      </p>
                      <ul className="space-y-4">
                        {[
                          {
                            phase: 'Enterprise Risk Frameworks',
                            desc: 'Bridge the gap between IT risks and corporate strategy utilizing frameworks like ISO 27005 and NIST RMF.',
                          },
                          {
                            phase: 'IT Governance & Compliance',
                            desc: 'Navigate the complicated landscape of data regulations, corporate governance, and continuous audit readiness.',
                          },
                          {
                            phase: 'Quantitative Risk Assessment',
                            desc: 'Translate cyber threats into financial impact using advanced quantitative modeling (e.g., FAIR methodology).',
                          },
                          {
                            phase: 'Third-Party & Supply Chain Risk',
                            desc: 'Secure your ecosystem by assessing and managing threats originating from vendors and external partners.',
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

                  </div>
                  <h3 className="text-xl font-light text-white mb-4 pb-3 border-b border-white/10">
                    How You'll Be Assessed
                  </h3>
                  <p className="text-sm text-slate-400 mb-6">
                    Our comprehensive evaluation framework ensures you master every competency
                    through four key phases
                  </p>
                  <ul className="space-y-4">
                    {[
                      {
                        phase: 'Phase 1: Pre-Assessment',
                        desc: 'Baseline knowledge evaluation, risk posture questionnaire, and skill gap analysis',
                      },
                      {
                        phase: 'Phase 2: Module Assessments',
                        desc: 'End-of-module quizzes, risk strategy workshops, and scenario evaluations',
                      },
                      {
                        phase: 'Phase 3: Final Examination',
                        desc: 'Comprehensive governance exam and hands-on risk modeling simulation',
                      },
                      {
                        phase: 'Phase 4: Post-Program Evaluation',
                        desc: '90-day progress tracking, ROI analysis, and leadership review',
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

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <h3 className="text-2xl font-bold text-white mb-2">Marcus Dubois</h3>
                <p className="text-[#00C4D4] font-medium mb-4">
                  Chief Risk Officer & Governance Lead
                </p>
                <p className="text-slate-300 font-light leading-relaxed mb-6">
                  Marcus is a former Chief Risk Officer (CRO) for a major European bank, specialized in governing enormous third-party vendor portfolios and presenting risk posture to corporate boards. He teaches students how to speak both binary and business logic, ensuring security initiatives align explicitly with corporate goals.
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'CRISC', 'CISM', 'CGEIT', 'FAIR Analyst'
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
                question: 'Who should attend this training?',
                answer: 'This training is ideal for C-level executives, Risk and Compliance Managers, IT Directors, and Internal Auditors who need to govern cybersecurity posture without necessarily needing to perform technical configurations.'
              },
              {
                question: 'Does this prepare me for ISACA CRISC?',
                answer: 'Yes, the curriculum maps perfectly to the four domains of the CRISC (Certified in Risk and Information Systems Control) exam. It serves as an excellent bootcamp for the certification.'
              },
              {
                question: 'Will we do technical hacking in this course?',
                answer: 'No. This is a governance and management course. We focus on calculating risk impacts, writing policies, auditing architectures, and presenting findings to executive boards.'
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
        </motion.div>

        <motion.div
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

            <div className="relative z-10 max-w-7xl mx-auto px-[100px] py-20 w-full">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    Govern Your Cybersecurity Future
                  </h2>
                  <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                    Cyber risk is business risk. Partner with Ebanex International to develop executives and managers capable of navigating complex data regulations and demonstrating clear ROI on your security investments.
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

            <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#00C4D4]/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 right-20 w-40 h-40 bg-[#00C4D4]/20 rounded-full blur-3xl pointer-events-none" />
          </div>
        </motion.div>




      </div>
    </>

  );
};

export default DigitalRiskManagement;