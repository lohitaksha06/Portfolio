'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skills = [
    'UX Research', 'UI Design', 'Prototyping', 'User Testing',
    'React', 'Next.js', 'TypeScript', 'Framer Motion',
    'Figma', 'Adobe Creative Suite', 'Principle', 'InVision'
  ]

  return (
    <section ref={ref} className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            I'm a passionate UX Engineer who bridges the gap between design and development. 
            I create beautiful, functional, and user-centered digital experiences that solve real problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">My Approach</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I believe great UX comes from understanding users deeply and iterating based on real feedback. 
              My process combines research, rapid prototyping, and continuous testing to create experiences 
              that truly resonate with users.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not designing, you'll find me coding those designs into reality using modern 
              technologies like React, TypeScript, and cutting-edge animation libraries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Skills & Tools</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4 text-center"
                >
                  <span className="text-gray-800 font-semibold">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection