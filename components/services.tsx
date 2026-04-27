'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    title: 'Marine Dredging',
    description: 'Eliminate waterway navigation issues through precision excavation. We deploy modern dredgers with dedicated site supervisors and weekly milestone reporting.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Marine%20Dredging-aXHfNb3fQOYNFpTCIMrajo3kTDx5xm.webp',
  },
  {
    title: 'Building Construction',
    description: 'Stop budget blowouts on structural projects. We execute to corporate standards with daily site logs, transparent billing, and verified completion milestones.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Building%20Construction-TTFQv3Iw1Uk92gb12T6tMJFt37pfRQ.webp',
  },
  {
    title: 'Site Excavation',
    description: 'Remove the guesswork from ground work. Our exhaustive upfront surveys prevent expensive surprises with precision equipment and certified operators.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Site%20Excavation-ubggV3TMiCoycOwr12kDMzGvxhjGN1.jpg',
  },
  {
    title: 'Land Reclamation',
    description: 'Transform water into productive assets without delays. We handle permits, environmental compliance, and staged delivery matched to your capital budgets.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Land%20Reclamation-6IzYwwcuh4amllPo1ynvXK0vXPHwuR.jpg',
  },
  {
    title: 'Civil Infrastructure',
    description: 'Build roads and utilities that last. Rigorous materials testing, quality assurance at every phase, and post-project documentation for your audit files.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Civil%20Infrastructure-yK64lN9GRdMHKdiGtwZHg6brAbI35j.jpg',
  },
  {
    title: 'Project Management',
    description: 'Full oversight integrated with your systems. Weekly reports, milestone-based billing, and dedicated site supervisors accountable to your corporate governance.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Project%20Management-2kqTY8QHurJ6GtshbIuuN9JQ780XWb.jpg',
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How We Make It Happen</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Six mechanisms to eliminate delays, cost overruns, and contractor drama
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass overflow-hidden transition-all duration-300 group hover:border-[#FFD700]/50 hover:shadow-[0_0_15px_rgba(255,215,0,0.15)]"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  loading="lazy"
                  className="object-cover brightness-75 group-hover:brightness-85 transition-all duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
