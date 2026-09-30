/**
 * Brand and utility marks used in links across the site. Drawn inline at
 * 16px on a 16px grid so they sit on the text baseline, and inherit
 * `currentColor` so hover states come for free.
 */

const box = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function GitHub() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
      />
    </svg>
  )
}

export function LinkedIn() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3.6 5.5H.9V15h2.7V5.5ZM2.25 1a1.57 1.57 0 1 0 0 3.13 1.57 1.57 0 0 0 0-3.13ZM15.1 9.6c0-2.62-1.4-3.84-3.27-3.84-1.5 0-2.18.83-2.55 1.41V5.5H6.58c.04.76 0 9.5 0 9.5h2.7V9.7c0-.24.02-.48.09-.65.19-.48.63-.98 1.37-.98.96 0 1.35.73 1.35 1.8V15h2.7V9.6Z"
      />
    </svg>
  )
}

export function Instagram() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect x="1.4" y="1.4" width="13.2" height="13.2" rx="4" {...box} />
      <circle cx="8" cy="8" r="3.1" {...box} />
      <circle cx="11.7" cy="4.3" r="0.85" fill="currentColor" />
    </svg>
  )
}

export function Mail() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect x="1.2" y="3.2" width="13.6" height="9.6" rx="1.8" {...box} />
      <path d="m1.9 4.4 5.2 3.6a1.4 1.4 0 0 0 1.6 0l5.4-3.6" {...box} />
    </svg>
  )
}

export function External() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M6.4 2.6H3.2c-.6 0-1 .4-1 1v8.8c0 .6.4 1 1 1h8.8c.6 0 1-.4 1-1V9.2"
        {...box}
      />
      <path d="M9.4 2.2h4.4v4.4M13.6 2.4 7.6 8.4" {...box} />
    </svg>
  )
}

export function Download() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 2.4v7.2m0 0L5.2 6.9M8 9.6l2.8-2.7" {...box} />
      <path d="M2.8 11.4v1.2c0 .6.4 1 1 1h8.4c.6 0 1-.4 1-1v-1.2" {...box} />
    </svg>
  )
}

const SocialIcons = { GitHub, LinkedIn, Instagram, Mail, External, Download }

export default SocialIcons
