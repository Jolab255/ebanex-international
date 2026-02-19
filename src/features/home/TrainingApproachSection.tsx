import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Squares from '../../components/ui/Squares';
import {
  useProgressSlider,
  ProgressSlider,
  SliderContent,
  SliderWrapper,
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

  const SlideImage: React.FC<{ item: (typeof trainingItems)[0] }> = ({ item }) => {
    const { activeSlider } = useProgressSlider();
    const isActive = activeSlider === item.sliderName;

    return (
      <div className="relative w-full h-full overflow-hidden">
        <img
          key={isActive ? 'active' : 'inactive'}
          className={`w-full h-full object-cover ${isActive ? 'animate-zoom-slow' : ''}`}
          src={item.img}
          alt={item.title}
          loading="lazy"
        />
        {/* Subtle image overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/10" />
      </div>
    );
  };

  const TrainingOverlay: React.FC = () => {
    const { activeSlider, setActiveSlider } = useProgressSlider();
    const activeIndex = trainingItems.findIndex((t) => t.sliderName === activeSlider);
    const activeItem = trainingItems[activeIndex] ?? trainingItems[0];

    const goToNext = () => {
      const nextIndex = (activeIndex + 1) % trainingItems.length;
      setActiveSlider(trainingItems[nextIndex].sliderName);
    };

    const goToPrev = () => {
      const prevIndex = activeIndex === 0 ? trainingItems.length - 1 : activeIndex - 1;
      setActiveSlider(trainingItems[prevIndex].sliderName);
    };

    return (
      <div className="absolute inset-x-0 bottom-0 z-20">
        {/* Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-48 sm:h-56 lg:h-64 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

        {/* Content Card */}
        <div className="relative px-4 pb-4 sm:px-6 sm:pb-6 lg:px-8 lg:pb-8">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur-xl overflow-hidden shadow-2xl">
              {/* Progress Bar */}
              <AutoProgressBar
                className="h-1 bg-white/5"
                barClassName="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600"
              />

              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    {/* Label */}
                    <div className="inline-flex items-center gap-2 px-3 py-1  bg-blue-500/10 border border-blue-500/20 mb-3">
                      <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-blue-300">
                        Training Approach
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-2 leading-tight">
                      {activeItem.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {activeItem.desc}
                    </p>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={goToPrev}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-blue-500/50 flex items-center justify-center transition-all duration-300 group"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors" />
                    </button>
                    <button
                      onClick={goToNext}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-blue-500/50 flex items-center justify-center transition-all duration-300 group"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors" />
                    </button>
                  </div>
                </div>

                {/* Slide Indicators */}
                <div className="flex items-center justify-center gap-2 mt-6">
                  {trainingItems.map((item, index) => (
                    <button
                      key={item.sliderName}
                      onClick={() => setActiveSlider(item.sliderName)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? 'w-8 bg-gradient-to-r from-blue-500 to-cyan-500'
                          : 'w-1.5 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-950 relative isolate overflow-hidden border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <Squares
          speed={0.13}
          squareSize={40}
          direction="diagonal"
          borderColor="#201e37ff"
          hoverFillColor="#222"
        />
      </div>

      {/* Section Header */}
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
          <span className="text-blue-500 font-bold uppercase tracking-[0.4em] text-[clamp(0.875rem,2vw,1rem)] block">
            How We Deliver Excellence
          </span>
        </motion.div>
      </div>

      {/* Carousel Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] overflow-hidden">
          <ProgressSlider vertical={false} activeSlider="practical">
            <SliderContent>
              {trainingItems.map((item, index) => (
                <SliderWrapper key={index} value={item.sliderName}>
                  <SlideImage item={item} />
                </SliderWrapper>
              ))}
            </SliderContent>

            <TrainingOverlay />
          </ProgressSlider>
        </div>
      </div>

      {/* Zoom Animation Styles - 100% to 120% over 9.8s */}
      <style>{`
        @keyframes zoomProgressive {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.2);
          }
        }
        
        .animate-zoom-slow {
          animation: zoomProgressive 9.8s linear forwards;
          will-change: transform;
          transform-origin: center center;
        }
      `}</style>
    </section>
  );
};

export default TrainingApproachSection;
