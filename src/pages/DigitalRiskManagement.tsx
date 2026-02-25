import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  AlertTriangle,
  TrendingUp,
  Shield,
  BarChart3,
  Users,
  FileText,
  CheckCircle,
  ArrowRight,
  PlayCircle,
  Target,
  Zap,
  Scale
} from 'lucide-react';

const DigitalRiskManagement: React.FC = () => {
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
      icon: <BarChart3 className="w-8 h-8 text-orange-400" />,
      title: "Risk Assessment & Analysis",
      description: "Master quantitative and qualitative risk assessment methodologies to identify and prioritize organizational risks."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: "Risk Mitigation Strategies",
      description: "Develop comprehensive risk mitigation plans and implement controls to reduce exposure to cyber threats."
    },
    {
      icon: <Scale className="w-8 h-8 text-blue-400" />,
      title: "Compliance & Governance",
      description: "Navigate regulatory requirements and establish governance frameworks for effective risk management."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Stakeholder Management",
      description: "Learn to communicate risk effectively with stakeholders and build risk-aware organizational culture."
    }
  ];

  const learningObjectives = [
    "Conduct comprehensive risk assessments using industry-standard frameworks",
    "Develop and implement risk mitigation strategies and controls",
    "Navigate regulatory compliance requirements and standards",
    "Create risk management policies and procedures",
    "Perform risk monitoring and reporting",
    "Build risk-aware organizational culture and governance"
  ];

  const modules = [
    {
      title: "Risk Management Fundamentals",
      duration: "4 hours",
      topics: ["Risk Concepts", "Risk Frameworks", "Assessment Methodologies", "Risk Appetite"]
    },
    {
      title: "Digital Risk Assessment",
      duration: "6 hours",
      topics: ["Cyber Risk Analysis", "Threat Modeling", "Vulnerability Assessment", "Impact Analysis"]
    },
    {
      title: "Risk Mitigation & Controls",
      duration: "5 hours",
      topics: ["Control Frameworks", "Mitigation Strategies", "Business Continuity", "Incident Response"]
    },
    {
      title: "Compliance & Governance",
      duration: "4 hours",
      topics: ["Regulatory Requirements", "Governance Frameworks", "Audit & Assurance", "Risk Reporting"]
    }
  ];

  const frameworks = [
    { name: "NIST Cybersecurity Framework", category: "Risk Management" },
    { name: "ISO 27001", category: "Information Security" },
    { name: "COBIT", category: "IT Governance" },
    { name: "ISO 31000", category: "Risk Management" },
    { name: "PCI DSS", category: "Payment Security" },
    { name: "GDPR", category: "Data Protection" }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Risk Management | EBANEX International</title>
        <meta name="description" content="Comprehensive digital risk management training programs. Master risk assessment, mitigation strategies, and compliance frameworks." />
        <meta name="keywords" content="digital risk management, risk assessment, compliance, cybersecurity governance, risk mitigation, regulatory compliance" />
        <meta property="og:title" content="Digital Risk Management | EBANEX International" />
        <meta property="og:description" content="Master digital risk management with comprehensive training in risk assessment, mitigation, and compliance." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ebanex.com/training/digital-risk" />
      </Helmet>

      <div className="pt-24 sm:pt-32 pb-16 sm:pb-24">
        {/* Hero Section */}
        <motion.div
          className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-orange-900/20 to-slate-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200')] bg-cover bg-center opacity-10"
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <AlertTriangle className="w-4 h-4" />
                Digital Risk Management
              </motion.div>
              <h1 className="text-[clamp(1.5rem,5vw,4rem)] font-bold font-heading mb-6">
                Protect Your <span className="text-orange-500">Digital Assets</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Master the art and science of digital risk management. Learn to identify, assess,
                and mitigate cyber risks while ensuring regulatory compliance.
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
              Strategic Risk Management
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Our comprehensive program equips you with the knowledge and tools to manage digital risks
              effectively, ensuring business continuity and regulatory compliance.
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
                className="glass p-8 rounded-2xl border-white/5 hover:border-orange-500/20 transition-all duration-300"
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
                Comprehensive curriculum covering all aspects of digital risk management
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
                    <div className="flex items-center gap-2 text-orange-400">
                      <Zap className="w-4 h-4" />
                      <span className="text-sm font-medium">{module.duration}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {module.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-3 py-1 bg-orange-500/10 text-orange-400 text-sm rounded-full border border-orange-500/20"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Frameworks & Standards */}
          <motion.div
            className="glass rounded-3xl p-8 sm:p-12 mb-20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Frameworks & Standards</h3>
              <p className="text-slate-400">Industry standards you'll master</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {frameworks.map((framework, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-colors"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="w-6 h-6 text-orange-400" />
                    <h4 className="font-bold">{framework.name}</h4>
                  </div>
                  <p className="text-sm text-slate-400">{framework.category}</p>
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
              <Shield className="w-16 h-16 text-orange-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Ready to Master Risk Management?</h3>
              <p className="text-slate-400 mb-8">
                Join our comprehensive digital risk management program and learn to protect
                your organization from cyber threats while ensuring compliance.
              </p>
              <motion.button
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors"
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

export default DigitalRiskManagement;