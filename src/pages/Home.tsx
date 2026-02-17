import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Globe as GlobeIcon, Shield, Zap, CheckCircle2, ExternalLink } from 'lucide-react';
import { CORE_SERVICES } from '../constants';
import Globe from '../components/ui/Globe';
import { HomeSkeleton } from '../components/ui/Skeleton';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollY } = useScroll();
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="bg-slate-950 min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="skeleton"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HomeSkeleton />
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden bg-slate-950"
          >
            {/* SECTION 1: CINEMATIC HERO */}
            <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-radial-at-t from-slate-900/20 via-slate-950/90 to-slate-950" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] max-w-[1200px] max-h-[1200px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

                {/* 3D Globe Background */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] opacity-100 pointer-events-none hidden lg:block">
                  <Globe
                    baseColor="#050029"
                    glowColor="#05010dff"
                    markerColor="#ffffff"
                    scale={1.1}
                    mapBrightness={20}
                    diffuse={1.2}
                  />
                </div>
              </div>

              <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="max-w-6xl">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="inline-flex items-center gap-4 mb-12 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 48 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-[1px] bg-purple-500"
                      />
                      <span className="text-purple-400 text-[10px] font-black tracking-[0.6em] uppercase">
                        Institutional Intelligence
                      </span>
                    </div>

                    <h1 className="font-heading tracking-tight leading-[0.9] mb-12 text-white select-none">
                      <div className="flex flex-col gap-4">
                        <motion.span
                          className="block text-[clamp(1.25rem,3.5vw,2.25rem)] font-light opacity-60 tracking-[-0.01em] uppercase"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 0.6, x: 0 }}
                          transition={{ delay: 0.2, duration: 0.8 }}
                        >
                          Empowering People.
                        </motion.span>

                        <motion.span
                          className="resilience-gradient font-black tracking-[-0.04em] uppercase text-[clamp(2.5rem,7vw,5.5rem)] leading-none"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 1 }}
                        >
                          Strengthening <br /> <span className="ml-[8%]">Organizations.</span>
                        </motion.span>

                        <motion.span
                          className="block font-light text-[clamp(1.25rem,3.5vw,2.25rem)] text-slate-400 tracking-tight flex items-center gap-4"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6, duration: 0.8 }}
                        >
                          <span className="h-[1px] w-12 bg-purple-500/50 hidden sm:block" />
                          Securing the Future<span className="text-purple-500 font-heading">.</span>
                        </motion.span>
                      </div>
                    </h1>

                    <div className="flex flex-col gap-12 mt-4">
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="text-lg text-slate-400 max-w-2xl leading-relaxed font-light border-l border-purple-500/20 pl-8"
                      >
                        Ebanex International is a global training and advisory firm delivering professional development,
                        cybersecurity training, digital transformation capacity building, and institutional strengthening solutions across industries.
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="flex flex-wrap gap-4"
                      >
                        <button className="h-14 px-8 bg-white text-slate-950 rounded-sm font-bold text-[10px] lg:text-xs uppercase tracking-[0.2em] hover:bg-purple-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-xl active:scale-95">
                          View Training Programs
                        </button>
                        <button className="h-14 px-8 border border-white/10 text-white rounded-sm font-bold text-[10px] lg:text-xs uppercase tracking-[0.2em] hover:bg-white/5 hover:border-purple-500 transition-all transform hover:-translate-y-1 active:scale-95">
                          Partner With Us
                        </button>
                        <button className="h-14 px-8 border border-white/10 text-white rounded-sm font-bold text-[10px] lg:text-xs uppercase tracking-[0.2em] hover:bg-white/5 hover:border-purple-500 transition-all transform hover:-translate-y-1 active:scale-95">
                          Request Corporate Training
                        </button>
                        <button className="h-14 px-8 border border-white/10 text-white rounded-sm font-bold text-[10px] lg:text-xs uppercase tracking-[0.2em] hover:bg-white/5 hover:border-purple-500 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center gap-3 group">
                          Contact Us
                          <ArrowRight className="text-white group-hover:translate-x-1 transition-transform" size={18} />
                        </button>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-24 right-12 hidden lg:flex flex-col items-center gap-4"
              >
                <span className="text-[10px] font-black tracking-widest text-slate-600 uppercase vertical-text">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-purple-500 to-transparent" />
              </motion.div>

              <div className="absolute bottom-0 left-0 w-full h-16 border-t border-white/5 bg-slate-950/50 backdrop-blur-md overflow-hidden flex items-center z-20">
                <div className="animate-marquee whitespace-nowrap flex gap-12 text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase">
                  <span>GOVERNMENTAL ADVISORY • GLOBAL CYBER LABS • INSTITUTIONAL CAPACITY BUILDING • LEADERSHIP EXCELLENCE • DIGITAL TRANSFORMATION • GLOBAL COMPLIANCE • </span>
                  <span>GOVERNMENTAL ADVISORY • GLOBAL CYBER LABS • INSTITUTIONAL CAPACITY BUILDING • LEADERSHIP EXCELLENCE • DIGITAL TRANSFORMATION • GLOBAL COMPLIANCE • </span>
                </div>
              </div>
            </section>

            {/* SECTION 2: WHO WE ARE (Scroll Triggered) */}
            <section className="py-32 bg-slate-950 relative overflow-hidden" ref={sectionRef}>
              <motion.div
                style={{ y: backgroundY }}
                className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
              >
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-500 blur-[150px] rounded-full" />
              </motion.div>

              <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-20 items-center">
                  <motion.div
                    className="lg:col-span-6"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <span className="text-purple-500 font-bold uppercase tracking-widest text-xs block mb-6">Who We Are</span>
                    <h2 className="text-5xl font-black font-heading mb-8 leading-tight tracking-tighter text-white">
                      A LEGACY BUILT ON <br />PRACTICAL <br /><span className="text-slate-500">EXCELLENCE.</span>
                    </h2>
                    <p className="text-slate-400 text-lg mb-8 font-light leading-relaxed">
                      Ebanex International is a global powerhouse in institutional strengthening. We bridge the gap between complex theoretical frameworks and real-world operational resilience.
                    </p>

                    <div className="space-y-4">
                      {[
                        "Multidisciplinary Global Training",
                        "Cybersecurity & Digital Resilience",
                        "Leadership Development Integration"
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          className="flex items-center gap-4 group"
                        >
                          <div className="w-8 h-8 rounded-sm bg-purple-500/10 border border-white/5 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                            <CheckCircle2 size={16} />
                          </div>
                          <span className="text-slate-300 font-medium tracking-tight">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    className="lg:col-span-6"
                    initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="relative glass aspect-square rounded-sm overflow-hidden border-white/10">
                      <motion.img
                        style={{ y: useTransform(scrollYProgress, [0, 1], [-20, 20]) }}
                        src="https://images.unsplash.com/photo-1573161559521-3832117b1622?q=80&w=1200"
                        className="w-full h-full object-cover scale-110"
                        alt="Elite Training Environment"
                      />
                      <div className="absolute inset-0 bg-slate-950/20" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* SECTION 3: THE EBANEX ADVANTAGE (Perspective Stack Redesign) */}
            <section className="py-32 bg-slate-950 relative overflow-visible">
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />

              <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 mb-32">
                  <div className="lg:col-span-6">
                    <span className="text-purple-500 font-bold uppercase tracking-widest text-xs block mb-4">Strategic Differentiation</span>
                    <h2 className="text-5xl lg:text-7xl font-black font-heading tracking-tighter text-white leading-none">
                      WHY <br />INSTITUTIONS <br />TRUST US.
                    </h2>
                  </div>
                  <div className="lg:col-span-6 flex items-end">
                    <p className="text-slate-500 text-lg font-light leading-relaxed max-w-sm">
                      We bypass conventional methodologies to deliver high-velocity institutional strengthening and digital superiority.
                    </p>
                  </div>
                </div>

                <div className="relative h-[800px] lg:h-[600px] perspective-1000">
                  {[
                    {
                      title: "Practical Pedagogy",
                      icon: <Zap />,
                      desc: "Results-driven learning models utilizing hands-on labs and simulations that mirror enterprise reality.",
                      pos: "top-0 left-0",
                      zIndex: 30,
                      delay: 0
                    },
                    {
                      title: "Global Standards",
                      icon: <Globe />,
                      desc: "Elite delivery frameworks that adhere to international certifications while respecting local context.",
                      pos: "top-1/4 left-1/4 lg:left-1/3",
                      zIndex: 20,
                      delay: 0.1
                    },
                    {
                      title: "Digital Resilience",
                      icon: <Shield />,
                      desc: "Comprehensive security focus embedded into every institutional training and advisory module.",
                      pos: "top-1/2 left-0 lg:left-2/3",
                      zIndex: 10,
                      delay: 0.2
                    }
                  ].map((card, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
                      whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: card.delay, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      className={`absolute ${card.pos} w-full lg:w-[450px] z-[${card.zIndex}] group`}
                    >
                      <div className="glass p-10 lg:p-14 rounded-sm border-white/5 group-hover:border-purple-500/30 transition-all duration-500 shadow-2xl backdrop-blur-3xl">
                        <div className="w-16 h-16 rounded-sm bg-purple-600/10 flex items-center justify-center mb-8 border border-white/5 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all transform group-hover:rotate-12">
                          {React.cloneElement(card.icon as React.ReactElement, { size: 28 })}
                        </div>
                        <h3 className="text-3xl font-black font-heading mb-6 tracking-tight text-white">{card.title}</h3>
                        <p className="text-slate-400 font-light leading-relaxed">
                          {card.desc}
                        </p>

                        {/* Digital pulse line */}
                        <div className="mt-10 h-[1px] w-full bg-white/5 relative overflow-hidden">
                          <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-[marquee_2s_linear_infinite]" />
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Background Decorative Thread */}
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent -translate-y-1/2 pointer-events-none hidden lg:block" />
                </div>
              </div>
            </section>

            {/* SECTION 4: CORE PILLARS (ECOSYSTEM) */}
            <section className="py-24 bg-slate-950 relative overflow-visible">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-white/10 via-purple-500/20 to-transparent" />

              <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20 text-center">
                  <h2 className="text-6xl lg:text-8xl font-black font-heading tracking-tighter mb-6 text-white">
                    THE <span className="text-purple-500">ECOSYSTEM.</span>
                  </h2>
                  <p className="text-slate-500 text-lg max-w-2xl mx-auto font-light">
                    Non-linear institutional growth frameworks. Overlapping spheres of excellence.
                  </p>
                </div>

                <div className="relative space-y-[-100px] lg:space-y-[-150px]">
                  {CORE_SERVICES.map((service, index) => {
                    const isEven = index % 2 === 0;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: isEven ? -50 : 50, y: 100 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className={`relative flex ${isEven ? 'justify-start' : 'justify-end'} z-[${10 + index}] group`}
                      >
                        <div className={`
                    relative w-full lg:w-3/5 glass p-12 lg:p-20 rounded-sm overflow-hidden
                    border-white/5 transition-all duration-700 
                    group-hover:border-purple-500/30 group-hover:z-[50] group-hover:scale-[1.02]
                    group-hover:shadow-[0_0_100px_rgba(139,92,246,0.1)]
                  `}>
                          {/* Background Graphic */}
                          <div className="absolute -top-12 -right-12 text-white/[0.02] transform rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110">
                            {React.cloneElement(service.icon as React.ReactElement, { size: 400 })}
                          </div>

                          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start md:items-center">
                            <div className="w-20 h-20 rounded-sm bg-purple-600/10 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-purple-500/40 transition-colors">
                              {React.cloneElement(service.icon as React.ReactElement, { size: 32, className: "text-purple-400" })}
                            </div>

                            <div className="flex-1">
                              <div className="flex items-center gap-4 mb-4">
                                <span className="text-[10px] font-mono text-purple-500 tracking-[0.3em] uppercase">Pillar {index + 1}</span>
                                <div className="h-[1px] w-8 bg-white/10" />
                              </div>
                              <h3 className="text-3xl lg:text-4xl font-black font-heading mb-6 tracking-tighter text-white">
                                {service.title.toUpperCase()}
                              </h3>
                              <p className="text-slate-400 text-lg font-light leading-relaxed max-w-xl mb-8">
                                {service.description}
                              </p>
                              <button className="flex items-center gap-3 text-white font-black text-xs uppercase tracking-widest group/btn">
                                Deploy Strategy
                                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-slate-950 transition-all">
                                  <ExternalLink size={14} />
                                </div>
                              </button>
                            </div>
                          </div>

                          {/* Bottom accent */}
                          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* SECTION 5: TESTIMONIALS & IMPACT */}
            <section className="py-24 bg-slate-950/50 relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                  <span className="text-purple-500 font-bold uppercase tracking-widest text-xs block mb-4">Success Stories</span>
                  <h2 className="text-4xl font-black font-heading text-white">IMPACT & TESTIMONIALS</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="glass p-10 rounded-2xl border-white/5">
                    <p className="text-slate-400 italic mb-8 italic">"Ebanex transformed our cybersecurity posture through rigorous training and strategic advisory. Their hands-on approach is unparalleled."</p>
                    <div>
                      <p className="font-bold text-white">Chief Information Security Officer</p>
                      <p className="text-purple-500 text-sm">National Financial Institution</p>
                    </div>
                  </div>
                  <div className="glass p-10 rounded-2xl border-white/5">
                    <p className="text-slate-400 italic mb-8 italic">"The institutional capacity building programs delivered by Ebanex have significantly improved our operational efficiency and digital readiness."</p>
                    <div>
                      <p className="font-bold text-white">Director of Human Resources</p>
                      <p className="text-purple-500 text-sm">Strategic Government Agency</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 6: PARTNERS & ACCREDITATION */}
            <section className="py-24 border-b border-white/5 bg-slate-950">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-600 block mb-4">Strategic & Institutional Partners</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-40 hover:opacity-100 transition-opacity duration-700 items-center">
                  {['GOVERNMENTAL', 'FINANCIAL', 'DEFENSE', 'INDUSTRIAL', 'ACADEMIC', 'GLOBAL'].map(label => (
                    <div key={label} className="text-center group p-4 border border-white/5 rounded-lg hover:border-purple-500/30 transition-all">
                      <div className="text-xl font-black font-heading tracking-tighter group-hover:text-white transition-colors text-slate-500">PARTNER</div>
                      <div className="text-[10px] font-bold text-slate-600 mt-1">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 6: CTA */}
            <section className="py-32 relative">
              <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000')] bg-fixed bg-cover opacity-10 grayscale" />
              <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="glass p-20 rounded-sm border-white/5 text-center">
                  <h2 className="text-5xl lg:text-7xl font-black font-heading mb-12 tracking-tighter text-white">
                    SECURE YOUR <span className="text-purple-500">INSTITUTIONAL</span> LEGACY.
                  </h2>
                  <div className="flex flex-wrap justify-center gap-8">
                    <button className="h-16 px-12 bg-white text-slate-950 font-black uppercase tracking-widest text-sm hover:bg-purple-600 hover:text-white transition-all">
                      Request Consultation
                    </button>
                    <button className="h-16 px-12 border border-white/20 font-black uppercase tracking-widest text-sm hover:bg-white hover:text-slate-950 transition-all text-white">
                      Join Academy
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </AnimatePresence >
    );
};

export default Home;
