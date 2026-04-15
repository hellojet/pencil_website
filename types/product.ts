export interface ProductSpecifications {
  length?: string
  diameter?: string
  tipType?: string
  inkType?: string
  colors?: number
  features?: string[]
}

export interface ProductPackaging {
  package?: string
  grossWeight?: string
  meas?: string
}

export interface Product {
  id: string
  name: string
  category: string
  tipType?: string
  sku: string
  coverImage: string
  images: string[]
  description: string
  specifications: ProductSpecifications
  packaging: ProductPackaging
  moq: number
  tags: string[]
  isActive: boolean
  sortOrder: number
}

export interface Category {
  id: string
  name: string
  description: string
  coverImage: string
}
