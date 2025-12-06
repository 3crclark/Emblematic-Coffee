'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-coffee-50/50 via-white to-coffee-50/40">
      {/* Subtle layered textures */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(26,95,63,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(212,175,55,0.1),transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-emblematic-green/5 rounded-full blur-3xl scale-110" />
              <Image
                src="/logo.png"
                alt="Emblematic Coffee"
                width={400}
                height={400}
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
                priority
                style={{ objectFit: 'contain' }}
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-900 mb-6 leading-tight">
              Emblematic Coffee
            </h1>
            <p className="text-lg md:text-xl text-earth-700 mb-4 leading-relaxed">
              Premium Guatemalan coffee, roasted with care
            </p>
            <div className="h-px w-24 bg-gradient-to-r from-emblematic-green to-emblematic-gold mx-auto lg:mx-0 my-8" />
            <p className="text-base text-earth-600 leading-relaxed">
              Two exceptional lines: Premium 100% Guatemalan coffee and Microlot single origin specialty coffee from select regions of Guatemala.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
