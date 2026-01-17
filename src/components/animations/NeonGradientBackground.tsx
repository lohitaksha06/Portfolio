'use client'

import { useEffect, useRef } from 'react'

const NeonGradientBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const lines: Array<{
      x: number
      y: number
      vx: number
      vy: number
      width: number
      angle: number
    }> = []

    // Create animated gradient lines
    for (let i = 0; i < 3; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        width: 100 + Math.random() * 200,
        angle: Math.random() * Math.PI * 2,
      })
    }

    const animate = () => {
      // Clear canvas with semi-transparent dark background
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      lines.forEach((line, index) => {
        // Update position
        line.x += line.vx
        line.y += line.vy
        line.angle += 0.001

        // Wrap around edges
        if (line.x > canvas.width + 100) line.x = -100
        if (line.x < -100) line.x = canvas.width + 100
        if (line.y > canvas.height + 100) line.y = -100
        if (line.y < -100) line.y = canvas.height + 100

        // Create gradient
        const gradient = ctx.createLinearGradient(
          line.x,
          line.y,
          line.x + Math.cos(line.angle) * line.width,
          line.y + Math.sin(line.angle) * line.width
        )

        // Cyan to purple gradient
        const colors = [
          'rgba(6, 182, 212, 0)',
          'rgba(6, 182, 212, 0.4)',
          'rgba(139, 92, 246, 0.3)',
          'rgba(6, 182, 212, 0)',
        ]

        colors.forEach((color, i) => {
          gradient.addColorStop(i / (colors.length - 1), color)
        })

        // Draw the gradient line
        ctx.strokeStyle = gradient
        ctx.lineWidth = 80 + Math.sin(Date.now() / 1000 + index) * 40
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'

        ctx.beginPath()
        ctx.moveTo(line.x, line.y)
        ctx.lineTo(
          line.x + Math.cos(line.angle) * line.width,
          line.y + Math.sin(line.angle) * line.width
        )
        ctx.stroke()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}

export default NeonGradientBackground
