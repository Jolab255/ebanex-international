import React from 'react';
import { Phone, Mail, Linkedin, Twitter, Youtube, Facebook } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-slate-950 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-blue-500 font-medium">Welcome to</span>
            <span className="text-white font-semibold">Ebanex International</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="tel:+255745326627"
              className="hidden sm:flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <Phone size={14} className="text-blue-500" />
              <span>+255 745 326 627</span>
            </a>

            <a
              href="mailto:hello@ebanex.com"
              className="hidden sm:flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <Mail size={14} className="text-blue-500" />
              <span>hello@ebanex.com</span>
            </a>

            <div className="flex items-center gap-3 border-l border-white/10 pl-6">
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
                <Youtube size={16} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
