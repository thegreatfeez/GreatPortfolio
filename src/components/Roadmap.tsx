import { motion } from 'framer-motion'
import { FiArrowRight, FiClock, FiMail } from 'react-icons/fi'
import Footer from './Footer'
import MarqueeBand from './MarqueeBand'
import Navbar from './Navbar'
import { Reveal, Stagger, StaggerItem } from './Reveal'
import type { RoadmapPage } from '../data.ts'
import { contact } from '../data.ts'

const statusStyles = {
  'in-progress': {
    chip: 'border-mint/30 text-mint',
    dot: 'bg-mint',
    label: 'In progress',
  },
  planned: {
    chip: 'border-ink-subtle/30 text-ink-subtle',
    dot: 'bg-ink-subtle',
    label: 'Planned',
  },
} as const

type RoadmapProps = {
  page: RoadmapPage
  tickerItems: string[]
  placeholderLabel: string
}

function Roadmap({ page, tickerItems, placeholderLabel }: RoadmapProps) {
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

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-12 md:px-12">
          <header className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="mb-5 flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-line" />
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.3em] text-mint">
                  {page.eyebrow}
                </span>
              </div>
              <h1 className="mb-6 font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink md:text-5xl">
                {page.title}
                <br />
                <span className="text-accent">{page.titleAccent}</span>
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-ink-muted">
                {page.description}
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-mint lg:col-span-4 lg:justify-end">
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-mint shadow-[0_0_10px_rgba(110,235,223,0.6)]"
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />
              {page.statusLabel}
            </div>
          </header>

          <Reveal className="mt-14 flex items-center gap-3 rounded-lg border border-line/20 bg-surface px-5 py-4">
            <FiClock aria-hidden="true" className="shrink-0 text-lg text-mint" />
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-ink-subtle">
              {placeholderLabel}
            </p>
          </Reveal>

          <Stagger className="mt-8 grid gap-6 md:grid-cols-3">
            {page.items.map((item) => {
              const status = statusStyles[item.status]

              return (
                <StaggerItem key={item.title}>
                  <article className="flex h-full flex-col rounded-xl border border-line/20 border-dashed bg-raised p-7">
                    <span
                      className={`mb-6 inline-flex w-fit items-center gap-2 rounded-full border bg-chip px-3 py-1 font-mono text-[0.625rem] uppercase tracking-widest ${status.chip}`}
                    >
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 rounded-full ${status.dot}`}
                      />
                      {status.label}
                    </span>

                    <h2 className="mb-3 font-display text-lg font-bold text-ink">
                      {item.title}
                    </h2>
                    <p className="mb-6 flex-grow text-sm leading-relaxed text-ink-muted">
                      {item.description}
                    </p>

                    <ul className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <li
                          className="rounded bg-chip px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-wider text-accent"
                          key={tag}
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </article>
                </StaggerItem>
              )
            })}
          </Stagger>

          <Reveal className="mt-6">
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-subtle">
              {page.note}
            </p>
          </Reveal>

          <Reveal className="mt-16 border-t border-line/15 pt-12">
            <h2 className="mb-4 font-display text-2xl font-bold text-ink md:text-3xl">
              {page.cta.title}
            </h2>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-ink-muted">
              {page.cta.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="inline-flex min-h-12 items-center gap-2 rounded-md bg-accent px-7 font-display text-[0.6875rem] font-bold uppercase tracking-[0.25em] text-abyss transition-colors hover:bg-ink"
                href={`mailto:${contact.email}`}
              >
                <FiMail aria-hidden="true" className="text-sm" />
                {page.cta.primary}
              </a>
              <a
                className="inline-flex min-h-12 items-center gap-2 rounded-md border border-ink-subtle/30 px-7 font-display text-[0.6875rem] font-bold uppercase tracking-[0.25em] text-ink-muted transition-colors hover:border-mint/50 hover:text-mint"
                href="https://github.com/thegreatfeez"
                rel="noreferrer"
                target="_blank"
              >
                Follow on GitHub
                <FiArrowRight aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Roadmap
