import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { FitText } from '../../components/common';
import aboutVideo from '../../assets/aboutv.mp4';

const WhoWeAreSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { once: false, amount: 0.1 });

  React.useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(e => console.error("Video play failed", e));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);
  
  return (
    <section className="min-h-fit flex flex-col justify-start pt-12 sm:pt-20 bg-[linear-gradient(135deg,#000000_50%,#00bfff_50%)] relative z-20 overflow-hidden pb-4 sm:pb-6" ref={sectionRef}>
      {/* Dynamic Background Overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,191,255,0.08),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full flex-grow flex flex-col">
        {/* Title Area - Animated and Centered */}
        <div className="mb-12 text-center">
          <div className="select-none inline-block bg-black py-4 px-8">
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
                EBANEX INTERNATIONAL
              </span>
            </FitText>
          </div>
          
          <div className="mt-4">
            <span className="text-[#00BFFF] font-black uppercase tracking-[0.4em] text-[clamp(0.7rem,1.2vw,0.85rem)] block">
              Who We Are
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-stretch flex-grow gap-12">
          {/* Left Side - Video Container */}
          <div className="w-full md:w-1/2 flex justify-start items-center md:items-end">
            <div className="w-full max-w-xl">
              <div className="aspect-video w-full relative overflow-hidden border-r-[10px] border-b-[10px] border-black shadow-2xl bg-black">
                 <video 
                  ref={videoRef}
                  src={aboutVideo} 
                  loop 
                  muted 
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content on the blue background */}
          <div className="w-full md:w-1/2 md:pl-8 lg:pl-12 flex flex-col justify-center">
            <div className="space-y-6 text-black text-lg md:text-xl font-medium leading-relaxed text-justify md:text-left relative z-20">
              <p>
                Ebanex International is a multidisciplinary consulting and training firm focused on
                building skilled professionals, resilient institutions, and digitally secure
                organizations.
              </p>
              <p>
                Founded by professionals with strong expertise in information technology,
                cybersecurity, training, and organizational development, Ebanex provides practical,
                industry-aligned learning and advisory solutions tailored to institutional needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
