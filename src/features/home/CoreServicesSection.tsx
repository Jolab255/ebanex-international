import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Squares, ScrollReveal } from '../../components/animations';
import type { Service } from '../../types/content';

// Import local images
import capacityImg from '../../assets/capacity-building.jpg';
import cyberImg from '../../assets/cybersecurity-skills.jpg';
import leadershipImg from '../../assets/leadership-development.jpg';
import advisoryImg from '../../assets/institutional-advisory.jpg';

const CORE_SERVICES: Service[] = [
  {
    title: 'Capacity Building & Professional Development',
    desc: 'Strengthening workforce competencies and institutional performance through targeted training programs designed for long-term excellence.',
    icon: <></>,
    image: capacityImg,
  },
  {
    title: 'Cybersecurity & Digital Skills',
    desc: 'Equipping professionals and institutions with practical knowledge and defensive strategies in high-stakes digital environments.',
    icon: <></>,
    image: cyberImg,
  },
  {
    title: 'Leadership & Organizational Development',
    desc: 'Developing leaders, teams, and effective workplace cultures that drive institutional growth and sustainable success.',
    icon: <></>,
    image: leadershipImg,
  },
  {
    title: 'Institutional Advisory & Consulting',
    desc: 'Supporting organizations with strategy development, governance strengthening, and performance optimization across sectors.',
    icon: <></>,
    image: advisoryImg,
  },
];

interface ServiceCardProps {
  service: Service;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  isMobile: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, totalCards, progress, isMobile }) => {
  const sliceSize = 1 / totalCards;
  const end = (index + 1) * sliceSize;

  // Scale down the card slightly as the next one comes in
  const isLast = index === totalCards - 1;
  const scale = useTransform(
    progress,
    isLast ? [0, 1] : [end, end + sliceSize],
    isLast ? [1, 1] : [1, 0.95],
  );

  // Tight sticky offset for mobile
  const topOffset = isMobile ? 64 + index * 10 : 100 + index * 32;

  return (
    <motion.div
      style={{
        scale,
        zIndex: index + 1,
        top: topOffset,
      }}
      className="sticky mx-auto w-full max-w-5xl mb-6 md:mb-[10vh] transform-gpu will-change-transform backface-hidden"
    >
      <div
        className="group relative overflow-hidden border border-white/10 shadow-[0_-15px_35px_rgba(0,0,0,0.7)] transform-gpu"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)',
          transform: 'translateZ(0)',
        }}
      >
        <div className="grid md:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-48 sm:h-64 md:h-auto overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-all duration-700"
            />
          </div>

          {/* Content Side */}
          <div className="p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-3 md:mb-6">
              <span className="text-[#00BFFF] font-black text-xs uppercase tracking-[0.3em]">
                Service 0{index + 1}
              </span>
              <div className="h-[1px] w-8 bg-[#00BFFF]/30" />
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-black text-white uppercase leading-tight mb-3 md:mb-6">
              {service.title}
            </h3>

            <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-5 md:mb-10">{service.desc}</p>

            <div className="flex">
              <Link
                to="/training"
                className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent border border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-black font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300 inline-block"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CoreServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const [heightValue, setHeightValue] = useState(`${CORE_SERVICES.length * 80 + 50}vh`);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      
      if (width < 768) {
        // PIXEL-BASED HEIGHT for mobile
        const mobilePxHeight = CORE_SERVICES.length * 400 + 250;
        setHeightValue(`${mobilePxHeight}px`);
      } else if (width < 1024) {
        // PIXEL-BASED HEIGHT for tablets (iPad, etc.)
        // Reduced to tighten the gap significantly
        const tabletPxHeight = CORE_SERVICES.length * 400 + 150;
        setHeightValue(`${tabletPxHeight}px`);
      } else {
        setHeightValue(`${CORE_SERVICES.length * 80 + 50}vh`);
      }
    };
    
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-30 bg-black"
      style={{ height: heightValue }}
    >
      <div className="sticky top-0 h-screen w-full z-0 overflow-hidden pointer-events-none">
        <Squares
          speed={0.13}
          squareSize={40}
          direction="diagonal"
          borderColor="rgba(255,255,255,0.08)"
          hoverFillColor="rgba(255,255,255,0.05)"
        />
      </div>

      <div className="relative z-10 -mt-[100vh]">
        {/* Header */}
        <div className="pt-16 pb-8 md:pb-16 text-center">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal yOffset={20}>
              <span className="text-[#00BFFF] font-black uppercase tracking-[0.5em] text-xs mb-4 block">
                What We Deliver
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter">
                Core{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-white">
                  Services
                </span>
              </h2>
            </ScrollReveal>
          </div>
        </div>

        {/* Stacking Cards Container */}
        <div className="px-4 pb-8 sm:pb-12 md:pb-[30vh]">
          {CORE_SERVICES.map((service, i) => (
            <ServiceCard
              key={i}
              service={service}
              index={i}
              totalCards={CORE_SERVICES.length}
              progress={scrollYProgress}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;
