import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/layout';
import { Squares } from '../components/animations';
import { TRAINING_PROGRAMS } from '../constants/trainingData';
import {
    Users, CheckCircle, Clock, ArrowRight, Calendar, Shield,
    Linkedin, Twitter, ChevronRight, Home
} from 'lucide-react';
import {
    FaCertificate, FaClock, FaChalkboardTeacher, FaLevelUpAlt, FaLaptopCode
} from 'react-icons/fa';

const Counter: React.FC<{ target: number; suffix?: string; duration?: number }> = ({
    target, suffix = '', duration = 2
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

    return <span ref={ref}>{count}{suffix}</span>;
};

const TrainingProgramDetail: React.FC = () => {
    const { programId } = useParams<{ programId: string }>();
    const program = TRAINING_PROGRAMS[programId || ''];

    const [activeSection, setActiveSection] = useState('overview');
    const [isOverviewExpanded, setIsOverviewExpanded] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isInSyllabus, setIsInSyllabus] = useState(false);
    const syllabusRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress: syllabusScroll } = useScroll({
        target: syllabusRef,
        offset: ['start end', 'end start'],
    });

    useEffect(() => {
        const unsubscribe = syllabusScroll.on('change', (latest) => {
            setIsInSyllabus(latest > 0 && latest < 1);
        });
        return unsubscribe;
    }, [syllabusScroll]);

    if (!program) {
        return <Navigate to="/training" replace />;
    }

    const scrollToSection = (id: string) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            const offset = 120;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    // Wave animations for template
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const waveScale = useTransform(smoothProgress, [0, 1], [0.9, 1.3]);
    const waveOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.4, 0.8, 0.4]);
    const waveRotate = useTransform(smoothProgress, [0, 1], [-5, 20]);

    return (
        <>
            <SEO 
                title={`${program.title} | Ebanex International`}
                description={program.description}
                canonical={`https://ebanexint.co.tz/training/${program.slug}`}
            />

            <div className="bg-black min-h-screen">
                {/* Hero */}
                <section className="relative z-30 flex flex-col justify-start pt-12 sm:pt-16 pb-8 sm:pb-10 w-full bg-[linear-gradient(135deg,#000000_50%,#00C4D4_50%)] overflow-hidden">
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <Squares speed={0.13} squareSize={40} direction="diagonal" borderColor="rgba(255,255,255,0.08)" hoverFillColor="rgba(255,255,255,0.05)" />
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col items-center">
                        <div className="mb-4 md:mb-8 text-center shrink-0 relative z-50">
                            <div className="select-none inline-block bg-black py-3 px-6 border border-white/10">
                                <motion.h2 className="text-xl sm:text-2xl lg:text-3xl font-black font-heading text-white uppercase tracking-tight">
                                    {program.title.split(' ').map((word: string, i: number) => word.toLowerCase() === 'hacking' || word.toLowerCase() === 'response' || word.toLowerCase() === 'protection' || word.toLowerCase() === 'management' || word.toLowerCase() === 'awareness' ? <span key={i} className="text-[#00C4D4]">{word} </span> : word + ' ')}
                                </motion.h2>
                            </div>
                        </div>

                        <div className="relative w-full max-w-5xl flex items-center justify-center lg:justify-end">
                            {/* Image Box */}
                            <div className="hidden lg:block absolute left-[-5%] lg:left-[-10%] top-[40%] -translate-y-1/2 w-[350px] sm:w-[450px] lg:w-[500px] aspect-square z-0 opacity-100 group">
                                <div className="relative w-full h-full border-[10px] border-black shadow-[15px_15px_0px_0px_rgba(0,196,212,0.2)] overflow-hidden">
                                    <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-[#00C4D4] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-black border-b-[10px] border-b-transparent ml-1"></div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#FF0000]"></div>
                                </div>
                            </div>

                            {/* Content Box */}
                            <motion.div className="w-full max-w-2xl p-5 sm:p-6 border-[10px] border-black relative overflow-hidden z-10 ml-auto bg-[#0a1628]" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                                <div className="relative z-10 space-y-3 sm:space-y-4 text-left">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="bg-[#00C4D4] text-black text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 uppercase tracking-tighter shadow-sm">{program.badge}</span>
                                    </div>
                                    <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">{program.description}</p>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-3 border-t border-white/10">
                                        <div className="flex flex-col gap-2 text-xs sm:text-sm font-medium text-slate-300">
                                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-blue-400" /><span>{program.duration}</span></div>
                                            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-green-400" /><span>{program.hours}</span></div>
                                        </div>
                                        <div className="hidden sm:block w-px bg-white/10 h-10"></div>
                                        <div className="text-sm font-medium text-white">
                                            <p className="text-[9px] text-[#00C4D4] uppercase font-bold tracking-widest mb-0.5">Target Audience</p>
                                            <p className="text-xs font-semibold text-white">{program.audience}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 pt-3">
                                        <button className="bg-[#00C4D4] text-black px-4 sm:px-5 py-2 font-bold hover:bg-[#00b0c0] transition-all flex items-center gap-2 group text-xs sm:text-sm shadow-lg">Enroll Now <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /></button>
                                        <button className="bg-transparent text-white border-2 border-white/30 px-4 sm:px-5 py-2 font-bold hover:bg-white/10 transition-all flex items-center gap-2 group text-xs sm:text-sm shadow-lg">Syllabus <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /></button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Badges Bar */}
                <section className="w-full bg-black pt-8 sm:pt-12 pb-[30px] relative z-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                            {[
                                { icon: <FaCertificate />, title: 'Global Alignment', desc: 'Mapped to international frameworks' },
                                { icon: <FaClock />, title: 'CPE Credits', desc: 'Earn recognized training credits' },
                                { icon: <FaChalkboardTeacher />, title: 'Expert-Led', desc: 'Practitioner-based instruction' },
                                { icon: <FaLevelUpAlt />, title: 'Skill Uplift', desc: 'Measurable career advancement' },
                                { icon: <FaLaptopCode />, title: 'Hands-on Labs', desc: 'Practical scenario simulations' },
                            ].map((item, i) => (
                                <div key={i} className="group relative aspect-square">
                                    <div className="absolute inset-0 bg-[#00C4D4] transform rotate-1 group-hover:rotate-0 transition-transform duration-300" />
                                    <div className="relative p-4 border-[4px] border-black h-full flex flex-col items-center justify-center text-center bg-[#0a1628]" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                                        <div className="text-2xl text-[#00C4D4] mb-2">{item.icon}</div>
                                        <h3 className="text-[10px] font-black text-[#00C4D4] uppercase tracking-widest mb-1">{item.title}</h3>
                                        <p className="text-[10px] text-white/80 leading-tight">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Sticky Nav */}
                <div className="sticky top-0 z-50 py-4 transition-all duration-500 border-b-[4px] border-black shadow-2xl bg-[#00C4D4]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                        <div className="text-[11px] font-black uppercase tracking-widest text-black">Jump to:</div>
                        <div className="flex items-center gap-2 sm:gap-6">
                            <button onClick={() => scrollToSection('overview')} className={`text-[10px] font-bold uppercase tracking-widest px-4 py-2 border-2 ${!isInSyllabus ? 'bg-black text-[#00C4D4] border-black' : 'border-transparent text-black'}`}>Overview</button>
                            <button onClick={() => scrollToSection('syllabus')} className={`text-[10px] font-bold uppercase tracking-widest px-4 py-2 border-2 ${isInSyllabus ? 'bg-black text-[#00C4D4] border-black' : 'border-transparent text-black'}`}>Syllabus</button>
                            <button onClick={() => scrollToSection('instructor')} className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 border-2 border-transparent text-black">Instructor</button>
                        </div>
                    </div>
                </div>

                {/* Testimonial */}
                <section className="mt-8 relative z-40 bg-[linear-gradient(135deg,#00C4D4_50%,#000000_50%)] py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="relative w-full max-w-4xl flex items-center justify-center lg:justify-start">
                            <div className="hidden lg:block absolute right-[-10%] top-1/2 -translate-y-1/2 w-[400px] aspect-square z-0">
                                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000" className="w-full h-full object-cover border-[10px] border-black" alt="" />
                            </div>
                            <div className="w-full max-w-2xl p-6 sm:p-10 border-[10px] border-black relative z-10 bg-[#0a1628]" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                                <div className="text-[#00C4D4] font-serif text-6xl leading-none h-8 select-none">"</div>
                                <p className="text-white/90 text-base sm:text-lg mb-5 leading-relaxed font-medium italic mt-2">{program.testimonial.text}</p>
                                <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                                    <div className="w-12 h-px bg-[#00C4D4]" />
                                    <div className="text-left">
                                        <h4 className="font-black text-sm text-white uppercase tracking-widest">{program.testimonial.author}</h4>
                                        <p className="text-[#00C4D4] font-bold uppercase tracking-widest text-[9px] mt-1">{program.testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Overview & Syllabus */}
                <section id="overview" className="relative z-20 bg-black py-20 px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto text-left">
                        <h2 className="text-3xl font-black text-white uppercase mb-8 border-b-4 border-[#00C4D4] inline-block">Program Overview</h2>
                        <p className="text-slate-300 text-lg leading-relaxed max-w-5xl mb-12">{program.description} Our approach integrates theoretical knowledge with high-intensity practical labs designed to mirror real-world threat landscapes.</p>
                        
                        <div id="syllabus" ref={syllabusRef} className="grid md:grid-cols-2 gap-8">
                            {program.syllabus.map((item: any, i: number) => (
                                <div key={i} className="p-6 border-[4px] border-black bg-[#0a1628]" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                                    <h3 className="text-[#00C4D4] font-black uppercase tracking-widest mb-2">{item.phase}</h3>
                                    <p className="text-white/80 text-sm font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="bg-[#00C4D4] py-16">
                    <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {program.stats.map((stat: any, i: number) => (
                            <div key={i} className="bg-black p-6 border-[4px] border-black text-center">
                                <div className="text-4xl font-black text-[#00C4D4] mb-1"><Counter target={stat.metric} suffix={stat.suffix} /></div>
                                <div className="text-[10px] text-white font-bold uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Instructor */}
                <section id="instructor" className="bg-black py-24 px-4 overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="relative w-full max-w-5xl flex items-center justify-center lg:justify-end">
                            <div className="absolute left-[-5%] lg:left-[-10%] top-1/2 -translate-y-1/2 w-[350px] aspect-[4/5] z-0">
                                <img src={program.instructor.image} className="w-full h-full object-cover border-[10px] border-black" alt="" />
                            </div>
                            <div className="w-full max-w-2xl p-6 sm:p-10 border-[10px] border-black relative z-10 bg-[#0a1628]" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                                <h2 className="text-xl font-black text-white uppercase mb-4">Meet Your <span className="text-[#00C4D4]">Instructor</span></h2>
                                <p className="text-white/90 text-sm mb-6 leading-relaxed italic text-left">{program.instructor.bio}</p>
                                <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                                    <div className="text-left">
                                        <h4 className="font-black text-lg text-white uppercase">{program.instructor.name}</h4>
                                        <p className="text-[#00C4D4] font-bold uppercase text-[10px]">{program.instructor.role}</p>
                                        <div className="flex gap-2 mt-3">
                                            {program.instructor.certs.map((c: string) => <span key={c} className="bg-[#00C4D4] text-black px-2 py-0.5 text-[9px] font-black">{c}</span>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-[linear-gradient(135deg,#00C4D4_50%,#000000_50%)] py-20 px-4">
                    <div className="max-w-4xl mx-auto p-10 border-[10px] border-black bg-black text-center relative overflow-hidden">
                        <h2 className="text-2xl sm:text-4xl font-black text-white uppercase mb-6">Ready to <span className="text-[#00C4D4]">Elevate</span> Your Skills?</h2>
                        <p className="text-white/80 mb-8 max-w-lg mx-auto">Join the next cohort of Ebanex International and gain the technical expertise required for global cybersecurity leadership.</p>
                        <button className="h-12 px-8 bg-[#00C4D4] text-black font-black uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2 mx-auto">Apply Now <ArrowRight size={18} /></button>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C4D4]/10 blur-3xl pointer-events-none" />
                    </div>
                </section>
            </div>
        </>
    );
};

export default TrainingProgramDetail;
