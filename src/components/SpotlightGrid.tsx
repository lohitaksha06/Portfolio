'use client'

import { useEffect, useRef } from 'react'

/**
 * Lights the cards in a grid from the cursor, so a card still glows at
 * the edge nearest a cursor that is over its neighbour. One listener for
 * the whole grid; each card gets the cursor in its own coordinates, so
 * every card agrees on where the light is.
 */
export default function SpotlightGrid({
  children,
  className = 'tile-grid auto',
}: {
  children: React.ReactNode
  className?: string
}) {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const cards = grid.querySelectorAll<HTMLElement>('.project-tile')
    if (!cards.length) return

    function onMove(e: PointerEvent) {
      if (e.pointerType !== 'mouse') return
      grid!.setAttribute('data-lit', '')
      cards.forEach((card) => {
        const box = card.getBoundingClientRect()
        card.style.setProperty('--x', `${e.clientX - box.left}px`)
        card.style.setProperty('--y', `${e.clientY - box.top}px`)
      })
    }

    function onLeave() {
      grid!.removeAttribute('data-lit')
    }

    grid.addEventListener('pointermove', onMove)
    grid.addEventListener('pointerleave', onLeave)
    return () => {
      grid.removeEventListener('pointermove', onMove)
      grid.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <div className={className} ref={gridRef}>
      {children}
    </div>
  )
}
