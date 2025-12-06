export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-coffee-900 mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none text-earth-700 space-y-6">
          <p className="text-sm text-earth-600">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-coffee-900 mt-8 mb-4">Agreement to Terms</h2>
            <p>
              By accessing or using [Company Name]&apos;s website and services, you agree to be bound by these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-coffee-900 mt-8 mb-4">Founding Member Subscription</h2>
            <p>
              As a founding member, you agree to:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Pay $20/month for your coffee subscription</li>
              <li>Receive monthly coffee deliveries</li>
              <li>Cancel anytime with no commitment</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-coffee-900 mt-8 mb-4">Cancellation Policy</h2>
            <p>
              You may cancel your subscription at any time. Cancellations take effect at the end of your current billing cycle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-coffee-900 mt-8 mb-4">Refund Policy</h2>
            <p>
              If you&apos;re not satisfied with your coffee, contact us within 30 days of receipt for a full refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-coffee-900 mt-8 mb-4">Limitation of Liability</h2>
            <p>
              [Company Name] shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-coffee-900 mt-8 mb-4">Contact Us</h2>
            <p>
              If you have questions about these Terms, please contact us at:
            </p>
            <p>
              <a href="mailto:hello@[your-domain].com" className="text-accent-orange hover:underline">
                hello@[your-domain].com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

