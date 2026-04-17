import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, BarChart3, Microscope, GraduationCap } from 'lucide-react';

const insights = [
  {
    category: 'Industry Research',
    title: 'The State of Digital Transformation in East Africa 2026',
    description: 'An exhaustive analysis of technological adoption across public and private sectors.',
    icon: <BarChart3 />,
    tag: 'Report'
  },
  {
    category: 'Cybersecurity',
    title: 'Adversarial Tactics: Threat Analysis for Financial Hubs',
    description: 'Deconstructing recent APT campaigns targeting regional financial infrastructure.',
    icon: <Microscope />,
    tag: 'Whitepaper'
  },
  {
    category: 'Technical Insights',
    title: 'Zero-Day Vulnerabilities in Legacy Enterprise Systems',
    description: 'A technical deep-dive into remediation strategies for unpatched critical systems.',
    icon: <FileText />,
    tag: 'Article'
  },
  {
    category: 'Capacity Building',
    title: 'Institutional Resilience: A Framework for Knowledge Transfer',
    description: 'Strategic methodologies for sustainable workforce upskilling in government agencies.',
    icon: <GraduationCap />,
    tag: 'Case Study'
  }
];

const InsightsGrid: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {insights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black p-10 sm:p-16 hover:bg-white/5 transition-colors group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 bg-blue-500/10 rounded-sm flex items-center justify-center text-blue-500">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 border border-white/20 text-white/40">
                  {item.tag}
                </span>
              </div>
              
              <div className="text-[11px] font-bold text-blue-500 uppercase tracking-widest mb-4">
                {item.category}
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-6 group-hover:text-blue-500 transition-colors">
                {item.title}
              </h3>
              <p className="text-white/50 font-light leading-relaxed mb-10 text-sm">
                {item.description}
              </p>
              
              <div className="flex items-center gap-3 text-white font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                Read Publication <ArrowRight size={14} className="text-blue-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-white/40 text-sm font-light mb-8">
            Access our full library of research and technical documentation.
          </p>
          <button className="h-14 px-10 border border-white/20 text-white rounded-sm font-bold text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">
            Browse Archive
          </button>
        </div>
      </div>
    </section>
  );
};

export default InsightsGrid;
