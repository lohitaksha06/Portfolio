'use client'

import Header from '@/components/layout/Header'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-36">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-20"
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8">About Me</h1>

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

          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{`What I'm Geeking Out On`}</h2>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• Conversational AI that lands real SQL answers for everyday teams</li>
                <li>• Decentralized tooling, cross-chain data, and tokenized loyalty ideas</li>
                <li>• Cloud automation with edge services, API gateways, and observability</li>
                <li>• Building community-first products that feel as friendly as they are scalable</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{`Let's Connect`}</h2>
              <ul className="space-y-4 text-lg text-gray-700">
                <li>
                  <a
                    href="https://www.linkedin.com/in/lohitaksha-patary-34638a321/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
                  >
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/lohitaksha06"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
                  >
                    GitHub ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/lohitaksha.06/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
                  >
                    Instagram ↗
                  </a>
                </li>
                <li>
                  <span className="inline-flex items-center gap-2 text-gray-700">
                    Discord: <span className="font-semibold">ronhere</span>
                  </span>
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