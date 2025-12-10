export default function OriginPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="font-[family-name:var(--font-crimson)] text-earth-900 mb-6">
          Thank You For Being Part of Our Origin Story
        </h1>
        <p className="text-xl text-earth-700 mb-12 max-w-3xl mx-auto">
          You received this gift because you're a valued part of my community. Here's where it all began.
        </p>
        
        {/* PHOTO PLACEHOLDER 1 */}
        <div className="w-full h-96 bg-coffee-100 rounded-lg flex items-center justify-center mb-16 border border-coffee-200">
          <span className="text-coffee-500 text-lg">Image from Guatemala - water project or landscape</span>
        </div>
      </section>

      {/* The Story Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-wide text-accent-orange font-semibold mb-2">The Story</p>
            <h2 className="font-[family-name:var(--font-crimson)] text-earth-900 mb-6">
              From Silicon Valley to Guatemalan Villages
            </h2>
          </div>
          
          <div className="space-y-4 text-earth-700 leading-relaxed text-lg">
            <p>
              In August 2025, I left my digital world in San Francisco for a week-long missions trip to Guatemala. 
              Working with my hands to install water systems for 8 farming families - substantially improving their 
              access to water and ability to grow crops - was life-giving. I knew I'd return.
            </p>
            
            <p>
              In November, I went back for five weeks. Installing more water systems. Building structures for livestock. 
              Electrifying homes with solar panels. And somewhere between the work and the mountains, I fell in love 
              with cappuccinos.
            </p>
            
            <p>
              I tested bean varieties. Studied profiles. And with persistent inquiry, I met several farming families 
              growing microlot coffee that consistently ranks as specialty grade.
            </p>
          </div>

          {/* PHOTO PLACEHOLDER 2 */}
          <div className="w-full h-96 bg-coffee-100 rounded-lg flex items-center justify-center mt-12 border border-coffee-200">
            <span className="text-coffee-500 text-lg">Coffee roasting operation or farmer</span>
          </div>
        </div>
      </section>

      {/* What is Emblematic Coffee Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-wide text-accent-orange font-semibold mb-2">What is Emblematic Coffee</p>
            <h2 className="font-[family-name:var(--font-crimson)] text-earth-900 mb-6">
              Keeping Value Where It Belongs
            </h2>
          </div>
          
          <div className="space-y-6 text-earth-700 leading-relaxed text-lg">
            <p>
              Every bag you hold was picked by one of two small farmers in the mountainous Huehuetenango region - 
              the sum of which represents more than half their annual production. Small batch roasted in Guatemala City. 
              Hand sorted for quality. Packaged by me.
            </p>
            
            <p>
              <strong className="text-earth-900 font-semibold">Here's what's broken:</strong> Coffee farming is notoriously exploitative. Green beans are commoditized. 
              Farmers get rock bottom prices. Value extracts to destination countries.
            </p>
            
            <p>
              <strong className="text-earth-900 font-semibold">Here's what we're doing differently:</strong> Emblematic Coffee pays 20% more for green beans. 
              We work with local roasters to develop ideal profiles. We contract with Guatemalan packaging companies. 
              More value stays in Guatemala - driving income growth, economic mobility, and healthy commercial relationships.
            </p>
            
            <p>
              <strong className="text-earth-900 font-semibold">And:</strong> 20% of our microlot profits fund future water projects.
            </p>
          </div>

          {/* PHOTO PLACEHOLDER 3 */}
          <div className="w-full h-96 bg-coffee-100 rounded-lg flex items-center justify-center mt-12 border border-coffee-200">
            <span className="text-coffee-500 text-lg">Packaged bags or green beans</span>
          </div>
        </div>
      </section>

      {/* The Invitation Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-coffee-50 rounded-lg shadow-sm p-8 md:p-12">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-wide text-accent-orange font-semibold mb-2">The Invitation</p>
            <h2 className="font-[family-name:var(--font-crimson)] text-earth-900 mb-6">
              Experience Guatemala, One Month at a Time
            </h2>
          </div>
          
          <div className="space-y-4 text-earth-700 leading-relaxed text-lg">
            <p>
              Beginning March 2026, we're offering a 6 month sampler. Subscribers receive 350g of freshly roasted, 
              whole bean coffee - a different single origin each month, delivered to your door.
            </p>
            
            <p>
              You'll learn about the family behind your beans. Their sustainable growing practices. What this partnership, 
              and your contribution, means to them.
            </p>
          </div>
        </div>
      </section>

      {/* The Best Part Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-wide text-accent-orange font-semibold mb-2">The Best Part</p>
            <h2 className="font-[family-name:var(--font-crimson)] text-earth-900 mb-6">
              Come to Guatemala With Us
            </h2>
          </div>
          
          <div className="space-y-4 text-earth-700 leading-relaxed text-lg mb-8">
            <p>
              6-month sampler subscribers can opt into a sweepstakes for a week-long trip to Guatemala. The winner will:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-earth-700">
              <li>Pick coffee with farming families</li>
              <li>Roast beans at our partner facility</li>
              <li>Hand-sort and package</li>
              <li>Immerse in local culture</li>
            </ul>
            
            <p className="font-semibold text-earth-900">
              This isn't a resort vacation. This is the real Guatemala - and the real story behind your coffee.
            </p>
          </div>

          {/* PHOTO PLACEHOLDER 4 */}
          <div className="w-full h-96 bg-coffee-100 rounded-lg flex items-center justify-center border border-coffee-200">
            <span className="text-coffee-500 text-lg">Guatemala landscape or community scene</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="bg-earth-900 rounded-lg shadow-lg p-12">
          <p className="text-sm uppercase tracking-wide text-[#f97316] font-semibold mb-6">Take the Next Step</p>
          
          <div className="mb-8">
            <a 
              href="/coffee" 
              className="inline-block bg-[#f97316] text-earth-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#ea580c] transition-colors shadow-md"
            >
              Subscribe to 6-Month Sampler
            </a>
          </div>
          
          <p className="text-lg text-coffee-100 mb-6">
            We also offer the option of one-time purchases of 350g bags of 100% Guatemalan Coffee!
          </p>
          
          <a 
            href="/coffee" 
            className="inline-block bg-coffee-100 text-earth-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-coffee-200 transition-colors shadow-md"
          >
            Shop Single Bags
          </a>
        </div>
      </section>
    </div>
  );
}
