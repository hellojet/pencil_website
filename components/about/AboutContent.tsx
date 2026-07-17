'use client'

import { useState } from 'react'
import Link from 'next/link'
import DesignInquiryForm from '@/components/common/DesignInquiryForm'

const DESIGN_IMAGES = Array.from(
  { length: 8 },
  (_, index) => `/images/site/about/design-${index + 1}.webp`,
)

const STRENGTHS = [
  {
    title: 'Stable Factory Network',
    description: 'Long-term cooperation with manufacturers across multiple industries.',
    items: ['Stationery & office products', 'Apparel & textiles', 'Machinery & industrial equipment', 'Medical & healthcare products'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
      </svg>
    ),
  },
  {
    title: 'Cross-Border Trade Support',
    description: 'We collaborate with cross-border payment infrastructure providers such as PingPong.',
    items: ['Secure international payments', 'Supplier transaction coordination', 'Smoother global trade execution'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Medical Device Sourcing Experience',
    description: 'We provide sourcing support specifically in digestive endoscopy.',
    items: ['Digestive endoscopy equipment procurement', 'Supplier capability matching', 'Production specification coordination'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
]

export default function AboutContent() {
  const [showDesignForm, setShowDesignForm] = useState(false)

  return (
    <div className="min-h-screen">
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About SathiPro</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            An independent sourcing partner based in China, helping global buyers connect
            directly with manufacturers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong>SathiPro</strong> is an independent sourcing partner based in China,
                helping global buyers connect directly with manufacturers and manage procurement
                across multiple industries.
              </p>
              <p>
                We operate as a direct sourcing extension of your procurement team, not a trading
                intermediary or platform.
              </p>
            </div>
            <div className="mt-8 bg-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-blue-800 mb-2">Our Mission</h3>
              <p className="text-blue-700 text-sm leading-relaxed">
                To build a more reliable sourcing system between global buyers and Chinese
                manufacturers through structured execution, transparent communication, and
                stable supplier networks.
              </p>
            </div>
          </div>
          <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden">
            <img
              src="/images/site/about/who-we-are.webp"
              alt="SathiPro team and supplier partners in China"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Strengths</h2>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-blue-700 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Product Design & 3D Capability</h3>
                <p className="text-gray-500 mb-4">
                  Through our design and modeling partners, we support product concept visualization,
                  packaging and branding development, and prototype optimization before mass production.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  {['Product concept visualization', 'Packaging and branding development', 'Prototype optimization before mass production'].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setShowDesignForm(true)}
                  className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  Start Design
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {DESIGN_IMAGES.map((image, index) => (
                  <div className="aspect-square rounded-lg border border-gray-100 bg-gray-50 p-2" key={image}>
                    <img
                      src={image}
                      alt={`Product design and 3D capability example ${index + 1}`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STRENGTHS.map((strength) => (
              <div key={strength.title} className="bg-white rounded-xl border border-gray-100 p-6">
                <div className="text-blue-700 mb-4">{strength.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{strength.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{strength.description}</p>
                <ul className="space-y-1.5">
                  {strength.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-3.5 h-3.5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Work Together?</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Contact us today to discuss your sourcing requirements.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
        >
          Contact Us
        </Link>
      </div>

      {showDesignForm && <DesignInquiryForm onClose={() => setShowDesignForm(false)} />}
    </div>
  )
}
