import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Fancy Pencil — Premium Acrylic Markers & Art Supplies',
    template: '%s | Fancy Pencil',
  },
  description:
    'Factory-direct supplier of Hi-tech acrylic markers, paint sticks, glitter brushes and art pens. Certified quality, flexible MOQ, full customization support for B2B buyers worldwide.',
  keywords: ['acrylic marker', 'paint sticks', 'art supplies', 'wholesale', 'B2B', 'manufacturer'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
