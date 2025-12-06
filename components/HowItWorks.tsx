'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Coffee, Package, Heart } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: CheckCircle2,
      title: 'Subscribe as Founding Member',
      description: 'Lock in $20/month pricing for life. No commitment—cancel anytime.',
      color: 'bg-accent-orange',
    },
    {
      number: '02',
      icon: Coffee,
      title: 'Coffee Roasted to Order',
      description: 'Fresh from the Guatemalan mountains, roasted just for you when you order.',
      color: 'bg-accent-green',
    },
    {
      number: '03',
      icon: Package,
      title: 'Delivered Monthly',
      description: 'Arrives at your door with impact updates and stories from the farmers.',
      color: 'bg-coffee-500',
    },
  ]

  const faqs = [
    {
      q: 'When will I receive my first bag?',
      a: 'We launch in [Launch Date]. Your first bag ships within 3-5 business days of launch, and then monthly thereafter.',
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Absolutely. No commitment, no hassle. Cancel anytime from your account.',
    },
    {
      q: 'How fresh is the coffee?',
      a: 'We roast to order, so your coffee is roasted within days of shipping—not months. Maximum freshness guaranteed.',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-gradient-to-b from-white to-coffee-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-earth-700 max-w-2xl mx-auto">
            Simple, transparent, impactful
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-lg shadow-lg h-full border-t-4 border-accent-orange">
                  <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-6xl font-bold text-coffee-100 absolute top-4 right-4 -z-10">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-coffee-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-earth-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Quick FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-bold text-coffee-900 mb-8 text-center">
            Common Questions
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-2">
                <h4 className="font-semibold text-coffee-800">{faq.q}</h4>
                <p className="text-earth-700 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

