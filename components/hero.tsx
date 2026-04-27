'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useCounter } from '@/hooks/use-counter'

export function Hero({ onContactClick }: { onContactClick: () => void }) {
  const yearsCount = useCounter(10, 3000)
  const projectsCount = useCounter(50, 3000)
  const satisfactionCount = useCounter(100, 3000)
  const teamCount = useCounter(25, 3000)
  return (
    <section className="min-h-screen pt-24 md:pt-32 pb-16 flex items-center relative overflow-hidden" style={{
      backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HERO3-RWpnUWB7534ZjGHG2NztXcbV8v19jk.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/92" />
      
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
            <span className="text-primary text-sm font-semibold flex items-center gap-2">
              Welcome to QU33K LIMITED
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.7, repeat: Infinity }}
                className="inline-block w-1.5 h-5 bg-primary"
              />
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-pretty">
            Stalled Sites to{' '}
            <span className="text-gradient">Completed Infrastructure</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-muted mb-10 max-w-2xl leading-relaxed"
          >
            We help Niger Delta developers and corporate clients escape mismanaged sites and budget blowouts through rigorous upfront engineering, transparent governance, and exhaustive feasibility studies integrated with your procurement team.
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
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown size={18} />
              </motion.div>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="glass-light p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary">{yearsCount}+</div>
              <div className="text-xs text-muted">Years Experience</div>
            </div>
            <div className="glass-light p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary">{projectsCount}+</div>
              <div className="text-xs text-muted">Projects Delivered</div>
            </div>
            <div className="glass-light p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary">{satisfactionCount}%</div>
              <div className="text-xs text-muted">Client Satisfaction</div>
            </div>
            <div className="glass-light p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary">{teamCount}+</div>
              <div className="text-xs text-muted">Team Members</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
