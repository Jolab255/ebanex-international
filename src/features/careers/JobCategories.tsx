import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';

const categories = [
  {
    title: 'Professional Trainers',
    icon: <Users />,
    description: 'Expert instructors for cybersecurity, IT governance, and leadership development.',
    positions: 3
  },
  {
    title: 'Consulting Specialists',
    icon: <Briefcase />,
    description: 'Senior advisors for digital transformation and institutional strengthening.',
    positions: 2
  },
  {
    title: 'Graduate Programs',
    icon: <GraduationCap />,
    description: 'Internship and trainee opportunities for the next generation of professionals.',
    positions: 5
  }
];

const JobCategories: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-10 rounded-sm border-white/5 group hover:border-blue-500/50 transition-all"
            >
              <div className="w-14 h-14 bg-blue-500/10 rounded-sm flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-500 group-hover:text-black transition-all">
                {React.cloneElement(cat.icon as React.ReactElement, { size: 28 })}
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">
                {cat.title}
              </h3>
              <p className="text-white/50 text-sm font-light leading-relaxed mb-8">
                {cat.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">
                  {cat.positions} Open Positions
                </span>
                <div className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center text-white group-hover:border-blue-500 transition-all">
                  <ArrowRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
