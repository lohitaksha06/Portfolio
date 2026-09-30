export interface Publication {
  id: number
  title: string
  authors: string
  venue: string
  year: string
  status?: 'published' | 'in-review' | 'in-prep'
  abstract: string
  links?: { label: string; href: string }[]
}

const publications: Publication[] = [
  {
    id: 1,
    title: 'ORCA \u2014 Optimized Routing and Car-park Assignment via Multi-Objective Genetic Algorithms',
    authors: 'Lohitaksha Patary, Aditi Singhal, Nithilan Rameshkumar, Murali K',
    venue: 'arXiv, 2025 \u00b7 extended version in review at IEEE T-ITS / ACM Computing Surveys',
    year: '2025',
    status: 'in-review',
    abstract:
      'A unified multi-objective optimization framework that jointly solves vehicle routing and parking allocation as a single connected problem \u2014 a gap not addressed by prior work. Existing Parking Guidance Systems treat routing and allocation sequentially, failing to capture the feedback loop where parking choices affect network-wide congestion. ORCA models the city as a dynamic weighted graph and employs a Multi-Objective Genetic Algorithm to discover Pareto-optimal solutions that simultaneously minimize driving time, walking distance, parking cost, and system-wide congestion.',
    links: [
      { label: 'DZone write-up', href: 'https://dzone.com' },
    ],
  },
  {
    id: 2,
    title: 'PRISM \u2014 Probabilistic Real-time Intelligent Scheduling Mechanism',
    authors: 'Lohitaksha Patary',
    venue: 'arXiv, 2026 \u00b7 target venue IEEE ICCA / ICCCS',
    year: '2026',
    status: 'in-prep',
    abstract:
      'A three-layer hybrid intelligent scheduling framework that addresses the fundamental limitation of traditional OS schedulers \u2014 their reactive nature. Conventional algorithms like Round Robin, FCFS, and SJF make no predictions about process behavior before execution, resulting in unnecessary context switches, cache misses, and higher turnaround times. PRISM combines Markov Chain probabilistic pre-analysis with Poisson arrival modelling, Random Forest classification of CPU-bound vs I/O-bound processes, and Weighted Moving Average burst forecasting, with an online learning feedback loop.',
  },
  {
    id: 3,
    title: 'How MOGA Solves the Urban Parking Assignment Problem: Inside the ORCA System',
    authors: 'Lohitaksha Patary',
    venue: 'DZone, 2025',
    year: '2025',
    status: 'published',
    abstract:
      'A technical article bridging ORCA\u2019s academic work and industry practice. It details how Multi-Objective Genetic Algorithms apply to urban parking optimization \u2014 graph modelling, objective function design, GA parameter tuning, and practical deployment considerations \u2014 written for software engineers and smart city developers.',
  },
]

export default publications
