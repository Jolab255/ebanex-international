import React from 'react';
import { ReactLenis } from 'lenis/react';
import { SEO } from '../components/layout';
import {
  HeroSection,
  JobCategories,
} from '../features/careers';

const Careers: React.FC = () => {
  return (
    <ReactLenis root>
      <SEO 
        title="Careers | Ebanex International"
        description="Join Ebanex International. Explore opportunities for professional trainers, consulting specialists, and internships."
        keywords="careers, jobs, ebanex careers, professional trainers, consulting jobs, internships"
        canonical="https://ebanexint.co.tz/careers"
      />
      <main className="bg-black">
        <HeroSection />
        <JobCategories />
      </main>
    </ReactLenis>
  );
};

export default Careers;
