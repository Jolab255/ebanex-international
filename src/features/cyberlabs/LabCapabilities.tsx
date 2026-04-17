import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, 
  Server, 
  FileSearch, 
  Zap 
} from 'lucide-react';

const capabilities = [
  {
    title: 'Cybersecurity Simulation Labs',
    icon: <ShieldAlert />,
    description: 'Immersive attack-and-defend scenarios mirroring real-world threat actor methodologies.'
  },
  {
    title: 'Enterprise IT Infrastructure Labs',
    icon: <Server />,
    description: 'Practical configuration and management of complex multi-vendor network and server environments.'
  },
  {
    title: 'Risk & Audit Simulation Cases',
    icon: <FileSearch />,
    description: 'Evidence-based audit scenarios focusing on regulatory compliance and internal control frameworks.'
  },
  {
    title: 'Incident Response Exercises',
    icon: <Zap />,
    description: 'High-pressure tabletop and technical exercises to refine rapid detection and remediation skills.'
  }
];

const LabCapabilities: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black p-10 sm:p-16 hover:bg-white/5 transition-colors group cursor-default"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-sm flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-500 group-hover:text-black transition-all">
                {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">{item.title}</h3>
              <p className="text-white/50 text-sm font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabCapabilities;
