import Image from 'next/image'
import { about } from '@/data/about'
import experience from '@/data/experience'
import projects from '@/data/projects'
import { githubProfile, githubAccounts } from '@/data/github'
import publications from '@/data/publications'
import certificates from '@/data/certificates'
import blogs from '@/data/blogs'
import achievements from '@/data/achievements'
import SpotlightGrid from '@/components/SpotlightGrid'
import ContributionsGraph from '@/components/ContributionsGraph'
import SocialIcons from '@/components/SocialIcons'

const statusBadge: Record<NonNullable<(typeof publications)[number]['status']>, string> = {
  published: 'published',
  'in-review': 'in review',
  'in-prep': 'in preparation',
}

const monthYear = (iso: string) => {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

export default function Home() {
  return (
    <>
      <header className="hero" id="about">
        <div className="stage-inner">
          <span className="hero-roles">
            Computer Vision &amp; RAG
            <span className="sep">&middot;</span>
            <span>Blockchain &amp; Optimisation</span>
          </span>
          <h1>{about.name}</h1>
          <p className="stage-lead">
            I&rsquo;m a Computer Science undergraduate at Amrita Vishwa Vidyapeetham, building{' '}
            <em className="hl">accessible AI</em> and multi-objective optimisation systems &mdash;
            surround-view computer vision, RAG kiosks that adapt to how a user reads, and genetic
            algorithms that solve urban problems with four competing objectives at once.
          </p>
          <p className="links">
            <a className="primary" href="/resume/Lohitaksha_Patary_RESUME.pdf" download>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 2 0 01.707.293l5.414 5.414a1 2 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Resume</span>
            </a>
            <a href="/cv/Lohitaksha_Patary_Full_CV.pdf" download>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 2 0 01.707.293l5.414 5.414a1 2 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Full CV</span>
            </a>
            <a href="https://github.com/lohitaksha06" target="_blank" rel="noopener noreferrer">
              <SocialIcons.GitHub />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/lohitaksha-patary-34638a321/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcons.LinkedIn />
              <span>LinkedIn</span>
            </a>
            <a href="https://x.com/lohitaksha06" target="_blank" rel="noopener noreferrer">
              <SocialIcons.X />
              <span>X</span>
            </a>
            <a href={`mailto:${about.email}`}>
              <SocialIcons.Mail />
              <span>Email</span>
            </a>
          </p>
          <p className="hero-contact">
            <small>
              {about.location} &middot; B.Tech CSE, 2024&ndash;2028, CGPA 7.86 &middot; Reach me at{' '}
              <a href={`mailto:${about.email}`}>{about.email}</a>
            </small>
          </p>
        </div>
      </header>

      <main>
        {/* ------------------------------------------------------------- */}
        <section className="stage section reveal" id="experience">
          <div className="stage-inner">
            <div className="section-head">
              <h2>Experience</h2>
              <span className="head-sub">Where I&rsquo;ve worked.</span>
            </div>

            {experience.map((job) => (
              <div className="entry" key={job.id}>
                <div className="entry-head-row">
                  <span className="entry-head">
                    {job.role}
                    <span className="meta">
                      {job.org} &middot; {job.when}
                    </span>
                  </span>
                  {job.links?.map((l) => (
                    <span className="entry-links" key={l.href}>
                      [
                      <a href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label}
                      </a>
                      ]
                    </span>
                  ))}
                </div>
                {job.sub && <p className="entry-sub">{job.sub}</p>}
                <details className="entry-details">
                  <summary>Technical details</summary>
                  <ul>
                    {job.bullets.map((b, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
                    ))}
                  </ul>
                </details>
              </div>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        <section className="stage section reveal" id="projects">
          <div className="stage-inner">
            <div className="section-head">
              <h2>Projects</h2>
              <span className="head-sub">Things I&rsquo;ve built.</span>
            </div>

            <SpotlightGrid>
              {projects.map((p) => (
                <div className="project-tile" key={p.id}>
                  <div className="project-card">
                    <div>
                      <h3 className="project-title">{p.title}</h3>
                      {p.when && <p className="meta">{p.when}</p>}
                      <p>{p.description}</p>
                      <p className="project-tags">
                        <span className="project-tag">{p.kind}</span>
                        {p.tags.map((t) => (
                          <span className="project-tag" key={t}>
                            {t}
                          </span>
                        ))}
                      </p>
                    </div>
                    <details className="entry-details">
                      <summary>Challenge &amp; approach</summary>
                      <ul>
                        <li>
                          <b>Challenge &mdash; </b>
                          {p.challenge}
                        </li>
                        <li>
                          <b>Approach &mdash; </b>
                          {p.solution}
                        </li>
                        <li>
                          <b>Outcome &mdash; </b>
                          <ul>
                            {p.results.map((r, i) => (
                              <li key={i}>{r}</li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </details>
                    <p className="project-links">
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer">
                          <SocialIcons.GitHub />
                          <span>GitHub</span>
                        </a>
                      )}
                      {p.link && (
                        <a href={p.link} target="_blank" rel="noopener noreferrer">
                          <SocialIcons.External />
                          <span>Live</span>
                        </a>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </SpotlightGrid>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        <section className="stage section reveal" id="opensource">
          <div className="stage-inner">
            <div className="section-head">
              <h2>GitHub</h2>
              <span className="head-sub">A year of commits, across three accounts.</span>
            </div>

            <div className="gh-head">
              <Image
                className="gh-avatar"
                src={githubProfile.avatar}
                alt=""
                width={52}
                height={52}
              />
              <div>
                <div className="gh-handle">
                  <a href={githubProfile.url} target="_blank" rel="noopener noreferrer">
                    @{githubProfile.login}
                  </a>
                </div>
                <div className="gh-handle">
                  {githubAccounts.slice(1).map((a, i) => (
                    <span key={a.login}>
                      {i > 0 && (
                        <>
                          {' \u00b7 '}
                        </>
                      )}
                      <a href={a.url} target="_blank" rel="noopener noreferrer">
                        @{a.login}
                      </a>
                    </span>
                  ))}
                </div>
              </div>
              <div className="gh-stats">
                <span className="gh-stat">
                  <b>{githubProfile.totalRepos}</b> public repos
                </span>
                <span className="gh-stat">
                  <b>{githubProfile.totalFollowers}</b> followers
                </span>
              </div>
            </div>

            <ContributionsGraph />
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        <section className="stage section reveal" id="publications">
          <div className="stage-inner">
            <div className="section-head">
              <h2>Research</h2>
              <span className="head-sub">Published, and in preparation.</span>
            </div>

            {publications.map((pub) => (
              <div className="paper" key={pub.id}>
                <span className="paper-title">
                  {pub.title}
                  {pub.status && <span className="paper-badge">{statusBadge[pub.status]}</span>}
                </span>
                <span className="paper-authors">{pub.authors}</span>
                <span className="paper-venue">
                  {pub.venue}
                  {pub.links?.map((l) => (
                    <span key={l.href}>
                      {' \u00b7 '}
                      <a href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label}
                      </a>
                    </span>
                  ))}
                </span>
                <p className="paper-abstract">{pub.abstract}</p>
                <details className="entry-details">
                  <summary>Read the abstract notes</summary>
                  <ul>
                    <li>
                      Written in Typst (IEEE format) with source code and preprints openly hosted on
                      GitHub.
                    </li>
                    <li>
                      Addresses UN Sustainable Development Goal 11 (Sustainable Cities &amp;
                      Communities) and Goal 9 (Industry, Innovation &amp; Infrastructure).
                    </li>
                  </ul>
                </details>
              </div>
            ))}

          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        <section className="stage section reveal" id="achievements">
          <div className="stage-inner">
            <div className="section-head">
              <h2>Achievements</h2>
              <span className="head-sub">Things that went well.</span>
            </div>

            {achievements.map((a) => (
              <div className="ach" key={a.id}>
                <span className="ach-mark">{a.when}</span>
                <div className="ach-body">
                  <div className="ach-title">{a.title}</div>
                  <div className="ach-sub">{a.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        <section className="stage section reveal" id="certificates">
          <div className="stage-inner">
            <div className="section-head">
              <h2>Certificates</h2>
              <span className="head-sub">Credentials and skill badges.</span>
            </div>

            {certificates.map((c) => (
              <div className="cert" key={c.id}>
                <div className="cert-head">
                  <div>
                    <h3 className="cert-title">{c.title}</h3>
                    <p className="cert-issuer">{c.issuer}</p>
                  </div>
                  <span className="cert-when">
                    {c.issued}
                    {c.expired && <span className="cert-note">expired {c.expired}</span>}
                  </span>
                </div>
                {c.note && <p className="cert-issuer" style={{ marginTop: 6 }}>{c.note}</p>}
                {c.credentialUrl && (
                  <p className="cert-issuer" style={{ marginTop: 4 }}>
                    <a href={c.credentialUrl} target="_blank" rel="noopener noreferrer">
                      Verify credential
                      {c.credentialId && (
                        <span className="meta"> &middot; ID {c.credentialId}</span>
                      )}
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        <section className="stage section reveal" id="blogs">
          <div className="stage-inner">
            <div className="section-head">
              <h2>Blogs</h2>
              <span className="head-sub">Things I&rsquo;ve written.</span>
            </div>

            {[...blogs]
              .sort((a, b) => (a.date < b.date ? 1 : -1))
              .map((b) => (
                <a className="blog-card" key={b.id} href={b.href} target="_blank" rel="noopener noreferrer">
                  <span className="blog-card-title">{b.title}</span>
                  <span className="blog-card-desc">{b.excerpt}</span>
                  <span className="meta">{monthYear(b.date)}</span>
                </a>
              ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="stage-inner">
          <div className="footer-row">
            <div className="footer-links">
              <a href="https://github.com/lohitaksha06" target="_blank" rel="noopener noreferrer">
                <SocialIcons.GitHub />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/lohitaksha-patary-34638a321/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcons.LinkedIn />
                <span>LinkedIn</span>
              </a>
              <a href="https://x.com/lohitaksha06" target="_blank" rel="noopener noreferrer">
                <SocialIcons.X />
                <span>X</span>
              </a>
              <a href="https://www.instagram.com/lohitaksha.06/" target="_blank" rel="noopener noreferrer">
                <SocialIcons.Instagram />
                <span>Instagram</span>
              </a>
              <a href={`mailto:${about.email}`}>
                <SocialIcons.Mail />
                <span>Email</span>
              </a>
              <a href="/resume/Lohitaksha_Patary_RESUME.pdf" download>
                <SocialIcons.Download />
                <span>Resume</span>
              </a>
              <a href="/cv/Lohitaksha_Patary_Full_CV.pdf" download>
                <SocialIcons.Download />
                <span>Full CV</span>
              </a>
            </div>
          </div>
          <p className="footer-meta">
            <small>
              {about.name} &middot; {about.location} &middot; Built with Next.js &amp; Tailwind
              &middot; &copy; {new Date().getFullYear()}
            </small>
          </p>
        </div>
      </footer>
    </>
  )
}
