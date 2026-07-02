import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'SathiPro — Your Personal China Sourcing Partner',
    template: '%s | SathiPro',
  },
  description:
    'We help global businesses source products from China with transparent communication, verified suppliers, and end-to-end procurement support across stationery, apparel, machinery, and medical industries.',
  keywords: ['China sourcing', 'procurement', 'sourcing agent', 'supplier', 'import from China', 'B2B sourcing'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
