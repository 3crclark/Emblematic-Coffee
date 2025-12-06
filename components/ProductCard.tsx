'use client'

import { motion } from 'framer-motion'
import { useCart } from '@/contexts/CartContext'
import { Plus } from 'lucide-react'

interface Product {
  id: string
  name: string
  description: string
  price: number
  line: 'premium' | 'microlot'
}

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white/80 backdrop-blur-sm border border-coffee-200/60 rounded-lg overflow-hidden hover:shadow-xl hover:border-coffee-300/60 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="p-6">
        <div className="mb-4">
          <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
            product.line === 'premium' 
              ? 'bg-emblematic-green/10 text-emblematic-green' 
              : 'bg-emblematic-gold/20 text-amber-800'
          }`}>
            {product.line === 'premium' ? 'Premium' : 'Microlot'}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold text-coffee-900 mb-2">
          {product.name}
        </h3>
        
        <p className="text-earth-600 text-sm mb-4 leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-coffee-900">
            ${product.price.toFixed(2)}
          </span>
          
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 px-4 py-2 bg-coffee-900 text-white rounded-lg hover:bg-coffee-800 transition-colors text-sm font-medium"
          >
            <Plus className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  )
}

