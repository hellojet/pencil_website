import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Fancy Pencil — a professional manufacturer of acrylic markers and art supplies with over 13 years of experience.',
}

const CERTIFICATIONS = ['WCA', 'BSCI', 'ISO9001', 'ISO14001', 'ISO45001']
const PRODUCT_CERTS = ['ASTM D-4236', 'CE', 'TRA', 'EN71-1,2,3', 'CB', 'ROHS', 'MSDS', 'TDS']

const HIGHLIGHTS = [
  { number: '13+', label: 'Years of Experience' },
  { number: '50+', label: 'Countries Served' },
  { number: '100+', label: 'Product SKUs' },
  { number: '1999', label: 'Founded' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About Fancy Pencil</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            Professional manufacturer of acrylic markers, paint sticks and art pens,
            supplying quality stationery to buyers worldwide since 1999.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {HIGHLIGHTS.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-3xl font-bold text-blue-700">{item.number}</div>
                <div className="text-sm text-gray-500 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong>BB-fox Stationery</strong> has a lot of patents and leading technologies in innovation new products.
                With over 13 years of experience, we have built a reputation for delivering higher cost performance products
                to customers around the world.
              </p>
              <p>
                Our business pursues more satisfaction of customers&apos; needs in price, quality and service.
                We persist in innovating non-toxic products for children and eco-friendly products to reduce
                the use of harmful chemicals on earth.
              </p>
              <p>
                Through effective integration of industry, we have concentrated the whole process of production
                in our own factory. Leading technology, innovative ability and one-stop service provide customers
                with good quality and economical costs.
              </p>
            </div>
          </div>
          <div className="relative h-72 rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src="/images/factory.jpg"
              alt="BB-fox Stationery Factory"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-700 mb-4">Factory Certifications</h3>
              <div className="flex flex-wrap gap-3">
                {CERTIFICATIONS.map((cert) => (
                  <span key={cert} className="bg-blue-50 text-blue-700 border border-blue-200 text-sm font-semibold px-4 py-2 rounded-full">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-700 mb-4">Product Certifications</h3>
              <div className="flex flex-wrap gap-3">
                {PRODUCT_CERTS.map((cert) => (
                  <span key={cert} className="bg-green-50 text-green-700 border border-green-200 text-sm font-semibold px-4 py-2 rounded-full">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Work Together?</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Contact us today to discuss your requirements and get a competitive quote.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
}
