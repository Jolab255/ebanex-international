import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import {
  Building2,
  HeartHandshake,
  Factory,
  Landmark,
  User,
  Briefcase,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const ClientsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [5, -5]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [-3, 3]);

  const clients = [
    {
      name: 'Governments',
      category: 'Public Sector',
      description:
        'Partnering with national and local government bodies to build institutional capacity.',
      icon: Landmark,
      image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=800',
      accent: '#3b82f6',
    },
    {
      name: 'Corporates',
      category: 'Private Sector',
      description: 'Empowering private sector organizations with cutting-edge training.',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800',
      accent: '#2563eb',
    },
    {
      name: 'NGOs & Agencies',
      category: 'Development',
      description: 'Supporting NGOs and development agencies in capacity building.',
      icon: HeartHandshake,
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800',
      accent: '#10b981',
    },
    {
      name: 'Industrials',
      category: 'Manufacturing',
      description: 'Serving industrial, mining, and manufacturing companies.',
      icon: Factory,
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=800',
      accent: '#f97316',
    },
    {
      name: 'Financial',
      category: 'Services',
      description: 'Delivering comprehensive solutions to financial institutions.',
      icon: Briefcase,
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800',
      accent: '#22c55e',
    },
    {
      name: 'Professionals',
      category: 'Individuals',
      description: 'Equipping individual professionals with certifications.',
      icon: User,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800',
      accent: '#ec4899',
    },
  ];

  const totalSlides = Math.ceil(clients.length / 2);

  // Auto-advance every 11 seconds (7s transition + 4s display)
  useEffect(() => {
    if (isPaused || !isInView) return;

    const interval = setInterval(() => {
      handleNext();
    }, 11000);

    return () => clearInterval(interval);
  }, [isPaused, isInView, activeSlide]);

  const handleNext = useCallback(() => {
    setDirection('next');
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setDirection('prev');
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const handleGoTo = useCallback(
    (index: number) => {
      setDirection(index > activeSlide ? 'next' : 'prev');
      setActiveSlide(index);
    },
    [activeSlide],
  );

  // Get current pair of clients
  const getClientsForSlide = (slideIndex: number) => {
    const idx1 = (slideIndex * 2) % clients.length;
    const idx2 = (slideIndex * 2 + 1) % clients.length;
    return [clients[idx1], clients[idx2]];
  };

  const currentPair = getClientsForSlide(activeSlide);
  const prevPair = getClientsForSlide((activeSlide - 1 + totalSlides) % totalSlides);
  const nextPair = getClientsForSlide((activeSlide + 1) % totalSlides);

  return (
    <section ref={sectionRef} className="py-[5px] bg-slate-950 relative overflow-hidden">
      {/* Floating Background Elements */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute -left-20 top-1/4 w-96 h-96 bg-blue-500/5 blur-[100px] rounded-full"
      />
      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        className="absolute -right-20 bottom-1/4 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute left-1/3 top-1/2 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full"
      />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 sm:mb-24 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-gradient-to-r from-blue-500 to-transparent" />
              <span className="text-blue-400 text-[10px] font-black tracking-[0.4em] uppercase">
                Who We Serve
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Trusted by Industry
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-400 to-blue-400">
                Leaders Worldwide
              </span>
            </motion.h2>
          </div>

          {/* Vertical Separator Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block w-[1px] h-24 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent origin-center"
          />

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-md text-left"
          >
            From innovative startups to Fortune 500 companies, our client list spans sectors, each
            with unique challenges we've navigated.
          </motion.p>
        </div>
      </div>

      {/* Cards Container with Stacking Animation */}
      <div
        className="relative px-4 sm:px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Navigation Arrows */}
        <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30">
          <button
            onClick={handlePrev}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-900/80 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
            aria-label="Previous pair"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white/60" />
          </button>
        </div>

        <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30">
          <button
            onClick={handleNext}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-900/80 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
            aria-label="Next pair"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white/60" />
          </button>
        </div>

        {/* Two Cards with Push Animation */}
        <div className="flex gap-6 max-w-6xl mx-auto h-[500px]">
          {/* Left Column */}
          <div className="flex-1 relative overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={`left-${activeSlide}`}
                className="absolute inset-0"
                initial={{ y: direction === 'next' ? '100%' : '-100%' }}
                animate={{ y: 0 }}
                exit={{ y: direction === 'next' ? '-100%' : '100%' }}
                transition={{
                  y: { type: 'spring', stiffness: 20, damping: 10, duration: 7 },
                }}
              >
                <ClientCard client={currentPair[0]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column */}
          <div className="flex-1 relative overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={`right-${activeSlide}`}
                className="absolute inset-0"
                initial={{ y: direction === 'next' ? '-100%' : '100%' }}
                animate={{ y: 0 }}
                exit={{ y: direction === 'next' ? '100%' : '-100%' }}
                transition={{
                  y: { type: 'spring', stiffness: 20, damping: 10, duration: 7 },
                }}
              >
                <ClientCard client={currentPair[1]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleGoTo(index)}
              className="relative focus:outline-none"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: activeSlide === index ? '#a855f7' : 'rgba(255,255,255,0.2)',
                  transform: activeSlide === index ? 'scale(1.3)' : 'scale(1)',
                }}
              />
            </button>
          ))}
        </div>

        {/* Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <span className="text-white/40 text-sm font-mono">
            <span className="text-white">{String(activeSlide + 1).padStart(2, '0')}</span>
            <span className="mx-2">/</span>
            <span>{String(totalSlides).padStart(2, '0')}</span>
          </span>
        </motion.div>
      </div>

      {/* Bottom Stats */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 mt-16 sm:mt-24 relative z-10"
      >
        <div className="flex flex-wrap justify-center gap-12 sm:gap-20">
          {[
            { number: '50+', label: 'Global Clients' },
            { number: '15+', label: 'Industries' },
            { number: '30+', label: 'Countries' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-slate-500 text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// Client Card Component
interface ClientCardProps {
  client: {
    name: string;
    category: string;
    description: string;
    icon: React.ElementType;
    image: string;
    accent: string;
  };
}

const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
  const Icon = client.icon;
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, margin: '-50px' });

  return (
    <div ref={cardRef} className="group relative h-full">
      {/* Masked Image Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={client.image}
          alt={client.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
          style={{
            maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
          }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
      </div>

      {/* Vertical Colored Line with Wave Animation */}
      <div className="absolute left-0 top-0 w-1 h-full z-10 overflow-hidden">
        {/* Main solid line */}
        <motion.div
          className="absolute left-0 top-0 w-full h-full"
          style={{ backgroundColor: client.accent }}
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        {/* Traveling wave effect - moves up */}
        <motion.div
          className="absolute left-0 w-full h-1/3"
          style={{
            background: `linear-gradient(to bottom, transparent, ${client.accent}, transparent)`,
            filter: 'blur(2px)',
          }}
          animate={
            isInView
              ? {
                  top: ['-33%', '100%'],
                }
              : {}
          }
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Traveling light effect - moves down */}
        <motion.div
          className="absolute left-0 w-full h-1/4"
          style={{
            background: `linear-gradient(to bottom, ${client.accent}, transparent)`,
            opacity: 0.6,
          }}
          animate={
            isInView
              ? {
                  top: ['100%', '-25%'],
                }
              : {}
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
            delay: 0.5,
          }}
        />

        {/* Pulsing glow */}
        <motion.div
          className="absolute left-0 top-0 w-full h-full"
          style={{
            backgroundColor: client.accent,
            filter: 'blur(4px)',
          }}
          animate={
            isInView
              ? {
                  opacity: [0.3, 0.8, 0.3],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20">
        {/* Category Tag */}
        <div className="flex items-center gap-2 mb-4">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${client.accent}20` }}
          >
            <Icon size={18} style={{ color: client.accent }} />
          </div>
          <span
            className="text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{ color: client.accent }}
          >
            {client.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all duration-300">
          {client.name}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{client.description}</p>

        {/* Arrow */}
        <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
          <ArrowUpRight className="w-4 h-4 text-white/60 group-hover:text-slate-950 transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
