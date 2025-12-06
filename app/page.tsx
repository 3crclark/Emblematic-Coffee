import { Hero } from '@/components/Hero'
import { ProductLines } from '@/components/ProductLines'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProductLines />
      <Footer />
    </main>
  )
}

