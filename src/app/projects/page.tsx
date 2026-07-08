import Link from 'next/link'
import projects from '@/data/projects'

export default function ProjectsPage() {
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
          <h1 className="font-display text-4xl font-bold text-white md:text-5xl">Research & Projects</h1>
          <p className="mt-3 text-lg text-[#94a3b8]">
            Real-world builds that blend backend engineering, systems thinking, and clean interfaces.
          </p>
        </header>

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="neon-border rounded-2xl bg-[rgba(15,23,42,0.6)] p-6 transition-all duration-300 hover:bg-[rgba(15,23,42,0.9)] md:p-8"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#00d4ff]">
                    {project.category}
                  </span>
                  <h2 className="mt-1 text-2xl font-bold text-white">{project.title}</h2>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-[#00d4ff] transition-colors hover:text-white"
                  >
                    Visit project
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>

              <p className="mt-4 leading-relaxed text-[#94a3b8]">{project.description}</p>

              <details className="group mt-4">
                <summary className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-[#00d4ff] transition-colors hover:text-white">
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-open:rotate-90"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  Know more
                </summary>
                <div className="mt-4 space-y-4 border-t border-[rgba(0,212,255,0.1)] pt-4">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">Challenge</h4>
                    <p className="mt-1 leading-relaxed text-[#94a3b8]">{project.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">Solution</h4>
                    <p className="mt-1 leading-relaxed text-[#94a3b8]">{project.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">Impact</h4>
                    <ul className="mt-2 list-inside list-disc space-y-1 text-[#94a3b8]">
                      {project.results.map((result, i) => (
                        <li key={i}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </details>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/lohitaksha06"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full neon-border px-6 py-3 text-sm font-medium text-[#00d4ff] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
          >
            Explore more on GitHub
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  )
}
