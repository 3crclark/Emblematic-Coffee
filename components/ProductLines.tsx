'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function ProductLines() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-coffee-50/30 to-white">
      {/* Subtle accent */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_30%_50%,rgba(26,95,63,0.2),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 mb-4">
            Our Coffee Lines
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-emblematic-green to-emblematic-gold mx-auto mb-6" />
          <Link
            href="/coffee"
            className="inline-block px-6 py-3 bg-coffee-900 text-white rounded-lg hover:bg-coffee-800 transition-colors font-medium"
          >
            Browse All Coffee
          </Link>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Premium Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-coffee-50 p-8 rounded-lg border border-coffee-200 hover:border-emblematic-green/30 transition-colors"
          >
            <h3 className="text-2xl font-semibold text-coffee-900 mb-3">
              Premium
            </h3>
            <div className="h-px w-16 bg-emblematic-green/20 mb-4" />
            <p className="text-earth-700 text-lg leading-relaxed">
              100% Guatemalan coffee
            </p>
          </motion.div>

          {/* Microlot Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-coffee-50 p-8 rounded-lg border border-coffee-200 hover:border-emblematic-green/30 transition-colors"
          >
            <h3 className="text-2xl font-semibold text-coffee-900 mb-3">
              Microlot
            </h3>
            <div className="h-px w-16 bg-emblematic-gold/30 mb-4" />
            <p className="text-earth-700 text-lg leading-relaxed">
              Single origin, locally roasted specialty coffee from select regions of Guatemala
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
