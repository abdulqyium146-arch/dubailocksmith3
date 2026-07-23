import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/content/blog';

export const metadata: Metadata = {
  title: 'Locksmith Blog & Guides | Expert Security Advice | Locksmith In Dubai',
  description:
    'Practical locksmith advice for Dubai residents and businesses. Smart lock guides, security tips, car lockout advice, lock maintenance and more from Dubai\'s trusted locksmith.',
  alternates: { canonical: 'https://dubailocksmiths.com/blog' },
  openGraph: {
    title: 'Locksmith Blog | Expert Security Advice for Dubai',
    description:
      'Practical locksmith and home security guides written by Dubai\'s experienced locksmith team.',
    url: 'https://dubailocksmiths.com/blog',
    siteName: 'Locksmith In Dubai',
    type: 'website',
  },
};

const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
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
            <li className="text-gray-900 font-medium">Blog</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-brand-900 to-gray-900 text-white section-padding">
        <div className="container-premium text-center">
          <p className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-4">
            Locksmith Advice
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Expert Locksmith Guides<br />
            <span className="text-gradient">for Dubai</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Practical, honest advice on home security, smart locks, car keys and more — written by
            the team who handles these situations every day across Dubai.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-premium py-4 overflow-x-auto">
          <div className="flex gap-2 whitespace-nowrap">
            <span className="px-4 py-2 rounded-lg text-sm font-semibold bg-brand-600 text-white">
              All Articles
            </span>
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-600 bg-white border border-gray-200 cursor-default"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Blog grid */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="glass-card rounded-2xl overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-gradient-to-br from-brand-50 to-brand-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-brand-200 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-brand-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 bg-brand-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
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

                  <h2 className="font-bold text-gray-900 mb-3 leading-snug group-hover:text-brand-600 transition-colors line-clamp-2 text-lg">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-brand-600 font-semibold text-sm hover:text-brand-700 inline-flex items-center gap-1 group/link flex-shrink-0"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-50">
        <div className="container-premium text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help Rather Than Advice?
          </h2>
          <p className="text-gray-600 mb-8">
            Our team is available 24 hours a day for any locksmith situation — from quick questions
            to full emergency call-outs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+971557689003" className="btn btn-emergency">
              Call +971 55 768 9003
            </a>
            <a href="https://wa.me/971557689003" className="btn btn-whatsapp">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
