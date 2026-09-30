export interface Repo {
  id: number
  owner: string
  name: string
  description: string
  language?: string
  url: string
  demo?: string
}

/**
 * Featured repositories, grouped by the account that hosts them. Curated
 * by hand rather than pulled from the API so the order reads as a
 * portfolio rather than a commit log, and so the site renders without a
 * rate-limited request on every load.
 */
const repos: Repo[] = [
  {
    id: 1,
    owner: 'lohitaksha06',
    name: 'granite-accessible-rag',
    description:
      'Full-stack RAG accessibility kiosk AI using IBM Granite 4.0 Micro, FAISS vector search, and SentenceTransformers \u2014 with BLIP vision captioning and MediaPipe touchless gesture input for users with visual, auditory, and cognitive disabilities.',
    language: 'TypeScript',
    url: 'https://github.com/lohitaksha06/granite-accessible-rag',
    demo: 'https://granite-accessible-rag.vercel.app',
  },
  {
    id: 2,
    owner: 'lohitaksha06',
    name: 'supply_chain',
    description:
      'PharmaChain \u2014 a blockchain-powered medicine supply chain tracker. Rust backend services exposing REST APIs to a React + TypeScript dashboard, with role-aware batch provenance and Merkle tree verification for tamper-evident auditing.',
    language: 'TypeScript',
    url: 'https://github.com/lohitaksha06/supply_chain',
  },
  {
    id: 3,
    owner: 'lohitaksha06',
    name: 'audio-trim',
    description:
      'Audelle \u2014 an AI audio editor where everything happens by prompting. Demucs source separation, Whisper transcription, diarization, and song-structure analysis behind a FastAPI job queue, with a Next.js web app and an Expo client.',
    language: 'Python',
    url: 'https://github.com/lohitaksha06/audio-trim',
  },
  {
    id: 4,
    owner: 'lohitaksha06',
    name: 'AutoTrace',
    description:
      'A decentralized vehicle maintenance and repair tracking system using blockchain for immutable service event logging and IPFS for decentralized storage of repair documents.',
    language: 'TypeScript',
    url: 'https://github.com/lohitaksha06/AutoTrace',
  },
  {
    id: 5,
    owner: 'lohitaksha06',
    name: 'cartfolio',
    description:
      'Cross-platform app that tracks purchases and delivery status across multiple shopping and food-delivery services in one unified timeline.',
    language: 'TypeScript',
    url: 'https://github.com/lohitaksha06/cartfolio',
  },
  {
    id: 6,
    owner: 'lohitaksha06',
    name: 'Digital-porch',
    description:
      'A community platform inspired by the idea of a front porch as a place for sharing stories \u2014 a feed with role-based moderation, instant notifications, and responsive layouts.',
    language: 'TypeScript',
    url: 'https://github.com/lohitaksha06/Digital-porch',
    demo: 'https://digital-porch.vercel.app',
  },
  {
    id: 7,
    owner: 'coding-royale',
    name: 'Code-royale',
    description:
      'A real-time 1v1 competitive coding game. Two players solve the same problem under time pressure and the first to pass all test cases wins \u2014 with ELO ratings, ranked matchmaking, clubs, and Judge0-powered server-side judging.',
    language: 'TypeScript',
    url: 'https://github.com/coding-royale/Code-royale',
    demo: 'https://code-royale-gilt.vercel.app',
  },
  {
    id: 8,
    owner: 'Einheit-Zenkai',
    name: 'IntelliQuery',
    description:
      'Makes databases speak human. A natural-language to SQL engine that lets non-technical teams interrogate MariaDB datasets and receive annotated answers in plain English.',
    url: 'https://github.com/Einheit-Zenkai/IntelliQuery',
  },
  {
    id: 9,
    owner: 'Einheit-Zenkai',
    name: 'meet-riders',
    description:
      'A smart college carpool. Route-aware ride sharing that matches students and faculty leaving campus within the same 15-minute window, cutting evening bus queues.',
    url: 'https://github.com/Einheit-Zenkai/meet-riders',
    demo: 'https://meet-riders.vercel.app',
  },
  {
    id: 10,
    owner: 'Einheit-Zenkai',
    name: 'monza-motors',
    description:
      'A vanilla React app for a fictional car dealership, complete with a 3D vehicle customizer \u2014 vehicle specs, service logs, and a document vault in one motorsport-inspired dashboard.',
    url: 'https://github.com/Einheit-Zenkai/monza-motors',
    demo: 'https://monza-motors.netlify.app',
  },
  {
    id: 11,
    owner: 'Einheit-Zenkai',
    name: 'handlslash_cv',
    description:
      'Computer vision pipeline for HandSlash \u2014 real-time hand landmark detection for camera-based gesture control, the system that won first place at the Edge-Core Hackathon.',
    url: 'https://github.com/Einheit-Zenkai/handlslash_cv',
  },
]

export const githubProfile = {
  login: 'lohitaksha06',
  url: 'https://github.com/lohitaksha06',
  avatar: 'https://github.com/lohitaksha06.png',
  /** Public repos across the three accounts, minus forks and the profile repo. */
  repoCount: 18,
  followers: 3,
}

export default repos
