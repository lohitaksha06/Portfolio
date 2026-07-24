import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import FloatingParticles from '@/components/FloatingParticles'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Lohitaksha Patary — Portfolio",
  description: 'Building products and apps for the pleasure of helping people.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <FloatingParticles />

        <nav className="fixed top-6 left-6 z-50 flex items-center gap-6">
          <a href="/" className="text-sm font-medium text-[#64748b] transition-colors hover:text-[#00d4ff]">Home</a>
          <a href="/blogs" className="text-sm font-medium text-[#64748b] transition-colors hover:text-[#00d4ff]">Blogs</a>
          <a href="/certificates" className="text-sm font-medium text-[#64748b] transition-colors hover:text-[#00d4ff]">Certificates</a>
          <a href="/projects" className="text-sm font-medium text-[#64748b] transition-colors hover:text-[#00d4ff]">Projects</a>
        </nav>

        <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
          <a
            href="/resume/Lohitaksha_Patary_RESUME.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.08)] px-5 py-2.5 text-sm font-medium text-[#00d4ff] transition-all duration-300 hover:border-[#00d4ff] hover:bg-[rgba(0,212,255,0.15)] hover:shadow-[0_0_30px_rgba(0,212,255,0.4),0_0_60px_rgba(0,212,255,0.2)] hover:scale-105"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
          <a
            href="/cv/Lohitaksha_Patary_Full_CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.08)] px-5 py-2.5 text-sm font-medium text-[#00d4ff] transition-all duration-300 hover:border-[#00d4ff] hover:bg-[rgba(0,212,255,0.15)] hover:shadow-[0_0_30px_rgba(0,212,255,0.4),0_0_60px_rgba(0,212,255,0.2)] hover:scale-105"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            CV
          </a>
        </div>
        {children}
      </body>
    </html>
  )
}
