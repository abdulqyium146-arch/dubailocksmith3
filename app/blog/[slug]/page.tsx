import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import { blogPosts } from '@/content/blog';
import { BUSINESS } from '@/lib/constants';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.tags,
    authors: [{ name: post.author }],
    alternates: { canonical: `https://dubailocksmiths.com/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://dubailocksmiths.com/blog/${post.slug}`,
      siteName: 'Locksmith In Dubai',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: `https://dubailocksmiths.com${post.image}`, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

// Generate rich placeholder content for posts that have empty content field
function generateRichContent(post: (typeof blogPosts)[number]): string {
  return post.excerpt;
}

const ARTICLE_BODY: Record<string, string[]> = {
  'how-to-choose-reliable-locksmith-dubai': [
    'Finding a trustworthy locksmith in Dubai should not be difficult, but the reality is that the industry includes a small number of operators who take advantage of people in urgent situations. Knowing what to look for protects you before you are in a vulnerable position.',
    '**1. Check for a physical address and registered business.** A legitimate locksmith operates under a registered trade licence in Dubai. Ask for their trade licence number and verify it on the Dubai Department of Economic Development website. Any reluctance to share this information is a red flag.',
    '**2. Look for consistent pricing before they arrive.** Reputable locksmiths can give you a clear price range over the phone. If the quote changes dramatically once the technician arrives and has assessed the situation, request a written explanation of why. No legitimate job should be triple the quoted price.',
    '**3. Ask for identification on arrival.** Every technician should carry a company ID card with their name, photograph and company details. They should arrive in a branded or identifiable vehicle. Never allow an unnamed individual without credentials to work on your locks.',
    '**4. Read genuine reviews — and read them carefully.** Look for reviews on Google and Trustpilot, not just on the business website. Pay attention to responses to negative reviews — how a business handles complaints tells you more than the complaints themselves.',
    '**5. Avoid choosing based on price alone.** The cheapest locksmith is frequently not the best value. A cheap initial quote that balloons once the technician is at your door is a common tactic. A fair, mid-range price from an established business is usually the safest choice.',
    '**6. Ask whether they carry the relevant parts.** A professional mobile locksmith carries a range of lock hardware on the van. If a locksmith cannot tell you what locks they carry or suggests they will need to order parts, this may indicate limited experience.',
    '**7. Confirm the warranty.** All workmanship and parts supplied should carry a warranty. A one-year warranty on installed hardware is standard for reputable locksmiths. If a business cannot confirm their warranty terms, proceed with caution.',
  ],
  'smart-lock-installation-dubai-guide': [
    'Smart locks have become a practical upgrade for Dubai apartments, villas and offices. The combination of a large expat population managing multiple properties, frequent tenancy changes, and the Dubai summer heat making key management outdoors uncomfortable — all of these create genuine demand for keyless entry solutions.',
    'Before selecting a smart lock, you need to understand your door type. The majority of Dubai apartments have doors with a euro cylinder profile — these are the most common lock type and have the widest range of smart lock options. Villas often have different configurations including mortise locks and multi-point locking systems, which require different solutions.',
    '**Wi-Fi versus Bluetooth.** Wi-Fi enabled locks connect directly to your home network and can be controlled remotely from anywhere in the world via the manufacturer\'s app. Bluetooth locks connect only when your phone is in range — useful for hands-free unlocking as you approach, but no remote access without additional hardware (a hub or bridge). For landlords managing properties remotely, Wi-Fi is usually preferable.',
    '**Top brands available in Dubai.** Yale (the YDD40 and YDD50 series are popular choices) and Samsung (particularly the SHP series) have strong availability and after-sales support in the UAE. Philips (formerly Kaadas) offers competitive pricing. For premium installations, August and Nuki integrate well with Apple HomeKit and Google Home. We are brand-neutral and recommend based on your specific door and requirements.',
    '**Battery life and backup.** Most smart locks run on AA batteries and offer 6–12 months of life under normal use. Always check that your chosen lock has a mechanical key override or an external battery terminal — in Dubai\'s heat, battery performance can degrade faster than expected, and being locked out of your own smart lock is an avoidable situation.',
    '**Professional installation.** While some smart locks are marketed as DIY installations, professional fitting ensures correct alignment, torque settings and — critically — that the lock still functions correctly with the door geometry. An improperly installed smart lock can fail to lock or unlock reliably, which defeats the purpose entirely.',
    'If you are uncertain which model is right for your door, request a site visit. We assess the door, the existing hardware and your requirements before making a recommendation — and we carry the most popular models in stock for same-day installation.',
  ],
  'signs-locks-need-replacing-dubai': [
    'Most people in Dubai do not think about their locks until the morning they cannot open their front door. But locks give clear warning signs before they fail completely — and recognising them early means you can replace the lock on your terms, not in a crisis.',
    '**1. The key has become difficult to turn.** A lock that operates smoothly when new requires more effort over time as internal components wear, accumulate dust and grit, and as the door frame shifts slightly with seasonal temperature changes. If you are using noticeably more force than you used to, the lock is due for servicing or replacement. Dubai\'s dust environment accelerates internal wear in exterior locks particularly.',
    '**2. The key is stiff to insert or remove.** This often indicates a worn key, worn lock pins, or debris in the keyway. It can also indicate that the key has been poorly cut and was never quite right. A stiff key is a key that is about to get stuck — or to snap inside the lock.',
    '**3. The lock is slow to respond or inconsistent.** For smart and digital locks, sluggish response, intermittent connectivity or doors that do not lock reliably on the first attempt are signs that the mechanism is deteriorating. A smart lock that sometimes fails to lock is not providing the security it was installed for.',
    '**4. Visible physical damage.** Scratches around the keyhole can indicate a previous break-in attempt. Rust, corrosion or visible wear on the lock body suggests the hardware has reached the end of its serviceable life. Even if the lock still functions, physically compromised hardware is weaker hardware.',
    '**5. You have lost control of the keys.** This is not a physical sign, but it is one of the most important reasons to rekey or replace. If you have recently moved in, if a housemate or employee has left, or if you simply do not know how many copies of your key exist — change the lock. It costs little and restores complete control over who can enter your property.',
    'In Dubai, we also recommend reassessing exterior locks after significant temperature changes or particularly dusty periods. Locks exposed to the elements benefit from periodic lubrication and inspection regardless of whether they show obvious signs of wear.',
  ],
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && (p.category === post.category || p.tags.some((t) => post.tags.includes(t))))
    .slice(0, 3);

  const fallbackRelated = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const displayRelated = relatedPosts.length > 0 ? relatedPosts : fallbackRelated;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: BUSINESS.website,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS.name,
      url: BUSINESS.website,
      logo: { '@type': 'ImageObject', url: 'https://dubailocksmiths.com/images/logo.png' },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://dubailocksmiths.com/blog/${post.slug}` },
    keywords: post.tags.join(', '),
    articleSection: post.category,
  };

  const bodyParagraphs = ARTICLE_BODY[post.slug] ?? [post.excerpt, post.excerpt];

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
        <div className="container-premium py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-brand-600 transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/blog" className="hover:text-brand-600 transition-colors">
                Blog
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium truncate max-w-[200px]">{post.title}</li>
          </ol>
        </div>
      </nav>

      {/* Article header */}
      <header className="section-padding bg-gradient-to-br from-gray-900 via-brand-900 to-gray-900 text-white">
        <div className="container-premium max-w-4xl">
          <span className="inline-block bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-6">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span>By {post.author}</span>
            <span>·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-AE', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Article body */}
      <div className="section-padding">
        <div className="container-premium">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main content */}
            <article className="lg:col-span-3 prose prose-lg max-w-none">
              {/* Hero image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl mb-8 flex items-center justify-center not-prose">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-brand-200 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-10 h-10 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <p className="text-brand-600 text-sm font-medium">{post.category}</p>
                </div>
              </div>

              {/* Lead paragraph */}
              <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium not-prose">
                {post.excerpt}
              </p>

              {/* Body paragraphs */}
              <div className="space-y-6">
                {bodyParagraphs.map((para, i) => {
                  // Handle bold markdown-style markers
                  const parts = para.split(/\*\*(.*?)\*\*/g);
                  return (
                    <p key={i} className="text-gray-700 leading-relaxed">
                      {parts.map((part, j) =>
                        j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                      )}
                    </p>
                  );
                })}
              </div>

              {/* Tags */}
              <div className="mt-10 pt-8 border-t border-gray-200 not-prose">
                <p className="text-sm font-semibold text-gray-500 mb-3">Tags:</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author box */}
              <div className="mt-10 glass-card rounded-2xl p-6 not-prose">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-xl font-bold flex-shrink-0">
                    L
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-600">
                      Dubai-based professional locksmith team with 10+ years of hands-on experience
                      across residential, commercial and automotive locksmith services.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Emergency CTA */}
              <div className="bg-emergency-600 text-white rounded-2xl p-6 text-center">
                <p className="font-bold text-lg mb-2">Need Help Now?</p>
                <p className="text-emergency-100 text-sm mb-4">
                  Emergency locksmith available 24/7 across all Dubai areas.
                </p>
                <a
                  href="tel:+971557689003"
                  className="block w-full bg-white text-emergency-700 font-bold py-3 rounded-xl text-center hover:bg-emergency-50 transition-colors"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/971557689003"
                  className="block w-full mt-3 border border-white/40 text-white font-semibold py-3 rounded-xl text-center hover:bg-white/10 transition-colors text-sm"
                >
                  WhatsApp Us
                </a>
              </div>

              {/* Related articles */}
              {displayRelated.length > 0 && (
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {displayRelated.map((related) => (
                      <Link
                        key={related.id}
                        href={`/blog/${related.slug}`}
                        className="block group"
                      >
                        <p className="text-sm font-semibold text-gray-800 group-hover:text-brand-600 transition-colors leading-snug">
                          {related.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{related.readTime}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Services */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Our Services</h3>
                <ul className="space-y-2">
                  {[
                    { label: 'Emergency Lockout', href: '/services/emergency-locksmith' },
                    { label: 'Car Lockout', href: '/services/car-lockout' },
                    { label: 'Lock Change', href: '/services/lock-change' },
                    { label: 'Smart Locks', href: '/services/smart-locks' },
                    { label: 'Key Duplication', href: '/services/key-duplication' },
                  ].map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="text-sm text-gray-600 hover:text-brand-600 transition-colors flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-brand-600 to-brand-800 text-white">
        <div className="container-premium text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Locksmith in Dubai?</h2>
          <p className="text-brand-100 mb-8 max-w-xl mx-auto">
            Whatever your situation, our team is available right now. Call or WhatsApp us and we
            will be with you in 30 minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+971557689003" className="btn bg-white text-brand-700 hover:bg-brand-50 font-bold px-8 py-3 rounded-xl">
              Call +971 55 768 9003
            </a>
            <Link href="/contact" className="btn btn-outline border-white text-white hover:bg-white/10">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
