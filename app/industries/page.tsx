import { Metadata } from 'next'
import IndustriesContent from '@/components/industries/IndustriesContent'

export const metadata: Metadata = {
  title: 'Industries',
  description: 'SathiPro manages sourcing across stationery, apparel, machinery, and medical industries with a stable supplier network in China.',
}

export default function IndustriesPage() {
  return <IndustriesContent />
}
