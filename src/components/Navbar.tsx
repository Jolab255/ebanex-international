import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { NAVIGATION_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`w-full z-40 transition-all duration-500 sticky top-0 ${
        scrolled
          ? 'py-3 bg-slate-950 shadow-lg border-b border-white/10'
          : 'py-4 bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 ${
              scrolled ? 'bg-blue-500' : 'bg-slate-950'
            }`}
          >
            <ShieldCheck className="text-white w-4 h-4 sm:w-6 sm:h-6" />
          </div>
          <span
            className={`text-xl sm:text-2xl font-bold font-heading tracking-tight ${
              scrolled ? 'text-white' : 'text-slate-900'
            }`}
          >
            EBANEX<span className="text-blue-500">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? 'text-blue-500'
                  : scrolled
                    ? 'text-slate-300 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
              scrolled
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-slate-950 text-white hover:bg-blue-500'
            }`}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden ${scrolled ? 'text-white' : 'text-slate-800'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-slate-950 transition-transform duration-500 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-xl sm:text-2xl font-heading font-semibold text-white hover:text-blue-500"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-8 py-3 bg-blue-500 text-white rounded-full font-bold hover:bg-blue-600"
          >
            Contact Expert
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
