export interface Project {
  id: number
  title: string
  kind: 'research' | 'product' | 'internship'
  description: string
  tags: string[]
  github?: string
  link?: string
  when?: string
  challenge: string
  solution: string
  results: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'ORCA \u2014 Optimized Routing & Car-park Assignment',
    kind: 'research',
    when: 'Jan 2025 \u00b7 Present',
    description:
      'A unified multi-objective framework that solves vehicle routing and parking allocation as one connected problem, rather than sequentially as existing Parking Guidance Systems do.',
    tags: ['Python', 'NetworkX', 'OSMnx', 'MOGA', 'Typst'],
    challenge:
      'Existing Parking Guidance Systems treat routing and allocation sequentially, failing to capture the feedback loop where parking choices affect network-wide congestion.',
    solution:
      'Modeled the city as a dynamic weighted graph with the Bureau of Public Roads traffic function. Employed a custom MOGA with smart population seeding, capacity-aware mutation, and Pareto-based tournament selection to minimize driving time, walking distance, parking cost, and congestion simultaneously.',
    results: [
      '14.8% lower walking distance than FCFS while maintaining competitive driving times',
      'Validated on the real road network of Koramangala, Bengaluru \u2014 3,865 nodes, 5,173 edges, 80 parking spots, 195 vehicles',
      'Monte Carlo simulations with Kruskal-Wallis and Mann-Whitney U-tests confirm statistical significance (p&lt;0.001)',
      'Targets UN Sustainable Development Goals 11 and 9',
    ],
  },
  {
    id: 2,
    title: 'PRISM \u2014 Probabilistic Scheduling Mechanism',
    kind: 'research',
    when: '2025 \u00b7 2026',
    description:
      'A three-layer hybrid intelligent scheduling framework that makes predictive OS scheduling decisions instead of reactive ones.',
    tags: ['Python', 'NumPy', 'Scikit-learn', 'Markov Chains', 'Random Forest'],
    challenge:
      'Traditional OS schedulers (Round Robin, FCFS, SJF) are reactive \u2014 they make no predictions about process behavior, resulting in unnecessary context switches and higher turnaround times.',
    solution:
      'Designed three layers: probabilistic pre-analysis with Markov Chains and Poisson arrival rates, ML classification via Random Forest into CPU-bound and I/O-bound types, and Weighted Moving Average sequence prediction \u2014 wrapped in an online learning feedback loop.',
    results: [
      'Reduces context switches by leveraging predictive pre-analysis of process behavior',
      'Benchmarked against FCFS, SJF, Round Robin (quantum 4ms), and Priority Scheduling on five metrics including Jain\u2019s Fairness Index',
      'The online learning loop continuously updates the transition matrix and model parameters as workload characteristics change',
    ],
  },
  {
    id: 3,
    title: 'HandSlash \u2014 Touchless Gesture Recognition',
    kind: 'product',
    when: '2025',
    description:
      'An AI-powered touchless interaction system using real-time hand landmark detection for camera-based gesture control.',
    tags: ['MediaPipe', 'Computer Vision', 'Python', 'TFLite'],
    github: 'https://github.com/Einheit-Zenkai/handlslash_cv',
    challenge:
      'Public displays, sterile environments, and accessibility kiosks need touchless interaction that is intuitive and responsive.',
    solution:
      'Built a real-time hand tracking pipeline using MediaPipe Tasks HandLandmarker with a TFLite float16 model bundle. Implemented gesture classification for grab, click, and type actions by analyzing 21 hand landmark coordinates per frame.',
    results: [
      'Won First Place at Edge-Core Hackathon among 25 competing teams',
      'Sub-30ms inference on consumer hardware for real-time interaction',
      'Applies directly to accessibility kiosks, sterile environments, and public displays',
    ],
  },
  {
    id: 4,
    title: 'Granite Accessible Assistant',
    kind: 'internship',
    when: 'Nov 2025 \u00b7 Jan 2026',
    description:
      'A full-stack RAG-powered accessibility kiosk AI built on IBM Granite 4.0 Micro, serving users with visual, auditory, and cognitive disabilities through multi-modal interaction.',
    tags: ['IBM Granite', 'RAG', 'FAISS', 'BLIP', 'MediaPipe'],
    github: 'https://github.com/lohitaksha06/granite-accessible-rag',
    link: 'https://granite-accessible-rag.vercel.app',
    challenge:
      'Users with visual, auditory, and cognitive disabilities struggle with digital interfaces that are not designed for their specific accessibility needs.',
    solution:
      'Designed a profile-driven prompt engineering layer that adapts responses per disability type and language. Integrated BLIP image captioning for scene understanding and MediaPipe hand gesture recognition for touchless operation, on top of an FAISS retrieval pipeline with source attribution.',
    results: [
      'WCAG 2.1 AA compliance across the entire user interface, verified with screen readers and keyboard-only navigation',
      'Deployed as a responsive Streamlit-based web application',
      'Full RAG pipeline: chunking, embedding generation, vector storage, similarity search, context-aware generation',
    ],
  },
  {
    id: 5,
    title: 'PharmaChain \u2014 Blockchain Medicine Tracker',
    kind: 'product',
    when: 'Apr 2024 \u00b7 Present',
    description:
      'Blockchain-powered supply chain visibility for pharmaceutical batches, with tamper-evident provenance from manufacturer to patient.',
    tags: ['Rust', 'React', 'TypeScript', 'Blockchain', 'Merkle Trees'],
    github: 'https://github.com/lohitaksha06/supply_chain',
    challenge:
      'Pharmaceutical supply chains lack end-to-end visibility, making it hard to verify batch authenticity or prevent counterfeit drugs reaching patients.',
    solution:
      'Built Rust backend services exposing REST APIs to a React + TypeScript dashboard. Implemented role-aware batch provenance and medicine history tracking with Merkle tree verification for tamper-evident auditing.',
    results: [
      'Role-based access control for hospital administrators, pharmacists, and regulatory auditors',
      'Merkle tree verification enables tamper-evident audit trails for every batch',
      'Real-time batch provenance tracking across the entire supply chain',
      'Capstone for the INSEAD Blockchain Opportunity Analysis certification',
    ],
  },
  {
    id: 6,
    title: 'IntelliQuery \u2014 Natural Language SQL Engine',
    kind: 'product',
    when: 'Sept 2024 \u00b7 Dec 2024',
    description:
      'A natural-language to SQL layer that lets non-technical teams interrogate MariaDB datasets and receive annotated answers in plain English.',
    tags: ['Java', 'Spring Boot', 'LLM', 'MariaDB', 'JDBC'],
    github: 'https://github.com/Einheit-Zenkai/IntelliQuery',
    challenge:
      'Operations staff, HR, and academic admins needed instant answers from relational datasets but were blocked by the SQL skills gap and ad-hoc developer requests.',
    solution:
      'Built a Spring-powered pipeline that interprets natural language intents, assembles parameterized SQL via a hosted LLM, executes against MariaDB using JDBC, and narrates the resulting data back in plain English.',
    results: [
      'Early user testing answered 120+ ad-hoc data questions without developer involvement',
      'Parameterized query templates prevented injection attempts across 200+ generated queries',
      'Plain-language summaries reduced follow-up clarification requests by 40%',
    ],
  },
  {
    id: 7,
    title: 'Code Royale \u2014 Competitive Coding Arena',
    kind: 'product',
    when: '2026',
    description:
      'A real-time 1v1 competitive coding game \u2014 two players solve the same problem under time pressure and the first to pass all test cases wins the match.',
    tags: ['Next.js', 'Supabase', 'Judge0', 'Realtime'],
    github: 'https://github.com/coding-royale/Code-royale',
    link: 'https://code-royale-gilt.vercel.app',
    challenge:
      'Competitive coding feels solitary \u2014 plain judges offer practice but no fast, social duel loop with progression that keeps players coming back.',
    solution:
      'Built a Next.js + Supabase arena with ranked and unranked 1v1 matchmaking, friend invites, bot battles, and a solo practice arena, judged server-side via Judge0.',
    results: [
      'Persistent progression with ELO ratings, leaderboards, clubs, streaks, and badges',
      'Auth via Supabase with email/password and GitHub OAuth, plus realtime presence',
      'Friends list with live presence indicators and rich player profiles',
    ],
  },
  {
    id: 8,
    title: 'Audelle \u2014 AI-Powered Audio Editor',
    kind: 'product',
    when: '2026',
    description:
      'An audio editor where everything is possible by prompting \u2014 the AI understands instruments, structure, mood, and speaker intent, then executes the edit from natural language.',
    tags: ['FastAPI', 'Next.js', 'Expo', 'Whisper', 'Demucs'],
    github: 'https://github.com/lohitaksha06/audio-trim',
    challenge:
      'Traditional audio editors force creators to scrub waveforms and drag handles for every trim, stem isolation, or format cut \u2014 slow for podcasts, music, and short-form content.',
    solution:
      'Built an ML-backed pipeline (Demucs source separation, Whisper transcription, diarization, song-structure and mood analysis) behind a FastAPI job queue, with a Next.js web app and an Expo mobile client on the same backend.',
    results: [
      'Natural-language edits: trim and arrange, stem isolate, inpainting, denoise, podcast filler-word removal',
      'Manual Editor fallback with waveform select, fades, gain, normalize, and speed control',
      'Exports stems as ZIP plus FCPXML/EDL for Premiere, DaVinci, and Final Cut',
    ],
  },
  {
    id: 9,
    title: 'Meetriders \u2014 Smart College Carpool',
    kind: 'product',
    when: 'Jul 2024 \u00b7 Present',
    description:
      'A route-aware carpooling network that matches students and faculty leaving campus within the same 15-minute window, shrinking evening bus queues.',
    tags: ['Next.js', 'Supabase', 'PostgreSQL', 'Edge Functions'],
    github: 'https://github.com/Einheit-Zenkai/meet-riders',
    link: 'https://meet-riders.vercel.app',
    challenge:
      'Day scholars at my college had no reliable way to coordinate shared rides despite overlapping home routes and schedules.',
    solution:
      'Designed a Supabase data model with row-level security for rider and driver info, then added ride pinging, time-based matching, and notifications via Edge Functions and realtime. Matching considers route overlap and schedule compatibility.',
    results: [
      'Beta with 60 commuters created 45 verified ride matches in the first two weeks',
      'Matching respects 15-minute windows and nearest pickup points, cutting average bus-wait time by ~35%',
      'Live dashboard continues to capture feedback and telemetry for the next iteration',
    ],
  },
  {
    id: 10,
    title: 'AutoTrace \u2014 Blockchain Vehicle History',
    kind: 'product',
    when: '2025',
    description:
      'A decentralized vehicle maintenance and repair tracking system using blockchain and IPFS for tamper-proof service history.',
    tags: ['Blockchain', 'IPFS', 'TypeScript', 'Solidity'],
    github: 'https://github.com/lohitaksha06/AutoTrace',
    challenge:
      'Vehicle service records are scattered across workshops with no unified, tamper-proof history, making a used car\u2019s maintenance background hard to verify.',
    solution:
      'Leveraged blockchain for immutable service event logging and IPFS for decentralized storage of repair documents, creating a verifiable chain of custody for every vehicle.',
    results: [
      'Immutable service history on blockchain prevents record tampering',
      'Decentralized document storage via IPFS ensures data availability',
      'Complete vehicle provenance trail for pre-owned car verification',
    ],
  },
  {
    id: 11,
    title: 'Canteen Digitization',
    kind: 'product',
    when: 'Feb 2024 \u00b7 Jun 2024',
    description:
      'Digitized Amrita University\u2019s campus canteen with smart token queues, live kitchen displays, and cashier tooling so students see their orders progress in real time.',
    tags: ['Node.js', 'Express', 'MongoDB', 'React'],
    github: 'https://github.com/Canteen-digitalization/Canteen-digitalization',
    challenge:
      'Paper tokens and verbal call-outs created 15\u32020 minute bottlenecks every lunch rush, leaving students guessing about order status and staff juggling duplicate tickets.',
    solution:
      'Co-led a four-person build introducing digital token assignment, cashier order capture, and synchronized kitchen and TV dashboards powered by Express APIs, MongoDB state, and frontends refreshing every 5 seconds.',
    results: [
      'Pilot with 180+ students cut average wait time from 18 minutes to 7 minutes \u2014 61% faster pickups',
      'Auto token allocator eliminated duplicate numbers and kept next-token predictions accurate to under a second',
      'Kitchen staff reported 30% fewer missed orders thanks to color-coded READY/PREPARING boards',
    ],
  },
  {
    id: 12,
    title: 'Cartfolio',
    kind: 'product',
    when: '2026',
    description:
      'A cross-platform app that helps users track purchases and delivery status across multiple shopping and food-delivery services in one unified timeline.',
    tags: ['TypeScript', 'Cross-platform', 'Expo'],
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
    id: 13,
    title: 'Digital Porch',
    kind: 'product',
    when: '2025',
    description:
      'A community platform inspired by the idea of a front porch as a place for sharing stories and connecting with neighbours.',
    tags: ['TypeScript', 'React', 'Community'],
    github: 'https://github.com/lohitaksha06/Digital-porch',
    link: 'https://digital-porch.vercel.app',
    challenge:
      'Local groups needed an inclusive digital hub that felt as welcoming as in-person porch conversations while staying lightweight for varying connection speeds.',
    solution:
      'Designed a clean feed with role-based moderation, instant notifications, and responsive layouts so neighbours of every age can share announcements and resources with ease.',
    results: [
      'Community pilot onboarded 5 neighbourhood groups with 200+ shared posts in the first month',
      'Moderation queue cleared 95% of flagged posts within an hour thanks to role-based tools',
      'Lightweight asset strategy keeps page weight under 750 KB for users on 3G connections',
    ],
  },
  {
    id: 14,
    title: 'Monza Motors',
    kind: 'product',
    when: '2025',
    description:
      'A motorsport-inspired ownership dashboard unifying vehicle specs, maintenance logs, and documents for dealers and drivers, with a 3D vehicle customizer.',
    tags: ['React', 'JavaScript', '3D Web'],
    github: 'https://github.com/Einheit-Zenkai/monza-motors',
    link: 'https://monza-motors.netlify.app',
    challenge:
      'Car owners and service partners lacked a streamlined way to access maintenance logs, documentation, and performance insights without juggling paperwork.',
    solution:
      'Architected a centralized vehicle hub with editable service logs, dealer integrations, and a document vault within a UI that echoes motorsport precision.',
    results: [
      'Service reminders helped test users schedule two missed maintenance visits in the first fortnight',
      'Document vault cut file lookup time from minutes to seconds for dealer support teams',
      'Telemetry hooks primed the roadmap for predictive maintenance scoring in v2',
    ],
  },
]

export default projects
