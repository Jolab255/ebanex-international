import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, ShieldCheck, Settings, LineChart } from 'lucide-react';

const Consulting: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <header className="max-w-3xl mb-12 sm:mb-16 lg:mb-24">
          <h1 className="text-[clamp(0.75rem,5vw,3.75rem)] font-bold font-heading mb-6 sm:mb-8 whitespace-nowrap overflow-hidden text-ellipsis">
            Strategic <span className="text-blue-500">Advisory.</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-400">
            We partner with governments and enterprises to navigate the intricacies of digital
            transformation, governance, and institutional strengthening.
          </p>
        </header>

        <div className="space-y-12 mb-32">
          {[
            {
              title: 'Digital Transformation Strategy',
              icon: <TrendingUp size={32} />,
              desc: 'Architecting the roadmap for your digital future, ensuring technology aligns with core business objectives.',
            },
            {
              title: 'Governance & Risk Advisory',
              icon: <ShieldCheck size={32} />,
              desc: 'Building robust frameworks that mitigate operational risks and ensure regulatory compliance globally.',
            },
            {
              title: 'Organizational Development',
              icon: <Settings size={32} />,
              desc: 'Optimizing human capital and internal processes to drive sustainable growth and agility.',
            },
            {
              title: 'Technology Implementation',
              icon: <LineChart size={32} />,
              desc: 'End-to-end support for the deployment of critical infrastructure and enterprise systems.',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-[2.5rem] border-white/5 flex flex-col md:flex-row gap-6 sm:gap-8 items-center group cursor-pointer hover:border-blue-500/30 transition-colors"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform shrink-0">
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-sm sm:text-base text-slate-400">{item.desc}</p>
              </div>
              <div className="hidden md:block">
                <ArrowUpRight
                  className="text-slate-600 group-hover:text-blue-500 transition-colors"
                  size={32}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 xl:p-24 text-center">
          <h2 className="text-[clamp(0.85rem,4vw,2.5rem)] font-bold mb-6 sm:mb-8 whitespace-nowrap overflow-hidden text-ellipsis px-4">
            Elevate Your Institution
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-8 sm:mb-12">
            Our advisory services are bespoke, data-driven, and focused on long-term value creation.
          </p>
          <button className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-blue-600 rounded-full font-bold text-sm sm:text-base hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20">
            Consult with an Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default Consulting;
