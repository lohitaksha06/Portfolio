'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from '@/context/ThemeContext'

interface Ribbon {
  points: { x: number; y: number; angle: number }[]
  speed: number
  width: number
  hue: number
  offset: number
  direction: number
}

interface Shockwave {
  x: number
  y: number
  radius: number
  maxRadius: number
  opacity: number
  speed: number
  hue: number
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  life: number
  maxLife: number
  hue: number
}

const ElectricWavesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const { colors, theme } = useTheme()
  const ribbonsRef = useRef<Ribbon[]>([])
  const shockwavesRef = useRef<Shockwave[]>([])
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)
  const timeRef = useRef<number>(0)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()

    // Color schemes based on theme
    const getColors = () => {
      if (theme === 'red') {
        return { primary: [350, 100, 55], secondary: [20, 100, 50], bg: [350, 30, 8] }
      } else if (theme === 'bw') {
        return { primary: [0, 0, 100], secondary: [0, 0, 60], bg: [0, 0, 4] }
      }
      return { primary: [185, 94, 43], secondary: [260, 90, 65], bg: [222, 47, 11] }
    }

    const themeColors = getColors()

    // Initialize ribbons - flowing curves across screen
    ribbonsRef.current = Array.from({ length: 6 }, (_, i) => {
      const isFromLeft = i % 2 === 0
      const startY = (canvas.height / 6) * i + Math.random() * 100
      const points = []
      const numPoints = 80
      
      for (let j = 0; j < numPoints; j++) {
        points.push({
          x: isFromLeft ? -200 + j * 25 : canvas.width + 200 - j * 25,
          y: startY,
          angle: 0
        })
      }
      
      return {
        points,
        speed: 1.5 + Math.random() * 1.5,
        width: 40 + Math.random() * 60,
        hue: i % 2 === 0 ? themeColors.primary[0] : themeColors.secondary[0],
        offset: Math.random() * Math.PI * 2,
        direction: isFromLeft ? 1 : -1
      }
    })

    // Spawn shockwave
    const spawnShockwave = () => {
      if (shockwavesRef.current.length < 3) {
        shockwavesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: 0,
          maxRadius: 300 + Math.random() * 400,
          opacity: 0.8,
          speed: 3 + Math.random() * 4,
          hue: Math.random() > 0.5 ? themeColors.primary[0] : themeColors.secondary[0]
        })
      }
    }

    // Spawn particles
    const spawnParticles = (x: number, y: number, count: number) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2
        const speed = 1 + Math.random() * 3
        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 1 + Math.random() * 3,
          life: 0,
          maxLife: 60 + Math.random() * 60,
          hue: Math.random() > 0.5 ? themeColors.primary[0] : themeColors.secondary[0]
        })
      }
    }

    let lastShockwave = 0

    const animate = (timestamp: number) => {
      timeRef.current = timestamp
      
      // Clear with theme background
      const [h, s, l] = themeColors.bg
      ctx.fillStyle = `hsla(${h}, ${s}%, ${l}%, 0.12)`
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw and update ribbons
      ribbonsRef.current.forEach((ribbon, ribbonIndex) => {
        // Update ribbon points with wave motion
        ribbon.points.forEach((point, i) => {
          const waveOffset = timestamp / 1000 + ribbon.offset + i * 0.1
          const waveAmplitude = 80 + Math.sin(timestamp / 2000 + ribbonIndex) * 40
          
          // Main wave motion
          point.y += Math.sin(waveOffset) * 2
          point.x += ribbon.direction * ribbon.speed
          
          // Secondary twist
          point.angle = Math.sin(waveOffset * 2) * 0.5
          
          // Keep in bounds by wrapping
          if (ribbon.direction > 0 && point.x > canvas.width + 300) {
            point.x = -200
            point.y = Math.random() * canvas.height
          } else if (ribbon.direction < 0 && point.x < -300) {
            point.x = canvas.width + 200
            point.y = Math.random() * canvas.height
          }
        })

        // Draw ribbon with gradient and glow
        ctx.save()
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'

        // Draw multiple passes for glow effect
        for (let pass = 0; pass < 3; pass++) {
          const alpha = pass === 0 ? 0.1 : pass === 1 ? 0.3 : 0.8
          const width = ribbon.width * (pass === 0 ? 3 : pass === 1 ? 1.5 : 1)
          
          ctx.beginPath()
          ctx.lineWidth = width

          for (let i = 0; i < ribbon.points.length - 1; i++) {
            const point = ribbon.points[i]
            const nextPoint = ribbon.points[i + 1]
            
            // Calculate twisted y position
            const twist = Math.sin(point.angle) * ribbon.width * 0.5
            const nextTwist = Math.sin(nextPoint.angle) * ribbon.width * 0.5
            
            if (i === 0) {
              ctx.moveTo(point.x, point.y + twist)
            }
            
            // Bezier curve for smooth ribbon
            const cpX = (point.x + nextPoint.x) / 2
            const cpY = (point.y + twist + nextPoint.y + nextTwist) / 2
            ctx.quadraticCurveTo(point.x, point.y + twist, cpX, cpY)
          }

          // Create gradient along ribbon
          const gradient = ctx.createLinearGradient(
            ribbon.points[0].x, ribbon.points[0].y,
            ribbon.points[ribbon.points.length - 1].x, ribbon.points[ribbon.points.length - 1].y
          )
          
          const sat = theme === 'bw' ? 0 : 90
          gradient.addColorStop(0, `hsla(${ribbon.hue}, ${sat}%, 60%, 0)`)
          gradient.addColorStop(0.2, `hsla(${ribbon.hue}, ${sat}%, 60%, ${alpha * 0.8})`)
          gradient.addColorStop(0.5, `hsla(${ribbon.hue + 20}, ${sat}%, 70%, ${alpha})`)
          gradient.addColorStop(0.8, `hsla(${ribbon.hue}, ${sat}%, 60%, ${alpha * 0.8})`)
          gradient.addColorStop(1, `hsla(${ribbon.hue}, ${sat}%, 60%, 0)`)
          
          ctx.strokeStyle = gradient
          ctx.stroke()
        }
        
        ctx.restore()
      })

      // Spawn shockwaves periodically
      if (timestamp - lastShockwave > 2000 + Math.random() * 3000) {
        spawnShockwave()
        lastShockwave = timestamp
      }

      // Update and draw shockwaves
      shockwavesRef.current = shockwavesRef.current.filter(wave => {
        wave.radius += wave.speed
        wave.opacity = 1 - (wave.radius / wave.maxRadius)
        
        if (wave.radius >= wave.maxRadius) {
          // Spawn particles at shockwave edge
          for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2
            spawnParticles(
              wave.x + Math.cos(angle) * wave.radius * 0.8,
              wave.y + Math.sin(angle) * wave.radius * 0.8,
              2
            )
          }
          return false
        }

        // Draw shockwave rings
        const sat = theme === 'bw' ? 0 : 100
        for (let ring = 0; ring < 3; ring++) {
          const ringRadius = wave.radius - ring * 15
          if (ringRadius > 0) {
            ctx.beginPath()
            ctx.arc(wave.x, wave.y, ringRadius, 0, Math.PI * 2)
            ctx.strokeStyle = `hsla(${wave.hue + ring * 10}, ${sat}%, 60%, ${wave.opacity * (0.8 - ring * 0.2)})`
            ctx.lineWidth = 3 - ring
            ctx.stroke()
          }
        }

        // Inner glow
        const gradient = ctx.createRadialGradient(
          wave.x, wave.y, 0,
          wave.x, wave.y, wave.radius
        )
        gradient.addColorStop(0, `hsla(${wave.hue}, ${sat}%, 70%, ${wave.opacity * 0.3})`)
        gradient.addColorStop(0.5, `hsla(${wave.hue}, ${sat}%, 60%, ${wave.opacity * 0.1})`)
        gradient.addColorStop(1, 'transparent')
        
        ctx.beginPath()
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        return true
      })

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.vx *= 0.98
        particle.vy *= 0.98
        particle.life++
        
        if (particle.life >= particle.maxLife) return false
        
        const lifeRatio = particle.life / particle.maxLife
        const alpha = lifeRatio < 0.2 ? lifeRatio * 5 : 1 - (lifeRatio - 0.2) / 0.8
        
        const sat = theme === 'bw' ? 0 : 100
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${particle.hue}, ${sat}%, 70%, ${alpha})`
        ctx.fill()
        
        // Glow
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${particle.hue}, ${sat}%, 60%, ${alpha * 0.3})`
        ctx.fill()
        
        return true
      })

      // Random electric bolts
      if (Math.random() > 0.97) {
        const startX = Math.random() * canvas.width
        const startY = Math.random() * canvas.height
        const hue = Math.random() > 0.5 ? themeColors.primary[0] : themeColors.secondary[0]
        const sat = theme === 'bw' ? 0 : 100
        
        ctx.save()
        ctx.strokeStyle = `hsla(${hue}, ${sat}%, 80%, 0.9)`
        ctx.lineWidth = 2
        ctx.lineCap = 'round'
        ctx.shadowColor = `hsla(${hue}, ${sat}%, 60%, 1)`
        ctx.shadowBlur = 20
        
        ctx.beginPath()
        ctx.moveTo(startX, startY)
        
        let x = startX
        let y = startY
        const segments = 5 + Math.floor(Math.random() * 10)
        
        for (let i = 0; i < segments; i++) {
          const angle = Math.random() * Math.PI * 2
          const length = 30 + Math.random() * 80
          x += Math.cos(angle) * length
          y += Math.sin(angle) * length
          ctx.lineTo(x, y)
        }
        
        ctx.stroke()
        
        // Secondary bolt with offset
        ctx.strokeStyle = `hsla(${hue + 30}, ${sat}%, 90%, 0.5)`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(startX + 3, startY - 3)
        
        x = startX + 3
        y = startY - 3
        for (let i = 0; i < segments; i++) {
          const angle = Math.random() * Math.PI * 2
          const length = 30 + Math.random() * 80
          x += Math.cos(angle) * length
          y += Math.sin(angle) * length
          ctx.lineTo(x, y)
        }
        ctx.stroke()
        
        ctx.restore()
        
        // Spawn particles at bolt start
        spawnParticles(startX, startY, 5)
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    const handleResize = () => {
      setCanvasSize()
      // Reinitialize ribbons on resize
      ribbonsRef.current.forEach((ribbon, i) => {
        ribbon.points.forEach((point, j) => {
          const isFromLeft = i % 2 === 0
          point.x = isFromLeft ? -200 + j * 25 : canvas.width + 200 - j * 25
          point.y = (canvas.height / 6) * i + Math.random() * 100
        })
      })
    }
    
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', handleResize)
    }
  }, [isMounted, colors, theme])

  if (!isMounted) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  )
}

export default ElectricWavesBackground
