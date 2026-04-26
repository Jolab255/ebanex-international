import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useParams, Link, Navigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { SEO } from '../components/layout';
import { Squares } from '../components/animations';
import { TRAINING_PROGRAMS, TrainingProgram } from '../constants/trainingData';
import {
    CheckCircle, Clock, ArrowRight, Calendar,
    ChevronDown
} from 'lucide-react';
import {
    FaCertificate, FaClock, FaChalkboardTeacher, FaLevelUpAlt, FaLaptopCode
} from 'react-icons/fa';

const TrainingProgramDetail: React.FC = () => {
    const { programId } = useParams<{ programId: string }>();
    const program: TrainingProgram | undefined = TRAINING_PROGRAMS[programId || ''];

    const [isOverviewExpanded, setIsOverviewExpanded] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [showAllFaqs, setShowAllFaqs] = useState(false);
    const syllabusRef = useRef<HTMLDivElement>(null);

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const waveScale = useTransform(smoothProgress, [0, 1], [0.9, 1.3]);
    const waveOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.4, 0.8, 0.4]);
    const waveRotate = useTransform(smoothProgress, [0, 1], [-5, 20]);

    const circle1Scale = useTransform(smoothProgress, [0, 1], [1, 1.1]);
    const circle2Scale = useTransform(smoothProgress, [0, 1], [1, 1.15]);
    const circle3Scale = useTransform(smoothProgress, [0, 1], [1, 1.2]);

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    };

    if (!program) {
        return <Navigate to="/training" replace />;
    }

    // Handle overview paragraph splitting
    const overviewParagraphs = program.longDescription?.split('\n\n') || [program.description];
    const firstParagraph = overviewParagraphs[0];
    const remainingParagraphs = overviewParagraphs.slice(1);

    return (
        <>
            <div className="bg-black min-h-screen">
                <SEO
                    title={`${program.title} | Ebanex International`}
                    description={program.description}
                    canonical={`https://ebanexint.co.tz/training/${program.slug}`}
                />

                {/* Hero Section */}
                <section className="relative z-30 flex flex-col justify-start pt-12 sm:pt-16 pb-8 sm:pb-10 w-full bg-[linear-gradient(135deg,#000000_50%,#00C4D4_50%)] overflow-hidden">
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <Squares speed={0.13} squareSize={40} direction="diagonal" borderColor="rgba(255,255,255,0.08)" hoverFillColor="rgba(255,255,255,0.05)" />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col items-center h-full justify-start">
                        <div className="mb-4 md:mb-8 text-center shrink-0 relative z-50">
                            <div className="select-none inline-block bg-black py-3 px-6 border border-white/10">
                                <motion.h2 className="text-xl sm:text-2xl lg:text-3xl font-black font-heading text-white uppercase tracking-tight">
                                    {program.title}
                                </motion.h2>
                            </div>
                        </div>

                        <div className="relative w-full max-w-5xl flex items-center justify-center lg:justify-end">
                            <div className="hidden lg:block absolute left-[-5%] lg:left-[-10%] top-[40%] -translate-y-1/2 w-[350px] sm:w-[450px] lg:w-[500px] aspect-square z-0 opacity-100 cursor-default group">
                                <div className="relative w-full h-full border-[10px] border-black shadow-[15px_15px_0px_0px_rgba(0,196,212,0.2)] overflow-hidden">
                                    <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#00C4D4]"></div>
                                </div>
                            </div>

                            <div className="lg:hidden w-full max-w-[320px] sm:max-w-[380px] aspect-square mx-auto mb-[-60px] relative z-40 group cursor-default">
                                <div className="relative w-full h-full border-[8px] border-black shadow-2xl overflow-hidden ">
                                    <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00C4D4]"></div>
                                </div>
                            </div>

                            <motion.div
                                className="w-full max-w-2xl p-5 sm:p-6 border-[10px] border-black relative overflow-hidden z-10 ml-auto"
                                style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}
                            >
                                <div className="relative z-10 space-y-3 sm:space-y-4">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="bg-[#00C4D4] text-black text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 uppercase tracking-tighter shadow-sm">{program.badge}</span>
                                        <span className="bg-[#00C4D4]/20 text-[#00C4D4] border border-[#00C4D4]/30 text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 uppercase tracking-tighter shadow-sm">Updated 2026</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-medium pt-1">
                                        <span className="w-6 sm:w-8 h-px bg-[#00C4D4]"></span>
                                        <span className="font-bold text-[#00C4D4]">EBANEX INTERNATIONAL TRAINING</span>
                                    </div>
                                    <motion.p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal text-start">
                                        {program.description}
                                    </motion.p>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-3 border-t border-white/10">
                                        <div className="flex flex-col gap-2 text-xs sm:text-sm font-medium text-slate-300">
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                                                <span>{program.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                                                <span>{program.hours}</span>
                                            </div>
                                        </div>
                                        <div className="hidden sm:block w-px bg-white/10 h-10"></div>
                                        <div className="text-sm font-medium text-white">
                                            <p className="text-[9px] sm:text-[10px] text-[#00C4D4] uppercase font-bold tracking-widest mb-0.5">Target Audience</p>
                                            <p className="text-xs sm:text-sm font-semibold text-white">{program.audience}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 sm:gap-3 pt-3">
                                        <Link 
                                            to={`/contact?service=${encodeURIComponent(program.title)}`}
                                            className="bg-[#00C4D4] text-black px-4 sm:px-5 py-2 font-bold hover:bg-[#00b0c0] transition-all flex items-center gap-2 group text-xs sm:text-sm shadow-lg"
                                        >
                                            Enroll Now <ArrowRight size={14} />
                                        </Link>
                                        <Link 
                                            to="/contact?service=Corporate Group Quote"
                                            className="bg-transparent text-white border-2 border-white/30 px-4 sm:px-5 py-2 font-bold hover:bg-white/10 transition-all flex items-center gap-2 group text-xs sm:text-sm shadow-lg"
                                        >
                                            Request Group Quote
                                        </Link>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C4D4]/10 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                            </motion.div>
                        </div>
                    </div>
                </section>


                {/* Info Cards Section */}
                <section className="w-full bg-black pt-8 sm:pt-12 pb-[30px] relative z-20 overflow-hidden">
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <Squares speed={0.13} squareSize={40} direction="diagonal" borderColor="rgba(255,255,255,0.15)" hoverFillColor="rgba(255,255,255,0.05)" />
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                            {[
                                { icon: <FaCertificate />, title: 'Global Standard', desc: 'Mapped to international frameworks and industry benchmarks' },
                                { icon: <FaClock />, title: 'CPE Credits', desc: 'Earn recognized Continuing Professional Education credits' },
                                { icon: <FaChalkboardTeacher />, title: 'Expert-Led', desc: 'Delivered by senior practitioners with real-world expertise' },
                                { icon: <FaLevelUpAlt />, title: 'Skill Uplift', desc: 'Designed for measurable career and institutional advancement' },
                                { icon: <FaLaptopCode />, title: 'Hands-On Labs', desc: 'High-fidelity simulation environments for practical learning' },
                            ].map((badge, i) => (
                                <div key={i} className="group relative aspect-square">
                                    <div className="absolute inset-0 bg-[#00C4D4] transform rotate-1 group-hover:rotate-0 transition-transform" />
                                    <div className="relative p-4 border-[4px] border-black h-full flex flex-col items-center justify-center text-center bg-[#0a1628]" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                                        <div className="text-2xl text-[#00C4D4] mb-3">{badge.icon}</div>
                                        <h3 className="text-[10px] font-black text-[#00C4D4] uppercase tracking-widest mb-2">{badge.title}</h3>
                                        <p className="text-[10px] sm:text-xs text-white/90 leading-tight">{badge.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Overview Section */}
                <section id="overview" className="relative z-20 bg-black py-12 sm:py-16 overflow-hidden">
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <Squares speed={0.13} squareSize={40} direction="diagonal" borderColor="rgba(255,255,255,0.08)" hoverFillColor="rgba(255,255,255,0.05)" />
                    </div>
                    <div className="w-full px-4 sm:px-6 lg:px-[100px] relative z-10">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-xl sm:text-2xl font-bold text-white uppercase mb-6">Program Overview</h2>
                            <div className="w-full">
                                <p className="text-slate-300 text-lg font-light leading-relaxed text-justify">
                                    {firstParagraph}
                                </p>

                                <AnimatePresence>
                                    {isOverviewExpanded && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                            className="overflow-hidden"
                                        >
                                            {remainingParagraphs.map((para, i) => (
                                                <p key={i} className="text-slate-300 text-lg font-light leading-relaxed text-justify mt-8">
                                                    {para}
                                                </p>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {remainingParagraphs.length > 0 && (
                                    <motion.button
                                        onClick={() => setIsOverviewExpanded(!isOverviewExpanded)}
                                        className="mt-8 text-[#00C4D4] hover:text-white font-bold flex items-center gap-2 transition-colors uppercase tracking-widest text-xs"
                                    >
                                        {isOverviewExpanded ? 'Show Less' : 'Read More'}
                                        <motion.span animate={{ rotate: isOverviewExpanded ? 180 : 0 }}>
                                            <ArrowRight className="w-4 h-4" />
                                        </motion.span>
                                    </motion.button>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Combined Syllabus, Impact & Evaluation Section */}
                <div className="relative w-full px-4 sm:px-6 lg:px-[100px] pb-0 bg-black z-20 overflow-visible">
                    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                        <Squares speed={0.13} squareSize={40} direction="diagonal" borderColor="rgba(255,255,255,0.08)" hoverFillColor="rgba(255,255,255,0.05)" />
                    </div>
                    <div ref={syllabusRef} className="relative" style={{ backgroundColor: '#00C4D4' }}>
                        <motion.div style={{ scale: waveScale, opacity: waveOpacity, rotate: waveRotate }} className="absolute -right-40 -bottom-40 w-[600px] h-[600px] pointer-events-none">
                            <svg viewBox="0 0 200 200" className="w-full h-full">
                                <defs>
                                    <radialGradient id="waveGradientTemplate" cx="50%" cy="50%" r="50%">
                                        <stop offset="0%" stopColor="#00C4D4" stopOpacity="0.3" />
                                        <stop offset="100%" stopColor="#00C4D4" stopOpacity="0" />
                                    </radialGradient>
                                </defs>
                                <motion.circle style={{ scale: circle1Scale }} cx="100" cy="100" r="40" fill="none" stroke="url(#waveGradientTemplate)" strokeWidth="8" />
                                <motion.circle style={{ scale: circle2Scale }} cx="100" cy="100" r="70" fill="none" stroke="url(#waveGradientTemplate)" strokeWidth="12" />
                                <motion.circle style={{ scale: circle3Scale }} cx="100" cy="100" r="100" fill="none" stroke="url(#waveGradientTemplate)" strokeWidth="16" />
                            </svg>
                        </motion.div>

                        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-[100px] py-20">
                            <motion.div id="syllabus" className="mb-20">
                                <h2 className="text-3xl sm:text-4xl font-black text-black uppercase mb-12">Curriculum Focus</h2>
                                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                                    <div className="p-8 shadow-2xl bg-[#0a1628]" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                                        <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3">
                                            <span className="w-2 h-8 bg-[#00C4D4]"></span> Technical Skills
                                        </h3>
                                        <ul className="space-y-4">
                                            {program.skills.technical.map((skill, i) => (
                                                <li key={i} className="flex items-start gap-3 text-white/80 font-medium text-sm sm:text-base leading-relaxed text-start">
                                                    <CheckCircle className="w-5 h-5 text-[#00C4D4] shrink-0 mt-0.5" />
                                                    {skill}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="p-8 shadow-2xl bg-[#0a1628]" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                                        <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3">
                                            <span className="w-2 h-8 bg-[#00C4D4]"></span> Business Impact
                                        </h3>
                                        <ul className="space-y-4">
                                            {program.skills.business.map((skill, i) => (
                                                <li key={i} className="flex items-start gap-3 text-white/80 font-medium text-sm sm:text-base leading-relaxed text-start">
                                                    <CheckCircle className="w-5 h-5 text-[#00C4D4] shrink-0 mt-0.5" />
                                                    {skill}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Instructor Section */}
                <section className="relative flex flex-col justify-center py-16 sm:py-24 w-full bg-[linear-gradient(135deg,#000000_50%,#00C4D4_50%)] overflow-visible z-20">
                    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                        <Squares speed={0.13} squareSize={40} direction="diagonal" borderColor="rgba(255,255,255,0.08)" hoverFillColor="rgba(255,255,255,0.05)" />
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
                        <div className="relative w-full max-w-5xl flex items-center justify-center lg:justify-end mx-auto">
                            <div className="absolute left-[-5%] lg:left-[-10%] top-1/2 -translate-y-1/2 w-[280px] sm:w-[400px] lg:w-[480px] aspect-[4/5] z-20">
                                <img src={program.instructor.image} className="w-full h-full object-cover border-[10px] border-black" alt="" />
                            </div>
                            <div className="w-full max-w-2xl p-6 sm:p-10 border-[10px] border-black relative z-30 ml-auto bg-[#0a1628]" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                                <h2 className="text-xl font-black text-white uppercase mb-4 text-start">Meet Your <span className="text-[#00C4D4]">Instructor</span></h2>
                                <blockquote className="text-sm sm:text-base font-normal text-white leading-relaxed mb-6 italic text-start">
                                    &quot;{program.instructor.bio}&quot;
                                </blockquote>
                                <div className="grid grid-cols-3 gap-2 mb-6">
                                    {program.instructor.stats.map((s, i) => (
                                        <div key={i} className="text-center p-2 bg-black/20 border-2 border-black">
                                            <div className="text-lg font-black text-[#00C4D4]">{s.number}</div>
                                            <div className="text-[9px] uppercase tracking-widest text-white/70 font-bold">{s.label}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                                    <div className="text-left">
                                        <h3 className="text-lg font-black text-white uppercase">{program.instructor.name}</h3>
                                        <p className="text-[#00C4D4] text-[10px] font-bold uppercase tracking-widest mt-1">{program.instructor.role}</p>
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {program.instructor.certs.map(c => <span key={c} className="bg-[#00C4D4] text-black px-2 py-0.5 text-[9px] font-black">{c}</span>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faqs" className="relative w-full py-16 sm:py-24 px-4 sm:px-6 bg-[linear-gradient(135deg,#00C4D4_50%,#000000_50%)] overflow-hidden isolate">
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <Squares speed={0.13} squareSize={40} direction="diagonal" borderColor="rgba(255,255,255,0.08)" hoverFillColor="rgba(255,255,255,0.05)" />
                    </div>
                    <div className="max-w-4xl mx-auto relative z-10">
                        <div className="text-center mb-12">
                            <div className="select-none inline-block bg-black py-3 px-8 border border-white/10">
                                <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">Frequently Asked <span className="text-[#00C4D4]">Questions</span></h2>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <AnimatePresence initial={false}>
                                {program.faqs.slice(0, showAllFaqs ? 99 : 3).map((faq, i) => (
                                    <motion.div
                                        key={i}
                                        layout
                                        initial={{ opacity: 0, height: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, height: 'auto', scale: 1 }}
                                        exit={{ opacity: 0, height: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="w-full"
                                    >
                                        <motion.div
                                            className={cn("relative overflow-hidden transition-all duration-300 border-[3px]", openFaq === i ? 'border-[#00C4D4] shadow-[6px_6px_0px_0px_rgba(0,196,212,0.3)]' : 'border-black')}
                                            style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}
                                        >
                                            <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-4 sm:p-6 text-left group">
                                                <div className="flex items-center gap-4">
                                                    <span className={cn("w-8 h-8 sm:w-10 sm:h-10 border-2 border-black flex items-center justify-center text-xs sm:text-sm font-black transition-colors", openFaq === i ? 'bg-black text-[#00C4D4]' : 'bg-[#00C4D4] text-black group-hover:bg-white')}>{String(i + 1).padStart(2, '0')}</span>
                                                    <span className={cn("font-black uppercase text-xs sm:text-sm lg:text-base transition-colors pr-4", openFaq === i ? 'text-white' : 'text-white/80 group-hover:text-[#00C4D4]')}>{faq.question}</span>
                                                </div>
                                                <div className={cn("shrink-0 w-8 h-8 sm:w-10 sm:h-10 border-2 border-black flex items-center justify-center transition-colors", openFaq === i ? 'bg-black text-[#00C4D4]' : 'bg-transparent text-white/50 group-hover:bg-[#00C4D4] group-hover:text-black')}>
                                                    <ChevronDown size={18} className={cn("transition-transform duration-300", openFaq === i ? 'rotate-180' : '')} />
                                                </div>
                                            </button>
                                            <AnimatePresence>
                                                {openFaq === i && (
                                                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
                                                        <div className="px-4 sm:px-6 pb-4 sm:pb-6 pl-[60px] sm:pl-[80px]">
                                                            <p className="text-white/90 font-medium text-xs sm:text-sm leading-relaxed text-start">{faq.answer}</p>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {program.faqs.length > 3 && (
                            <motion.div className="mt-12 flex justify-center relative z-10">
                                <button
                                    onClick={() => setShowAllFaqs(!showAllFaqs)}
                                    className="bg-transparent text-white border-2 border-[#00C4D4] px-8 py-3 font-black hover:bg-[#00C4D4] hover:text-black active:scale-95 transition-all flex items-center gap-2 group text-xs uppercase tracking-widest"
                                >
                                    {showAllFaqs ? 'Show Less' : 'View All FAQs'}
                                    <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", showAllFaqs ? 'rotate-180' : '')} />
                                </button>
                            </motion.div>
                        )}
                    </div>
                </section>

                {/* Final CTA */}
                <section id="register" className="min-h-[90vh] relative z-40 bg-[linear-gradient(135deg,#00C4D4_50%,#000000_50%)] flex flex-col items-center justify-center px-4 overflow-hidden">
                    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                        <Squares speed={0.13} squareSize={40} direction="diagonal" borderColor="rgba(255,255,255,0.08)" hoverFillColor="rgba(255,255,255,0.05)" />
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col items-center">
                        <div className="relative w-full max-w-4xl flex items-center justify-center lg:justify-start">
                            <div className="absolute right-[-10%] lg:right-[-15%] top-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] lg:w-[500px] aspect-square z-0 opacity-100">
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" className="w-full h-full object-cover border-[10px] border-black" alt="" />
                            </div>
                            <div className="w-full max-w-2xl p-6 sm:p-10 border-[10px] border-black relative z-10 overflow-hidden bg-[#0a1628]" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                                <div className="relative z-10 text-center sm:text-left">
                                    <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-white leading-tight mb-4 uppercase tracking-tighter">Ready to <span className="text-[#00C4D4]">Train</span> Your <br className="hidden sm:block" /> Workforce?</h2>
                                    <p className="text-white/80 text-sm mb-8 leading-relaxed font-medium max-w-lg text-start">Partner with Ebanex International to develop the technical capability and institutional effectiveness of your organization. Our comprehensive training programs are tailored to your unique needs.</p>
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4">
                                        <button className="h-12 px-8 bg-[#00C4D4] text-black font-black text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2">Request Corporate Training <ArrowRight size={14} /></button>
                                        <Link to="/training" className="h-12 px-8 border-2 border-white text-white font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center">View All Programs</Link>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C4D4]/10 blur-3xl pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default TrainingProgramDetail;

