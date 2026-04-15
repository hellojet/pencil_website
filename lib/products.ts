import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Product } from '@/types/product'

const CONTENT_DIR = path.join(process.cwd(), 'content/products')

export function getAllProducts(): Product[] {
  if (!fs.existsSync(CONTENT_DIR)) return []

  const files = fs.readdirSync(CONTENT_DIR).filter((file) => file.endsWith('.md'))

  const products = files
    .map((file) => {
      const filePath = path.join(CONTENT_DIR, file)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(fileContent)

      return {
        id: data.sku || file.replace('.md', ''),
        name: data.name || '',
        category: data.category || '',
        tipType: data.tipType || '',
        sku: data.sku || '',
        coverImage: data.coverImage || '/images/placeholder.jpg',
        images: data.images || [data.coverImage || '/images/placeholder.jpg'],
        description: data.description || '',
        specifications: {
          length: data.length,
          diameter: data.diameter,
          tipType: data.tipType,
          colors: data.colors,
          features: data.features || [],
        },
        packaging: {
          package: data.package,
          grossWeight: data.grossWeight,
          meas: data.meas,
        },
        moq: data.moq || 0,
        tags: data.tags || [],
        isActive: data.isActive !== false,
        sortOrder: data.sortOrder || 99,
      } as Product
    })
    .filter((product) => product.isActive)
    .sort((a, b) => a.sortOrder - b.sortOrder)

  return products
}

export function getProductById(id: string): Product | undefined {
  return getAllProducts().find((product) => product.id === id)
}

export function getProductsByCategory(categoryId: string): Product[] {
  return getAllProducts().filter((product) => product.category === categoryId)
}

export function searchProducts(keyword: string): Product[] {
  const lowerKeyword = keyword.toLowerCase()
  return getAllProducts().filter(
    (product) =>
      product.name.toLowerCase().includes(lowerKeyword) ||
      product.sku.toLowerCase().includes(lowerKeyword) ||
      product.description.toLowerCase().includes(lowerKeyword) ||
      product.tags.some((tag) => tag.toLowerCase().includes(lowerKeyword))
  )
}
