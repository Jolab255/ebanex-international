import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Cpu, Briefcase, Globe2 } from 'lucide-react';

const categories = [
  {
    title: 'Certification Bodies',
    icon: <Award />,
    description: 'Alignment with global standards including ISACA, EC-Council, and Cisco.',
    items: ['ISACA', 'EC-Council', 'Cisco Systems', 'CompTIA', 'IIA']
  },
  {
    title: 'Academic Institutions',
    icon: <GraduationCap />,
    description: 'Collaborating with leading universities for research and curriculum development.',
    items: ['Regional Universities', 'Technical Colleges', 'Research Centers']
  },
  {
    title: 'Technology Vendors',
    icon: <Cpu />,
    description: 'Strategic alliances with industry leaders for hands-on lab environments.',
    items: ['Microsoft', 'AWS', 'Google Cloud', 'Palo Alto Networks', 'Fortinet']
  },
  {
    title: 'Professional Institutions',
    icon: <Briefcase />,
    description: 'Working with professional bodies to enhance workforce competencies.',
    items: ['Management Institutes', 'HR Associations', 'Banking Institutes']
  },
  {
    title: 'Development Agencies',
    icon: <Globe2 />,
    description: 'Supporting international organizations in regional capacity building initiatives.',
    items: ['UN Agencies', 'Development Banks', 'International NGOs']
  }
];

const PartnersGrid: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#010409]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight mb-8"
            >
              Our Ecosystem <br />
              of <span className="text-blue-500">Excellence</span>
            </motion.h2>
            <p className="text-white/50 text-lg font-light leading-relaxed max-w-md">
              We believe in the power of collaboration. By partnering with world-class 
              institutions, we ensure our solutions remain at the cutting edge of 
              global industry standards.
            </p>
          </div>

          <div className="space-y-6">
            {categories.map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-sm border-white/5 hover:border-blue-500/30 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-sm flex items-center justify-center text-blue-500 shrink-0">
                    {React.cloneElement(cat.icon as React.ReactElement, { size: 24 })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-white/40 text-sm font-light mb-6">
                      {cat.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((item, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-white/5 text-white/60 text-[10px] font-bold uppercase tracking-widest border border-white/5"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersGrid;
