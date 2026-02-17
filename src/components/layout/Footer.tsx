import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer className="bg-slate-950 border-t border-white/5 py-12 sm:py-16 lg:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
        <div className="col-span-2">
          <div className="text-xl sm:text-2xl font-bold font-heading mb-4 sm:mb-6">EBANEX<span className="text-purple-500">.</span></div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md leading-relaxed">
            Ebanex International is a global professional development institution.
            We build the capacity of people and organizations through elite training
            and strategic advisory.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 sm:mb-6 text-sm sm:text-base">Quick Links</h4>
          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-slate-400">
            <li><Link to="/training" className="hover:text-white transition-colors">Training Programs</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/cyber-lab" className="hover:text-white transition-colors">Cyber Lab</Link></li>
            <li><Link to="/consulting" className="hover:text-white transition-colors">Advisory</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 sm:mb-6 text-sm sm:text-base">Connect</h4>
          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-slate-400">
            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-500">
        <p>&copy; 2024 Ebanex International. All Rights Reserved.</p>
        <div className="flex gap-4 sm:gap-6 lg:gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
