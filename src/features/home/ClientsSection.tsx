import React from 'react';
import { motion } from 'framer-motion';
import { Building2, HeartHandshake, Factory, Landmark, User, Briefcase } from 'lucide-react';

interface ClientCardProps {
  client: {
    name: string;
    category: string;
    description: string;
    icon: React.ReactNode;
    color: string;
  };
  index: number;
}

const ClientCard: React.FC<ClientCardProps> = ({ client, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className="group"
    >
      {/* Card Container */}
      <div className="relative overflow-hidden rounded-2xl bg-slate-900 border border-white/10 hover:border-purple-500/50 transition-all duration-300 h-full">
        {/* Top Bar with Gradient */}
        <div className="h-2 w-full" style={{ background: client.color }} />

        <div className="p-6">
          {/* Icon */}
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
            style={{ background: client.color }}
          >
            <div className="text-white">{client.icon}</div>
          </div>

          {/* Category Label */}
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-3"
            style={{ background: client.color }}
          >
            {client.category}
          </span>

          {/* Client Name */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
            {client.name}
          </h3>

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed">{client.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ClientsSection: React.FC = () => {
  const clients = [
    {
      name: 'Governments',
      category: 'Public Sector',
      description:
        'Partnering with national and local government bodies to build institutional capacity and drive digital transformation.',
      icon: <Landmark size={28} strokeWidth={1.5} />,
      color: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #06b6d4 100%)',
    },
    {
      name: 'Corporates',
      category: 'Private Sector',
      description:
        'Empowering private sector organizations with cutting-edge training and strategic advisory.',
      icon: <Building2 size={28} strokeWidth={1.5} />,
      color: 'linear-gradient(135deg, #3730a3 0%, #6366f1 50%, #8b5cf6 100%)',
    },
    {
      name: 'NGOs & Agencies',
      category: 'Development',
      description:
        'Supporting NGOs and development agencies in capacity building and organizational strengthening.',
      icon: <HeartHandshake size={28} strokeWidth={1.5} />,
      color: 'linear-gradient(135deg, #047857 0%, #10b981 50%, #34d399 100%)',
    },
    {
      name: 'Industrials',
      category: 'Manufacturing',
      description:
        'Serving industrial, mining, and manufacturing companies with specialized training programs.',
      icon: <Factory size={28} strokeWidth={1.5} />,
      color: 'linear-gradient(135deg, #7c2d12 0%, #ea580c 50%, #f97316 100%)',
    },
    {
      name: 'Financial',
      category: 'Services',
      description:
        'Delivering comprehensive solutions to financial institutions and service sector organizations.',
      icon: <Briefcase size={28} strokeWidth={1.5} />,
      color: 'linear-gradient(135deg, #14532d 0%, #16a34a 50%, #22c55e 100%)',
    },
    {
      name: 'Professionals',
      category: 'Individuals',
      description:
        'Equipping individual professionals with industry-recognized certifications and skills.',
      icon: <User size={28} strokeWidth={1.5} />,
      color: 'linear-gradient(135deg, #831843 0%, #db2777 50%, #ec4899 100%)',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-950 relative overflow-hidden border-t border-white/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-black leading-none uppercase tracking-tighter text-[clamp(0.6rem,7vw,5rem)] bg-center bg-no-repeat bg-clip-text text-transparent select-none filter brightness-125 animate-bg-pan whitespace-nowrap overflow-hidden text-ellipsis"
            style={{
              backgroundImage:
                "url('https://assets.avant.org.au/cdf6134c-01d7-0292-26f5-2f5cf1db96f8/4645803d-67d3-4662-9f18-816e532b82a1/Responding-to-a-cyber-security-incident.jpg')",
              WebkitBackgroundClip: 'text',
            }}
          >
            O u r - C l i e n t s
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6"
          >
            <span className="text-purple-500 font-bold uppercase tracking-[0.4em] text-[clamp(0.875rem,2vw,1rem)] block">
              Who We Serve
            </span>
          </motion.div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <ClientCard key={index} client={client} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
