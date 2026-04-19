import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, GraduationCap, Briefcase, ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/layout';
import { Squares } from '../components/animations';
import { CERTIFICATIONS } from '../constants';

const Training: React.FC = () => {
    const categories = [
        {
            title: 'Cybersecurity & InfoSec',
            icon: <Shield className="w-8 h-8 text-[#00C4D4]" />,
            items: [
                { name: 'Cybersecurity Awareness', path: '/training/cybersecurity-awareness' },
                { name: 'Ethical Hacking', path: '/training/ethical-hacking' },
                { name: 'Incident Response', path: '/training/incident-response' },
                { name: 'Digital Risk Management', path: '/training/digital-risk' },
                { name: 'Data Privacy & Protection', path: '/training/data-privacy' },
            ],
        },
        {
            title: 'IT & Digital Skills',
            icon: <Code className="w-8 h-8 text-[#00C4D4]" />,
            items: [
                { name: 'Networking & Infrastructure', path: '#' },
                { name: 'Cloud Computing', path: '#' },
                { name: 'AI & Machine Learning', path: '#' },
                { name: 'Systems Administration', path: '#' },
            ],
        },
        {
            title: 'Governance & Risk',
            icon: <GraduationCap className="w-8 h-8 text-[#00C4D4]" />,
            items: [
                { name: 'IT Governance', path: '#' },
                { name: 'Enterprise Risk Mgmt', path: '#' },
                { name: 'Internal Audit', path: '#' },
                { name: 'Regulatory Compliance', path: '#' },
            ],
        },
        {
            title: 'Leadership & Dev',
            icon: <Briefcase className="w-8 h-8 text-[#00C4D4]" />,
            items: [
                { name: 'Strategic Management', path: '#' },
                { name: 'Agile Leadership', path: '#' },
                { name: 'Emotional Intelligence', path: '#' },
                { name: 'Change Management', path: '#' },
            ],
        },
    ];

    return (
        <div className="relative min-h-screen bg-black overflow-hidden">
            <SEO
                title="Training Programs | Ebanex International"
                description="Explore our elite training programs in cybersecurity, IT governance, leadership, and professional development."
                keywords="training programs, cybersecurity awareness, ethical hacking, digital risk, IT governance"
                canonical="https://ebanexint.co.tz/training"
            />

            {/* Background Squares */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Squares
                    speed={0.13}
                    squareSize={40}
                    direction="diagonal"
                    borderColor="rgba(255,255,255,0.08)"
                    hoverFillColor="rgba(255,255,255,0.05)"
                />
            </div>

            {/* Hero Section */}
            <section className="relative z-10 pt-24 sm:pt-32 pb-12 sm:pb-20 w-full bg-[linear-gradient(135deg,#000000_50%,#00C4D4_50%)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col items-center">
                    <div className="mb-8 text-center shrink-0 relative z-50">
                        <div className="select-none inline-block bg-black py-3 px-6 border border-white/10">
                            <motion.h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading text-white uppercase tracking-tight">
                                World-Class <span className="text-[#00C4D4]">Curricula.</span>
                            </motion.h1>
                        </div>
                    </div>

                    <div className="w-full max-w-3xl p-6 sm:p-10 border-[10px] border-black relative overflow-hidden text-center" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                        <p className="text-base sm:text-xl text-white/90 leading-relaxed font-medium">
                            Our training programs are industry-aligned, evidence-based, and designed to deliver
                            immediate ROI for both individuals and enterprises. From tactical defense to strategic governance.
                        </p>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C4D4]/10 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="relative z-20 py-16 sm:py-24 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {categories.map((cat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-[#00C4D4] transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
                                <div className="relative p-6 sm:p-8 border-[4px] border-black h-full flex flex-col bg-[#0a1628]" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                                    <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                                        <div className="p-3 bg-black/30 border-2 border-black">
                                            {cat.icon}
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tighter">{cat.title}</h3>
                                    </div>
                                    <ul className="space-y-3 flex-1">
                                        {cat.items.map((item, i) => (
                                            <li key={i}>
                                                {item.path !== '#' ? (
                                                    <Link
                                                        to={item.path}
                                                        className="flex items-center justify-between p-3 border-2 border-transparent hover:border-[#00C4D4] hover:bg-black/40 transition-all group/item"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-1.5 h-1.5 bg-[#00C4D4]" />
                                                            <span className="text-sm sm:text-base font-bold text-white/90">{item.name}</span>
                                                        </div>
                                                        <ChevronRight size={18} className="text-[#00C4D4] transform translate-x-0 group-hover/item:translate-x-1 transition-transform" />
                                                    </Link>
                                                ) : (
                                                    <div className="flex items-center gap-3 p-3 text-white/40 grayscale opacity-50 cursor-not-allowed">
                                                        <div className="w-1.5 h-1.5 bg-white/20" />
                                                        <span className="text-sm sm:text-base font-medium uppercase tracking-widest text-[10px]">Coming Soon: {item.name}</span>
                                                    </div>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="relative z-20 py-16 bg-[linear-gradient(135deg,#00C4D4_50%,#000000_50%)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="mb-12 text-center">
                        <div className="select-none inline-block bg-black py-3 px-8 border border-white/10">
                            <h2 className="text-xl sm:text-3xl font-black text-white uppercase tracking-tight">Certification <span className="text-[#00C4D4]">Preparation</span></h2>
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-4">
                        {CERTIFICATIONS.map((cert) => (
                            <div
                                key={cert}
                                className="px-6 py-3 bg-black border-2 border-[#00C4D4] text-white font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-[#00C4D4] hover:text-black transition-all cursor-default shadow-lg"
                            >
                                {cert}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Delivery Methods Section */}
            <section className="relative z-20 py-16 sm:py-24 px-4 sm:px-6 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-xl sm:text-3xl font-black text-white uppercase tracking-tight">Flexible Delivery <span className="text-[#00C4D4]">Architectures</span></h2>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { label: 'Classroom', desc: 'In-person excellence', icon: '🏛️' },
                            { label: 'Virtual', desc: 'Interactive remote', icon: '💻' },
                            { label: 'Hybrid', desc: 'The best of both', icon: '⚡' },
                            { label: 'Corporate', desc: 'On-site specialized', icon: '🏢' },
                            { label: 'Bootcamps', desc: 'Accelerated learning', icon: '🔥' },
                        ].map((method, idx) => (
                            <div key={idx} className="group relative aspect-square">
                                <div className="absolute inset-0 bg-[#00C4D4] transform rotate-1 group-hover:rotate-0 transition-transform duration-300" />
                                <div className="relative p-6 border-[4px] border-black h-full flex flex-col items-center justify-center text-center bg-[#0a1628]" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                                    <div className="text-4xl mb-4">{method.icon}</div>
                                    <h4 className="font-black text-white uppercase tracking-tighter mb-2">{method.label}</h4>
                                    <p className="text-xs text-white/60 font-medium uppercase tracking-widest">{method.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-20 py-20 px-4 bg-[linear-gradient(135deg,#000000_50%,#00C4D4_50%)]">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="p-8 sm:p-12 border-[10px] border-black bg-[#051020] relative overflow-hidden" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                        <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tighter mb-6">Need a <span className="text-[#00C4D4]">Custom</span> Training Plan?</h2>
                        <p className="text-white/80 mb-10 text-base sm:text-lg font-medium">We design bespoke cybersecurity curricula for government agencies, financial institutions, and global enterprises. Elevate your organization&apos;s technical readiness today.</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="h-12 px-8 bg-[#00C4D4] text-black font-black text-sm uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2">Contact Consultant <ArrowRight size={16} /></button>
                            <button className="h-12 px-8 border-2 border-white text-white font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all">Download Catalog</button>
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C4D4]/10 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Training;
