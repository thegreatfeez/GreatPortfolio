import { motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { MdAccountBalance, MdCode, MdHub, MdSecurity } from 'react-icons/md'
import type { IconType } from 'react-icons'
import Footer from '../components/Footer'
import MarqueeBand from '../components/MarqueeBand'
import Navbar from '../components/Navbar'
import { Reveal } from '../components/Reveal'
import { contact, projectsPage } from '../data.ts'

const tickerItems = Array.from(
  new Set(projectsPage.projects.flatMap((project) => project.tags)),
)

const projectIconMap: Record<string, IconType> = {
  code: MdCode,
  bank: MdAccountBalance,
  security: MdSecurity,
  hub: MdHub,
}

const statusToneStyles = {
  primary: {
    dot: 'bg-accent',
    glow: 'shadow-[0_0_8px_rgba(189,199,220,0.5)]',
  },
  tertiary: {
    dot: 'bg-mint',
    glow: 'shadow-[0_0_8px_rgba(110,235,223,0.5)]',
  },
  error: {
    dot: 'bg-danger',
    glow: 'shadow-[0_0_8px_rgba(187,85,81,0.5)]',
  },
} as const

function Projects() {
  const projects = projectsPage.projects

  return (
    <div className="relative min-h-screen overflow-hidden bg-abyss text-ink" id="top">
      <motion.div
        animate={{ x: [0, -25, 20, 0], y: [0, 20, -15, 0], scale: [1, 1.1, 0.95, 1] }}
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-24 -z-10 h-[420px] w-[420px] rounded-full bg-mint/[0.07] blur-[120px]"
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <Navbar />
      <main className="pt-20">
        <MarqueeBand items={tickerItems} />

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-14 md:px-12">
          <header className="mb-16 max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-line" />
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.3em] text-mint">
                {projectsPage.eyebrow}
              </span>
            </div>
            <h1 className="mb-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl">
              {projectsPage.title}
              <br />
              <span className="text-accent">{projectsPage.titleAccent}</span>
            </h1>
            <p className="text-base leading-relaxed text-ink-muted md:text-lg">
              {projectsPage.description}
            </p>
          </header>

          <section aria-label="Projects" className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => {
              const Icon = projectIconMap[project.icon]
              const tone = statusToneStyles[project.status.tone]

              return (
                <motion.article
                  className="group relative flex flex-col overflow-hidden rounded-xl border border-line/20 bg-surface p-7 transition-colors duration-300 hover:border-line/45 md:p-8"
                  initial={{ opacity: 0, y: 24 }}
                  key={project.id}
                  transition={{ duration: 0.5, delay: (index % 2) * 0.08, ease: 'easeOut' }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.12] transition-opacity duration-500 group-hover:opacity-20"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-abyss via-abyss/70 to-abyss/95"
                  />
                  <Icon
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-4 -top-2 text-8xl text-ink opacity-[0.06]"
                  />

                  <div className="relative mb-10 flex items-center justify-between">
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.3em] text-ink-subtle">
                      {project.id}
                    </span>
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ opacity: [1, 0.35, 1] }}
                        aria-hidden="true"
                        className={`h-2 w-2 rounded-full ${tone.dot} ${tone.glow}`}
                        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
                        {project.status.label}
                      </span>
                    </span>
                  </div>

                  <h2 className="relative mb-3 font-display text-2xl font-bold text-ink">
                    <a
                      className="after:absolute after:inset-0 after:content-[''] transition-colors group-hover:text-accent"
                      href={project.liveLink}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {project.name}
                    </a>
                  </h2>

                  <p className="relative mb-7 flex-grow text-sm leading-relaxed text-ink-muted">
                    {project.description}
                  </p>

                  <ul className="relative mb-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        className="rounded bg-chip px-3 py-1 font-mono text-[0.625rem] uppercase tracking-wider text-accent"
                        key={tag}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="relative flex items-center gap-6 font-mono text-[0.625rem] uppercase tracking-[0.2em]">
                    <span className="inline-flex items-center gap-1.5 text-accent">
                      Live demo
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                    <a
                      className="relative z-10 inline-flex min-h-10 items-center gap-1.5 text-ink-subtle transition-colors hover:text-mint"
                      href={project.codeLink}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FiGithub aria-hidden="true" />
                      Source
                    </a>
                  </div>
                </motion.article>
              )
            })}
          </section>

          <Reveal className="mt-20 border-t border-line/15 pt-14">
            <h2 className="mb-4 font-display text-2xl font-bold text-ink md:text-3xl">
              {projectsPage.cta.title}
            </h2>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-ink-muted">
              {projectsPage.cta.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="inline-flex min-h-12 items-center rounded-md bg-accent px-7 font-display text-[0.6875rem] font-bold uppercase tracking-[0.25em] text-abyss transition-colors hover:bg-ink"
                href={`mailto:${contact.email}`}
              >
                {projectsPage.cta.primary}
              </a>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Projects
