import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiMapPin } from 'react-icons/fi'
import { contact, disciplines, site } from '../data.ts'
import { Stagger, StaggerItem } from './Reveal'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0], scale: [1, 1.08, 0.96, 1] }}
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-10 -z-10 h-[460px] w-[460px] rounded-full bg-accent/[0.07] blur-[120px]"
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <Stagger className="mx-auto grid max-w-7xl gap-14 px-6 pb-16 pt-14 md:grid-cols-12 md:px-12 md:pb-24 md:pt-20">
        <StaggerItem className="md:col-span-7">
          <div className="mb-6 flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-10 bg-line" />
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.3em] text-ink-subtle">
              {site.role}
            </span>
          </div>

          <h1 className="mb-6 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink md:text-[3.5rem]">
            {site.headline} <span className="text-accent">{site.headlineAccent}</span>
          </h1>

          <p className="mb-9 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            {site.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              className="inline-flex min-h-12 items-center gap-2 rounded-md bg-accent px-7 font-display text-[0.6875rem] font-bold uppercase tracking-[0.25em] text-abyss transition-colors hover:bg-ink"
              to="/projects"
            >
              {site.ctaPrimary}
              <FiArrowUpRight aria-hidden="true" className="text-sm" />
            </Link>
            <a
              className="inline-flex min-h-12 items-center rounded-md border border-ink-subtle/30 px-7 font-display text-[0.6875rem] font-bold uppercase tracking-[0.25em] text-ink-muted transition-colors hover:border-mint/50 hover:text-mint"
              href={`mailto:${contact.email}`}
            >
              {site.ctaSecondary}
            </a>
          </div>

          <p className="mt-8 flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-ink-subtle">
            <FiMapPin aria-hidden="true" className="text-mint" />
            Lagos, Nigeria · Remote-friendly
          </p>
        </StaggerItem>

        <StaggerItem className="md:col-span-5">
          <div className="rounded-xl border border-line/20 bg-surface p-6 md:p-7">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.3em] text-ink-subtle">
                Current focus
              </span>
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-mint shadow-[0_0_10px_rgba(110,235,223,0.6)]"
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            <ul className="space-y-5">
              {disciplines.map((discipline) => (
                <li
                  className="border-b border-line/15 pb-5 last:border-none last:pb-0"
                  key={discipline.id}
                >
                  <div className="mb-1.5 flex items-baseline justify-between gap-4">
                    <span className="font-display text-sm font-bold text-ink">
                      {discipline.title}
                    </span>
                    <span
                      className={`shrink-0 font-mono text-[0.625rem] uppercase tracking-[0.2em] ${
                        discipline.statusTone === 'active' ? 'text-mint' : 'text-accent'
                      }`}
                    >
                      {discipline.status}
                    </span>
                  </div>
                  <p className="text-[0.8125rem] leading-relaxed text-ink-subtle">
                    {discipline.stack.slice(0, 4).join(' · ')}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </StaggerItem>
      </Stagger>
    </section>
  )
}

export default Hero
