import type { Metadata } from 'next'
import { Portfolio } from '@/components/portfolio'
import { absoluteUrl, siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Ashish Kumar | Software Engineer & Final-Year Engineering Student | KJ Somaiya',
  description: siteConfig.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    type: 'website',
    images: [{ url: absoluteUrl('/og.svg'), width: 1200, height: 630, alt: 'Ashish Kumar portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.shortDescription,
    images: [absoluteUrl('/og.svg')],
  },
}

export default function Page() {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    alternateName: siteConfig.alternateNames,
    url: siteConfig.url,
    image: absoluteUrl('/ASHISH_KUMAR.jpeg'),
    description: siteConfig.description,
    jobTitle: siteConfig.role,
    affiliation: {
      '@type': 'CollegeOrUniversity',
      name: siteConfig.education,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mumbai',
      addressCountry: 'IN',
    },
    email: siteConfig.email,
    sameAs: siteConfig.sameAs,
    knowsAbout: [
      'Software Engineering',
      'Full-Stack Development',
      'Next.js',
      'React',
      'Node.js',
      'MongoDB',
      'Python',
      'AI Applications',
    ],
  }

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} /><Portfolio /></>
}
