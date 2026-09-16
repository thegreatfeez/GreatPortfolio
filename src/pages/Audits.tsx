import { motion } from 'framer-motion'
import {
  MdDiamond,
  MdGridView,
  MdLock,
  MdShield,
  MdTerminal,
  MdToken,
  MdVerifiedUser,
} from 'react-icons/md'
import type { IconType } from 'react-icons'
import Footer from '../components/Footer'
import MarqueeBand from '../components/MarqueeBand'
import Navbar from '../components/Navbar'
import { Reveal } from '../components/Reveal'
import { auditsPage } from '../data.ts'
import { auditStats } from '../lib/auditStats.ts'

const tickerItems = [
  ...new Set(auditsPage.audits.map((audit) => audit.category)),
  ...auditsPage.highlights.map((highlight) => highlight.title),
]

const auditIconMap: Record<string, IconType> = {
  token: MdToken,
  diamond: MdDiamond,
  lock: MdLock,
  grid: MdGridView,
}

const highlightIconMap: Record<string, IconType> = {
  verified: MdVerifiedUser,
  terminal: MdTerminal,
  shield: MdShield,
}

const complexityStyles = {
  high: 'text-danger-soft border-danger-soft/25',
  medium: 'text-accent border-accent/25',
  low: 'text-mint border-mint/25',
} as const

const complexityDotStyles = {
  high: 'bg-danger-soft',
  medium: 'bg-accent',
  low: 'bg-mint',
} as const

function Audits() {
  const audits = auditsPage.audits

  return (
    <div className="relative min-h-screen overflow-hidden bg-abyss text-ink" id="top">
      <motion.div
        animate={{ x: [0, 25, -20, 0], y: [0, -15, 20, 0], scale: [1, 1.08, 0.94, 1] }}
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-24 -z-10 h-[420px] w-[420px] rounded-full bg-danger/[0.08] blur-[120px]"
        transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
      />
      <Navbar />
      <main className="pt-20">
        <MarqueeBand items={tickerItems} />

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-14 md:px-12">
          <header className="mb-14 grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="mb-5 flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-line" />
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.3em] text-danger-soft">
                  {auditsPage.eyebrow}
                </span>
              </div>
              <h1 className="mb-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink md:text-6xl">
                {auditsPage.title}
                <br />
                <span className="text-accent">{auditsPage.titleAccent}</span>
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
                {auditsPage.description}
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-mint lg:col-span-4 lg:justify-end">
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-mint shadow-[0_0_10px_rgba(110,235,223,0.6)]"
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />
              {auditsPage.statusLabel}
            </div>
          </header>

          <Reveal className="mb-10">
            <h2 className="sr-only">{auditsPage.summaryLabel}</h2>
            <dl className="grid gap-6 border-y border-line/15 py-7 sm:grid-cols-3 sm:gap-4">
              {auditStats.map((stat) => (
                <div className="flex flex-col-reverse" key={stat.label}>
                  <dt className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-subtle">
                    {stat.label}
                  </dt>
                  <dd className="font-display text-3xl font-bold text-ink">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal className="overflow-hidden rounded-xl border border-line/20 bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[54rem] border-collapse text-left">
                <caption className="sr-only">
                  Audit contest submissions, findings, and rewards
                </caption>
                <thead>
                  <tr className="border-b border-line/20 bg-chip/40">
                    {auditsPage.tableHeadings.map((heading, index) => (
                      <th
                        className={`px-6 py-5 font-mono text-[0.625rem] font-normal uppercase tracking-[0.2em] text-ink-subtle md:px-8 ${
                          index === auditsPage.tableHeadings.length - 1 ? 'text-right' : ''
                        }`}
                        key={heading}
                        scope="col"
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/15">
                  {audits.length === 0 && (
                    <tr>
                      <td
                        className="px-8 py-10 text-sm text-ink-muted"
                        colSpan={auditsPage.tableHeadings.length}
                      >
                        No audits logged yet — the next contest submission lands here.
                      </td>
                    </tr>
                  )}
                  {audits.map((audit, index) => {
                    const Icon = auditIconMap[audit.icon]
                    const complexityLabel =
                      audit.complexity.charAt(0).toUpperCase() + audit.complexity.slice(1)

                    return (
                      <motion.tr
                        className="transition-colors duration-300 hover:bg-high/50"
                        initial={{ opacity: 0, y: 16 }}
                        key={`${audit.name}-${index}`}
                        transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                      >
                        <th className="px-6 py-7 text-left font-normal md:px-8" scope="row">
                          <div className="flex items-center gap-4">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line/25 bg-chip">
                              {audit.iconUrl ? (
                                <img
                                  alt=""
                                  className="h-6 w-6 object-contain"
                                  height={24}
                                  src={audit.iconUrl}
                                  width={24}
                                />
                              ) : (
                                <Icon aria-hidden="true" className="text-accent" />
                              )}
                            </span>
                            <span>
                              <span className="block font-display font-bold text-ink">
                                {audit.name}
                              </span>
                              <span className="block font-mono text-[0.625rem] text-ink-subtle">
                                {audit.category}
                              </span>
                            </span>
                          </div>
                        </th>

                        <td className="px-6 py-7 md:px-8">
                          <span
                            className={`inline-flex items-center gap-2 rounded-full border bg-chip px-3 py-1 font-mono text-[0.625rem] uppercase tracking-widest ${
                              complexityStyles[audit.complexity]
                            }`}
                          >
                            <span
                              aria-hidden="true"
                              className={`h-1.5 w-1.5 rounded-full ${
                                complexityDotStyles[audit.complexity]
                              }`}
                            />
                            {complexityLabel}
                          </span>
                        </td>

                        <td className="px-6 py-7 md:px-8">
                          <p className="max-w-xs text-sm leading-relaxed text-ink-muted">
                            {audit.findings}
                          </p>
                        </td>

                        <td className="px-6 py-7 md:px-8">
                          <span className="font-mono text-sm font-bold text-mint">
                            {audit.reward}
                          </span>
                        </td>

                        <td className="px-6 py-7 text-right md:px-8">
                          {audit.actionUrl ? (
                            <a
                              className="inline-flex min-h-10 items-center border-b border-accent/30 pb-0.5 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-accent transition-colors hover:border-mint hover:text-mint"
                              href={audit.actionUrl}
                              rel="noreferrer"
                              target="_blank"
                            >
                              {audit.actionLabel}
                            </a>
                          ) : (
                            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-ink-subtle">
                              No report
                            </span>
                          )}
                        </td>
                      </motion.tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal className="mt-6">
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-subtle">
              This log grows after every contest round — new submissions are added as soon
              as a round closes.
            </p>
          </Reveal>

          <section className="mt-20 grid gap-10 border-t border-line/15 pt-14 md:grid-cols-3 md:gap-12">
            {auditsPage.highlights.map((highlight, index) => {
              const Icon = highlightIconMap[highlight.icon]

              return (
                <Reveal delay={index * 0.08} key={highlight.title}>
                  <Icon aria-hidden="true" className="mb-5 text-2xl text-mint" />
                  <h2 className="mb-3 font-display text-lg font-bold text-ink">
                    {highlight.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-ink-muted">
                    {highlight.description}
                  </p>
                </Reveal>
              )
            })}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Audits
