'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, CheckCircle2, Loader2, ArrowRight } from 'lucide-react'

const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

const detailsSchema = z.object({
  name: z.string().optional(),
  interests: z.array(z.string()).optional(),
  referralSource: z.string().optional(),
  subscribeToUpdates: z.boolean().default(true),
})

type EmailFormData = z.infer<typeof emailSchema>
type DetailsFormData = z.infer<typeof detailsSchema>

export function SignupForm() {
  const [step, setStep] = useState<'email' | 'details' | 'success'>('email')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [emailData, setEmailData] = useState<EmailFormData | null>(null)

  const emailForm = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  })

  const detailsForm = useForm<DetailsFormData>({
    resolver: zodResolver(detailsSchema),
    defaultValues: {
      subscribeToUpdates: true,
    },
  })

  const onEmailSubmit = async (data: EmailFormData) => {
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: data.email }),
      })

      const result = await response.json()

      if (!response.ok) {
        if (response.status === 409) {
          // Duplicate email - still show success
          setStep('success')
          setEmailData(data)
          return
        }
        throw new Error(result.error || 'Something went wrong')
      }

      setEmailData(data)
      setStep('details')
    } catch (err: any) {
      setError(err.message || 'Failed to submit. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const onDetailsSubmit = async (data: DetailsFormData) => {
    if (!emailData) return

    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: emailData.email,
          ...data,
        }),
      })

      if (!response.ok) {
        const result = await response.json()
        throw new Error(result.error || 'Something went wrong')
      }

      setStep('success')
      
      // Track conversion
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
          event_category: 'Signup',
          event_label: 'Founding Member',
        })
      }
    } catch (err: any) {
      setError(err.message || 'Failed to submit. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="signup" className="py-20 md:py-32 bg-gradient-to-b from-coffee-50 to-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-4">
            Join the Founding Members
          </h2>
          <p className="text-xl text-earth-700">
            Lock in $20/month founding pricing. Limited to 50 spots.
          </p>
        </motion.div>

        <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl">
          <AnimatePresence mode="wait">
            {step === 'email' && (
              <motion.div
                key="email"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <form onSubmit={emailForm.handleSubmit(onEmailSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-coffee-900 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-earth-400 w-5 h-5" />
                      <input
                        {...emailForm.register('email')}
                        type="email"
                        id="email"
                        placeholder="you@example.com"
                        className="w-full pl-10 pr-4 py-4 border-2 border-coffee-200 rounded-lg focus:border-accent-orange focus:outline-none text-lg transition-colors"
                        disabled={isSubmitting}
                      />
                    </div>
                    {emailForm.formState.errors.email && (
                      <p className="mt-2 text-sm text-red-600">
                        {emailForm.formState.errors.email.message}
                      </p>
                    )}
                  </div>

                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent-orange text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Reserve My Spot
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-sm text-earth-600 text-center">
                    We respect your inbox. Unsubscribe anytime.
                  </p>
                </form>
              </motion.div>
            )}

            {step === 'details' && (
              <motion.div
                key="details"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6 p-4 bg-accent-green/10 border border-accent-green/20 rounded-lg">
                  <div className="flex items-center gap-2 text-accent-green">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-medium">Email confirmed!</span>
                  </div>
                </div>

                <form onSubmit={detailsForm.handleSubmit(onDetailsSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-coffee-900 mb-2">
                      Name (Optional)
                    </label>
                    <input
                      {...detailsForm.register('name')}
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="w-full px-4 py-3 border-2 border-coffee-200 rounded-lg focus:border-accent-orange focus:outline-none transition-colors"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-coffee-900 mb-3">
                      Why are you interested? (Optional)
                    </label>
                    <div className="space-y-2">
                      {[
                        'Love specialty coffee',
                        'Care about impact',
                        'Want to support farmers',
                        'All of the above',
                      ].map((interest) => (
                        <label key={interest} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            value={interest}
                            {...detailsForm.register('interests')}
                            className="w-4 h-4 text-accent-orange border-coffee-300 rounded focus:ring-accent-orange"
                            disabled={isSubmitting}
                          />
                          <span className="text-earth-700">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="referralSource" className="block text-sm font-medium text-coffee-900 mb-2">
                      How did you hear about us? (Optional)
                    </label>
                    <select
                      {...detailsForm.register('referralSource')}
                      id="referralSource"
                      className="w-full px-4 py-3 border-2 border-coffee-200 rounded-lg focus:border-accent-orange focus:outline-none transition-colors"
                      disabled={isSubmitting}
                    >
                      <option value="">Select one...</option>
                      <option value="social-media">Social Media</option>
                      <option value="friend">Friend/Family</option>
                      <option value="search">Google Search</option>
                      <option value="podcast">Podcast</option>
                      <option value="newsletter">Newsletter</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        {...detailsForm.register('subscribeToUpdates')}
                        className="w-4 h-4 text-accent-orange border-coffee-300 rounded focus:ring-accent-orange"
                        disabled={isSubmitting}
                      />
                      <span className="text-earth-700">
                        Subscribe to updates and impact stories (recommended)
                      </span>
                    </label>
                  </div>

                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent-orange text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        I&apos;m In - Reserve My Founding Membership
                        <CheckCircle2 className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            )}

            {step === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="inline-block mb-6"
                >
                  <div className="w-20 h-20 bg-accent-green rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-12 h-12 text-white" />
                  </div>
                </motion.div>

                <h3 className="text-3xl font-bold text-coffee-900 mb-4">
                  You&apos;re In! 🎉
                </h3>
                <p className="text-xl text-earth-700 mb-6">
                  Welcome to the founding members of [Company Name].
                </p>
                <div className="bg-coffee-50 p-6 rounded-lg text-left space-y-3 text-earth-800">
                  <p>
                    <strong>What happens next:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>You&apos;ll receive a confirmation email shortly</li>
                    <li>Over the next few weeks, you&apos;ll get behind-the-scenes updates from Guatemala</li>
                    <li>We launch in [Launch Date]</li>
                    <li>Your first bag ships with a personal note and the stories of the people who made it</li>
                  </ul>
                  <p className="pt-2">
                    <strong>Your subscription will directly fund jobs</strong> for farmers, roasters, and packaging workers in rural Guatemala. We&apos;ll show you exactly where every dollar goes.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

