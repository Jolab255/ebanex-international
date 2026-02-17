
import React from 'react';
import { Shield, Users, GraduationCap, Building2 } from 'lucide-react';

export const NAVIGATION_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Training', path: '/training' },
  { label: 'Cyber Lab', path: '/cyber-lab' },
  { label: 'Consulting', path: '/consulting' },
  { label: 'Research', path: '/research' },
  { label: 'Contact', path: '/contact' },
];

export const CORE_SERVICES = [
  {
    title: 'Capacity Building',
    description: 'Transforming organizational potential through elite professional development and specialized training programs.',
    icon: <GraduationCap className="w-8 h-8 text-blue-400" />,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200'
  },
  {
    title: 'Cybersecurity & Digital Skills',
    description: 'Mastering the digital frontier with industry-leading security protocols and technical resilience training.',
    icon: <Shield className="w-8 h-8 text-purple-400" />,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200'
  },
  {
    title: 'Leadership Development',
    description: 'Cultivating the next generation of institutional leaders through strategic mentorship and adaptive governance.',
    icon: <Users className="w-8 h-8 text-indigo-400" />,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200'
  },
  {
    title: 'Institutional Advisory',
    description: 'Strategic consulting to optimize operational frameworks and drive sustainable organizational growth.',
    icon: <Building2 className="w-8 h-8 text-cyan-400" />,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200'
  }
];

export const CERTIFICATIONS = [
  'CISA', 'CISM', 'CISSP', 'CEH', 'CCNA', 'CCNP', 'CDPSE', 'CIA', 'CRMA'
];

export const IMPACT_STATS = [
  { label: 'Global Offices', value: '12+' },
  { label: 'Certified Experts', value: '500+' },
  { label: 'Partner Institutions', value: '85' },
  { label: 'Clients Worldwide', value: '2k+' }
];
