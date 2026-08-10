export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-products-that-ship',
    title: 'Building products that ship',
    excerpt: 'A short note on turning ideas into focused, production-ready software.',
    date: '2026-08-10',
    content: `# Building products that ship

The best engineering work starts with a clear problem and ends with something people can use.

I am interested in the space between product thinking and implementation: choosing the simplest architecture that can grow, keeping interfaces understandable, and shipping small improvements often.

> Good software is not just technically correct. It is useful, resilient, and easy to change.

## What I am practicing

- Writing smaller, clearer APIs
- Treating performance as part of the product experience
- Using AI where it removes friction, not where it adds novelty
- Closing the loop with real user feedback

This is a placeholder post for the blog. More notes on software, systems, and building will follow.`
  }
]

export function getBlogPost(slug: string) {
  return blogPosts.find(post => post.slug === slug)
}
