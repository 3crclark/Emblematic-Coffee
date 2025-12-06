'use client'

import { motion } from 'framer-motion'

export function Story() {
  return (
    <section id="story" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-6">
              The Story Behind Every Bag
            </h2>
            
            <div className="space-y-6 text-lg text-earth-700 leading-relaxed font-serif">
              <p>
                I&apos;m [Founder Name], and I&apos;m building this company because I believe coffee can do more than just taste good—it can transform lives.
              </p>
              
              <p>
                After years at Wharton, I found myself in the mountains of Guatemala, meeting farmers who grow some of the world&apos;s best coffee but struggle to make ends meet. The traditional supply chain extracts value at every step, leaving farmers with pennies while consumers pay premium prices.
              </p>
              
              <p>
                That&apos;s when I decided to do things differently. Instead of shipping green beans to be roasted thousands of miles away, we roast at origin—right where the coffee grows. This means more value stays in Guatemala, creating real jobs for real families.
              </p>
              
              <p className="font-semibold text-coffee-800">
                Every subscription funds specific, named jobs. You&apos;ll know exactly whose income you&apos;re supporting—Maria the roaster, Juan the farmer, Carlos the packaging coordinator. This is personal.
              </p>
            </div>
          </motion.div>

          {/* Image Placeholders */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-coffee-200 to-coffee-400 flex items-center justify-center">
              <div className="text-center text-coffee-800 p-8">
                <div className="text-4xl mb-2">📸</div>
                <p className="text-sm font-medium">Founder Photo</p>
                <p className="text-xs text-coffee-700 mt-1">Add your image here</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-coffee-300 to-coffee-500 flex items-center justify-center">
              <div className="text-center text-coffee-900 p-8">
                <div className="text-4xl mb-2">🌱</div>
                <p className="text-sm font-medium">Origin Photo</p>
                <p className="text-xs text-coffee-800 mt-1">Add your image here</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

