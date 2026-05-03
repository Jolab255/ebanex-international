import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Shield, CheckCircle, ArrowRight, Activity, Search, Database, Lock, Building, Globe, X } from 'lucide-react';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { SEO } from '../components/layout';
import { Squares } from '../components/animations';
import { Link } from 'react-router-dom';
import { ClientsSection, CtaSection } from '../features/home';

// Import assets
import advisoryImg from '../assets/institutional-advisory.jpg';
import auditImg from '../assets/industrial-sectors.jpg';
import cyberImg from '../assets/cybersecurity-skills.jpg';
import riskImg from '../assets/financial-services.jpg';
import projectImg from '../assets/capacity-building.jpg';

const ITAuditAdvisory: React.FC = () => {
  const [isOverviewExpanded, setIsOverviewExpanded] = useState(false);
  const [isExpertContactVisible, setIsExpertContactVisible] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: servicesRef,
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

  const services = [
    {
      title: 'IT Audit & Assurance',
      image: auditImg,
      icon: <Search className="w-6 h-6" />,
      items: [
        'IT General Controls (ITGC) Reviews',
        'Application Controls Audits',
        'Infrastructure & Network Security Reviews',
        'Data Governance and Data Integrity Assessments',
        'Backup, Disaster Recovery & Resilience Audits'
      ]
    },
    {
      title: 'Cybersecurity Audits & Assessments',
      image: cyberImg,
      icon: <Shield className="w-6 h-6" />,
      items: [
        'Vulnerability & Security Posture Assessments',
        'Security Configuration Reviews (Firewalls, Servers, Endpoints)',
        'Identity & Access Management (IAM) Reviews',
        'Security Monitoring & SIEM Effectiveness Reviews',
        'Third-Party & API Security Assessments'
      ]
    },
    {
      title: 'IT Risk Advisory',
      image: riskImg,
      icon: <Activity className="w-6 h-6" />,
      items: [
        'IT Risk Assessments and Risk Register Development',
        'Control Design and Improvement',
        'Cyber Risk Framework Implementation',
        'Regulatory & Compliance Readiness (e.g., ISO, NIST, CIS)',
        'Technology Risk Governance Advisory'
      ]
    },
    {
      title: 'System & Project Assurance',
      image: projectImg,
      icon: <Database className="w-6 h-6" />,
      items: [
        'System Implementation Reviews (Pre/Post Implementation)',
        'SDLC and Change Management Audits',
        'Data Migration & System Integration Reviews',
        'Project Risk & Governance Assessments'
      ]
    }
  ];

  const approach = [
    {
      step: '01',
      title: 'Understand the Environment',
      desc: 'Business, systems, and risk landscape'
    },
    {
      step: '02',
      title: 'Assess Risks & Controls',
      desc: 'Identify vulnerabilities and control gaps'
    },
    {
      step: '03',
      title: 'Test Effectiveness',
      desc: 'Evaluate design and operating effectiveness'
    },
    {
      step: '04',
      title: 'Provide Actionable Insights',
      desc: 'Practical, prioritized recommendations'
    },
    {
      step: '05',
      title: 'Support Improvement',
      desc: 'Enable sustainable control enhancement'
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const overviewParagraphs = [
    "In today's rapidly evolving digital landscape, organizations require more than compliance—they require assurance, visibility, and resilience.",
    "Ebanex International delivers risk-focused IT audit and advisory services that help organizations identify control gaps, assess emerging risks, and strengthen their technology environment.",
    "Our approach combines deep technical expertise, audit discipline, and real-world experience to provide practical, actionable insights that drive measurable improvement."
  ];

  const firstParagraph = overviewParagraphs[0];
  const remainingParagraphs = overviewParagraphs.slice(1);

  return (
    <div className="bg-black min-h-screen text-white">
      <SEO 
        title="IT Audit & Advisory | Ebanex International"
        description="Strengthening Digital Trust through Independent Assurance and Strategic Insight. Independent IT audit and advisory services for governance and resilience."
        keywords="IT Audit, Advisory, Assurance, Risk Management, Cybersecurity Audit, Governance"
      />

      {/* Hero Section */}
      <section className="relative pt-6 pb-0 overflow-hidden bg-[linear-gradient(135deg,#000000_50%,#00BFFF_50%)]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Squares speed={0.13} squareSize={40} direction="diagonal" borderColor="rgba(255,255,255,0.08)" hoverFillColor="rgba(255,255,255,0.05)" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pb-20">
          <div className="max-w-5xl">
            {/* Header Title with Black BG - Aligned with Description Card */}
            <div className="inline-block bg-black py-4 px-8 border border-white/10 mb-[-2rem] ml-4 lg:ml-0 relative z-50 shadow-2xl">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white uppercase tracking-tighter leading-[0.9]">
                IT Audit & <span className="text-[#00BFFF]">Advisory</span> Services
              </h1>
            </div>

            <div className="relative w-full flex flex-col lg:flex-row items-center">
              {/* Container for content */}
              <div className="w-full lg:w-[70%] relative z-40">
                {/* Subtitle - Still indented relative to title/card */}
                <div className="inline-flex items-center px-3 py-2 bg-[#00BFFF] text-black mb-6 mt-12 lg:mt-8 ml-8 sm:ml-16 lg:ml-20">
                  <span className="text-[10px] font-black uppercase tracking-[0.1em]">Strengthening Digital Trust Through Independent Assurance and Strategic Insight</span>
                </div>

                {/* Main Content Card - ml-4 on mobile, 0 on lg */}
                <div
                  className="p-6 sm:p-10 border-[8px] border-black shadow-2xl relative overflow-visible ml-4 lg:ml-0"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)'
                  }}
                >
                  <div className="relative z-10">
                    <p className="text-base sm:text-lg text-white/90 font-medium leading-relaxed mb-8">
                      Ebanex International provides independent IT audit and advisory services designed to enhance governance, strengthen controls, and support secure digital transformation across organizations.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link to="/contact" className="h-12 px-6 bg-[#00BFFF] text-black font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2 group">
                        Request a Consultation <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                      
                      <div className="relative">
                        <button 
                          onClick={() => setIsExpertContactVisible(!isExpertContactVisible)}
                          className={`h-12 px-6 border-2 font-black text-[10px] uppercase tracking-widest transition-all flex items-center gap-2 z-50 relative ${
                            isExpertContactVisible 
                              ? 'bg-white text-black border-white' 
                              : 'border-white/20 text-white hover:bg-white hover:text-black'
                          }`}
                        >
                          {isExpertContactVisible ? (
                            <>Close Options <X size={14} /></>
                          ) : (
                            <>Speak to an Expert</>
                          )}
                        </button>

                        <AnimatePresence>
                          {isExpertContactVisible && (
                            <div className="absolute bottom-full left-0 mb-4 flex flex-col gap-2 z-[100] min-w-[200px]">
                              {[
                                { 
                                  label: 'WhatsApp Expert', 
                                  icon: <FaWhatsapp size={14} />, 
                                  href: 'https://wa.me/255745326627',
                                  color: '#25D366'
                                },
                                { 
                                  label: 'Call Specialist', 
                                  icon: <FaPhoneAlt size={14} />, 
                                  href: 'tel:+255745326627',
                                  color: '#00BFFF'
                                },
                                { 
                                  label: 'Email Advisory', 
                                  icon: <FaEnvelope size={14} />, 
                                  href: 'mailto:info@ebanexint.co.tz',
                                  color: '#FFFFFF'
                                }
                              ].map((option, i) => (
                                <motion.a
                                  key={option.label}
                                  href={option.href}
                                  target={option.href.startsWith('http') ? '_blank' : undefined}
                                  rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 10, transition: { delay: (2 - i) * 0.05 } }}
                                  transition={{ delay: i * 0.1, duration: 0.3 }}
                                  className="group flex items-center gap-3 bg-black border border-white/10 p-3 hover:border-[#00BFFF] transition-all shadow-2xl"
                                >
                                  <div 
                                    className="w-8 h-8 flex items-center justify-center border border-white/10 group-hover:border-[#00BFFF]/50 transition-colors"
                                    style={{ color: option.color }}
                                  >
                                    {option.icon}
                                  </div>
                                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white group-hover:text-[#00BFFF] transition-colors">
                                    {option.label}
                                  </span>
                                </motion.a>
                              ))}
                            </div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#00BFFF]/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                </div>
              </div>

              {/* Background Image (Stacked UNDER with low z-index) */}
              <div className="absolute right-[-10%] lg:right-[-15%] top-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] lg:w-[550px] aspect-square z-10 hidden md:block opacity-90 lg:opacity-100">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-[#00BFFF]/5 z-20 pointer-events-none" />
                  <img 
                    src={advisoryImg} 
                    alt="IT Audit Advisory" 
                    className="w-full h-full object-cover border-[10px] border-black shadow-[-20px_20px_0px_0px_rgba(0,191,255,0.1)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-2/3 bg-[#00BFFF]/5 blur-[100px] rounded-full pointer-events-none" />
      </section>

      {/* Overview Section */}
      <section id="overview" className="relative z-20 bg-black pt-0 pb-12 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Squares speed={0.13} squareSize={40} direction="diagonal" borderColor="rgba(255,255,255,0.08)" hoverFillColor="rgba(255,255,255,0.05)" />
        </div>
        <div className="w-full px-4 sm:px-6 lg:px-[100px] relative z-10">
          <motion.div {...fadeInUp}>
            <div className="w-full">
              <div className="w-full bg-[#00BFFF] p-6 sm:p-10 border-[8px] border-black shadow-2xl relative">
                <div className="mb-8">
                  <div className="inline-block bg-black py-4 px-8 border border-white/10 shadow-2xl">
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading text-white uppercase tracking-tighter leading-[0.9]">
                      Overview
                    </h2>
                  </div>
                </div>
                <p className="text-black text-lg font-light leading-relaxed text-justify">
                  {firstParagraph}
                </p>

                <AnimatePresence>
                  {isOverviewExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      {remainingParagraphs.map((para, i) => (
                        <p key={i} className="text-black text-lg font-light leading-relaxed text-justify mt-8">
                          {para}
                        </p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {remainingParagraphs.length > 0 && (
                  <motion.button
                    onClick={() => setIsOverviewExpanded(!isOverviewExpanded)}
                    className="mt-8 text-black hover:text-white font-black flex items-center gap-2 transition-colors uppercase tracking-widest text-xs"
                  >
                    {isOverviewExpanded ? 'Show Less' : 'Read More'}
                    <motion.span animate={{ rotate: isOverviewExpanded ? 180 : 0 }}>
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </motion.button>
                )}

                {/* Feature Cards Grid - Moved inside blue container and centered */}
                <div className="flex justify-center w-full">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-12 relative p-1 border-[4px] border-black shadow-xl overflow-hidden bg-black/10 max-w-4xl w-full" 
                  >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 p-4 items-stretch">
                      {[
                        { label: 'Real-World Expertise', icon: <Globe size={18} /> },
                        { label: 'Technical Depth', icon: <Lock size={18} /> },
                        { label: 'Practical Solutions', icon: <CheckCircle size={18} /> },
                        { label: 'Global Standards', icon: <Building size={18} /> }
                      ].map((item, i) => (
                        <div 
                          key={i} 
                          className="p-3 border border-black/20 hover:border-white/30 transition-colors flex flex-col items-center text-center h-full min-h-[100px] justify-center"
                          style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}
                        >
                          <div className="text-[#00BFFF] mb-2">{item.icon}</div>
                          <div className="text-[8px] font-black uppercase tracking-widest leading-tight text-white">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                {/* Decorative accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialized Services Grid Section */}
      <div className="relative w-full px-4 sm:px-6 lg:px-[100px] pb-0 bg-black z-20 overflow-visible">
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
              <Squares speed={0.13} squareSize={40} direction="diagonal" borderColor="rgba(255,255,255,0.08)" hoverFillColor="rgba(255,255,255,0.05)" />
          </div>
          <div ref={servicesRef} className="relative" style={{ backgroundColor: '#00BFFF' }}>
              <motion.div style={{ scale: waveScale, opacity: waveOpacity, rotate: waveRotate }} className="absolute -right-40 -bottom-40 w-[600px] h-[600px] pointer-events-none">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                      <defs>
                          <radialGradient id="waveGradientTemplate" cx="50%" cy="50%" r="50%">
                              <stop offset="0%" stopColor="#00BFFF" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#00BFFF" stopOpacity="0" />
                          </radialGradient>
                      </defs>
                      <motion.circle style={{ scale: circle1Scale }} cx="100" cy="100" r="40" fill="none" stroke="url(#waveGradientTemplate)" strokeWidth="8" />
                      <motion.circle style={{ scale: circle2Scale }} cx="100" cy="100" r="70" fill="none" stroke="url(#waveGradientTemplate)" strokeWidth="12" />
                      <motion.circle style={{ scale: circle3Scale }} cx="100" cy="100" r="100" fill="none" stroke="url(#waveGradientTemplate)" strokeWidth="16" />
                  </svg>
              </motion.div>

              <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-[60px] pt-16 pb-16">
                  <div className="text-center mb-10">
                    <div className="inline-block bg-black py-4 px-8 border border-white/10 shadow-2xl">
                      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading text-white uppercase tracking-tighter leading-[0.9]">
                        Our <span className="text-[#00BFFF]">Services</span>
                      </h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                      {services.map((service, idx) => (
                          <div key={idx} className="flex h-full group">
                              <div className="shadow-xl bg-[#0a1628] h-full w-full flex flex-col overflow-hidden border border-white/5 group-hover:border-[#00BFFF]/30 transition-all duration-500" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                                  {/* Compact Image Section - No Overlays/Icons */}
                                  <div className="relative h-28 overflow-hidden border-b-4 border-black">
                                      <img 
                                          src={service.image} 
                                          alt={service.title}
                                          className="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-110"
                                      />
                                  </div>

                                  {/* Compact Content Section */}
                                  <div className="p-4 flex flex-col flex-1">
                                      <h4 className="text-sm font-black text-white mb-4 flex items-center gap-2 uppercase tracking-tight group-hover:text-[#00BFFF] transition-colors leading-tight min-h-[40px]">
                                          <span className="w-1 h-5 bg-[#00BFFF] shrink-0"></span> {service.title}
                                      </h4>
                                      <ul className="space-y-3 flex-grow">
                                          {service.items.map((item, i) => (
                                              <li key={i} className="flex items-start gap-2 text-white/70 font-normal text-xs sm:text-sm leading-snug text-start">
                                                  <CheckCircle className="w-3 h-3 text-[#00BFFF] shrink-0 mt-0.5" />
                                                  {item}
                                              </li>
                                          ))}
                                      </ul>
                                  </div>
                                  {/* Simple Accent Bar */}
                                  <div className="h-1 w-0 group-hover:w-full bg-[#00BFFF] transition-all duration-500" />
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </div>

      {/* Approach Section - Visual Step-based */}
      <section className="py-16 bg-black text-white relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Squares speed={0.13} squareSize={40} direction="diagonal" borderColor="rgba(255,255,255,0.08)" hoverFillColor="rgba(255,255,255,0.05)" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="mb-12 text-center">
            <div className="inline-block bg-black py-4 px-8 border border-white/10 shadow-2xl">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading text-white uppercase tracking-tighter leading-[0.9]">
                Our <span className="text-[#00BFFF]">Approach</span>
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-3 mb-8">
            {approach.map((step, idx) => (
              <div key={idx} className="relative p-6 border border-[#00BFFF] h-full bg-white/5 backdrop-blur-[2px]">
                <div className="text-3xl font-black text-[#00BFFF] mb-4 tracking-tighter">
                  {step.step}
                </div>
                <h4 className="text-base font-black uppercase mb-3 tracking-tight leading-tight text-white">{step.title}</h4>
                <p className="text-sm text-white/70 font-normal leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-widest text-[#00BFFF]">
              We focus on clarity, practicality, and impact—not just reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Why Ebanex */}
      <section className="py-16 relative overflow-hidden bg-[linear-gradient(135deg,#00bfff_50%,#000000_50%)]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Squares speed={0.13} squareSize={40} direction="diagonal" borderColor="rgba(255,255,255,0.08)" hoverFillColor="rgba(255,255,255,0.05)" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="mb-12 text-center">
            <div className="inline-block bg-black py-4 px-8 border border-white/10 shadow-2xl">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading text-white uppercase tracking-tighter leading-[0.9]">
                Why <span className="text-[#00BFFF]">Ebanex?</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: 'Real-World Expertise',
                desc: 'Led by seasoned professionals with over 15 years of practical, hands-on experience across diverse IT domains, including banking, telecommunications, Big Four audit firms, government, and private sector institutions.'
              },
              {
                title: 'Technical & Audit Depth',
                desc: 'A strong blend of cybersecurity, IT audit, and risk management expertise, grounded in real-world delivery.'
              },
              {
                title: 'Practical Recommendations',
                desc: 'We go beyond identifying issues—our focus is on clear, implementable solutions that deliver practical and sustainable improvements.'
              },
              {
                title: 'Aligned with Global Standards',
                desc: 'Our approach is guided by ISACA’s globally recognized frameworks for IT audit and governance, alongside other leading standards and best practices, including NIST, CIS Controls, ISO standards, and other recognized industry practices.'
              }
            ].map((item, i) => (
              <div key={i} className="group relative h-full">
                <div className={`absolute inset-0 bg-[#00bfff] transform ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'} group-hover:rotate-0 transition-transform duration-300`} />
                <div 
                  className="relative p-8 border-[10px] border-black flex gap-4 transition-all duration-300 h-full"
                  style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-[#00BFFF] font-black text-lg">
                    0{i+1}
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-black uppercase mb-2 tracking-tight text-white">{item.title}</h4>
                    <p className="text-sm sm:text-base text-white/60 font-normal leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <ClientsSection showStats={false} />

      {/* Final CTA */}
      <CtaSection 
        mainHeader="ENGAGE WITH US"
        headerSubtitle=""
        title={<>Ready to <span className="text-[#00BFFF]">Strengthen</span> Your <br className="hidden sm:block" /> Control Environment?</>}
        description="Partner with Ebanex International to strengthen your organization’s control environment, enhance cybersecurity resilience, and build sustainable digital trust."
      />
    </div>
  );
};

export default ITAuditAdvisory;
