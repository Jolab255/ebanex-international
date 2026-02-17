import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { ReactLenis } from 'lenis/react';
import { ArrowRight, Globe as GlobeIcon, Shield, Zap, CheckCircle2, ExternalLink, Target, Landmark, MapPin, BookOpen, Building2, Laptop, Cloud } from 'lucide-react';
import { CORE_SERVICES } from '../constants';
import Globe from '../components/ui/Globe';
import { AnimatedBeam } from '../components/AnimatedBeam';
import { cn } from '../lib/utils';
import { ProgressSlider, SliderContent, SliderWrapper, SliderBtnGroup, SliderBtn } from '../components/ui/progressive-carousel';
import Squares from '../components/ui/Squares';



// --- TRAINING APPROACH CAROUSEL COMPONENT ---
const TrainingApproachCarousel = () => {
  const trainingItems = [
    {
      img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200',
      title: 'Practical Learning',
      desc: 'Results-driven learning focused on real-world application and immediate operational value.',
      sliderName: 'practical',
    },
    {
      img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200',
      title: 'Industry-Specific Design',
      desc: 'Customized training solutions tailored to meet the unique challenges of specific industries.',
      sliderName: 'industry',
    },
    {
      img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200',
      title: 'Hands-on Labs & Simulations',
      desc: 'Practical labs and simulations that translate theory into hands-on experience.',
      sliderName: 'labs',
    },
    {
      img: 'https://images.unsplash.com/photo-1454165833772-d996d49513d7?q=80&w=1200',
      title: 'Hybrid & Flexible Delivery',
      desc: 'Flexible training delivery combining online, in-person, and hybrid formats for maximum accessibility.',
      sliderName: 'hybrid',
    },
  ];

  return (
    <div className="relative w-full" style={{ minHeight: '40vh' }}>
      <ProgressSlider vertical={false} activeSlider='practical'>
        <SliderContent>
          {trainingItems.map((item, index) => (
            <SliderWrapper key={index} value={item?.sliderName}>
              <img
                className='rounded-xl h-[40vh] min-h-[400px] max-h-[600px] w-full object-cover'
                src={item.img}
                alt={item.desc}
              />
            </SliderWrapper>
          ))}
        </SliderContent>

        <SliderBtnGroup className='absolute bottom-0 h-fit cursor-pointer text-white bg-slate-900/60 backdrop-blur-md overflow-hidden grid grid-cols-2 md:grid-cols-4 rounded-md border border-white/10'>
          {trainingItems.map((item, index) => (
            <SliderBtn
              key={index}
              value={item?.sliderName}
              className='text-left p-4 border-r border-white/10 last:border-r-0'
              progressBarClass='bg-purple-500 h-1'
            >
              <h2 className='relative px-4 py-1 rounded-full w-fit bg-purple-500 text-white text-sm font-bold mb-2'>
                {item.title}
              </h2>
              <p className='text-sm font-medium text-slate-300'>{item.desc}</p>
            </SliderBtn>
          ))}
        </SliderBtnGroup>
      </ProgressSlider>
    </div>
  );
};



// --- FEATURE CARD COMPONENT ---
const FeatureCard = ({ feature }: { feature: any }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: feature.delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group h-full relative"
    >
      {/* SVG Progressive Border */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Initial Fading Baseline */}
          <line
            x1="0" y1="99.5" x2="100" y2="99.5"
            stroke="url(#fade-grad-new)"
            strokeWidth="0.75"
            className="transition-opacity duration-300"
          />

          <motion.path
            d="M 4,99.5 H 96 A 3.5,3.5 0 0 0 99.5,96 V 4 A 3.5,3.5 0 0 0 96,0.5 H 4 A 3.5,3.5 0 0 0 0.5,4 V 96 A 3.5,3.5 0 0 0 4,99.5"
            fill="none"
            stroke="#A855F7"
            strokeWidth="0.2"
            strokeLinecap="round"
            animate={{
              pathLength: isHovered ? 1 : 0,
              opacity: isHovered ? 1 : 0
            }}
            transition={{
              duration: 1,
              ease: "easeInOut"
            }}
          />

          <defs>
            <linearGradient id="fade-grad-new" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="40%" stopColor="#A855F7" stopOpacity="0.4" />
              <stop offset="80%" stopColor="#A855F7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="h-full p-8 lg:p-10 flex flex-col items-start relative z-10 transition-all duration-700 bg-transparent">
        <div className={`text-purple-400 mb-6 transition-all transform ${isHovered ? 'scale-110' : 'scale-100'}`}>
          {React.cloneElement(feature.icon as React.ReactElement, { size: 32 })}
        </div>

        <h3 className={`text-xl font-black font-heading mb-3 tracking-tight transition-colors uppercase ${isHovered ? 'text-purple-400' : 'text-white'}`}>
          {feature.title}
        </h3>

        <p className="text-slate-400 font-light leading-relaxed text-sm max-w-xs text-justify">
          {feature.desc}
        </p>
      </div>
    </motion.div>
  );
};

// --- SERVICE BLOCK COMPONENT (For Scroll Sync & Fade) ---
const ServiceBlock = ({ service, index, setActiveIndex }: { service: any, index: number, setActiveIndex: (i: number) => void }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveIndex(index);
    }
  }, [isInView, index, setActiveIndex]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Adjusted standard range for smoother edge fading
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0.9, 1, 1, 0.9]);
  const blur = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], ["8px", "0px", "0px", "8px"]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12">
      <motion.div
        ref={ref}
        style={{ opacity, scale, filter: `blur(${blur})` }}
        className="w-full max-w-xl"
      >
        <div className="mb-6">
          <div className="inline-flex items-center gap-4 mb-4">
            <span className="text-purple-500 font-bold uppercase tracking-widest text-xs">Service 0{index + 1}</span>
            <div className="h-[1px] w-12 bg-purple-500/50" />
          </div>
          <h3 className="text-3xl lg:text-4xl font-black font-heading text-white uppercase leading-tight mb-6">
            {service.title}
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            {service.desc}
          </p>
          <div className="mt-8">
            <button className="flex items-center gap-3 text-white uppercase tracking-widest text-xs font-bold group hover:text-purple-400 transition-colors">
              Explore Service
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- ACTIVE IMAGE COMPONENT ---
const ActiveImage = ({ src, isActive }: { src: string, isActive: boolean }) => (
  <AnimatePresence>
    {isActive && (
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        exit={{ opacity: 0, scale: 1.1, rotateY: -20 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 p-4"
      >
        <div className="w-full h-full relative group overflow-hidden rounded-sm">
          <img
            src={src}
            className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-700"
            alt="Service Detail"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

          {/* Decorative frame elements */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-purple-500/50" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-purple-500/50" />
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Home: React.FC = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const { scrollY } = useScroll();
  const sectionRef = useRef(null);
  const section4Ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const coreServiceData = [
    {
      title: "Capacity Building & Professional Development",
      desc: "Strengthening workforce competencies and institutional performance through targeted training programs.",
      icon: <GlobeIcon />,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200"
    },
    {
      title: "Cybersecurity & Digital Skills",
      desc: "Equipping professionals and institutions with practical knowledge and defensive strategies in digital environments.",
      icon: <Shield />,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200"
    },
    {
      title: "Leadership & Organizational Development",
      desc: "Developing leaders, teams, and effective workplace cultures that drive institutional growth.",
      icon: <Target />,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200"
    },
    {
      title: "Institutional Advisory & Consulting",
      desc: "Supporting organizations with strategy development, governance strengthening, and performance optimization.",
      icon: <Landmark />,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <ReactLenis root>
      <main className="bg-slate-950">
        {/* SECTION 1: CINEMATIC HERO */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-radial-at-t from-slate-900/20 via-slate-950/90 to-slate-950" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] max-w-[1200px] max-h-[1200px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            {/* 3D Globe Background - Centered Anchor for Zoom Stability & No Clipping */}
            <div className="absolute top-1/5 inset-y-0 right-0 w-full max-w-[100vw] pointer-events-none overflow-hidden">
              <div className="absolute top-1/3 left-1/2 -translate-y-1/2 translate-x-[5%] w-[600px] h-[600px] opacity-100 py-10 lg:py-16">
                <Globe
                  baseColor="#050029"
                  glowColor="#05010dff"
                  markerColor="#ffffff"
                  scale={1.2}
                  mapBrightness={30}
                  diffuse={1.2}
                />
              </div>
            </div>

            <div className="max-w-6xl relative z-10">
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
                      className="resilience-gradient font-black tracking-[-0.04em] uppercase text-[clamp(2.5rem,7vw,5.0rem)] leading-none"
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
        </section>

        {/* SECTION 2: WHO WE ARE (Scroll Triggered) */}
        <section className="pt-12 pb-32 lg:pt-16 lg:pb-40 bg-slate-950 relative z-20" ref={sectionRef}>
          {/* Large Clipped Title */}
          <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10 text-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-black leading-none uppercase tracking-tighter text-[clamp(2.5rem,12vw,5rem)] bg-center bg-no-repeat bg-clip-text text-transparent select-none filter brightness-125 animate-bg-pan"
              style={{
                backgroundImage: "url('https://assets.avant.org.au/cdf6134c-01d7-0292-26f5-2f5cf1db96f8/4645803d-67d3-4662-9f18-816e532b82a1/Responding-to-a-cyber-security-incident.jpg')",
                WebkitBackgroundClip: "text",
              }}
            >
              E b a n e x - I n t e r n a t i o n a l
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-8"
            >
              <span className="text-purple-500 font-bold uppercase tracking-[0.4em] text-[20px] block">Who We Are</span>
            </motion.div>
          </div>

          <div className="absolute inset-0 z-0 pointer-events-none">
            <motion.div
              style={{ y: backgroundY }}
              className="absolute top-0 left-0 w-full h-full opacity-5"
            >
              <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-500 blur-[50px] rounded-full" />
            </motion.div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Main Photo Container - No overflow-hidden so card can hang */}
            <div className="relative h-[350px] lg:h-[450px]">
              {/* Background Image Layer - Sharp edges, contained backdrop */}
              <div className="absolute inset-0 z-0 overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200"
                  className="w-full h-full object-cover opacity-60"
                  alt="Cybersecurity infrastructure"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
                <div className="absolute inset-0 bg-slate-950/40" />
              </div>

              {/* Content Overlay - Positioned for 50% vertical hang */}
              <div className="absolute bottom-0 left-0 w-full translate-y-1/2 z-10 px-6 flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="glass p-8 lg:p-10 rounded-[0.5rem] border border-white/10 max-w-4xl w-full shadow-2xl backdrop-blur-3xl overflow-hidden relative"
                >
                  {/* Decorative accent thread */}
                  <div className="absolute top-0 left-0  w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

                  <div className="space-y-6 text-slate-100 text-base font-light leading-relaxed relative z-10 text-justify">
                    <p>
                      Ebanex International is a multidisciplinary consulting and training firm focused on building skilled professionals, resilient institutions, and digitally secure organizations.
                    </p>
                    <p>
                      Founded by professionals with strong expertise in information technology, cybersecurity, training, and organizational development, Ebanex provides practical, industry-aligned learning and advisory solutions tailored to institutional needs.
                    </p>
                    <p>
                      We combine technical expertise, leadership development, and institutional capacity building to help organizations adapt, grow, and thrive in an evolving digital environment.
                    </p>
                  </div>

                  {/* Subtle background glow inside card */}
                  <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
                </motion.div>

                {/* WHY EBANEX title - Centered below the card with entrance-zoom effect */}
                <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10 text-center mt-20">
                  <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
                    className="font-heading font-black leading-none uppercase tracking-tighter text-[clamp(2.5rem,12vw,5rem)] bg-center bg-no-repeat bg-clip-text text-transparent select-none filter brightness-125 animate-bg-pan"
                    style={{
                      backgroundImage: "url('https://assets.avant.org.au/cdf6134c-01d7-0292-26f5-2f5cf1db96f8/4645803d-67d3-4662-9f18-816e532b82a1/Responding-to-a-cyber-security-incident.jpg')",
                      WebkitBackgroundClip: "text",
                    }}
                  >
                    W h y - E b a n e x
                  </motion.h2>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-8"
                  >
                    <span className="text-purple-500 font-bold uppercase tracking-[0.4em] text-[20px] block">Global Expertise</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHY EBANEX INTERNATIONAL (Premium Feature Grid) */}
        <section className="pt-32 pb-12 lg:pt-36 lg:pb-16 bg-slate-950 relative overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Squares
              speed={0.13}
              squareSize={40}
              direction='diagonal'
              borderColor='#271E37'
              hoverFillColor='#222'
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Global Training",
                  desc: "Multidisciplinary global training capability tailored for enterprise-scale professional development.",
                  icon: <GlobeIcon />,
                  delay: 0
                },
                {
                  title: "Cyber Expertise",
                  desc: "Strong cybersecurity and digital transformation expertise focused on resilient infrastructure.",
                  icon: <Shield />,
                  delay: 0.1
                },
                {
                  title: "Hands-on Learning",
                  desc: "Practical and hands-on learning methodology that translates theory into immediate operational value.",
                  icon: <Zap />,
                  delay: 0.2
                },
                {
                  title: "Custom Solutions",
                  desc: "Sector-customized training solutions designed to meet the unique challenges of specific industries.",
                  icon: <Target />,
                  delay: 0.3
                },
                {
                  title: "Capacity Building",
                  desc: "Institutional capacity-building capability to strengthen organizational foundations and processes.",
                  icon: <Landmark />,
                  delay: 0.4
                },
                {
                  title: "Global-Local Outlook",
                  desc: "Global outlook with strong local implementation capacity for seamless international integration.",
                  icon: <MapPin />,
                  delay: 0.5
                }
              ].map((feature, i) => (
                <FeatureCard key={i} feature={feature} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: OUR CORE SERVICES (Independent Scroll) */}
        <section className="relative bg-slate-950 border-t border-white/5 pt-10">
          {/* Core Services Title - Matching Style */}
          <div className="max-w-7xl mx-auto px-6 mb-20 relative z-10 text-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-black leading-none uppercase tracking-tighter text-[clamp(2.5rem,12vw,5rem)] bg-center bg-no-repeat bg-clip-text text-transparent select-none filter brightness-125 animate-bg-pan"
              style={{
                backgroundImage: "url('https://assets.avant.org.au/cdf6134c-01d7-0292-26f5-2f5cf1db96f8/4645803d-67d3-4662-9f18-816e532b82a1/Responding-to-a-cyber-security-incident.jpg')",
                WebkitBackgroundClip: "text",
              }}
            >
              C o r e - S e r v i c e s
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-8"
            >
              <span className="text-purple-500 font-bold uppercase tracking-[0.4em] text-[20px] block">What We Deliver</span>
            </motion.div>
          </div>

          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20">

              {/* Left Column: Sticky Image */}
              <div className="hidden lg:block relative">
                <div className="sticky top-0 h-screen flex items-center justify-center py-20">
                  <div className="w-full aspect-square relative rounded-sm overflow-hidden border border-white/10 shadow-2xl bg-slate-900/40 backdrop-blur-sm">
                    <div className="absolute inset-0 z-0">
                      <Squares
                        speed={0.05}
                        squareSize={60}
                        direction='diagonal'
                        borderColor='#271E37'
                        hoverFillColor='#1a1a1a'
                      />
                    </div>

                    <div className="relative w-full h-full p-8 md:p-12">
                      <AnimatePresence mode='wait'>
                        {coreServiceData.map((service, i) => (
                          activeServiceIndex === i && (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 1.05 }}
                              transition={{ duration: 0.5 }}
                              className="absolute inset-0"
                            >
                              <img
                                src={service.image}
                                className="w-full h-full object-cover opacity-60 filter brightness-90"
                                alt={service.title}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                            </motion.div>
                          )
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Scrollable Text Content */}
              <div className="relative py-20 lg:py-0">
                {coreServiceData.map((service, i) => (
                  <ServiceBlock key={i} service={service} index={i} setActiveIndex={setActiveServiceIndex} />
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 4.5: OUR TRAINING APPROACH (AnimatedBeam) */}
        <section className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Squares
              speed={0.13}
              squareSize={40}
              direction='diagonal'
              borderColor='#201e37ff'
              hoverFillColor='#222'
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-20">
              <motion.h2
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-black leading-none uppercase tracking-tighter text-[clamp(2.5rem,12vw,5rem)] bg-center bg-no-repeat bg-clip-text text-transparent select-none filter brightness-125 animate-bg-pan"
                style={{
                  backgroundImage: "url('https://assets.avant.org.au/cdf6134c-01d7-0292-26f5-2f5cf1db96f8/4645803d-67d3-4662-9f18-816e532b82a1/Responding-to-a-cyber-security-incident.jpg')",
                  WebkitBackgroundClip: "text",
                }}
              >
                T r a i n i n g - A p p r o a c h
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 3 }}
                className="mt-8"
              >
                <span className="text-purple-500 font-bold uppercase tracking-[0.4em] text-[20px] block">How We Deliver Excellence</span>
              </motion.div>
            </div>

            {/* Progressive Carousel Visualization */}
            <TrainingApproachCarousel />
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
      </main >
    </ReactLenis>
  );
};

export default Home;
