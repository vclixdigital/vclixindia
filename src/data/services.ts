import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  benefits: string[];
  features: string[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: { linkedin?: string; twitter?: string };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  metaTitle: string;
  metaDescription: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string; improvement: string }[];
  services: string[];
  image: string;
  testimonial?: string;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}
