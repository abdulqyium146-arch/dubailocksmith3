import type { Service, FAQ, Review, BlogPost, BreadcrumbItem } from '@/types';
import { BUSINESS } from '@/lib/constants';

const BASE_URL = BUSINESS.website;

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: BUSINESS.name,
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/logo.png`,
      width: 200,
      height: 60,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS.phone,
      contactType: 'customer service',
      availableLanguage: ['English', 'Arabic'],
      hoursAvailable: 'Mo-Su 00:00-23:59',
    },
    sameAs: [
      BUSINESS.social.facebook,
      BUSINESS.social.instagram,
      BUSINESS.social.google,
    ],
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    '@id': `${BASE_URL}/#localbusiness`,
    name: BUSINESS.name,
    description:
      'Professional 24/7 locksmith services in Dubai. Emergency lockouts, lock change, car locksmith, smart locks, safe opening and full security solutions.',
    url: BASE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      addressCountry: BUSINESS.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.coordinates.lat,
      longitude: BUSINESS.coordinates.lng,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.rating,
      reviewCount: BUSINESS.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    priceRange: 'AED 150 – AED 800',
    currenciesAccepted: 'AED',
    paymentAccepted: 'Cash, Credit Card, Debit Card, Bank Transfer',
    areaServed: {
      '@type': 'City',
      name: 'Dubai',
      sameAs: 'https://www.wikidata.org/wiki/Q612',
    },
    hasMap: BUSINESS.social.google,
    image: `${BASE_URL}/og-image.jpg`,
    logo: `${BASE_URL}/logo.png`,
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: BUSINESS.name,
    description: '24/7 Emergency Locksmith Services in Dubai',
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-AE',
  };
}

export function serviceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE_URL}/services/${service.slug}/#service`,
    name: service.title,
    description: service.description,
    provider: {
      '@id': `${BASE_URL}/#localbusiness`,
    },
    areaServed: {
      '@type': 'City',
      name: 'Dubai',
    },
    serviceType: service.title,
    url: `${BASE_URL}/services/${service.slug}`,
    image: service.image,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'AED',
        price: service.price ?? 'Call for pricing',
      },
    },
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function reviewSchema(reviews: Review[]) {
  return reviews.map((review) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
    },
    author: {
      '@type': 'Person',
      name: review.name,
    },
    reviewBody: review.text,
    datePublished: review.date,
    itemReviewed: {
      '@id': `${BASE_URL}/#localbusiness`,
    },
  }));
}

export function aggregateRatingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    itemReviewed: {
      '@id': `${BASE_URL}/#localbusiness`,
    },
    ratingValue: BUSINESS.rating,
    reviewCount: BUSINESS.reviewCount,
    bestRating: 5,
    worstRating: 1,
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${BASE_URL}${item.href}`,
    })),
  };
}

export function articleSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${BASE_URL}/blog/${post.slug}/#article`,
    headline: post.title,
    description: post.excerpt,
    image: {
      '@type': 'ImageObject',
      url: post.image,
      width: 1200,
      height: 630,
    },
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
    inLanguage: 'en-AE',
  };
}

export function speakableSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.speakable'],
    },
    url: BASE_URL,
  };
}
