'use client'

import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'
import { ShoppingCart } from 'lucide-react'

export function Navigation() {
  const { totalItems } = useCart()

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-coffee-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-semibold text-coffee-900">
            Emblematic Coffee
          </Link>
          
          <div className="flex items-center gap-6">
            <Link
              href="/coffee"
              className="text-coffee-700 hover:text-coffee-900 transition-colors"
            >
              Coffee
            </Link>
            <Link
              href="/about"
              className="text-coffee-700 hover:text-coffee-900 transition-colors"
            >
              About
            </Link>
            <Link
              href="/cart"
              className="relative text-coffee-700 hover:text-coffee-900 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-emblematic-green text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

