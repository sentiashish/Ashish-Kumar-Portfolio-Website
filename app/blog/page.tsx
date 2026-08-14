import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { blogPosts } from '@/data/blog'
import { absoluteUrl, siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Notes by Ashish Kumar on software engineering, systems thinking, and building production-ready software products.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: `Blog | ${siteConfig.name}`,
    description: 'Notes on software engineering, product development, and practical system design.',
    url: absoluteUrl('/blog'),
    type: 'website',
    images: [{ url: absoluteUrl('/og-card.jpg'), width: 1200, height: 630, alt: 'Ashish Kumar software engineering blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Blog | ${siteConfig.name}`,
    description: 'Notes on software engineering and building useful products.',
    images: [absoluteUrl('/og-card.jpg')],
  },
}

export default function BlogPage() {
  return <main className="mx-auto min-h-screen max-w-5xl px-5 pb-24 pt-12 md:px-10 md:pt-20">
    <Link href="/" className="mono inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted hover:text-amber"><ArrowLeft size={14} /> Back home</Link>
    <div className="mt-24 border-t border-line pt-8"><p className="mono mb-5 text-xs uppercase tracking-[0.22em] text-amber">Writing / 07</p><h1 className="font-display text-6xl font-bold tracking-[-0.06em] md:text-8xl">Notes on<br /><span className="text-amber">building.</span></h1><p className="mt-8 max-w-xl text-lg leading-7 text-muted">Thoughts on software engineering, product development, and the systems behind useful interfaces.</p></div>
    <div className="mt-24 grid gap-4">{blogPosts.map(post => <Link key={post.slug} href={`/blog/${post.slug}`} className="group border border-line bg-panel p-6 transition-colors hover:border-amber md:p-8"><div className="flex flex-col justify-between gap-8 md:flex-row"><div><p className="mono text-[10px] uppercase tracking-widest text-muted">{post.date}</p><h2 className="mt-4 font-display text-3xl font-semibold text-soft group-hover:text-amber md:text-4xl">{post.title}</h2><p className="mt-4 max-w-2xl leading-7 text-muted">{post.excerpt}</p></div><ArrowUpRight className="shrink-0 text-amber" /></div></Link>)}</div>
  </main>
}
