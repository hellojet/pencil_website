import Link from 'next/link'

export default function HeroBanner() {
  return (
    <section className="relative bg-blue-700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              SathiPro
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-blue-100 mb-6">
              Your Personal China Sourcing Partner
            </p>
            <p className="text-blue-100 text-lg leading-relaxed mb-4">
              We help global businesses source products from China with transparent
              communication, verified suppliers, and end-to-end procurement support.
            </p>
            <p className="text-blue-200 leading-relaxed mb-8">
              From stationery, apparel, machinery to medical products, we manage
              sourcing across multiple industries with a stable supplier network in China.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl bg-gray-200 flex items-center justify-center">
            <div className="text-center text-gray-400 px-8">
              <svg className="w-16 h-16 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
              </svg>
              <p className="text-sm font-medium">Personal Photo Placeholder</p>
              <p className="text-xs mt-1">Factory visit photo goes here</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-600 rounded-full opacity-30 blur-3xl pointer-events-none" />
    </section>
  )
}
