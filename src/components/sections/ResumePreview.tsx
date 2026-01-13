'use client'

import dynamic from 'next/dynamic'

type ResumePreviewProps = {
  fileUrl: string
  className?: string
}

const ResumePreviewInner = dynamic<ResumePreviewProps>(
  () => import('@/components/sections/ResumePreviewInner').then((mod) => mod.default),
  {
  ssr: false,
  loading: () => (
    <div className="rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-500 shadow-sm">
      Loading resume preview…
    </div>
  ),
  }
)

export default function ResumePreview({ fileUrl, className }: ResumePreviewProps) {
  return <ResumePreviewInner fileUrl={fileUrl} className={className} />
}
