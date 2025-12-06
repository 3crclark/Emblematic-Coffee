'use client'

import { motion } from 'framer-motion'
import { Lock, Star, Mail, Users, Gift, X } from 'lucide-react'

export function Benefits() {
  const benefits = [
    {
      icon: Lock,
      title: 'Locked-In Pricing',
      description: '$20/month forever (vs $22 regular price). Your founding member rate never increases.',
      color: 'text-accent-orange',
    },
    {
      icon: Star,
      title: 'First to Receive',
      description: 'Be among the first to receive coffee when we launch. You\'re not just a customer—you\'re a founder.',
      color: 'text-yellow-600',
    },
    {
      icon: Mail,
      title: 'Exclusive Updates',
      description: 'Behind-the-scenes photos and stories from origin. See the impact you\'re creating in real-time.',
      color: 'text-blue-600',
    },
    {
      icon: Users,
      title: 'Founding Members Page',
      description: 'Your name (optional) on our founding members page. You\'re part of the story from day one.',
      color: 'text-accent-green',
    },
    {
      icon: Gift,
      title: 'Monthly Impact Reports',
      description: 'Photos, stories, and updates from Maria, Juan, Carlos, and the families you\'re supporting.',
      color: 'text-purple-600',
    },
    {
      icon: X,
      title: 'Cancel Anytime',
      description: 'No commitment, no hassle. Cancel anytime with one click. We\'re here because you want to be here.',
      color: 'text-earth-600',
    },
  ]

  return (
    <section id="benefits" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-4">
            Founding Member Benefits
          </h2>
          <p className="text-xl text-earth-700 max-w-2xl mx-auto">
            Limited to the first 50 members. Join now to lock in these exclusive benefits.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-coffee-50 p-6 rounded-lg border border-coffee-200 hover:shadow-lg transition-shadow"
              >
                <Icon className={`w-8 h-8 ${benefit.color} mb-4`} />
                <h3 className="text-xl font-bold text-coffee-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-earth-700 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Urgency CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-accent-orange to-accent-orange/80 p-8 md:p-12 rounded-lg text-center text-white shadow-xl"
        >
          <h3 className="text-3xl font-bold mb-4">
            Only 50 Founding Spots Available
          </h3>
          <p className="text-xl mb-6 opacity-95">
            Once we hit 50 members, founding pricing closes forever. Don&apos;t miss out.
          </p>
          <motion.a
            href="#signup"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-white text-accent-orange font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Reserve Your Spot Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

