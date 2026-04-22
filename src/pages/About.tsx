import React from 'react';
import { SEO } from '../components/layout';
import {
  HeroSection,
  AboutContent,
  GallerySection,
  MissionVisionSection,
  CoreValuesSection,
  FoundersMessageSection,
  StrategicFocusSection,
  AboutCtaSection,
} from '../features/about';

const About: React.FC = () => {
  return (
    <div className="">
      <SEO
        title="About Us | Ebanex International"
        description="Learn about Ebanex International's mission, vision, and core values. We are dedicated to building institutional capacity and professional excellence."
        keywords="about ebanex, mission, vision, core values, leadership"
        canonical="https://ebanexint.co.tz/about"
      />
      <HeroSection />
      <AboutContent />
      {/* Gallery & Moments — hidden, preserved for future use */}
      <div className="hidden">
        <GallerySection />
      </div>
      <MissionVisionSection />
      <CoreValuesSection />
      <FoundersMessageSection />
      <StrategicFocusSection />
      <AboutCtaSection />
    </div>
  );
};

export default About;
