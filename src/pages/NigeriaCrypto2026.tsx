import { motion } from 'framer-motion'
import { FiArrowLeft, FiArrowUpRight, FiImage, FiMail } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import MarqueeBand from '../components/MarqueeBand'
import Navbar from '../components/Navbar'
import { Reveal, Stagger, StaggerItem } from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { contact, financeCaseStudy, financePage } from '../data.ts'

const caseStudy = financeCaseStudy

const tickerItems = Array.from(
  new Set([...caseStudy.stack, 'Static dashboard preview', 'Case study 01']),
)

const tableHeadings = caseStudy.platformTable.headings

function NigeriaCrypto2026() {
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
          <Link
            className="mb-8 inline-flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-subtle transition-colors hover:text-mint"
            to="/finance"
          >
            <FiArrowLeft aria-hidden="true" />
            All dashboards
          </Link>

          <header className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="mb-5 flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-line" />
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.3em] text-mint">
                  {caseStudy.eyebrow}
                </span>
              </div>
              <h1 className="mb-6 font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink md:text-5xl">
                {caseStudy.headline}
                <br />
                <span className="text-accent">{caseStudy.headlineAccent}</span>
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-ink-muted">
                {caseStudy.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="inline-flex min-h-12 items-center gap-2 rounded-md bg-accent px-6 font-display text-[0.6875rem] font-bold uppercase tracking-[0.25em] text-abyss transition-colors hover:bg-ink"
                  href={caseStudy.linkedinUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Open the LinkedIn post
                  <FiArrowUpRight aria-hidden="true" />
                </a>
                <a
                  className="inline-flex min-h-12 items-center gap-2 rounded-md border border-ink-subtle/30 px-6 font-display text-[0.6875rem] font-bold uppercase tracking-[0.25em] text-ink-muted transition-colors hover:border-mint/50 hover:text-mint"
                  href="#dashboard"
                >
                  <FiImage aria-hidden="true" />
                  View the preview
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <Reveal className="rounded-xl border border-line/20 bg-surface p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-subtle">
                    {caseStudy.id}
                  </span>
                  <span className="inline-flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-mint">
                    <motion.span
                      animate={{ opacity: [1, 0.3, 1] }}
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full bg-mint shadow-[0_0_10px_rgba(110,235,223,0.6)]"
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    {caseStudy.statusLabel}
                  </span>
                </div>
                <p className="mt-6 font-display text-2xl font-bold leading-tight text-ink">
                  {caseStudy.title}
                </p>
                <p className="mt-1 text-sm text-ink-muted">{caseStudy.subtitle}</p>
                <dl className="mt-6 space-y-3 border-t border-line/15 pt-5 font-mono text-[0.625rem] uppercase tracking-[0.2em]">
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-ink-subtle">Year</dt>
                    <dd className="text-ink">{caseStudy.year}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-ink-subtle">Format</dt>
                    <dd className="text-ink">Excel · VBA</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-ink-subtle">Records</dt>
                    <dd className="text-ink">293 transactions</dd>
                  </div>
                </dl>
              </Reveal>
            </div>
          </header>

          <Reveal>
            <dl className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line/20 bg-line/20 sm:grid-cols-2 lg:grid-cols-4">
              {caseStudy.meta.map((item) => (
                <div className="bg-surface p-5" key={item.label}>
                  <dt className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-subtle">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-sm text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal className="mt-10" delay={0.05}>
            <figure
              className="overflow-hidden rounded-xl border border-line/25 bg-surface"
              id="dashboard"
            >
              <div className="flex items-center justify-between gap-4 border-b border-line/20 bg-chip/40 px-4 py-3">
                <div aria-hidden="true" className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-line/70" />
                  <span className="h-2 w-2 rounded-full bg-line/50" />
                  <span className="h-2 w-2 rounded-full bg-line/30" />
                </div>
                <span className="truncate font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-subtle">
                  {caseStudy.fileLabel}
                </span>
                <span className="hidden font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-subtle sm:inline">
                  NGN / USD
                </span>
              </div>
              <div className="bg-abyss p-3 md:p-4">
                <img
                  alt={caseStudy.imageAlt}
                  className="w-full rounded-md border border-line/10"
                  height={1180}
                  src={caseStudy.image}
                  width={1824}
                />
              </div>
              <figcaption className="flex flex-col gap-3 border-t border-line/20 px-4 py-4 md:flex-row md:items-center md:justify-between">
                <p className="max-w-xl text-xs leading-relaxed text-ink-subtle">
                  {caseStudy.previewNote}
                </p>
                <a
                  className="inline-flex items-center gap-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-accent transition-colors hover:text-mint"
                  href={caseStudy.linkedinUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  View the post on LinkedIn
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              </figcaption>
            </figure>
          </Reveal>

          <Stagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {caseStudy.metrics.map((metric) => (
              <StaggerItem key={metric.label}>
                <div className="flex h-full flex-col rounded-xl border border-line/20 bg-raised p-6">
                  <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-subtle">
                    {metric.index}
                  </span>
                  <p className="mt-6 font-display text-[1.75rem] font-bold leading-none tracking-tight tabular-nums text-ink">
                    {metric.value}
                  </p>
                  <p className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-mint">
                    {metric.label}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-ink-muted">{metric.note}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <section className="mt-16 border-t border-line/15 pt-12" id="brief">
            <SectionHeading
              eyebrow="01 — Brief"
              title="A retail market that does not look like an exchange order book."
              description={caseStudy.brief.description}
            />
            <Stagger className="grid gap-4 md:grid-cols-3">
              {caseStudy.brief.objectives.map((objective) => (
                <StaggerItem key={objective.index}>
                  <div className="h-full rounded-xl border border-line/20 bg-surface p-7">
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.3em] text-mint">
                      {objective.index}
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold leading-snug text-ink">
                      {objective.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {objective.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </section>

          <section className="mt-16 border-t border-line/15 pt-12" id="pipeline">
            <SectionHeading
              eyebrow="02 — Pipeline"
              title="From an API call to a clickable dashboard."
              description={caseStudy.pipeline.description}
            />
            <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {caseStudy.pipeline.stages.map((stage) => (
                <StaggerItem key={stage.index}>
                  <div className="flex h-full gap-4 rounded-xl border border-line/20 bg-surface p-6">
                    <span className="font-mono text-[0.625rem] tracking-[0.2em] text-mint">
                      {stage.index}
                    </span>
                    <div>
                      <h3 className="font-display text-base font-bold text-ink">
                        {stage.label}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                        {stage.detail}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="mt-4 rounded-xl border border-line/20 bg-raised p-6 md:p-8">
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-subtle">
                The conversion everything runs on
              </span>
              <p className="mt-4 overflow-x-auto font-mono text-sm text-mint md:text-base">
                {caseStudy.pipeline.formula}
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted">
                {caseStudy.pipeline.formulaNote}
              </p>
            </Reveal>
          </section>

          <section className="mt-16 border-t border-line/15 pt-12" id="findings">
            <SectionHeading
              eyebrow="03 — Findings"
              title="What the naira flows actually say."
              description={caseStudy.findings.description}
            />
            <Stagger className="grid gap-4 md:grid-cols-3">
              {caseStudy.findings.items.map((finding) => (
                <StaggerItem key={finding.label}>
                  <div className="relative h-full overflow-hidden rounded-xl border border-line/20 bg-surface p-7">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-6 -top-8 font-display text-[7rem] font-bold leading-none text-ink opacity-[0.03]"
                    >
                      {finding.figure}
                    </span>
                    <p className="relative font-display text-5xl font-bold leading-none tracking-tight tabular-nums text-ink">
                      {finding.figure}
                    </p>
                    <p className="relative mt-4 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-mint">
                      {finding.label}
                    </p>
                    <p className="relative mt-4 text-sm leading-relaxed text-ink-muted">
                      {finding.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </section>

          <section className="mt-16 border-t border-line/15 pt-12" id="platforms">
            <SectionHeading
              eyebrow="04 — Platform economics"
              title="The spread is the product."
              description={caseStudy.platformTable.description}
            />

            <Reveal className="overflow-hidden rounded-xl border border-line/20 bg-surface">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[46rem] border-collapse text-left">
                  <caption className="sr-only">
                    Platform exchange rates, spreads, and fees for Nigerian crypto transactions in
                    2026
                  </caption>
                  <thead>
                    <tr className="border-b border-line/20 bg-chip/40">
                      {tableHeadings.map((heading, index) => (
                        <th
                          className={`px-5 py-5 font-mono text-[0.625rem] font-normal uppercase tracking-[0.2em] text-ink-subtle md:px-7 ${
                            index > 0 ? 'text-right' : ''
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
                    {caseStudy.platformTable.rows.map((row) => (
                      <tr
                        className="transition-colors duration-300 hover:bg-high/50"
                        key={row.platform}
                      >
                        <th
                          className="px-5 py-5 text-left font-display text-sm font-bold text-ink md:px-7"
                          scope="row"
                        >
                          {row.platform}
                        </th>
                        <td className="px-5 py-5 text-right font-mono text-sm tabular-nums text-ink-muted md:px-7">
                          {row.fxRate}
                        </td>
                        <td className="px-5 py-5 text-right font-mono text-sm tabular-nums text-ink-muted md:px-7">
                          {row.exchangeRate}
                        </td>
                        <td className="px-5 py-5 text-right font-mono text-sm tabular-nums text-ink md:px-7">
                          {row.spread}
                        </td>
                        <td className="px-5 py-5 text-right font-mono text-sm tabular-nums text-ink md:px-7">
                          {row.fees}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t border-line/25 bg-chip/30">
                      <th
                        className="px-5 py-5 text-left font-display text-sm font-bold text-ink md:px-7"
                        scope="row"
                      >
                        {caseStudy.platformTable.total.platform}
                      </th>
                      <td className="px-5 py-5 text-right font-mono text-sm tabular-nums text-mint md:px-7">
                        {caseStudy.platformTable.total.fxRate}
                      </td>
                      <td className="px-5 py-5 text-right font-mono text-sm tabular-nums text-mint md:px-7">
                        {caseStudy.platformTable.total.exchangeRate}
                      </td>
                      <td className="px-5 py-5 text-right font-mono text-sm tabular-nums text-mint md:px-7">
                        {caseStudy.platformTable.total.spread}
                      </td>
                      <td className="px-5 py-5 text-right font-mono text-sm tabular-nums text-mint md:px-7">
                        {caseStudy.platformTable.total.fees}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </Reveal>

            <Reveal className="mt-5">
              <p className="font-mono text-[0.625rem] uppercase leading-relaxed tracking-[0.2em] text-ink-subtle">
                {caseStudy.platformTable.note}
              </p>
            </Reveal>
          </section>

          <section className="mt-16 border-t border-line/15 pt-12" id="build-notes">
            <SectionHeading
              eyebrow="05 — Build notes"
              title="Design decisions that survived the rebuild."
              description={caseStudy.buildNotes.description}
            />
            <div className="grid gap-10 md:grid-cols-2 md:gap-12">
              {caseStudy.buildNotes.notes.map((note, index) => (
                <Reveal delay={index * 0.08} key={note.title}>
                  <h3 className="mb-5 font-display text-xl font-bold text-ink">{note.title}</h3>
                  <ul className="space-y-4">
                    {note.points.map((point) => (
                      <li className="flex gap-3 text-sm leading-relaxed text-ink-muted" key={point}>
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-12 rounded-xl border border-line/20 bg-raised p-7 md:p-9">
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.3em] text-mint">
                Lesson
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-ink">
                {caseStudy.lesson.title}
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted md:text-base">
                {caseStudy.lesson.body}
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
              <a
                className="inline-flex min-h-12 items-center gap-2 rounded-md border border-ink-subtle/30 px-7 font-display text-[0.6875rem] font-bold uppercase tracking-[0.25em] text-ink-muted transition-colors hover:border-mint/50 hover:text-mint"
                href={caseStudy.linkedinUrl}
                rel="noreferrer"
                target="_blank"
              >
                Open LinkedIn post
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default NigeriaCrypto2026
