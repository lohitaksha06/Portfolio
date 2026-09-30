'use client'

type Theme = 'light' | 'dark'

/**
 * Light/dark toggle. The stored choice is applied by an inline script in
 * the document head before first paint, so the button only has to flip
 * the attribute on the root element. Which icon shows is left entirely to
 * CSS, which keys off the same attribute — so no React state is involved
 * and there is nothing to fall out of sync with the document.
 */
export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement
    const set = root.getAttribute('data-theme')

    // Flip the theme that is actually on screen, not the attribute. With
    // no stored choice the attribute is absent and the OS preference is
    // in charge, so reading the attribute alone would make the first
    // click on a dark-mode machine re-assert dark and appear to do
    // nothing.
    const current: Theme =
      set === 'light' || set === 'dark'
        ? set
        : window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
    const next: Theme = current === 'dark' ? 'light' : 'dark'

    root.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* private browsing: the choice just won't persist */
    }
  }

  return (
    <button
      className="nav-theme"
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark"
      title="Switch between light and dark"
    >
      <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
      </svg>
      <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    </button>
  )
}
