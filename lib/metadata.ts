import type { Metadata } from 'next';
import type { Service, Area, BlogPost } from '@/types';
import { BUSINESS } from '@/lib/constants';

const BASE_URL = BUSINESS.website;

export const baseMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Locksmith In Dubai | 24/7 Emergency Locksmith +971 55 768 9003',
    template: '%s | Locksmith In Dubai',
  },
  description:
    'Professional 24/7 locksmith services in Dubai. Emergency lockouts, lock change, car locksmith, smart locks & more. Fast 30-minute response. Call +971 55 768 9003.',
  keywords: [
    'locksmith Dubai',
    'emergency locksmith Dubai',
    '24 hour locksmith Dubai',
    'car lockout Dubai',
    'house lockout Dubai',
    'lock change Dubai',
    'Dubai locksmith',
    'locksmith near me Dubai',
    'lock repair Dubai',
    'key duplication Dubai',
  ],
  authors: [{ name: BUSINESS.name, url: BASE_URL }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: BASE_URL,
    siteName: BUSINESS.name,
    title: 'Locksmith In Dubai | 24/7 Emergency Locksmith +971 55 768 9003',
    description:
      'Professional 24/7 locksmith services in Dubai. Emergency lockouts, lock change, car locksmith, smart locks & more. Fast 30-minute response.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Locksmith In Dubai — 24/7 Emergency Locksmith Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Locksmith In Dubai | 24/7 Emergency Locksmith',
    description:
      '24/7 emergency locksmith services across Dubai. 30-minute response guaranteed. Call +971 55 768 9003.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-token',
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'en-AE': BASE_URL,
    },
  },
};

export function generateServiceMetadata(service: Service): Metadata {
  const url = `${BASE_URL}/services/${service.slug}`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [
      `${service.title} Dubai`,
      `${service.title} near me`,
      'locksmith Dubai',
      '24/7 locksmith Dubai',
      service.slug.replace(/-/g, ' '),
    ],
    openGraph: {
      type: 'website',
      url,
      title: service.metaTitle,
      description: service.metaDescription,
      images: [
        {
          url: service.image || '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.image || '/og-image.jpg'],
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateAreaMetadata(area: Area): Metadata {
  const url = `${BASE_URL}/areas/${area.slug}`;
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    keywords: [
      `locksmith ${area.name}`,
      `${area.name} locksmith`,
      `emergency locksmith ${area.name}`,
      `24/7 locksmith ${area.name}`,
      `lock change ${area.name}`,
      `car lockout ${area.name}`,
    ],
    openGraph: {
      type: 'website',
      url,
      title: area.metaTitle,
      description: area.metaDescription,
      images: [
        {
          url: area.image || '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `Locksmith in ${area.name}, Dubai`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: area.metaTitle,
      description: area.metaDescription,
      images: [area.image || '/og-image.jpg'],
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateBlogMetadata(post: BlogPost): Metadata {
  const url = `${BASE_URL}/blog/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      type: 'article',
      url,
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image],
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generatePageMetadata(
  title: string,
  description: string,
  path: string,
  keywords?: string[]
): Metadata {
  const url = `${BASE_URL}${path}`;
  const fullTitle = `${title} | ${BUSINESS.name}`;
  return {
    title: fullTitle,
    description,
    keywords: keywords ?? ['locksmith Dubai', '24/7 locksmith', 'emergency locksmith Dubai'],
    openGraph: {
      type: 'website',
      url,
      title: fullTitle,
      description,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ['/og-image.jpg'],
    },
    alternates: {
      canonical: url,
    },
  };
}
