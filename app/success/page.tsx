'use client'

import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export default function SuccessPage() {
  return (
    <main className="min-h-screen">
      <div className="relative bg-gradient-to-b from-coffee-50/40 via-white to-coffee-50/30">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(26,95,63,0.2),transparent_70%)]" />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-coffee-900 mb-4">
            Order Confirmed!
          </h1>
          <p className="text-lg text-earth-600 mb-8">
            Thank you for your order. We'll send you an email confirmation shortly.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-coffee-900 text-white rounded-lg hover:bg-coffee-800 transition-colors font-medium"
          >
            Return Home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
