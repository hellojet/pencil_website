import { Category } from '@/types/product'

export const CATEGORIES: Category[] = [
  {
    id: 'acrylic-marker',
    name: 'Acrylic Marker',
    description: 'Hi-tech acrylic markers with pointed brush tip, featuring fiber soft head and creamy texture for smooth color layering.',
    coverImage: '/images/categories/acrylic-marker.jpg',
  },
  {
    id: 'metallic-marker',
    name: 'Metallic Marker',
    description: 'Stunning metallic acrylic markers with brilliant shimmer effect, perfect for art projects and decorative writing.',
    coverImage: '/images/categories/metallic-marker.jpg',
  },
  {
    id: 'acrylic-marker-pp',
    name: 'Acrylic Marker (PP Series)',
    description: 'Hi-tech acrylic markers with PP barrel, offering superior durability and a wide range of color options.',
    coverImage: '/images/categories/acrylic-marker-pp.jpg',
  },
  {
    id: 'double-headed',
    name: 'Double Headed Marker',
    description: 'Versatile double-headed acrylic markers combining two tip types in one pen for maximum creative flexibility.',
    coverImage: '/images/categories/double-headed.jpg',
  },
  {
    id: 'brush-soft-pens',
    name: 'Brush & Soft Pens',
    description: 'Professional brush pens, soft pens and glitter brushes for expressive painting and calligraphy.',
    coverImage: '/images/categories/brush-soft-pens.jpg',
  },
  {
    id: 'chalk-highlighter',
    name: 'Chalk & Highlighter',
    description: 'Liquid chalk pens, highlighters and dual-tip acrylic pens for signage, glass writing and highlighting.',
    coverImage: '/images/categories/chalk-highlighter.jpg',
  },
  {
    id: 'paint-sticks',
    name: 'Paint Sticks',
    description: 'Solid paint sticks in classic, macaron, metallic and neon colors — mess-free painting for all ages.',
    coverImage: '/images/categories/paint-sticks.jpg',
  },
  {
    id: 'crayon-clear',
    name: 'Crayon Clear',
    description: 'Crystal-clear crayon sets with vibrant, transparent colors ideal for layering and blending effects.',
    coverImage: '/images/categories/crayon-clear.jpg',
  },
]

export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find((category) => category.id === id)
}
