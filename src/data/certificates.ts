export interface Certificate {
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

export default certificates
