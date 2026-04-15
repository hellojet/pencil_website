import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types/product'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group block">
      <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* Product Image */}
        <div className="relative aspect-square bg-gray-50 overflow-hidden">
          <Image
            src={product.coverImage}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          {product.tags.includes('bestseller') && (
            <span className="absolute top-2 left-2 bg-blue-700 text-white text-xs font-semibold px-2 py-1 rounded-full">
              Bestseller
            </span>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <p className="text-xs text-gray-400 font-mono mb-1">{product.sku}</p>
          <h3 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2 group-hover:text-blue-700 transition-colors">
            {product.name}
          </h3>

          <div className="mt-3 flex items-center justify-between">
            {product.specifications.colors && (
              <span className="text-xs text-gray-500">
                {product.specifications.colors} Colors
              </span>
            )}
            {product.moq > 0 && (
              <span className="text-xs text-gray-500">
                MOQ: {product.moq.toLocaleString()} pcs
              </span>
            )}
          </div>

          <div className="mt-3">
            <span className="inline-block text-xs text-blue-700 font-medium border border-blue-200 bg-blue-50 px-2 py-1 rounded-full">
              Get Quote →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
