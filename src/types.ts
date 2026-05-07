import { ReactNode } from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  link: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}
