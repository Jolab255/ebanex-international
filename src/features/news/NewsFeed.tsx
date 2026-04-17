import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    title: 'Upcoming Cybersecurity Cohort Q2 2026',
    date: 'April 20, 2026',
    category: 'Training',
    description: 'Registration is now open for our advanced Ethical Hacking & Threat Intelligence bootcamp.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800'
  },
  {
    title: 'Webinar: Digital Resilience in the Banking Sector',
    date: 'May 05, 2026',
    category: 'Webinar',
    description: 'Join our experts as they discuss the evolving threat landscape for financial institutions.',
    image: 'https://images.unsplash.com/photo-1591696208162-a97183024198?q=80&w=800'
  },
  {
    title: 'Ebanex to Present at Africa Cyber Security Conference',
    date: 'June 12, 2026',
    category: 'Conference',
    description: 'Our lead researchers will be sharing insights on regional threat intelligence trends.',
    image: 'https://images.unsplash.com/photo-1540575861501-7c00117f2404?q=80&w=800'
  }
];

const NewsFeed: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-blue-500" />
              <span className="text-blue-500 text-[10px] font-black tracking-[0.6em] uppercase">
                Pulse
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] font-black tracking-tighter leading-[0.9] text-white uppercase mb-8">
              News & <br />
              <span className="text-blue-500">Events</span>
            </h1>
          </motion.div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-sm overflow-hidden border-white/5 group hover:border-blue-500/30 transition-all flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest">
                    {news.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest mb-4">
                  <Calendar size={12} className="text-blue-500" />
                  {news.date}
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-blue-500 transition-colors">
                  {news.title}
                </h3>
                <p className="text-white/50 text-sm font-light leading-relaxed mb-8">
                  {news.description}
                </p>
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between group/link cursor-pointer">
                  <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Read More</span>
                  <ArrowRight size={16} className="text-blue-500 group-hover/link:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsFeed;
