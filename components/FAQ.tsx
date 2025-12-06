'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'When will I receive my first bag?',
    answer: 'We launch in [Launch Date]. Your first bag ships within 3-5 business days of launch, and then monthly thereafter. You\'ll receive tracking information via email.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Absolutely. There\'s no commitment—cancel anytime from your account with one click. We\'re here because you want to be here, not because you\'re locked in.',
  },
  {
    question: 'How is this different from other coffee subscriptions?',
    answer: 'Three key differences: (1) We roast at origin, so maximum value stays in Guatemala, (2) You know exactly whose job you\'re funding—we share names, photos, and stories, (3) Every subscription directly creates jobs, not just "supports farmers" in vague terms.',
  },
  {
    question: 'How do I know my money is really creating impact?',
    answer: 'Transparency is core to our mission. You\'ll receive monthly impact reports with photos, stories, and specific details about the jobs your subscription funds. We\'ll show you exactly where every dollar goes—$12 to farmers, $5 to roasters, $2 to packaging, etc.',
  },
  {
    question: 'What if I don\'t like the coffee?',
    answer: 'We stand behind our coffee 100%. If you\'re not satisfied, contact us within 30 days and we\'ll refund your subscription—no questions asked. We\'re confident you\'ll love it, but your satisfaction is our priority.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'We\'re starting US-only for our launch to ensure quality and freshness. International shipping is on our roadmap—sign up for updates to be notified when we expand.',
  },
  {
    question: 'Is the coffee organic/Fair Trade certified?',
    answer: 'Our coffee is grown using sustainable practices, though we\'re not currently certified organic or Fair Trade. However, our direct-trade model ensures farmers receive significantly more than Fair Trade minimums, and we maintain direct relationships with every farmer we work with.',
  },
  {
    question: 'How fresh is the coffee when I receive it?',
    answer: 'We roast to order, so your coffee is roasted within days of shipping—not months. Most coffee you buy in stores was roasted 3-6 months ago. Ours is roasted fresh, shipped immediately, and arrives at peak flavor. We include the roast date on every bag.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 md:py-32 bg-gradient-to-b from-white to-coffee-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-earth-700">
            Everything you need to know
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-coffee-50 transition-colors"
              >
                <span className="font-semibold text-coffee-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-coffee-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-5 text-earth-700 leading-relaxed border-t border-coffee-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-earth-700 mb-4">
            Still have questions?
          </p>
          <a
            href="mailto:hello@[your-domain].com"
            className="text-accent-orange font-semibold hover:underline"
          >
            Contact us at hello@[your-domain].com
          </a>
        </motion.div>
      </div>
    </section>
  )
}

