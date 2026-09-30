export interface Certificate {
  id: number
  title: string
  issuer: string
  issued: string
  /** Set when the credential is no longer current. */
  expired?: string
  /** Set when the certificate has been earned but not yet issued in full. */
  pending?: boolean
  credentialId?: string
  credentialUrl?: string
  note?: string
}

/**
 * Credentials as listed on LinkedIn and held in the course certificate
 * folder. Ordered by weight: professional certificates first, then the
 * specializations, then the shorter course credentials.
 */
const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Generative AI Engineering Professional Certificate',
    issuer: 'IBM',
    issued: 'Sep 2026',
    credentialId: '09D3CLZVBYB7',
    credentialUrl: 'https://coursera.org/verify/professional-cert/09D3CLZVBYB7',
    note: '16 courses spanning AI, generative AI, NLP, PyTorch, Hugging Face Transformers, and RAG applications with LangChain.',
  },
  {
    id: 2,
    title: 'SkillsBuild AI Internship \u2014 Accessibility Technologies',
    issuer: 'IBM',
    issued: 'Nov 2025 \u00b7 Jan 2026',
    note: 'Built the Granite Accessible Assistant using IBM Granite 4.0 Micro, FAISS, SentenceTransformers, BLIP, and MediaPipe.',
  },
  {
    id: 3,
    title: 'Blockchain Opportunity Analysis',
    issuer: 'INSEAD',
    issued: 'Feb 2026',
    credentialId: 'N7TWQV4KBIV2',
    note: 'Four-course professional certification on blockchain strategy and opportunity evaluation under INSEAD and the Blockchain Research Institute. Capstone: PharmaChain.',
  },
  {
    id: 4,
    title: 'Sustainability Virtual Internship',
    issuer: 'IBM',
    issued: '2026',
    note: 'Virtual internship program focused on sustainability applications of AI and cloud.',
  },
  {
    id: 5,
    title: 'AI for Sustainability',
    issuer: 'IBM',
    issued: 'Dec 2025',
    expired: 'Feb 2026',
  },
  {
    id: 6,
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    issued: 'Jan 2025',
    expired: 'Apr 2026',
    note: 'Nine courses, from Foundations: Data, Data, Everywhere through the capstone case study.',
  },
  {
    id: 7,
    title: 'Google Cloud Skill Badges',
    issuer: 'Google',
    issued: 'Oct 2025',
    note: 'Build a Website on Google Cloud \u00b7 API Gateway \u00b7 Pub/Sub \u00b7 Cloud Storage \u00b7 Looker \u00b7 Google Workspace Tools.',
  },
  {
    id: 8,
    title: 'Machine Learning with Python',
    issuer: 'IBM \u00b7 Coursera',
    issued: 'Dec 2025',
  },
  {
    id: 9,
    title: 'Introduction to Deep Learning & Neural Networks with Keras',
    issuer: 'IBM \u00b7 Coursera',
    issued: 'Jul 2026',
  },
  {
    id: 10,
    title: 'Accelerate Your Job Search with AI',
    issuer: 'Google \u00b7 Coursera',
    issued: 'Mar 2026',
  },
  {
    id: 11,
    title: 'Foundations of User Experience (UX) Design',
    issuer: 'Google \u00b7 Coursera',
    issued: '2024 \u00b7 2025',
    note: 'Seven courses, finishing with high-fidelity designs and a UX design concept.',
  },
  {
    id: 12,
    title: 'Getting Started with Front-End Web Development',
    issuer: 'IBM \u00b7 Coursera',
    issued: 'Jan 2026',
  },
  {
    id: 13,
    title: 'React Basics',
    issuer: 'Meta',
    issued: 'Feb 2026',
  },
  {
    id: 14,
    title: 'Programming Fundamentals with JavaScript, HTML and CSS',
    issuer: 'Duke University',
    issued: 'Jan 2025',
  },
]

export default certificates
