import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, GraduationCap, Briefcase, PlayCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/layout';
import { CERTIFICATIONS } from '../constants';

const Training: React.FC = () => {
  const categories = [
    {
      title: 'Cybersecurity & Information Security',
      icon: <Shield className="text-purple-400" />,
      items: [
        { name: 'Cybersecurity Awareness', path: '/training/cybersecurity-awareness' },
        { name: 'Ethical Hacking', path: '/training/ethical-hacking' },
        { name: 'Incident Response', path: '/training/incident-response' },
        { name: 'Digital Risk Management', path: '/training/digital-risk' },
        { name: 'Data Privacy & Protection', path: '/training/data-privacy' },
      ],
    },
    {
      title: 'IT & Digital Skills',
      icon: <Code className="text-blue-400" />,
      items: [
        { name: 'Networking & Infrastructure', path: '#' },
        { name: 'Cloud Computing', path: '#' },
        { name: 'AI & Machine Learning', path: '#' },
        { name: 'Systems Administration', path: '#' },
      ],
    },
    {
      title: 'Governance, Risk & Compliance',
      icon: <GraduationCap className="text-indigo-400" />,
      items: [
        { name: 'IT Governance', path: '#' },
        { name: 'Enterprise Risk Mgmt', path: '#' },
        { name: 'Internal Audit', path: '#' },
        { name: 'Regulatory Compliance', path: '#' },
      ],
    },
    {
      title: 'Leadership & Development',
      icon: <Briefcase className="text-cyan-400" />,
      items: [
        { name: 'Strategic Management', path: '#' },
        { name: 'Agile Leadership', path: '#' },
        { name: 'Emotional Intelligence', path: '#' },
        { name: 'Change Management', path: '#' },
      ],
    },
  ];

  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24">
      <SEO 
        title="Training Programs | Ebanex International"
        description="Explore our elite training programs in cybersecurity, IT governance, leadership, and professional development. Industry-aligned and results-driven."
        keywords="training programs, cybersecurity awareness, ethical hacking, digital risk, IT governance, leadership development"
        canonical="https://ebanexint.co.tz/training"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <header className="mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-[clamp(0.85rem,4vw,3rem)] font-bold font-heading mb-4 sm:mb-6 whitespace-nowrap overflow-hidden text-ellipsis">
            World-Class <span className="text-blue-500">Curricula.</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-2xl">
            Our training programs are industry-aligned, evidence-based, and designed to deliver
            immediate ROI for both individuals and enterprises.
          </p>
        </header>

        {/* Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.01 }}
              className="glass p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[2.5rem] border-white/5 flex flex-col lg:flex-row gap-6 sm:gap-8 items-start"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                {cat.icon}
              </div>
              <div className="flex-1 w-full">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{cat.title}</h3>
                <ul className="grid grid-cols-1 gap-3">
                  {cat.items.map((item, i) => (
                    <li key={i}>
                      {item.path !== '#' ? (
                        <Link 
                          to={item.path}
                          className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-blue-500/10 hover:text-blue-400 transition-all group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            <span className="text-sm font-medium">{item.name}</span>
                          </div>
                          <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ) : (
                        <div className="flex items-center gap-3 p-3 text-slate-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                          <span className="text-sm font-light">{item.name}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-24 text-center">
          <h2 className="text-[clamp(0.75rem,3.5vw,1.875rem)] font-bold font-heading mb-8 sm:mb-12 whitespace-nowrap overflow-hidden text-ellipsis px-2">
            Certification Preparation
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert}
                className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 glass border-white/10 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base hover:border-blue-500/50 transition-colors"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Methods */}
        <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 xl:p-20">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-[clamp(0.7rem,3vw,1.875rem)] font-bold whitespace-nowrap overflow-hidden text-ellipsis px-2">
              Flexible Delivery Architectures
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 text-center">
            {[
              { label: 'Classroom', desc: 'In-person excellence' },
              { label: 'Virtual', desc: 'Interactive remote' },
              { label: 'Hybrid', desc: 'The best of both' },
              { label: 'Corporate', desc: 'On-site specialized' },
              { label: 'Bootcamps', desc: 'Accelerated learning' },
            ].map((method, idx) => (
              <div key={idx} className="space-y-4">
                <div className="w-12 h-12 bg-white/5 rounded-full mx-auto flex items-center justify-center">
                  <PlayCircle className="text-purple-400" />
                </div>
                <h4 className="font-bold">{method.label}</h4>
                <p className="text-xs text-slate-500">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
