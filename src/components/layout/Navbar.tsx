import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_LINKS } from '../../constants';
import logo from '../../assets/ebanex-logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="w-full z-40 py-1 bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-white/10 sticky top-[36px]">
      <div className="w-full px-4 sm:px-6 flex items-center">
        <Link
          to="/"
          className="flex items-center group transition-opacity duration-300 shrink-0 -my-3"
        >
          <img
            src={logo}
            alt="Ebanex Logo"
            className="h-24 sm:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-end">
          <Link
            to="/"
            className={`text-xs font-semibold tracking-tight uppercase transition-colors whitespace-nowrap ${location.pathname === '/' ? 'text-blue-500' : 'text-slate-300 hover:text-white'
              }`}
          >
            Home
          </Link>
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs font-semibold tracking-tight uppercase transition-colors whitespace-nowrap ${location.pathname === link.path
                  ? 'text-blue-500'
                  : 'text-slate-300 hover:text-white'
                }`}
            >
              {link.label}
            </Link>
          ))}

        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-slate-950 transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <Link
            to="/"
            className="text-xl sm:text-2xl font-heading font-semibold text-white hover:text-blue-500"
          >
            Home
          </Link>
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
