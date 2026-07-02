import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services',
  description: 'End-to-end procurement services from requirement definition to logistics and export support.',
}

const STEPS = [
  {
    number: '01',
    title: 'Requirement Definition',
    description:
      'We clarify product specifications, target markets, pricing expectations, and production needs.',
  },
  {
    number: '02',
    title: 'Supplier Sourcing',
    description:
      'We identify and match suitable factories based on production capability and reliability.',
  },
  {
    number: '03',
    title: 'Sampling & Product Development',
    description:
      'We coordinate sample production and support product iteration.',
  },
  {
    number: '04',
    title: 'Production Management',
    description:
      'We communicate with factories to ensure production follows agreed specifications and timelines.',
  },
  {
    number: '05',
    title: 'Quality Coordination',
    description:
      'We support inspection arrangements and quality consistency before shipment.',
  },
  {
    number: '06',
    title: 'Logistics & Export Support',
    description:
      'We assist in shipping coordination and export documentation.',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">End-to-End Procurement Services</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            We manage your sourcing process from idea to delivery, handling every step
            of the procurement workflow.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="relative bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl font-bold text-blue-100 mb-4">{step.number}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Let Us Handle Your Sourcing
          </h2>
          <p className="text-gray-500 mb-8">
            Tell us about your product requirements and we will build a procurement plan
            tailored to your needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  )
}
