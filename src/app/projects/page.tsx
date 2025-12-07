'use client'

import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Meetriders – Smart College Carpool",
      category: "Spring Boot + SQL",
      description:
        "Meetriders is an intelligent ride-matching platform for campus commuters, built with Spring Boot services and SQL data models to pair students and faculty by route, timing, and availability.",
      image: "/api/placeholder/800/600",
      tags: ["Spring Boot", "SQL", "Ride Matching", "Backend"],
      link: "https://meet-riders.vercel.app/",
      challenge:
        "Day scholars at my college were stuck waiting for evening buses with no reliable way to coordinate shared rides despite overlapping home routes and schedules.",
      solution:
        "Engineered REST APIs that capture university metadata, geolocated routes, and real-time availability pings, then run SQL matching queries with time-window and direction filters to surface ideal carpool partners instantly.",
      results: [
        "Prototype reduced post-class wait times by letting day scholars find ride partners as soon as they were free",
        "Automated matches respect ±15 minute windows, shared departments, and nearest pickup points to keep carpools relevant",
        "Backend-first architecture now powers a live dashboard at meet-riders.vercel.app for continued feedback"
      ]
    },
    {
      id: 2,
      title: "IntelliQuery – Natural Language SQL Engine",
      category: "Java + LLM Backend",
      description:
        "IntelliQuery transforms natural language prompts into optimized SQL for MariaDB and returns annotated explanations so non-technical teams can interrogate enterprise data without writing queries.",
      image: "/api/placeholder/800/600",
      tags: ["Java", "LLM", "SQL", "NLP"],
      link: "#",
      challenge:
        "Operations staff, HR, and academic admins needed instant answers from relational datasets but were blocked by the SQL skills gap and ad-hoc developer requests.",
      solution:
        "Built a Spring-powered pipeline that interprets natural language intents, assembles parameterized SQL via a hosted LLM, executes against MariaDB using JDBC, and narrates the resulting data back in plain English.",
      results: [
        "LLM-driven translator converts user questions into efficient SQL with guardrails",
        "Result explainer summarizes rows and metrics so stakeholders understand outcomes without dashboards",
        "Conversational architecture unlocks secure, self-service analytics for enterprise datasets"
      ]
    },
    {
      id: 3,
      title: "Digital Porch",
      category: "Community Platform",
      description:
        "Digital Porch recreates the warmth of a neighborhood porch online, giving communities a shared space to post updates, coordinate events, and stay connected through an approachable, minimal interface.",
      image: "/api/placeholder/800/600",
      tags: ["Community", "Real-time", "Responsive UI", "Accessibility"],
      link: "https://digital-porch.vercel.app/",
      challenge:
        "Local groups needed an inclusive digital hub that felt as welcoming as in-person porch conversations while remaining lightweight for varying connection speeds.",
      solution:
        "Designed a clean feed with role-based moderation, instant notifications, and responsive layouts so neighbors of every age can share announcements and resources with ease.",
      results: [
        "Community feed for announcements, resources, and questions",
        "Real-time alerts keep conversations active and timely",
        "Optimized for low-bandwidth access while retaining a friendly UI"
      ]
    },
    {
      id: 4,
      title: "Monza Motors",
      category: "Automotive Experience",
      description:
        "Monza Motors unifies vehicle data, maintenance history, and ownership documents within a motorsport-inspired dashboard so drivers, dealers, and service teams share a single, transparent view of every car.",
      image: "/api/placeholder/800/600",
      tags: ["Automotive", "Dashboard", "Data", "Notifications"],
      link: "https://monza-motors.netlify.app/",
      challenge:
        "Car owners and service partners lacked a streamlined way to access maintenance logs, documentation, and performance insights without juggling paperwork or disconnected tools.",
      solution:
        "Architected a centralized vehicle hub with editable service logs, dealer integrations, and a document vault layered within a sleek UI that echoes motorsport precision.",
      results: [
        "Vehicle dashboard surfaces model specs, service history, and performance cues",
        "Maintenance tracker and smart reminders reduce missed services and renewals",
        "Digital documentation vault keeps ownership records transparent and accessible"
      ]
    },
    {
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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