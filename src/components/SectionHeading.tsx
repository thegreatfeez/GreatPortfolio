import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  action?: ReactNode
}

function SectionHeading({ eyebrow, title, description, action }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <div className="mb-4 flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 bg-line" />
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.3em] text-mint">
            {eyebrow}
          </span>
        </div>
        <h2 className="mb-4 font-display text-2xl font-bold leading-tight tracking-tight text-ink md:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-relaxed text-ink-muted">{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </Reveal>
  )
}

export default SectionHeading
