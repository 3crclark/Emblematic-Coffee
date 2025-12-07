import { Hero } from '@/components/Hero'
import { TrustStrip } from '@/components/TrustStrip'
import { ProductLines } from '@/components/ProductLines'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustStrip />
      <ProductLines />
      <Footer />
    </main>
  )
}
