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

          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/hero-personal.png"
              alt="SathiPro founder visiting a manufacturing factory in China"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-600 rounded-full opacity-30 blur-3xl pointer-events-none" />
    </section>
  )
}
