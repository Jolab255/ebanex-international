import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, MoreHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { NAVIGATION_LINKS } from '../../constants';
import { cn } from '../../lib/utils';
import logo from '../../assets/ebanex-logo.png';
import { Squares } from '../animations';

const DROPDOWN_CONTENT = {
  'Training Programs': {
    overview: 'Ebanex International delivers industry-aligned training programs designed to develop technical competence, leadership capability, and institutional effectiveness across sectors.',
    categories: [
      {
        title: 'Professional Certification Programs',
        items: [
          { label: 'CISA Preparation', path: '/training/cisa' },
          { label: 'CISM Preparation', path: '/training/cism' },
          { label: 'CISSP Preparation', path: '/training/cissp' },
          { label: 'CEH Preparation', path: '/training/ceh' },
          { label: 'CDPSE Preparation', path: '/training/cdpse' },
          { label: 'CIA Preparation', path: '/training/cia' },
          { label: 'CRMA Preparation', path: '/training/crma' },
          { label: 'Cisco CCNA/CCNP Preparation', path: '/training/cisco' }
        ]
      },
      {
        title: 'Practical & Hands-On Workshops & Masterclasses',
        items: [
          { label: 'Ethical Hacking & Threat Intelligence', path: '/training/ethical-hacking' },
          { label: 'Incident Response Training', path: '/training/incident-response' },
          { label: 'Networking & Infrastructure', path: '/training/networking' },
          { label: 'Cloud Computing & Virtualization', path: '/training/cloud-computing' },
          { label: 'AI & Emerging Technologies', path: '/training/ai-tech' },
          { label: 'Systems Administration', path: '/training/systems-admin' },
          { label: 'Digital Risk Management', path: '/training/digital-risk' },
          { label: 'Data Privacy & Protection', path: '/training/data-privacy' }
        ]
      },
      {
        title: 'Executive & Awareness Programs',
        items: [
          { label: 'Cybersecurity Awareness Programs', path: '/training/cybersecurity-awareness' },
          { label: 'IT Governance & Digital Governance', path: '/training/it-governance' },
          { label: 'Enterprise Risk Management', path: '/training/risk-management' },
          { label: 'Internal Audit & Assurance', path: '/training/internal-audit' },
          { label: 'Regulatory Compliance & Standards', path: '/training/compliance' },
          { label: 'Digital Transformation Skills', path: '/training/digital-transformation' },
          { label: 'Leadership & Management Skills', path: '/training/leadership' },
          { label: 'Strategic Thinking & Decision Making', path: '/training/strategic-thinking' },
          { label: 'Communication & Workplace Effectiveness', path: '/training/communication' },
          { label: 'Team Development & Collaboration', path: '/training/team-development' }
        ]
      }
    ]
  },
  'Corporate Solutions': {
    overview: 'Tailored institutional strengthening programs designed for enterprise-level resilience and operational excellence.',
    categories: []
  }
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileCategoryExpanded, setMobileCategoryExpanded] = useState<string | null>(null);
  const [navBottom, setNavBottom] = useState(0);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    const updateNavBottom = () => {
      if (navRef.current) {
        setNavBottom(navRef.current.getBoundingClientRect().bottom);
      }
    };
    updateNavBottom();
    window.addEventListener('scroll', updateNavBottom);
    window.addEventListener('resize', updateNavBottom);
    return () => {
      window.removeEventListener('scroll', updateNavBottom);
      window.removeEventListener('resize', updateNavBottom);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
    setMobileCategoryExpanded(null);
  }, [location.pathname]);

  // Handle Scroll Lock when menus are open
  useEffect(() => {
    const isLocked = isOpen || activeDropdown !== null;
    if (isLocked) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      lenis?.stop();
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      lenis?.start();
    };
  }, [isOpen, activeDropdown, lenis]);

  const handleDropdownClick = (label: string) => {
    if (navRef.current) {
      setNavBottom(navRef.current.getBoundingClientRect().bottom);
    }
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const toggleMobileExpanded = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
    setMobileCategoryExpanded(null);
  };

  const toggleMobileCategory = (title: string) => {
    setMobileCategoryExpanded(mobileCategoryExpanded === title ? null : title);
  };

  const visibleLinks = NAVIGATION_LINKS.slice(0, 5);
  const hiddenLinks = NAVIGATION_LINKS.slice(5);

  const renderNavLink = (link: typeof NAVIGATION_LINKS[0], index: number) => {
    const hasDropdown = DROPDOWN_CONTENT[link.label as keyof typeof DROPDOWN_CONTENT];
    const isActive = location.pathname === link.path;
    
    // Inactive tabs based on your request
    const isInactive = index >= 4; 

    if (isInactive) return null;

    return (
      <div key={link.path} className="relative h-full flex items-center">
        {hasDropdown ? (
          <button
            onClick={(e) => { e.stopPropagation(); handleDropdownClick(link.label); }}
            className={cn(
              "text-[10px] xl:text-[11px] font-bold tracking-tight uppercase transition-colors whitespace-nowrap flex items-center gap-1 focus:outline-none",
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
              "text-[10px] xl:text-[11px] font-bold tracking-tight uppercase transition-colors whitespace-nowrap focus:outline-none",
              isActive ? 'text-[#00BFFF]' : 'text-white hover:text-[#00BFFF]'
            )}
          >
            {link.label}
          </Link>
        )}
      </div>
    );
  };

  return (
    <>
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[160] bg-[#020a1a]/85 backdrop-blur-[3px] pointer-events-auto cursor-pointer" 
            onClick={(e) => {
              e.stopPropagation();
              setActiveDropdown(null);
            }}
          />
        )}
      </AnimatePresence>

      <nav
        ref={navRef}
        className="w-full z-[200] py-0 bg-black backdrop-blur-2xl border-b border-[#00BFFF]/10 fixed top-0 left-0"        
        role="navigation"
        aria-label="Main Navigation"
        onClick={() => setActiveDropdown(null)}
      >
        <div
          className="w-full px-4 sm:px-6 flex items-center h-16 sm:h-20 lg:h-24 relative z-[160]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Logo Shield */}
          <div className="relative z-50 bg-black h-full flex items-center pr-28 sm:pr-32 shrink-0 overflow-hidden">
            <Link to="/" className="flex items-center h-full group transition-opacity duration-300" aria-label="Ebanex International Home">
              <img src={logo} alt="" className="h-full w-auto object-contain transition-transform duration-300 brightness-110 scale-[2.5] origin-left" />
            </Link>
          </div>

          {/* Desktop Nav Area */}
          <div className="hidden lg:flex flex-1 items-center justify-center h-full relative overflow-hidden pr-2">
            <div className="flex items-center gap-4 xl:gap-8 h-full">
              <div className="flex items-center gap-3 xl:gap-5 h-full shrink-0">
                <Link to="/" className={cn("text-[10px] xl:text-[11px] font-black tracking-[0.1em] uppercase transition-colors whitespace-nowrap", location.pathname === '/' ? 'text-[#00BFFF]' : 'text-white hover:text-[#00BFFF]')}>Home</Link>
                {visibleLinks.map((link, index) => renderNavLink(link, index))}
              </div>
            </div>
          </div>

          {/* Right Actions - Anchored to the right edge */}
          <div className="hidden lg:flex items-center h-full shrink-0 relative z-40 bg-black">
            {/* Contact Button */}
            <div className="pl-4 sm:pl-6 flex items-center h-full bg-black">
              <Link to="/contact" className="px-6 py-3 bg-[#00BFFF] hover:bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-none transition-all shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:scale-95 whitespace-nowrap">        
                Contact Us
              </Link>
            </div>
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

                  if (!isEnabled) return null;

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
                <Link to="/contact" className="block w-full py-4 bg-[#00BFFF] text-black text-center font-black uppercase tracking-widest shadow-[5px_5px_0px_0px_rgba(255,255,255,0.1)]">Contact Us</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Global Dropdown - OUTSIDE nav to escape backdrop-filter containing block */}
      <AnimatePresence>
        {activeDropdown && DROPDOWN_CONTENT[activeDropdown as keyof typeof DROPDOWN_CONTENT] && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed left-1/2 -translate-x-1/2 w-[96%] max-w-7xl z-[170] flex flex-col bg-black border border-[#00BFFF]/40 shadow-2xl overflow-hidden backdrop-blur-xl"
            style={{ top: navBottom, maxHeight: `calc(100vh - ${navBottom + 20}px)` }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 lg:p-6 bg-black/80 backdrop-blur-md shrink-0 border-b border-[#00BFFF]/20 z-20">
              <div className="max-w-7xl mx-auto w-full">
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                  <h4 className="text-[10px] font-black text-[#00BFFF] uppercase tracking-[0.3em] mb-1">Overview</h4>
                  <p className="text-[13px] text-slate-400 font-medium leading-relaxed max-w-4xl">
                    {DROPDOWN_CONTENT[activeDropdown as keyof typeof DROPDOWN_CONTENT].overview}
                  </p>
                </motion.div>
              </div>
            </div>
            <div
              className="flex-1 overflow-y-auto relative py-6 lg:py-10 px-4 lg:px-8 bg-black custom-scrollbar overscroll-contain min-h-0"
              data-lenis-prevent
            >
              <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <Squares speed={0.05} squareSize={30} direction="diagonal" borderColor="rgba(0,191,255,0.08)" hoverFillColor="rgba(0,191,255,0.05)" />
              </div>
              <div className="relative z-10 max-w-7xl mx-auto">
                <div className={cn("grid gap-4 lg:gap-6", activeDropdown === 'Training Programs' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-2')}>
                  {DROPDOWN_CONTENT[activeDropdown as keyof typeof DROPDOWN_CONTENT].categories.map((category, idx) => (
                    <motion.div
                      key={idx}
                      className="group relative h-full"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + (idx * 0.05) }}
                    >
                      <div className={`absolute inset-0 bg-[#00bfff]/20 transform ${idx % 2 === 0 ? 'rotate-1' : '-rotate-1'} group-hover:rotate-0 transition-transform duration-500`} />
                      <div className="relative p-4 lg:p-5 border-[1px] border-[#00BFFF]/30 shadow-2xl transition-all duration-300 h-full flex flex-col group-hover:border-[#00BFFF] group-hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, #051020 0%, #0a1a2f 100%)' }}>
                        <h3 className="text-[10px] font-black text-[#00BFFF] uppercase tracking-[0.15em] flex items-center gap-2 mb-4">
                          <span className="w-1.5 h-1.5 bg-[#00BFFF] animate-pulse" />
                          {category.title}
                        </h3>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <Link to={item.path} className="text-[13px] text-white/80 font-normal hover:text-[#00BFFF] hover:translate-x-1 transition-all block py-0.5 relative group/link">
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00BFFF]/50 group-hover/link:w-full transition-all duration-300" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}

                  {/* Visual CTA Card for Training Programs */}
                  {activeDropdown === 'Training Programs' && (
                    <motion.div
                      className="group relative h-full"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-[#00bfff]/20 transform rotate-1 group-hover:rotate-0 transition-transform duration-500" />
                      <div className="relative p-0 border-[1px] border-[#00BFFF]/30 shadow-2xl transition-all duration-300 h-full flex flex-col group-hover:border-[#00BFFF] group-hover:-translate-y-1 overflow-hidden" style={{ background: 'linear-gradient(135deg, #051020 0%, #0a1a2f 100%)' }}>
                        <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
                            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800" alt="Training" className="w-full h-full object-cover" />
                        </div>
                        <div className="relative z-10 p-6 flex flex-col h-full bg-gradient-to-t from-black via-black/40 to-transparent">
                            <div className="mt-auto">
                                <h3 className="text-[12px] font-black text-[#00BFFF] uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#00BFFF] animate-pulse" />
                                    Explore More
                                </h3>
                                <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest leading-relaxed mb-6">
                                    View our full curriculum of elite certifications and masterclasses.
                                </p>
                                <Link to="/training" className="inline-flex items-center gap-2 px-6 py-3 bg-[#00BFFF] text-black text-[9px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all w-full justify-center">
                                    Full Catalog <ChevronRight size={12} />
                                </Link>
                            </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
