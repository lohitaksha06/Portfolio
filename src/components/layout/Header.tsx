'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Certificates', href: '/certificates' },
    { name: 'Projects', href: '/projects' },
    { name: 'About Me', href: '/about' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-yellow-900/40 bg-[#050b19]/85 backdrop-blur-xl shadow-[0_8px_40px_rgba(15,110,255,0.12)]"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-semibold tracking-tight text-white"
          >
            {`Lohit's Portfolio`}
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 md:flex">
          {navItems.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
                pathname === item.href
                  ? 'text-yellow-300'
                  : 'text-zinc-100 hover:text-yellow-200'
              }`}
            >
              {item.name}
              {pathname === item.href && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-yellow-500 via-cyan-400 to-blue-500"
                />
              )}
            </Link>
          ))}
          
          {/* Glowing Resume Download Button */}
          <motion.a
            href="/resume/Lohitaksha_Patary_CV.pdf"
            download="Lohitaksha_Patary_CV.pdf"
            className="relative ml-2 px-5 py-2 text-sm font-semibold text-zinc-900 rounded-full overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #d4af37, #987515)',
              boxShadow: '0 0 20px rgba(212, 175, 55, 0.5), 0 0 40px rgba(152, 117, 21, 0.3)',
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(212, 175, 55, 0.7), 0 0 60px rgba(152, 117, 21, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </span>
            {/* Animated glow pulse */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.4), rgba(152, 117, 21, 0.4))',
              }}
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative h-6 w-6 focus:outline-none md:hidden"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="absolute left-0 top-0 h-0.5 w-6 origin-center transform bg-zinc-100 transition-all duration-300"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="absolute left-0 top-2.5 h-0.5 w-6 bg-zinc-100 transition-all duration-300"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="absolute left-0 top-5 h-0.5 w-6 origin-center transform bg-zinc-100 transition-all duration-300"
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="overflow-hidden border-t border-yellow-900/40 bg-[#050b19]/95 md:hidden"
      >
        <nav className="space-y-2 px-4 py-4">
          {navItems.map(item => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg px-3 py-2 text-base font-medium transition-colors duration-200 ${
                pathname === item.href
                  ? 'bg-yellow-500/10 text-yellow-200'
                  : 'text-zinc-100 hover:bg-yellow-500/10 hover:text-yellow-200'
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Mobile Resume Download Button */}
          <a
            href="/resume/Lohitaksha_Patary_CV.pdf"
            download="Lohitaksha_Patary_CV.pdf"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-base font-semibold text-yellow-500 hover:bg-yellow-500/10 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </nav>
      </motion.div>
    </motion.header>
  )
}

export default Header
