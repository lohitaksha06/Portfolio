'use client'

import Header from '@/components/layout/Header'
import { motion } from 'framer-motion'

interface Certificate {
  id: number
  title: string
  issuer: string
  issuedOn: string
  description: string
  credentialUrl?: string
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Azure Fundamentals',
    issuer: 'Microsoft',
    issuedOn: '2024-05-18',
    description: 'Validated core knowledge of Azure workloads, governance, and deployment models.',
    credentialUrl: 'https://learn.microsoft.com/cert/azure-fundamentals',
  },
  {
    id: 2,
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    issuedOn: '2023-12-02',
    description: 'Demonstrated foundational understanding of AWS global infrastructure and billing.',
    credentialUrl: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
  },
  {
    id: 3,
    title: 'Certified Blockchain Associate',
    issuer: 'Blockchain Council',
    issuedOn: '2023-08-27',
    description: 'Covered distributed ledger concepts, smart contract evaluation, and supply chain traceability.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

export default function CertificatesPage() {
  return (
    <>
      <Header />
      <main className="neon-fade min-h-screen bg-black text-white pt-36 pb-20 px-6">
        <header className="max-w-5xl mx-auto mb-14">
          <h1 className="text-5xl font-extrabold tracking-tight">Certificates</h1>
          <p className="mt-4 max-w-2xl text-zinc-300">
            Curated highlights of exams and credentials that back the experiments across my portfolio.
          </p>
        </header>
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {certificates.map((cert, index) => (
            <motion.article
              key={cert.id}
              className="glitch-card flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4, margin: '0px 0px -120px 0px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
            >
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-sky-200">{cert.title}</h2>
                <p className="mt-1 text-sm uppercase tracking-[0.35em] text-zinc-500">{cert.issuer}</p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">{cert.description}</p>
              </div>
              <div className="mt-6 flex w-full flex-col items-start gap-3 text-sm text-zinc-400 md:mt-0 md:w-auto">
                <span className="rounded-full border border-sky-900/40 bg-slate-950/60 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-sky-200">
                  Issued {cert.issuedOn}
                </span>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sky-300 transition-colors duration-300 hover:text-rose-300"
                  >
                    View credential ↗
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </main>
    </>
  )
}
