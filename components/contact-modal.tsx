'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const services = [
  'Marine Dredging',
  'Building Construction',
  'Site Excavation',
  'Land Reclamation',
  'Civil Infrastructure',
  'Project Management',
  'Other',
]

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    service: '',
    details: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)

    // Reset form after success
    setTimeout(() => {
      setFormData({ name: '', company: '', phone: '', service: '', details: '' })
      setSubmitted(false)
      onClose()
    }, 2000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="glass w-full max-w-lg rounded-lg overflow-hidden shadow-2xl shadow-primary/20">
              {/* Header */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-primary/10">
                <h2 className="text-2xl font-bold">Get In Touch</h2>
                <button
                  onClick={onClose}
                  className="text-muted hover:text-foreground transition-colors p-1"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="px-8 py-6">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <div className="text-5xl mb-4">✓</div>
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p className="text-muted">
                      We&apos;ll review your inquiry and get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#1a1a1a] border border-primary/20 rounded-lg text-foreground placeholder-muted transition-all duration-300 focus:ring-2 focus:ring-[#FFD700]/50 focus:border-[#FFD700] focus:shadow-[0_0_10px_rgba(255,215,0,0.2)]"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#1a1a1a] border border-primary/20 rounded-lg text-foreground placeholder-muted transition-all duration-300 focus:ring-2 focus:ring-[#FFD700]/50 focus:border-[#FFD700] focus:shadow-[0_0_10px_rgba(255,215,0,0.2)]"
                        placeholder="Your company"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#1a1a1a] border border-primary/20 rounded-lg text-foreground placeholder-muted transition-all duration-300 focus:ring-2 focus:ring-[#FFD700]/50 focus:border-[#FFD700] focus:shadow-[0_0_10px_rgba(255,215,0,0.2)]"
                        placeholder="+234 (0) 701 234 567"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold mb-2">
                        Service Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#1a1a1a] border border-primary/20 rounded-lg text-foreground transition-all duration-300 focus:ring-2 focus:ring-[#FFD700]/50 focus:border-[#FFD700] focus:shadow-[0_0_10px_rgba(255,215,0,0.2)]"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Details */}
                    <div>
                      <label htmlFor="details" className="block text-sm font-semibold mb-2">
                        Project Details
                      </label>
                      <textarea
                        id="details"
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-[#1a1a1a] border border-primary/20 rounded-lg text-foreground placeholder-muted transition-all duration-300 focus:ring-2 focus:ring-[#FFD700]/50 focus:border-[#FFD700] focus:shadow-[0_0_10px_rgba(255,215,0,0.2)] resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full cta-button disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
