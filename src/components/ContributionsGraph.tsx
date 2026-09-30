'use client'

import { useEffect, useRef } from 'react'
import data from '@/data/contributions.json'

/**
 * A year's contribution heatmap, drawn from the committed snapshot in
 * src/data/contributions.json (refresh with `npm run contributions`).
 *
 * Rendered as real SVG rather than an image so the cells take the theme's
 * accent and survive a light/dark switch. Each cell is a <rect> with a
 * <title>, so hovering a day reads out the date and count without any
 * script.
 */

type Day = { date: string; count: number; level: number }

const days = data.days as Day[]

const CELL = 10
const GAP = 3
const STEP = CELL + GAP

/** Weekday row 0 is Sunday, matching the order days arrive in. */
const WEEKDAY_LABELS = [
  { row: 1, label: 'Mon' },
  { row: 3, label: 'Wed' },
  { row: 5, label: 'Fri' },
]

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

/** Column of the first day in each month, for the labels along the top. */
function monthColumns(days: Day[]) {
  const seen = new Set<number>()
  const out: { col: number; label: string }[] = []
  days.forEach((d, i) => {
    const month = Number(d.date.slice(5, 7)) - 1
    if (seen.has(month)) return
    seen.add(month)
    out.push({ col: Math.floor(i / 7), label: MONTHS[month] })
  })
  return out
}

/** "12 Mar", or just "March" when the year changes. */
function describe(date: string) {
  const [y, m, d] = date.split('-').map(Number)
  const month = MONTHS[m - 1]
  return `${d} ${month} ${y}`
}

const columns = monthColumns(days)
const width = days.length / 7 > 0 ? Math.ceil(days.length / 7) * STEP + 28 : 0
const height = 7 * STEP + 20

export default function ContributionsGraph() {
  const graphRef = useRef<HTMLDivElement>(null)

  /* The cells land column by column the first time the panel scrolls into
     view. CSS holds them at scale 0 until `.shown` is set. The shared
     Reveal pass owns both this class and the failsafe that guarantees it
     arrives even if the observer never fires. */
  useEffect(() => {
    const el = graphRef.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('shown')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          el.classList.add('shown')
          io.disconnect()
        })
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div className="gh-panel">
      <div className="gh-graph" ref={graphRef}>
        <svg
          className="gh-cal"
          viewBox={`0 0 ${width} ${height}`}
          role="img"
          aria-label={`${data.total} contributions on GitHub in the last year`}
          preserveAspectRatio="xMinYMid meet"
        >
          {/* Month labels along the top. */}
          {columns.map((m) => (
            <text key={`${m.label}-${m.col}`} className="gh-month" x={28 + m.col * STEP} y={8}>
              {m.label}
            </text>
          ))}

          {/* Weekday labels down the left. */}
          {WEEKDAY_LABELS.map((w) => (
            <text
              key={w.label}
              className="gh-month"
              x={0}
              y={20 + w.row * STEP + 8}
              textAnchor="start"
            >
              {w.label}
            </text>
          ))}

          {days.map((d, i) => {
            const col = Math.floor(i / 7)
            const row = i % 7
            return (
              <rect
                key={d.date}
                className={`l${d.level}`}
                x={28 + col * STEP}
                y={20 + row * STEP}
                width={CELL}
                height={CELL}
                rx={2}
                style={{ '--c': col } as React.CSSProperties}
              >
                <title>{`${describe(d.date)} — ${d.count} contribution${d.count === 1 ? '' : 's'}`}</title>
              </rect>
            )
          })}
        </svg>

        <div className="gh-legend">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((l) => (
            <span key={l} className={`l${l}`} />
          ))}
          <span>More</span>
        </div>
      </div>

      <p className="gh-graph-caption">
        <small>
          <b>{data.total}</b> contributions in the last year &middot; snapshot from{' '}
          {describe(data.fetchedAt.slice(0, 10))} &middot;{' '}
          <a href={`https://github.com/${data.user}`}>github.com/{data.user}</a>
        </small>
      </p>
    </div>
  )
}
