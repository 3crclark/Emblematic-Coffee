import { MapPin, Clock, Briefcase } from 'lucide-react'

export function TrustStrip() {
  return (
    <section className="py-12 border-y border-coffee-200/40 bg-white/40 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-2">
            <MapPin className="w-5 h-5 text-coffee-900" strokeWidth={1.5} />
            <p className="text-sm font-medium text-coffee-900">
              Roasted in Guatemala
            </p>
            <p className="text-xs text-earth-600">
              Not just sourced
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Clock className="w-5 h-5 text-coffee-900" strokeWidth={1.5} />
            <p className="text-sm font-medium text-coffee-900">
              10-14 Days Fresh
            </p>
            <p className="text-xs text-earth-600">
              Air-freighted to you
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Briefcase className="w-5 h-5 text-coffee-900" strokeWidth={1.5} />
            <p className="text-sm font-medium text-coffee-900">
              Full Value Chain
            </p>
            <p className="text-xs text-earth-600">
              Supporting Guatemalan workers
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
