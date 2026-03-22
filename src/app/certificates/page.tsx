'use client'

import Header from '@/components/layout/Header'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Certificate {
  id: number
  title: string
  issuer: string
  issuedOn: string
  description: string
  credentialUrl: string
  imageSrc: string
  imageAlt: string
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Analyze Data to Answer Questions',
    issuer: 'Google / Coursera',
    issuedOn: '2025-11-21',
    description:
      'Completed the Google Data Analytics specialization module focused on framing questions, preparing datasets, and building insights for stakeholders.',
    credentialUrl: 'https://coursera.org/share/3a9f0a87bd92c7414e02932e04b83d94',
    imageSrc: '/images/certificates/google-data-analytics.jpg',
    imageAlt: 'Google Coursera certificate for Analyze Data to Answer Questions.',
  },
  {
    id: 2,
    title: 'Build Dynamic User Interfaces (UI) for Websites',
    issuer: 'Google / Coursera',
    issuedOn: '2023-10-05',
    description:
      'Completed the Coursera project-based course on crafting responsive, interactive UI patterns using modern web development tooling.',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/463CXIM5LMIE',
    imageSrc: '/images/certificates/google-ui-for-websites.jpg',
    imageAlt: 'Google Coursera certificate for Build Dynamic User Interfaces (UI) for Websites.',
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
              className="glitch-card flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4, margin: '0px 0px -120px 0px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
            >
              <div className="relative w-full overflow-hidden rounded-lg border border-yellow-900/40 bg-black/30 shadow-[0_0_25px_rgba(56,189,248,0.15)] md:w-[42%]">
                <Image
                  src={cert.imageSrc}
                  alt={cert.imageAlt}
                  width={960}
                  height={720}
                  className="h-full w-full object-cover"
                  priority
                  unoptimized
                />
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-yellow-200">{cert.title}</h2>
                <p className="mt-1 text-sm uppercase tracking-[0.35em] text-zinc-500">{cert.issuer}</p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">{cert.description}</p>
              </div>
              <div className="mt-6 flex w-full flex-col items-start gap-3 text-sm text-zinc-400 md:mt-0 md:w-auto">
                <span className="rounded-full border border-yellow-900/40 bg-zinc-950/60 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-yellow-200">
                  Issued {cert.issuedOn}
                </span>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-yellow-300 transition-colors duration-300 hover:text-yellow-300"
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
