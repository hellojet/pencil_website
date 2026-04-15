import { Metadata } from 'next'
import InquiryForm from '@/components/common/InquiryForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Send us an inquiry for acrylic markers, paint sticks and art supplies. We respond within 24 hours.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-200 text-lg">
            Send us your requirements and we will get back to you within 24 hours.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Email</p>
                    <p className="text-gray-500 text-sm mt-0.5">inquiry@fancypencil.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Address</p>
                    <p className="text-gray-500 text-sm mt-0.5">
                      No.91, Chuangye Road, Economic Development Zone,<br />
                      Lai&apos;an, Chuzhou, Anhui, China
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Response Time</p>
                    <p className="text-gray-500 text-sm mt-0.5">Within 24 hours on business days</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications reminder */}
            <div className="bg-blue-50 rounded-xl p-5">
              <h3 className="font-semibold text-blue-800 mb-3 text-sm">Our Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {['ISO9001', 'CE', 'EN71', 'ASTM D-4236', 'ROHS'].map((cert) => (
                  <span key={cert} className="text-xs bg-white text-blue-700 border border-blue-200 px-2 py-1 rounded-full font-medium">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Send an Inquiry</h2>
            <InquiryForm />
          </div>
        </div>
      </div>
    </div>
  )
}
