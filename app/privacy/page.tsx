export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-coffee-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none text-earth-700 space-y-6">
          <p className="text-sm text-earth-600">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-coffee-900 mt-8 mb-4">Information We Collect</h2>
            <p>
              We collect information you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Email address</li>
              <li>Name (optional)</li>
              <li>Interests and preferences</li>
              <li>Referral source information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-coffee-900 mt-8 mb-4">How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Process your founding member subscription</li>
              <li>Send you updates about our launch and impact stories</li>
              <li>Improve our services and website</li>
              <li>Communicate with you about your subscription</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-coffee-900 mt-8 mb-4">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-coffee-900 mt-8 mb-4">Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Access your personal information</li>
              <li>Request correction of your information</li>
              <li>Request deletion of your information</li>
              <li>Unsubscribe from our emails at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-coffee-900 mt-8 mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
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

