'use client'

import { motion } from 'framer-motion'
import { Anchor, Building2, Zap, TrendingUp, Wrench, CheckSquare } from 'lucide-react'

const services = [
  {
    icon: Anchor,
    title: 'Marine Dredging',
    description: 'Professional dredging operations including channel deepening, sediment removal, and waterway maintenance.',
  },
  {
    icon: Building2,
    title: 'Building Construction',
    description: 'Complete construction services from foundation to finishing, ensuring structural integrity and quality.',
  },
  {
    icon: Zap,
    title: 'Site Excavation',
    description: 'Comprehensive excavation services for various project types with precision and safety standards.',
  },
  {
    icon: TrendingUp,
    title: 'Land Reclamation',
    description: 'Strategic land reclamation projects converting water bodies into valuable usable real estate.',
  },
  {
    icon: Wrench,
    title: 'Civil Infrastructure',
    description: 'Design and execution of critical infrastructure including roads, bridges, and utilities.',
  },
  {
    icon: CheckSquare,
    title: 'Project Management',
    description: 'End-to-end project oversight ensuring timely delivery, quality compliance, and budget adherence.',
  },
]

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="services" className="py-20 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Comprehensive engineering and construction solutions tailored to your project needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass p-8 transition-all duration-300 group hover:border-[#FFD700]/50 hover:shadow-[0_0_15px_rgba(255,215,0,0.15)]"
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
