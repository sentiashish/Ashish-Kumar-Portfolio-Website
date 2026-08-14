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
    images: [{ url: absoluteUrl('/og-card.jpg'), width: 1200, height: 630, alt: 'Ashish Kumar, Software Engineer at K. J. Somaiya College of Engineering, Mumbai' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.shortDescription,
    images: [absoluteUrl('/og-card.jpg')],
  },
}

export default function Page() {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    alternateName: siteConfig.alternateNames,
    url: siteConfig.url,
    image: absoluteUrl('/ashish-kumar-profile.jpg'),
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
      'MERN Stack',
      'Python',
      'C++',
      'SQL',
      'AWS',
      'Data Structures and Algorithms',
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
