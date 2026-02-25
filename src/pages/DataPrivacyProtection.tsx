import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Lock,
  FileText,
  Shield,
  Users,
  Scale,
  CheckCircle,
  ArrowRight,
  PlayCircle,
  Target,
  Zap,
  Eye,
  Database
} from 'lucide-react';

const DataPrivacyProtection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const programFeatures = [
    {
      icon: <Lock className="w-8 h-8 text-indigo-400" />,
      title: "Privacy by Design Principles",
      description: "Implement privacy considerations throughout the entire system development lifecycle."
    },
    {
      icon: <Scale className="w-8 h-8 text-blue-400" />,
      title: "Regulatory Compliance",
      description: "Master GDPR, CCPA, and other global privacy regulations and compliance requirements."
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: "Data Protection Strategies",
      description: "Learn encryption, access controls, and data minimization techniques to protect sensitive information."
    },
    {
      icon: <Eye className="w-8 h-8 text-green-400" />,
      title: "Privacy Impact Assessment",
      description: "Conduct thorough privacy impact assessments and risk evaluations for new initiatives."
    }
  ];

  const learningObjectives = [
    "Understand global privacy regulations and compliance requirements",
    "Implement privacy by design principles in system development",
    "Conduct privacy impact assessments and data protection risk analysis",
    "Master data encryption, access controls, and secure data handling",
    "Develop data breach response and notification procedures",
    "Create comprehensive privacy policies and procedures"
  ];

  const modules = [
    {
      title: "Privacy Fundamentals",
      duration: "4 hours",
      topics: ["Privacy Concepts", "Legal Frameworks", "Data Subject Rights", "Privacy Principles"]
    },
    {
      title: "Data Protection Technologies",
      duration: "6 hours",
      topics: ["Encryption Methods", "Access Controls", "Data Classification", "Secure Storage"]
    },
    {
      title: "Compliance & Governance",
      duration: "5 hours",
      topics: ["GDPR Compliance", "Privacy Policies", "Audit & Monitoring", "Vendor Management"]
    },
    {
      title: "Incident Response & Recovery",
      duration: "4 hours",
      topics: ["Breach Detection", "Response Procedures", "Notification Requirements", "Recovery Planning"]
    }
  ];

  const regulations = [
    { name: "GDPR", region: "European Union", focus: "Data Subject Rights" },
    { name: "CCPA", region: "California, USA", focus: "Consumer Privacy" },
    { name: "LGPD", region: "Brazil", focus: "Personal Data Protection" },
    { name: "PDPA", region: "Singapore", focus: "Data Protection" },
    { name: "PIPEDA", region: "Canada", focus: "Privacy Rights" },
    { name: "APPI", region: "Japan", focus: "Personal Information" }
  ];

  return (
    <>
      <Helmet>
        <title>Data Privacy & Protection | EBANEX International</title>
        <meta name="description" content="Comprehensive data privacy and protection training programs. Master GDPR compliance, privacy by design, and data protection strategies." />
        <meta name="keywords" content="data privacy, GDPR compliance, data protection, privacy by design, CCPA, personal data protection, privacy training" />
        <meta property="og:title" content="Data Privacy & Protection | EBANEX International" />
        <meta property="og:description" content="Master data privacy and protection with comprehensive training in compliance and security." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ebanex.com/training/data-privacy" />
      </Helmet>

      <div className="pt-24 sm:pt-32 pb-16 sm:pb-24">
        {/* Hero Section */}
        <motion.div
          className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900/20 to-slate-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200')] bg-cover bg-center opacity-10"
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Lock className="w-4 h-4" />
                Data Privacy & Protection
              </motion.div>
              <h1 className="text-[clamp(1.5rem,5vw,4rem)] font-bold font-heading mb-6">
                Protect What <span className="text-indigo-500">Matters Most</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Master the principles and practices of data privacy and protection. Learn to safeguard
                personal information while ensuring regulatory compliance.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Program Overview */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <motion.div
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-[clamp(1.25rem,4vw,2.5rem)] font-bold font-heading mb-6">
              Privacy-First Approach
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Our comprehensive program equips you with the knowledge and skills to protect personal data,
              ensure compliance, and build trust with your customers.
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
                className="glass p-8 rounded-2xl border-white/5 hover:border-indigo-500/20 transition-all duration-300"
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

          {/* Global Regulations */}
          <motion.div
            className="glass rounded-3xl p-8 sm:p-12 mb-20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Global Privacy Regulations</h3>
              <p className="text-slate-400">Key regulations you'll master</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {regulations.map((regulation, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-colors"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="w-6 h-6 text-indigo-400" />
                    <h4 className="font-bold">{regulation.name}</h4>
                  </div>
                  <p className="text-sm text-slate-400 mb-2">{regulation.region}</p>
                  <p className="text-xs text-indigo-400">{regulation.focus}</p>
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
                Comprehensive curriculum covering all aspects of data privacy and protection
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
                    <div className="flex items-center gap-2 text-indigo-400">
                      <Zap className="w-4 h-4" />
                      <span className="text-sm font-medium">{module.duration}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {module.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-sm rounded-full border border-indigo-500/20"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
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
              <Shield className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Become a Privacy Champion</h3>
              <p className="text-slate-400 mb-8">
                Join our data privacy and protection program and learn to safeguard personal information
                while ensuring compliance with global regulations.
              </p>
              <motion.button
                className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Learning
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default DataPrivacyProtection;