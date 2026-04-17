import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { NAVIGATION_LINKS } from '../../constants';
import logo from '../../assets/ebanex-logo.png';
import { cn } from '../../lib/utils';

// Dropdown content based on documentation.
const DROPDOWN_CONTENT = {
  'Training Programs': {
    overview:
      'Industry-aligned training programs designed to develop technical competence, leadership capability, and institutional effectiveness.',
    categories: [
      {
        title: 'Cybersecurity & Information Security',
        items: [
          { label: 'Cybersecurity Awareness Programs', path: '/training/cybersecurity-awareness' },
          { label: 'Ethical Hacking & Threat Intelligence', path: '/training/ethical-hacking' },
          { label: 'Digital Risk Management', path: '/training/digital-risk' },
          { label: 'Incident Response Training', path: '/training/incident-response' },
          { label: 'Data Privacy & Protection', path: '/training/data-privacy' },
        ],
      },
      {
        title: 'IT & Digital Skills',
        items: [
          { label: 'Networking & Infrastructure', path: '/training/networking' },
          { label: 'Cloud Computing & Virtualization', path: '/training/cloud-computing' },
          { label: 'AI & Emerging Technologies', path: '/training/ai-tech' },
          { label: 'Digital Transformation Skills', path: '/training/digital-transformation' },
          { label: 'Systems Administration', path: '/training/systems-admin' },
        ],
      },
      {
        title: 'Governance, Risk & Compliance',
        items: [
          { label: 'IT Governance & Digital Governance', path: '/training/it-governance' },
          { label: 'Enterprise Risk Management', path: '/training/risk-management' },
          { label: 'Internal Audit & Assurance', path: '/training/internal-audit' },
          { label: 'Regulatory Compliance & Standards', path: '/training/compliance' },
        ],
      },
      {
        title: 'Leadership & Professional Development',
        items: [
          { label: 'Leadership & Management Skills', path: '/training/leadership' },
          { label: 'Strategic Thinking & Decision Making', path: '/training/strategic-thinking' },
          { label: 'Communication & Workplace Effectiveness', path: '/training/communication' },
          { label: 'Team Development & Collaboration', path: '/training/team-development' },
        ],
      },
      {
        title: 'Certification Preparation',
        items: [
          { label: 'CISA Certification', path: '/training/cisa' },
          { label: 'CISM Certification', path: '/training/cism' },
          { label: 'CISSP Certification', path: '/training/cissp' },
          { label: 'CEH Certification', path: '/training/ceh' },
          { label: 'CCNA/CCNP Certification', path: '/training/cisco' },
          { label: 'CDPSE Certification', path: '/training/cdpse' },
          { label: 'CIA Certification', path: '/training/cia' },
          { label: 'CRMA Certification', path: '/training/crma' },
        ],
      },
    ],
  },
  'Corporate Solutions': {
    overview:
      'Customized capacity-building and advisory solutions designed for institutional strategies and workforce development goals.',
    categories: [
      {
        title: 'Institutional Training & Advisory',
        items: [
          { label: 'Training Needs Assessments', path: '/corporate-solutions#services' },
          { label: 'Workforce Upskilling Programs', path: '/corporate-solutions#services' },
          { label: 'Digital Transformation Advisory', path: '/corporate-solutions#services' },
          { label: 'Organizational Risk Training', path: '/corporate-solutions#services' },
          { label: 'Leadership Development Programs', path: '/corporate-solutions#services' },
          { label: 'Train-the-Trainer Programs', path: '/corporate-solutions#services' },
        ],
      },
      {
        title: 'Industries Served',
        items: [
          { label: 'Government & Public Sector', path: '/corporate-solutions#industries' },
          { label: 'Financial Institutions', path: '/corporate-solutions#industries' },
          { label: 'Mining & Industrial Sector', path: '/corporate-solutions#industries' },
          { label: 'Telecommunications', path: '/corporate-solutions#industries' },
          { label: 'Energy & Infrastructure', path: '/corporate-solutions#industries' },
          { label: 'Development & NGOs', path: '/corporate-solutions#industries' },
        ],
      },
    ],
  },
  'Cyber Labs': {
    overview:
      'Simulated learning environments where professionals develop real-world technical skills through practical application and scenario-based learning.',
    categories: [
      {
        title: 'Lab Capabilities',
        items: [
          { label: 'Cybersecurity Simulation Labs', path: '/cyberlabs/simulation' },
          { label: 'Enterprise IT Infrastructure Labs', path: '/cyberlabs/infrastructure' },
          { label: 'Risk & Audit Simulation Cases', path: '/cyberlabs/risk-audit' },
          { label: 'Incident Response Exercises', path: '/cyberlabs/incident-response' },
        ],
      },
    ],
  },
  'Consulting & Advisory': {
    overview:
      'Strategic consulting services supporting organizations in strengthening governance frameworks, operational systems, and institutional performance.',
    categories: [
      {
        title: 'Advisory Areas',
        items: [
          { label: 'Digital Transformation Strategy', path: '/consulting/digital-strategy' },
          { label: 'Governance & Risk Advisory', path: '/consulting/governance' },
          { label: 'Capacity Building Strategy', path: '/consulting/capacity-building' },
          { label: 'Organizational Development', path: '/consulting/org-development' },
          { label: 'Technology Implementation', path: '/consulting/tech-implementation' },
        ],
      },
    ],
  },
  'Research & Insights': {
    overview:
      'Knowledge and thought leadership in industry research, cybersecurity trends, and institutional capacity-building insights.',
    categories: [
      {
        title: 'Knowledge Resources',
        items: [
          { label: 'Industry Research Publications', path: '/research/publications' },
          { label: 'Cybersecurity Trend Analysis', path: '/research/cyber-trends' },
          { label: 'Professional Articles & Insights', path: '/research/articles' },
          { label: 'Training Whitepapers', path: '/research/whitepapers' },
          { label: 'Capacity Building Research', path: '/research/capacity-research' },
        ],
      },
    ],
  },
  Partnerships: {
    overview:
      'Strategic collaborations with international institutions, certification bodies, and technology providers for enhanced service delivery.',
    categories: [
      {
        title: 'Strategic Partners',
        items: [
          { label: 'International Certification Bodies', path: '/partnerships/certifications' },
          { label: 'Universities & Academic Institutions', path: '/partnerships/universities' },
          { label: 'Technology Vendors & Providers', path: '/partnerships/technology' },
          { label: 'Professional Training Institutions', path: '/partnerships/training' },
          { label: 'Development Agencies', path: '/partnerships/development' },
        ],
      },
    ],
  },
  Careers: {
    overview:
      'Join our team of professionals dedicated to capacity building, cybersecurity, and institutional development worldwide.',
    categories: [
      {
        title: 'Career Opportunities',
        items: [
          { label: 'Professional Trainers & Instructors', path: '/careers/trainers' },
          { label: 'Consulting Specialists', path: '/careers/consultants' },
          { label: 'Internship & Graduate Programs', path: '/careers/internships' },
        ],
      },
    ],
  },
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileCategoryExpanded, setMobileCategoryExpanded] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
    setMobileCategoryExpanded(null);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleDropdownClick = (label: string) => {
    if (DROPDOWN_CONTENT[label as keyof typeof DROPDOWN_CONTENT]) {
      setActiveDropdown(activeDropdown === label ? null : label);
    }
  };

  const toggleMobileExpanded = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
    setMobileCategoryExpanded(null);
  };

  const toggleMobileCategory = (title: string) => {
    setMobileCategoryExpanded(mobileCategoryExpanded === title ? null : title);
  };

  return (
    <nav className="w-full z-50 py-0 bg-black/50 backdrop-blur-xl border-b border-[#00BFFF]/10 sticky top-0" role="navigation" aria-label="Main Navigation">
      <div className="w-full px-4 sm:px-6 flex items-center h-16 sm:h-20 lg:h-24">
        <Link
          to="/"
          className="flex items-center group transition-opacity duration-300 shrink-0"
          aria-label="Ebanex International Home"
        >
          <img
            src={logo}
            alt=""
            className="h-12 sm:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 brightness-110"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-1 justify-end relative h-full">
          <Link
            to="/"
            className={cn(
              "text-[11px] font-semibold tracking-tight uppercase transition-colors whitespace-nowrap",
              location.pathname === '/' ? 'text-[#00BFFF]' : 'text-white hover:text-[#00BFFF]'
            )}
          >
            Home
          </Link>

          {/* Navigation Links with Dropdowns */}
          {NAVIGATION_LINKS.map((link) => {
            const hasDropdown = DROPDOWN_CONTENT[link.label as keyof typeof DROPDOWN_CONTENT];
            const isActive = location.pathname === link.path;

            return (
              <div
                key={link.path}
                className="relative h-full flex items-center"
              >
                {hasDropdown ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDropdownClick(link.label);
                    }}
                    aria-expanded={activeDropdown === link.label}
                    aria-haspopup="true"
                    className={cn(
                      "text-[11px] font-semibold tracking-tight uppercase transition-colors whitespace-nowrap flex items-center gap-1 focus:outline-none",
                      isActive || activeDropdown === link.label 
                        ? 'text-[#00BFFF]' 
                        : 'text-white hover:text-[#00BFFF]'
                    )}
                  >
                    {link.label}
                    <ChevronDown 
                      size={10} 
                      className={cn(
                        "opacity-70 transition-transform duration-200",
                        activeDropdown === link.label ? 'rotate-180' : ''
                      )} 
                    />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={cn(
                      "text-[11px] font-semibold tracking-tight uppercase transition-colors whitespace-nowrap focus:outline-none",
                      isActive ? 'text-[#00BFFF]' : 'text-white hover:text-[#00BFFF]'
                    )}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {hasDropdown && activeDropdown === link.label && (
                  <div
                    className={cn(
                      "bg-black/95 backdrop-blur-2xl border border-[#00BFFF]/20 rounded-b-xl shadow-2xl z-50 overflow-y-auto",
                      link.label === 'Training Programs'
                        ? 'fixed top-[64px] sm:top-[80px] lg:top-[96px] left-[10px] right-[10px] w-[calc(100vw-20px)] max-h-[calc(100vh-120px)]'
                        : 'absolute top-full right-0 w-max max-w-[90vw] lg:max-w-4xl max-h-[80vh]'
                    )}
                  >
                    <div className="p-6 lg:p-8">
                      {/* Overview */}
                      <div className="mb-6 pb-4 border-b border-white/10">
                        <h4 className="text-[10px] font-bold text-[#00BFFF] uppercase tracking-widest mb-2">
                          Overview
                        </h4>
                        <p className="text-sm text-white/70 leading-relaxed max-w-4xl">
                          {DROPDOWN_CONTENT[link.label as keyof typeof DROPDOWN_CONTENT].overview}
                        </p>
                      </div>

                      {/* Categories */}
                      <div
                        className={cn(
                          "grid gap-8",
                          link.label === 'Training Programs'
                            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'
                            : 'grid-cols-1 md:grid-cols-2'
                        )}
                      >
                        {DROPDOWN_CONTENT[
                          link.label as keyof typeof DROPDOWN_CONTENT
                        ].categories.map((category, categoryIndex) => (
                          <div key={categoryIndex} className="space-y-4">
                            <h3 className="text-[11px] font-bold text-white uppercase tracking-wider flex items-center gap-2">
                              <span className="w-1 h-3 bg-[#00BFFF] rounded-full" />
                              {category.title}
                            </h3>
                            <ul className="space-y-2">
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <Link
                                    to={item.path}
                                    className="text-[13px] text-white/50 hover:text-[#00BFFF] transition-colors block py-1"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          
          <Link
            to="/contact"
            className="ml-4 px-5 py-2.5 bg-[#00BFFF] hover:bg-white text-black text-[11px] font-bold uppercase tracking-widest rounded-sm transition-all shadow-[0_0_20px_rgba(0,191,255,0.3)] active:scale-95"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden ml-auto text-white p-2 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-50 bg-slate-950 transition-all duration-300 ease-in-out transform flex flex-col",
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        )}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-4 h-16 border-b border-white/10">
          <img src={logo} alt="" className="h-10 w-auto" />
          <button 
            className="text-white p-2" 
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          <Link
            to="/"
            className={cn(
              "block py-3 px-4 text-lg font-bold rounded-xl",
              location.pathname === '/' ? 'bg-blue-500/10 text-blue-400' : 'text-white'
            )}
          >
            Home
          </Link>
          
          {NAVIGATION_LINKS.map((link) => {
            const hasDropdown = DROPDOWN_CONTENT[link.label as keyof typeof DROPDOWN_CONTENT];
            const isExpanded = mobileExpanded === link.label;

            return (
              <div key={link.path} className="space-y-1">
                {hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleMobileExpanded(link.label)}
                      className={cn(
                        "w-full flex items-center justify-between py-3 px-4 text-lg font-bold rounded-xl transition-colors",
                        isExpanded ? 'bg-slate-900 text-blue-400' : 'text-white active:bg-slate-900'
                      )}
                    >
                      {link.label}
                      <ChevronDown size={20} className={cn("transition-transform duration-200", isExpanded ? 'rotate-180' : '')} />
                    </button>
                    
                    {/* Expandable Categories */}
                    {isExpanded && (
                      <div className="mt-2 ml-4 border-l-2 border-slate-800 space-y-1">
                        {DROPDOWN_CONTENT[link.label as keyof typeof DROPDOWN_CONTENT].categories.map((cat) => {
                          const isCatExpanded = mobileCategoryExpanded === cat.title;
                          return (
                            <div key={cat.title}>
                              <button
                                onClick={() => toggleMobileCategory(cat.title)}
                                className="w-full flex items-center justify-between py-2 px-4 text-sm font-semibold text-slate-300"
                              >
                                {cat.title}
                                <ChevronRight size={16} className={cn("transition-transform", isCatExpanded ? 'rotate-90' : '')} />
                              </button>
                              {isCatExpanded && (
                                <div className="ml-4 space-y-1 mb-2">
                                  {cat.items.map((item) => (
                                    <Link
                                      key={item.path}
                                      to={item.path}
                                      className="block py-2 px-4 text-sm text-slate-400 active:text-blue-400"
                                    >
                                      {item.label}
                                    </Link>
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
                  <Link
                    to={link.path}
                    className={cn(
                      "block py-3 px-4 text-lg font-bold rounded-xl",
                      location.pathname === link.path ? 'bg-blue-500/10 text-blue-400' : 'text-white'
                    )}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Footer */}
        <div className="p-6 border-t border-white/10 bg-slate-900/50">
          <Link
            to="/contact"
            className="block w-full py-4 bg-blue-600 text-white text-center rounded-xl font-bold shadow-lg shadow-blue-500/20"
          >
            Contact Expert
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
