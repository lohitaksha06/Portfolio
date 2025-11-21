'use client'

import { useState, useEffect, useRef } from 'react'
import Header from '@/components/layout/Header'

export default function Home() {
  const [showScrollText, setShowScrollText] = useState(false)
  const [showBlogsCTA, setShowBlogsCTA] = useState(false)
  const blogsRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    // Show scroll text after a delay
    const scrollTextTimer = setTimeout(() => {
      setShowScrollText(true)
    }, 2000)

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

      {/* Hero Section */}
      <main id="home" className="relative grid min-h-screen place-items-center bg-black pt-32 text-white">
        <div className="text-center px-4">
          <h1
            className="glitch text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight relative"
            data-text="Hi, I'm Lohitaksha"
          >
            Hi, I'm Lohitaksha
          </h1>
          <p className="mt-4 text-lg text-zinc-300">Welcome to my profile</p>
          
          {/* Scroll to continue text */}
          <div 
            className={`mt-12 transition-opacity duration-1000 ${
              showScrollText ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="text-white text-sm animate-pulse">scroll to continue</p>
            <div className="mt-2 w-px h-8 bg-white/50 mx-auto animate-bounce"></div>
          </div>
        </div>
        
        {/* subtle scanline overlay */}
        <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[length:100%_3px] opacity-[0.04]" />
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
            I'm Lohitaksha, passionate about creating amazing digital experiences...
          </p>
        </div>
      </section>
    </>
  )
}