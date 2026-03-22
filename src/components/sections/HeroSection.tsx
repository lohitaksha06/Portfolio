'use client'

import { motion } from 'framer-motion'
import NeonGradientBackground from '../animations/NeonGradientBackground'

const HeroSection = () => {
  const headline = "Hi, I'm Lohitaksha"
  const subheadline = "Ideas to Impact: Engineering the Future"

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-transparent text-white overflow-hidden">
      {/* Neon Gradient Background */}
      <NeonGradientBackground />
      
      {/* Content with higher z-index */}
      <div className="relative z-10 text-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wider mb-4 text-white">
            {headline.split('\n').map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </h1>
        </motion.div>
        
        <motion.h2
          className="text-lg md:text-2xl lg:text-3xl font-light text-yellow-400 mb-12 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subheadline}
        </motion.h2>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 hover:bg-yellow-600 text-zinc-950 font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
          >
            View My Work
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, borderColor: "rgb(6, 182, 212)", boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-yellow-400 hover:border-yellow-300 text-yellow-400 hover:text-yellow-300 font-bold py-3 px-8 rounded-full transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-yellow-500/80 text-xs tracking-[0.2em] font-medium mb-3">SCROLL TO CONTINUE</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-yellow-500"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
