'use client'

import { useState } from 'react'

interface DesignInquiryFormProps {
  onClose: () => void
}

export default function DesignInquiryForm({ onClose }: DesignInquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    projectName: '',
    projectType: '',
    requirements: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
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
        body: JSON.stringify({ formType: 'design', ...formData }),
      })
      if (!response.ok) throw new Error('Submission failed')
      setIsSubmitted(true)
    } catch {
      setError('Failed to send inquiry. Please try again or email us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Design Inquiry</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600" aria-label="Close">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Inquiry Sent!</h3>
            <p className="text-gray-500 text-sm">Our design team will reach out within 24–48 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">{error}</div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="des-name">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input id="des-name" name="name" type="text" required value={formData.name} onChange={handleChange}
                  placeholder="John Smith"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="des-email">
                  Email <span className="text-red-500">*</span>
                </label>
                <input id="des-email" name="email" type="email" required value={formData.email} onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="des-whatsapp">
                WhatsApp Number
              </label>
              <input id="des-whatsapp" name="whatsapp" type="text" value={formData.whatsapp} onChange={handleChange}
                placeholder="+1 234 567 8900"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="des-projectName">
                Project Name <span className="text-red-500">*</span>
              </label>
              <input id="des-projectName" name="projectName" type="text" required value={formData.projectName} onChange={handleChange}
                placeholder="e.g. Custom marker packaging"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="des-projectType">
                Project Type
              </label>
              <select id="des-projectType" name="projectType" value={formData.projectType} onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Select type</option>
                <option value="product-design">Product Design</option>
                <option value="packaging-design">Packaging Design</option>
                <option value="3d-modeling">3D Modeling / Rendering</option>
                <option value="branding">Branding / Logo</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="des-requirements">
                Design Requirements <span className="text-red-500">*</span>
              </label>
              <textarea id="des-requirements" name="requirements" required rows={4} value={formData.requirements} onChange={handleChange}
                placeholder="Describe your design needs, reference styles, and any specific requirements..."
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" />
            </div>
            <button type="submit" disabled={isSubmitting}
              className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
              {isSubmitting ? 'Sending...' : 'Submit Design Inquiry'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
