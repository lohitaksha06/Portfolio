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
      className="fixed top-0 left-0 right-0 z-50 border-b border-sky-900/40 bg-[#050b19]/85 backdrop-blur-xl shadow-[0_8px_40px_rgba(15,110,255,0.12)]"
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
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
                pathname === item.href
                  ? 'text-sky-300'
                  : 'text-slate-100 hover:text-sky-200'
              }`}
            >
              {item.name}
              {pathname === item.href && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-500"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative h-6 w-6 focus:outline-none md:hidden"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="absolute left-0 top-0 h-0.5 w-6 origin-center transform bg-slate-100 transition-all duration-300"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="absolute left-0 top-2.5 h-0.5 w-6 bg-slate-100 transition-all duration-300"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="absolute left-0 top-5 h-0.5 w-6 origin-center transform bg-slate-100 transition-all duration-300"
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="overflow-hidden border-t border-sky-900/40 bg-[#050b19]/95 md:hidden"
      >
        <nav className="space-y-2 px-4 py-4">
          {navItems.map(item => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg px-3 py-2 text-base font-medium transition-colors duration-200 ${
                pathname === item.href
                  ? 'bg-sky-500/10 text-sky-200'
                  : 'text-slate-100 hover:bg-sky-500/10 hover:text-sky-200'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  )
}

export default Header