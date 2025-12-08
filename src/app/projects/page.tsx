'use client'

import Header from '@/components/layout/Header'
import { motion } from 'framer-motion'

interface Project {
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
    title: 'Meetriders – Smart College Carpool',
    category: 'Spring Boot + SQL',
    description:
      'Meetriders is an intelligent ride-matching platform for campus commuters, built with Spring Boot services and SQL data models to pair students and faculty by route, timing, and availability.',
    image: '/api/placeholder/800/600',
    link: 'https://meet-riders.vercel.app/',
    challenge:
      'Day scholars at my college were stuck waiting for evening buses with no reliable way to coordinate shared rides despite overlapping home routes and schedules.',
    solution:
      'Engineered REST APIs that capture university metadata, geolocated routes, and real-time availability pings, then run SQL matching queries with time-window and direction filters to surface ideal carpool partners instantly.',
    results: [
      'Prototype reduced post-class wait times by letting day scholars find ride partners as soon as they were free',
      'Automated matches respect ±15 minute windows, shared departments, and nearest pickup points to keep carpools relevant',
      'Backend-first architecture now powers a live dashboard at meet-riders.vercel.app for continued feedback',
    ],
  },
  {
    id: 2,
    title: 'IntelliQuery – Natural Language SQL Engine',
    category: 'Java + LLM Backend',
    description:
      'IntelliQuery transforms natural language prompts into optimized SQL for MariaDB and returns annotated explanations so non-technical teams can interrogate enterprise data without writing queries.',
    image: '/api/placeholder/800/600',
    challenge:
      'Operations staff, HR, and academic admins needed instant answers from relational datasets but were blocked by the SQL skills gap and ad-hoc developer requests.',
    solution:
      'Built a Spring-powered pipeline that interprets natural language intents, assembles parameterized SQL via a hosted LLM, executes against MariaDB using JDBC, and narrates the resulting data back in plain English.',
    results: [
      'LLM-driven translator converts user questions into efficient SQL with guardrails',
      'Result explainer summarizes rows and metrics so stakeholders understand outcomes without dashboards',
      'Conversational architecture unlocks secure, self-service analytics for enterprise datasets',
    ],
  },
  {
    id: 3,
    title: 'Digital Porch',
    category: 'Community Platform',
    description:
      'Digital Porch recreates the warmth of a neighborhood porch online, giving communities a shared space to post updates, coordinate events, and stay connected through an approachable, minimal interface.',
    image: '/api/placeholder/800/600',
    link: 'https://digital-porch.vercel.app/',
    challenge:
      'Local groups needed an inclusive digital hub that felt as welcoming as in-person porch conversations while remaining lightweight for varying connection speeds.',
    solution:
      'Designed a clean feed with role-based moderation, instant notifications, and responsive layouts so neighbors of every age can share announcements and resources with ease.',
    results: [
      'Community feed for announcements, resources, and questions',
      'Real-time alerts keep conversations active and timely',
      'Optimized for low-bandwidth access while retaining a friendly UI',
    ],
  },
  {
    id: 4,
    title: 'Monza Motors',
    category: 'Automotive Experience',
    description:
      'Monza Motors unifies vehicle data, maintenance history, and ownership documents within a motorsport-inspired dashboard so drivers, dealers, and service teams share a single, transparent view of every car.',
    image: '/api/placeholder/800/600',
    link: 'https://monza-motors.netlify.app/',
    challenge:
      'Car owners and service partners lacked a streamlined way to access maintenance logs, documentation, and performance insights without juggling paperwork or disconnected tools.',
    solution:
      'Architected a centralized vehicle hub with editable service logs, dealer integrations, and a document vault layered within a sleek UI that echoes motorsport precision.',
    results: [
      'Vehicle dashboard surfaces model specs, service history, and performance cues',
      'Maintenance tracker and smart reminders reduce missed services and renewals',
      'Digital documentation vault keeps ownership records transparent and accessible',
    ],
  },
]
 

export default function Projects() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-36">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-20"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Projects</h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                A curated set of builds that show how I blend backend engineering, systems thinking, and clean interfaces to solve real problems for communities and teams I care about.
              </p>
            </div>

            <div className="space-y-24">
              {projects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="relative h-64 lg:h-full overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${
                          index % 4 === 0
                            ? 'from-indigo-500 to-purple-600'
                            : index % 4 === 1
                              ? 'from-sky-500 to-cyan-600'
                              : index % 4 === 2
                                ? 'from-rose-500 to-pink-600'
                                : 'from-amber-500 to-orange-600'
                        } opacity-80`}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-white text-center px-6">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="mb-4">
                        <span className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">
                          {project.category}
                        </span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2">{project.title}</h2>
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Challenge</h4>
                          <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Solution</h4>
                          <p className="text-gray-700 leading-relaxed">{project.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Impact</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {project.results.map((result, idx) => (
                              <li key={idx}>{result}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="mt-8 inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg"
                        >
                          Visit Project ↗
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-20"
            >
              <p className="text-lg text-gray-600 mb-4">Want to dive into more builds and experiments?</p>
              <a
                href="https://github.com/lohitaksha06"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-500 font-semibold hover:text-indigo-700 transition-colors"
              >
                Explore my GitHub ↗
              </a>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </>
  )
}