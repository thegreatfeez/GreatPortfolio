import { learningHeading, learningTracks } from '../data.ts'
import { Stagger, StaggerItem } from './Reveal'
import SectionHeading from './SectionHeading'

function Learning() {
  return (
    <section className="px-6 py-16 md:px-12" id="learning">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          description={learningHeading.description}
          eyebrow={learningHeading.eyebrow}
          title={learningHeading.title}
        />

        <Stagger className="divide-y divide-line/15 border-y border-line/15">
          {learningTracks.map((track) => (
            <StaggerItem key={track.title}>
              <article className="grid gap-4 py-8 md:grid-cols-12 md:items-baseline md:gap-8">
                <div className="md:col-span-3">
                  <span className="font-mono text-[0.6875rem] uppercase tracking-[0.25em] text-mint">
                    {track.horizon}
                  </span>
                </div>

                <div className="md:col-span-4">
                  <h3 className="mb-1 font-display text-lg font-bold text-ink md:text-xl">
                    {track.title}
                  </h3>
                  <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-ink-subtle">
                    {track.provider}
                  </p>
                </div>

                <div className="md:col-span-5">
                  <p className="mb-4 text-sm leading-relaxed text-ink-muted">
                    {track.detail}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {track.tags.map((tag) => (
                      <li
                        className="rounded bg-chip px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-wider text-accent"
                        key={tag}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

export default Learning
