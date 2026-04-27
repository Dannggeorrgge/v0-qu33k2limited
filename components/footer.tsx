'use client'

import { motion } from 'framer-motion'
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react'

export function Footer({ onBackToTop }: { onBackToTop: () => void }) {
  return (
    <footer className="bg-[#0a0a0a] border-t border-primary/10 py-16 md:py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="font-semibold text-xl tracking-tighter text-primary mb-2 hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all duration-300 inline-block">
              QU33K
            </div>
            <p className="text-muted text-sm">
              Engineering excellence in maritime and civil infrastructure
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:08137130117" className="flex items-center justify-center md:justify-start gap-2 text-muted hover:text-primary hover:shadow-[0_0_10px_rgba(255,215,0,0.3)] transition-all duration-300 text-sm">
                <Phone size={16} />
                08137130117
              </a>
              <a href="mailto:qu33klimited@gmail.com" className="flex items-center justify-center md:justify-start gap-2 text-muted hover:text-primary hover:shadow-[0_0_10px_rgba(255,215,0,0.3)] transition-all duration-300 text-sm">
                <Mail size={16} />
                qu33klimited@gmail.com
              </a>
              <div className="flex items-start justify-center md:justify-start gap-2 text-muted text-sm">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <p>Close C First Av. Estate, Origwe PH, Rivers State</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: 'Services', href: '#services' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'FAQs', href: '#faqs' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-muted hover:text-primary hover:shadow-[0_0_10px_rgba(255,215,0,0.3)] transition-all duration-300 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-end justify-between"
          >
            <button
              onClick={onBackToTop}
              className="p-3 glass rounded-lg hover:border-primary/30 hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp size={20} className="text-primary" />
            </button>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/10 pt-8">
          <p className="text-muted text-sm text-center">
            © 2024 QU33K LIMITED. All rights reserved. | Engineered with precision and care
          </p>
        </div>
      </div>
    </footer>
  )
}
