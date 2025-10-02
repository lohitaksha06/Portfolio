'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [showScrollText, setShowScrollText] = useState(false)
  const [showHeader, setShowHeader] = useState(false)

  useEffect(() => {
    // Show scroll text after a delay
    const scrollTextTimer = setTimeout(() => {
      setShowScrollText(true)
    }, 2000)

    // Handle scroll for header visibility
    const handleScroll = () => {
      setShowHeader(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      clearTimeout(scrollTextTimer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {/* Floating Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showHeader 
            ? 'opacity-100 translate-y-0 bg-black/80 backdrop-blur-md' 
            : 'opacity-0 -translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-white font-bold text-lg">Lohit's Portfolio</div>
          <nav className="flex space-x-8">
            <a href="#home" className="text-white hover:text-gray-300 transition-colors">Home</a>
            <a href="#blogs" className="text-white hover:text-gray-300 transition-colors">Blogs</a>
            <a href="#projects" className="text-white hover:text-gray-300 transition-colors">Projects</a>
            <a href="#about" className="text-white hover:text-gray-300 transition-colors">About Me</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main id="home" className="min-h-screen grid place-items-center bg-black text-white relative">
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
        <div className="pointer-events-none fixed inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[length:100%_3px]" />
      </main>

      {/* Content Sections */}
      <section id="blogs" className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Blogs</h2>
          <p className="text-gray-300 text-lg">Coming soon...</p>
        </div>
      </section>

      <section id="projects" className="min-h-screen bg-gray-800 text-white flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Projects</h2>
          <p className="text-gray-300 text-lg">My awesome projects will be showcased here...</p>
        </div>
      </section>

      <section id="about" className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-gray-300 text-lg max-w-2xl">
            I'm Lohitaksha, passionate about creating amazing digital experiences...
          </p>
        </div>
      </section>
    </>
  )
}