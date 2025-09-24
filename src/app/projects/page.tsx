'use client'

import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Redesign",
      category: "UX Research & Design",
      description: "Complete redesign of a major e-commerce platform focusing on conversion optimization and user experience improvements. The project resulted in a 40% increase in conversions and 25% reduction in cart abandonment.",
      image: "/api/placeholder/800/600",
      tags: ["UX Research", "UI Design", "A/B Testing", "E-commerce"],
      link: "#",
      challenge: "The existing platform had a confusing checkout process and poor mobile experience",
      solution: "Streamlined user flows, implemented responsive design, and conducted extensive user testing",
      results: ["40% increase in conversions", "25% reduction in cart abandonment", "35% improvement in mobile engagement"]
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile UX Design",
      description: "Designed an intuitive mobile banking experience with a focus on accessibility, security, and ease of use. The app serves over 100k users and maintains a 4.8-star rating.",
      image: "/api/placeholder/800/600",
      tags: ["Mobile Design", "Accessibility", "Fintech", "Security"],
      link: "#",
      challenge: "Creating a secure yet user-friendly banking experience for diverse user groups",
      solution: "Implemented biometric authentication, clear visual hierarchy, and accessibility standards",
      results: ["4.8-star app store rating", "30% increase in mobile transactions", "WCAG AA compliance achieved"]
    },
    {
      id: 3,
      title: "Healthcare Dashboard",
      category: "Data Visualization",
      description: "Complex data visualization dashboard for healthcare professionals to monitor patient data, trends, and alerts in real-time. The system processes over 1M data points daily.",
      image: "/api/placeholder/800/600",
      tags: ["Data Visualization", "Healthcare", "Dashboard", "Real-time"],
      link: "#",
      challenge: "Presenting complex medical data in an actionable and easy-to-understand format",
      solution: "Created intuitive data hierarchies, color-coded alert systems, and customizable views",
      results: ["50% reduction in data analysis time", "99.9% system uptime", "25% improvement in patient outcomes"]
    },
    {
      id: 4,
      title: "AI-Powered SaaS Platform",
      category: "Complex UI Design",
      description: "User-friendly interface for a complex AI tool that makes machine learning accessible to non-technical users. The platform democratizes AI for small businesses.",
      image: "/api/placeholder/800/600",
      tags: ["AI/ML", "SaaS", "Complex UI", "B2B"],
      link: "#",
      challenge: "Making complex AI functionality accessible to users without technical backgrounds",
      solution: "Progressive disclosure, guided workflows, and extensive onboarding processes",
      results: ["80% user onboarding completion", "60% reduction in support tickets", "150% growth in user adoption"]
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6">
              My Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Here's a selection of projects where I've applied user-centered design principles 
              to solve complex problems and create exceptional digital experiences.
            </p>
          </div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${
                      index % 4 === 0 ? 'from-blue-500 to-purple-600' :
                      index % 4 === 1 ? 'from-green-500 to-teal-600' :
                      index % 4 === 2 ? 'from-red-500 to-pink-600' :
                      'from-yellow-500 to-orange-600'
                    } opacity-80`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-2xl md:text-3xl font-bold text-white text-center px-4">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="mb-4">
                      <span className="text-sm font-medium text-purple-600 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                        {project.title}
                      </h2>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-700 mb-4">{project.challenge}</p>
                      
                      <h4 className="font-bold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-700 mb-4">{project.solution}</p>
                      
                      <h4 className="font-bold text-gray-900 mb-2">Results:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {project.results.map((result, idx) => (
                          <li key={idx}>{result}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
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
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-block bg-gradient-to-r ${
                        index % 4 === 0 ? 'from-blue-500 to-purple-600' :
                        index % 4 === 1 ? 'from-green-500 to-teal-600' :
                        index % 4 === 2 ? 'from-red-500 to-pink-600' :
                        'from-yellow-500 to-orange-600'
                      } text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg`}
                    >
                      View Case Study
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-xl text-gray-600 mb-8">
              Interested in working together?
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Let's Talk
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </main>
  )
}