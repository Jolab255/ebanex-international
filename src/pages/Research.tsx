import React from 'react';
import { ReactLenis } from 'lenis/react';
import { SEO } from '../components/layout';
import {
  HeroSection,
  InsightsGrid,
} from '../features/research';

const Research: React.FC = () => {
  return (
    <ReactLenis root>
      <SEO 
        title="Research & Insights | Ebanex International"
        description="Knowledge and thought leadership to drive institutional capacity building and cybersecurity resilience through evidence-based research."
        keywords="cybersecurity research, industry insights, whitepapers, trend analysis, ebanex research"
        canonical="https://ebanexint.co.tz/research"
      />
      <main className="bg-black">
        <HeroSection />
        <InsightsGrid />
      </main>
    </ReactLenis>
  );
};

export default Research;
