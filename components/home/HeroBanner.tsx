import Link from 'next/link'
import Image from 'next/image'

export default function HeroBanner() {
  return (
    <section className="relative bg-blue-700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <p className="text-blue-200 font-medium text-sm uppercase tracking-widest mb-4">
              Professional Art Supplies Manufacturer
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Premium Acrylic Markers &amp; Paint Sticks
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Factory-direct supply of Hi-tech acrylic markers, paint sticks, glitter brushes and more.
              Certified quality, flexible MOQ, full customization support.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Browse Products
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
              >
                Get a Quote
              </Link>
            </div>

            {/* Certifications */}
            <div className="mt-10 flex flex-wrap gap-3">
              {['ISO9001', 'CE', 'ASTM D-4236', 'EN71', 'ROHS'].map((cert) => (
                <span
                  key={cert}
                  className="text-xs font-semibold bg-blue-600 text-blue-100 border border-blue-500 px-3 py-1 rounded-full"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/hero-banner.jpg"
              alt="Fancy Pencil - Premium Acrylic Markers"
              fill
              className="object-cover"
              priority
            />
            {/* Fallback gradient if no image */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-900 opacity-30" />
          </div>
        </div>
      </div>

      {/* Decorative background shape */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-600 rounded-full opacity-30 blur-3xl pointer-events-none" />
    </section>
  )
}
