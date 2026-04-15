import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllProducts, getProductById } from '@/lib/products'
import { getCategoryById } from '@/lib/categories'
import ProductImageGallery from '@/components/products/ProductImageGallery'
import InquiryForm from '@/components/common/InquiryForm'

interface ProductDetailPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const products = getAllProducts()
  return products.map((product) => ({ id: product.id }))
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { id } = await params
  const product = getProductById(id)
  if (!product) return {}
  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) notFound()

  const category = getCategoryById(product.category)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-blue-700">Products</Link>
          {category && (
            <>
              <span>/</span>
              <Link href={`/products?category=${category.id}`} className="hover:text-blue-700">
                {category.name}
              </Link>
            </>
          )}
          <span>/</span>
          <span className="text-gray-600 truncate max-w-xs">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Image Gallery */}
          <ProductImageGallery images={product.images} productName={product.name} />

          {/* Right: Product Info */}
          <div>
            <p className="text-sm font-mono text-gray-400 mb-2">SKU: {product.sku}</p>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

            {product.tipType && (
              <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {product.tipType}
              </span>
            )}

            <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

            {/* Specifications */}
            <div className="bg-white rounded-xl border border-gray-100 p-5 mb-6">
              <h2 className="font-semibold text-gray-800 mb-4">Specifications</h2>
              <dl className="space-y-3">
                {product.specifications.colors && (
                  <div className="flex justify-between text-sm">
                    <dt className="text-gray-500">Colors</dt>
                    <dd className="font-medium text-gray-800">{product.specifications.colors} Colors</dd>
                  </div>
                )}
                {product.specifications.tipType && (
                  <div className="flex justify-between text-sm">
                    <dt className="text-gray-500">Tip Type</dt>
                    <dd className="font-medium text-gray-800">{product.specifications.tipType}</dd>
                  </div>
                )}
                {product.specifications.length && (
                  <div className="flex justify-between text-sm">
                    <dt className="text-gray-500">Length</dt>
                    <dd className="font-medium text-gray-800">{product.specifications.length}</dd>
                  </div>
                )}
                {product.specifications.diameter && (
                  <div className="flex justify-between text-sm">
                    <dt className="text-gray-500">Diameter</dt>
                    <dd className="font-medium text-gray-800">{product.specifications.diameter}</dd>
                  </div>
                )}
                {product.moq > 0 && (
                  <div className="flex justify-between text-sm">
                    <dt className="text-gray-500">MOQ</dt>
                    <dd className="font-medium text-gray-800">{product.moq.toLocaleString()} pcs</dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Packaging Info */}
            {(product.packaging.package || product.packaging.grossWeight || product.packaging.meas) && (
              <div className="bg-white rounded-xl border border-gray-100 p-5 mb-6">
                <h2 className="font-semibold text-gray-800 mb-4">Packaging</h2>
                <dl className="space-y-3">
                  {product.packaging.package && (
                    <div className="flex justify-between text-sm">
                      <dt className="text-gray-500">Package</dt>
                      <dd className="font-medium text-gray-800">{product.packaging.package}</dd>
                    </div>
                  )}
                  {product.packaging.grossWeight && (
                    <div className="flex justify-between text-sm">
                      <dt className="text-gray-500">Gross Weight</dt>
                      <dd className="font-medium text-gray-800">{product.packaging.grossWeight}</dd>
                    </div>
                  )}
                  {product.packaging.meas && (
                    <div className="flex justify-between text-sm">
                      <dt className="text-gray-500">Measurements</dt>
                      <dd className="font-medium text-gray-800">{product.packaging.meas}</dd>
                    </div>
                  )}
                </dl>
              </div>
            )}

            {/* Tags */}
            {product.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {product.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* CTA */}
            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}&sku=${product.sku}`}
              className="block w-full bg-blue-700 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Send Inquiry for This Product
            </Link>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Request a Quote</h2>
            <p className="text-gray-500 mb-6">Fill in the form below and we will respond within 24 hours.</p>
            <InquiryForm productName={product.name} productSku={product.sku} />
          </div>
        </div>
      </div>
    </div>
  )
}
