import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { absoluteUrl, siteConfig } from '@/lib/seo'

const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  keywords: [
    'Ashish Kumar',
    'Ashish Kumar portfolio',
    'software engineer',
    'computer engineering student',
    'K J Somaiya College of Engineering',
    'C++',
    'Python',
    'SQL',
    'AWS',
    'MERN Stack',
    'Data Structures and Algorithms',
    'Python',
  ],
  authors: [{ name: 'Ashish Kumar' }],
  creator: 'Ashish Kumar',
  publisher: 'Ashish Kumar',
  title: {
    default: siteConfig.title,
    template: '%s | Ashish Kumar',
  },
  description: siteConfig.description,
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: 'Ashish Kumar',
    locale: 'en_IN',
    images: [{ url: absoluteUrl('/og-card.jpg'), width: 1200, height: 630, alt: 'Ashish Kumar, Software Engineer at K. J. Somaiya College of Engineering, Mumbai' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.shortDescription,
    images: [absoluteUrl('/og-card.jpg')],
  },
  icons: {
    icon: [{ url: '/logo.png', type: 'image/png' }],
    shortcut: [{ url: '/logo.png', type: 'image/png' }],
    apple: [{ url: '/logo.png', type: 'image/png' }],
  },
}

export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#0b1220' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: 'en-IN',
    description: siteConfig.description,
    publisher: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }

  return <html lang="en" className="bg-background"><body className={`${display.variable} ${mono.variable} antialiased`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
