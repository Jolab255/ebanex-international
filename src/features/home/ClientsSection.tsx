import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  Building2,
  HeartHandshake,
  Factory,
  Landmark,
  User,
  Briefcase,
  ArrowUpRight,
} from 'lucide-react';

const ClientsSection: React.FC = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [5, -5]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [-3, 3]);

  const clients = [
    {
      name: 'Governments',
      category: 'Public Sector',
      description:
        'Partnering with national and local government bodies to build institutional capacity.',
      icon: Landmark,
      image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=800',
      accent: '#3b82f6',
    },
    {
      name: 'Corporates',
      category: 'Private Sector',
      description: 'Empowering private sector organizations with cutting-edge training.',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800',
      accent: '#8b5cf6',
    },
    {
      name: 'NGOs & Agencies',
      category: 'Development',
      description: 'Supporting NGOs and development agencies in capacity building.',
      icon: HeartHandshake,
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800',
      accent: '#10b981',
    },
    {
      name: 'Industrials',
      category: 'Manufacturing',
      description: 'Serving industrial, mining, and manufacturing companies.',
      icon: Factory,
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=800',
      accent: '#f97316',
    },
    {
      name: 'Financial',
      category: 'Services',
      description: 'Delivering comprehensive solutions to financial institutions.',
      icon: Briefcase,
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800',
      accent: '#22c55e',
    },
    {
      name: 'Professionals',
      category: 'Individuals',
      description: 'Equipping individual professionals with certifications.',
      icon: User,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800',
      accent: '#ec4899',
    },
  ];

  const ClientCard: React.FC<{ client: (typeof clients)[0]; index: number }> = ({
    client,
    index,
  }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: '-100px' });
    const Icon = client.icon;

    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="group relative"
      >
        <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] overflow-hidden cursor-pointer">
          {/* Masked Image Background */}
          <div className="absolute inset-0">
            <motion.img
              src={client.image}
              alt={client.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              style={{
                maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
              }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          </div>

          {/* Accent Line */}
          <motion.div
            className="absolute left-0 top-0 w-1 h-full"
            style={{ backgroundColor: client.accent }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
          />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            {/* Category Tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
              className="flex items-center gap-2 mb-4"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${client.accent}20` }}
              >
                <Icon size={18} style={{ color: client.accent }} />
              </div>
              <span
                className="text-[10px] font-bold uppercase tracking-[0.2em]"
                style={{ color: client.accent }}
              >
                {client.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
              className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all duration-300"
            >
              {client.name}
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.6 }}
              className="text-slate-400 text-sm leading-relaxed max-w-xs"
            >
              {client.description}
            </motion.p>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.15 + 0.7 }}
              className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300"
            >
              <ArrowUpRight className="w-4 h-4 text-white/60 group-hover:text-slate-950 transition-colors duration-300" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 lg:py-40 bg-slate-950 relative overflow-hidden"
    >
      {/* Floating Background Elements */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute -left-20 top-1/4 w-96 h-96 bg-purple-500/5 blur-[100px] rounded-full"
      />
      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        className="absolute -right-20 bottom-1/4 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute left-1/3 top-1/2 w-64 h-64 bg-fuchsia-500/5 blur-[100px] rounded-full"
      />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 sm:mb-24 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-gradient-to-r from-purple-500 to-transparent" />
              <span className="text-purple-400 text-[10px] font-black tracking-[0.4em] uppercase">
                Who We Serve
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Trusted by Industry
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400">
                Leaders Worldwide
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-md lg:text-right"
          >
            From innovative startups to Fortune 500 companies, our client list spans sectors, each
            with unique challenges we've navigated.
          </motion.p>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <motion.div
          style={{ x: y2 }}
          className="flex gap-6 px-4 sm:px-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
        >
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="flex-shrink-0 w-[85vw] sm:w-[60vw] lg:w-[40vw] snap-center"
            >
              <ClientCard client={client} index={index} />
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {clients.map((_, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="w-8 h-1 rounded-full bg-white/10"
            />
          ))}
        </div>
      </div>

      {/* Bottom Stats */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 mt-16 sm:mt-24 relative z-10"
      >
        <div className="flex flex-wrap justify-center gap-12 sm:gap-20">
          {[
            { number: '50+', label: 'Global Clients' },
            { number: '15+', label: 'Industries' },
            { number: '30+', label: 'Countries' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-slate-500 text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Hide Scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;
