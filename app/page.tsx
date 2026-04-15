import HeroBanner from '@/components/home/HeroBanner'
import CategoryGrid from '@/components/home/CategoryGrid'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import { CATEGORIES } from '@/lib/categories'
import { getAllProducts } from '@/lib/products'

export default function HomePage() {
  const allProducts = getAllProducts()
  const featuredProducts = allProducts.slice(0, 8)

  return (
    <>
      <HeroBanner />
      <CategoryGrid categories={CATEGORIES} />
      <FeaturedProducts products={featuredProducts} />

      {/* Company Highlights */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Choose Fancy Pencil?</h2>
            <p className="mt-3 text-blue-200 max-w-xl mx-auto">
              Over 13 years of experience in professional art supplies manufacturing
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🏭',
                title: 'Own Factory',
                description: 'Full in-house production with advanced injection molding and automated assembly lines.',
              },
              {
                icon: '✅',
                title: 'Certified Quality',
                description: 'ISO9001, CE, ASTM D-4236, EN71 certified. Safe for children and compliant worldwide.',
              },
              {
                icon: '🎨',
                title: 'Full Customization',
                description: 'Custom logo, color, packaging and OEM/ODM services available for all products.',
              },
              {
                icon: '🚢',
                title: 'Global Shipping',
                description: 'Complete freight service with experience shipping to 50+ countries worldwide.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Place an Order?</h2>
          <p className="text-gray-500 mb-8">
            Send us your requirements and we will get back to you within 24 hours with a competitive quote.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors"
          >
            Send an Inquiry
          </a>
        </div>
      </section>
    </>
  )
}
