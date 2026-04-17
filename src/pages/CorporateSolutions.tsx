import React from 'react';
import { ReactLenis } from 'lenis/react';
import { SEO } from '../components/layout';
import {
  HeroSection,
  ServicesSection,
  IndustriesSection,
  CtaSection,
} from '../features/corporate';

const CorporateSolutions: React.FC = () => {
  return (
    <ReactLenis root>
      <SEO 
        title="Corporate & Institutional Solutions | Ebanex International"
        description="Customized capacity-building and advisory solutions designed for institutional strategies and workforce development goals."
        keywords="corporate training, institutional advisory, workforce upskilling, digital transformation, Ebanex corporate"
        canonical="https://ebanexint.co.tz/corporate-solutions"
      />
      <main className="bg-black">
        <HeroSection />
        <ServicesSection />
        <IndustriesSection />
        <CtaSection />
      </main>
    </ReactLenis>
  );
};

export default CorporateSolutions;
