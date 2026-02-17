import type { ReactElement } from 'react';

export interface CoreService {
  title: string;
  description: string;
  icon: ReactElement;
  image: string;
}

export interface Feature {
  title: string;
  desc: string;
  icon: ReactElement;
  delay?: number;
}

export interface Service {
  title: string;
  desc: string;
  image: string;
}

