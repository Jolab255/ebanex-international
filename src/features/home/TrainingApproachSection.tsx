import React from 'react';
import { motion } from 'framer-motion';
import Squares from '../../components/ui/Squares';
import {
  useProgressSlider,
  ProgressSlider,
  SliderContent,
  SliderWrapper,
  SliderBtnGroup,
  SliderBtn,
  AutoProgressBar,
} from '../../components/ui/progressive-carousel';

const TrainingApproachSection: React.FC = () => {
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
    {
      img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200',
      title: 'Train-the-Trainer',
      desc: 'Institutional knowledge transfer programs that empower your team to become internal training champions.',
      sliderName: 'trainer',
    },
  ];

  const TrainingOverlay: React.FC = () => {
    const { activeSlider } = useProgressSlider();
    const activeItem = trainingItems.find((t) => t.sliderName === activeSlider) ?? trainingItems[0];

    return (
      <div className="absolute inset-x-0 bottom-0 z-20 pointer-events-none">
        <div className="absolute inset-x-0 bottom-0 h-40 lg:h-84 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
        <div className="relative p-3 lg:p-4">
          <div className="rounded-lg border border-white/10 bg-slate-950/55 backdrop-blur-md overflow-hidden shadow-2xl">
            <div className="px-3 pt-3 pb-2 lg:px-4 lg:pt-4 lg:pb-3">
              <div className="flex items-center justify-between gap-3">
                <div className="text-[10px] font-black tracking-[0.35em] uppercase text-purple-200/90">
                  Training Approach
                </div>
                
              </div>
              <div className="text-white font-black text-[clamp(0.9rem,3.8vw,1.05rem)] mt-2 leading-tight">
                {activeItem.title}
              </div>
              <div className="text-slate-100/85 text-xs leading-snug mt-1 lg:text-sm">
                {activeItem.desc}
              </div>
            </div>
            <AutoProgressBar className="bg-white/10" barClassName="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="mt-10 sm:mt-12 lg:mt-16 scroll-mt-24 sm:scroll-mt-28 pt-12 sm:pt-16 lg:pt-20 pb-0 sm:pb-2 lg:pb-4 mb-0 bg-slate-950 relative isolate overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Squares
          speed={0.13}
          squareSize={40}
          direction="diagonal"
          borderColor="#201e37ff"
          hoverFillColor="#222"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12 lg:mb-16 relative z-10 text-center">
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
          T r a i n i n g - A p p r o a c h
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 sm:mt-8"
        >
          <span className="text-purple-500 font-bold uppercase tracking-[0.4em] text-[clamp(1rem,2.5vw,1.25rem)] block">
            How We Deliver Excellence
          </span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="relative w-full h-[clamp(350px,45vh,700px)] lg:h-[70vh] mt-6 sm:mt-8 overflow-hidden rounded-lg sm:rounded-xl">
          <ProgressSlider vertical={false} activeSlider="practical">
            <SliderContent>
              {trainingItems.map((item, index) => (
                <SliderWrapper key={index} value={item.sliderName}>
                  <img
                    className="h-full w-full object-cover"
                    src={item.img}
                    alt={item.desc}
                    loading="lazy"
                  />
                </SliderWrapper>
              ))}
            </SliderContent>

            <TrainingOverlay />
          </ProgressSlider>
        </div>
      </div>
    </section>
  );
};

export default TrainingApproachSection;
