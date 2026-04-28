import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Calendar, Users, Award, ArrowRight, Zap, Star, CheckCircle, Globe, Lock, Building, Search, Activity } from 'lucide-react';
import { SEO } from '../components/layout';
import { Squares, ScrollReveal } from '../components/animations';
import { Link } from 'react-router-dom';
import { ClientsSection, CtaSection } from '../features/home';

// Import assets
import cybersecurityImg from '../assets/leadership-development.jpg';
import advisoryImg from '../assets/institutional-advisory.jpg';
import auditImg from '../assets/industrial-sectors.jpg';
import cyberImg from '../assets/cybersecurity-skills.jpg';

const DigitalTrustConference: React.FC = () => {
  const [isOverviewExpanded, setIsOverviewExpanded] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: gridRef,
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

  const focusAreas = [
    'Cybersecurity Strategy & Emerging Threats',
    'IT Audit, Governance & Risk Management',
    'Artificial Intelligence & AI Risk Management',
    'Digital Transformation & Resilience',
    'Data Privacy & Protection',
    'Regulatory Trends & Compliance',
    'Emerging Technology Trends and Risks'
  ];

  const whatToExpect = [
    'Insightful sessions led by experienced professionals',
    'Practical discussions on real-world challenges',
    'Panel discussions on emerging regulatory developments',
    'Networking opportunities with industry peers',
    'Exposure to current tools and frameworks'
  ];

  const whoShouldAttend = [
    'Board Members, CEOs, and Executive Leaders',
    'Senior Management in technology and risk',
    'IT Professionals and Auditors',
    'Cybersecurity and Compliance Officers',
    'Anyone building knowledge in digital trust'
  ];

  const whyAttend = [
    'Stay updated on cybersecurity and digital trends',
    'Gain practical insights for your organization',
    'Learn from cross-industry experts',
    'Build professional networks',
    'Strengthen digital trust and governance'
  ];

  const sections = [
    { title: 'Focus Areas', items: focusAreas, image: auditImg },
    { title: 'What to Expect', items: whatToExpect, image: cyberImg },
    { title: 'Who Should Attend', items: whoShouldAttend, image: cybersecurityImg },
    { title: 'Why Attend', items: whyAttend, image: advisoryImg }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const overviewParagraphs = [
    "As organizations continue to adopt digital technologies, the need for trust, resilience, and effective risk management has become increasingly critical.",
    "The Ebanex Digital Trust Conference provides a platform for meaningful dialogue, knowledge sharing, and practical insights across critical areas of cybersecurity, IT governance, artificial intelligence, and digital risk.",
    "The conference is designed to bridge the gap between strategy, regulation, and real-world implementation, equipping participants with knowledge that can be applied within their organizations."
  ];

  const firstParagraph = overviewParagraphs[0];
  const remainingParagraphs = overviewParagraphs.slice(1);

  return (
    <div className="bg-black min-h-screen text-white">
      <SEO 
        title="Ebanex Digital Trust Conference | Ebanex International"
        description="Shaping the Future of Cybersecurity, AI, and Digital Trust. Join professionals, industry leaders, and institutions."
        keywords="Digital Trust, Conference, Cybersecurity Event, Africa, Data Privacy, Governance, AI"
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
                Digital Trust <span className="text-[#00BFFF]">Conference</span>
              </h1>
            </div>

            <div className="relative w-full flex flex-col lg:flex-row items-center">
              {/* Container for content */}
              <div className="w-full lg:w-[70%] relative z-40">
                {/* Subtitle - Still indented relative to title/card */}
                <div className="inline-flex items-center px-3 py-2 bg-[#00BFFF] text-black mb-6 mt-12 lg:mt-8 ml-8 sm:ml-16 lg:ml-20">
                  <span className="text-[10px] font-black uppercase tracking-[0.1em]">Shaping the Future of Cybersecurity, AI, and Digital Trust</span>
                </div>

                {/* Main Content Card - ml-4 on mobile, 0 on lg */}
                <div
                  className="p-6 sm:p-10 border-[8px] border-black shadow-2xl relative overflow-hidden ml-4 lg:ml-0"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)'
                  }}
                >
                  <div className="relative z-10">
                    <p className="text-base sm:text-lg text-white/90 font-medium leading-relaxed mb-8">
                      The Ebanex Digital Trust Conference is a premier industry conference and engagement platform, bringing together professionals, industry leaders, and institutions from across the region and the African continent to explore emerging trends, risks, and innovations in cybersecurity, IT audit, artificial intelligence, and digital trust.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link to="/contact" className="h-12 px-6 bg-[#00BFFF] text-black font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2 group">
                        Register Interest <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link to="/contact?service=Conference Sponsorship" className="h-12 px-6 border-2 border-white/20 text-white font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center gap-2">
                        Partner With Us
                      </Link>
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
                    src={cybersecurityImg} 
                    alt="Digital Trust Conference" 
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
                        { label: 'Industry Insights', icon: <Star size={18} /> },
                        { label: 'Expert Networking', icon: <Users size={18} /> },
                        { label: 'Practical Strategy', icon: <Zap size={18} /> },
                        { label: 'Emerging Trends', icon: <Activity size={18} /> }
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

      {/* Specialized Content Grid Section */}
      <div className="relative w-full px-4 sm:px-6 lg:px-[100px] pb-0 bg-black z-20 overflow-visible">
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
              <Squares speed={0.13} squareSize={40} direction="diagonal" borderColor="rgba(255,255,255,0.08)" hoverFillColor="rgba(255,255,255,0.05)" />
          </div>
          <div ref={gridRef} className="relative" style={{ backgroundColor: '#00BFFF' }}>
              <motion.div style={{ scale: waveScale, opacity: waveOpacity, rotate: waveRotate }} className="absolute -right-40 -bottom-40 w-[600px] h-[600px] pointer-events-none">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                      <defs>
                          <radialGradient id="waveGradientTemplateGrid" cx="50%" cy="50%" r="50%">
                              <stop offset="0%" stopColor="#00BFFF" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#00BFFF" stopOpacity="0" />
                          </radialGradient>
                      </defs>
                      <motion.circle style={{ scale: circle1Scale }} cx="100" cy="100" r="40" fill="none" stroke="url(#waveGradientTemplateGrid)" strokeWidth="8" />
                      <motion.circle style={{ scale: circle2Scale }} cx="100" cy="100" r="70" fill="none" stroke="url(#waveGradientTemplateGrid)" strokeWidth="12" />
                      <motion.circle style={{ scale: circle3Scale }} cx="100" cy="100" r="100" fill="none" stroke="url(#waveGradientTemplateGrid)" strokeWidth="16" />
                  </svg>
              </motion.div>

              <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-[60px] pt-16 pb-16">
                  <div className="text-center mb-10">
                    <div className="inline-block bg-black py-4 px-8 border border-white/10 shadow-2xl">
                      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading text-white uppercase tracking-tighter leading-[0.9]">
                        Conference <span className="text-[#00BFFF]">Highlights</span>
                      </h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                      {sections.map((section, idx) => (
                          <div key={idx} className="flex h-full group">
                              <div className="shadow-xl bg-[#0a1628] h-full w-full flex flex-col overflow-hidden border border-white/5 group-hover:border-[#00BFFF]/30 transition-all duration-500" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                                  {/* Compact Image Section */}
                                  <div className="relative h-28 overflow-hidden border-b-4 border-black">
                                      <img 
                                          src={section.image} 
                                          alt={section.title}
                                          className="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-110"
                                      />
                                  </div>

                                  {/* Compact Content Section */}
                                  <div className="p-4 flex flex-col flex-1">
                                      <h4 className="text-sm font-black text-white mb-4 flex items-center gap-2 uppercase tracking-tight group-hover:text-[#00BFFF] transition-colors leading-tight min-h-[40px]">
                                          <span className="w-1 h-5 bg-[#00BFFF] shrink-0"></span> {section.title}
                                      </h4>
                                      <ul className="space-y-3 flex-grow">
                                          {section.items.map((item, i) => (
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

      {/* CTA Section */}
      <CtaSection 
        mainHeader="BE PART OF THE CONVERSATION"
        headerSubtitle=""
        title={<>Shaping the <span className="text-[#00BFFF]">Future</span> of Digital Trust</>}
        description="Join Ebanex International and industry professionals as we explore the future of cybersecurity, IT audit, and digital trust."
        primaryButtonText="Register Interest"
        primaryButtonLink="/contact"
        secondaryButtonText="Partner With Us"
        secondaryButtonLink="/contact?service=Conference Sponsorship"
        tertiaryButtonText="Request More Information"
        tertiaryButtonLink="/contact"
      />
    </div>
  );
};

export default DigitalTrustConference;
