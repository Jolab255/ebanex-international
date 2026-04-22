import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Squares } from '../../components/animations';
import type { Service } from '../../types/content';

const CORE_SERVICES: Service[] = [
  {
    title: 'Capacity Building & Professional Development',
    desc: 'Strengthening workforce competencies and institutional performance through targeted training programs designed for long-term excellence.',
    icon: <></>,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200',
  },
  {
    title: 'Cybersecurity & Digital Skills',
    desc: 'Equipping professionals and institutions with practical knowledge and defensive strategies in high-stakes digital environments.',
    icon: <></>,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200',
  },
  {
    title: 'Leadership & Organizational Development',
    desc: 'Developing leaders, teams, and effective workplace cultures that drive institutional growth and sustainable success.',
    icon: <></>,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200',
  },
  {
    title: 'Institutional Advisory & Consulting',
    desc: 'Supporting organizations with strategy development, governance strengthening, and performance optimization across sectors.',
    icon: <></>,
    image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1200',
  },
];

interface ServiceCardProps {
  service: Service;
  index: number;
  totalCards: number;
  sectionRef: React.RefObject<HTMLElement>;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, totalCards, sectionRef }) => {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const sliceSize = 1 / totalCards;
  const start = index * sliceSize;
  const end = (index + 1) * sliceSize;

  // Scale down the card slightly as the next one comes in
  const scale = useTransform(scrollYProgress, [end, end + sliceSize], [1, 0.95]);
  
  // Keep cards fully opaque (fixing your transparency complaint)
  const opacity = 1;

  // Sticky offset from top
  const topOffset = 100 + index * 32;

  return (
    <motion.div
      style={{ 
        scale, 
        opacity, 
        zIndex: index + 1, 
        top: topOffset 
      }}
      className="sticky mx-auto w-full max-w-5xl mb-[10vh]"
    >
      <div 
        className="group relative overflow-hidden border border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"
        style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}
      >
        <div className="grid md:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-64 md:h-auto overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-all duration-700"
            />
          </div>

          {/* Content Side */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#00BFFF] font-black text-xs uppercase tracking-[0.3em]">
                Service 0{index + 1}
              </span>
              <div className="h-[1px] w-8 bg-[#00BFFF]/30" />
            </div>

            <h3 className="text-2xl md:text-3xl font-heading font-black text-white uppercase leading-tight mb-6">
              {service.title}
            </h3>

            <p className="text-white/60 text-base leading-relaxed mb-10">
              {service.desc}
            </p>

            <div className="flex">
              <Link 
                to="/training"
                className="px-8 py-4 bg-transparent border border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-black font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300 inline-block"
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

  return (
    <section 
      ref={sectionRef} 
      className="relative z-30 bg-black"
      style={{ height: `${CORE_SERVICES.length * 80 + 40}vh` }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Squares
          speed={0.13}
          squareSize={40}
          direction="diagonal"
          borderColor="rgba(255,255,255,0.08)"
          hoverFillColor="rgba(255,255,255,0.05)"
        />
      </div>

      {/* Header */}
      <div className="relative z-10 pt-16 pb-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#00BFFF] font-black uppercase tracking-[0.5em] text-xs mb-4 block">
              What We Deliver
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-white">Services</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Stacking Cards Container */}
      <div className="relative z-10 px-4 pb-[40vh]">
        {CORE_SERVICES.map((service, i) => (
          <ServiceCard
            key={i}
            service={service}
            index={i}
            totalCards={CORE_SERVICES.length}
            sectionRef={sectionRef as React.RefObject<HTMLElement>}
          />
        ))}
      </div>
    </section>
  );
};

export default CoreServicesSection;
