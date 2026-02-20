import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Twitter, Youtube, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-slate-950 border-t border-white/10">
    {/* Main Footer Content */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
        {/* Brand Column */}
        <div className="lg:col-span-4">
          <div className="mb-6">
            <span className="text-2xl font-bold tracking-tight text-white">
              EBANEX<span className="text-blue-500">.</span>
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
            Ebanex International is a global professional development institution building the
            capacity of people and organizations through elite training and strategic advisory.
          </p>

          {/* Contact Information */}
          <div className="space-y-3">
            <div className="flex items-start gap-3 text-slate-400 text-sm">
              <MapPin size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
              <span>HQ: 19 Mori Street, Sinza, Dar es Salaam, Tanzania</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400 text-sm">
              <Phone size={16} className="text-blue-500 flex-shrink-0" />
              <span>+255 745 326 627 / +255 755 963 001</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400 text-sm">
              <Mail size={16} className="text-blue-500 flex-shrink-0" />
              <span>info@ebanex.com</span>
            </div>
          </div>
        </div>

        {/* Services Column */}
        <div className="lg:col-span-2 lg:col-start-6">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
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
                  className="text-slate-400 text-sm hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                >
                  {item.label}
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Column */}
        <div className="lg:col-span-2">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
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
                  className="text-slate-400 text-sm hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                >
                  {item.label}
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect Column */}
        <div className="lg:col-span-2">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
            Connect
          </h4>
          <ul className="space-y-3">
            {[
              { label: 'LinkedIn', icon: Linkedin, href: '#' },
              { label: 'Twitter', icon: Twitter, href: '#' },
              { label: 'YouTube', icon: Youtube, href: '#' },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-slate-400 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <item.icon size={14} className="text-blue-500" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Ebanex International. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
