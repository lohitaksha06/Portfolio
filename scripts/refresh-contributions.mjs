/**
 * Refreshes the GitHub contribution snapshot the site renders.
 *
 *   npm run contributions
 *
 * The data is committed to the repo so the page never depends on a
 * third-party service at request time. Re-run this when you want the
 * graph updated; it is a snapshot, not a live feed.
 */
import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const USER = process.argv[2] || 'lohitaksha06'
const SOURCE = `https://ghchart.rshah.org/${USER}`
const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'contributions.json')

/** GitHub's five contribution levels, from the raw daily count. */
function level(count) {
  if (count === 0) return 0
  if (count <= 3) return 1
  if (count <= 6) return 2
  if (count <= 9) return 3
  return 4
}

const res = await fetch(SOURCE, {
  headers: { 'User-Agent': 'portfolio-contribution-refresh' },
})

if (!res.ok) {
  console.error(`Could not read ${SOURCE} — HTTP ${res.status}`)
  process.exit(1)
}

const svg = await res.text()

// Each day is a <rect> carrying its raw count and date.
const days = [...svg.matchAll(/<rect[^>]*data-score="(\d+)"[^>]*data-date="([\d-]+)"/g)].map(
  ([, score, date]) => ({ date, count: Number(score) })
)

if (!days.length) {
  console.error(`No contribution cells found in the response from ${SOURCE}.`)
  process.exit(1)
}

days.sort((a, b) => (a.date < b.date ? -1 : 1))

const payload = {
  user: USER,
  fetchedAt: new Date().toISOString(),
  total: days.reduce((sum, d) => sum + d.count, 0),
  days: days.map((d) => ({ date: d.date, count: d.count, level: level(d.count) })),
}

await writeFile(OUT, JSON.stringify(payload, null, 0) + '\n', 'utf8')

const first = payload.days[0].date
const last = payload.days[payload.days.length - 1].date
console.log(
  `Wrote ${payload.days.length} days (${first} to ${last}), ` +
    `${payload.total} contributions, to src/data/contributions.json`
)
