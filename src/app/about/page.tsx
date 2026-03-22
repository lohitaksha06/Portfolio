'use client'

import Header from '@/components/layout/Header'
import ResumePreview from '@/components/sections/ResumePreview'
import { motion } from 'framer-motion'

export default function About() {
  const resumeUrl = '/resume/Lohitaksha_Patary_CV.pdf'

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0a] pt-36">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-20"
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">About Me</h1>

            <div className="prose prose-lg text-gray-700 mb-12">
              <p className="text-xl leading-relaxed mb-6">
                {`Hi there! I am Lohit and I'm a full-stack dev with a lot of interest and passion for other technologies like blockchain, cloud, APIs, data—blah blah, basically anything that lets me stretch the stack and ship something fun.`}
              </p>
              <p className="text-xl leading-relaxed mb-6">
                {`Away from the keyboard, I'm a huge Formula 1 nerd (Forza Ferrari forever) and an even bigger Bayern Munich supporter—Harry Kane is my GOAT. Whether it's late-night race strategy breakdowns or Bundesliga weekends, you can count me in.`}
              </p>
              <p className="text-xl leading-relaxed mb-6">
                {`When I need a reset, I sing, experiment on my piano, and dive into playlists. EDM and electro-pop keep me in flow—David Guetta, Halsey, The Chainsmokers, Ed Sheeran, and Mako are on repeat—but I'm game to explore every genre and mashup I can find.`}
              </p>
              <p className="text-xl leading-relaxed">
                {`I'm building in public, collaborating with communities, and always open to new ideas. Feel free to follow along and reach out through any of my socials below.`}
              </p>
            </div>

            <div className="grid gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-[#151515] rounded-2xl p-8 shadow-sm border border-gray-800"
              >
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
                      <span aria-hidden="true">📄</span>
                      <span>Resume</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mt-3">My Resume</h2>
                    <p className="text-gray-300 mt-2">
                      View a preview below, or open/download the PDF.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl bg-[#0a0a0a] px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-gray-800 hover:bg-[#151515]"
                    >
                      Open PDF ↗
                    </a>
                    <a
                      href={resumeUrl}
                      download
                      className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
                    >
                      Download Resume
                    </a>
                  </div>
                </div>

                <ResumePreview fileUrl={resumeUrl} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-[#151515] rounded-2xl p-8 shadow-sm"
              >
                <h2 className="text-3xl font-bold text-white mb-6">{`Let's Connect`}</h2>
                <ul className="space-y-5 text-lg text-gray-700">
                  <li className="flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-xl font-semibold"
                    >
                      in
                    </span>
                    <a
                      href="https://www.linkedin.com/in/lohitaksha-patary-34638a321/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-indigo-800"
                    >
                      <span className="font-semibold text-indigo-600">LinkedIn ↗</span>
                      <span className="block text-sm text-gray-500">@lohitaksha-patary-34638a321</span>
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white text-xl"
                    >
                      🐙
                    </span>
                    <a
                      href="https://github.com/lohitaksha06"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-indigo-800"
                    >
                      <span className="font-semibold text-indigo-600">GitHub ↗</span>
                      <span className="block text-sm text-gray-500">@lohitaksha06</span>
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xl"
                    >
                      IG
                    </span>
                    <a
                      href="https://www.instagram.com/lohitaksha.06/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-indigo-800"
                    >
                      <span className="font-semibold text-indigo-600">Instagram ↗</span>
                      <span className="block text-sm text-gray-500">@lohitaksha.06</span>
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-white text-xl"
                    >
                      💬
                    </span>
                    <div>
                      <span className="font-semibold text-indigo-600">Discord</span>
                      <span className="block text-sm text-gray-500">ronhere</span>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  )
}
