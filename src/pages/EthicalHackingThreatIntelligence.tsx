import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Code,
  Search,
  Zap,
  Shield,
  Target,
  Eye,
  Lock,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  PlayCircle,
  FileText,
  Cpu
} from 'lucide-react';

const EthicalHackingThreatIntelligence: React.FC = () => {
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
      icon: <Search className="w-8 h-8 text-red-400" />,
      title: "Advanced Threat Hunting",
      description: "Master techniques to proactively identify and neutralize cyber threats before they impact your organization."
    },
    {
      icon: <Code className="w-8 h-8 text-green-400" />,
      title: "Ethical Hacking Methodologies",
      description: "Learn industry-standard penetration testing frameworks and responsible disclosure practices."
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-400" />,
      title: "Intelligence Gathering",
      description: "Develop skills in OSINT, threat intelligence collection, and adversary behavior analysis."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Defensive Security",
      description: "Understand attacker methodologies to build stronger defensive strategies and security controls."
    }
  ];

  const learningObjectives = [
    "Conduct ethical penetration testing using industry-standard methodologies",
    "Perform comprehensive vulnerability assessments and threat hunting",
    "Collect and analyze threat intelligence from various sources",
    "Implement defensive security measures based on attacker techniques",
    "Master tools and techniques for ethical hacking and security research",
    "Develop incident response and threat mitigation strategies"
  ];

  const modules = [
    {
      title: "Ethical Hacking Fundamentals",
      duration: "4 hours",
      topics: ["Legal & Ethical Considerations", "Penetration Testing Methodology", "Reconnaissance Techniques", "Scanning & Enumeration"]
    },
    {
      title: "Advanced Exploitation",
      duration: "6 hours",
      topics: ["Web Application Attacks", "Network Exploitation", "Wireless Security", "Social Engineering"]
    },
    {
      title: "Threat Intelligence",
      duration: "4 hours",
      topics: ["OSINT Collection", "Threat Actor Profiling", "Indicator Analysis", "Intelligence Sharing"]
    },
    {
      title: "Defensive Strategies",
      duration: "4 hours",
      topics: ["Incident Response", "Threat Mitigation", "Security Hardening", "Monitoring & Detection"]
    }
  ];

  const tools = [
    { name: "Nmap", category: "Network Scanning" },
    { name: "Metasploit", category: "Exploitation Framework" },
    { name: "Wireshark", category: "Network Analysis" },
    { name: "Burp Suite", category: "Web Application Testing" },
    { name: "Kali Linux", category: "Penetration Testing OS" },
    { name: "Nessus", category: "Vulnerability Scanning" }
  ];

  return (
    <>
      <Helmet>
        <title>Ethical Hacking & Threat Intelligence | EBANEX International</title>
        <meta name="description" content="Advanced ethical hacking and threat intelligence training programs. Master penetration testing, threat hunting, and defensive security strategies." />
        <meta name="keywords" content="ethical hacking, penetration testing, threat intelligence, cybersecurity training, vulnerability assessment, security research" />
        <meta property="og:title" content="Ethical Hacking & Threat Intelligence | EBANEX International" />
        <meta property="og:description" content="Master ethical hacking techniques and threat intelligence gathering with our comprehensive training programs." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ebanex.com/training/ethical-hacking" />
      </Helmet>

      <div className="pt-24 sm:pt-32 pb-16 sm:pb-24">
        {/* Hero Section */}
        <motion.div
          className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200')] bg-cover bg-center opacity-10"
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Code className="w-4 h-4" />
                Ethical Hacking & Threat Intelligence
              </motion.div>
              <h1 className="text-[clamp(1.5rem,5vw,4rem)] font-bold font-heading mb-6">
                Master the <span className="text-red-500">Attacker's Mindset</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Learn ethical hacking techniques, threat intelligence gathering, and defensive strategies
                to protect organizations from sophisticated cyber attacks.
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
              Advanced Security Training
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Our comprehensive program combines offensive security techniques with defensive strategies,
              preparing you to identify and mitigate complex cyber threats.
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
                className="glass p-8 rounded-2xl border-white/5 hover:border-red-500/20 transition-all duration-300"
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
                Comprehensive curriculum covering ethical hacking and threat intelligence
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
                    <div className="flex items-center gap-2 text-red-400">
                      <Zap className="w-4 h-4" />
                      <span className="text-sm font-medium">{module.duration}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {module.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-3 py-1 bg-red-500/10 text-red-400 text-sm rounded-full border border-red-500/20"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            className="glass rounded-3xl p-8 sm:p-12 mb-20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Tools & Technologies</h3>
              <p className="text-slate-400">Industry-standard tools you'll master</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-colors"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Cpu className="w-6 h-6 text-red-400" />
                    <h4 className="font-bold">{tool.name}</h4>
                  </div>
                  <p className="text-sm text-slate-400">{tool.category}</p>
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
              <Target className="w-16 h-16 text-red-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Ready to Become a Security Expert?</h3>
              <p className="text-slate-400 mb-8">
                Join our intensive ethical hacking and threat intelligence program and gain
                the skills needed to protect against sophisticated cyber threats.
              </p>
              <motion.button
                className="inline-flex items-center gap-2 px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default EthicalHackingThreatIntelligence;