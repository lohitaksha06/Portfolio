import type { Metadata } from 'next'
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Reveal, { HashScroll } from '@/components/Reveal'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const siteUrl = 'https://lohitaksha.dev'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Lohitaksha Patary',
  description:
    'Computer Science undergraduate at Amrita Vishwa Vidyapeetham. Computer vision, RAG and accessibility AI, blockchain supply chains, and multi-objective optimisation research. Published on DZone.',
  keywords: [
    'Lohitaksha Patary',
    'machine learning',
    'computer vision',
    'RAG',
    'accessibility technology',
    'blockchain',
    'multi-objective genetic algorithm',
    'optimization algorithms',
    'Amrita Vishwa Vidyapeetham',
  ],
  authors: [{ name: 'Lohitaksha Patary' }],
  creator: 'Lohitaksha Patary',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Lohitaksha Patary',
    title: 'Lohitaksha Patary — Computer Vision, RAG & Optimisation Research',
    description:
      'Computer Science undergraduate building accessible AI, blockchain supply chains, and multi-objective optimisation research. Published on DZone.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lohitaksha Patary',
    description:
      'Computer vision, RAG and accessibility AI, blockchain supply chains, and multi-objective optimisation research.',
  },
  robots: { index: true, follow: true },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f7f3' },
    { media: '(prefers-color-scheme: dark)', color: '#131312' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Marks scripting as available, so the scroll-reveal rules only
            hide content when JS can bring it back. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js");`,
          }}
        />
        {/* Applies the remembered theme before first paint, so an explicit
            choice never flashes the other one. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light")document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <Nav />
        {children}
        <Reveal />
        <HashScroll />
      </body>
    </html>
  )
}
