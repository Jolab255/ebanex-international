import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, MoreHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAVIGATION_LINKS } from '../../constants';
import { cn } from '../../lib/utils';
import logo from '../../assets/ebanex-logo.png';
import { Squares } from '../animations';

const DROPDOWN_CONTENT = {
  'About Us': {
    overview: 'Ebanex International is a global leader in institutional strengthening and professional development, focusing on building high-performance organizations through evidence-based training and strategic advisory.',
    categories: [
      {
        title: 'Who We Are',
        items: [
          { label: 'Company Overview', path: '/about' },
          { label: 'Our Mission & Vision', path: '/about#mission' },
          { label: 'Strategic Focus', path: '/about#focus' },
          { label: 'Founders Message', path: '/about#founders' }
        ]
      },
      {
        title: 'Institutional Pillars',
        items: [
          { label: 'Core Values', path: '/about#values' },
          { label: 'Global Network', path: '/about#network' },
          { label: 'Strategic Partnerships', path: '/partnerships' }
        ]
      }
    ]
  },
  'Training Programs': {
    overview: 'Our curricula are industry-aligned, evidence-based, and designed to deliver immediate operational value for individuals and institutions.',
    categories: [
      {
        title: 'Cybersecurity',
        items: [
          { label: 'Awareness Programs', path: '/training/cybersecurity-awareness' },
          { label: 'Ethical Hacking', path: '/training/ethical-hacking' },
          { label: 'Incident Response', path: '/training/incident-response' }
        ]
      },
      {
        title: 'Digital Risk',
        items: [
          { label: 'Risk Management', path: '/training/digital-risk' },
          { label: 'Data Privacy', path: '/training/data-privacy' },
          { label: 'Compliance', path: '/training/compliance' }
        ]
      },
      {
        title: 'IT & Digital',
        items: [
          { label: 'Networking', path: '/training/networking' },
          { label: 'Cloud Computing', path: '/training/cloud-computing' },
          { label: 'AI Technologies', path: '/training/ai-tech' }
        ]
      },
      {
        title: 'Governance',
        items: [
          { label: 'IT Governance', path: '/training/it-governance' },
          { label: 'Audit & Control', path: '/training/internal-audit' }
        ]
      },
      {
        title: 'Leadership',
        items: [
          { label: 'Strategic Mgmt', path: '/training/strategic-thinking' },
          { label: 'Agile Leadership', path: '/training/leadership' }
        ]
      }
    ]
  },
  'Corporate Solutions': {
    overview: 'Tailored institutional strengthening programs designed for enterprise-level resilience and operational excellence.',
    categories: [
      {
        title: 'Solutions',
        items: [
          { label: 'Enterprise Training', path: '/corporate-solutions' },
          { label: 'Executive Mentorship', path: '/corporate-solutions#mentorship' },
          { label: 'Institutional Growth', path: '/corporate-solutions#growth' }
        ]
      },
      {
        title: 'Industries',
        items: [
          { label: 'Financial Services', path: '/corporate-solutions#finance' },
          { label: 'Government', path: '/corporate-solutions#government' },
          { label: 'Energy & Mining', path: '/corporate-solutions#energy' }
        ]
      }
    ]
  }
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileCategoryExpanded, setMobileCategoryExpanded] = useState<string | null>(null);
  const [showHiddenLinks, setShowHiddenLinks] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
    setMobileCategoryExpanded(null);
    setShowHiddenLinks(false);
  }, [location.pathname]);

  const handleDropdownClick = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const toggleMobileExpanded = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
    setMobileCategoryExpanded(null);
  };

  const toggleMobileCategory = (title: string) => {
    setMobileCategoryExpanded(mobileCategoryExpanded === title ? null : title);
  };

  // Split links: First 6 visible, others hidden under "More"
  const visibleLinks = NAVIGATION_LINKS.slice(0, 6);
  const hiddenLinks = NAVIGATION_LINKS.slice(6);

  const renderNavLink = (link: typeof NAVIGATION_LINKS[0], index: number) => {
    const hasDropdown = DROPDOWN_CONTENT[link.label as keyof typeof DROPDOWN_CONTENT];
    const isActive = location.pathname === link.path;
    const isEnabled = index < 2; // Only About Us and Training Programs are enabled

    if (!isEnabled) {
      return (
        <div key={link.path} className="relative h-full flex items-center">
          <span
            className="text-[9px] xl:text-[10px] font-bold tracking-tight uppercase text-white/30 cursor-not-allowed whitespace-nowrap"
            title="Coming Soon"
          >
            {link.label}
          </span>
        </div>
      );
    }

    return (
      <div key={link.path} className="relative h-full flex items-center">
        {hasDropdown ? (
          <button
            onClick={(e) => { e.stopPropagation(); handleDropdownClick(link.label); }}
            className={cn(
              "text-[9px] xl:text-[10px] font-bold tracking-tight uppercase transition-colors whitespace-nowrap flex items-center gap-1 focus:outline-none",
              isActive || activeDropdown === link.label ? 'text-[#00BFFF]' : 'text-white hover:text-[#00BFFF]'
            )}
          >
            {link.label}
            <ChevronDown size={10} className={cn("opacity-70 transition-transform duration-200", activeDropdown === link.label ? 'rotate-180' : '')} />
          </button>
        ) : (
          <Link
            to={link.path}
            className={cn(
              "text-[9px] xl:text-[10px] font-bold tracking-tight uppercase transition-colors whitespace-nowrap focus:outline-none",
              isActive ? 'text-[#00BFFF]' : 'text-white hover:text-[#00BFFF]'
            )}
          >
            {link.label}
          </Link>
        )}

        {hasDropdown && activeDropdown === link.label && (
          <div className="fixed top-[64px] sm:top-[80px] lg:top-[96px] left-[10px] right-[10px] w-[calc(100vw-20px)] max-h-[calc(100vh-120px)] z-[110] flex flex-col bg-black border border-[#00BFFF]/20 rounded-none shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div className="p-4 lg:p-6 bg-black shrink-0 border-b border-[#00BFFF]/20">
              <div className="max-w-7xl mx-auto w-full">
                <h4 className="text-[9px] font-black text-[#00BFFF] uppercase tracking-[0.3em] mb-1">Overview</h4>
                <p className="text-xs text-slate-400 font-medium leading-relaxed max-w-4xl">
                  {DROPDOWN_CONTENT[link.label as keyof typeof DROPDOWN_CONTENT].overview}
                </p>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto relative py-6 lg:py-10 px-4 lg:px-8 bg-black">
              <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <Squares speed={0.1} squareSize={25} direction="diagonal" borderColor="rgba(255,255,255,0.05)" hoverFillColor="rgba(255,255,255,0.03)" />
              </div>
              <div className="relative z-10 max-w-7xl mx-auto">
                <div className={cn("grid gap-4 lg:gap-6", link.label === 'Training Programs' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5' : 'grid-cols-1 md:grid-cols-2')}>
                  {DROPDOWN_CONTENT[link.label as keyof typeof DROPDOWN_CONTENT].categories.map((category, idx) => (
                    <div key={idx} className="group relative h-full">
                      <div className={`absolute inset-0 bg-[#00bfff] transform ${idx % 2 === 0 ? 'rotate-1' : '-rotate-1'} group-hover:rotate-0 transition-transform duration-300`} />
                      <div className="relative p-4 lg:p-5 border-[4px] border-black shadow-lg transition-all duration-300 h-full flex flex-col" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                        <h3 className="text-[10px] font-black text-[#00BFFF] uppercase tracking-[0.15em] flex items-center gap-2 mb-4">
                          <span className="w-1.5 h-1.5 bg-[#00BFFF]" />
                          {category.title}
                        </h3>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <Link to={item.path} className="text-[13px] text-white font-normal hover:text-[#00BFFF] hover:translate-x-1 transition-all block py-0.5">
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="w-full z-[100] py-0 bg-black backdrop-blur-2xl border-b border-[#00BFFF]/10 sticky top-0" role="navigation" aria-label="Main Navigation">
      <div className="w-full px-4 sm:px-6 flex items-center h-16 sm:h-20 lg:h-24">
        {/* Logo Shield */}
        <div className="relative z-30 bg-black h-full flex items-center pr-20 sm:pr-28 shrink-0 overflow-hidden">
          <Link to="/" className="flex items-center h-full group transition-opacity duration-300" aria-label="Ebanex International Home">
            <img src={logo} alt="" className="h-full py-1 w-auto object-contain transition-transform duration-300 group-hover:scale-105 brightness-110 scale-[2.5] origin-left" />
          </Link>
        </div>

        {/* Desktop Nav Area */}
        <div className="hidden lg:flex flex-1 items-center justify-end h-full relative overflow-hidden">
          <motion.div 
            className="flex items-center gap-4 xl:gap-8 h-full pr-4"
            animate={{ x: showHiddenLinks ? -150 : 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 xl:gap-5 h-full shrink-0">
              <Link to="/" className={cn("text-[9px] xl:text-[10px] font-black tracking-[0.1em] uppercase transition-colors whitespace-nowrap", location.pathname === '/' ? 'text-[#00BFFF]' : 'text-white hover:text-[#00BFFF]')}>Home</Link>
              {visibleLinks.map((link, index) => renderNavLink(link, index))}
            </div>

            <AnimatePresence>
              {showHiddenLinks && (
                <motion.div
                  key="hidden-links"
                  initial={{ width: 0, opacity: 0, x: 20 }}
                  animate={{ width: 'auto', opacity: 1, x: 0 }}
                  exit={{ width: 0, opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-3 xl:gap-5 overflow-hidden shrink-0 border-l border-[#00BFFF]/20 pl-4 ml-1"
                >
                  {hiddenLinks.map((link, index) => renderNavLink(link, index + 6))}
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={(e) => { e.stopPropagation(); setShowHiddenLinks(!showHiddenLinks); }}
              className={cn("p-2 hover:text-[#00BFFF] transition-colors focus:outline-none shrink-0", showHiddenLinks ? 'text-[#00BFFF]' : 'text-white')}
              aria-label="Toggle more links"
            >
              <motion.div animate={{ rotate: showHiddenLinks ? 90 : 0 }} transition={{ duration: 0.3 }}>
                <MoreHorizontal size={20} />
              </motion.div>
            </button>
          </motion.div>
        </div>

        {/* Contact Button Shield */}
        <div className="relative z-30 bg-black h-full flex items-center pl-6 sm:pl-8 shrink-0">
          <Link to="/contact" className="px-6 py-3 bg-[#00BFFF] hover:bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-none transition-all shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:scale-95">
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden ml-auto text-white p-2 focus:outline-none z-30" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 z-[100] bg-black flex flex-col"
          >
            <div className="flex items-center justify-between px-4 h-16 border-b border-white/5">
              <img src={logo} alt="" className="h-10 w-auto brightness-110" />
              <button className="text-white p-2" onClick={() => setIsOpen(false)} aria-label="Close menu">
                <X size={28} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-8 px-6 space-y-4">
              <Link to="/" className={cn("block py-3 px-4 text-sm font-black uppercase tracking-widest", location.pathname === '/' ? 'bg-[#00BFFF] text-black' : 'text-white border-b border-white/5')}>Home</Link>
              {NAVIGATION_LINKS.map((link, index) => {
                const hasDropdown = DROPDOWN_CONTENT[link.label as keyof typeof DROPDOWN_CONTENT];
                const isExpanded = mobileExpanded === link.label;
                const isEnabled = index < 2;

                if (!isEnabled) {
                  return (
                    <div key={link.path} className="block py-3 px-4 text-sm font-black uppercase tracking-widest text-white/20 border-b border-white/5 cursor-not-allowed">
                      {link.label}
                    </div>
                  );
                }

                return (
                  <div key={link.path} className="space-y-2">
                    {hasDropdown ? (
                      <>
                        <button onClick={() => toggleMobileExpanded(link.label)} className={cn("w-full flex items-center justify-between py-3 px-4 text-sm font-black uppercase tracking-widest transition-colors", isExpanded ? 'bg-[#00BFFF] text-black' : 'text-white border-b border-white/5')}>
                          {link.label}
                          <ChevronDown size={18} className={cn("transition-transform duration-200", isExpanded ? 'rotate-180' : '')} />
                        </button>
                        {isExpanded && (
                          <div className="mt-4 ml-2 border-l border-[#00BFFF]/20 space-y-2">
                            {DROPDOWN_CONTENT[link.label as keyof typeof DROPDOWN_CONTENT].categories.map((cat) => {
                              const isCatExpanded = mobileCategoryExpanded === cat.title;
                              return (
                                <div key={cat.title}>
                                  <button onClick={() => toggleMobileCategory(cat.title)} className="w-full flex items-center justify-between py-3 px-6 text-[10px] font-black uppercase tracking-widest text-[#00BFFF]">
                                    {cat.title}
                                    <ChevronRight size={14} className={cn("transition-transform", isCatExpanded ? 'rotate-90' : '')} />
                                  </button>
                                  {isCatExpanded && (
                                    <div className="ml-6 space-y-1 mb-4">
                                      {cat.items.map((item) => (
                                        <Link key={item.path} to={item.path} className="block py-3 px-4 text-[11px] font-bold uppercase text-slate-400 active:text-[#00BFFF]">{item.label}</Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link to={link.path} className={cn("block py-3 px-4 text-sm font-black uppercase tracking-widest", location.pathname === link.path ? 'bg-[#00BFFF] text-black' : 'text-white border-b border-white/5')}>{link.label}</Link>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="p-8 bg-black border-t border-white/5">
              <Link to="/contact" className="block w-full py-4 bg-[#00BFFF] text-black text-center font-black uppercase tracking-widest shadow-[5px_5px_0px_0px_rgba(255,255,255,0.1)]">Contact Expert</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
