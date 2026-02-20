import React from 'react';
import {
  HeroSection,
  AboutContent,
  GallerySection,
  MissionVisionSection,
  CoreValuesSection,
  FoundersMessageSection,
  StrategicFocusSection,
} from '../features/about';

const About: React.FC = () => {
  return (
    <div className="pb-16 sm:pb-24">
      <HeroSection />
      <AboutContent />
      <GallerySection />
      <MissionVisionSection />
      <CoreValuesSection />
      <FoundersMessageSection />
      <StrategicFocusSection />
    </div>
  );
};

export default About;
