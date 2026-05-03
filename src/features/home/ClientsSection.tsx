import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Building2,
  HeartHandshake,
  Factory,
  Landmark,
  User,
  Briefcase,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Squares, ScrollReveal } from '../../components/animations';
import { Counter } from '../../components/training/Counter';

// Import local images
import ngoImg from '../../assets/ngo-agencies.jpg';
import industrialImg from '../../assets/industrial-sectors.jpg';
import financialImg from '../../assets/financial-services.jpg';

interface ClientsSectionProps {
  showStats?: boolean;
}

const ClientsSection: React.FC<ClientsSectionProps> = ({ showStats = true }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' });

  const clients = [
    {
      name: 'Governments',
      category: 'Public Sector',
      description:
        'Partnering with national and local government bodies to build institutional capacity.',
      icon: Landmark,
      image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1200',
      accent: '#00BFFF',
    },
    {
      name: 'Corporates',
      category: 'Private Sector',
      description: 'Empowering private sector organizations with cutting-edge training.',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200',
      accent: '#00BFFF',
    },
    {
      name: 'NGOs & Agencies',
      category: 'Development',
      description: 'Supporting NGOs and development agencies in capacity building.',
      icon: HeartHandshake,
      image: ngoImg,
      accent: '#00BFFF',
    },
    {
      name: 'Industrials',
      category: 'Manufacturing',
      description: 'Serving industrial, mining, and manufacturing companies.',
      icon: Factory,
      image: industrialImg,
      accent: '#00BFFF',
    },
    {
      name: 'Financial',
      category: 'Services',
      description: 'Delivering comprehensive solutions to financial institutions.',
      icon: Briefcase,
      image: financialImg,
      accent: '#00BFFF',
    },
    {
      name: 'Professionals',
      category: 'Individuals',
      description: 'Equipping individual professionals with certifications.',
      icon: User,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200',
      accent: '#00BFFF',
    },
  ];

  const totalSlides = Math.ceil(clients.length / 2);

  useEffect(() => {
    if (isPaused || !isInView) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000);

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

  const currentPair = [
    clients[(activeSlide * 2) % clients.length],
    clients[(activeSlide * 2 + 1) % clients.length]
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative z-30 h-[90vh] flex flex-col justify-center overflow-hidden w-full bg-[linear-gradient(135deg,#000000_50%,#00bfff_50%)]"
    >
      <div className="sticky top-0 h-screen w-full z-0 pointer-events-none opacity-100 overflow-hidden">
        <Squares
          speed={0.13}
          squareSize={40}
          direction="diagonal"
          borderColor="rgba(255,255,255,0.15)"
          hoverFillColor="rgba(0,191,255,0.05)"
        />
      </div>

      <div className="relative z-10 -mt-[100vh]">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-[20px] text-center shrink-0">
          <ScrollReveal yOffset={10} delay={0.1}>
            <div className="inline-block bg-black py-4 px-8 border border-white/10 shadow-2xl">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading text-white uppercase tracking-tighter leading-[0.9]">
                WHO WE <span className="text-[#00BFFF]">SERVE</span>
              </h2>
            </div>
          </ScrollReveal>
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
              className="w-10 h-10 sm:w-12 sm:h-12 bg-black/80 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-[#00BFFF]/20 hover:border-[#00BFFF]/50 transition-all"
              aria-label="Previous pair"
            >
              <ChevronLeft className="w-5 h-5 text-white/60" />
            </button>
          </div>

          <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30">
            <button
              onClick={handleNext}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-black/80 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-[#00BFFF]/20 hover:border-[#00BFFF]/50 transition-all"
              aria-label="Next pair"
            >
              <ChevronRight className="w-5 h-5 text-white/60" />
            </button>
          </div>

          <div className="flex gap-6 max-w-6xl mx-auto h-[220px] sm:h-[260px]">
            <div className="flex-1 relative overflow-hidden">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={`left-${activeSlide}`}
                  className="absolute inset-0"
                  initial={{ y: direction === 'next' ? '100%' : '-100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: direction === 'next' ? '-100%' : '100%' }}
                  transition={{ type: 'spring', stiffness: 20, damping: 10 }}
                >
                  <ClientCard client={currentPair[0]} />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex-1 relative overflow-hidden">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={`right-${activeSlide}`}
                  className="absolute inset-0"
                  initial={{ y: direction === 'next' ? '-100%' : '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: direction === 'next' ? '100%' : '-100%' }}
                  transition={{ type: 'spring', stiffness: 20, damping: 10 }}
                >
                  <ClientCard client={currentPair[1]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        {showStats && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="w-full px-8 sm:px-12 pr-16 sm:pr-32 mt-8"
          >
            <div className="flex flex-wrap justify-end gap-8 sm:gap-16">
              {[
                { value: 20, suffix: '+', label: 'Certifications Offered' },
                { value: 15, suffix: '+', label: 'Years of Experience' },
                { value: 10, suffix: '+', label: 'Strategic Partners' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl sm:text-4xl font-black text-slate-950 mb-1 font-heading">
                    <Counter target={stat.value} suffix={stat.suffix} duration={1.5} once={false} />
                  </div>
                  <div className="text-slate-900/80 text-[10px] sm:text-xs uppercase tracking-wider font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

interface Client {
  name: string;
  category: string;
  description: string;
  icon: React.ElementType;
  image: string;
  accent: string;
}

const ClientCard: React.FC<{ client: Client }> = ({ client }) => {
  const Icon = client.icon;
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, margin: '-50px' });

  return (
    <div ref={cardRef} className="group relative h-full border-[10px] border-black bg-black overflow-hidden">
      <img
        src={client.image}
        alt={client.name}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

      <div className="absolute left-0 top-0 w-1 h-full z-10 overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 w-full h-full"
          style={{ backgroundColor: client.accent }}
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-20">
        <div className="flex items-center gap-2 mb-2">
          <Icon size={14} style={{ color: client.accent }} />
          <span className="text-[9px] font-bold uppercase tracking-[0.2em]" style={{ color: client.accent }}>
            {client.category}
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
          {client.name}
        </h3>
        <p className="text-white/80 text-xs line-clamp-2">{client.description}</p>
      </div>
    </div>
  );
};

export default ClientsSection;
