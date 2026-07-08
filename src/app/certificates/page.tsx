import Link from 'next/link'
import certificates from '@/data/certificates'

export default function CertificatesPage() {
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
          <h1 className="font-display text-4xl font-bold text-white md:text-5xl">Certificates</h1>
          <p className="mt-3 text-lg text-[#94a3b8]">
            Curated highlights of exams and credentials that back the experiments across my portfolio.
          </p>
        </header>

        <div className="flex flex-col gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="neon-border rounded-2xl bg-[rgba(15,23,42,0.6)] p-6 transition-all duration-300 hover:bg-[rgba(15,23,42,0.9)]"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-white">{cert.title}</h2>
                  <p className="mt-1 text-sm uppercase tracking-[0.3em] text-[#64748b]">{cert.issuer}</p>
                  <p className="mt-3 leading-relaxed text-[#94a3b8]">{cert.description}</p>
                </div>
                <div className="flex shrink-0 flex-col items-start gap-3 md:items-end">
                  <span className="rounded-full border border-[rgba(0,212,255,0.2)] bg-[rgba(0,212,255,0.06)] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#00d4ff]">
                    Issued {cert.issuedOn}
                  </span>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-[#00d4ff] transition-colors hover:text-white"
                    >
                      View credential
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
