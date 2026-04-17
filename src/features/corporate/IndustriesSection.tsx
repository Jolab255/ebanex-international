import React from 'react';
import { motion } from 'framer-motion';
import { 
  GanttChart, 
  Landmark, 
  Pickaxe, 
  Smartphone, 
  Zap, 
  Globe 
} from 'lucide-react';

const industries = [
  {
    name: 'Government & Public Sector',
    icon: <Landmark />,
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800'
  },
  {
    name: 'Financial Institutions',
    icon: <GanttChart />,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800'
  },
  {
    name: 'Mining & Industrial',
    icon: <Pickaxe />,
    image: 'https://images.unsplash.com/photo-1579975096649-e773152b04cb?q=80&w=800'
  },
  {
    name: 'Telecommunications',
    icon: <Smartphone />,
    image: 'https://images.unsplash.com/photo-1544666668-f687448df7ed?q=80&w=800'
  },
  {
    name: 'Energy & Infrastructure',
    icon: <Zap />,
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800'
  },
  {
    name: 'Development & NGOs',
    icon: <Globe />,
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800'
  }
];

const IndustriesSection: React.FC = () => {
  return (
    <section id="industries" className="py-24 sm:py-32 bg-[#010409]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-black text-white uppercase tracking-tighter mb-4">
              Industries <span className="text-[#00BFFF]">Served</span>
            </h2>
            <p className="text-white/50 max-w-xl font-light">
              Ebanex International delivers sector-specific expertise across diverse global markets and complex regulatory environments.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative h-64 group overflow-hidden"
            >
              <img 
                src={industry.image} 
                alt={industry.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-[#00BFFF]/40 transition-colors duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-sm flex items-center justify-center text-white mb-4 group-hover:bg-white group-hover:text-black transition-colors">
                  {React.cloneElement(industry.icon as React.ReactElement, { size: 20 })}
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight group-hover:translate-x-2 transition-transform">
                  {industry.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
