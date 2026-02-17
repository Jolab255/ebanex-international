import React from 'react';
import { ReactLenis } from 'lenis/react';
import HeroSection from '../features/home/HeroSection';
import WhoWeAreSection from '../features/home/WhoWeAreSection';
import WhyEbanexGridSection from '../features/home/WhyEbanexGridSection';
import CoreServicesSection from '../features/home/CoreServicesSection';
import TrainingApproachSection from '../features/home/TrainingApproachSection';
import TestimonialsSection from '../features/home/TestimonialsSection';
import PartnersSection from '../features/home/PartnersSection';
import CtaSection from '../features/home/CtaSection';

const Home: React.FC = () => {
  return (
    <ReactLenis root>
      <main className="bg-slate-950">
        <HeroSection />
        <WhoWeAreSection />
        <WhyEbanexGridSection />
        <CoreServicesSection />
        <TrainingApproachSection />
        <TestimonialsSection />
        <PartnersSection />
        <CtaSection />
      </main>
    </ReactLenis>
  );
};

export default Home;
