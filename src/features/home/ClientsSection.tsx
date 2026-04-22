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
import { Squares } from '../../components/animations';
import { FitText } from '../../components/common';
import { Counter } from '../../components/training/Counter';

// Import local images
import ngoImg from '../../assets/ngo\'s and agencies.jpg';
import industrialImg from '../../assets/industrial sectors.jpg';
import financialImg from '../../assets/financial services.jpg';

const ClientsSection: React.FC = () => {
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
      image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1200', // Classical government/legal architecture
      accent: '#00BFFF',
    },
    {
      name: 'Corporates',
      category: 'Private Sector',
      description: 'Empowering private sector organizations with cutting-edge training.',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200', // Modern high-end business district
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
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200', // Specialized training environment
      accent: '#00BFFF',
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
    <section 
      ref={sectionRef} 
      className="relative z-30 h-[90vh] flex flex-col justify-center overflow-hidden w-full bg-[linear-gradient(135deg,#000000_50%,#00bfff_50%)]"
    >
      <div className="absolute inset-0 z-0 pointer-events-none opacity-100">
        <Squares
          speed={0.13}
          squareSize={40}
          direction="diagonal"
          borderColor="rgba(255,255,255,0.15)"
          hoverFillColor="rgba(0,191,255,0.05)"
        />
      </div>

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-[20px] relative z-10 text-center shrink-0">
        <div className="select-none mb-3 inline-block bg-black py-4 px-8">
          <FitText
            minScale={0.35}
            textClassName="font-heading font-black leading-none uppercase tracking-tighter text-[clamp(1.25rem,6vw,3.5rem)]"
          >
            <span 
              style={{
                backgroundImage: "linear-gradient(135deg, #FFFFFF 0%, #00BFFF 50%, #FFFFFF 100%)",
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              WHO WE SERVE
            </span>
          </FitText>
        </div>
        <div className="mt-4">
          <span className="text-[#00BFFF] font-black uppercase tracking-[0.4em] text-[clamp(0.7rem,1.2vw,0.85rem)] inline-block bg-black py-1.5 px-6">
            Trusted by Industry Leaders
          </span>
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
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-none bg-black/80 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-[#00BFFF]/20 hover:border-[#00BFFF]/50 transition-all duration-300"
            aria-label="Previous pair"
          >
            <ChevronLeft className="w-5 h-5 text-white/60" />
          </button>
        </div>

        <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30">
          <button
            onClick={handleNext}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-none bg-black/80 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-[#00BFFF]/20 hover:border-[#00BFFF]/50 transition-all duration-300"
            aria-label="Next pair"
          >
            <ChevronRight className="w-5 h-5 text-white/60" />
          </button>
        </div>

        {/* Two Cards with Push Animation */}
        <div className="flex gap-6 max-w-6xl mx-auto h-[220px] sm:h-[260px]">
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
      </div>

      {/* Bottom Stats */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full px-8 sm:px-12 pr-16 sm:pr-32 mt-8 relative z-10"
      >
        <div className="flex flex-wrap justify-end gap-8 sm:gap-16">
          {[
            { value: 20, suffix: '+', label: 'Certifications Offered' },
            { value: 15, suffix: '+', label: 'Years of Experience' },
            { value: 10, suffix: '+', label: 'Strategic Partners & Growing' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 mb-1 font-heading">
                <Counter target={stat.value} suffix={stat.suffix} duration={1.5} once={true} />
              </div>
              <div className="text-slate-900/80 text-[10px] sm:text-xs uppercase tracking-wider font-bold">{stat.label}</div>
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
    <div ref={cardRef} className="group relative h-full border-[10px] border-black bg-black">
      {/* Masked Image Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={client.image}
          alt={client.name}
          className="w-full h-full object-cover transition-all duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
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
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-20">
        {/* Category Tag */}
        <div className="flex items-center gap-2 mb-2">
          <div
            className="w-6 h-6 rounded-none flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg"
            style={{ backgroundColor: `${client.accent}20` }}
          >
            <Icon size={14} style={{ color: client.accent }} />
          </div>
          <span
            className="text-[9px] font-bold uppercase tracking-[0.2em] [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]"
            style={{ color: client.accent }}
          >
            {client.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all duration-300 leading-tight [text-shadow:0_2px_4px_rgba(0,0,0,0.8)]">
          {client.name}
        </h3>

        {/* Description */}
        <p className="text-white/80 text-xs leading-relaxed max-w-xs line-clamp-2 [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]">{client.description}</p>

        {/* Arrow */}
        <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 w-8 h-8 rounded-none border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
          <ArrowUpRight className="w-3.5 h-3.5 text-white/60 group-hover:text-slate-950 transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
