
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Code, GraduationCap, Briefcase, PlayCircle } from 'lucide-react';
import { CERTIFICATIONS } from '../constants';

const Training: React.FC = () => {
  const categories = [
    { 
      title: 'Cybersecurity & Information Security', 
      icon: <Shield className="text-purple-400" />,
      items: ['Ethical Hacking', 'Incident Response', 'Network Defense', 'Cloud Security']
    },
    { 
      title: 'IT & Digital Skills', 
      icon: <Code className="text-blue-400" />,
      items: ['Full-stack Development', 'DevSecOps', 'AI & Machine Learning', 'Data Science']
    },
    { 
      title: 'Governance, Risk & Compliance', 
      icon: <GraduationCap className="text-indigo-400" />,
      items: ['ISO Standards', 'GDPR/Data Privacy', 'Enterprise Risk Mgmt', 'Internal Audit']
    },
    { 
      title: 'Leadership & Development', 
      icon: <Briefcase className="text-cyan-400" />,
      items: ['Strategic Management', 'Agile Leadership', 'Emotional Intelligence', 'Change Management']
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <h1 className="text-5xl font-bold font-heading mb-6">World-Class <span className="text-purple-500">Curricula.</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Our training programs are industry-aligned, evidence-based, and designed to deliver 
            immediate ROI for both individuals and enterprises.
          </p>
        </header>

        {/* Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="glass p-10 rounded-[2.5rem] border-white/5 flex flex-col lg:flex-row gap-8 items-start"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                {cat.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">{cat.title}</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-24 text-center">
          <h2 className="text-3xl font-bold font-heading mb-12">Certification Preparation</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert} className="px-8 py-4 glass border-white/10 rounded-xl font-bold hover:border-purple-500/50 transition-colors">
                {cert}
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Methods */}
        <div className="glass rounded-[3rem] p-12 lg:p-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Flexible Delivery Architectures</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 text-center">
            {[
              { label: 'Classroom', desc: 'In-person excellence' },
              { label: 'Virtual', desc: 'Interactive remote' },
              { label: 'Hybrid', desc: 'The best of both' },
              { label: 'Corporate', desc: 'On-site specialized' },
              { label: 'Bootcamps', desc: 'Accelerated learning' }
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
