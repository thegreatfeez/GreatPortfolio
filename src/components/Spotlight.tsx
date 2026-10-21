import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'
import { projects, spotlight } from '../data.ts'

function Spotlight() {
  return (
    <section className="border-t border-line/10 px-6 py-16 md:px-12" id="work">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          action={
            <Link
              className="inline-flex min-h-10 items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.25em] text-accent transition-colors hover:text-mint"
              to={spotlight.ctaHref}
            >
              {spotlight.ctaLabel}
              <FiArrowRight aria-hidden="true" />
            </Link>
          }
          description={spotlight.description}
          eyebrow="Shipped"
          title={spotlight.title}
        />

        <div className="grid gap-10 md:grid-cols-3 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard index={index} key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Spotlight
