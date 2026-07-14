import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Abishek Flair Bartender Guide',
  description: 'Master Bartending & Flair Bartending - Learn from Beginner to Professional',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://flair-bartender.com',
    title: 'Abishek Flair Bartender Guide',
    description: 'Master Bartending & Flair Bartending Learning Platform',
    images: [{
      url: 'https://flair-bartender.com/og-image.jpg',
      width: 1200,
      height: 630,
    }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-accent">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
