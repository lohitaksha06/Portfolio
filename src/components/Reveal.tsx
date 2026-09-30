'use client'

import { useEffect } from 'react'

/**
 * Adds `.reveal` to every section and brings each one in as it scrolls
 * into view. Sections are hidden by CSS only when `html.js` is set, which
 * happens in a blocking script in the document head — so if this script
 * never runs, nothing is ever hidden.
 */
export default function Reveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      items.forEach((el) => el.classList.add('in'))
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          })
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
      )

      items.forEach((el) => io.observe(el))
      return () => io.disconnect()
    }
  }, [])

  return null
}

/**
 * Honours a section fragment on arrival. The browser only scrolls to a
 * fragment it sees in the very first response, so a deep link that lands
 * here through a soft navigation — an old /projects bookmark, or a hash
 * applied after hydration — is otherwise left at the top of the page.
 * Runs once on mount and again whenever the hash changes.
 */
export function HashScroll() {
  useEffect(() => {
    function toHash() {
      const id = window.location.hash.slice(1)
      if (!id) return
      const target = document.getElementById(id)
      if (!target) return
      target.scrollIntoView({ block: 'start' })
    }

    // Wait a frame so layout has settled and the reveal observer has run.
    const raf = requestAnimationFrame(() => requestAnimationFrame(toHash))
    window.addEventListener('hashchange', toHash)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('hashchange', toHash)
    }
  }, [])

  return null
}
