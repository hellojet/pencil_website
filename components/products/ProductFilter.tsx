'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { Category } from '@/types/product'

interface ProductFilterProps {
  categories: Category[]
  activeCategory: string
}

export default function ProductFilter({ categories, activeCategory }: ProductFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  function handleCategoryChange(categoryId: string) {
    const params = new URLSearchParams(searchParams.toString())
    if (categoryId === 'all') {
      params.delete('category')
    } else {
      params.set('category', categoryId)
    }
    router.push(`/products?${params.toString()}`)
  }

  const allCategories = [{ id: 'all', name: 'All Products', description: '', coverImage: '' }, ...categories]

  return (
    <div className="flex flex-wrap gap-2">
      {allCategories.map((category) => {
        const isActive = category.id === activeCategory || (category.id === 'all' && activeCategory === 'all')
        return (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              isActive
                ? 'bg-blue-700 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        )
      })}
    </div>
  )
}
