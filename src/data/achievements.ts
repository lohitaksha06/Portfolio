export interface Achievement {
  id: number
  when: string
  title: string
  detail: string
}

const achievements: Achievement[] = [
  {
    id: 1,
    when: '2025',
    title: 'First Place, Edge-Core Hackathon',
    detail:
      'Led a team of four to build HandSlash in under 36 hours \u2014 an AI-powered touchless hand gesture recognition system using MediaPipe Tasks HandLandmarker with a TFLite float16 model bundle. Won among 25 competing teams, recognized for technical innovation and clean implementation.',
  },
  {
    id: 2,
    when: '2025',
    title: 'Published on DZone',
    detail:
      'Authored "How MOGA Solves the Urban Parking Assignment Problem" \u2014 a technical article on ORCA\u2019s multi-objective genetic algorithm approach, reaching one of the largest developer communities online.',
  },
  {
    id: 3,
    when: '2024',
    title: 'National Level 3rd Runner-up, Global Art Competition',
    detail: 'Recognized as Regional Art Champion on the national stage.',
  },
  {
    id: 4,
    when: '2024',
    title: 'Second Place, Inter-school Piano Competition',
    detail: 'High school piano competition finalist.',
  },
  {
    id: 5,
    when: '2024',
    title: 'Dastaan Tech Fest 2024 Host',
    detail:
      'Coordinated IBM\u2019s cloud-native language workshop for 80+ attendees across the university\u2019s engineering departments.',
  },
]

export default achievements
