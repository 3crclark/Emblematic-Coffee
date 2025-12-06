'use client'

import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-coffee-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Emblematic Coffee"
              width={120}
              height={120}
              className="w-24 h-24 opacity-90"
              style={{ objectFit: 'contain' }}
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 text-center md:text-right">
            <h3 className="text-xl font-semibold mb-2 text-coffee-100">Emblematic Coffee</h3>
            <p className="text-coffee-300 text-sm mb-4">
              Premium Guatemalan coffee
            </p>
            <div className="text-xs text-coffee-400">
              © {new Date().getFullYear()} Emblematic Coffee. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
