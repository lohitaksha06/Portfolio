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
    id: 4,
    title:
      'Studio Ghibli and the AI Controversy: A Broader Warning About Creativity, Ethics, and Plagiarism in the Age of Generative AI',
    excerpt:
      'Reflected on the Ghibli backlash to examine where generative AI crosses ethical lines, and how creators can safeguard originality without halting innovation.',
    date: '2024-11-05',
    href: 'https://www.linkedin.com/pulse/studio-ghibli-ai-controversy-broader-warning-ethics-age-patary-xd2xc/?trackingId=R5IcI5EnQ6Ky5FHdYogxrg%3D%3D',
    imageSrc: '/images/blogs/studio-ghibli-ai.jpg',
    imageAlt: 'Stylized illustration of a girl facing an AI circuit silhouette referencing Studio Ghibli controversy.',
  },
  {
    id: 5,
    title: 'From Smart Contracts to Smart Economies: Blockchain’s Role in Building Autonomous Systems',
    excerpt:
      'Outlined how composable smart contracts can automate governance and value exchange, paving the way for self-running digital economies.',
    date: '2024-08-16',
    href: 'https://www.linkedin.com/pulse/from-smart-contracts-economies-blockchains-role-building-patary-rjlyc/?trackingId=R5IcI5EnQ6Ky5FHdYogxrg%3D%3D',
    imageSrc: '/images/blogs/blockchain-economies.jpg',
    imageAlt: 'Illustration showing blockchain network nodes enabling smart contract interactions.',
  },
  {
    id: 6,
    title: 'Smart Clouds, Smarter Code: What Developers Need to Know About AI-Powered Platforms',
    excerpt:
      'Shared practical takeaways for dev teams adopting AI-assisted cloud services, from guardrails and observability to balancing automation with human oversight.',
    date: '2024-06-09',
    href: 'https://www.linkedin.com/pulse/smart-clouds-smarter-code-what-developers-need-know-platforms-patary-lgidc/?trackingId=R5IcI5EnQ6Ky5FHdYogxrg%3D%3D',
    imageSrc: '/images/blogs/smart-clouds.jpg',
    imageAlt: 'Futuristic glowing cloud icon hovering above circuit-like infrastructure.',
  },
  {
    id: 7,
    title: 'Project Update: Building PharmaChain – A Blockchain-Based Medicine Supply Chain Tracker',
    excerpt:
      'Documented the latest sprint where PharmaChain gained lot tracking, cold-chain anomaly alerts, and a patient-facing verification portal.',
    date: '2024-05-22',
    href: 'https://www.linkedin.com/pulse/project-update-building-pharmachain-blockchain-based-medicine-patary-u8z8c/?trackingId=R5IcI5EnQ6Ky5FHdYogxrg%3D%3D',
    imageSrc: '/images/blogs/pharmachain-update.jpg',
    imageAlt: 'Illustration of blockchain cubes connected with healthcare icons representing PharmaChain.',
  },
  {
    id: 8,
    title: 'Tackling Blockchain Bloat: Can AI Help Prune Without Compromising Trust?',
    excerpt:
      'Explored AI-assisted pruning strategies that lighten ledger storage while preserving verifiability through zero-knowledge proofs and shard snapshots.',
    date: '2024-04-14',
    href: 'https://www.linkedin.com/pulse/tackling-blockchain-bloat-can-ai-help-prune-without-trust-patary-eskvc/?trackingId=R5IcI5EnQ6Ky5FHdYogxrg%3D%3D',
    imageSrc: '/images/blogs/blockchain-pruning.jpg',
    imageAlt: 'Graphic showing AI-assisted blockchain pruning with neon scissors and circuitry.',
  },
  {
    id: 9,
    title: 'Meta’s Use of Synthetic Data: Revolutionizing AI in the Metaverse',
    excerpt:
      'Looked at how Meta trains immersive AI experiences with synthetic datasets, and why governance controls matter as virtual worlds mix real and generated content.',
    date: '2024-03-30',
    href: 'https://www.linkedin.com/pulse/metas-use-synthetic-data-revolutionizing-ai-metaverse-patary-kquyc/?trackingId=R5IcI5EnQ6Ky5FHdYogxrg%3D%3D',
    imageSrc: '/images/blogs/meta-synthetic-data.jpg',
    imageAlt: 'Meta logo glowing against a futuristic gradient background representing synthetic data.',
  },
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
        <div className="mx-auto mt-20 flex max-w-5xl flex-col items-center gap-4 text-center">
          <p className="text-lg font-semibold tracking-wide text-sky-100">
            Love reading my blogs? Check out more on my LinkedIn!
          </p>
          <a
            href="https://www.linkedin.com/in/lohitaksha-patary-34638a321/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-sky-500/60 bg-sky-500/10 px-6 py-3 text-base font-medium text-sky-200 shadow-[0_0_30px_rgba(56,189,248,0.35)] transition-all duration-300 hover:translate-y-[-2px] hover:border-sky-400 hover:text-white hover:shadow-[0_0_45px_rgba(56,189,248,0.55)]"
          >
            Explore LinkedIn
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/80 text-black shadow-[0_0_18px_rgba(59,130,246,0.8)] transition-transform duration-300 group-hover:scale-110 group-hover:bg-sky-400">
              →
            </span>
          </a>
        </div>
      </main>
    </>
  )
}
