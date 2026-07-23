import type { NavItem, ServiceCategory, Statistic } from '@/types';

export const BUSINESS = {
  name: 'Locksmith In Dubai',
  tagline: '24/7 Emergency Locksmith Dubai',
  phone: '+971 55 768 9003',
  phoneRaw: '+971557689003',
  whatsapp: '+971557689003',
  whatsappUrl: 'https://wa.me/971557689003',
  email: 'info@dubailocksmiths.com',
  website: 'https://dubailocksmiths.com',
  address: {
    street: 'Al Bada',
    city: 'Dubai',
    state: 'Dubai',
    country: 'United Arab Emirates',
    countryCode: 'AE',
    postalCode: '',
  },
  rating: 4.8,
  reviewCount: 305,
  responseTime: '30 minutes',
  hours: '24/7',
  coordinates: {
    lat: 25.2048,
    lng: 55.2708,
  },
  social: {
    google: 'https://maps.google.com/?q=Locksmith+In+Dubai',
    facebook: 'https://facebook.com/dubailocksmiths',
    instagram: 'https://instagram.com/dubailocksmiths',
    twitter: 'https://twitter.com/dubailocksmiths',
  },
} as const;

export const EMERGENCY_NUMBER = '+971 55 768 9003';
export const EMERGENCY_NUMBER_RAW = '+971557689003';
export const WHATSAPP_URL = 'https://wa.me/971557689003';

export const SERVICE_SLUGS = [
  'emergency-locksmith',
  '24-hour-locksmith',
  'residential-locksmith',
  'commercial-locksmith',
  'office-locksmith',
  'car-locksmith',
  'auto-locksmith',
  'car-lockout',
  'house-lockout',
  'office-lockout',
  'apartment-lockout',
  'villa-lockout',
  'key-duplication',
  'key-cutting',
  'broken-key-extraction',
  'door-unlocking',
  'lock-change',
  'lock-repair',
  'lock-replacement',
  'lock-rekeying',
  'master-key-systems',
  'digital-locks',
  'smart-locks',
  'electronic-locks',
  'fingerprint-locks',
  'safe-opening',
  'safe-repair',
  'safe-installation',
  'garage-door-locks',
  'sliding-door-locks',
  'window-locks',
  'cylinder-replacement',
  'access-control-systems',
  'security-upgrades',
  'emergency-lock-repair',
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export const AREA_SLUGS = [
  'dubai',
  'al-bada',
  'downtown-dubai',
  'business-bay',
  'dubai-marina',
  'palm-jumeirah',
  'jumeirah-village-circle',
  'jumeirah-lake-towers',
  'al-barsha',
  'deira',
  'bur-dubai',
  'dubai-hills',
  'mirdif',
  'dubai-silicon-oasis',
  'arabian-ranches',
  'motor-city',
  'sports-city',
  'international-city',
  'jumeirah',
] as const;

export type AreaSlug = (typeof AREA_SLUGS)[number];

export const SERVICES_CATEGORIES: ServiceCategory[] = [
  {
    id: 'emergency',
    label: 'Emergency Services',
    description: 'Fast response locksmith services available around the clock',
    icon: 'AlertTriangle',
    services: ['emergency-locksmith', '24-hour-locksmith', 'emergency-lock-repair'],
  },
  {
    id: 'lockout',
    label: 'Lockout Services',
    description: 'Locked out? We get you back in quickly and without damage',
    icon: 'DoorOpen',
    services: ['car-lockout', 'house-lockout', 'office-lockout', 'apartment-lockout', 'villa-lockout', 'door-unlocking'],
  },
  {
    id: 'residential',
    label: 'Residential',
    description: 'Complete home security solutions for Dubai apartments and villas',
    icon: 'Home',
    services: ['residential-locksmith', 'house-lockout', 'apartment-lockout', 'villa-lockout', 'window-locks'],
  },
  {
    id: 'commercial',
    label: 'Commercial',
    description: 'Professional security services for businesses across Dubai',
    icon: 'Building2',
    services: ['commercial-locksmith', 'office-locksmith', 'office-lockout', 'master-key-systems', 'access-control-systems'],
  },
  {
    id: 'automotive',
    label: 'Automotive',
    description: 'Car key and lock specialists for all vehicle makes and models',
    icon: 'Car',
    services: ['car-locksmith', 'auto-locksmith', 'car-lockout'],
  },
  {
    id: 'locks',
    label: 'Lock Services',
    description: 'Installation, repair and replacement of all lock types',
    icon: 'Lock',
    services: ['lock-change', 'lock-repair', 'lock-replacement', 'lock-rekeying', 'cylinder-replacement', 'garage-door-locks', 'sliding-door-locks'],
  },
  {
    id: 'keys',
    label: 'Key Services',
    description: 'Key cutting, duplication and extraction from broken locks',
    icon: 'Key',
    services: ['key-duplication', 'key-cutting', 'broken-key-extraction'],
  },
  {
    id: 'smart',
    label: 'Smart & Digital Locks',
    description: 'Modern access solutions with smart technology',
    icon: 'Smartphone',
    services: ['digital-locks', 'smart-locks', 'electronic-locks', 'fingerprint-locks', 'access-control-systems'],
  },
  {
    id: 'safe',
    label: 'Safe Services',
    description: 'Safe opening, repair and installation by certified technicians',
    icon: 'Shield',
    services: ['safe-opening', 'safe-repair', 'safe-installation'],
  },
  {
    id: 'security',
    label: 'Security Upgrades',
    description: 'Comprehensive security assessments and upgrades for your property',
    icon: 'ShieldCheck',
    services: ['security-upgrades', 'master-key-systems'],
  },
];

export const COVERAGE_AREAS = [
  { name: 'Al Bada', slug: 'al-bada' },
  { name: 'Downtown Dubai', slug: 'downtown-dubai' },
  { name: 'Business Bay', slug: 'business-bay' },
  { name: 'Dubai Marina', slug: 'dubai-marina' },
  { name: 'Palm Jumeirah', slug: 'palm-jumeirah' },
  { name: 'JVC', slug: 'jumeirah-village-circle' },
  { name: 'JLT', slug: 'jumeirah-lake-towers' },
  { name: 'Al Barsha', slug: 'al-barsha' },
  { name: 'Deira', slug: 'deira' },
  { name: 'Bur Dubai', slug: 'bur-dubai' },
  { name: 'Dubai Hills', slug: 'dubai-hills' },
  { name: 'Mirdif', slug: 'mirdif' },
  { name: 'Silicon Oasis', slug: 'dubai-silicon-oasis' },
  { name: 'Arabian Ranches', slug: 'arabian-ranches' },
  { name: 'Motor City', slug: 'motor-city' },
  { name: 'Sports City', slug: 'sports-city' },
  { name: 'International City', slug: 'international-city' },
  { name: 'Jumeirah', slug: 'jumeirah' },
] as const;

export const STATISTICS: Statistic[] = [
  { value: '24/7', label: 'Emergency Response', icon: 'Clock' },
  { value: '30 min', label: 'Average Arrival Time', icon: 'Zap' },
  { value: '305+', label: 'Verified Reviews', icon: 'Star' },
  { value: '4.8★', label: 'Average Rating', icon: 'ThumbsUp' },
  { value: '10+', label: 'Years Experience', icon: 'Award' },
  { value: '5000+', label: 'Jobs Completed', icon: 'CheckCircle' },
];

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'Emergency Locksmith',
        href: '/services/emergency-locksmith',
        description: '24/7 emergency locksmith response across Dubai',
      },
      {
        label: 'Car Lockout',
        href: '/services/car-lockout',
        description: 'Locked out of your car? We are on our way',
      },
      {
        label: 'House Lockout',
        href: '/services/house-lockout',
        description: 'Get back into your home fast',
      },
      {
        label: 'Lock Change & Replacement',
        href: '/services/lock-change',
        description: 'Upgrade or replace any lock type',
      },
      {
        label: 'Smart Locks',
        href: '/services/smart-locks',
        description: 'Modern smart lock installation and setup',
      },
      {
        label: 'Safe Opening',
        href: '/services/safe-opening',
        description: 'Professional safe opening without damage',
      },
      {
        label: 'Key Duplication',
        href: '/services/key-duplication',
        description: 'Precise key cutting and duplication',
      },
      {
        label: 'Commercial Locksmith',
        href: '/services/commercial-locksmith',
        description: 'Business security solutions for Dubai',
      },
    ],
  },
  {
    label: 'Areas',
    href: '/areas',
    children: [
      { label: 'Downtown Dubai', href: '/areas/downtown-dubai' },
      { label: 'Dubai Marina', href: '/areas/dubai-marina' },
      { label: 'Palm Jumeirah', href: '/areas/palm-jumeirah' },
      { label: 'Business Bay', href: '/areas/business-bay' },
      { label: 'JVC', href: '/areas/jumeirah-village-circle' },
      { label: 'Al Barsha', href: '/areas/al-barsha' },
      { label: 'Deira', href: '/areas/deira' },
      { label: 'Jumeirah', href: '/areas/jumeirah' },
    ],
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const TRUST_SIGNALS = [
  'Licensed & Insured in Dubai',
  'All Technicians DPS Verified',
  '30-Minute Response Guarantee',
  'No Call-Out Fee',
  'Upfront Pricing — No Hidden Costs',
  '1-Year Warranty on All Work',
] as const;

export const PAYMENT_METHODS = [
  'Cash',
  'Credit Card',
  'Debit Card',
  'Bank Transfer',
  'Apple Pay',
  'Samsung Pay',
] as const;
