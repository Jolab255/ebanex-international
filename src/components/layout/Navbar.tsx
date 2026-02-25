import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAVIGATION_LINKS } from '../../constants';
import logo from '../../assets/ebanex-logo.png';

// Dropdown content based on documentation. Each main link has an overview and categories with items. This structure allows for flexible rendering of dropdowns based on the link label.
const DROPDOWN_CONTENT = {
  'Training Programs': {
    overview: 'Industry-aligned training programs designed to develop technical competence, leadership capability, and institutional effectiveness.',
    categories: [
      {
        title: 'Cybersecurity & Information Security',
        items: [
          { label: 'Cybersecurity Awareness Programs', path: '/training/cybersecurity-awareness' },
          { label: 'Ethical Hacking & Threat Intelligence', path: '/training/ethical-hacking' },
          { label: 'Digital Risk Management', path: '/training/digital-risk' },
          { label: 'Incident Response Training', path: '/training/incident-response' },
          { label: 'Data Privacy & Protection', path: '/training/data-privacy' }
        ]
      },
      {
        title: 'IT & Digital Skills',
        items: [
          { label: 'Networking & Infrastructure', path: '/training/networking' },
          { label: 'Cloud Computing & Virtualization', path: '/training/cloud-computing' },
          { label: 'AI & Emerging Technologies', path: '/training/ai-tech' },
          { label: 'Digital Transformation Skills', path: '/training/digital-transformation' },
          { label: 'Systems Administration', path: '/training/systems-admin' }
        ]
      },
      {
        title: 'Governance, Risk & Compliance',
        items: [
          { label: 'IT Governance & Digital Governance', path: '/training/it-governance' },
          { label: 'Enterprise Risk Management', path: '/training/risk-management' },
          { label: 'Internal Audit & Assurance', path: '/training/internal-audit' },
          { label: 'Regulatory Compliance & Standards', path: '/training/compliance' }
        ]
      },
      {
        title: 'Leadership & Professional Development',
        items: [
          { label: 'Leadership & Management Skills', path: '/training/leadership' },
          { label: 'Strategic Thinking & Decision Making', path: '/training/strategic-thinking' },
          { label: 'Communication & Workplace Effectiveness', path: '/training/communication' },
          { label: 'Team Development & Collaboration', path: '/training/team-development' }
        ]
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
          { label: 'CRMA Certification', path: '/training/crma' }
        ]
      }
    ]
  },
  'Corporate Solutions': {
    overview: 'Customized capacity-building and advisory solutions designed for institutional strategies and workforce development goals.',
    categories: [
      {
        title: 'Institutional Training & Advisory',
        items: [
          { label: 'Training Needs Assessments', path: '/corporate/training-assessment' },
          { label: 'Workforce Upskilling Programs', path: '/corporate/upskilling' },
          { label: 'Digital Transformation Advisory', path: '/corporate/digital-transformation' },
          { label: 'Organizational Risk Training', path: '/corporate/risk-training' },
          { label: 'Leadership Development Programs', path: '/corporate/leadership' },
          { label: 'Train-the-Trainer Programs', path: '/corporate/train-trainer' }
        ]
      },
      {
        title: 'Industries Served',
        items: [
          { label: 'Government & Public Sector', path: '/corporate/government' },
          { label: 'Financial Institutions', path: '/corporate/financial' },
          { label: 'Mining & Industrial Sector', path: '/corporate/mining' },
          { label: 'Telecommunications', path: '/corporate/telecom' },
          { label: 'Energy & Infrastructure', path: '/corporate/energy' },
          { label: 'Development & NGOs', path: '/corporate/development' }
        ]
      }
    ]
  },
  'Cyber Labs': {
    overview: 'Simulated learning environments where professionals develop real-world technical skills through practical application and scenario-based learning.',
    categories: [
      {
        title: 'Lab Capabilities',
        items: [
          { label: 'Cybersecurity Simulation Labs', path: '/cyberlabs/simulation' },
          { label: 'Enterprise IT Infrastructure Labs', path: '/cyberlabs/infrastructure' },
          { label: 'Risk & Audit Simulation Cases', path: '/cyberlabs/risk-audit' },
          { label: 'Incident Response Exercises', path: '/cyberlabs/incident-response' }
        ]
      }
    ]
  },
  'Consulting & Advisory': {
    overview: 'Strategic consulting services supporting organizations in strengthening governance frameworks, operational systems, and institutional performance.',
    categories: [
      {
        title: 'Advisory Areas',
        items: [
          { label: 'Digital Transformation Strategy', path: '/consulting/digital-strategy' },
          { label: 'Governance & Risk Advisory', path: '/consulting/governance' },
          { label: 'Capacity Building Strategy', path: '/consulting/capacity-building' },
          { label: 'Organizational Development', path: '/consulting/org-development' },
          { label: 'Technology Implementation', path: '/consulting/tech-implementation' }
        ]
      }
    ]
  },
  'Research & Insights': {
    overview: 'Knowledge and thought leadership in industry research, cybersecurity trends, and institutional capacity-building insights.',
    categories: [
      {
        title: 'Knowledge Resources',
        items: [
          { label: 'Industry Research Publications', path: '/research/publications' },
          { label: 'Cybersecurity Trend Analysis', path: '/research/cyber-trends' },
          { label: 'Professional Articles & Insights', path: '/research/articles' },
          { label: 'Training Whitepapers', path: '/research/whitepapers' },
          { label: 'Capacity Building Research', path: '/research/capacity-research' }
        ]
      }
    ]
  },
  'Partnerships': {
    overview: 'Strategic collaborations with international institutions, certification bodies, and technology providers for enhanced service delivery.',
    categories: [
      {
        title: 'Strategic Partners',
        items: [
          { label: 'International Certification Bodies', path: '/partnerships/certifications' },
          { label: 'Universities & Academic Institutions', path: '/partnerships/universities' },
          { label: 'Technology Vendors & Providers', path: '/partnerships/technology' },
          { label: 'Professional Training Institutions', path: '/partnerships/training' },
          { label: 'Development Agencies', path: '/partnerships/development' }
        ]
      }
    ]
  },
  'Careers': {
    overview: 'Join our team of professionals dedicated to capacity building, cybersecurity, and institutional development worldwide.',
    categories: [
      {
        title: 'Career Opportunities',
        items: [
          { label: 'Professional Trainers & Instructors', path: '/careers/trainers' },
          { label: 'Consulting Specialists', path: '/careers/consultants' },
          { label: 'Internship & Graduate Programs', path: '/careers/internships' }
        ]
      }
    ]
  }
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  }, [location]);

  const handleMouseEnter = (label: string) => {
    if (DROPDOWN_CONTENT[label as keyof typeof DROPDOWN_CONTENT]) {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
        setDropdownTimeout(null);
      }
      setActiveDropdown(label);
    }
  };

  const handleMouseLeave = () => {
    // Add delay before closing dropdown to allow cursor movement
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay
    setDropdownTimeout(timeout);
  };

  return (
    <nav className="w-full z-40 py-1 bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-white/10 sticky top-0">
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
        <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-1 justify-end relative">
          <Link
            to="/"
            className={`text-[11px] font-semibold tracking-tight uppercase transition-colors whitespace-nowrap ${location.pathname === '/' ? 'text-blue-500' : 'text-slate-300 hover:text-white'
              }`}
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
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={link.path}
                  className={`text-[11px] font-semibold tracking-tight uppercase transition-colors whitespace-nowrap flex items-center gap-1 ${
                    isActive ? 'text-blue-500' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {hasDropdown && <ChevronDown size={10} className="opacity-70" />}
                </Link>

                {/* Dropdown Menu */}
                {hasDropdown && activeDropdown === link.label && (
                  <div className={`fixed top-full mt-1 bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-lg shadow-2xl z-50 ${
                    // Individual widths based on content
                    link.label === 'Training Programs'
                      ? 'left-[5px] right-[5px] w-[calc(100vw-10px)] max-w-none'
                      : link.label === 'Corporate Solutions'
                      ? 'left-1/2 -translate-x-1/2 w-max max-w-[95vw] lg:max-w-2xl xl:max-w-3xl'
                      : link.label === 'Consulting & Advisory' || link.label === 'Cyber Labs' || link.label === 'Research & Insights' || link.label === 'Partnerships' || link.label === 'Careers'
                      ? 'left-1/2 -translate-x-1/2 w-max max-w-[95vw] lg:max-w-xl xl:max-w-2xl'
                      : 'left-[5px] right-[5px] w-[calc(100vw-10px)] max-w-none'
                  }`}>
                    <div className="p-4 sm:p-5 lg:p-6">
                      {/* Overview - now fits within columns */}
                      <div className="mb-4 lg:mb-5 pb-3 border-b border-slate-700">
                        <h4 className="text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-wide mb-2">
                          Overview
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-none lg:max-w-4xl text-justify">
                          {DROPDOWN_CONTENT[link.label as keyof typeof DROPDOWN_CONTENT].overview}
                        </p>
                      </div>

                      {/* Categories */}
                      <div className={`grid gap-4 lg:gap-6 ${
                        // Special grid for Training Programs - 5 columns on large screens
                        link.label === 'Training Programs'
                          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'
                          : DROPDOWN_CONTENT[link.label as keyof typeof DROPDOWN_CONTENT].categories.length > 2
                          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                          : DROPDOWN_CONTENT[link.label as keyof typeof DROPDOWN_CONTENT].categories.length > 1
                          ? 'grid-cols-1 lg:grid-cols-2'
                          : 'grid-cols-1'
                      }`}>
                        {DROPDOWN_CONTENT[link.label as keyof typeof DROPDOWN_CONTENT].categories.map((category, categoryIndex) => (
                          <div key={categoryIndex} className="space-y-2 lg:space-y-3 min-w-0">
                            <h3 className="text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-wide leading-tight">
                              {category.title}
                            </h3>
                            <ul className="space-y-1 lg:space-y-2">
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <Link
                                    to={item.path}
                                    className="group text-xs sm:text-sm text-slate-300 hover:text-white transition-all duration-200 block p-2 rounded-md hover:bg-slate-800/60 hover:shadow-sm"
                                    title={item.label}
                                  >
                                    <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                                      {item.label}
                                    </span>
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
