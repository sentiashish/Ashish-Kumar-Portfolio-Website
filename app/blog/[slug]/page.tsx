import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { blogPosts, getBlogPost } from '@/data/blog'

export function generateStaticParams() { return blogPosts.map(post => ({ slug: post.slug })) }

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()
  return <main className="mx-auto min-h-screen max-w-4xl px-5 pb-24 pt-12 md:px-10 md:pt-20">
    <Link href="/blog" className="mono inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted hover:text-amber"><ArrowLeft size={14} /> All notes</Link>
    <article className="mt-24 border-t border-line pt-8"><p className="mono text-xs uppercase tracking-[0.22em] text-amber">{post.date}</p><h1 className="mt-5 font-display text-5xl font-bold tracking-[-0.06em] md:text-8xl">{post.title}</h1><p className="mt-8 max-w-2xl text-lg leading-7 text-muted">{post.excerpt}</p><div className="prose prose-invert mt-16 max-w-3xl text-muted prose-headings:font-display prose-headings:font-semibold prose-headings:text-soft prose-a:text-amber prose-blockquote:border-amber prose-blockquote:text-soft prose-strong:text-soft prose-li:marker:text-amber"><ReactMarkdown>{post.content}</ReactMarkdown></div></article>
  </main>
}
