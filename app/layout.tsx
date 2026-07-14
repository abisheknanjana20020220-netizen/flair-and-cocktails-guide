import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Abishek Flair Bartender Guide - Master Bartending & Flair',
  description: 'Learn bartending and flair bartending from beginner to professional level. Comprehensive courses, cocktail recipes, and flair techniques.',
  keywords: ['bartending', 'flair', 'cocktails', 'bartender', 'guide', 'learning'],
  openGraph: {
    title: 'Abishek Flair Bartender Guide',
    description: 'Master Bartending & Flair Bartending Learning Platform',
    type: 'website',
    url: 'https://abishekflair.com',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="bg-black text-white">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
