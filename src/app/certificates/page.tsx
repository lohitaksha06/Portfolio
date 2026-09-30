import { redirect } from 'next/navigation'

// See the note in /projects: a real 307 is what makes the browser land on
// the anchored section rather than at the top of the page.
export const dynamic = 'force-dynamic'

/** The certificates section now lives on the homepage. */
export default function CertificatesPage() {
  redirect('/#certificates')
}
