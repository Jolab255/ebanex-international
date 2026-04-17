import React from 'react';
import { ReactLenis } from 'lenis/react';
import { SEO } from '../components/layout';
import {
  HeroSection,
  PartnersGrid,
} from '../features/partnerships';

const Partnerships: React.FC = () => {
  return (
    <ReactLenis root>
      <SEO 
        title="Strategic Partnerships | Ebanex International"
        description="Collaborating with international certification bodies, universities, and technology vendors to deliver world-class training and solutions."
        keywords="partnerships, strategic collaboration, ebanex partners, certification bodies, technology vendors"
        canonical="https://ebanexint.co.tz/partnerships"
      />
      <main className="bg-black">
        <HeroSection />
        <PartnersGrid />
      </main>
    </ReactLenis>
  );
};

export default Partnerships;
