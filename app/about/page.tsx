import { Metadata } from 'next'
import AboutContent from '@/components/about/AboutContent'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about SathiPro — an independent sourcing partner based in China helping global buyers connect with manufacturers.',
}

export default function AboutPage() {
  return <AboutContent />
}
