import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, ArrowRight, Activity, Search, Database, Lock, Terminal, Building, Globe } from 'lucide-react';
import { SEO } from '../components/layout';
import { Squares, ScrollReveal } from '../components/animations';
import { Link } from 'react-router-dom';

// Import assets
import advisoryImg from '../assets/institutional-advisory.jpg';

const ITAuditAdvisory: React.FC = () => {
  const services = [
    {
      title: 'IT Audit & Assurance',
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
      desc: 'Business, systems, and risk landscape analysis to establish context.'
    },
    {
      step: '02',
      title: 'Assess Risks & Controls',
      desc: 'Identify vulnerabilities and control gaps within your specific topology.'
    },
    {
      step: '03',
      title: 'Test Effectiveness',
      desc: 'Evaluate design and operating effectiveness through rigorous testing.'
    },
    {
      step: '04',
      title: 'Provide Actionable Insights',
      desc: 'Practical, prioritized recommendations that drive measurable value.'
    },
    {
      step: '05',
      title: 'Support Improvement',
      desc: 'Enable sustainable control enhancement and long-term resilience.'
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      <SEO 
        title="IT Audit & Advisory | Ebanex International"
        description="Strengthening Digital Trust through Independent Assurance and Strategic Insight. Independent IT audit and advisory services for governance and resilience."
        keywords="IT Audit, Advisory, Assurance, Risk Management, Cybersecurity Audit, Governance"
      />

      {/* Hero Section */}
      <section className="relative pt-6 pb-20 overflow-hidden border-b border-white/5 bg-[linear-gradient(135deg,#000000_50%,#00bfff_50%)]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Squares speed={0.13} squareSize={40} direction="diagonal" borderColor="rgba(255,255,255,0.08)" hoverFillColor="rgba(255,255,255,0.05)" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
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
                  <span className="text-[10px] font-black uppercase tracking-[0.1em]">Independent Assurance & Strategic Digital Trust Insight</span>
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
                      Ebanex International provides independent IT audit and advisory services designed to enhance governance, strengthen controls, and support secure digital transformation across organizations.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link to="/contact" className="h-12 px-6 bg-[#00BFFF] text-black font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2 group">
                        Request a Consultation <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link to="/training" className="h-12 px-6 border-2 border-white/20 text-white font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center gap-2">
                        Speak to an Expert
                      </Link>
                    </div>
                  </div>
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#00BFFF]/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                </div>
              </div>

              {/* Background Image (Stacked UNDER with low z-index) */}
              <div className="absolute right-0 lg:right-[-5%] top-1/2 -translate-y-1/2 w-[250px] sm:w-[350px] lg:w-[450px] aspect-square z-10 hidden md:block opacity-90 lg:opacity-100">
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
      <section className="py-16 relative overflow-hidden bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="text-[9px] font-black text-[#00BFFF] uppercase tracking-[0.4em] mb-3">Overview</h2>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-6 leading-tight">
                Assurance in a <span className="text-[#00BFFF]">Complex</span> Landscape
              </h3>
              <div className="space-y-4 text-white/70 font-medium leading-relaxed text-sm">
                <p>
                  In today's rapidly evolving digital landscape, organizations require more than compliance—they require assurance, visibility, and resilience.
                </p>
                <p>
                  Ebanex International delivers risk-focused IT audit and advisory services that help organizations identify control gaps, assess emerging risks, and strengthen their technology environment.
                </p>
                <p>
                  Our approach combines deep technical expertise, audit discipline, and real-world experience to provide practical, actionable insights that drive measurable improvement.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative p-1 border-[8px] border-black shadow-2xl overflow-hidden bg-[#0a1628]" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                <div className="grid grid-cols-2 gap-3 p-6">
                  {[
                    { label: 'Real-World Expertise', icon: <Globe size={20} /> },
                    { label: 'Technical Depth', icon: <Lock size={20} /> },
                    { label: 'Practical Solutions', icon: <CheckCircle size={20} /> },
                    { label: 'Global Standards', icon: <Building size={20} /> }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-black/40 border border-white/10 hover:border-[#00BFFF]/50 transition-colors">
                      <div className="text-[#00BFFF] mb-3">{item.icon}</div>
                      <div className="text-[9px] font-black uppercase tracking-widest leading-tight">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12">
            <ScrollReveal>
              <h2 className="text-[9px] font-black text-[#00BFFF] uppercase tracking-[0.4em] mb-3">Solutions</h2>
              <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter">Our <span className="text-[#00BFFF]">Specialized</span> Services</h3>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="group relative h-full">
                  <div className="absolute inset-0 bg-[#00BFFF]/10 transform rotate-1 group-hover:rotate-0 transition-transform duration-500" />
                  <div className="relative p-6 border border-white/10 bg-[#0a1628] h-full flex flex-col group-hover:border-[#00BFFF]/50 transition-all" style={{ background: 'linear-gradient(135deg, #051020 0%, #0a1a2f 100%)' }}>
                    <div className="w-10 h-10 bg-[#00BFFF] flex items-center justify-center text-black mb-4">
                      {React.cloneElement(service.icon as React.ReactElement, { size: 20 })}
                    </div>
                    <h4 className="text-lg font-black uppercase mb-4 tracking-tight">{service.title}</h4>
                    <ul className="space-y-2 flex-grow">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-white/60 font-medium">
                          <CheckCircle size={12} className="text-[#00BFFF] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section - Visual Step-based */}
      <section className="py-16 bg-white text-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12">
            <ScrollReveal>
              <h2 className="text-[9px] font-black text-black/40 uppercase tracking-[0.4em] mb-3">Our Approach</h2>
              <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter mb-4">Our <span className="text-[#00BFFF]">Risk-Based</span> Approach</h3>
              <p className="text-sm font-medium text-black/70 max-w-2xl mx-auto">
                Our engagements are guided by a structured, a structured, risk-based approach grounded in real-world audit and technical practice:
              </p>
            </ScrollReveal>
          </div>

          <div className="grid lg:grid-cols-5 gap-3 mb-8">
            {approach.map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="relative p-6 border-2 border-black h-full group hover:bg-black hover:text-white transition-all duration-300">
                  <div className="text-3xl font-black text-[#00BFFF] mb-4 tracking-tighter opacity-20 group-hover:opacity-100 transition-opacity">
                    {step.step}
                  </div>
                  <h4 className="text-[11px] font-black uppercase mb-3 tracking-tight leading-tight">{step.title}</h4>
                  <p className="text-[10px] font-medium leading-relaxed opacity-70 group-hover:opacity-90">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-widest text-[#00BFFF]">
                We focus on clarity, practicality, and impact—not just reporting.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Ebanex */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mb-12">
            <ScrollReveal>
              <h2 className="text-[9px] font-black text-[#00BFFF] uppercase tracking-[0.4em] mb-3">Why Ebanex?</h2>
              <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter">The <span className="text-[#00BFFF]">Difference</span> in Delivery</h3>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-[#00BFFF] font-black text-lg">
                    0{i+1}
                  </div>
                  <div>
                    <h4 className="text-base font-black uppercase mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-xs text-white/60 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Target Clients */}
      <section className="py-12 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <h2 className="text-[9px] font-black text-[#00BFFF] uppercase tracking-[0.4em] mb-8">Who We Serve</h2>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
              {['Financial Institutions', 'Government & Regulatory Bodies', 'Corporates & Enterprises', 'NGOs & Development Organizations', 'Technology-driven Organizations'].map((client, i) => (
                <div key={i} className="text-[11px] font-black uppercase tracking-widest text-white/40 hover:text-[#00BFFF] transition-colors cursor-default">
                  {client}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <Squares speed={0.13} squareSize={40} direction="diagonal" borderColor="rgba(255,255,255,0.08)" hoverFillColor="rgba(255,255,255,0.05)" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter mb-6 leading-tight">
              Ready to Strengthen Your <br /> <span className="text-[#00BFFF]">Control Environment?</span>
            </h2>
            <p className="text-base text-white/60 font-medium max-w-2xl mx-auto mb-8">
              Partner with Ebanex International to enhance cybersecurity resilience, 
              ensure regulatory compliance, and build sustainable digital trust.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="h-12 px-8 bg-[#00BFFF] text-black font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-all">
                Request a Consultation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ITAuditAdvisory;
