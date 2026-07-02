'use client'

import { useState } from 'react'

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    category: '',
    targetMarket: '',
    budget: '',
    moq: '',
    timeline: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'contact', ...formData }),
      })
      if (!response.ok) throw new Error('Submission failed')
      setIsSubmitted(true)
    } catch {
      setError('Failed to send inquiry. Please try again or email us directly at sathiprobusiness@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Inquiry Sent!</h3>
        <p className="text-gray-500">
          Thank you for your interest. We will get back to you within 24–48 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">{error}</div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange}
            placeholder="John Smith"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange}
            placeholder="john@company.com"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="whatsapp">
          WhatsApp Number
        </label>
        <input id="whatsapp" name="whatsapp" type="text" value={formData.whatsapp} onChange={handleChange}
          placeholder="+1 234 567 8900"
          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="category">
            Product Category <span className="text-red-500">*</span>
          </label>
          <select id="category" name="category" required value={formData.category} onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="">Select category</option>
            <option value="stationery">Stationery & Creative Products</option>
            <option value="apparel">Apparel & Textile Products</option>
            <option value="machinery">Machinery & Industrial Equipment</option>
            <option value="medical">Medical & Healthcare Products</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="targetMarket">
            Target Market
          </label>
          <input id="targetMarket" name="targetMarket" type="text" value={formData.targetMarket} onChange={handleChange}
            placeholder="e.g. North America, Europe"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="budget">
            Budget Range
          </label>
          <select id="budget" name="budget" value={formData.budget} onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="">Select range</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-20k">$5,000 – $20,000</option>
            <option value="20k-50k">$20,000 – $50,000</option>
            <option value="50k-100k">$50,000 – $100,000</option>
            <option value="over-100k">Over $100,000</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="moq">
            Expected MOQ
          </label>
          <input id="moq" name="moq" type="text" value={formData.moq} onChange={handleChange}
            placeholder="e.g. 1,000 pcs"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="timeline">
            Timeline
          </label>
          <input id="timeline" name="timeline" type="text" value={formData.timeline} onChange={handleChange}
            placeholder="e.g. Q3 2026"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea id="message" name="message" required rows={4} value={formData.message} onChange={handleChange}
          placeholder="Describe your sourcing requirements, product details, and any specific needs..."
          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" />
      </div>

      <button type="submit" disabled={isSubmitting}
        className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
        {isSubmitting ? 'Sending...' : 'Send Inquiry'}
      </button>
    </form>
  )
}
