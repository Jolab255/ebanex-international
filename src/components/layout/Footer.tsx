
import React from 'react';
import { PlayCircle } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-slate-950 border-t border-white/5 py-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="text-2xl font-bold font-heading mb-6">EBANEX<span className="text-purple-500">.</span></div>
          <p className="text-slate-400 max-w-md leading-relaxed">
            Ebanex International is a global professional development institution. 
            We build the capacity of people and organizations through elite training 
            and strategic advisory.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-slate-400">
            <li><a href="#/training" className="hover:text-white transition-colors">Training Programs</a></li>
            <li><a href="#/about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#/cyber-lab" className="hover:text-white transition-colors">Cyber Lab</a></li>
            <li><a href="#/consulting" className="hover:text-white transition-colors">Advisory</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Connect</h4>
          <ul className="space-y-4 text-slate-400">
            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
        <p>&copy; 2024 Ebanex International. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
