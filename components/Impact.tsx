'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { TrendingUp, Users, Target, Heart } from 'lucide-react'

export function Impact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [subscribers, setSubscribers] = useState(0)
  const [jobsSupported, setJobsSupported] = useState(0)

  // Simulate counting animation
  useEffect(() => {
    if (isInView) {
      // In production, fetch real data from API
      const targetSubscribers = 12 // Example: current signups
      const targetJobs = Math.floor(targetSubscribers * 0.18) // 18% of a job per subscriber

      const duration = 2000
      const steps = 60
      const increment = targetSubscribers / steps
      const jobIncrement = targetJobs / steps

      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= targetSubscribers) {
          setSubscribers(targetSubscribers)
          setJobsSupported(targetJobs)
          clearInterval(timer)
        } else {
          setSubscribers(Math.floor(current))
          setJobsSupported(Math.floor(current * 0.18))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView])

  const breakdown = [
    { label: 'To Farmers', amount: 12, color: 'bg-accent-green', percentage: 60 },
    { label: 'To Roasters', amount: 5, color: 'bg-accent-orange', percentage: 25 },
    { label: 'To Packaging', amount: 2, color: 'bg-coffee-500', percentage: 10 },
    { label: 'Shipping & Operations', amount: 1, color: 'bg-earth-400', percentage: 5 },
  ]

  return (
    <section id="impact" className="py-20 md:py-32 bg-gradient-to-b from-coffee-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-4">
            Where Your Money Goes
          </h2>
          <p className="text-xl text-earth-700 max-w-2xl mx-auto">
            Every $20 subscription directly funds jobs in rural Guatemala. Here&apos;s the breakdown:
          </p>
        </motion.div>

        {/* Impact Stats */}
        <div ref={ref} className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <Users className="w-12 h-12 text-accent-orange mx-auto mb-4" />
            <div className="text-4xl font-bold text-coffee-900 mb-2">
              {subscribers}
            </div>
            <div className="text-earth-600">Current Subscribers</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <Target className="w-12 h-12 text-accent-green mx-auto mb-4" />
            <div className="text-4xl font-bold text-coffee-900 mb-2">
              {jobsSupported.toFixed(1)}
            </div>
            <div className="text-earth-600">Jobs Supported</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <TrendingUp className="w-12 h-12 text-coffee-600 mx-auto mb-4" />
            <div className="text-4xl font-bold text-coffee-900 mb-2">10</div>
            <div className="text-earth-600">Goal: Full-Time Jobs</div>
          </motion.div>
        </div>

        {/* Breakdown Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-lg shadow-xl mb-12"
        >
          <h3 className="text-2xl font-bold text-coffee-900 mb-8 text-center">
            $20 Subscription Breakdown
          </h3>
          
          <div className="space-y-4">
            {breakdown.map((item, index) => (
              <div key={item.label} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-earth-800">{item.label}</span>
                  <span className="text-coffee-900 font-semibold">${item.amount}</span>
                </div>
                <div className="w-full bg-earth-100 rounded-full h-4 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full ${item.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Personal Impact Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-accent-orange/10 to-accent-green/10 p-8 md:p-12 rounded-lg border-2 border-accent-orange/20"
        >
          <div className="flex items-start gap-4">
            <Heart className="w-8 h-8 text-accent-orange flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-coffee-900 mb-4">
                Your Direct Impact
              </h3>
              <p className="text-lg text-earth-800 leading-relaxed">
                <strong>Your subscription funds 18% of Maria&apos;s monthly income as a roaster.</strong> That&apos;s not a statistic—that&apos;s a real person, a real family, and a real transformation happening because you chose to subscribe.
              </p>
              <p className="text-lg text-earth-800 mt-4 leading-relaxed">
                As we grow, you&apos;ll receive monthly updates with photos and stories from Maria, Juan, Carlos, and the other families whose lives are changing because of your support.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

