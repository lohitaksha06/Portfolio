export interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  link?: string
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
]

export default projects
