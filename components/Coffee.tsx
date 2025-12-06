'use client'

import { motion } from 'framer-motion'
import { Award, Mountain, Droplets, Coffee as CoffeeIcon } from 'lucide-react'

export function Coffee() {
  const features = [
    {
      icon: Award,
      title: '86-87 Points',
      description: 'Specialty Grade - Excellent',
      color: 'text-yellow-600',
    },
    {
      icon: Mountain,
      title: '1,600m Altitude',
      description: 'High-grown in Guatemalan mountains',
      color: 'text-green-600',
    },
    {
      icon: Droplets,
      title: 'Washed Process',
      description: 'Clean, bright, complex flavors',
      color: 'text-blue-600',
    },
    {
      icon: CoffeeIcon,
      title: 'Roasted at Origin',
      description: 'Maximum freshness, maximum impact',
      color: 'text-coffee-600',
    },
  ]

  return (
    <section id="coffee" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-4">
            The Coffee
          </h2>
          <p className="text-xl text-earth-700 max-w-2xl mx-auto">
            Exceptional quality, exceptional impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-coffee-400 via-coffee-500 to-coffee-600 flex items-center justify-center"
          >
            <div className="text-center text-white p-12">
              <div className="text-6xl mb-4">☕</div>
              <p className="text-lg font-semibold mb-2">Coffee Product Photo</p>
              <p className="text-sm text-coffee-100">Add your product image here</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-coffee-900 mb-4">
                86-87 Points (Specialty - Excellent Grade)
              </h3>
              <p className="text-lg text-earth-700 leading-relaxed font-serif">
                Our coffee consistently scores 86-87 points on the Specialty Coffee Association scale—the gold standard for exceptional coffee. This isn&apos;t just good coffee; it&apos;s world-class.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-coffee-800 mb-2">Origin</h4>
                <p className="text-earth-700">
                  Grown in the high-altitude regions of Guatemala, where volcanic soil and perfect climate create ideal conditions for specialty coffee.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-coffee-800 mb-2">Varietals</h4>
                <p className="text-earth-700">
                  Primarily Bourbon and Caturra varietals, known for their complex flavor profiles and bright acidity.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-coffee-800 mb-2">Tasting Notes</h4>
                <p className="text-earth-700">
                  Chocolate, citrus, and caramel with a clean, bright finish. Perfect for both pour-over and espresso.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Why Roasted at Origin */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-coffee-50 p-8 md:p-12 rounded-lg mb-12"
        >
          <h3 className="text-2xl font-bold text-coffee-900 mb-4">
            Why Roasted at Origin Matters
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-earth-800">
            <div>
              <h4 className="font-semibold mb-2 text-coffee-800">For You</h4>
              <p className="leading-relaxed">
                Coffee roasted within days of harvest, not months. Maximum freshness, maximum flavor. You taste the difference.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-coffee-800">For Guatemala</h4>
              <p className="leading-relaxed">
                Roasting creates jobs. Packaging creates jobs. Every step that happens in Guatemala means more value stays in Guatemala. That&apos;s the mission.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center border border-coffee-100"
              >
                <Icon className={`w-10 h-10 ${feature.color} mx-auto mb-4`} />
                <h4 className="font-bold text-coffee-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-earth-600">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

