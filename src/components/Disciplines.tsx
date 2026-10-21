import { FiArrowRight, FiCode, FiCpu, FiTrendingUp } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import { Link } from 'react-router-dom'
import { disciplines, disciplinesHeading } from '../data.ts'
import { Stagger, StaggerItem } from './Reveal'
import SectionHeading from './SectionHeading'

const disciplineIconMap: Record<string, IconType> = {
  contract: FiCode,
  cpu: FiCpu,
  chart: FiTrendingUp,
}

function Disciplines() {
  return (
    <section className="border-t border-line/10 bg-surface px-6 py-16 md:px-12" id="focus">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          description={disciplinesHeading.description}
          eyebrow={disciplinesHeading.eyebrow}
          title={disciplinesHeading.title}
        />

        <Stagger className="grid gap-6 md:grid-cols-3">
          {disciplines.map((discipline) => {
            const Icon = disciplineIconMap[discipline.icon]

            return (
              <StaggerItem key={discipline.id}>
                <article className="flex h-full flex-col rounded-xl border border-line/20 bg-raised p-7 transition-colors duration-300 hover:border-line/40">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-mono text-[0.6875rem] tracking-[0.3em] text-ink-subtle">
                      {discipline.index}
                    </span>
                    <Icon aria-hidden="true" className="text-xl text-mint" />
                  </div>

                  <span className="mb-2 font-mono text-[0.625rem] uppercase tracking-[0.25em] text-ink-subtle">
                    {discipline.kicker}
                  </span>
                  <h3 className="mb-4 font-display text-xl font-bold text-ink">
                    {discipline.title}
                  </h3>
                  <p className="mb-7 flex-grow text-sm leading-relaxed text-ink-muted">
                    {discipline.description}
                  </p>

                  <ul className="mb-6 flex flex-wrap gap-2">
                    {discipline.stack.map((item) => (
                      <li
                        className="rounded-full bg-chip px-3 py-1 font-mono text-[0.625rem] uppercase tracking-wider text-accent"
                        key={item}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between gap-4 border-t border-line/15 pt-5">
                    <span className="flex items-center gap-2">
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 rounded-full ${
                          discipline.statusTone === 'active' ? 'bg-mint' : 'bg-accent'
                        }`}
                      />
                      <span className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-ink-subtle">
                        {discipline.status}
                      </span>
                    </span>
                    <Link
                      className="inline-flex min-h-10 items-center gap-1.5 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-accent transition-colors hover:text-mint"
                      to={discipline.pageHref}
                    >
                      {discipline.pageLabel}
                      <FiArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}

export default Disciplines
