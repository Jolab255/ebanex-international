import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Shield,
  Users,
  AlertTriangle,
  CheckCircle,
  BookOpen,
  Target,
  Clock,
  Award,
  ArrowRight,
  PlayCircle,
  FileText,
  Zap,
} from 'lucide-react';
import {
  FaCertificate,
  FaClock,
  FaChalkboardTeacher,
  FaLevelUpAlt,
  FaLaptopCode,
} from 'react-icons/fa';

const CybersecurityAwarenessPrograms: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

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

      <div className="pt-24 sm:pt-32 pb-16 sm:pb-24">
        {/* Hero Section */}
        <motion.div
          className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200')] bg-cover bg-center opacity-10"
            style={{ y }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Shield className="w-4 h-4" />
                Cybersecurity Awareness
              </motion.div>
              <h1 className="text-[clamp(1.5rem,5vw,4rem)] font-bold font-heading mb-6">
                Build a <span className="text-blue-500">Security-Aware</span> Culture
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Our comprehensive cybersecurity awareness programs empower individuals and
                organizations to recognize threats, implement secure practices, and respond
                effectively to security incidents.
              </p>
            </motion.div>
          </div>

        </motion.div>
      </div>

      {/* Certification Info Section */}
      <div className="px-5">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-slate-700 my-5"></div>
          <div className="grid grid-cols-5 gap-[5px]">
            <div className="text-left">
              <FaCertificate className="w-6 h-6 text-blue-400 mb-2" />
              <div className="text-lg font-light text-slate-300 mb-1">CISSP</div>
              <div className="text-sm font-light text-slate-500">
                Certified Information Systems Security Professional - Industry-recognized certification for security leadership and management
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
                Continuing Professional Education credits to maintain your certification status and stay current in the field
              </div>
            </div>
            <div className="text-left">
              <FaChalkboardTeacher className="w-6 h-6 text-purple-400 mb-2" />
              <div className="text-lg font-light text-slate-300 mb-1">Instructor-Led</div>
              <div className="text-sm font-light text-slate-500">
                Virtual and self-paced options available to suit your schedule and learning preferences
              </div>
            </div>
            <div className="text-left">
              <FaLevelUpAlt className="w-6 h-6 text-orange-400 mb-2" />
              <div className="text-lg font-light text-slate-300 mb-1">Foundation</div>
              <div className="text-sm font-light text-slate-500">
                Intermediate skill level - suitable for professionals with IT or cybersecurity background
              </div>
            </div>
            <div className="text-left">
              <FaLaptopCode className="w-6 h-6 text-cyan-400 mb-2" />
              <div className="text-lg font-light text-slate-300 mb-1">Hands-On Labs</div>
              <div className="text-sm font-light text-slate-500">
                Practical exercises and simulation exercises to apply your knowledge in real-world scenarios
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-5">
          <div className="border-t border-slate-700 my-5"></div>
        </div>
      </div>

      {/* Program Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-[clamp(1.25rem,4vw,2.5rem)] font-bold font-heading mb-6">
            Program Overview
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Designed for all levels of employees, our awareness programs combine interactive learning
            with practical scenarios to ensure lasting security knowledge.
          </p>
        </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-[clamp(1.25rem,4vw,2.5rem)] font-bold font-heading mb-6">
              Program Overview
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Designed for all levels of employees, our awareness programs combine interactive
              learning with practical scenarios to ensure lasting security knowledge.
            </p>
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
                  desc: 'Interactive classroom sessions',
                },
                {
                  icon: <PlayCircle className="w-6 h-6" />,
                  title: 'Video Modules',
                  desc: 'Engaging multimedia content',
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  title: 'Custom Workshops',
                  desc: 'Tailored to your needs',
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
