import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Linkedin, Twitter, Youtube, Facebook, X } from 'lucide-react';

const TopBar: React.FC = () => {
  const [activePanel, setActivePanel] = useState<string | null>(null);

  const togglePanel = (panel: string) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  const contactInfo = [
    {
      id: 'phone',
      icon: Phone,
      label: 'Phone',
      value: '+255 745 326 627',
      href: 'tel:+255745326627',
    },
    {
      id: 'email',
      icon: Mail,
      label: 'Email',
      value: 'hello@ebanex.com',
      href: 'mailto:hello@ebanex.com',
    },
  ];

  const socialLinks = [
    {
      id: 'linkedin',
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
    },
    {
      id: 'twitter',
      icon: Twitter,
      label: 'Twitter',
      href: '#',
    },
    {
      id: 'youtube',
      icon: Youtube,
      label: 'YouTube',
      href: '#',
    },
    {
      id: 'facebook',
      icon: Facebook,
      label: 'Facebook',
      href: '#',
    },
  ];

  return (
    <>
      {/* Contact Info Panels */}
      <AnimatePresence>
        {activePanel === 'phone' && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-1/2 -translate-y-1/2 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-l border-slate-700 shadow-2xl"
          >
            <div className="p-4 flex items-center gap-3 min-w-[280px]">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full">
                <Phone size={18} className="text-white" />
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Phone</div>
                <a
                  href="tel:+255745326627"
                  className="text-white font-semibold hover:text-blue-400 transition-colors"
                >
                  +255 745 326 627
                </a>
              </div>
              <button
                onClick={() => setActivePanel(null)}
                className="ml-auto p-1 text-slate-400 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </motion.div>
        )}

        {activePanel === 'email' && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-1/2 -translate-y-1/2 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-l border-slate-700 shadow-2xl"
          >
            <div className="p-4 flex items-center gap-3 min-w-[280px]">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full">
                <Mail size={18} className="text-white" />
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Email</div>
                <a
                  href="mailto:hello@ebanex.com"
                  className="text-white font-semibold hover:text-blue-400 transition-colors"
                >
                  hello@ebanex.com
                </a>
              </div>
              <button
                onClick={() => setActivePanel(null)}
                className="ml-auto p-1 text-slate-400 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </motion.div>
        )}

        {activePanel === 'social' && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-1/2 -translate-y-1/2 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-l border-slate-700 shadow-2xl"
          >
            <div className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-xs text-slate-400 uppercase tracking-wide">Social Links</div>
                <button
                  onClick={() => setActivePanel(null)}
                  className="ml-auto p-1 text-slate-400 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    className="flex items-center justify-center w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full text-slate-300 hover:text-white transition-all duration-200"
                    title={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Side Icons */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2">
        {contactInfo.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => togglePanel(item.id)}
            className={`flex items-center justify-center w-8 h-8 rounded-full shadow-lg transition-all duration-200 ${
              activePanel === item.id
                ? 'bg-blue-600 text-white'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <item.icon size={16} />
          </motion.button>
        ))}

        <motion.button
          onClick={() => togglePanel('social')}
          className={`flex items-center justify-center w-8 h-8 rounded-full shadow-lg transition-all duration-200 ${
            activePanel === 'social'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex flex-col gap-0.5">
            <div className="w-0.5 h-0.5 bg-current rounded-full"></div>
            <div className="w-0.5 h-0.5 bg-current rounded-full"></div>
            <div className="w-0.5 h-0.5 bg-current rounded-full"></div>
          </div>
        </motion.button>
      </div>
    </>
  );
};

export default TopBar;
