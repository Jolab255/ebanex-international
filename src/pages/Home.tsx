import React from 'react';
import { ReactLenis } from 'lenis/react';
import { PageLoader } from '../components/common';
import {
  HeroSection,
  WhoWeAreSection,
  WhyEbanexGridSection,
  CoreServicesSection,
  TrainingApproachSection,
  ClientsSection,
  TestimonialsSection,
  PartnersSection,
  CtaSection,
} from '../features/home';

const Home: React.FC = () => {
  return (
    <ReactLenis root>
      <main className="bg-slate-950">
        <HeroSection />
        <WhoWeAreSection />
        <WhyEbanexGridSection />
        <CoreServicesSection />
        <TrainingApproachSection />
        <ClientsSection />
        <TestimonialsSection />
        <PartnersSection />
        <CtaSection />
      </main>
    </ReactLenis>
  );
};

export default Home;
