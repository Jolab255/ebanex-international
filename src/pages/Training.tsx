import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Shield, Code, GraduationCap, Briefcase, 
    ArrowRight, ChevronLeft, ChevronRight, Home, X, 
    ExternalLink, CheckCircle2, Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/layout';
import { Squares } from '../components/animations';
import { TRAINING_PROGRAMS } from '../constants/trainingData';
import { TrainingApproachSection } from '../features/home';

// Modal Component for Full Overview
const ProgramModal: React.FC<{ 
    isOpen: boolean; 
    onClose: () => void; 
    program: any 
}> = ({ isOpen, onClose, program }) => {
    if (!program) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-5xl bg-[#0a1628] border-[10px] border-black shadow-[25px_25px_0px_0px_rgba(0,191,255,0.15)] overflow-hidden flex flex-col max-h-[90vh]"
                        style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
                            <div>
                                <span className="text-[9px] font-black text-[#00BFFF] uppercase tracking-[0.3em] mb-1 block">{program.badge}</span>
                                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tighter">{program.title}</h2>
                            </div>
                            <button 
                                onClick={onClose}
                                className="w-10 h-10 bg-black border border-white/10 flex items-center justify-center text-white hover:text-[#00BFFF] hover:border-[#00BFFF] transition-all"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
                            <div className="grid lg:grid-cols-12 gap-8 sm:gap-12">
                                {/* Left Side: Details */}
                                <div className="lg:col-span-7 space-y-8">
                                    <div className="space-y-4">
                                        <h3 className="text-xs font-semibold text-[#00BFFF] uppercase tracking-widest">
                                            Program Overview
                                        </h3>
                                        <p className="text-sm sm:text-base text-white/80 leading-[1.8] font-normal whitespace-pre-line">
                                            {program.longDescription || program.description}
                                        </p>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <h4 className="text-[10px] font-semibold text-[#00BFFF] uppercase tracking-widest">What You Will Learn</h4>
                                            <ul className="space-y-2">
                                                {program.skills?.technical?.slice(0, 4).map((skill: string, i: number) => (
                                                    <li key={i} className="flex items-start gap-2 text-[12px] text-white/70 font-normal leading-snug">
                                                        <CheckCircle2 size={12} className="text-[#00BFFF] shrink-0 mt-0.5" />
                                                        {skill}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="text-[10px] font-semibold text-[#00BFFF] uppercase tracking-widest">Business Benefits</h4>
                                            <ul className="space-y-2">
                                                {program.skills?.business?.slice(0, 4).map((skill: string, i: number) => (
                                                    <li key={i} className="flex items-start gap-2 text-[12px] text-white/70 font-normal leading-snug">
                                                        <CheckCircle2 size={12} className="text-[#00BFFF] shrink-0 mt-0.5" />
                                                        {skill}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Image & Stats */}
                                <div className="lg:col-span-5 space-y-6">
                                    <div className="relative group overflow-hidden border-[6px] border-black">
                                        <img 
                                            src={program.image || `https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800`} 
                                            alt={program.title}
                                            className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                                    </div>

                                    <div className="bg-black/40 p-5 border border-white/5 space-y-4">
                                        <div className="flex items-center justify-between border-b border-white/5 pb-3">
                                            <span className="text-[10px] font-medium text-white/40 uppercase tracking-widest">Duration</span>
                                            <span className="text-xs font-semibold text-[#00BFFF]">{program.duration}</span>
                                        </div>
                                        <div className="flex items-center justify-between border-b border-white/5 pb-3">
                                            <span className="text-[10px] font-medium text-white/40 uppercase tracking-widest">Total Hours</span>
                                            <span className="text-xs font-semibold text-[#00BFFF]">{program.hours}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-medium text-white/40 uppercase tracking-widest">Who It's For</span>
                                            <span className="text-xs font-semibold text-[#00BFFF] text-right max-w-[150px]">{program.audience}</span>
                                        </div>
                                    </div>

                                    <Link 
                                        to={`/training/${program.slug}`}
                                        className="w-full py-4 bg-[#00BFFF] hover:bg-white text-black text-[11px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all active:scale-95"
                                    >
                                        View Full Program <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Footer / Mobile Closing */}
                        <div className="p-4 bg-black/40 border-t border-white/5 lg:hidden">
                            <button 
                                onClick={onClose}
                                className="w-full py-3 border-2 border-white/20 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all"
                            >
                                Close Overview
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

const ProgramCard: React.FC<{ item: any; progData: any; openOverview: (slug: string) => void }> = ({ item, progData, openOverview }) => (
    <div 
        className="group relative bg-[#0a1628] border-2 border-white/5 hover:border-[#00BFFF]/50 transition-all overflow-hidden h-full flex flex-col w-full"
        style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}
    >
        {/* Card Header with Image */}
        <div className="relative h-32 sm:h-40 overflow-hidden border-b-2 border-black">
            <img 
                src={progData?.image || `https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800`} 
                alt={item.label}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
            <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/80 backdrop-blur-sm border border-[#00BFFF]/30">
                <span className="text-[9px] font-black text-[#00BFFF] uppercase tracking-widest">{progData?.badge || 'Training Program'}</span>
            </div>
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-6 flex flex-col flex-1">
            <div className="flex items-start justify-between gap-4 mb-4">
                <h4 className="text-sm sm:text-base lg:text-lg font-black text-white uppercase tracking-tighter leading-tight group-hover:text-[#00BFFF] transition-colors">{item.label}</h4>
            </div>

            <p className="text-[11px] sm:text-xs text-white/60 font-normal leading-[1.75] mb-6 flex-1">
                {progData?.description || "Institutional capacity building and professional skill enhancement."}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex flex-col">
                    <span className="text-[8px] font-black text-white/30 uppercase tracking-[0.2em] mb-1">Duration</span>
                    <span className="text-[9px] sm:text-[10px] font-black text-[#00BFFF] uppercase">{progData?.duration || "Variable"}</span>
                </div>
                <div className="flex gap-2">
                    <button 
                        onClick={() => openOverview(item.slug)}
                        className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center border border-white/10 hover:border-[#00BFFF] text-white hover:text-[#00BFFF] transition-all bg-black/40"
                        title="Overview"
                    >
                        <ChevronRight size={16} />
                    </button>
                    <Link 
                        to={`/training/${item.slug}`} 
                        className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center border border-white/10 hover:border-[#00BFFF] text-white hover:text-[#00BFFF] transition-all bg-black/40"
                        title="Program Page"
                    >
                        <ExternalLink size={14} />
                    </Link>
                </div>
            </div>
        </div>
        
        {/* Accent Bar */}
        <div className="h-1 w-0 group-hover:w-full bg-[#00BFFF] transition-all duration-500" />
    </div>
);

const ProgramCarousel: React.FC<{ items: any[]; openOverview: (slug: string) => void }> = ({ items, openOverview }) => {
    const [startIndex, setStartIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(4);

    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            setVisibleCount(w >= 1024 ? 4 : w >= 640 ? 2 : 1);
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    // Reset when items change
    useEffect(() => { setStartIndex(0); }, [items]);

    const canPrev = startIndex > 0;
    const canNext = startIndex + visibleCount < items.length;

    const handleNext = () => { if (canNext) setStartIndex(p => p + 1); };
    const handlePrev = () => { if (canPrev) setStartIndex(p => p - 1); };

    // Track width = items.length / visibleCount * 100% of container
    // translateX as % of track = -(startIndex / items.length) * 100%
    const trackWidthPct = (items.length / visibleCount) * 100;
    const cardWidthPct = 100 / items.length;
    const translateXPct = -(startIndex / items.length) * 100;

    const btnBase = "w-10 h-10 border flex items-center justify-center transition-all duration-200";
    const btnActive = "border-white/20 bg-black/40 text-white hover:bg-[#00BFFF] hover:text-black cursor-pointer";
    const btnDisabled = "border-white/5 bg-black/10 text-white/15 cursor-not-allowed pointer-events-none";

    return (
        <div className="relative w-full">
            {/* Carousel Track */}
            <div className="overflow-hidden py-4">
                <motion.div
                    className="flex"
                    style={{ width: `${trackWidthPct}%` }}
                    animate={{ x: `${translateXPct}%` }}
                    transition={{ type: "tween", duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                >
                    {items.map((item) => (
                        <div
                            key={item.slug}
                            style={{ width: `${cardWidthPct}%` }}
                            className="px-2 sm:px-3 shrink-0"
                        >
                            <ProgramCard
                                item={item}
                                progData={TRAINING_PROGRAMS[item.slug]}
                                openOverview={openOverview}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Navigation Controls — always same position */}
            <div className="flex justify-center gap-3 mt-6">
                <button
                    onClick={handlePrev}
                    disabled={!canPrev}
                    className={`${btnBase} ${canPrev ? btnActive : btnDisabled}`}
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={handleNext}
                    disabled={!canNext}
                    className={`${btnBase} ${canNext ? btnActive : btnDisabled}`}
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

const Training: React.FC = () => {
    const [selectedProgram, setSelectedProgram] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openOverview = (slug: string) => {
        const program = TRAINING_PROGRAMS[slug];
        if (program) {
            setSelectedProgram(program);
            setIsModalOpen(true);
        }
    };

    const categories = [
      {
        title: 'Cybersecurity',
        icon: <Shield className="w-8 h-8" />,
        items: [
          { label: 'Cybersecurity Awareness Programs', slug: 'cybersecurity-awareness' },
          { label: 'Ethical Hacking & Threat Intelligence', slug: 'ethical-hacking' },
          { label: 'Incident Response Training', slug: 'incident-response' },
          { label: 'Digital Risk Management', slug: 'digital-risk' },
          { label: 'Data Privacy & Protection', slug: 'data-privacy' }
        ]
      },
      {
        title: 'IT & Digital Skills',
        icon: <Code className="w-8 h-8" />,
        items: [
          { label: 'Networking & Infrastructure', slug: 'networking' },
          { label: 'Cloud Computing & Virtualization', slug: 'cloud-computing' },
          { label: 'AI & Emerging Technologies', slug: 'ai-tech' },
          { label: 'Digital Transformation Skills', slug: 'digital-transformation' },
          { label: 'Systems Administration', slug: 'systems-admin' }
        ]
      },
      {
        title: 'Governance & Compliance',
        icon: <GraduationCap className="w-8 h-8" />,
        items: [
          { label: 'IT Governance & Digital Governance', slug: 'it-governance' },
          { label: 'Enterprise Risk Management', slug: 'risk-management' },
          { label: 'Internal Audit & Assurance', slug: 'internal-audit' },
          { label: 'Regulatory Compliance & Standards', slug: 'compliance' }
        ]
      },
      {
        title: 'Leadership & Development',
        icon: <Briefcase className="w-8 h-8" />,
        items: [
          { label: 'Leadership & Management Skills', slug: 'leadership' },
          { label: 'Strategic Thinking & Decision Making', slug: 'strategic-thinking' },
          { label: 'Communication & Workplace Effectiveness', slug: 'communication' },
          { label: 'Team Development & Collaboration', slug: 'team-development' }
        ]
      },
      {
        title: 'Certification Prep',
        icon: <Award className="w-8 h-8" />,
        items: [
          { label: 'CISA Preparation', slug: 'cisa' },
          { label: 'CISM Preparation', slug: 'cism' },
          { label: 'CISSP Preparation', slug: 'cissp' },
          { label: 'CEH Preparation', slug: 'ceh' },
          { label: 'Cisco CCNA/CCNP Preparation', slug: 'cisco' }
        ]
      }
    ];

    return (
        <div className="relative min-h-screen bg-black overflow-hidden">
            <SEO
                title="Training Programs | Ebanex International"
                description="Explore our elite training programs in cybersecurity, IT governance, leadership, and professional development."
                keywords="training programs, cybersecurity awareness, ethical hacking, digital risk, IT governance"
                canonical="https://ebanexint.co.tz/training"
            />

            {/* Breadcrumb */}
            <div className="relative z-30 bg-black border-b border-white/5 px-4 sm:px-6 py-2.5 flex items-center gap-3">
                <Link to="/" className="flex items-center gap-2 hover:text-[#00BFFF] transition-colors font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs text-slate-300">
                    <Home size={14} className="text-[#00BFFF]" /><span>Home</span>
                </Link>
                <ChevronRight size={14} className="text-[#00BFFF] opacity-50" />
                <span className="text-white font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs">Training Programs</span>
            </div>

            {/* Training Approach Section — first section */}
            <div className="[&>section]:min-h-0 [&>section]:pt-5 [&>section]:sm:pt-7 [&>section]:pb-5 [&>section]:sm:pb-7">
                <TrainingApproachSection />
            </div>

            {/* Main Content Area */}
            <div className="relative z-20 flex flex-col w-full">
                {categories.map((cat, idx) => (
                    <section 
                        key={idx} 
                        className={`relative w-full py-5 sm:py-7 overflow-hidden ${
                            idx % 2 === 0 
                                ? 'bg-[linear-gradient(135deg,#000000_50%,#00bfff_50%)]' 
                                : 'bg-[linear-gradient(135deg,#00bfff_50%,#000000_50%)]'
                        }`}
                    >
                        <div className="absolute inset-0 z-0 pointer-events-none opacity-100">
                          <Squares
                            speed={0.13}
                            squareSize={40}
                            direction="diagonal"
                            borderColor="rgba(255,255,255,0.08)"
                            hoverFillColor="rgba(255,255,255,0.05)"
                          />
                        </div>
                        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
                            {/* Category Title Section */}
                            <div className="mb-10 text-center relative z-50">
                                <div className="select-none inline-block bg-black py-3 px-6 sm:px-8 border-4 border-black">
                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-white uppercase tracking-tighter">
                                        {cat.title.split(' ').length > 1 ? (
                                            <>
                                                {cat.title.substring(0, cat.title.lastIndexOf(' '))} <span className="text-[#00BFFF]">{cat.title.substring(cat.title.lastIndexOf(' ') + 1)}</span>
                                            </>
                                        ) : (
                                            <span className="text-[#00BFFF]">{cat.title}</span>
                                        )}
                                    </h2>
                                </div>
                            </div>

                            {/* Program Carousel */}
                            <ProgramCarousel items={cat.items} openOverview={openOverview} />
                        </div>
                    </section>
                ))}
            </div>

            {/* Modals */}
            <ProgramModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                program={selectedProgram} 
            />

            {/* CTA Section — Training Page */}
            <section className="relative overflow-hidden bg-[linear-gradient(135deg,#00bfff_50%,#000000_50%)] flex flex-col items-center justify-center py-10 sm:py-14 px-4">
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <Squares speed={0.13} squareSize={40} direction="diagonal" borderColor="rgba(255,255,255,0.08)" hoverFillColor="rgba(255,255,255,0.05)" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col items-center">
                    {/* Header */}
                    <div className="mb-6 sm:mb-8 text-center relative z-50">
                        <div className="select-none inline-block bg-black py-3 px-6 sm:px-8 border-4 border-black">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-white uppercase tracking-tighter">
                                Start Your Training <span className="text-[#00BFFF]">Today</span>
                            </h2>
                        </div>
                    </div>

                    {/* CTA Card */}
                    <div className="relative w-full max-w-4xl flex items-center justify-center lg:justify-start">
                        <div className="absolute right-[-10%] lg:right-[-15%] top-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] lg:w-[500px] aspect-square z-[-1] opacity-100">
                            <img
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop"
                                className="w-full h-full object-cover rounded-none border-[10px] border-black"
                                alt="Training environment"
                            />
                        </div>
                        <div
                            className="w-full max-w-2xl p-6 sm:p-10 border-[10px] border-black relative z-10 overflow-hidden"
                            style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}
                        >
                            <div className="relative z-10 text-center sm:text-left">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight mb-4 uppercase tracking-tighter">
                                    Ready to <span className="text-[#00BFFF]">Upskill</span> Your<br className="hidden sm:block" /> Team or Organization?
                                </h2>
                                <p className="text-white/80 text-xs sm:text-sm mb-8 leading-relaxed font-normal max-w-lg">
                                    Whether you're looking to enroll individually, run a corporate training program, or design a custom curriculum — our team is ready to work with you.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-3 mb-10">
                                    <Link to="/contact" className="h-11 sm:h-12 px-6 bg-[#00BFFF] text-black rounded-none font-black text-[10px] sm:text-xs uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 active:scale-95 flex items-center gap-2">
                                        Request Corporate Training <ArrowRight size={14} />
                                    </Link>
                                    <a href="https://wa.me/255745326627" target="_blank" rel="noopener noreferrer" className="h-11 sm:h-12 px-6 border-2 border-white text-white rounded-none font-black text-[10px] sm:text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center">
                                        Speak to an Advisor
                                    </a>
                                </div>

                                {/* Contact Links */}
                                <div className="pt-8 border-t border-white/10 flex flex-col gap-6">
                                    <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8">
                                        <a href="https://wa.me/255745326627" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-[#00BFFF] transition-colors group">
                                            <div className="w-10 h-10 bg-[#00BFFF]/10 border border-[#00BFFF]/30 flex items-center justify-center group-hover:bg-[#00BFFF] group-hover:text-black transition-all">
                                                <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                            </div>
                                            <div className="text-left">
                                                <div className="text-[9px] uppercase tracking-[0.2em] text-white/40">WhatsApp</div>
                                                <div className="text-xs font-black">+255 745 326 627</div>
                                            </div>
                                        </a>
                                        <div className="flex items-center gap-3 text-white">
                                            <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center">
                                                <ExternalLink size={18} className="text-[#00BFFF]" />
                                            </div>
                                            <div className="text-left">
                                                <div className="text-[9px] uppercase tracking-[0.2em] text-white/40">Direct Line</div>
                                                <div className="text-xs font-black">+255 755 963 001</div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#00BFFF]/60 text-center sm:text-left">
                                        Instructor-led · Hybrid · Corporate In-House · Bootcamps
                                    </p>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00BFFF]/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Training;
