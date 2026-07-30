import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import ProjectCard from './ProjectCard'
import { projects, spotlight } from '../data.ts'

function Spotlight() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-12" id="projects">
      <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2 className="mb-4 font-['Space_Grotesk'] text-3xl font-bold md:text-4xl">
            {spotlight.title}
          </h2>
          <p className="text-[#a3a9cc]">
            {spotlight.description}
          </p>
        </div>
        <div className="flex gap-3">
          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-[#6e7494]/30 text-[#e1e4ff]"
            type="button"
            aria-label="Previous"
          >
            <FiArrowLeft />
          </button>
          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-[#6e7494]/30 text-[#e1e4ff]"
            type="button"
            aria-label="Next"
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Spotlight
