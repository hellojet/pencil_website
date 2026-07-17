'use client'

import { useState } from 'react'
import IndustryInquiryForm from '@/components/common/IndustryInquiryForm'

const INDUSTRIES = [
  {
    title: 'Stationery & Creative Products',
    description: 'We support sourcing of high-volume and customized stationery products.',
    items: ['Pens & writing instruments', 'Notebooks & paper products', 'Art supplies & creative tools', 'OEM packaging & branding'],
    images: Array.from(
      { length: 12 },
      (_, index) => `/images/site/industries/stationery-${index + 1}.webp`,
    ),
  },
  {
    title: 'Apparel & Textile Products',
    description: 'We help buyers source from clothing factories in China.',
    items: ['Down jackets', 'Winter apparel', 'Casual wear OEM production', 'Fabric sourcing & sampling'],
    images: Array.from(
      { length: 6 },
      (_, index) => `/images/site/industries/apparel-${index + 1}.webp`,
    ),
  },
  {
    title: 'Machinery & Industrial Equipment',
    description: 'We assist in sourcing light industrial manufacturing equipment.',
    items: ['Packaging machines', 'Printing machines', 'Stationery production equipment', 'Small industrial tools'],
    images: Array.from(
      { length: 9 },
      (_, index) => `/images/site/industries/machinery-${index + 1}.webp`,
    ),
  },
  {
    title: 'Medical & Healthcare Products',
    description: 'We specialize in sourcing digestive endoscopy equipment and related medical devices, working with capable suppliers and supporting production requirement alignment.',
    items: ['Gastrointestinal endoscopy systems', 'Endoscopic imaging equipment', 'Disposable consumables & components'],
    images: Array.from(
      { length: 11 },
      (_, index) => `/images/site/industries/medical-${index + 1}.webp`,
    ),
  },
]

const INDUSTRY_ICONS = [
  <svg key="stationery" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>,
  <svg key="apparel" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>,
  <svg key="machinery" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.648-3.261a3.375 3.375 0 01-.474-5.434L8.52 3.06a3.375 3.375 0 014.96 0l3.223 3.415a3.375 3.375 0 01-.474 5.434L10.58 15.17m.84-3.17v8.25M8.25 21h7.5" />
  </svg>,
  <svg key="medical" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>,
]

export default function IndustriesContent() {
  const [activeInquiry, setActiveInquiry] = useState<string | null>(null)

  return (
    <div className="min-h-screen">
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            We manage sourcing across multiple industries with a stable supplier network in China.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {INDUSTRIES.map((industry, index) => (
          <div
            key={industry.title}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:[direction:rtl] lg:[&>*]:[direction:ltr]' : ''}`}
          >
            <div>
              <div className="text-blue-700 mb-4">{INDUSTRY_ICONS[index]}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{industry.title}</h2>
              <p className="text-gray-500 mb-4">{industry.description}</p>
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-700 mb-2">Includes:</p>
                <ul className="space-y-1.5">
                  {industry.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => setActiveInquiry(industry.title)}
                className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Inquire About {industry.title.split(' ')[0]} Products
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {industry.images.map((img, imgIndex) => (
                <div className="aspect-square rounded-lg border border-gray-100 bg-gray-50 p-2" key={img}>
                  <img
                    src={img}
                    alt={`${industry.title} product ${imgIndex + 1}`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {activeInquiry && (
        <IndustryInquiryForm
          industryName={activeInquiry}
          onClose={() => setActiveInquiry(null)}
        />
      )}
    </div>
  )
}
