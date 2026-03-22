'use client'

import { useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`

type ResumePreviewInnerProps = {
  fileUrl: string
  className?: string
}

export default function ResumePreviewInner({
  fileUrl,
  className,
}: ResumePreviewInnerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [containerWidth, setContainerWidth] = useState<number>(820)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const element = containerRef.current

    const updateWidth = () => {
      const width = Math.floor(element.getBoundingClientRect().width)
      if (width > 0) setContainerWidth(Math.min(920, width))
    }

    updateWidth()

    const resizeObserver = new ResizeObserver(() => updateWidth())
    resizeObserver.observe(element)

    return () => resizeObserver.disconnect()
  }, [])

  if (error) {
    return (
      <div
        ref={containerRef}
        className={
          className ??
          'rounded-xl border border-red-800/50 bg-red-900/20 p-4 text-sm text-red-400'
        }
      >
        <p className="font-semibold">Resume preview unavailable.</p>
        <p className="mt-1">
          Make sure your PDF exists at <span className="font-mono">/public{fileUrl}</span>.
        </p>
        <p className="mt-1 opacity-80">{error}</p>
      </div>
    )
  }

  return (
    <div ref={containerRef} className={className}>
      <div className="overflow-hidden rounded-xl border border-gray-800 bg-[#151515] shadow-sm">
        <Document
          file={fileUrl}
          loading={<div className="p-6 text-sm text-gray-500">Loading resume…</div>}
          onLoadError={(err) => setError(err?.message ?? 'Failed to load PDF')}
          onSourceError={(err) => setError(err?.message ?? 'Failed to load PDF source')}
        >
          <Page
            pageNumber={1}
            width={containerWidth}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            loading={<div className="p-6 text-sm text-gray-500">Rendering preview…</div>}
          />
        </Document>
      </div>
      <p className="mt-3 text-xs text-gray-500">
        Preview shows page 1. Open the PDF for the full resume.
      </p>
    </div>
  )
}
