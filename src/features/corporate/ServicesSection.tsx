import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardCheck, 
  TrendingUp, 
  MonitorSmartphone, 
  ShieldAlert, 
  UserPlus, 
  Users 
} from 'lucide-react';

const services = [
  {
    title: 'Training Needs Assessments',
    icon: <ClipboardCheck />,
    description: 'Comprehensive evaluation of skills gaps and institutional performance requirements.'
  },
  {
    title: 'Workforce Upskilling',
    icon: <TrendingUp />,
    description: 'Targeted programs to modernize technical competencies and operational excellence.'
  },
  {
    title: 'Digital Transformation Advisory',
    icon: <MonitorSmartphone />,
    description: 'Strategic guidance on navigating technological evolution and implementation.'
  },
  {
    title: 'Risk & Resilience Training',
    icon: <ShieldAlert />,
    description: 'Equipping organizations with defensive strategies against modern operational risks.'
  },
  {
    title: 'Leadership Development',
    icon: <UserPlus />,
    description: 'Building high-performance executive teams and institutional leadership pipelines.'
  },
  {
    title: 'Train-the-Trainer Programs',
    icon: <Users />,
    description: 'Developing internal capacity for sustainable knowledge transfer within institutions.'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(1.5rem,4vw,2.5rem)] font-black text-white uppercase tracking-tighter mb-4"
          >
            Our Strategic <span className="text-[#00BFFF]">Services</span>
          </motion.h2>
          <div className="w-24 h-1 bg-[#00BFFF] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-sm border border-white/5 hover:border-[#00BFFF]/30 transition-all group cursor-default"
              style={{
                background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)'
              }}
            >
              <div className="w-12 h-12 bg-[#00BFFF]/10 rounded-sm flex items-center justify-center text-[#00BFFF] mb-6 group-hover:scale-110 transition-transform">
                {React.cloneElement(service.icon as React.ReactElement, { size: 24 })}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
