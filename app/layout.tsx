import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  metadataBase: new URL('https://ashishkumar.dev'),
  title: {
    default: 'Ashish Kumar — Software Engineer',
    template: '%s — Ashish Kumar',
  },
  description: 'Ashish Kumar is a final-year Computer Engineering student building full-stack products with Next.js, React, Node.js, MongoDB, and Python.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Ashish Kumar — Software Engineer',
    description: 'Portfolio of a final-year Computer Engineering student building full-stack products, AI tools, and polished web experiences.',
    url: 'https://ashishkumar.dev',
    siteName: 'Ashish Kumar',
    images: ['/og.svg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashish Kumar — Software Engineer',
    description: 'Final-year Computer Engineering student building full-stack products and AI tools.',
    images: ['/og.svg'],
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
}

export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#0b1220' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className={`${display.variable} ${mono.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
