import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import Squares from '../components/ui/Squares';
import {
  Target,
  Eye,
  ShieldCheck,
  Heart,
  Sparkles,
  Handshake,
  Mail,
  Linkedin,
  Twitter,
  ChevronRight,
  Home,
  Plus,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const { scrollYProgress: imageScrollProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], ['-30%', '0%', '30%']), {
    stiffness: 40,
    damping: 25,
    restDelta: 0.001,
  });

  const imageY = useSpring(useTransform(imageScrollProgress, [0, 1], ['-15%', '15%']), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800',
      alt: 'Team meeting',
    },
    {
      src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800',
      alt: 'Training session',
    },
    {
      src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800',
      alt: 'Workshop',
    },
    {
      src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800',
      alt: 'Collaboration',
    },
  ];

  const values = [
    { title: 'Excellence', icon: <Sparkles className="text-yellow-400" /> },
    { title: 'Integrity', icon: <ShieldCheck className="text-green-400" /> },
    { title: 'Innovation', icon: <Heart className="text-red-400" /> },
    { title: 'Impact', icon: <Target className="text-blue-500" /> },
    { title: 'Professionalism', icon: <Handshake className="text-blue-500" /> },
    { title: 'Global Collaboration', icon: <Eye className="text-indigo-400" /> },
  ];

  return (
    <div className="pb-16 sm:pb-24">
      {/* Parallax Background Section */}
      <div
        ref={containerRef}
        className="relative w-full h-[45vh] sm:h-[50vh] lg:h-[55vh] overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 w-full h-[180%] -top-[40%]"
          style={{ y: backgroundY }}
        >
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000"
            alt="Sustainability and growth"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/50" />
        </motion.div>

        {/* Overlay Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 xl:px-24 max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-500 text-xs sm:text-sm lg:text-base font-medium tracking-widest uppercase mb-3 sm:mb-4"
          >
            Building Institutional Excellence
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 relative"
          >
            Who We Are
            <span className="absolute -bottom-2 left-0 w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 text-xs sm:text-sm text-slate-300"
          >
            <Link to="/" className="flex items-center gap-1 hover:text-blue-500 transition-colors">
              <Home size={14} className="sm:w-4 sm:h-4" />
              <span>Home</span>
            </Link>
            <ChevronRight size={14} className="text-blue-500 sm:w-4 sm:h-4" />
            <span className="text-white">Who We Are</span>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24">
        {/* Section 1: About */}
        <div className="max-w-4xl mx-auto mb-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading mb-6 sm:mb-8"
          >
            About <span className="text-blue-500">Ebanex International</span>
          </motion.h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed mb-6">
            Ebanex International is a global consulting and training firm specializing in
            professional capacity building, cybersecurity training, digital transformation, and
            institutional strengthening.
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed">
            We support governments, organizations, and professionals through high-quality training,
            advisory services, and knowledge transfer programs designed to deliver measurable
            results and long-term institutional impact.
          </p>
        </div>
      </div>

      {/* Parallax Image Section with Gallery */}
      <div className="relative">
        <div ref={imageRef} className="relative w-full h-[25vh] overflow-hidden">
          <motion.div className="absolute inset-0 w-full h-[130%] -top-[15%]" style={{ y: imageY }}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000"
              alt="Team collaboration at Ebanex International"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, #020617 0%, transparent 80%)' }}
          />
        </div>

        {/* Gallery Photos - 50% overlapping */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20 px-4 sm:px-8 lg:px-12">
          {/* Mobile: Scrollable Carousel */}
          <div className="flex sm:grid sm:grid-cols-4 gap-3 sm:gap-3 lg:gap-4 w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative aspect-[4/5] min-w-[45%] sm:min-w-0 sm:aspect-[4/5] rounded-xl overflow-hidden cursor-pointer group shadow-xl border-2 border-white/10 w-full flex-shrink-0 snap-center"
                onClick={() => setSelectedImage(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Background Section - Mission & Vision */}
      <section className="relative isolate bg-slate-950 border-t border-white/5 pt-48 sm:pt-56 lg:pt-64 pb-16 sm:pb-20 lg:pb-24">
        <div className="absolute inset-0 z-0">
          <Squares
            speed={0.05}
            squareSize={60}
            direction="diagonal"
            borderColor="#1e293b"
            hoverFillColor="#1a1a1a"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm border border-white/10 p-8 sm:p-10 lg:p-12 hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Target className="text-blue-500 w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <span className="text-blue-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
                    What We Do
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
                  Our Mission
                </h3>
                <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed">
                  To provide transformative training and strategic advisory that strengthens
                  institutional frameworks, secures digital assets, and cultivates high-performance
                  leadership worldwide.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm border border-white/10 p-8 sm:p-10 lg:p-12 hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Eye className="text-blue-500 w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <span className="text-blue-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
                    Where We're Going
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
                  Our Vision
                </h3>
                <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed">
                  To be the premier global partner for professional development, known for setting
                  the standard in cybersecurity excellence and sustainable organizational evolution.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24">
        {/* Section 3: Core Values Tree Diagram */}
        <div className="mb-32">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-black leading-none uppercase tracking-tighter text-[clamp(0.6rem,7vw,5rem)] bg-center bg-no-repeat bg-clip-text text-transparent select-none filter brightness-125 animate-bg-pan text-center whitespace-nowrap overflow-hidden text-ellipsis"
            style={{
              backgroundImage:
                "url('https://assets.avant.org.au/cdf6134c-01d7-0292-26f5-2f5cf1db96f8/4645803d-67d3-4662-9f18-816e532b82a1/Responding-to-a-cyber-security-incident.jpg')",
              WebkitBackgroundClip: 'text',
            }}
          >
            C o r e - V a l u e s
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-2 text-center"
          >
            <span className="text-blue-500 font-bold uppercase tracking-[0.4em] text-[clamp(0.7rem,2vw,1rem)]">
              What Drives Us
            </span>
          </motion.div>

          {/* Tree Diagram */}
          <div className="relative flex flex-col items-center mt-12 sm:mt-16">
            {/* Parent Node - Ebanex International */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <div className="bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg sm:text-xl lg:text-2xl shadow-lg shadow-blue-500/30">
                Ebanex International
              </div>
            </motion.div>

            {/* Connecting Lines SVG */}
            <svg
              className="w-full h-32 sm:h-40 lg:h-48 overflow-visible"
              viewBox="0 0 800 120"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Main vertical line from parent */}
              <motion.path
                d="M400 0 L400 40"
                stroke="#3b82f6"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />
              {/* Horizontal connector */}
              <motion.path
                d="M80 40 L720 40"
                stroke="#3b82f6"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
              />
              {/* Vertical lines to each value */}
              {values.map((_, idx) => {
                const xPosition = 80 + idx * 128;
                return (
                  <motion.path
                    key={idx}
                    d={`M${xPosition} 40 Q${xPosition} 70 ${xPosition} 100`}
                    stroke="#3b82f6"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + idx * 0.1, ease: 'easeInOut' }}
                  />
                );
              })}
            </svg>

            {/* Child Nodes - Core Values */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 w-full">
              {values.map((val, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass p-6 sm:p-8 rounded-2xl border border-white/10 text-center flex flex-col items-center gap-4 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    {val.icon}
                  </div>
                  <span className="font-bold text-sm tracking-wide">{val.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 4: Founders’ Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-24 lg:mb-32"
        >
          <div className="text-center mb-12 sm:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-blue-500 text-sm font-semibold tracking-widest uppercase"
            >
              Leadership Voice
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading mt-3"
            >
              Founders&apos; <span className="text-blue-500">Message</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Founder Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800"
                  alt="Dr. Amara Okoro - Founding Director"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-white">Dr. Amara Okoro</h3>
                    <p className="text-blue-400 text-sm sm:text-base">Founding Director</p>
                    <div className="flex items-center gap-3 mt-4">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition-colors"
                      >
                        <Linkedin size={18} className="text-white" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition-colors"
                      >
                        <Twitter size={18} className="text-white" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition-colors"
                      >
                        <Mail size={18} className="text-white" />
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
              <div className="absolute -z-10 -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
            </motion.div>

            {/* Quote & Message */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-slate-300 leading-relaxed mb-8 relative z-10">
                <span className="absolute -top-6 -left-2 text-blue-500/30 text-6xl sm:text-7xl lg:text-8xl font-serif leading-none">
                  &ldquo;
                </span>
                <span className="relative z-10 pl-8 sm:pl-10">
                  In a world where digital boundaries are constantly shifting, the greatest asset
                  any organization possesses is its people. At Ebanex, we invest in that human
                  potential to build resilient institutions that thrive in the face of change.
                </span>
                <span className="absolute -bottom-10 right-0 text-blue-500/30 text-6xl sm:text-7xl lg:text-8xl font-serif leading-none">
                  &rdquo;
                </span>
              </blockquote>

              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-slate-400 leading-relaxed"
                >
                  Our vision was born from a simple belief: that sustainable development requires
                  empowered people. Every training program we design, every partnership we forge,
                  and every institution we strengthen is a step toward a more capable, secure, and
                  prosperous global community.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-slate-400 leading-relaxed"
                >
                  We remain committed to excellence, integrity, and innovation in all that we do,
                  knowing that our work today shapes the leaders and institutions of tomorrow.
                </motion.p>
              </div>

              {/* Signature */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 pt-8 border-t border-white/10"
              >
                <p className="text-blue-400 font-medium">Dr. Amara Okoro</p>
                <p className="text-slate-500 text-sm">Founding Director, Ebanex International</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Section 5: Strategic Focus */}
        <section className="relative bg-slate-950 min-h-[50vh] py-16 sm:py-20 lg:py-24 -mx-4 sm:-mx-6 px-4 sm:px-6 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <span className="text-blue-500 text-sm font-semibold tracking-widest uppercase">
                What We Focus On
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white mt-3">
                Our Strategic Focus
              </h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
            </motion.div>

            {/* Cards in 2x2 Grid */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-blue-500 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300" />
                <div className="relative bg-slate-900 rounded-2xl p-8 lg:p-10 shadow-lg border border-white/10 group-hover:border-blue-500/50 group-hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl font-bold text-white mb-2">
                        Technology-led Capacity Building
                      </h3>
                      <p className="text-slate-400 text-sm lg:text-base">
                        Empowering institutions through innovative digital solutions and modern
                        methodologies.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-blue-500 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300" />
                <div className="relative bg-slate-900 rounded-2xl p-8 lg:p-10 shadow-lg border border-white/10 group-hover:border-blue-500/50 group-hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl font-bold text-white mb-2">
                        Cybersecurity & Digital Resilience
                      </h3>
                      <p className="text-slate-400 text-sm lg:text-base">
                        Protecting digital assets and building resilient infrastructure for the
                        modern age.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-blue-500 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300" />
                <div className="relative bg-slate-900 rounded-2xl p-8 lg:p-10 shadow-lg border border-white/10 group-hover:border-blue-500/50 group-hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl font-bold text-white mb-2">
                        Leadership & Workforce Development
                      </h3>
                      <p className="text-slate-400 text-sm lg:text-base">
                        Cultivating visionary leaders and skilled professionals for organizational
                        excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-blue-500 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300" />
                <div className="relative bg-slate-900 rounded-2xl p-8 lg:p-10 shadow-lg border border-white/10 group-hover:border-blue-500/50 group-hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl font-bold text-white mb-2">
                        Institutional Strengthening
                      </h3>
                      <p className="text-slate-400 text-sm lg:text-base">
                        Building robust frameworks that enable sustainable growth and organizational
                        impact.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
