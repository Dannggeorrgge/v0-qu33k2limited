'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function Hero({ onContactClick }: { onContactClick: () => void }) {
  return (
    <section className="min-h-screen pt-24 md:pt-32 pb-16 flex items-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl"
        />
      </div>

      <div className="section-container w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block mb-6 px-4 py-2 glass rounded-full"
          >
            <span className="text-primary text-sm font-semibold">Welcome to QU33K LIMITED</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-pretty">
            Engineering{' '}
            <span className="text-gradient">Excellence</span>
            {' '}in Maritime & Civil Projects
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-muted mb-10 max-w-2xl leading-relaxed"
          >
            Professional marine dredging, building construction, and civil infrastructure solutions serving Port Harcourt and beyond. Over a decade of expertise delivering complex engineering projects on time and within budget.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <button
              onClick={onContactClick}
              className="cta-button"
            >
              Get Started Today
            </button>
            <a
              href="#services"
              className="cta-button-outline flex items-center justify-center gap-2"
            >
              Learn More
              <ChevronDown size={18} />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '50+', label: 'Projects Delivered' },
              { value: '100%', label: 'Client Satisfaction' },
              { value: '25+', label: 'Team Members' },
            ].map((stat, index) => (
              <div key={index} className="glass-light p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-muted">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
