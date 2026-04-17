import React from 'react';
import { ReactLenis } from 'lenis/react';
import { SEO } from '../components/layout';
import {
  HeroSection,
  LabCapabilities,
} from '../features/cyberlabs';

const CyberLab: React.FC = () => {
  return (
    <ReactLenis root>
      <SEO 
        title="Cyber Labs | Ebanex International"
        description="Simulated learning environments where professionals develop real-world technical skills through practical application and scenario-based learning."
        keywords="cyber labs, cybersecurity simulation, hands-on learning, technical training, ebanex labs"
        canonical="https://ebanexint.co.tz/cyber-lab"
      />
      <main className="bg-black">
        <HeroSection />
        <LabCapabilities />
      </main>
    </ReactLenis>
  );
};

export default CyberLab;
