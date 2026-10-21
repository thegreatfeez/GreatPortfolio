import { motion } from 'framer-motion'
import { FiArrowUpRight, FiClock, FiMail, FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import MarqueeBand from '../components/MarqueeBand'
import Navbar from '../components/Navbar'
import { Reveal, Stagger, StaggerItem } from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { contact, financeDashboards, financePage } from '../data.ts'

const tickerItems = Array.from(
  new Set([
    ...financeDashboards.flatMap((dashboard) => dashboard.tags),
    ...financePage.items.flatMap((item) => item.tags),
    'Financial analysis',
  ]),
)

const dashboardStatusStyles = {
  live: {
    chip: 'border-mint/30 text-mint',
    dot: 'bg-mint',
    label: 'Live',
  },
  'in-build': {
    chip: 'border-ink-subtle/30 text-ink-subtle',
    dot: 'bg-ink-subtle',
    label: 'In build',
  },
} as const

const roadmapStatusStyles = {
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

function Finance() {
  const liveCount = financeDashboards.filter((dashboard) => dashboard.status === 'live').length

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
          <header className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="mb-5 flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-line" />
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.3em] text-mint">
                  {financePage.eyebrow}
                </span>
              </div>
              <h1 className="mb-6 font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink md:text-5xl">
                {financePage.title}
                <br />
                <span className="text-accent">{financePage.titleAccent}</span>
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-ink-muted">
                {financePage.description}
              </p>
            </div>

            <div className="lg:col-span-4">
              <Reveal className="rounded-xl border border-line/20 bg-surface p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-subtle">
                    Shelf index
                  </span>
                  <span className="inline-flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-mint">
                    <motion.span
                      animate={{ opacity: [1, 0.3, 1] }}
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full bg-mint shadow-[0_0_10px_rgba(110,235,223,0.6)]"
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    {String(liveCount).padStart(2, '0')} live
                  </span>
                </div>

                <ol className="mt-5 border-t border-line/15">
                  {financeDashboards.map((dashboard, index) => (
                    <li className="border-b border-line/15" key={dashboard.id}>
                      <Link
                        className="group flex items-center justify-between gap-4 py-4"
                        to={dashboard.href}
                      >
                        <span className="min-w-0">
                          <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-subtle">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="mt-1 block truncate font-display text-base font-bold text-ink transition-colors group-hover:text-accent">
                            {dashboard.title}
                          </span>
                        </span>
                        <FiArrowUpRight
                          aria-hidden="true"
                          className="shrink-0 text-accent transition-colors group-hover:text-mint"
                        />
                      </Link>
                    </li>
                  ))}
                  <li className="flex items-center justify-between gap-4 py-4">
                    <span className="min-w-0">
                      <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-subtle">
                        {String(financeDashboards.length + 1).padStart(2, '0')}
                      </span>
                      <span className="mt-1 block font-display text-base font-bold text-ink-subtle">
                        Next dashboard
                      </span>
                    </span>
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-subtle">
                      In build
                    </span>
                  </li>
                </ol>

                <p className="mt-2 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-subtle">
                  Each entry opens its own case study
                </p>
              </Reveal>
            </div>
          </header>

          <section className="mt-16 border-t border-line/15 pt-12" id="shelf">
            <SectionHeading
              eyebrow="The shelf"
              title="Pick a dashboard to open."
              description="Every card holds a finished build with its own write-up: the brief, the pipeline, the numbers it produced, and what I would do differently."
              action={
                <span className="inline-flex items-center gap-2 rounded-full border border-line/25 bg-chip px-4 py-2 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
                  {String(liveCount).padStart(2, '0')} published
                </span>
              }
            />

            <Stagger className="grid gap-6">
              {financeDashboards.map((dashboard) => {
                const status = dashboardStatusStyles[dashboard.status]

                return (
                <StaggerItem key={dashboard.id}>
                  <article className="group relative overflow-hidden rounded-xl border border-line/20 bg-surface transition-colors duration-300 hover:border-line/45">
                    <div className="grid md:grid-cols-12">
                      <div className="relative overflow-hidden border-b border-line/20 bg-abyss md:col-span-7 md:border-b-0 md:border-r">
                        <img
                          alt={`${dashboard.title} dashboard preview`}
                          className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                          height={1180}
                          src={dashboard.image}
                          width={1824}
                        />
                      </div>

                      <div className="flex flex-col p-6 md:col-span-5 md:p-8">
                        <div className="mb-6 flex items-center justify-between gap-4">
                          <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-subtle">
                            {dashboard.id}
                          </span>
                          <span
                            className={`inline-flex items-center gap-2 rounded-full border bg-chip px-3 py-1 font-mono text-[0.625rem] uppercase tracking-widest ${status.chip}`}
                          >
                            <span
                              aria-hidden="true"
                              className={`h-1.5 w-1.5 rounded-full ${status.dot}`}
                            />
                            {status.label}
                          </span>
                        </div>

                        <div className="mb-4 flex items-center gap-3 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-subtle">
                          <span>{dashboard.year}</span>
                          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-line" />
                          <span>{dashboard.format}</span>
                        </div>

                        <h2 className="mb-3 font-display text-2xl font-bold text-ink">
                          <Link
                            className="transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-accent"
                            to={dashboard.href}
                          >
                            {dashboard.title}
                          </Link>
                        </h2>

                        <p className="mb-6 flex-grow text-sm leading-relaxed text-ink-muted">
                          {dashboard.description}
                        </p>

                        <ul className="mb-7 flex flex-wrap gap-2">
                          {dashboard.tags.map((tag) => (
                            <li
                              className="rounded bg-chip px-3 py-1 font-mono text-[0.625rem] uppercase tracking-wider text-accent"
                              key={tag}
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-auto flex items-center justify-between gap-4 border-t border-line/15 pt-5 font-mono text-[0.625rem] uppercase tracking-[0.2em]">
                          <span className="inline-flex items-center gap-1.5 text-accent">
                            View case study
                            <FiArrowUpRight aria-hidden="true" />
                          </span>
                          <span className="text-ink-subtle">Static preview</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </StaggerItem>
                )
              })}

              <StaggerItem>
                <div className="flex flex-col gap-5 rounded-xl border border-dashed border-line/20 bg-raised p-6 md:flex-row md:items-center md:justify-between md:p-7">
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line/25 bg-chip text-ink-subtle">
                      <FiPlus aria-hidden="true" />
                    </span>
                    <div>
                      <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-subtle">
                        Slot {String(financeDashboards.length + 1).padStart(2, '0')}
                      </span>
                      <p className="mt-1 font-display text-lg font-bold text-ink">
                        The next dashboard lands here.
                      </p>
                    </div>
                  </div>
                  <p className="max-w-md text-sm leading-relaxed text-ink-muted">
                    Every workbook earns its own entry — a new API pull, a new model, the same
                    case-study format.
                  </p>
                  <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-ink-subtle/30 bg-chip px-3 py-1 font-mono text-[0.625rem] uppercase tracking-widest text-ink-subtle">
                    <FiClock aria-hidden="true" />
                    In build
                  </span>
                </div>
              </StaggerItem>
            </Stagger>
          </section>

          <section className="mt-16 border-t border-line/15 pt-12">
            <SectionHeading
              eyebrow="Roadmap"
              title="Beyond dashboards."
              description="The bootcamp work and the quant path feed the next shelf entry. Each of these lands as a published piece when it is finished."
            />
            <Stagger className="grid gap-6 md:grid-cols-3">
              {financePage.items.map((item) => {
                const status = roadmapStatusStyles[item.status]

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

                      <h3 className="mb-3 font-display text-lg font-bold text-ink">{item.title}</h3>
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
                {financePage.note}
              </p>
            </Reveal>
          </section>

          <Reveal className="mt-16 border-t border-line/15 pt-12">
            <h2 className="mb-4 font-display text-2xl font-bold text-ink md:text-3xl">
              {financePage.cta.title}
            </h2>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-ink-muted">
              {financePage.cta.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="inline-flex min-h-12 items-center gap-2 rounded-md bg-accent px-7 font-display text-[0.6875rem] font-bold uppercase tracking-[0.25em] text-abyss transition-colors hover:bg-ink"
                href={`mailto:${contact.email}`}
              >
                <FiMail aria-hidden="true" className="text-sm" />
                {financePage.cta.primary}
              </a>
              <Link
                className="inline-flex min-h-12 items-center gap-2 rounded-md border border-ink-subtle/30 px-7 font-display text-[0.6875rem] font-bold uppercase tracking-[0.25em] text-ink-muted transition-colors hover:border-mint/50 hover:text-mint"
                to="/projects"
              >
                See the protocol work
                <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Finance
