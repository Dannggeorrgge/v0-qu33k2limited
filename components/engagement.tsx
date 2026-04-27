'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Site Survey',
    description: 'Comprehensive site assessment',
    price: 'Starting at ₦500K',
    features: [
      'Detailed site investigation',
      'Soil testing & analysis',
      'Environmental assessment',
      'Preliminary report',
      'Site recommendations',
    ],
    highlighted: false,
  },
  {
    name: 'Full Project Delivery',
    description: 'End-to-end project execution',
    price: 'Custom Quote',
    features: [
      'Complete project design',
      'Planning & permitting',
      'Full construction supervision',
      'Quality assurance',
      'Final inspection & handover',
      'Post-project support',
    ],
    highlighted: true,
  },
  {
    name: 'Retainer/Ongoing',
    description: 'Continuous support services',
    price: 'Flexible Terms',
    features: [
      'Monthly site management',
      'Maintenance operations',
      'Emergency response',
      'Quarterly reporting',
      'Priority support',
    ],
    highlighted: false,
  },
]

export function Engagement() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="engagement" className="py-20 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Engagement Tiers</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Choose the service package that fits your project scope
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`rounded-lg overflow-hidden transition-all duration-300 ${
                tier.highlighted
                  ? 'glass scale-105 shadow-lg shadow-primary/20 border-primary/30'
                  : 'glass hover:border-primary/20'
              }`}
            >
              <div className="p-8">
                {tier.highlighted && (
                  <div className="inline-block mb-4 px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full">
                    RECOMMENDED
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-muted text-sm mb-6">{tier.description}</p>

                <div className="mb-8 py-4 border-y border-primary/10">
                  <p className="text-2xl font-bold text-primary">{tier.price}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={
                    tier.highlighted
                      ? 'cta-button w-full'
                      : 'cta-button-outline w-full'
                  }
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
