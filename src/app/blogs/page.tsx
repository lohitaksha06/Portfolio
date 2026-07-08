import Link from 'next/link'
import blogs from '@/data/blogs'

export default function BlogsPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-4xl px-6 pt-32 pb-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#64748b] transition-colors hover:text-[#00d4ff]"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back home
        </Link>

        <header className="mt-8 mb-14">
          <h1 className="font-display text-4xl font-bold text-white md:text-5xl">Some Silly Blogs I Wrote</h1>
          <p className="mt-3 text-lg text-[#94a3b8]">
            A tiny shelf for my experiments, rambles, and technology breakdowns.
          </p>
        </header>

        <div className="flex flex-col gap-8">
          {blogs.map((blog) => (
            <a
              key={blog.id}
              href={blog.href}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-border group rounded-2xl bg-[rgba(15,23,42,0.6)] p-6 transition-all duration-300 hover:scale-[1.01] hover:bg-[rgba(15,23,42,0.9)]"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <h2 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[#00d4ff]">
                  {blog.title}
                </h2>
                <time className="shrink-0 text-xs uppercase tracking-[0.3em] text-[#64748b]">
                  {blog.date}
                </time>
              </div>
              <p className="mt-3 leading-relaxed text-[#94a3b8]">{blog.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#00d4ff] transition-all duration-300 group-hover:gap-2">
                Read on LinkedIn
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.linkedin.com/in/lohitaksha-patary-34638a321/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full neon-border px-6 py-3 text-sm font-medium text-[#00d4ff] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
          >
            Explore all on LinkedIn
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  )
}
