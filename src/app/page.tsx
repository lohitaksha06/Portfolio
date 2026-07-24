import Link from 'next/link'
import { about } from '@/data/about'

function NavCard({ href, label, description }: { href: string; label: string; description: string }) {
  return (
    <Link
      href={href}
      className="group neon-border relative flex items-center justify-between rounded-2xl bg-[rgba(15,23,42,0.6)] px-8 py-6 transition-all duration-300 hover:scale-[1.02] hover:bg-[rgba(15,23,42,0.9)]"
    >
      <div>
        <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[#00d4ff]">
          {label}
        </h3>
        <p className="mt-1 text-sm text-[#94a3b8]">{description}</p>
      </div>
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(0,212,255,0.3)] text-[#00d4ff] transition-all duration-300 group-hover:border-[#00d4ff] group-hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]">
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </Link>
  )
}

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="mx-auto max-w-4xl px-6 pt-32 pb-24">
        <section>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#00d4ff]">Hello, I&apos;m</p>
          <h1 className="mt-3 font-display text-5xl font-bold leading-tight text-white md:text-7xl">
            Lohitaksha Patary
          </h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-[#cbd5e1] md:text-xl">
            {about.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="mt-20 space-y-4">
          <NavCard
            href="/blogs"
            label="Find Out My Blogs"
            description="Thoughts on blockchain, AI, cloud, and everything in between."
          />
          <NavCard
            href="/certificates"
            label="My Certificates"
            description="Credentials from Google, Coursera, and more."
          />
          <NavCard
            href="/projects"
            label="Research & Projects"
            description="Real-world builds — from campus canteens to LLM-powered query engines."
          />
        </section>

        <section className="mt-24 text-center">
          <h2 className="text-sm font-medium uppercase tracking-[0.3em] text-[#64748b]">Find me on</h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
            <a href="https://www.instagram.com/lohitaksha.06/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm text-[#64748b] transition-colors hover:text-[#00d4ff]">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none"/><circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" fill="none"/><circle cx="17.5" cy="6.5" r="1.25" fill="currentColor"/></svg>
              <span>lohitaksha.06</span>
            </a>
            <a href="https://discord.com/users/ronhere" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm text-[#64748b] transition-colors hover:text-[#00d4ff]">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37A19.79 19.79 0 0016.23 3.1a13.91 13.91 0 00-.597 1.233 18.27 18.27 0 00-5.266 0A13.84 13.84 0 009.77 3.1a19.736 19.736 0 00-4.09 1.272C3.093 8.2 2.392 11.932 2.744 15.61a19.9 19.9 0 005.032 2.57c.408-.56.773-1.153 1.09-1.774a12.77 12.77 0 01-1.716-.826c.145-.105.286-.214.424-.326a14.15 14.15 0 0012.852 0c.14.112.28.221.424.326-.545.32-1.118.6-1.716.827.317.62.682 1.212 1.09 1.773a19.85 19.85 0 005.032-2.57c.414-4.264-.708-7.962-2.765-11.24zM9.52 13.35c-.999 0-1.82-.916-1.82-2.04s.804-2.04 1.82-2.04c1.023 0 1.838.924 1.82 2.04 0 1.124-.804 2.04-1.82 2.04zm4.96 0c-.999 0-1.82-.916-1.82-2.04s.804-2.04 1.82-2.04c1.023 0 1.838.924 1.82 2.04 0 1.124-.797 2.04-1.82 2.04z"/></svg>
              <span>ronhere</span>
            </a>
            <a href="https://www.linkedin.com/in/lohitaksha-patary-34638a321/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm text-[#64748b] transition-colors hover:text-[#00d4ff]">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.983 3.5C4.983 4.881 3.88 6 2.5 6S0 4.881 0 3.5 1.12 1 2.5 1s2.483 1.119 2.483 2.5zM.5 8h4V23h-4V8zm7 0h3.833v2.047h.055C11.93 9.071 13.488 7.5 16.22 7.5 21.263 7.5 22 10.814 22 15.123V23h-4v-6.923c0-1.65-.03-3.77-2.296-3.77-2.3 0-2.652 1.796-2.652 3.653V23h-4V8z"/></svg>
              <span>Lohitaksha Patary</span>
            </a>
          </div>
        </section>

        <footer className="mt-16 border-t border-[rgba(0,212,255,0.1)] pt-8 text-center text-sm text-[#64748b]">
          <p>Built with Next.js &middot; Lohitaksha Patary &copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </main>
  )
}
