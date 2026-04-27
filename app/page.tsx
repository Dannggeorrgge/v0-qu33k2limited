'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Portfolio } from '@/components/portfolio'
import { Engagement } from '@/components/engagement'
import { Testimonials } from '@/components/testimonials'
import { FAQs } from '@/components/faqs'
import { Footer } from '@/components/footer'
import { ContactModal } from '@/components/contact-modal'

export default function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false)

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="bg-background text-foreground">
      <Header onContactClick={() => setContactModalOpen(true)} />
      <Hero onContactClick={() => setContactModalOpen(true)} />
      <Services />
      <Portfolio />
      <Engagement />
      <Testimonials />
      <FAQs />
      <Footer onBackToTop={handleBackToTop} />
      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />
    </main>
  )
}
