import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  AlertCircle,
  Clock,
  Shield,
  Users,
  FileText,
  CheckCircle,
  ArrowRight,
  PlayCircle,
  Target,
  Zap,
  Activity,
  Siren
} from 'lucide-react';

const IncidentResponseTraining: React.FC = () => {
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
      icon: <Clock className="w-8 h-8 text-yellow-400" />,
      title: "Rapid Response Techniques",
      description: "Master time-critical incident response procedures to minimize damage and recovery time."
    },
    {
      icon: <Activity className="w-8 h-8 text-red-400" />,
      title: "Threat Detection & Analysis",
      description: "Learn to identify, analyze, and categorize security incidents using industry-standard frameworks."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Team Coordination",
      description: "Develop skills in leading incident response teams and coordinating with stakeholders."
    },
    {
      icon: <FileText className="w-8 h-8 text-green-400" />,
      title: "Documentation & Reporting",
      description: "Master incident documentation, evidence collection, and regulatory reporting requirements."
    }
  ];

  const learningObjectives = [
    "Execute incident response procedures following NIST and SANS frameworks",
    "Perform digital forensics and evidence collection",
    "Coordinate incident response teams and communicate with stakeholders",
    "Conduct post-incident analysis and implement lessons learned",
    "Develop and maintain incident response plans and playbooks",
    "Navigate legal and regulatory requirements during incidents"
  ];

  const modules = [
    {
      title: "Incident Response Fundamentals",
      duration: "4 hours",
      topics: ["IR Frameworks", "Team Structure", "Communication Protocols", "Legal Considerations"]
    },
    {
      title: "Detection & Analysis",
      duration: "6 hours",
      topics: ["Threat Detection", "Incident Classification", "Impact Assessment", "Containment Strategies"]
    },
    {
      title: "Response Execution",
      duration: "5 hours",
      topics: ["Eradication", "Recovery", "Evidence Collection", "Chain of Custody"]
    },
    {
      title: "Post-Incident Activities",
      duration: "4 hours",
      topics: ["Lessons Learned", "Reporting", "Plan Updates", "Continuous Improvement"]
    }
  ];

  const phases = [
    { name: "Preparation", description: "Build capabilities and resources" },
    { name: "Identification", description: "Detect and assess incidents" },
    { name: "Containment", description: "Limit the scope and impact" },
    { name: "Eradication", description: "Remove threats and vulnerabilities" },
    { name: "Recovery", description: "Restore systems and operations" },
    { name: "Lessons Learned", description: "Review and improve processes" }
  ];

  return (
    <>
      <Helmet>
        <title>Incident Response Training | EBANEX International</title>
        <meta name="description" content="Comprehensive incident response training programs. Master cyber incident handling, digital forensics, and recovery strategies." />
        <meta name="keywords" content="incident response, cyber incident handling, digital forensics, security operations, breach response, cybersecurity training" />
        <meta property="og:title" content="Incident Response Training | EBANEX International" />
        <meta property="og:description" content="Master incident response with comprehensive training in cyber incident handling and digital forensics." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ebanex.com/training/incident-response" />
      </Helmet>

      <div className="pt-24 sm:pt-32 pb-16 sm:pb-24">
        {/* Hero Section */}
        <motion.div
          className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-yellow-900/20 to-slate-900"
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-sm font-medium mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Siren className="w-4 h-4" />
                Incident Response Training
              </motion.div>
              <h1 className="text-[clamp(1.5rem,5vw,4rem)] font-bold font-heading mb-6">
                Respond <span className="text-yellow-500">Faster Than Attackers</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Master the art of cyber incident response. Learn to detect, contain, and recover
                from security incidents while minimizing business impact.
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
              Crisis Management Excellence
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Our intensive program prepares you to handle cyber incidents with confidence,
              using proven frameworks and real-world scenarios.
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
                className="glass p-8 rounded-2xl border-white/5 hover:border-yellow-500/20 transition-all duration-300"
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

          {/* Incident Response Phases */}
          <motion.div
            className="glass rounded-3xl p-8 sm:p-12 mb-20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Incident Response Lifecycle</h3>
              <p className="text-slate-400">The six phases of effective incident response</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {phases.map((phase, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-yellow-500/30 transition-colors"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-400 font-bold text-sm">
                      {index + 1}
                    </div>
                    <h4 className="font-bold">{phase.name}</h4>
                  </div>
                  <p className="text-sm text-slate-400">{phase.description}</p>
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
                Comprehensive curriculum covering the complete incident response lifecycle
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
                    <div className="flex items-center gap-2 text-yellow-400">
                      <Zap className="w-4 h-4" />
                      <span className="text-sm font-medium">{module.duration}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {module.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-3 py-1 bg-yellow-500/10 text-yellow-400 text-sm rounded-full border border-yellow-500/20"
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
              <AlertCircle className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Be Prepared for Cyber Incidents</h3>
              <p className="text-slate-400 mb-8">
                Join our incident response training program and learn to handle cyber crises
                with confidence and minimize business impact.
              </p>
              <motion.button
                className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-xl transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Training
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default IncidentResponseTraining;