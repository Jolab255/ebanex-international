import React from 'react';
import { Calendar, Users, Award, ArrowRight, Zap, Star, CheckCircle } from 'lucide-react';
import { SEO } from '../components/layout';
import { Squares, ScrollReveal } from '../components/animations';
import { Link } from 'react-router-dom';

// Import assets
import cybersecurityImg from '../assets/leadership-development.jpg';

const DigitalTrustConference: React.FC = () => {

  const focusAreas = [
    'Cybersecurity Strategy & Emerging Threats',
    'IT Audit, Governance & Risk Management',
    'Artificial Intelligence & AI Risk Management',
    'Digital Transformation & Resilience',
    'Data Privacy & Protection',
    'Regulatory Trends & Compliance',
    'Emerging Technology Trends, Risks and Opportunities'
  ];

  const whatToExpect = [
    'Insightful sessions led by experienced professionals and industry practitioners',
    'Practical discussions based on real-world challenges and case scenarios',
    'Panel discussions on emerging risks and regulatory developments',
    'Networking opportunities with professionals across industries',
    'Exposure to current tools, techniques, and frameworks'
  ];

  const whoShouldAttend = [
    'Board Members, CEOs, and Executive Leaders across public and private institutions',
    'Senior Management and Decision-Makers in technology, risk, and operations',
    'IT Professionals and Technology Teams',
    'IT Auditors (Internal & External)',
    'Cybersecurity Professionals',
    'Risk & Compliance Officers',
    'IT & Digital Transformation Leaders',
    'Government & Regulatory Officials',
    'Anyone seeking to build practical knowledge in cybersecurity, artificial intelligence, and digital trust'
  ];

  const whyAttend = [
    'Stay updated on evolving cybersecurity and digital risk trends',
    'Gain practical insights that can be applied within your organization',
    'Learn from experienced professionals across multiple industries',
    'Build professional networks and exchange ideas',
    'Strengthen your understanding of digital trust and governance'
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      <SEO 
        title="Ebanex Digital Trust Conference | Ebanex International"
        description="Shaping the Future of Cybersecurity, AI, and Digital Trust. Join professionals, industry leaders, and institutions."
        keywords="Digital Trust, Conference, Cybersecurity Event, Africa, Data Privacy, Governance, AI"
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Squares speed={0.08} squareSize={50} direction="diagonal" borderColor="rgba(255,255,255,0.05)" hoverFillColor="rgba(0,191,255,0.05)" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <ScrollReveal>
            {/* Header Title with Black BG - Aligned with Description Card */}
            <div className="inline-block bg-black py-4 px-8 border border-white/10 mb-[-2rem] ml-4 lg:ml-0 relative z-[100] shadow-2xl">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading text-white uppercase tracking-tighter leading-[0.85]">
                Ebanex <br /> Digital Trust <span className="text-[#00BFFF]">Conference</span>
              </h1>
            </div>

            <div className="relative w-full flex flex-col lg:flex-row items-center">
              {/* Container for content */}
              <div className="w-full lg:w-[70%] relative z-50">
                {/* Subtitle - Still indented relative to title/card */}
                <div className="inline-flex items-center px-4 py-2 bg-[#00BFFF] text-black mb-6 mt-16 lg:mt-12 ml-8 sm:ml-16 lg:ml-20">
                  <Calendar size={14} className="mr-2" />
                  <span className="text-[10px] font-black uppercase tracking-widest leading-tight">Shaping the Future of Cybersecurity, AI, and Digital Trust</span>
                </div>

                {/* Main Content Card - ml-4 on mobile, 0 on lg */}
                <div
                  className="p-8 sm:p-12 border-[10px] border-black shadow-2xl relative overflow-hidden ml-4 lg:ml-0"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)'
                  }}
                >
                  <div className="relative z-10">
                    <p className="text-lg sm:text-xl text-white/90 font-medium leading-relaxed mb-10">
                      The Ebanex Digital Trust Conference is a premier industry conference and engagement platform, bringing together professionals, industry leaders, and institutions from across the region and the African continent to explore emerging trends, risks, and innovations in cybersecurity, IT audit, artificial intelligence, and digital trust.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link to="/contact" className="h-14 px-8 bg-white text-black font-black text-xs uppercase tracking-widest hover:bg-[#00BFFF] transition-all flex items-center gap-2 group">
                        Register Interest <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link to="/contact?service=Conference Sponsorship" className="h-14 px-8 border-2 border-white/20 text-white font-black text-xs uppercase tracking-widest hover:border-[#00BFFF] hover:text-[#00BFFF] transition-all flex items-center gap-2">
                        Partner With Us
                      </Link>
                    </div>
                  </div>
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#00BFFF]/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                </div>
              </div>

              {/* Background Image (Stacked UNDER with low z-index) */}
              <div className="absolute right-0 lg:right-[-5%] top-[55%] -translate-y-1/2 w-[250px] sm:w-[400px] lg:w-[500px] aspect-square z-10 hidden md:block opacity-90 lg:opacity-100">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-[#00BFFF]/5 z-20 pointer-events-none" />
                  <img 
                    src={cybersecurityImg} 
                    alt="Digital Trust" 
                    className="w-full h-full object-cover border-[10px] border-black shadow-[-20px_20px_0px_0px_rgba(0,191,255,0.1)]"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 relative bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal>
              <div className="relative aspect-video border-[10px] border-black shadow-2xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1540575861501-7ad05823c23d?q=80&w=1200" 
                  alt="Conference Hall"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#00BFFF]/20 mix-blend-overlay" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="text-[10px] font-black text-[#00BFFF] uppercase tracking-[0.4em] mb-6">Overview</h2>
              <div className="space-y-6 text-white/70 font-medium leading-relaxed">
                <p>
                  As organizations continue to adopt digital technologies, the need for trust, resilience, and effective risk management has become increasingly critical.
                </p>
                <p>
                  The Ebanex Digital Trust Conference provides a platform for meaningful dialogue, knowledge sharing, and practical insights across critical areas of cybersecurity, IT governance, artificial intelligence, and digital risk.
                </p>
                <p>
                  The conference is designed to bridge the gap between strategy, regulation, and real-world implementation, equipping participants with knowledge that can be applied within their organizations.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Lists Sections Grid */}
      <section className="py-24 relative bg-black border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-16">
                
                {/* Focus Areas */}
                <ScrollReveal>
                    <div className="p-8 border border-white/10 bg-[#0a1628] h-full" style={{ background: 'linear-gradient(135deg, #051020 0%, #0a1a2f 100%)' }}>
                        <div className="w-12 h-12 bg-[#00BFFF] flex items-center justify-center text-black mb-6">
                            <Star size={24} />
                        </div>
                        <h3 className="text-2xl font-black uppercase tracking-tighter mb-8">Conference Focus Areas</h3>
                        <ul className="space-y-4">
                            {focusAreas.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-white/70 font-medium">
                                    <CheckCircle size={16} className="text-[#00BFFF] shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </ScrollReveal>

                {/* What to Expect */}
                <ScrollReveal delay={0.1}>
                    <div className="p-8 border border-white/10 bg-[#0a1628] h-full" style={{ background: 'linear-gradient(135deg, #051020 0%, #0a1a2f 100%)' }}>
                        <div className="w-12 h-12 bg-[#00BFFF] flex items-center justify-center text-black mb-6">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-2xl font-black uppercase tracking-tighter mb-8">What to Expect</h3>
                        <ul className="space-y-4">
                            {whatToExpect.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-white/70 font-medium">
                                    <CheckCircle size={16} className="text-[#00BFFF] shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </ScrollReveal>

            </div>
        </div>
      </section>

      {/* Target Audience & Why Attend Grid */}
      <section className="py-24 relative bg-white text-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-16">
                
                {/* Who Should Attend */}
                <ScrollReveal>
                    <div className="p-8 border-2 border-black h-full group hover:bg-black hover:text-white transition-all duration-500">
                        <div className="w-12 h-12 bg-black flex items-center justify-center text-[#00BFFF] mb-6 group-hover:bg-[#00BFFF] group-hover:text-black transition-colors">
                            <Users size={24} />
                        </div>
                        <h3 className="text-2xl font-black uppercase tracking-tighter mb-8">Who Should Attend</h3>
                        <ul className="space-y-4">
                            {whoShouldAttend.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm font-bold opacity-80 group-hover:opacity-100 transition-opacity">
                                    <CheckCircle size={16} className="text-[#00BFFF] shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </ScrollReveal>

                {/* Why Attend */}
                <ScrollReveal delay={0.1}>
                    <div className="p-8 border-2 border-black h-full group hover:bg-black hover:text-white transition-all duration-500">
                        <div className="w-12 h-12 bg-black flex items-center justify-center text-[#00BFFF] mb-6 group-hover:bg-[#00BFFF] group-hover:text-black transition-colors">
                            <Award size={24} />
                        </div>
                        <h3 className="text-2xl font-black uppercase tracking-tighter mb-8">Why Attend</h3>
                        <ul className="space-y-4">
                            {whyAttend.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm font-bold opacity-80 group-hover:opacity-100 transition-opacity">
                                    <CheckCircle size={16} className="text-[#00BFFF] shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </ScrollReveal>

            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="bg-[#00BFFF] p-12 lg:p-20 text-black overflow-hidden relative group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Calendar size={120} />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] mb-4">Be Part of the Conversation</h2>
              <p className="text-2xl sm:text-4xl font-black uppercase tracking-tighter leading-tight mb-10">
                Join Ebanex International and industry professionals as we explore the future of cybersecurity, IT audit, and digital trust.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex h-14 px-8 bg-black text-white font-black text-xs uppercase tracking-[0.1em] items-center gap-2 hover:bg-white hover:text-black transition-all">
                  Register Interest
                </Link>
                <Link to="/contact?service=Conference Sponsorship" className="inline-flex h-14 px-8 border-2 border-black text-black font-black text-xs uppercase tracking-[0.1em] items-center gap-2 hover:bg-black hover:text-white transition-all">
                  Partner With Us
                </Link>
                <Link to="/contact" className="inline-flex h-14 px-8 border-2 border-black text-black font-black text-xs uppercase tracking-[0.1em] items-center gap-2 hover:bg-black hover:text-white transition-all">
                  Request More Information
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTrustConference;
