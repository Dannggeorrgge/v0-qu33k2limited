'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { useActiveSection } from '@/hooks/use-active-section'

export function Header({ onContactClick }: { onContactClick: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const activeSection = useActiveSection()

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Engagement', href: '#engagement' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQs', href: '#faqs' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-semibold text-xl tracking-tighter text-primary"
        >
          QU33K
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1)
            const isActive = activeSection === sectionId
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive 
                    ? 'text-primary' 
                    : 'text-muted hover:text-foreground'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* CTA Button */}
        <button
          onClick={onContactClick}
          className="hidden md:block cta-button"
        >
          Contact
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-light border-t border-primary/10"
        >
          <div className="section-container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted hover:text-foreground transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                onContactClick()
                setMobileMenuOpen(false)
              }}
              className="cta-button w-full text-center"
            >
              Contact
            </button>
          </div>
        </motion.div>
      )}
    </header>
  )
}
