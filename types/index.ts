export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  category: 'emergency' | 'residential' | 'commercial' | 'automotive' | 'smart' | 'safe';
  features: string[];
  benefits: string[];
  process: ProcessStep[];
  faqs: FAQ[];
  metaTitle: string;
  metaDescription: string;
  image: string;
  responseTime?: string;
  price?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Area {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  landmarks: string[];
  neighborhoods: string[];
  responseTime: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
  service?: string;
  avatar?: string;
  verified: boolean;
  source: 'google' | 'trustpilot';
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
}

export interface Statistic {
  value: string;
  label: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  text: string;
  rating: number;
  image?: string;
  service: string;
}

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  area: string;
  message: string;
  urgency: 'emergency' | 'urgent' | 'standard';
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface SeoMeta {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
}

export interface ServiceCategory {
  id: string;
  label: string;
  description: string;
  icon: string;
  services: string[];
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}
