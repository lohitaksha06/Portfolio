'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const ProjectsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      id: 1,
      title: "Meetriders – Smart College Carpool",
      description: "Spring Boot + SQL ride-matching system that helped my college day scholars avoid evening bus queues by pairing commuters in real time.",
      image: "/api/placeholder/600/400",
      tags: ["Spring Boot", "SQL", "Ride Matching"],
      color: "from-indigo-500 to-purple-600",
      link: "https://meet-riders.vercel.app/"
    },
    {
      id: 2,
      title: "IntelliQuery – Natural Language SQL",
      description: "Java backend with an LLM pipeline that turns plain-English questions into SQL and explains the answers for non-technical stakeholders.",
      image: "/api/placeholder/600/400",
      tags: ["Java", "LLM", "SQL"],
      color: "from-blue-500 to-indigo-600",
      link: "/projects"
    },
    {
      id: 3,
      title: "Digital Porch",
      description: "Community-first web app that recreates neighborhood porch conversations with real-time posts and role-based moderation.",
      image: "/api/placeholder/600/400",
      tags: ["Community", "Realtime", "UI"],
      color: "from-green-500 to-teal-600",
      link: "https://digital-porch.vercel.app/"
    },
    {
      id: 4,
      title: "Monza Motors",
      description: "Motorsport-inspired dashboard centralizing vehicle specs, maintenance logs, and ownership documents for transparent car management.",
      image: "/api/placeholder/600/400",
      tags: ["Automotive", "Dashboard", "Notifications"],
      color: "from-red-500 to-pink-600",
      link: "https://monza-motors.netlify.app/"
    },
    {
      id: 5,
      title: "E-Commerce Redesign",
      description: "UX and conversion optimization overhaul that lifted checkout conversions by 40% and cut cart abandonment by 25%.",
      image: "/api/placeholder/600/400",
      tags: ["UX Research", "UI Design", "A/B Testing"],
      color: "from-yellow-500 to-orange-600",
      link: "/projects"
    }
  ]

  return (
    <section ref={ref} className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Here are some of my recent projects where I've applied user-centered design principles 
            to solve complex problems and create exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="relative h-64 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white text-center px-4">
                    {project.title}
                  </h3>
                </div>
              </motion.div>

              <div className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.link}
                  target={project.link.startsWith('http') ? '_blank' : '_self'}
                  rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`block text-center bg-gradient-to-r ${project.color} text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg`}
                >
                  View Project
                </motion.a>
              </div>

              {/* Hover overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black bg-opacity-10 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection