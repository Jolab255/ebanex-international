import React from 'react';
import { Phone, Mail, Linkedin, Twitter, Youtube, Facebook } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 bg-white border-b-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-blue-600 font-medium">Welcome to</span>
            <span className="text-slate-900 font-semibold">Ebanex International</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:+255745326627" className="hidden sm:flex items-center gap-2">
              <Phone size={14} className="text-slate-950" />
              <span className="text-slate-950 font-semibold">+255 745 326 627</span>
            </a>

            <span className="hidden sm:block w-px h-4 bg-slate-300" />

            <a href="mailto:hello@ebanex.com" className="hidden sm:flex items-center gap-2">
              <Mail size={14} className="text-slate-950" />
              <span className="text-slate-950 font-semibold">hello@ebanex.com</span>
            </a>

            <span className="hidden sm:block w-px h-4 bg-slate-300" />

            <div className="flex items-center gap-3">
              <a href="#" className="text-slate-950 hover:text-blue-600 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="text-slate-950 hover:text-blue-600 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="text-slate-950 hover:text-blue-600 transition-colors">
                <Youtube size={16} />
              </a>
              <a href="#" className="text-slate-950 hover:text-blue-600 transition-colors">
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
