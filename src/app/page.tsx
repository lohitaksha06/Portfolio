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

        <footer className="mt-24 border-t border-[rgba(0,212,255,0.1)] pt-8 text-center text-sm text-[#64748b]">
          <p>Built with Next.js &middot; Lohitaksha Patary &copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </main>
  )
}
