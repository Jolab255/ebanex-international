import React from 'react';
import { SEO } from '../components/layout';
import {
  HeroSection,
  WhoWeAreSection,
  WhyEbanexGridSection,
  CoreServicesSection,
  TrainingApproachSection,
  ClientsSection,
  TestimonialsSection,
  CtaSection,
} from '../features/home';

const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Home | Ebanex International"
        description="Ebanex International is a global professional development institution building the capacity of people and organizations through elite training and strategic advisory."
        keywords="cybersecurity, training, digital transformation, consulting, advisory, Ebanex"
        canonical="https://ebanexint.co.tz/"
      />
      <main className="bg-gray-950">
        <HeroSection />
        {/* Who We Are — hidden, preserved for future use */}
        <div className="hidden">
          <WhoWeAreSection />
        </div>
        <CoreServicesSection />
        <WhyEbanexGridSection />
        {/* Training Approach — hidden, preserved for future use */}
        <div className="hidden">
          <TrainingApproachSection />
        </div>
        <ClientsSection />
        {/* Testimonials — hidden, preserved for future use */}
        <div className="hidden">
          <TestimonialsSection />
        </div>
        <CtaSection />
      </main>
    </>
  );
};

export default Home;
