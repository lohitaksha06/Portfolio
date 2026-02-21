'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface FadeOnScrollProps {
  children: ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  delay?: number
  duration?: number
  threshold?: number
}

export default function FadeOnScroll({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.6,
  threshold = 0.2,
}: FadeOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { 
    once: false, 
    amount: threshold,
    margin: '-50px 0px',
  })

  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    none: { y: 0, x: 0 },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ 
        opacity: 0, 
        y: directionOffset[direction].y,
        x: directionOffset[direction].x,
        filter: 'blur(8px)',
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        x: 0,
        filter: 'blur(0px)',
      } : { 
        opacity: 0, 
        y: directionOffset[direction].y,
        x: directionOffset[direction].x,
        filter: 'blur(8px)',
      }}
      transition={{ 
        duration, 
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
