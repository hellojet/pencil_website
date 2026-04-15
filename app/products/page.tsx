import { Suspense } from 'react'
import { Metadata } from 'next'
import { getAllProducts } from '@/lib/products'
import { CATEGORIES } from '@/lib/categories'
import ProductGrid from '@/components/products/ProductGrid'
import ProductFilter from '@/components/products/ProductFilter'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse our full range of acrylic markers, paint sticks, glitter brushes and art pens.',
}

interface ProductsPageProps {
  searchParams: Promise<{ category?: string; q?: string }>
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category, q } = await searchParams
  const activeCategory = category || 'all'

  let products = getAllProducts()

  if (category && category !== 'all') {
    products = products.filter((product) => product.category === category)
  }

  if (q) {
    const keyword = q.toLowerCase()
    products = products.filter(
      (product) =>
        product.name.toLowerCase().includes(keyword) ||
        product.sku.toLowerCase().includes(keyword) ||
        product.tags.some((tag) => tag.toLowerCase().includes(keyword))
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Products</h1>
          <p className="mt-2 text-gray-500">
            {products.length} product{products.length !== 1 ? 's' : ''} found
            {activeCategory !== 'all' && (
              <span className="ml-1">
                in <span className="font-medium text-blue-700">{CATEGORIES.find((c) => c.id === activeCategory)?.name}</span>
              </span>
            )}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter */}
        <div className="mb-8">
          <Suspense fallback={<div className="h-10 bg-gray-100 rounded-full animate-pulse w-64" />}>
            <ProductFilter categories={CATEGORIES} activeCategory={activeCategory} />
          </Suspense>
        </div>

        {/* Product Grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  )
}
