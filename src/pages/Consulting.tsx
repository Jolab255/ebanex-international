import React from 'react';
import { ReactLenis } from 'lenis/react';
import { SEO } from '../components/layout';
import {
  HeroSection,
  ConsultingServices,
} from '../features/consulting';

const Consulting: React.FC = () => {
  return (
    <ReactLenis root>
      <SEO 
        title="Consulting & Advisory | Ebanex International"
        description="Strategic consulting services supporting organizations in strengthening governance frameworks, operational systems, and institutional performance."
        keywords="digital transformation, governance advisory, capacity building, institutional performance, ebanex consulting"
        canonical="https://ebanexint.co.tz/consulting"
      />
      <main className="bg-black">
        <HeroSection />
        <ConsultingServices />
      </main>
    </ReactLenis>
  );
};

export default Consulting;
