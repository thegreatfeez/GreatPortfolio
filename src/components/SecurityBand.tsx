import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import { securityPage, securityPractice } from '../data.ts'
import { Reveal } from './Reveal'

const bountyTotal = securityPage.audits.reduce((total, audit) => {
  const amount = Number.parseFloat(audit.reward.replace(/[^0-9.]/g, ''))
  return Number.isNaN(amount) ? total : total + amount
}, 0)

const stats = [
  { label: 'Submissions', value: String(securityPage.audits.length) },
  {
    label: 'Platforms',
    value: String(new Set(securityPage.audits.map((audit) => audit.category)).size),
  },
  { label: 'Bounties earned', value: `$${bountyTotal.toFixed(2)}` },
]

function SecurityBand() {
  return (
    <section
      className="border-t border-line/10 bg-surface px-6 py-20 md:px-12"
      id="security"
    >
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-7">
          <div className="mb-4 flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-line" />
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.3em] text-danger-soft">
              {securityPractice.label}
            </span>
          </div>

          <h2 className="mb-5 max-w-xl font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
            {securityPractice.title}
          </h2>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-ink-muted">
            {securityPractice.description}
          </p>

          <ul className="mb-9 space-y-3">
            {securityPractice.points.map((point) => (
              <li className="flex gap-3 text-sm leading-relaxed text-ink-muted" key={point}>
                <FiCheck aria-hidden="true" className="mt-1 shrink-0 text-mint" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <Link
            className="inline-flex min-h-11 items-center gap-2 rounded-md border border-ink-subtle/30 px-6 font-display text-[0.6875rem] font-bold uppercase tracking-[0.25em] text-ink transition-colors hover:border-mint/50 hover:text-mint"
            to={securityPractice.ctaHref}
          >
            {securityPractice.ctaLabel}
            <FiArrowRight aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal className="md:col-span-5" delay={0.1}>
          <dl className="grid grid-cols-3 gap-4 rounded-xl border border-line/20 bg-raised p-6 md:grid-cols-1 md:gap-0 md:p-0">
            {stats.map((stat) => (
              <div
                className="flex flex-col-reverse md:border-b md:border-line/15 md:px-7 md:py-6 md:last:border-none"
                key={stat.label}
              >
                <dt className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-subtle">
                  {stat.label}
                </dt>
                <dd className="font-display text-2xl font-bold text-ink md:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 px-1 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-subtle">
            Source: public contest and bug bounty submissions
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default SecurityBand
