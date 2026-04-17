import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Squares } from '../../components/animations';
import { FitText } from '../../components/common';
import {
  useProgressSlider,
  ProgressSlider,
  SliderContent,
  SliderWrapper,
  AutoProgressBar,
} from '../../components/common/progressive-carousel';

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

    const goToNext = () => {
      const nextIndex = (activeIndex + 1) % trainingItems.length;
      setActiveSlider(trainingItems[nextIndex].sliderName);
    };

    const goToPrev = () => {
      const prevIndex = activeIndex === 0 ? trainingItems.length - 1 : activeIndex - 1;
      setActiveSlider(trainingItems[prevIndex].sliderName);
    };

    return (
      <div className="h-full w-full flex flex-col relative">
        {/* Progress Bar (Always on top of the glass side) */}
        <AutoProgressBar
          className="h-1 bg-white/5 absolute top-0 left-0 z-30"
          barClassName="bg-[#00BFFF]"
        />

        <div className="flex flex-col justify-center items-start p-6 sm:p-8 lg:p-12 lg:pl-36 h-full">
          <div className="w-full max-w-md relative min-h-[250px] mb-8">
            {trainingItems.map((item) => (
              <SliderWrapper key={item.sliderName} value={item.sliderName}>
                <div className="flex flex-col items-start gap-5 py-4">
                  {/* Label */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00BFFF]/10 border border-[#00BFFF]/20 mb-2">
                    <span className="text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase text-[#00BFFF]">
                      Training Approach
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold text-xl sm:text-2xl lg:text-3xl mb-1 leading-tight uppercase">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </SliderWrapper>
            ))}
          </div>

          {/* Navigation and Indicators (Now directly below text) */}
          <div className="w-full max-w-md flex items-center justify-between gap-6">
            {/* Slide Indicators */}
            <div className="flex items-center gap-2.5">
              {trainingItems.map((item, index) => (
                <button
                  key={item.sliderName}
                  onClick={() => setActiveSlider(item.sliderName)}
                  className={`h-1 rounded-none transition-all duration-500 ${
                    index === activeIndex
                      ? 'w-10 bg-[#00BFFF]'
                      : 'w-2 bg-white/10 hover:bg-white/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center">
              <button
                onClick={goToPrev}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-none border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#00BFFF]/50 flex items-center justify-center transition-all duration-300 group border-r-0"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 text-white/50 group-hover:text-[#00BFFF] transition-colors" />
              </button>
              <button
                onClick={goToNext}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-none border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#00BFFF]/50 flex items-center justify-center transition-all duration-300 group"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-[#00BFFF] transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="min-h-[90vh] relative isolate overflow-hidden bg-[linear-gradient(135deg,#00bfff_50%,#000000_50%)] flex flex-col justify-start pt-16 sm:pt-20 lg:pt-24 pb-12">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Squares
          speed={0.13}
          squareSize={40}
          direction="diagonal"
          borderColor="rgba(255,255,255,0.08)"
          hoverFillColor="rgba(255,255,255,0.05)"
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
              TRAINING APPROACH
            </span>
          </FitText>
        </div>
        <div className="mt-4">
          <span className="text-[#00BFFF] font-black uppercase tracking-[0.4em] text-[clamp(0.7rem,1.2vw,0.85rem)] inline-block bg-black py-1.5 px-6">
            How We Deliver Excellence
          </span>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full grow flex items-center justify-center">
        <div className="relative w-full h-[50vh] sm:h-[55vh] lg:h-[60vh] overflow-visible">
          <ProgressSlider vertical={false} activeSlider="practical">
            {/* Split/Stack Layout */}
            <div className="relative h-full w-full flex flex-col lg:flex-row items-center">
              
              {/* Content Side (The base layer) */}
              <div 
                className="w-full lg:w-[45%] lg:ml-auto h-full relative border-[10px] border-black z-10"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)'
                }}
              >
                <TrainingOverlay />
              </div>

              {/* Image Side (The top layer - Stacking/Overflowing) */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[90%] lg:w-[65%] h-[25vh] sm:h-[35vh] lg:h-[75%] z-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-[10px] border-black overflow-hidden pointer-events-none sm:pointer-events-auto transform lg:-translate-x-12">
                <SliderContent>
                  {trainingItems.map((item, index) => (
                    <SliderWrapper key={index} value={item.sliderName}>
                      <SlideImage item={item} />
                    </SliderWrapper>
                  ))}
                </SliderContent>
              </div>

            </div>
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
