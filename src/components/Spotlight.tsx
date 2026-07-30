import ProjectCard from './ProjectCard'
import { projects, spotlight } from '../data.ts'

function Spotlight() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14 md:px-12" id="projects">
      <div className="mb-8 max-w-xl">
        <h2 className="mb-4 font-['Space_Grotesk'] text-3xl font-bold md:text-4xl">
          {spotlight.title}
        </h2>
        <p className="text-[#a3a9cc]">
          {spotlight.description}
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard index={index} key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Spotlight
