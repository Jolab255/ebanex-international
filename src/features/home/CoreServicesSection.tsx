import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import Squares from '../../components/ui/Squares';
import type { Service } from '../../types/content';

interface ServiceBlockProps {
  service: Service;
  index: number;
  setActiveIndex: (i: number) => void;
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({ service, index, setActiveIndex }) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: '-50% 0px -50% 0px' });

  React.useEffect(() => {
    if (isInView) {
      setActiveIndex(index);
    }
  }, [isInView, index, setActiveIndex]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0.9, 1, 1, 0.9]);
  const blur = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], ['8px', '0px', '0px', '8px']);

  return (
    <div className="min-h-[40vh] sm:min-h-[50vh] lg:min-h-[70vh] flex items-center justify-center py-6 sm:py-8 lg:py-12">
      <motion.div
        ref={ref}
        style={{ opacity, scale, filter: `blur(${blur})` }}
        className="w-full max-w-xl"
      >
        <div className="mb-6">
          <div className="inline-flex items-center gap-4 mb-4">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">
              Service 0{index + 1}
            </span>
            <div className="h-[1px] w-12 bg-blue-500/50" />
          </div>
          <h3 className="text-[clamp(0.7rem,3.5vw,2.5rem)] font-black font-heading text-white uppercase leading-tight mb-4 sm:mb-6 whitespace-nowrap overflow-hidden text-ellipsis">
            {service.title}
          </h3>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">{service.desc}</p>
          <div className="mt-8 flex justify-center sm:justify-start">
            <button className="h-12 sm:h-14 px-4 sm:px-6 lg:px-8 border border-white/10 text-white rounded-sm font-bold text-[clamp(0.625rem,1.5vw,0.75rem)] uppercase tracking-[0.2em] hover:bg-white/5 hover:border-blue-500 transition-all transform hover:-translate-y-1 active:scale-95">
              Explore Service
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const CoreServicesSection: React.FC = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const coreServiceData: Service[] = [
    {
      title: 'Capacity Building & Professional Development',
      desc: 'Strengthening workforce competencies and institutional performance through targeted training programs.',
      icon: <></>,
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200',
    },
    {
      title: 'Cybersecurity & Digital Skills',
      desc: 'Equipping professionals and institutions with practical knowledge and defensive strategies in digital environments.',
      icon: <></>,
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200',
    },
    {
      title: 'Leadership & Organizational Development',
      desc: 'Developing leaders, teams, and effective workplace cultures that drive institutional growth.',
      icon: <></>,
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200',
    },
    {
      title: 'Institutional Advisory & Consulting',
      desc: 'Supporting organizations with strategy development, governance strengthening, and performance optimization.',
      icon: <></>,
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <section className="relative isolate bg-slate-950 border-t border-white/5 pt-8 sm:pt-10 pb-4 sm:pb-6 lg:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-[5px] relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-black leading-none uppercase tracking-tighter text-[clamp(0.6rem,7vw,5rem)] bg-center bg-no-repeat bg-clip-text text-transparent select-none filter brightness-125 animate-bg-pan whitespace-nowrap overflow-hidden text-ellipsis"
          style={{
            backgroundImage:
              "url('https://assets.avant.org.au/cdf6134c-01d7-0292-26f5-2f5cf1db96f8/4645803d-67d3-4662-9f18-816e532b82a1/Responding-to-a-cyber-security-incident.jpg')",
            WebkitBackgroundClip: 'text',
          }}
        >
          C o r e - S e r v i c e s
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-[5px]"
        >
          <span className="text-blue-500 font-bold uppercase tracking-[0.4em] text-[clamp(1rem,2.5vw,1.25rem)] block">
            What We Deliver
          </span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
          <div className="hidden lg:block relative">
            <div className="sticky top-0 h-screen flex items-center justify-center py-20">
              <div className="w-full aspect-square relative rounded-sm overflow-hidden border border-white/10 shadow-2xl bg-slate-900/40 backdrop-blur-sm">
                <div className="absolute inset-0 z-0">
                  <Squares
                    speed={0.05}
                    squareSize={60}
                    direction="diagonal"
                    borderColor="#271E37"
                    hoverFillColor="#1a1a1a"
                  />
                </div>

                <div className="relative w-full h-full p-8 md:p-12">
                  <AnimatePresence mode="wait">
                    {coreServiceData.map((service, i) =>
                      activeServiceIndex === i ? (
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
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                        </motion.div>
                      ) : null,
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          <div className="relative py-4 sm:py-8 lg:py-20 xl:py-0">
            {coreServiceData.map((service, i) => (
              <ServiceBlock
                key={i}
                service={service}
                index={i}
                setActiveIndex={setActiveServiceIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;
