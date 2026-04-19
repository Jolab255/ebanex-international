import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/layout';
import { Squares } from '../components/animations';
import {
    Users,
    CheckCircle,
    Clock,
    ArrowRight,
    PlayCircle,
    BookOpen,
    Calendar,
    Shield,
    AlertTriangle,
    Target,
    Award,
    Linkedin,
    Twitter,
    ChevronRight,
    Home,
    Lock,
    Database,
    FileKey,
    GlobeLock
} from 'lucide-react';
import {
    FaCertificate,
    FaClock,
    FaChalkboardTeacher,
    FaLevelUpAlt,
    FaLaptopCode,
} from 'react-icons/fa';

const Counter: React.FC<{ target: number; suffix?: string; duration?: number }> = ({
    target,
    suffix = '',
    duration = 2,
}) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const increment = target / (duration * 60);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start * 10) / 10);
            }
        }, 1000 / 60);

        return () => clearInterval(timer);
    }, [isInView, target, duration]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
};

const DataPrivacyProtection: React.FC = () => {
    const [activeSection, setActiveSection] = useState('overview');
    const [isOverviewExpanded, setIsOverviewExpanded] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [showAllFaqs, setShowAllFaqs] = useState(false);
    const [isInSyllabus, setIsInSyllabus] = useState(false);
    const syllabusRef = useRef<HTMLDivElement>(null);

    const syllabusScrollY = useScroll({
        target: syllabusRef,
        offset: ['start end', 'end start'],
    }).scrollYProgress;

    useEffect(() => {
        const unsubscribe = syllabusScrollY.on('change', (latest) => {
            setIsInSyllabus(latest > 0 && latest < 1);
        });
        return unsubscribe;
    }, [syllabusScrollY]);

    const scrollToSection = (id: string) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            const offset = 120;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    };

    // Wave animation variables for testimonial
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

    return (
        <>
            <div>
                <SEO
                    title="Data Privacy & Protection | Ebanex International"
                    description="Master data compliance and privacy engineering. Learn GDPR, encryption strategies, and Privacy by Design principles."
                    keywords="data privacy, CDPSE, GDPR, data protection, privacy by design, compliance"
                    canonical="https://ebanexint.co.tz/training/data-privacy"
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
                                    Data Privacy <span className="text-[#00C4D4]">& Protection</span>
                                </motion.h2>
                            </div>
                        </div>

                        <div className="relative w-full max-w-5xl flex items-center justify-center lg:justify-end">
                            <div className="hidden lg:block absolute left-[-5%] lg:left-[-10%] top-[40%] -translate-y-1/2 w-[350px] sm:w-[450px] lg:w-[500px] aspect-square z-0 opacity-100 cursor-pointer group">
                                <div className="relative w-full h-full border-[10px] border-black shadow-[15px_15px_0px_0px_rgba(0,196,212,0.2)] overflow-hidden">
                                    <img src="https://picsum.photos/seed/dataprivacy/800/800" alt="Data Privacy Preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-[#00C4D4] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-black border-b-[10px] border-b-transparent ml-1"></div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#FF0000]"></div>
                                </div>
                            </div>

                            <div className="lg:hidden w-full max-w-[320px] sm:max-w-[380px] aspect-square mx-auto mb-[-60px] relative z-40 group cursor-pointer">
                                <div className="relative w-full h-full border-[8px] border-black shadow-2xl overflow-hidden ">
                                    <img src="https://picsum.photos/seed/dataprivacy/800/800" alt="Data Privacy Preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 bg-[#00C4D4] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-black border-b-[8px] border-b-transparent ml-1"></div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FF0000]"></div>
                                </div>
                            </div>

                            <motion.div className="w-full max-w-2xl p-5 sm:p-6 border-[10px] border-black shadow-none relative overflow-hidden z-10 ml-auto" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                                <div className="relative z-10 space-y-3 sm:space-y-4">
                                    <motion.div className="flex flex-wrap items-center gap-2">
                                        <span className="bg-[#00C4D4] text-black text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 uppercase tracking-tighter shadow-sm">Essential Regulatory</span>
                                        <span className="bg-[#00C4D4]/20 text-[#00C4D4] border border-[#00C4D4]/30 text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 uppercase tracking-tighter shadow-sm">CDPSE Aligned</span>
                                    </motion.div>
                                    <motion.div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-medium pt-1">
                                        <span className="w-6 sm:w-8 h-px bg-[#00C4D4]"></span>
                                        <span className="font-bold text-[#00C4D4]">Ebanex International Compliance Training</span>
                                    </motion.div>
                                    <motion.p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal text-start">
                                        Transform privacy from a legal obligation into an engineering discipline. Equip your team to build compliant systems and protect personal data across its entire lifecycle.
                                    </motion.p>
                                    <motion.div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-3 border-t border-white/10">
                                        <div className="flex flex-col gap-2 text-xs sm:text-sm font-medium text-slate-300">
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                                                <span>5 Days (Instructor-Led)</span>
                                            </div>
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                                                <span>30 Hours (Hybrid)</span>
                                            </div>
                                        </div>
                                        <div className="hidden sm:block w-px bg-white/10 h-10"></div>
                                        <div className="sm:hidden w-full h-px bg-white/10 my-1"></div>
                                        <div className="text-sm font-medium text-white">
                                            <p className="text-[9px] sm:text-[10px] text-[#00C4D4] uppercase font-bold tracking-widest mb-0.5 sm:mb-1">Target Audience</p>
                                            <p className="text-xs sm:text-sm font-semibold text-white">DPOs, IT Architects, Legal Teams</p>
                                        </div>
                                    </motion.div>
                                    <motion.div className="flex flex-wrap gap-2 sm:gap-3 pt-3">
                                        <button className="bg-[#00C4D4] text-black px-4 sm:px-5 py-2 font-bold hover:bg-[#00b0c0] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group text-xs sm:text-sm shadow-lg">Enroll in Program <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" /></button>
                                        <button className="bg-transparent text-white border-2 border-white/30 px-4 sm:px-5 py-2 font-bold hover:bg-white/10 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group text-xs sm:text-sm shadow-lg hover:border-white/60">Request Training <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" /></button>
                                    </motion.div>
                                </div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C4D4]/10 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Certification Info Section */}
                <section className="w-full bg-black pt-8 sm:pt-12 pb-[30px] relative z-20 overflow-hidden">
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <Squares speed={0.13} squareSize={40} direction="diagonal" borderColor="rgba(255,255,255,0.15)" hoverFillColor="rgba(255,255,255,0.05)" />
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
                            <div className="group relative w-full aspect-square">
                                <div className="absolute inset-0 bg-[#00C4D4] transform rotate-2 group-hover:rotate-0 transition-transform duration-300" />
                                <div className="relative p-4 sm:p-6 border-[4px] border-black shadow-lg transition-all duration-300 h-full flex flex-col items-center justify-center text-center bg-[#0a1628]" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                                    <FaCertificate className="w-8 h-8 text-[#00C4D4] mb-4 shrink-0" />
                                    <h3 className="text-[10px] font-black text-[#00C4D4] uppercase tracking-[0.15em] flex items-center gap-2 mb-3"><span className="w-1.5 h-1.5 bg-[#00C4D4]" /> CDPSE Target</h3>
                                    <p className="text-[11px] sm:text-xs leading-relaxed font-normal text-white/90 line-clamp-4">Maps to the ISACA Certified Data Privacy Solutions Engineer domains</p>
                                </div>
                            </div>
                            <div className="group relative w-full aspect-square">
                                <div className="absolute inset-0 bg-[#00C4D4] transform -rotate-1 group-hover:rotate-0 transition-transform duration-300" />
                                <div className="relative p-5 sm:p-6 border-[4px] border-black shadow-lg transition-all duration-300 h-full flex flex-col items-center justify-center text-center bg-[#0a1628]" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                                    <FaClock className="w-8 h-8 text-[#00C4D4] mb-4 shrink-0" />
                                    <h3 className="text-[10px] font-black text-[#00C4D4] uppercase tracking-[0.15em] flex items-center gap-2 mb-3"><span className="w-1.5 h-1.5 bg-[#00C4D4]" /> 30 CPE</h3>
                                    <p className="text-[11px] sm:text-xs leading-relaxed font-normal text-white/90 line-clamp-4">Continuing Education credits for audit and legal professionals</p>
                                </div>
                            </div>
                            <div className="group relative w-full aspect-square">
                                <div className="absolute inset-0 bg-[#00C4D4] transform rotate-2 group-hover:rotate-0 transition-transform duration-300" />
                                <div className="relative p-5 sm:p-6 border-[4px] border-black shadow-lg transition-all duration-300 h-full flex flex-col items-center justify-center text-center bg-[#0a1628]" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                                    <FaChalkboardTeacher className="w-8 h-8 text-[#00C4D4] mb-4 shrink-0" />
                                    <h3 className="text-[10px] font-black text-[#00C4D4] uppercase tracking-[0.15em] flex items-center gap-2 mb-3"><span className="w-1.5 h-1.5 bg-[#00C4D4]" /> Expert Led</h3>
                                    <p className="text-[11px] sm:text-xs leading-relaxed font-normal text-white/90 line-clamp-4">Taught by practitioners experienced across global regulatory regimes</p>
                                </div>
                            </div>
                            <div className="group relative w-full aspect-square">
                                <div className="absolute inset-0 bg-[#00C4D4] transform -rotate-2 group-hover:rotate-0 transition-transform duration-300" />
                                <div className="relative p-5 sm:p-6 border-[4px] border-black shadow-lg transition-all duration-300 h-full flex flex-col items-center justify-center text-center bg-[#0a1628]" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                                    <FaLevelUpAlt className="w-8 h-8 text-[#00C4D4] mb-4 shrink-0" />
                                    <h3 className="text-[10px] font-black text-[#00C4D4] uppercase tracking-[0.15em] flex items-center gap-2 mb-3"><span className="w-1.5 h-1.5 bg-[#00C4D4]" /> Hybrid</h3>
                                    <p className="text-[11px] sm:text-xs leading-relaxed font-normal text-white/90 line-clamp-4">Combines legal framework understanding with technical implementation</p>
                                </div>
                            </div>
                            <div className="group relative w-full aspect-square">
                                <div className="absolute inset-0 bg-[#00C4D4] transform rotate-1 group-hover:rotate-0 transition-transform duration-300" />
                                <div className="relative p-5 sm:p-6 border-[4px] border-black shadow-lg transition-all duration-300 h-full flex flex-col items-center justify-center text-center bg-[#0a1628]" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                                    <FaLaptopCode className="w-8 h-8 text-[#00C4D4] mb-4 shrink-0" />
                                    <h3 className="text-[10px] font-black text-[#00C4D4] uppercase tracking-[0.15em] flex items-center gap-2 mb-3"><span className="w-1.5 h-1.5 bg-[#00C4D4]" /> Labs</h3>
                                    <p className="text-[11px] sm:text-xs leading-relaxed font-normal text-white/90 line-clamp-4">Perform hands-on DPIAs and build data classification architectures</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Jump To Navigation */}
                <div className="sticky top-0 z-50 py-4 sm:py-6 transition-all duration-500 border-b-[4px] border-black shadow-2xl bg-[#00C4D4]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                        <div className="text-[11px] font-black uppercase tracking-[0.2em] text-black pl-0">Jump to:</div>
                        <div className="flex items-center gap-4 sm:gap-6 mr-[3%]">
                            <button onClick={() => scrollToSection('overview')} className={`text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border-2 px-4 py-2 ${isInSyllabus ? 'border-transparent text-black hover:bg-black hover:text-[#00C4D4]' : 'border-black bg-black text-[#00C4D4]'}`}>Overview</button>
                            <button onClick={() => scrollToSection('syllabus')} className={`text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border-2 px-4 py-2 ${isInSyllabus ? 'border-black bg-black text-[#00C4D4]' : 'border-transparent text-black hover:bg-black hover:text-[#00C4D4]'}`}>Syllabus</button>
                            <button onClick={() => scrollToSection('faqs')} className={`text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border-2 px-4 py-2 border-transparent text-black hover:bg-black hover:text-[#00C4D4]`}>FAQs</button>
                            <button onClick={() => scrollToSection('schedule')} className={`text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border-2 px-4 py-2 border-transparent text-black hover:bg-black hover:text-[#00C4D4]`}>Schedule</button>
                        </div>
                    </div>
                </div>

                {/* Client Success Story */}
                <section className="mt-8 sm:mt-12 relative z-40 overflow-visible bg-[linear-gradient(135deg,#00C4D4_50%,#000000_50%)] flex flex-col items-center justify-center min-h-[50vh] pt-8 sm:pt-12 pb-8 sm:pb-16 px-4 w-full">
                    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                        <Squares speed={0.13} squareSize={40} direction="diagonal" borderColor="rgba(255,255,255,0.08)" hoverFillColor="rgba(255,255,255,0.05)" />
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col items-center">
                        <div className="relative w-full max-w-5xl flex items-center justify-center lg:justify-start mt-4">
                            <div className="hidden lg:block absolute right-[-5%] lg:right-[-10%] top-1/2 -translate-y-1/2 w-[280px] sm:w-[380px] lg:w-[450px] aspect-square z-0 opacity-100">
                                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover border-[10px] border-black" alt="Client Testimonial" referrerPolicy="no-referrer" />
                            </div>
                            <div className="lg:hidden w-full max-w-[280px] sm:max-w-[340px] aspect-square mx-auto mb-[-60px] relative z-40">
                                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover border-[8px] border-black" alt="Client Testimonial" referrerPolicy="no-referrer" />
                            </div>
                            <div className="w-full max-w-2xl p-5 sm:p-8 border-[10px] border-black relative z-10 overflow-hidden shadow-2xl mr-auto" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                                <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
                                    <div className="text-[#00C4D4] font-serif text-6xl leading-none h-8 -ml-1 select-none">"</div>
                                    <p className="text-white/90 text-base sm:text-lg mb-5 leading-relaxed font-light italic mt-2 text-justify">
                                        We struggled for months trying to align our IT operations with complex regional data protection laws. Ebanex's CDPSE-aligned training showed our architects how to build 'Privacy by Design' directly into our cloud applications, preventing compliance issues before they were even coded.
                                    </p>
                                    <div className="flex items-center gap-4 border-t border-white/10 pt-4 w-full justify-center lg:justify-start">
                                        <div className="w-12 h-px bg-[#00C4D4]" />
                                        <div>
                                            <h4 className="font-bold text-sm sm:text-base text-white uppercase tracking-widest text-left">Chinedu Okafor</h4>
                                            <p className="text-[#00C4D4] font-medium uppercase tracking-[0.2em] text-[10px] mt-1 text-left">Chief Data Officer, Pan-African Retail Network</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C4D4]/10 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Program Overview */}
                <section id="overview" className="relative z-20 overflow-hidden bg-black py-16 sm:py-24">
                    <div className="absolute inset-0 z-0 pointer-events-none"><Squares speed={0.13} squareSize={40} direction="diagonal" borderColor="rgba(255,255,255,0.08)" hoverFillColor="rgba(255,255,255,0.05)" /></div>
                    <div className="w-full px-4 sm:px-6 lg:px-[100px] relative z-10">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-[clamp(1.25rem,4vw,2.5rem)] font-light font-heading mb-12 text-white">Program Overview</h2>
                            <div className="w-full">
                                <p className="text-slate-300 text-lg font-light leading-relaxed text-justify">
                                    Data Privacy & Protection is designed to bridge the chasm between legal compliance teams and IT engineering. As data breaches incur increasingly massive fines under laws like GDPR, simply having a privacy policy is insufficient. Organizations must implement substantive, technical privacy controls. This course teaches professionals how to engineer solutions that protect Personally Identifiable Information (PII) without hamstringing business operations.
                                </p>
                                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: isOverviewExpanded ? 1 : 0, height: isOverviewExpanded ? 'auto' : 0 }} transition={{ duration: 0.5, ease: 'easeOut' }} className="overflow-hidden">
                                    <p className="text-slate-300 text-lg font-light leading-relaxed text-justify mt-8">
                                        Participants will deeply explore the concept of Privacy by Design, learning to build data flow maps and architect secure databases using tokenization and encryption. By examining the complete data lifecycle—from ingestion to secure destruction—students will be equipped to perform rigorous Data Protection Impact Assessments (DPIAs) and handle complex Data Subject Access Requests (DSARs).
                                    </p>
                                </motion.div>
                                <motion.button onClick={() => setIsOverviewExpanded(!isOverviewExpanded)} className="mt-8 text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 transition-colors">
                                    {isOverviewExpanded ? 'Show Less' : 'Read More'}
                                    <motion.span animate={{ rotate: isOverviewExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}><ArrowRight className="w-4 h-4" /></motion.span>
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* What You'll Learn & Measurable Impact */}
                <div className="relative w-full px-4 sm:px-6 lg:px-[100px] pb-0 bg-black z-20">
                    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden"><Squares speed={0.13} squareSize={40} direction="diagonal" borderColor="rgba(255,255,255,0.08)" hoverFillColor="rgba(255,255,255,0.05)" /></div>
                    <div ref={syllabusRef} className="relative" style={{ backgroundColor: '#00C4D4' }}>
                        <motion.div style={{ scale: waveScale, opacity: waveOpacity, rotate: waveRotate }} className="absolute -right-40 -bottom-40 w-[600px] h-[600px] pointer-events-none">
                            <svg viewBox="0 0 200 200" className="w-full h-full">
                                <defs><radialGradient id="waveGradientCombined" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#00C4D4" stopOpacity="0.3" /><stop offset="100%" stopColor="#00C4D4" stopOpacity="0" /></radialGradient></defs>
                                <motion.circle style={{ scale: circle1Scale }} cx="100" cy="100" r="40" fill="none" stroke="url(#waveGradientCombined)" strokeWidth="8" />
                                <motion.circle style={{ scale: circle2Scale }} cx="100" cy="100" r="70" fill="none" stroke="url(#waveGradientCombined)" strokeWidth="12" />
                                <motion.circle style={{ scale: circle3Scale }} cx="100" cy="100" r="100" fill="none" stroke="url(#waveGradientCombined)" strokeWidth="16" />
                            </svg>
                        </motion.div>

                        <div className="relative z-10 max-w-7xl mx-auto px-[100px] py-20">
                            <motion.div id="syllabus" className="mb-20">
                                <h2 className="text-[clamp(1.25rem,4vw,2.5rem)] font-light font-heading mb-12 text-black">What You'll Learn</h2>
                                <div className="grid md:grid-cols-2 gap-12">
                                    <div className="p-8 shadow-2xl" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                                        <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3"><span className="w-2 h-8 bg-[#00C4D4]"></span>Engineering Skills</h3>
                                        <ul className="space-y-4">
                                            {[
                                                'Integrate granular Privacy by Design constraints directly into architectures',
                                                'Execute Data Protection Impact Assessments (DPIAs) prior to processing changes',
                                                'Automate mechanisms necessary for honoring complex DSARs',
                                                'Implement robust technical encryption and algorithmic tokenization',
                                                'Design legally defensible data destruction routines',
                                                'Conduct thorough vendor privacy audits to minimize external liabilities',
                                            ].map((item, index) => (
                                                <motion.li key={index} className="flex items-start gap-3 text-white/80 font-medium leading-relaxed">
                                                    <CheckCircle className="w-5 h-5 text-[#00C4D4] mt-0.5 shrink-0 flex-shrink-0" />{item}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="p-8 shadow-2xl" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                                        <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3"><span className="w-2 h-8 bg-[#00C4D4]"></span>Business Benefits</h3>
                                        <ul className="space-y-4">
                                            {[
                                                'Operate efficiently across global regulatory environments',
                                                'Minimize legal and financial risks of GDPR and external violations',
                                                'Demonstrate privacy commitment to enterprise clients',
                                                'Reduce the volume of redundant and dark data held in storage',
                                                'Design products that leverage customer data optimally within boundaries',
                                                'Avoid reputation damaging incidents resulting from mishandled info',
                                            ].map((item, index) => (
                                                <motion.li key={index} className="flex items-start gap-3 text-white/80 font-medium leading-relaxed">
                                                    <CheckCircle className="w-5 h-5 text-[#00C4D4] mt-0.5 shrink-0 flex-shrink-0" />{item}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="grid lg:grid-cols-2 gap-16">
                                <div className="lg:sticky lg:top-[120px] lg:h-fit">
                                    <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-black font-heading mb-8 text-black">Measurable Impact</h2>
                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        {[
                                            { metric: 95, suffix: '%', label: 'Compliance Health' },
                                            { metric: 100, suffix: '%', label: 'Lifecycle Visibility' },
                                            { metric: 50, suffix: '%', label: 'DSAR Speed Uplift' },
                                            { metric: 80, suffix: '%', label: 'Risk Decrease' },
                                        ].map((stat, index) => (
                                            <div key={index} className="text-center p-5 sm:p-6 flex flex-col justify-center items-center shadow-xl" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                                                <div className="text-4xl sm:text-5xl font-black text-[#00C4D4] mb-2 drop-shadow-md"><Counter target={stat.metric} suffix={stat.suffix} /></div>
                                                <div className="text-[10px] sm:text-xs text-white/90 font-bold uppercase tracking-widest">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-col xl:flex-row gap-3 mt-6">
                                        <button className="w-full bg-transparent border-[3px] border-black text-black px-4 sm:px-5 py-3 font-black uppercase tracking-widest text-[10px] sm:text-[11px] hover:bg-black hover:text-[#00C4D4] transition-colors flex items-center justify-center gap-2">Request Group Training <ArrowRight className="w-4 h-4" /></button>
                                        <button className="w-full bg-transparent border-[3px] border-black text-black px-4 sm:px-5 py-3 font-black uppercase tracking-widest text-[10px] sm:text-[11px] hover:bg-black hover:text-[#00C4D4] transition-colors flex items-center justify-center">Schedule & Pricing</button>
                                    </div>
                                </div>

                                <div className="space-y-12 pb-32">
                                    <div>
                                        <h3 className="text-xl font-black text-black mb-4 pb-3 border-b-2 border-black/20">Tactical Syllabus</h3>
                                        <ul className="space-y-4">
                                            {[
                                                { phase: 'Governance', desc: 'GDPR & Regional Laws, Frameworks, Classification' },
                                                { phase: 'Architecture', desc: 'Privacy by Design, Data Flow Mapping, Vendor Risk' },
                                                { phase: 'Technical Controls', desc: 'Encryption Protocols, Data Masking, Secure Disposal' },
                                                { phase: 'Compliance', desc: 'Breach Notification, Handling DSARs, DPIA Execution' },
                                            ].map((phase, index) => (
                                                <li key={index} className="p-5 sm:p-6 shadow-xl" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                                                    <div><span className="text-[#00C4D4] font-black block mb-1 tracking-wide">{phase.phase}</span><span className="text-white/90 font-medium text-sm leading-relaxed">{phase.desc}</span></div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black text-black mb-4 pb-3 border-b-2 border-black/20">Assessed Competencies</h3>
                                        <ul className="space-y-4">
                                            {[
                                                { title: 'Design Labs', desc: 'Hands-on DPIA execution and flow mapping exercises' },
                                                { title: 'Implementation Test', desc: 'Simulation of encryption and DSAR automation' },
                                                { title: 'Maturity Score', desc: 'Post-program privacy engineering readiness review' },
                                            ].map((item, index) => (
                                                <li key={index} className="p-5 sm:p-6 shadow-xl" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                                                    <div><span className="text-[#00C4D4] font-black text-sm block mb-1 tracking-wide">{item.title}</span><span className="text-white/90 font-medium text-sm leading-relaxed">{item.desc}</span></div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Meet Your Instructor */}
                <section className="relative flex flex-col justify-center py-16 sm:py-24 w-full bg-[linear-gradient(135deg,#000000_50%,#00C4D4_50%)] overflow-visible z-20">
                    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden"><Squares speed={0.13} squareSize={40} direction="diagonal" borderColor="rgba(255,255,255,0.08)" hoverFillColor="rgba(255,255,255,0.05)" /></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col items-center h-full justify-center">
                        <div className="relative w-full max-w-5xl flex items-center justify-center lg:justify-end">
                            <div className="absolute left-[-5%] lg:left-[-10%] top-[50%] -translate-y-1/2 w-[280px] sm:w-[400px] lg:w-[480px] aspect-[4/5] z-20 opacity-100">
                                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=533&fit=crop&crop=faces" alt="Jonathan Hayes" className="w-full h-full object-cover border-[10px] border-black" />
                            </div>
                            <motion.div className="w-full max-w-2xl p-4 sm:p-6 border-[10px] border-black shadow-none relative overflow-hidden z-30 ml-auto bg-[#0a1628]" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                                <div className="relative z-10">
                                    <h2 className="text-sm sm:text-base lg:text-lg font-black font-heading text-white uppercase tracking-tight mb-2">Meet Your <span className="text-[#00C4D4]">Instructor</span></h2>
                                    <blockquote className="text-xs sm:text-sm lg:text-base font-normal text-white leading-relaxed mb-3 relative px-2 sm:px-3">
                                        <span className="text-[#00C4D4] text-3xl sm:text-4xl font-serif absolute -top-2 -left-1 opacity-50">&ldquo;</span>
                                        Jonathan specializes in bridging the gap between corporate legal counsel and IT engineering. He emphasizes privacy engineering, teaching developers how to embed encryption and DSAR compliance directly into codebases.
                                        <span className="text-[#00C4D4] text-3xl sm:text-4xl font-serif absolute -bottom-4 -right-1 opacity-50">&rdquo;</span>
                                    </blockquote>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-3 gap-2 py-0">
                                            {[
                                                { number: '15+', label: 'Years Exp' },
                                                { number: '5k+', label: 'Trained' },
                                                { number: '200+', label: 'Orgs' },
                                            ].map((stat, index) => (
                                                <div key={index} className="text-center p-1 sm:p-2 bg-black/20 border-2 border-black">
                                                    <div className="text-base sm:text-lg font-black text-[#00C4D4]">{stat.number}</div>
                                                    <div className="text-[8px] sm:text-[9px] uppercase tracking-widest text-white/70 mt-0 sm:mt-1 font-bold">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-3 border-t border-white/10 w-full">
                                            <div className="flex gap-3 shrink-0">
                                                <a href="#" className="w-10 h-10 bg-black flex items-center justify-center hover:bg-[#00C4D4] transition-colors border-2 border-black hover:text-black text-white"><Linkedin size={16} /></a>
                                                <a href="#" className="w-10 h-10 bg-black flex items-center justify-center hover:bg-[#00C4D4] transition-colors border-2 border-black hover:text-black text-white"><Twitter size={16} /></a>
                                            </div>
                                            <div className="sm:border-l border-white/10 sm:pl-4 shrink-0">
                                                <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-tighter leading-tight">Jonathan Hayes</h3>
                                                <p className="text-[#00C4D4] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mt-1">DPO & Architect</p>
                                            </div>
                                            <div className="mt-2 sm:mt-0 sm:ml-auto shrink-0 bg-[#00C4D4] text-black px-3 py-1.5 sm:px-4 sm:py-2 font-black text-[9px] sm:text-[10px] uppercase tracking-widest border-2 border-black shadow-sm self-start sm:self-center">CDPSE, CIPP/E, CISSP</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C4D4]/10 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <motion.div id="faqs" className="relative w-full py-16 sm:py-24 px-4 sm:px-6 bg-[linear-gradient(135deg,#00C4D4_50%,#000000_50%)] overflow-hidden isolate">
                    <div className="absolute inset-0 z-0 pointer-events-none"><Squares speed={0.13} squareSize={40} direction="diagonal" borderColor="rgba(255,255,255,0.08)" hoverFillColor="rgba(255,255,255,0.05)" /></div>
                    <div className="mb-12 md:mb-16 text-center shrink-0 relative z-50">
                        <div className="select-none inline-block bg-black py-3 px-6 sm:px-8 border border-white/10 shadow-none">
                            <motion.h2 className="text-xl sm:text-2xl lg:text-3xl font-black font-heading text-white uppercase tracking-tight">Frequently Asked <span className="text-[#00C4D4]">Questions</span></motion.h2>
                        </div>
                    </div>
                    <motion.div layout className="relative z-10 max-w-4xl mx-auto space-y-4">
                        <AnimatePresence initial={false}>
                            {[
                                { question: 'Is this course for lawyers or for IT engineers?', answer: 'Both. Data privacy is a cross-functional discipline. Engineers must understand the legal obligations, while legal professionals must understand the technical reality.' },
                                { question: 'Does this course teach specific data regulations?', answer: 'We cover the universal principles of data protection, heavily utilizing GDPR. We also touch upon regional privacy laws (CCPA, LGPD) and sector-specific laws like HIPAA.' },
                                { question: 'Does this prepare me for the CDPSE certification?', answer: 'Yes. Our syllabus is perfectly aligned with the ISACA Certified Data Privacy Solutions Engineer (CDPSE) domains.' },
                            ].slice(0, showAllFaqs ? 3 : 3).map((faq, index) => (
                                <motion.div layout key={faq.question} initial={{ opacity: 0, height: 0, scale: 0.95 }} animate={{ opacity: 1, height: 'auto', scale: 1 }} exit={{ opacity: 0, height: 0, scale: 0.95 }} transition={{ duration: 0.4 }} className="w-full">
                                    <motion.div className={`relative overflow-hidden transition-all duration-300 border-[3px] ${openFaq === index ? 'border-[#00C4D4] shadow-[6px_6px_0px_0px_rgba(0,196,212,0.3)]' : 'border-black'}`} style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                                        <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="relative w-full flex items-center justify-between p-4 sm:p-6 text-left group">
                                            <div className="flex items-center gap-4">
                                                <motion.span className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 border-2 border-black flex items-center justify-center text-xs sm:text-sm font-black transition-colors ${openFaq === index ? 'bg-black text-[#00C4D4]' : 'bg-[#00C4D4] text-black group-hover:bg-white'}`}>{String(index + 1).padStart(2, '0')}</motion.span>
                                                <span className={`font-black uppercase tracking-tight text-xs sm:text-sm lg:text-base transition-colors pr-4 ${openFaq === index ? 'text-white' : 'text-white/80 group-hover:text-[#00C4D4]'}`}>{faq.question}</span>
                                            </div>
                                            <motion.div animate={{ rotate: openFaq === index ? 180 : 0 }} transition={{ duration: 0.3 }} className={`shrink-0 w-8 h-8 sm:w-10 sm:h-10 border-2 border-black flex items-center justify-center ${openFaq === index ? 'bg-black text-[#00C4D4]' : 'bg-transparent text-white/50 group-hover:bg-[#00C4D4] group-hover:text-black'}`}><ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 rotate-90" /></motion.div>
                                        </button>
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }} transition={{ duration: 0.3 }}><div className="relative px-4 sm:px-6 pb-4 sm:pb-6 pl-[60px] sm:pl-[80px] pr-4 sm:pr-12"><motion.p className="text-white/90 font-medium leading-relaxed text-xs sm:text-sm">{faq.answer}</motion.p></div></motion.div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>

                {/* Call to Action */}
                <motion.div id="register">
                    <section className="h-[90vh] relative z-40 overflow-visible bg-[linear-gradient(135deg,#00C4D4_50%,#000000_50%)] flex flex-col items-center justify-center py-8 sm:py-12 px-4">
                        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden"><Squares speed={0.13} squareSize={40} direction="diagonal" borderColor="rgba(255,255,255,0.08)" hoverFillColor="rgba(255,255,255,0.05)" /></div>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col items-center">
                            <div className="relative w-full max-w-4xl flex items-center justify-center lg:justify-start">
                                <div className="absolute right-[-10%] lg:right-[-15%] top-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] lg:w-[500px] aspect-square z-0 opacity-100">
                                    <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" className="w-full h-full object-cover border-[10px] border-black" alt="Decoration" />
                                </div>
                                <div className="w-full max-w-2xl p-6 sm:p-10 border-[10px] border-black relative z-10 overflow-hidden" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                                    <div className="relative z-10 text-center sm:text-left">
                                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight mb-4 uppercase tracking-tighter">Ready to <span className="text-[#00C4D4]">Engineer</span> Data Privacy?</h2>
                                        <p className="text-white/80 text-xs sm:text-sm mb-8 leading-relaxed font-medium max-w-lg">Join the Ebanex International Data Privacy program and bridge the gap between compliance and engineering. Limited cohort spots available.</p>
                                        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-3">
                                            <button className="h-11 sm:h-12 px-6 bg-[#00C4D4] text-black font-black text-[10px] sm:text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2">Enroll Now <ArrowRight size={14} /></button>
                                            <button className="h-11 sm:h-12 px-6 border-2 border-white text-white font-black text-[10px] sm:text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">View All Programs</button>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#00C4D4]/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                                </div>
                            </div>
                        </div>
                    </section>
                </motion.div>
            </div>
        </>
    );
};

export default DataPrivacyProtection;
