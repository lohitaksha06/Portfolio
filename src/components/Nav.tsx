'use client'

import { useEffect, useRef, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'opensource', label: 'GitHub' },
  { id: 'publications', label: 'Research' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'blogs', label: 'Blogs' },
]

export default function Nav() {
  const linksRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<string>('about')

  /* Hover pill: fades in under the first link the pointer reaches, then
     glides between links while the pointer stays in the bar. */
  useEffect(() => {
    const links = linksRef.current
    if (!links) return
    const pill = links.querySelector<HTMLElement>('.nav-pill')
    if (!pill) return

    const anchors = Array.from(links.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'))

    function move(a: HTMLAnchorElement) {
      const fresh = !pill!.classList.contains('on')
      if (fresh) pill!.classList.remove('glide')
      pill!.style.transform = `translateX(${a.offsetLeft}px)`
      pill!.style.width = `${a.offsetWidth}px`
      if (fresh) {
        void pill!.offsetWidth
        pill!.classList.add('glide', 'on')
      }
    }

    anchors.forEach((a) => {
      a.addEventListener('pointerenter', (e) => {
        if ((e as PointerEvent).pointerType === 'touch') return
        move(a)
      })
    })

    function hide() {
      pill!.classList.remove('on')
    }

    links.addEventListener('pointerleave', hide)

    return () => {
      links.removeEventListener('pointerleave', hide)
    }
  }, [])

  /* Highlight whichever section is under the bar. A band just below the
     nav line, so a heading never counts as active while it is still
     hidden behind the bar. */
  useEffect(() => {
    const targets = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null
    )
    if (!targets.length) return

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-84px 0px -55% 0px', threshold: 0 }
    )

    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [])

  return (
    <nav className="topnav">
      <div className="topnav-inner">
        <div className="topnav-links" ref={linksRef}>
          <span className="nav-pill" aria-hidden="true" />
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'active' : undefined}>
              {s.label}
            </a>
          ))}
        </div>

        <a
          className="nav-cta"
          href="/resume/Lohitaksha_Patary_RESUME.pdf"
          download
          title="Download resume (PDF)"
        >
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 2 0 01.707.293l5.414 5.414a1 2 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>Resume</span>
        </a>
        <a
          className="nav-cta"
          href="/cv/Lohitaksha_Patary_Full_CV.pdf"
          download
          title="Download full CV (PDF)"
        >
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 2 0 01.707.293l5.414 5.414a1 2 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>CV</span>
        </a>
        <ThemeToggle />
      </div>
    </nav>
  )
}
