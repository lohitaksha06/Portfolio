'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'

interface BlogSummary {
  id: number
  title: string
  excerpt: string
  date: string
  href: string
  imageSrc: string
  imageAlt: string
}

const blogs: BlogSummary[] = [
  {
    id: 3,
    title: "The Future is Decentralized: Understanding Blockchain's Core Principles",
    excerpt:
      'Mapped out the foundational ideas behind decentralized networks, consensus, and why transparent ledgers are reshaping trust online.',
    date: '2024-10-21',
    href: 'https://www.linkedin.com/pulse/future-decentralized-understanding-blockchains-core-patary-noo8c/?trackingId=5HxAiYJSRrCoNs9jFyKgMQ%3D%3D',
    imageSrc: '/images/blogs/blockchain-future.jpg',
    imageAlt: '3D rendering of blockchain data cubes linked together with binary code.',
  },
  {
    id: 1,
    title: 'Sovereign Cloud and Edge Computing: The New Frontier of Data Independence',
    excerpt:
      'Explored why pairing sovereign cloud controls with distributed edge nodes gives regulated teams data residency, resilience, and low-latency analytics.',
    date: '2024-09-12',
    href: 'https://www.linkedin.com/pulse/sovereign-cloud-edge-computing-new-frontier-data-lohitaksha-patary-vtmic/?trackingId=tEqkqeub8jjoECumXJJsNA%3D%3D',
    imageSrc: '/images/blogs/sovereign-cloud-edge.svg',
    imageAlt: 'Abstract cloud network lines on a cyan background',
  },
  {
    id: 2,
    title: 'Building PharmaChain — A Blockchain-Based Pharmaceutical Supply Chain Solution',
    excerpt:
      'Detailed the PharmaChain blueprint that uses smart contracts to trace medicines end-to-end, tighten recall windows, and secure provenance evidence.',
    date: '2024-07-03',
    href: 'https://www.linkedin.com/pulse/building-pharmachain-blockchain-based-pharmaceutical-supply-patary-vbdbc/?trackingId=jBnhp4K4QN%2BvbeD5xGwHmw%3D%3D',
    imageSrc: '/images/blogs/pharmachain.svg',
    imageAlt: 'Blue and white pharmaceutical capsules falling with circuit lines',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0 },
}

export default function BlogsPage() {
  return (
    <>
      <Header />
      <main className="neon-fade min-h-screen bg-black text-white pt-36 pb-20 px-6">
        <header className="max-w-5xl mx-auto mb-14">
          <h1 className="text-5xl font-extrabold tracking-tight">Some Silly Blogs I Wrote</h1>
          <p className="mt-4 max-w-2xl text-zinc-300">A tiny shelf for my experiments, rambles, and technology breakdowns.</p>
        </header>
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          {blogs.map((b, index) => (
            <motion.a
              key={b.id}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group glitch-card flex flex-col overflow-hidden md:flex-row"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35, margin: '0px 0px -120px 0px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.05 }}
            >
              <div className="relative h-52 w-full overflow-hidden md:h-auto md:w-[38%] md:min-h-[220px]">
                <Image
                  src={b.imageSrc}
                  alt={b.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                  sizes="(max-width: 768px) 100vw, 45vw"
                  priority={b.id === 1}
                  unoptimized
                />
              </div>
              <article className="flex flex-1 flex-col gap-4 px-6 py-6 md:px-8 md:py-7">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <h2 className="text-2xl font-semibold leading-snug transition-colors duration-300 group-hover:text-sky-200">
                    {b.title}
                  </h2>
                  <time className="shrink-0 text-xs uppercase tracking-[0.3em] text-zinc-500">
                    {b.date}
                  </time>
                </div>
                <p className="text-sm leading-relaxed text-zinc-300 md:text-base">{b.excerpt}</p>
                <span className="mt-auto inline-flex items-center text-sm font-medium text-sky-300 transition-colors duration-300 group-hover:text-rose-300">
                  Read on LinkedIn →
                </span>
              </article>
            </motion.a>
          ))}
        </div>
      </main>
    </>
  )
}
