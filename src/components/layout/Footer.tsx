import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Twitter, Youtube, ArrowUpRight } from 'lucide-react';
import { Squares } from '../animations';

const Footer: React.FC = () => (
  <footer className="relative bg-[linear-gradient(135deg,#000000_50%,#00bfff_50%)] overflow-visible">
    {/* Background */}
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <Squares
        speed={0.13}
        squareSize={40}
        direction="diagonal"
        borderColor="rgba(255,255,255,0.15)"
        hoverFillColor="rgba(0,191,255,0.05)"
      />
    </div>

    {/* Section Decoration */}
    <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,191,255,0.05),transparent_70%)]" />

    {/* Main Footer Content */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
      <div 
        className="p-8 sm:p-12 border-[10px] border-black shadow-2xl relative overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)'
        }}
      >
        {/* Subtle inner decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00BFFF]/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <span 
                className="text-3xl font-black tracking-tighter uppercase font-heading bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #FFFFFF 0%, #00BFFF 50%, #FFFFFF 100%)",
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                EBANEX
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-sm font-medium">
              Ebanex International is a global professional development institution building the
              capacity of people and organizations through elite training and strategic advisory.
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-white/60 text-sm group">
                <div className="w-8 h-8 rounded-none border border-[#00BFFF]/20 flex items-center justify-center bg-[#00BFFF]/5 group-hover:border-[#00BFFF]/50 transition-colors">
                  <MapPin size={14} className="text-[#00BFFF]" />
                </div>
                <span className="pt-1">HQ: 19 Mori Street, Sinza, Dar es Salaam, Tanzania</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm group">
                <div className="w-8 h-8 rounded-none border border-[#00BFFF]/20 flex items-center justify-center bg-[#00BFFF]/5 group-hover:border-[#00BFFF]/50 transition-colors">
                  <Phone size={14} className="text-[#00BFFF]" />
                </div>
                <span>+255 745 326 627 / +255 755 963 001</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm group">
                <div className="w-8 h-8 rounded-none border border-[#00BFFF]/20 flex items-center justify-center bg-[#00BFFF]/5 group-hover:border-[#00BFFF]/50 transition-colors">
                  <Mail size={14} className="text-[#00BFFF]" />
                </div>
                <span>info@ebanex.com</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8 py-1.5 px-4 bg-white/5 inline-block border-l-2 border-[#00BFFF]">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Training Programs', to: '/training' },
                { label: 'Corporate Solutions', to: '/corporate-solutions' },
                { label: 'Advisory', to: '/consulting' },
                { label: 'Cyber Labs', to: '/cyber-lab' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-white/50 text-sm hover:text-[#00BFFF] transition-all duration-300 flex items-center gap-1 group font-bold tracking-tight"
                  >
                    {item.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#00BFFF]"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8 py-1.5 px-4 bg-white/5 inline-block border-l-2 border-[#00BFFF]">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', to: '/about' },
                { label: 'Partnerships', to: '/partnerships' },
                { label: 'Research', to: '/research' },
                { label: 'News & Events', to: '/news' },
                { label: 'Careers', to: '/careers' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-white/50 text-sm hover:text-[#00BFFF] transition-all duration-300 flex items-center gap-1 group font-bold tracking-tight"
                  >
                    {item.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#00BFFF]"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8 py-1.5 px-4 bg-white/5 inline-block border-l-2 border-[#00BFFF]">
              Connect
            </h4>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Youtube, href: '#', label: 'YouTube' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center text-white/50 hover:text-[#00BFFF] hover:border-[#00BFFF]/50 hover:bg-[#00BFFF]/5 transition-all duration-300 shadow-xl"
                  aria-label={item.label}
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-white/5 bg-black relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/40 uppercase tracking-widest font-black">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p>&copy; {new Date().getFullYear()} Ebanex International. All Rights Reserved.</p>
            <span className="hidden md:block text-white/10">|</span>
            <p>
              Developed by{' '}
              <a 
                href="https://wa.me/255765929374" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#00BFFF] hover:text-white transition-colors"
              >
                Jonah Technical Laboratory (Jolab)
              </a>
            </p>
          </div>
          <div className="flex items-center gap-8">
            <Link to="#" className="hover:text-[#00BFFF] transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-[#00BFFF] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
