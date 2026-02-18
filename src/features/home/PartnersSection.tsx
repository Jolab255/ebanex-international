import React from 'react';
import { motion } from 'framer-motion';

const PartnersSection: React.FC = () => {
  const partners = [
    {
      name: 'CRDB Bank',
      initials: 'CRDB',
      url: 'https://www.crdbbank.co.tz',
    },
    {
      name: 'NMB Bank',
      initials: 'NMB',
      url: 'https://www.nmbbank.co.tz',
    },
    {
      name: 'Tanzania Breweries',
      initials: 'TBL',
      url: 'https://www.tbl.co.tz',
    },
    {
      name: 'MIC Tanzania',
      initials: 'MIC',
      url: 'https://www.mic.co.tz',
    },
    {
      name: 'Twiga Cement',
      initials: 'TCCL',
      url: 'https://www.twiga-cement.com',
    },
    {
      name: 'Tanzania Tourist Board',
      initials: 'TTB',
      url: 'https://www.tanzaniatouristboard.com',
    },
    {
      name: 'Tanzania Revenue Authority',
      initials: 'TRA',
      url: 'https://www.tra.go.tz',
    },
    {
      name: 'TPDC',
      initials: 'TPDC',
      url: 'https://www.tpdc.co.tz',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 border-b border-white/5 bg-slate-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-purple-500 font-bold uppercase tracking-[0.3em] text-sm block mb-4"
          >
            More than 50+ brands trust us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-black leading-none uppercase tracking-tighter text-[clamp(0.6rem,7vw,5rem)] bg-center bg-no-repeat bg-clip-text text-transparent select-none filter brightness-125 animate-bg-pan whitespace-nowrap overflow-hidden text-ellipsis mb-4"
            style={{
              backgroundImage:
                "url('https://assets.avant.org.au/cdf6134c-01d7-0292-26f5-2f5cf1db96f8/4645803d-67d3-4662-9f18-816e532b82a1/Responding-to-a-cyber-security-incident.jpg')",
              WebkitBackgroundClip: 'text',
            }}
          >
            T r u s t e d - P a r t n e r s
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-slate-400 max-w-2xl mx-auto text-center text-base sm:text-lg"
          >
            From innovative startups to Fortune 500 companies, our client list spans a spectrum of
            sectors, each with unique challenges that we've successfully navigated.
          </motion.p>
        </div>

        {/* Partners Grid - Simple and Clean */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {partners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(168, 85, 247, 0.5)' }}
              className="group flex items-center justify-center h-24 sm:h-28 rounded-xl border border-white/10 bg-slate-900/50 hover:bg-slate-800/50 transition-all duration-300 p-4"
            >
              <span className="text-2xl sm:text-3xl font-black text-white opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                {partner.initials}
              </span>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 mx-auto flex items-center gap-2 px-8 py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/5 hover:border-purple-500/50 transition-all duration-300"
        >
          See all partners
        </motion.button>
      </div>
    </section>
  );
};

export default PartnersSection;
