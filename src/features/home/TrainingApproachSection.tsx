import React from 'react';
import { motion } from 'framer-motion';
import Squares from '../../components/ui/Squares';
import { ProgressSlider, SliderContent, SliderWrapper, SliderBtnGroup, SliderBtn } from '../../components/ui/progressive-carousel';

const TrainingApproachCarousel: React.FC = () => {
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
      <ProgressSlider vertical={false} activeSlider="practical">
        <SliderContent>
          {trainingItems.map((item, index) => (
            <SliderWrapper key={index} value={item.sliderName}>
              <img
                className="rounded-xl h-[40vh] min-h-[400px] max-h-[600px] w-full object-cover"
                src={item.img}
                alt={item.desc}
                loading="lazy"
              />
            </SliderWrapper>
          ))}
        </SliderContent>

        <SliderBtnGroup className="absolute bottom-0 h-fit cursor-pointer text-white bg-slate-900/60 backdrop-blur-md overflow-hidden grid grid-cols-2 md:grid-cols-4 rounded-md border border-white/10">
          {trainingItems.map((item, index) => (
            <SliderBtn
              key={index}
              value={item.sliderName}
              className="text-left p-4 border-r border-white/10 last:border-r-0"
              progressBarClass="bg-purple-500 h-1"
            >
              <h2 className="relative px-4 py-1 rounded-full w-fit bg-purple-500 text-white text-sm font-bold mb-2">
                {item.title}
              </h2>
              <p className="text-sm font-medium text-slate-300">{item.desc}</p>
            </SliderBtn>
          ))}
        </SliderBtnGroup>
      </ProgressSlider>
    </div>
  );
};

const TrainingApproachSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Squares
          speed={0.13}
          squareSize={40}
          direction="diagonal"
          borderColor="#201e37ff"
          hoverFillColor="#222"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-black leading-none uppercase tracking-tighter text-[clamp(2.5rem,12vw,5rem)] bg-center bg-no-repeat bg-clip-text text-transparent select-none filter brightness-125 animate-bg-pan"
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
            transition={{ delay: 1, duration: 3 }}
            className="mt-8"
          >
            <span className="text-purple-500 font-bold uppercase tracking-[0.4em] text-[20px] block">
              How We Deliver Excellence
            </span>
          </motion.div>
        </div>

        <TrainingApproachCarousel />
      </div>
    </section>
  );
};

export default TrainingApproachSection;

