'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqItems = [
  {
    category: 'Operations',
    items: [
      {
        question: 'What is the typical duration for a marine dredging project?',
        answer: 'Project duration varies based on scope and scale. Typical dredging operations range from 3-12 months depending on water depth, volume, and environmental conditions. We provide detailed timelines during the planning phase.',
      },
      {
        question: 'Do you handle environmental compliance for dredging?',
        answer: 'Yes, environmental compliance is integral to all our marine operations. We conduct environmental impact assessments, obtain necessary permits, and implement mitigation measures throughout the project lifecycle.',
      },
    ],
  },
  {
    category: 'Contract Types',
    items: [
      {
        question: 'What contract models do you offer?',
        answer: 'We offer flexible engagement models: Design-Build (complete responsibility), Cost-Plus (transparent cost management), Fixed-Price (predetermined budget), and Retainer-based (ongoing support). Choose based on your project needs and risk tolerance.',
      },
      {
        question: 'Do you handle turnkey projects?',
        answer: 'Absolutely. We specialize in turnkey projects where we manage every aspect from conception to completion. You provide the brief, and we deliver a finished, functional project ready for operation.',
      },
    ],
  },
  {
    category: 'Site Assessments',
    items: [
      {
        question: 'How thorough is your site assessment process?',
        answer: 'Our comprehensive assessments include geotechnical surveys, soil analysis, hydrological studies, environmental screening, and preliminary cost estimations. We document findings in detailed reports with actionable recommendations.',
      },
      {
        question: 'Can we get a free initial consultation?',
        answer: 'Yes, we offer complimentary initial consultations to discuss your project vision, assess feasibility, and provide preliminary recommendations. Contact us to schedule your consultation.',
      },
    ],
  },
]

export function FAQs() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <section id="faqs" className="py-20 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Common questions about our services and project processes
          </p>
        </motion.div>

        <div className="space-y-8 max-w-3xl mx-auto">
          {faqItems.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">{category.category}</h3>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const itemId = `${categoryIndex}-${itemIndex}`
                  const isExpanded = expandedItems[itemId]

                  return (
                    <div key={itemIndex} className="glass overflow-hidden">
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full px-8 py-6 flex items-start justify-between hover:bg-primary/5 transition-colors text-left"
                      >
                        <span className="font-semibold pr-4">{item.question}</span>
                        {isExpanded ? (
                          <Minus size={20} className="text-primary flex-shrink-0 mt-1" />
                        ) : (
                          <Plus size={20} className="text-primary flex-shrink-0 mt-1" />
                        )}
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-primary/10"
                          >
                            <p className="px-8 py-6 text-muted leading-relaxed">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
