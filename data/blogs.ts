export interface Blog {
  id: number
  title: string
  excerpt: string
  date: string
  href: string
  imageSrc: string
  imageAlt: string
}

const blogs: Blog[] = [
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
    title: 'From Smart Contracts to Smart Economies: Blockchain\u2019s Role in Building Autonomous Systems',
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
    title: 'Project Update: Building PharmaChain \u2013 A Blockchain-Based Medicine Supply Chain Tracker',
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
    title: 'Meta\u2019s Use of Synthetic Data: Revolutionizing AI in the Metaverse',
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
    title: 'Building PharmaChain \u2014 A Blockchain-Based Pharmaceutical Supply Chain Solution',
    excerpt:
      'Detailed the PharmaChain blueprint that uses smart contracts to trace medicines end-to-end, tighten recall windows, and secure provenance evidence.',
    date: '2024-07-03',
    href: 'https://www.linkedin.com/pulse/building-pharmachain-blockchain-based-pharmaceutical-supply-patary-vbdbc/?trackingId=jBnhp4K4QN%2BvbeD5xGwHmw%3D%3D',
    imageSrc: '/images/blogs/pharmachain.svg',
    imageAlt: 'Blue and white pharmaceutical capsules falling with circuit lines',
  },
]

export default blogs
