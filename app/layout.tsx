import type { Metadata } from 'next'
import { Inter, Crimson_Text } from 'next/font/google'
import './globals.css'
import { Analytics } from '@/components/Analytics'
import { CartProvider } from '@/contexts/CartContext'
import { Navigation } from '@/components/Navigation'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const crimson = Crimson_Text({ 
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-crimson',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Emblematic Coffee - Premium Guatemalan Coffee',
  description: 'Premium 100% Guatemalan coffee and microlot, single origin, locally roasted specialty coffee from select regions of Guatemala.',
  keywords: 'Guatemalan coffee, specialty coffee, microlot coffee, single origin coffee, premium coffee',
  authors: [{ name: 'Emblematic Coffee' }],
  openGraph: {
    title: 'Emblematic Coffee - Premium Guatemalan Coffee',
    description: 'Premium 100% Guatemalan coffee and microlot, single origin, locally roasted specialty coffee.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emblematic Coffee - Premium Guatemalan Coffee',
    description: 'Premium 100% Guatemalan coffee and microlot, single origin, locally roasted specialty coffee.',
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
    <html lang="en" className={`${inter.variable} ${crimson.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://[your-domain].com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Emblematic Coffee',
              description: 'Premium 100% Guatemalan coffee and microlot, single origin, locally roasted specialty coffee',
              url: 'https://[your-domain].com',
              logo: 'https://[your-domain].com/logo.png',
              sameAs: [
                'https://instagram.com/[your-handle]',
                'https://linkedin.com/company/[your-handle]',
              ],
            }),
          }}
        />
      </head>
      <body>
        <CartProvider>
          <Navigation />
          {children}
          <Analytics />
        </CartProvider>
      </body>
    </html>
  )
}

