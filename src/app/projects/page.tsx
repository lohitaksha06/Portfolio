import { redirect } from 'next/navigation'

// Forced dynamic so this answers with a real 307 rather than a static
// client-side redirect. A soft navigation would update the URL without
// scrolling, dropping anyone arriving from an old bookmark at the top of
// the page instead of on the section.
export const dynamic = 'force-dynamic'

/** The projects section now lives on the homepage. */
export default function ProjectsPage() {
  redirect('/#projects')
}
