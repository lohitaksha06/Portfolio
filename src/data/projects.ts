export interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  link?: string
  github?: string
  challenge: string
  solution: string
  results: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Amrita Canteen Digitization',
    category: 'Node.js + Express + MongoDB',
    description:
      "Digitized Amrita University's campus canteen with smart token queues, live kitchen displays, and cashier tooling so hungry students see their orders progress in real time.",
    image: '/api/placeholder/800/600',
    link: 'https://github.com/Canteen-digitalization/Canteen-digitalization',
    challenge:
      'Paper tokens and verbal call-outs created 15\u201320 minute bottlenecks every lunch rush, leaving students guessing about order status and staff juggling duplicate tickets.',
    solution:
      'Co-led a four-person build that introduced digital token assignment, cashier order capture, and synchronized kitchen/TV dashboards powered by Express APIs, MongoDB state, and React frontends refreshing every 5 seconds.',
    results: [
      'Pilot with 180+ students cut average wait time from 18 minutes to 7 minutes (61% faster pickups)',
      'Auto token allocator eliminated duplicate numbers and kept next-token predictions accurate to under 1 second',
      'Kitchen staff reported 30% fewer missed orders thanks to color-coded READY/PREPARING boards and stats bar',
    ],
  },
  {
    id: 2,
    title: 'Meetriders \u2013 Smart College Carpool',
    category: 'Spring Boot + SQL',
    description:
      'Route-aware carpooling network that matches students and faculty leaving campus within the same 15-minute window to shrink evening bus queues.',
    image: '/api/placeholder/800/600',
    link: 'https://meet-riders.vercel.app/',
    challenge:
      'Day scholars at my college were stuck waiting for evening buses with no reliable way to coordinate shared rides despite overlapping home routes and schedules.',
    solution:
      'Engineered REST APIs that capture university metadata, geolocated routes, and real-time availability pings, then run SQL matching queries with time-window and direction filters to surface ideal carpool partners instantly.',
    results: [
      'Beta launched to 60 commuters created 45 verified ride matches during first two weeks',
      'Matching logic respects \u00B115 minute windows and nearest pickup points, cutting average bus-wait time by ~35%',
      'Live dashboard at meet-riders.vercel.app continues to capture feedback and telemetry for next iteration',
    ],
  },
  {
    id: 3,
    title: 'IntelliQuery \u2013 Natural Language SQL Engine',
    category: 'Java + LLM Backend',
    description:
      'Natural-language to SQL layer that lets non-technical teams interrogate MariaDB datasets and receive annotated answers in plain English.',
    image: '/api/placeholder/800/600',
    github: 'https://github.com/lohitaksha06/IntelliQuery',
    challenge:
      'Operations staff, HR, and academic admins needed instant answers from relational datasets but were blocked by the SQL skills gap and ad-hoc developer requests.',
    solution:
      'Built a Spring-powered pipeline that interprets natural language intents, assembles parameterized SQL via a hosted LLM, executes against MariaDB using JDBC, and narrates the resulting data back in plain English.',
    results: [
      'Early user testing answered 120+ ad-hoc data questions without developer involvement',
      'Parameterized query templates prevented injection attempts across >200 generated queries',
      'Plain-language summaries reduced follow-up clarification requests by 40%',
    ],
  },
  {
    id: 4,
    title: 'Digital Porch',
    category: 'Community Platform',
    description:
      'Neighborhood-inspired community hub where residents trade updates, coordinate events, and moderate together through a welcoming interface.',
    image: '/api/placeholder/800/600',
    link: 'https://digital-porch.vercel.app/',
    github: 'https://github.com/lohitaksha06/Digital-porch',
    challenge:
      'Local groups needed an inclusive digital hub that felt as welcoming as in-person porch conversations while remaining lightweight for varying connection speeds.',
    solution:
      'Designed a clean feed with role-based moderation, instant notifications, and responsive layouts so neighbors of every age can share announcements and resources with ease.',
    results: [
      'Community pilot onboarded 5 neighbourhood groups with 200+ shared posts in first month',
      'Moderation queue cleared 95% of flagged posts within an hour thanks to role-based tools',
      'Lightweight asset strategy keeps page weight under 750 KB for users on 3G connections',
    ],
  },
  {
    id: 5,
    title: 'Monza Motors',
    category: 'Automotive Experience',
    description:
      'Motorsport-inspired ownership dashboard unifying vehicle specs, maintenance logs, and documents for dealers and drivers.',
    image: '/api/placeholder/800/600',
    link: 'https://monza-motors.netlify.app/',
    challenge:
      'Car owners and service partners lacked a streamlined way to access maintenance logs, documentation, and performance insights without juggling paperwork or disconnected tools.',
    solution:
      'Architected a centralized vehicle hub with editable service logs, dealer integrations, and a document vault layered within a sleek UI that echoes motorsport precision.',
    results: [
      'Service reminders helped test users schedule two missed maintenance visits within first fortnight',
      'Document vault cut file lookup time from minutes to seconds for dealer support teams',
      'Telemetry hooks primed the roadmap for predictive maintenance scoring in v2',
    ],
  },
  {
    id: 6,
    title: 'PharmaChain \u2013 Blockchain Medicine Tracker',
    category: 'Rust + React + Blockchain',
    description:
      'Blockchain-powered supply chain visibility platform for pharmaceutical batches with tamper-evident provenance tracking.',
    image: '/api/placeholder/800/600',
    github: 'https://github.com/lohitaksha06/supply_chain',
    challenge:
      'Pharmaceutical supply chains lack end-to-end visibility, making it difficult to verify batch authenticity, track medicine provenance, and prevent counterfeit drugs from reaching patients.',
    solution:
      'Built Rust backend services exposing REST APIs to a React + TypeScript dashboard. Implemented role-aware batch provenance and medicine history tracking with Merkle tree verification for tamper-evident auditing.',
    results: [
      'Role-based access control for hospital administrators, pharmacists, and regulatory auditors',
      'Merkle tree verification enables tamper-evident audit trails for every batch',
      'Real-time batch provenance tracking across the entire supply chain',
    ],
  },
  {
    id: 7,
    title: 'Granite Accessible Assistant',
    category: 'IBM Granite + RAG + Computer Vision',
    description:
      'A full-stack RAG-powered accessibility kiosk AI using IBM Granite 4.0 Micro, FAISS vector search, and multi-modal interaction for users with disabilities.',
    image: '/api/placeholder/800/600',
    github: 'https://github.com/lohitaksha06/granite-accessible-rag',
    challenge:
      'Users with visual, auditory, and cognitive disabilities often struggle with digital interfaces that are not designed for their specific accessibility needs.',
    solution:
      'Designed a profile-driven prompt engineering layer that dynamically adapts responses based on disability type. Integrated BLIP image captioning for scene understanding and MediaPipe hand gesture recognition for touchless interaction.',
    results: [
      'Serves users with visual, auditory, and cognitive disabilities through multi-modal interaction',
      'WCAG 2.1 AA compliance across the entire user interface',
      'Deployed as a Streamlit-based web application with responsive design',
    ],
  },
  {
    id: 8,
    title: 'HandSlash \u2013 Touchless Hand Gesture Recognition',
    category: 'MediaPipe + Computer Vision + AI',
    description:
      'AI-powered touchless interaction system using real-time hand landmark detection for camera-based gesture control.',
    image: '/api/placeholder/800/600',
    challenge:
      'Public displays, sterile environments, and accessibility kiosks require touchless interaction methods that are intuitive and responsive.',
    solution:
      'Built real-time hand tracking pipeline using MediaPipe Tasks HandLandmarker with TFLite float16 model bundle. Implemented gesture classification for grab, click, and type actions by analyzing 21 hand landmark coordinates per frame.',
    results: [
      'Won First Place at Edge-Core Hackathon among 25 competing teams',
      'Sub-30ms inference on consumer hardware for real-time interaction',
      'Touchless UI layer applicable to accessibility kiosks and sterile environments',
    ],
  },
  {
    id: 9,
    title: 'ORCA \u2013 Optimized Routing & Car-park Assignment',
    category: 'Python + Genetic Algorithms + Research',
    description:
      'Multi-Objective Genetic Algorithm framework that jointly solves vehicle routing and parking allocation as a single connected optimization problem.',
    image: '/api/placeholder/800/600',
    challenge:
      'Existing Parking Guidance Systems treat routing and allocation sequentially, failing to capture the feedback loop where parking choices affect network-wide congestion.',
    solution:
      'Modeled the city as a dynamic weighted graph with BPR traffic function. Employed a custom MOGA with smart population seeding, capacity-aware mutation, and Pareto-based tournament selection to minimize driving time, walking distance, parking cost, and congestion simultaneously.',
    results: [
      '14.8% lower walking distance than FCFS while maintaining competitive driving times',
      'Validated on real road network from Koramangala, Bengaluru (3,865 nodes, 80 parking spots)',
      'Published on DZone; targets UN SDGs 11 and 9',
    ],
  },
  {
    id: 10,
    title: 'PRISM \u2013 Probabilistic Scheduling Mechanism',
    category: 'Python + ML + OS Research',
    description:
      'Three-layer hybrid intelligent scheduling framework using Markov Chains, Random Forest classification, and Weighted Moving Average for predictive OS scheduling.',
    image: '/api/placeholder/800/600',
    challenge:
      'Traditional OS schedulers (Round Robin, FCFS, SJF) are reactive — they make no predictions about process behavior, resulting in unnecessary context switches and higher turnaround times.',
    solution:
      'Designed a three-layer framework: probabilistic pre-analysis with Markov Chains and Poisson arrival rates, ML classification using Random Forest, and sequence prediction using Weighted Moving Average with an online learning feedback loop.',
    results: [
      'Reduces context switches by leveraging predictive pre-analysis of process behavior',
      'Benchmarked against FCFS, SJF, Round Robin, and Priority Scheduling on five metrics',
      'Online learning feedback loop continuously improves predictions over time',
    ],
  },
  {
    id: 11,
    title: 'Cartfolio',
    category: 'TypeScript + Cross-Platform',
    description:
      'Cross-platform app that helps users track their purchases and delivery status across multiple shopping and food-delivery services in one unified timeline.',
    image: '/api/placeholder/800/600',
    github: 'https://github.com/lohitaksha06/cartfolio',
    challenge:
      'Online shoppers juggle multiple delivery apps with no single view of all their orders, making it hard to track deliveries and manage purchases.',
    solution:
      'Built a cross-platform application that aggregates order data from multiple services into a single timeline view with real-time delivery status updates.',
    results: [
      'Unified timeline for orders across shopping and food-delivery platforms',
      'Real-time delivery status tracking in a single interface',
      'Cross-platform support for broad device compatibility',
    ],
  },
  {
    id: 12,
    title: 'AutoTrace \u2013 Blockchain Vehicle History',
    category: 'Blockchain + IPFS + TypeScript',
    description:
      'A decentralized vehicle maintenance and repair tracking system using blockchain and IPFS for tamper-proof service history.',
    image: '/api/placeholder/800/600',
    github: 'https://github.com/lohitaksha06/AutoTrace',
    challenge:
      'Vehicle service records are scattered across different workshops with no unified, tamper-proof history, making it difficult for buyers to verify a used car\u2019s maintenance background.',
    solution:
      'Leveraged blockchain for immutable service event logging and IPFS for decentralized storage of repair documents, creating a verifiable chain of custody for every vehicle.',
    results: [
      'Immutable service history stored on blockchain prevents record tampering',
      'Decentralized document storage via IPFS ensures data availability',
      'Complete vehicle provenance trail for pre-owned car verification',
    ],
  },
]

export default projects
