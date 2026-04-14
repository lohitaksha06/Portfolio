'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import GoldenPillarsBackground from '@/components/animations/GoldenPillarsBackground'
import GlitchText from '@/components/ui/GlitchText'
import ThemeSwitcher from '@/components/ui/ThemeSwitcher'
import FadeOnScroll from '@/components/animations/FadeOnScroll'
import { useTheme } from '@/context/ThemeContext'

// Sample data - replace with your actual latest blog/project
const latestBlog = {
  title: 'Building a Modern Portfolio with Next.js',
  excerpt: 'A deep dive into creating stunning web experiences with React, Framer Motion, and cutting-edge design techniques.',
  date: 'Feb 2026',
  slug: '/blogs',
}

const latestProject = {
  title: 'AI-Powered Code Assistant',
  description: 'An intelligent development tool that helps developers write better code faster with machine learning.',
  tech: ['TypeScript', 'Python', 'OpenAI'],
  slug: '/projects',
}

export default function Home() {
  const [showScrollText, setShowScrollText] = useState(false)
  const { colors, theme } = useTheme()

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (!section) return

    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const timer = setTimeout(() => setShowScrollText(true), 2500)
    return () => clearTimeout(timer)
  }, [])

  const bgClass = theme === 'blue' 
    ? 'bg-[#0a0a0a]' 
    : theme === 'red' 
    ? 'bg-[#050505]'
    : 'bg-[#0f0f0f]'
  return (
    <>
      <Header />
        <GoldenPillarsBackground />
      <main id="home" className={`relative flex min-h-screen items-center justify-center ${bgClass} text-white overflow-hidden`}>
        <div className="relative z-10 text-center px-4">
          {/* Glitch Hero Text */}
          <GlitchText
            text="Hi, I'm Lohitaksha"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white"
            delay={300}
          />
          
          <motion.p
            className="text-lg md:text-2xl lg:text-3xl font-light mt-6 mb-12 tracking-wide"
            style={{ color: colors.primary }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Ideas to Impact: Engineering the Future
          </motion.p>
          
          {/* Scroll indicator */}
          <motion.div 
            className="mt-16 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: showScrollText ? 1 : 0 }}
            transition={{ duration: 1 }}
            onClick={() => scrollToSection('latest-blog')}
          >
            <p 
              className="text-sm tracking-widest uppercase"
              style={{ color: colors.primary }}
            >
              scroll to continue
            </p>
            <div 
              className="mt-3 w-px h-12 mx-auto"
              style={{ background: `linear-gradient(to bottom, ${colors.primary}, transparent)` }}
            >
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 rounded-full mx-auto"
                style={{ backgroundColor: colors.primary }}
              />
            </div>
          </motion.div>
        </div>
      </main>

      {/* Latest Blog Section */}
      <section id="latest-blog" className={`relative min-h-screen flex items-center justify-center ${bgClass} text-white py-20`}>
        <div className="container mx-auto px-4">
          <FadeOnScroll direction="up">
            <div className="text-center mb-16">
              <span 
                className="text-sm font-semibold tracking-widest uppercase"
                style={{ color: colors.primary }}
              >
                Latest Blog
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4">Fresh from the Blog</h2>
            </div>
          </FadeOnScroll>

          <FadeOnScroll direction="up" delay={0.2}>
            <a 
              href={latestBlog.slug}
              className="block max-w-3xl mx-auto group"
            >
              <div 
                className="relative p-8 md:p-12 rounded-2xl border transition-all duration-500 hover:scale-[1.02]"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  borderColor: `${colors.primary}33`,
                  boxShadow: `0 0 60px ${colors.glow}`,
                }}
              >
                {/* Glitch overlay on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}15, ${colors.secondary}10)`,
                  }}
                />
                
                <div className="relative z-10">
                  <span className="text-sm text-gray-400">{latestBlog.date}</span>
                  <h3 
                    className="text-2xl md:text-3xl font-bold mt-2 mb-4 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
                    }}
                  >
                    {latestBlog.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {latestBlog.excerpt}
                  </p>
                  <div 
                    className="mt-6 inline-flex items-center gap-2 font-semibold"
                    style={{ color: colors.primary }}
                  >
                    Read More
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </div>
            </a>
          </FadeOnScroll>
        </div>
      </section>

      {/* Latest Project Section */}
      <section id="featured-project" className={`relative min-h-screen flex items-center justify-center ${bgClass} text-white py-20`}>
        <div className="container mx-auto px-4">
          <FadeOnScroll direction="up">
            <div className="text-center mb-16">
              <span 
                className="text-sm font-semibold tracking-widest uppercase"
                style={{ color: colors.secondary }}
              >
                Featured Project
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4">Latest Creation</h2>
            </div>
          </FadeOnScroll>

          <FadeOnScroll direction="up" delay={0.2}>
            <a 
              href={latestProject.slug}
              className="block max-w-3xl mx-auto group"
            >
              <div 
                className="relative p-8 md:p-12 rounded-2xl border overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  borderColor: `${colors.secondary}33`,
                  boxShadow: `0 0 60px ${colors.glow}`,
                }}
              >
                {/* Animated border glow */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `conic-gradient(from 0deg, transparent, ${colors.primary}, ${colors.secondary}, transparent)`,
                    filter: 'blur(20px)',
                  }}
                />
                
                <div className="relative z-10">
                  <h3 
                    className="text-2xl md:text-3xl font-bold mb-4"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${colors.secondary}, ${colors.primary})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {latestProject.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    {latestProject.description}
                  </p>
                  
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {latestProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-sm font-medium"
                        style={{
                          backgroundColor: `${colors.primary}20`,
                          color: colors.primary,
                          border: `1px solid ${colors.primary}40`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div 
                    className="inline-flex items-center gap-2 font-semibold"
                    style={{ color: colors.secondary }}
                  >
                    View Project
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </div>
            </a>
          </FadeOnScroll>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact-cta" className={`relative min-h-[60vh] flex items-center justify-center ${bgClass} text-white py-20`}>
        <div className="container mx-auto px-4 text-center">
          <FadeOnScroll direction="up">
            <h2 
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{
                backgroundImage: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary}, ${colors.primary})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Let&apos;s Build Something Amazing
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              Ready to collaborate on your next project? I&apos;m always excited to work on innovative ideas.
            </p>
          </FadeOnScroll>
          
          <FadeOnScroll direction="up" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                type="button"
                onClick={() => scrollToSection('social-links')}
                className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                style={{
                  backgroundColor: colors.primary,
                  color: theme === 'bw' ? '#000' : '#0f172a',
                  boxShadow: `0 0 30px ${colors.glow}`,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
              <motion.button
                type="button"
                onClick={() => scrollToSection('featured-project')}
                className="px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300"
                style={{
                  borderColor: colors.primary,
                  color: colors.primary,
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: `${colors.primary}20`,
                }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
              </motion.button>
            </div>
          </FadeOnScroll>

          <FadeOnScroll direction="up" delay={0.45}>
            <div id="social-links" className="mt-12 flex flex-wrap items-center justify-center gap-4">
              {[
                {
                  name: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/lohitaksha-patary-34638a321/',
                },
                {
                  name: 'GitHub',
                  href: 'https://github.com/lohitaksha06',
                },
                {
                  name: 'Instagram',
                  href: 'https://www.instagram.com/lohitaksha.06/',
                },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full border text-sm font-semibold tracking-wide transition-all duration-300"
                  style={{
                    borderColor: `${colors.primary}66`,
                    color: colors.primary,
                    backgroundColor: `${colors.primary}14`,
                  }}
                  whileHover={{
                    scale: 1.06,
                    backgroundColor: `${colors.primary}2a`,
                  }}
                  whileTap={{ scale: 0.96 }}
                >
                  {social.name} ↗
                </motion.a>
              ))}
            </div>
          </FadeOnScroll>
        </div>
      </section>
    </>
  )
}