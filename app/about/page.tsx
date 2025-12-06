'use client'

import { Footer } from '@/components/Footer'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <div className="relative bg-gradient-to-b from-coffee-50/40 via-white to-coffee-50/30">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(26,95,63,0.2),transparent_70%)]" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <Image
              src="/logo.png"
              alt="Emblematic Coffee"
              width={200}
              height={200}
              className="w-32 h-32 md:w-40 md:h-40"
              style={{ objectFit: 'contain' }}
            />
          </div>

          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-8 text-center">
            About Us
          </h1>

          {/* Mission Story */}
          <div className="bg-white/60 backdrop-blur-sm border border-coffee-200/60 rounded-lg p-8 md:p-12 shadow-sm">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl text-earth-700 leading-relaxed mb-6">
                Emblematic Coffee exists to prove that quality and progress go hand-in-hand.
              </p>
              
              <p className="text-base md:text-lg text-earth-600 leading-relaxed mb-6">
                We partner with Guatemalan coffee farmers, roasters, and manufacturers to bring you extraordinary coffee while building economic opportunity at every step of the supply chain. From the hillside terraces of Huehuetenango to the volcanic soil of Antigua, every bag represents dignified work, fair compensation, and the belief that commerce can be a force for community empowerment.
              </p>
              
              <p className="text-lg md:text-xl text-earth-700 leading-relaxed font-medium">
                Our coffee is emblematic of what is possible when business serves both excellence and equity.
              </p>
            </div>
          </div>

          {/* Decorative divider */}
          <div className="mt-12 flex justify-center">
            <div className="h-px w-24 bg-gradient-to-r from-emblematic-green to-emblematic-gold" />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

