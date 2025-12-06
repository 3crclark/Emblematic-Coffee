'use client'

import { motion } from 'framer-motion'
import { Quote, Award, GraduationCap } from 'lucide-react'

export function SocialProof() {
  const testimonials = [
    {
      quote: 'This is exactly the kind of coffee company I want to support. Quality coffee with real impact.',
      author: 'Sarah M.',
      role: 'Early Supporter',
    },
    {
      quote: 'The transparency about where the money goes is refreshing. I know exactly who I\'m helping.',
      author: 'Michael T.',
      role: 'Founding Member',
    },
    {
      quote: 'Finally, a coffee subscription that tastes amazing AND does good. Count me in.',
      author: 'Jessica L.',
      role: 'Coffee Enthusiast',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-4">
            What Early Supporters Are Saying
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-coffee-50 p-8 rounded-lg border border-coffee-200"
            >
              <Quote className="w-8 h-8 text-coffee-400 mb-4" />
              <p className="text-earth-800 mb-6 leading-relaxed font-serif italic">
                &quot;{testimonial.quote}&quot;
              </p>
              <div>
                <div className="font-semibold text-coffee-900">{testimonial.author}</div>
                <div className="text-sm text-earth-600">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <Award className="w-12 h-12 text-accent-orange mx-auto mb-4" />
            <h3 className="font-bold text-coffee-900 mb-2">86-87 Points</h3>
            <p className="text-earth-600">Specialty Coffee Association</p>
          </div>
          <div className="text-center">
            <GraduationCap className="w-12 h-12 text-accent-orange mx-auto mb-4" />
            <h3 className="font-bold text-coffee-900 mb-2">Wharton JD/MBA</h3>
            <p className="text-earth-600">Built by [Founder Name]</p>
          </div>
          <div className="text-center">
            <Quote className="w-12 h-12 text-accent-orange mx-auto mb-4" />
            <h3 className="font-bold text-coffee-900 mb-2">Direct Trade</h3>
            <p className="text-earth-600">On-the-ground farmer relationships</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

