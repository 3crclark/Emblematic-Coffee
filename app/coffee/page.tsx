'use client'

import { useState } from 'react'
import { ProductCard } from '@/components/ProductCard'
import { Footer } from '@/components/Footer'
import { CoffeeFilters } from '@/components/CoffeeFilters'

// Sample coffee products - you can replace this with data from an API or database
const products = [
  {
    id: 'premium-1',
    name: 'Premium Guatemalan Blend',
    description: 'A rich, balanced blend of 100% Guatemalan coffee beans, roasted to perfection.',
    price: 24.99,
    line: 'premium' as const,
  },
  {
    id: 'premium-2',
    name: 'Premium Dark Roast',
    description: 'Bold and full-bodied dark roast with notes of chocolate and caramel.',
    price: 26.99,
    line: 'premium' as const,
  },
  {
    id: 'microlot-1',
    name: 'Huehuetenango Microlot',
    description: 'Single origin specialty coffee from the highlands of Huehuetenango, locally roasted.',
    price: 32.99,
    line: 'microlot' as const,
  },
  {
    id: 'microlot-2',
    name: 'Antigua Valley Microlot',
    description: 'Exceptional single origin coffee from the Antigua Valley, featuring complex flavor notes.',
    price: 34.99,
    line: 'microlot' as const,
  },
  {
    id: 'microlot-3',
    name: 'Atitlán Microlot',
    description: 'Specialty microlot from the Lake Atitlán region, known for its bright acidity and floral notes.',
    price: 33.99,
    line: 'microlot' as const,
  },
]

type FilterType = 'all' | 'premium' | 'microlot'

export default function CoffeePage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')

  const filteredProducts = products.filter((product) => {
    if (activeFilter === 'all') return true
    return product.line === activeFilter
  })

  return (
    <main className="min-h-screen">
      <div className="relative bg-gradient-to-b from-coffee-50/40 via-white to-coffee-50/30">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(26,95,63,0.2),transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-4">
              Our Coffee
            </h1>
            <p className="text-lg text-earth-600 max-w-2xl mb-6">
              Explore our selection of premium and microlot Guatemalan coffees, each carefully selected and locally roasted.
            </p>
            <CoffeeFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-earth-600 text-lg">No products found for this filter.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}

