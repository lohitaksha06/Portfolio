'use client'

import Header from '@/components/layout/Header'
import ResumePreview from '@/components/sections/ResumePreview'
import { motion } from 'framer-motion'

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
    <path d="M4.983 3.5C4.983 4.881 3.88 6 2.5 6S0 4.881 0 3.5 1.12 1 2.5 1s2.483 1.119 2.483 2.5zM.5 8h4V23h-4V8zm7 0h3.833v2.047h.055C11.93 9.071 13.488 7.5 16.22 7.5 21.263 7.5 22 10.814 22 15.123V23h-4v-6.923c0-1.65-.03-3.77-2.296-3.77-2.3 0-2.652 1.796-2.652 3.653V23h-4V8z" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
    <rect x="2.5" y="2.5" width="19" height="19" rx="5" strokeWidth="2" />
    <circle cx="12" cy="12" r="4.5" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" stroke="none" />
  </svg>
)

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
    <path d="M20.317 4.37A19.79 19.79 0 0016.23 3.1a13.91 13.91 0 00-.597 1.233 18.27 18.27 0 00-5.266 0A13.84 13.84 0 009.77 3.1a19.736 19.736 0 00-4.09 1.272C3.093 8.2 2.392 11.932 2.744 15.61a19.9 19.9 0 005.032 2.57c.408-.56.773-1.153 1.09-1.774a12.77 12.77 0 01-1.716-.826c.145-.105.286-.214.424-.326a14.15 14.15 0 0012.852 0c.14.112.28.221.424.326-.545.32-1.118.6-1.716.827.317.62.682 1.212 1.09 1.773a19.85 19.85 0 005.032-2.57c.414-4.264-.708-7.962-2.765-11.24zM9.52 13.35c-.999 0-1.82-.916-1.82-2.04s.804-2.04 1.82-2.04c1.023 0 1.838.924 1.82 2.04 0 1.124-.804 2.04-1.82 2.04zm4.96 0c-.999 0-1.82-.916-1.82-2.04s.804-2.04 1.82-2.04c1.023 0 1.838.924 1.82 2.04 0 1.124-.797 2.04-1.82 2.04z" />
  </svg>
)

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

            <div className="prose prose-lg text-white mb-12">
              <p className="text-xl leading-relaxed text-white mb-6">
                {`Hi there! I am Lohit and I'm a full-stack dev with a lot of interest and passion for other technologies like blockchain, cloud, APIs, data—blah blah, basically anything that lets me stretch the stack and ship something fun.`}
              </p>
              <p className="text-xl leading-relaxed text-white mb-6">
                {`Away from the keyboard, I'm a huge Formula 1 nerd (Forza Ferrari forever) and an even bigger Bayern Munich supporter—Harry Kane is my GOAT. Whether it's late-night race strategy breakdowns or Bundesliga weekends, you can count me in.`}
              </p>
              <p className="text-xl leading-relaxed text-white mb-6">
                {`When I need a reset, I sing, experiment on my piano, and dive into playlists. EDM and electro-pop keep me in flow—David Guetta, Halsey, The Chainsmokers, Ed Sheeran, and Mako are on repeat—but I'm game to explore every genre and mashup I can find.`}
              </p>
              <p className="text-xl leading-relaxed text-white">
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
                <ul className="space-y-5 text-lg text-white">
                  <li className="flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a66c2] text-white"
                    >
                      <LinkedInIcon />
                    </span>
                    <a
                      href="https://www.linkedin.com/in/lohitaksha-patary-34638a321/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-indigo-300"
                    >
                      <span className="font-semibold text-indigo-300">LinkedIn ↗</span>
                      <span className="block text-sm text-white/80">@lohitaksha-patary-34638a321</span>
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white"
                    >
                      <InstagramIcon />
                    </span>
                    <a
                      href="https://www.instagram.com/lohitaksha.06/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-indigo-300"
                    >
                      <span className="font-semibold text-indigo-300">Instagram ↗</span>
                      <span className="block text-sm text-white/80">@lohitaksha.06</span>
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5865f2] text-white"
                    >
                      <DiscordIcon />
                    </span>
                    <div>
                      <span className="font-semibold text-indigo-300">Discord</span>
                      <span className="block text-sm text-white/80">ronhere</span>
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
