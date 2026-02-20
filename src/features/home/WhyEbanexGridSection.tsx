import React from 'react';
import { Globe as GlobeIcon, Shield, Zap, Target, Landmark, MapPin } from 'lucide-react';
import { Squares } from '../../components/animations';
import FeatureCard from './components/FeatureCard';

const WhyEbanexGridSection: React.FC = () => {
  const features = [
    {
      title: 'Global Training',
      desc: 'Multidisciplinary global training capability tailored for enterprise-scale professional development.',
      icon: <GlobeIcon />,
      delay: 0,
    },
    {
      title: 'Cyber Expertise',
      desc: 'Strong cybersecurity and digital transformation expertise focused on resilient infrastructure.',
      icon: <Shield />,
      delay: 0.1,
    },
    {
      title: 'Hands-on Learning',
      desc: 'Practical and hands-on learning methodology that translates theory into immediate operational value.',
      icon: <Zap />,
      delay: 0.2,
    },
    {
      title: 'Custom Solutions',
      desc: 'Sector-customized training solutions designed to meet the unique challenges of specific industries.',
      icon: <Target />,
      delay: 0.3,
    },
    {
      title: 'Capacity Building',
      desc: 'Institutional capacity-building capability to strengthen organizational foundations and processes.',
      icon: <Landmark />,
      delay: 0.4,
    },
    {
      title: 'Global-Local Outlook',
      desc: 'Global outlook with strong local implementation capacity for seamless international integration.',
      icon: <MapPin />,
      delay: 0.5,
    },
  ];

  return (
    <section className="pt-[5px] pb-8 sm:pb-12 lg:pb-16 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Squares
          speed={0.13}
          squareSize={40}
          direction="diagonal"
          borderColor="#271E37"
          hoverFillColor="#222"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEbanexGridSection;
