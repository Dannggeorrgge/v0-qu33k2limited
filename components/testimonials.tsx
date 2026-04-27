'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'QU33K LIMITED delivered our port expansion project ahead of schedule with exceptional attention to detail. Their team&apos;s expertise in marine operations is unmatched.',
    author: 'Chief Engr. Okafor',
    role: 'Port Authority Director',
    rating: 5,
  },
  {
    quote: 'Professional, reliable, and committed to excellence. They handled our land reclamation project flawlessly, turning our vision into reality with minimal disruption.',
    author: 'Mrs. Ada Nwosu',
    role: 'Real Estate Developer',
    rating: 5,
  },
  {
    quote: 'Outstanding project management and technical expertise. QU33K LIMITED demonstrates the highest standards of safety and quality in every aspect of their work.',
    author: 'Eng. Tunde Adeyemi',
    role: 'Infrastructure Consultant',
    rating: 5,
  },
]

export function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            What our clients say about working with QU33K LIMITED
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-8 flex flex-col transition-all duration-300 hover:border-[#FFD700]/50 hover:shadow-[0_0_15px_rgba(255,215,0,0.15)]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating).fill(null).map((_, i) => (
                  <Star key={i} size={20} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted mb-6 leading-relaxed flex-grow">
                {testimonial.quote}
              </p>

              {/* Divider */}
              <div className="w-12 h-1 bg-primary mb-4" />

              {/* Author */}
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-muted">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
