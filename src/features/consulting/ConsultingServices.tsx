import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart4, 
  ShieldCheck, 
  Settings2, 
  Network, 
  Building 
} from 'lucide-react';

const services = [
  {
    title: 'Digital Transformation Strategy',
    icon: <BarChart4 />,
    description: 'Guiding organizations through the complexities of modernization and technological integration.'
  },
  {
    title: 'Governance & Risk Advisory',
    icon: <ShieldCheck />,
    description: 'Establishing robust frameworks for institutional oversight and risk mitigation.'
  },
  {
    title: 'Capacity Building Strategy',
    icon: <Building />,
    description: 'Designing sustainable models for institutional growth and workforce development.'
  },
  {
    title: 'Organizational Development',
    icon: <Settings2 />,
    description: 'Optimizing internal processes and structures for peak institutional performance.'
  },
  {
    title: 'Technology Implementation',
    icon: <Network />,
    description: 'Expert oversight for the deployment of critical enterprise and security systems.'
  }
];

const ConsultingServices: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#010409]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight mb-8"
            >
              Excellence Through <br />
              <span className="text-blue-500">Advisory</span>
            </motion.h2>
            <p className="text-white/50 text-lg font-light leading-relaxed max-w-md">
              Our consulting approach is rooted in deep industry expertise and a commitment 
              to delivering measurable institutional outcomes.
            </p>
          </div>

          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-sm border-white/5 hover:border-blue-500/30 transition-all group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-sm flex items-center justify-center text-blue-500 shrink-0 group-hover:bg-blue-500 group-hover:text-black transition-all">
                    {React.cloneElement(service.icon as React.ReactElement, { size: 24 })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-2">{service.title}</h3>
                    <p className="text-white/40 text-sm font-light leading-relaxed">
                      {service.description}
                    </p>
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

export default ConsultingServices;
