'use client'

import { useEffect } from 'react'

/**
 * Scroll reveal. Adds `.in` to each `.reveal` section as it comes into
 * view.
 *
 * Three guards, because the failure mode is a blank page:
 *
 *  1. CSS only hides `.reveal` when `html.js` is set, by a blocking script
 *     in the document head. So no JavaScript means no hiding.
 *  2. Anything already at or above the fold when this runs is revealed
 *     immediately, rather than waiting on a callback. This is what covers a
 *     deep link: the browser has already jumped to the fragment, and
 *     nothing would otherwise scroll it back into view.
 *  3. A failsafe reveals everything after a short delay, in case the
 *     observer never delivers. IntersectionObserver is tied to the
 *     rendering lifecycle, so it can be starved in a background tab or on
 *     a throttled page; the content should not be the thing that breaks.
 */

const FAILSAFE_MS = 2500

function revealNow() {
  document.querySelectorAll<HTMLElement>('.reveal:not(.in)').forEach((el) => {
    el.classList.add('in')
  })
  document.querySelectorAll<HTMLElement>('.gh-graph:not(.shown)').forEach((el) => {
    el.classList.add('shown')
  })
}

export default function Reveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    if (!items.length) return

    // Guard 2: reveal whatever is already visible, before observing.
    const vh = window.innerHeight
    items.forEach((el) => {
      if (el.getBoundingClientRect().top < vh) el.classList.add('in')
    })

    // Guard 3: nothing stays hidden.
    const failsafe = window.setTimeout(revealNow, FAILSAFE_MS)

    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('in'))
      document
        .querySelectorAll<HTMLElement>('.gh-graph')
        .forEach((el) => el.classList.add('shown'))
      return () => window.clearTimeout(failsafe)
    }

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

    items.forEach((el) => {
      if (!el.classList.contains('in')) io.observe(el)
    })

    return () => {
      window.clearTimeout(failsafe)
      io.disconnect()
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
      // Make sure the target is not sitting at opacity 0 when we land.
      target.closest<HTMLElement>('.reveal')?.classList.add('in')
      target.scrollIntoView({ block: 'start' })
    }

    // Wait a frame so layout has settled and the reveal pass has run.
    const raf = requestAnimationFrame(() => requestAnimationFrame(toHash))
    window.addEventListener('hashchange', toHash)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('hashchange', toHash)
    }
  }, [])

  return null
}
