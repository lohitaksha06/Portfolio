'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import NeonGradientBackground from '@/components/animations/NeonGradientBackground'

export default function Home() {
  const [showScrollText, setShowScrollText] = useState(false)
  const [showBlogsCTA, setShowBlogsCTA] = useState(false)
  const blogsRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    // Show scroll text after a delay
    const scrollTextTimer = setTimeout(() => {
      setShowScrollText(true)
    }, 1000)

    // Observe blogs section
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setShowBlogsCTA(true)
          }
        })
      },
      { threshold: 0.4 }
    )
    if (blogsRef.current) observer.observe(blogsRef.current)

    return () => {
      clearTimeout(scrollTextTimer)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <Header />

      {/* Hero Section with Neon Theme */}
      <main id="home" className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white overflow-hidden">
        <NeonGradientBackground />
        
        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-wide mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I&apos;m Lohitaksha
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-2xl lg:text-3xl font-light text-cyan-400 mb-12 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ideas to Impact: Engineering the Future
          </motion.p>
          
          {/* Scroll to continue text */}
          <motion.div 
            className={`mt-16 transition-opacity duration-1000 ${
              showScrollText ? 'opacity-100' : 'opacity-0'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: showScrollText ? 1 : 0 }}
          >
            <p className="text-cyan-400 text-sm tracking-widest uppercase">scroll to continue</p>
            <div className="mt-3 w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent mx-auto">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 bg-cyan-400 mx-auto"
              />
            </div>
          </motion.div>
        </div>
      </main>

      {/* Content Sections */}
      <section ref={blogsRef} id="blogs" className="relative flex min-h-screen items-center justify-center bg-gray-900 text-white">
        <div className="px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Blogs</h2>
          <p className="text-gray-300 text-lg mb-10">Click the arrow to explore my posts.</p>
          <a
            href="/blogs"
            className={`inline-flex flex-col items-center gap-3 transition-opacity duration-700 ${showBlogsCTA ? 'opacity-100' : 'opacity-0'}`}
          >
            <span className="text-sm tracking-wider uppercase text-white/80">click on this arrow to explore</span>
            <span className="animate-bounce text-3xl">↓</span>
          </a>
        </div>
      </section>

      <section id="projects" className="flex min-h-screen items-center justify-center bg-gray-800 text-white">
        <div className="px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Projects</h2>
          <p className="text-gray-300 text-lg">My awesome projects will be showcased here...</p>
        </div>
      </section>

      <section id="about" className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
        <div className="px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-gray-300 text-lg max-w-2xl">
            {`I'm Lohitaksha, passionate about creating amazing digital experiences...`}
          </p>
        </div>
      </section>
    </>
  )
}