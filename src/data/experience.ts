export interface Experience {
  id: number
  org: string
  role: string
  when: string
  kind: 'internship' | 'leadership' | 'community'
  sub?: string
  bullets: string[]
  links?: { label: string; href: string }[]
}

const experience: Experience[] = [
  {
    id: 1,
    org: 'Cellium Networks',
    role: 'Computer Vision Intern',
    when: 'Oct 2025 – Present · Remote (US-based)',
    kind: 'internship',
    sub: 'Surround-view perception and multi-camera calibration for autonomous driving.',
    bullets: [
      'Stitched multi-camera vehicle feeds into synchronized panoramic Bird\u2019s Eye View (BEV) output using OpenCV, homography transformations, and feature-matching algorithms.',
      'Applied YOLO-based object detection on the stitched BEV for real-time obstacle identification in surround-view perception systems, enabling autonomous driving applications.',
      'Implemented Kalman filter-based multi-object tracking across camera frames to maintain consistent object identities during cross-camera transitions.',
      'Developed calibration pipelines for extrinsic camera parameter estimation, reducing stitching artifacts by <b>35%</b> compared to naive concatenation.',
    ],
  },
  {
    id: 2,
    org: 'IBM SkillsBuild',
    role: 'AI / Accessibility Intern',
    when: 'Nov 2025 – Jan 2026 · Remote',
    kind: 'internship',
    sub: 'Built Granite Accessible Assistant, a RAG kiosk for users with visual, auditory, and cognitive disabilities.',
    bullets: [
      'Built a full-stack RAG-powered accessibility kiosk AI using <b>IBM Granite 4.0 Micro</b> as the LLM backbone, <b>FAISS</b> vector search for semantic retrieval, and SentenceTransformers for embedding generation.',
      'Designed a profile-driven prompt engineering layer that dynamically adapts responses based on disability type (visual, auditory, cognitive) and user language preferences, incorporating few-shot examples and system personas per accessibility profile.',
      'Integrated <b>BLIP</b> image captioning for scene understanding and <b>MediaPipe</b> hand gesture recognition for touchless interaction, enabling users with motor disabilities to interact without physical contact.',
      'Engineered the complete RAG pipeline \u2014 document chunking, embedding generation, vector storage, similarity search, and context-aware response generation with source attribution.',
      'Conducted accessibility testing with screen readers and keyboard-only navigation to ensure <b>WCAG 2.1 AA</b> compliance across the entire user interface.',
    ],
    links: [{ label: 'Live app', href: 'https://granite-accessible-rag.vercel.app' }],
  },
  {
    id: 3,
    org: 'GDG Amrita Vishwa Vidyapeetham',
    role: 'Cloud Engineer',
    when: 'Sept 2024 – Present · Bengaluru, India',
    kind: 'leadership',
    sub: 'Google Developer Student Clubs on campus.',
    bullets: [
      'Lead study jams and hands-on cloud workshops for peers, preparing cloud-native sample projects and deployment guides on Google Cloud Platform.',
      'Mentor fellow students on cloud architecture, API design, and modern web deployment through practical demos and code reviews.',
      'Organize weekly technical sessions covering containerization, serverless computing, and CI/CD pipelines with hands-on lab components.',
    ],
  },
  {
    id: 4,
    org: 'Dastaan Tech Fest 2024',
    role: 'Event Organizer',
    when: 'Oct 2024 · Bengaluru, India',
    kind: 'community',
    sub: "Primary host for IBM's cloud-native language workshop at Amrita's flagship technical festival.",
    bullets: [
      'Coordinated end-to-end logistics including speaker liaison with IBM\u2019s technical team, venue setup and equipment testing, participant registration, and live session moderation for 80+ attendees.',
      'Facilitated hands-on coding segments where participants deployed their first cloud applications under guided supervision, troubleshooting in real time.',
    ],
  },
]

export default experience
