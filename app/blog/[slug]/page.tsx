import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { blogPosts, getBlogPost } from '@/data/blog'
import { absoluteUrl, siteConfig } from '@/lib/seo'

export function generateStaticParams() { return blogPosts.map(post => ({ slug: post.slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  const postUrl = absoluteUrl(`/blog/${post.slug}`)
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | ${siteConfig.name}`,
      description: post.excerpt,
      url: postUrl,
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: [siteConfig.name],
      images: [{ url: absoluteUrl('/og-card.jpg'), width: 1200, height: 630, alt: `${post.title} by Ashish Kumar` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | ${siteConfig.name}`,
      description: post.excerpt,
      images: [absoluteUrl('/og-card.jpg')],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()
  const postUrl = absoluteUrl(`/blog/${post.slug}`)
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    url: postUrl,
    image: absoluteUrl('/og-card.jpg'),
    inLanguage: 'en',
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: absoluteUrl('/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: absoluteUrl('/blog'),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  }

  return <main className="mx-auto min-h-screen max-w-4xl px-5 pb-24 pt-12 md:px-10 md:pt-20"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    <Link href="/blog" className="mono inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted hover:text-amber"><ArrowLeft size={14} /> All notes</Link>
    <article className="mt-24 border-t border-line pt-8"><p className="mono text-xs uppercase tracking-[0.22em] text-amber">{post.date}</p><h1 className="mt-5 font-display text-5xl font-bold tracking-[-0.06em] md:text-8xl">{post.title}</h1><p className="mt-8 max-w-2xl text-lg leading-7 text-muted">{post.excerpt}</p><div className="prose prose-invert mt-16 max-w-3xl text-muted prose-headings:font-display prose-headings:font-semibold prose-headings:text-soft prose-a:text-amber prose-blockquote:border-amber prose-blockquote:text-soft prose-strong:text-soft prose-li:marker:text-amber"><ReactMarkdown>{post.content}</ReactMarkdown></div></article>
  </main>
}
