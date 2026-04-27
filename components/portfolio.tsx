'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'Onne Port Development',
    location: 'Port Harcourt, Nigeria',
    year: '2021-2023',
    status: 'Completed',
    description: 'Large-scale port expansion project including dredging operations and infrastructure development.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Onne%20Port%20Development-BF14vKPrAUn7KU3g8pU1ND8afkgOwB.jpg',
  },
  {
    title: 'Woji Creek Reclamation',
    location: 'Port Harcourt, Nigeria',
    year: '2022-2024',
    status: 'On Progress',
    description: 'Strategic land reclamation initiative converting waterway into valuable commercial real estate.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Woji%20Creek%20Reclamation-l1IwL8diXGnsoI8HsiR5FMNbGQ5HUG.webp',
  },
  {
    title: 'Trans-Amadi Road Network',
    location: 'Port Harcourt, Nigeria',
    year: '2023-Present',
    status: 'On Progress',
    description: 'Comprehensive road infrastructure project improving connectivity across the Trans-Amadi industrial area.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trans-Amadi%20Road%20Network-buWp7RWiP7v8vSg4fQyOrclC7eEQid.webp',
  },
]

export function Portfolio() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-primary" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-8 transition-all duration-300 hover:border-[#FFD700]/50 hover:shadow-[0_0_15px_rgba(255,215,0,0.15)]"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Project Image */}
                <div className="relative rounded-lg h-48 md:h-full min-h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover brightness-75 hover:brightness-85 transition-all duration-300"
                  />
                </div>

                {/* Content */}
                <div className="md:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted mb-1">{project.location}</p>
                      <p className="text-muted text-sm">{project.year}</p>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                      <CheckCircle2 size={16} className="text-primary" />
                      <span className="text-primary text-sm font-medium">{project.status}</span>
                    </div>
                  </div>
                  <p className="text-muted leading-relaxed">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
