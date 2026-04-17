import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
import { Squares } from '../../components/animations';
import { FitText } from '../../components/common';
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

  return (
    <div className="min-h-[40vh] sm:min-h-[50vh] lg:min-h-[70vh] flex items-center justify-end py-6 sm:py-8 lg:py-12">
      <div
        ref={ref}
        className="w-full max-w-md shadow-2xl lg:translate-x-12"
      >
        <div 
          className="p-6 sm:p-8 border border-white/5"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)'
          }}
        >
          <div className="mb-4 text-left">
            <div className="inline-flex items-center gap-4 mb-3">
              <span className="text-[#00BFFF] font-black uppercase tracking-widest text-xs">
                Service 0{index + 1}
              </span>
              <div className="h-[1px] w-12 bg-[#00BFFF]/50" />
            </div>
            <h3 className="text-[clamp(0.9rem,2vw,1.5rem)] font-black font-heading text-white uppercase leading-tight mb-3 sm:mb-4">
              {service.title}
            </h3>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">{service.desc}</p>
            <div className="mt-6 flex justify-start">
              <button className="h-11 sm:h-12 px-4 sm:px-6 border border-[#00bfff] text-[#00bfff] bg-transparent rounded-none font-bold text-[clamp(0.625rem,1.5vw,0.75rem)] uppercase tracking-[0.2em] transition-none hover:bg-transparent hover:text-[#00bfff] hover:border-[#00bfff]">
                Explore Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  };

const CoreServicesSection: React.FC = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
    <section 
      ref={sectionRef} 
      className="relative z-30 h-[360vh]"
    >
      <div className="sticky top-16 sm:top-20 lg:top-24 h-[90vh] overflow-hidden flex flex-col w-full bg-[linear-gradient(135deg,#000000_50%,#00bfff_50%)]">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-100">
          <Squares
            speed={0.13}
            squareSize={40}
            direction="diagonal"
            borderColor="rgba(255,255,255,0.15)"
            hoverFillColor="rgba(0,191,255,0.05)"
          />
        </div>

        <div className="h-full pt-4 sm:pt-6 pb-4 sm:pb-6 lg:pb-8 flex flex-col relative z-10">
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
                  CORE SERVICES
                </span>
              </FitText>
            </div>
            <div className="mt-4">
              <span className="text-[#00BFFF] font-black uppercase tracking-[0.4em] text-[clamp(0.7rem,1.2vw,0.85rem)] inline-block bg-black py-1.5 px-6">
                What We Deliver
              </span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex-grow overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 h-full items-center">
              <div className="hidden lg:block relative h-full flex items-center translate-y-4">
                <div className="w-full aspect-video h-[45vh] relative rounded-none border border-black shadow-[10px_20px_0px_0px_rgba(0,0,0,1)] bg-black">
                  <div className="relative w-full h-full overflow-hidden">
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
                              className="w-full h-full object-cover opacity-100"
                              alt={service.title}
                              loading="lazy"
                            />
                          </motion.div>
                        ) : null,
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              <div className="relative h-full overflow-hidden pr-12">
                <motion.div 
                  style={{ 
                    y: useTransform(smoothProgress, [0, 1], [0, -1335]) 
                  }}
                  className="flex flex-col"
                >
                  {coreServiceData.map((service, i) => (
                    <ServiceBlock
                      key={i}
                      service={service}
                      index={i}
                      setActiveIndex={setActiveServiceIndex}
                    />
                  ))}
                  <div className="min-h-[50vh]" /> {/* Managed space */}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;
