'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <main className="min-h-screen bg-white pt-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-20"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8">
            About Me
          </h1>
          
          <div className="prose prose-lg text-gray-700 mb-12">
            <p className="text-xl leading-relaxed mb-6">
              Hi there! I'm a passionate UX Engineer with over 5 years of experience in crafting 
              digital experiences that delight users and drive business results. I believe that 
              great design is not just about how something looks, but how it works.
            </p>
            
            <p className="text-xl leading-relaxed mb-6">
              My journey started in graphic design, but I quickly fell in love with the intersection 
              of design and technology. I discovered that the most impactful solutions come from 
              understanding both the user's needs and the technical possibilities.
            </p>
            
            <p className="text-xl leading-relaxed">
              When I'm not designing or coding, you can find me exploring new coffee shops, 
              hiking mountain trails, or experimenting with new technologies. I'm always eager 
              to learn and push the boundaries of what's possible in digital design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">My Process</h2>
              <ul className="space-y-4">
                {[
                  "Research & Discovery",
                  "User Persona Development",
                  "Wireframing & Prototyping",
                  "User Testing & Iteration",
                  "Visual Design & Branding",
                  "Development & Implementation"
                ].map((step, index) => (
                  <motion.li
                    key={step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </span>
                    <span className="text-lg">{step}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Experience</h2>
              <div className="space-y-6">
                {[
                  {
                    role: "Senior UX Engineer",
                    company: "Tech Startup Inc.",
                    period: "2022 - Present",
                    description: "Leading design system development and user research initiatives"
                  },
                  {
                    role: "UX Designer",
                    company: "Digital Agency Co.",
                    period: "2020 - 2022",
                    description: "Designed end-to-end user experiences for B2B and B2C products"
                  },
                  {
                    role: "UI/UX Designer",
                    company: "Creative Studio",
                    period: "2019 - 2020",
                    description: "Created visual designs and interactive prototypes for web and mobile"
                  }
                ].map((job, index) => (
                  <motion.div
                    key={job.role}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="border-l-4 border-purple-600 pl-4"
                  >
                    <h3 className="text-lg font-bold text-gray-900">{job.role}</h3>
                    <p className="text-purple-600 font-medium">{job.company}</p>
                    <p className="text-gray-500 text-sm mb-2">{job.period}</p>
                    <p className="text-gray-700">{job.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </main>
  )
}