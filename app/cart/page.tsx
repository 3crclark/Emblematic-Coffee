'use client'

import { useCart } from '@/contexts/CartContext'
import { Footer } from '@/components/Footer'
import { Minus, Plus, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart()
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      })

      const { url } = await response.json()
      
      if (url) {
        window.location.href = url // Redirect to Stripe Checkout
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen">
        <div className="relative bg-gradient-to-b from-coffee-50/40 via-white to-coffee-50/30">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(26,95,63,0.2),transparent_70%)]" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-coffee-900 mb-4">Your Cart</h1>
              <p className="text-earth-600 mb-8">Your cart is empty.</p>
              <Link
                href="/coffee"
                className="inline-block px-6 py-3 bg-coffee-900 text-white rounded-lg hover:bg-coffee-800 transition-colors font-medium"
              >
                Browse Coffee
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <div className="relative bg-gradient-to-b from-coffee-50/40 via-white to-coffee-50/30">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(26,95,63,0.2),transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-coffee-900">Your Cart</h1>
            <button
              onClick={clearCart}
              className="text-sm text-earth-600 hover:text-coffee-900 transition-colors"
            >
              Clear cart
            </button>
          </div>

          <div className="space-y-4 mb-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-6 bg-white/60 backdrop-blur-sm border border-coffee-200/60 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-coffee-900 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-earth-600 mb-2">{item.description}</p>
                  <p className="text-lg font-semibold text-coffee-900">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3 border border-coffee-200 rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 hover:bg-coffee-50 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 text-coffee-900 font-medium min-w-[3rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-coffee-50 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-earth-600 hover:text-coffee-900 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-coffee-200 pt-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xl font-semibold text-coffee-900">Total</span>
              <span className="text-2xl font-bold text-coffee-900">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <button 
              onClick={handleCheckout}
              disabled={loading}
              className="w-full px-6 py-4 bg-coffee-900 text-white rounded-lg hover:bg-coffee-800 transition-colors font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : 'Proceed to Checkout'}
            </button>
            <Link
              href="/coffee"
              className="block text-center mt-4 text-coffee-700 hover:text-coffee-900 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
