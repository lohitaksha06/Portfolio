'use client'

import Header from '@/components/layout/Header'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

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
    title: 'Amrita Canteen Digitization',
    category: 'Node.js + Express + MongoDB',
    description:
      "Digitized Amrita University's campus canteen with smart token queues, live kitchen displays, and cashier tooling so hungry students see their orders progress in real time.",
    image: '/api/placeholder/800/600',
    link: 'https://github.com/Canteen-digitalization/Canteen-digitalization',
    challenge:
      'Paper tokens and verbal call-outs created 15–20 minute bottlenecks every lunch rush, leaving students guessing about order status and staff juggling duplicate tickets.',
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
    title: 'Meetriders – Smart College Carpool',
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
      'Matching logic respects ±15 minute windows and nearest pickup points, cutting average bus-wait time by ~35%',
      'Live dashboard at meet-riders.vercel.app continues to capture feedback and telemetry for next iteration',
    ],
  },
  {
    id: 3,
    title: 'IntelliQuery – Natural Language SQL Engine',
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
 

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const handleToggle = (projectId: number) => {
    setExpandedProject(prev => (prev === projectId ? null : projectId))
  }

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
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">My Projects</h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                {`A curated set of builds that show how I blend backend engineering, systems thinking, and clean interfaces to solve real problems for communities and teams I care about.`}
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

                      <p className="text-gray-700 leading-relaxed">{project.description}</p>

                      <div className="mt-6 flex flex-wrap items-center gap-4">
                        <button
                          type="button"
                          onClick={() => handleToggle(project.id)}
                          className="inline-flex items-center gap-2 rounded-lg border border-indigo-200 bg-white px-4 py-2 text-sm font-semibold text-indigo-600 transition-all hover:border-indigo-400 hover:text-indigo-700"
                          aria-expanded={expandedProject === project.id}
                          aria-controls={`project-details-${project.id}`}
                        >
                          {expandedProject === project.id ? 'Hide Details' : 'Know More'}
                        </button>

                        {project.link && (
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg"
                          >
                            Visit Project ↗
                          </motion.a>
                        )}
                      </div>

                      <AnimatePresence>
                        {expandedProject === project.id && (
                          <motion.div
                            id={`project-details-${project.id}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-6 space-y-4 border-t border-gray-200 pt-6">
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
                          </motion.div>
                        )}
                      </AnimatePresence>
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