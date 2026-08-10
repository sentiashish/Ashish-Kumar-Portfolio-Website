import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Ashish Kumar — Software Engineer',
  description: 'Ashish Kumar is a final-year Computer Engineering student and software engineer building products with Next.js, React, and the MERN stack. Read his notes on software and product development.',
  generator: 'v0.app',
}

export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#0A0A0A' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className={`${display.variable} ${mono.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
