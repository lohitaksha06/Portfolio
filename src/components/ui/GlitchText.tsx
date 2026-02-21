'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTheme } from '@/context/ThemeContext'

interface GlitchTextProps {
  text: string
  className?: string
  delay?: number
}

export default function GlitchText({ text, className = '', delay = 0 }: GlitchTextProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isGlitching, setIsGlitching] = useState(false)
  const { colors } = useTheme()

  useEffect(() => {
    // Initial appearance with glitch
    const showTimer = setTimeout(() => {
      setIsGlitching(true)
      setIsVisible(true)
      
      // Stop initial glitch after a short burst
      setTimeout(() => setIsGlitching(false), 600)
    }, delay)

    // Random glitch bursts
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsGlitching(true)
        setTimeout(() => setIsGlitching(false), 150 + Math.random() * 200)
      }
    }, 3000)

    return () => {
      clearTimeout(showTimer)
      clearInterval(glitchInterval)
    }
  }, [delay])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            filter: 'blur(0px)',
          }}
          transition={{ 
            duration: 0.5, 
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`relative inline-block ${className}`}
        >
          {/* Main text */}
          <span
            className={`relative z-10 ${isGlitching ? 'animate-glitch-skew' : ''}`}
            style={{
              textShadow: `
                0 0 10px ${colors.glow},
                0 0 20px ${colors.glow},
                0 0 40px ${colors.glow}
              `,
            }}
          >
            {text}
          </span>
          
          {/* Glitch layers - red/blue split */}
          {isGlitching && (
            <>
              <span
                className="absolute inset-0 z-20 animate-glitch-1"
                style={{
                  color: colors.primary,
                  clipPath: 'polygon(0 0, 100% 0, 100% 35%, 0 35%)',
                  transform: 'translate(-3px, 0)',
                  opacity: 0.8,
                }}
                aria-hidden="true"
              >
                {text}
              </span>
              <span
                className="absolute inset-0 z-20 animate-glitch-2"
                style={{
                  color: colors.secondary,
                  clipPath: 'polygon(0 65%, 100% 65%, 100% 100%, 0 100%)',
                  transform: 'translate(3px, 0)',
                  opacity: 0.8,
                }}
                aria-hidden="true"
              >
                {text}
              </span>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
