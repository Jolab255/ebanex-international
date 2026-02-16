
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, ShieldCheck, Settings, LineChart } from 'lucide-react';

const Consulting: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <header className="max-w-3xl mb-24">
          <h1 className="text-6xl font-bold font-heading mb-8">Strategic <span className="text-blue-500">Advisory.</span></h1>
          <p className="text-xl text-slate-400">
            We partner with governments and enterprises to navigate the intricacies of 
            digital transformation, governance, and institutional strengthening.
          </p>
        </header>

        <div className="space-y-12 mb-32">
          {[
            { 
              title: 'Digital Transformation Strategy', 
              icon: <TrendingUp size={32} />,
              desc: 'Architecting the roadmap for your digital future, ensuring technology aligns with core business objectives.'
            },
            { 
              title: 'Governance & Risk Advisory', 
              icon: <ShieldCheck size={32} />,
              desc: 'Building robust frameworks that mitigate operational risks and ensure regulatory compliance globally.'
            },
            { 
              title: 'Organizational Development', 
              icon: <Settings size={32} />,
              desc: 'Optimizing human capital and internal processes to drive sustainable growth and agility.'
            },
            { 
              title: 'Technology Implementation', 
              icon: <LineChart size={32} />,
              desc: 'End-to-end support for the deployment of critical infrastructure and enterprise systems.'
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-12 rounded-[2.5rem] border-white/5 flex flex-col md:flex-row gap-8 items-center group cursor-pointer hover:border-blue-500/30 transition-colors"
            >
              <div className="w-20 h-20 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
              <div className="hidden md:block">
                <ArrowUpRight className="text-slate-600 group-hover:text-blue-500 transition-colors" size={32} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-24 text-center">
           <h2 className="text-4xl font-bold mb-8">Elevate Your Institution</h2>
           <p className="text-slate-400 max-w-2xl mx-auto mb-12">
             Our advisory services are bespoke, data-driven, and focused on long-term value creation.
           </p>
           <button className="px-10 py-5 bg-blue-600 rounded-full font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20">
             Consult with an Expert
           </button>
        </div>
      </div>
    </div>
  );
};

export default Consulting;
