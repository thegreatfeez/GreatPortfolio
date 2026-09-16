import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import type { Project } from '../data.ts'

type ProjectCardProps = {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      className="group relative flex flex-col"
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="relative mb-5 aspect-video overflow-hidden rounded-xl bg-chip">
        <img
          alt={`${project.title} preview`}
          className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
          height={540}
          loading="lazy"
          src={project.image}
          width={960}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/20 to-transparent"
        />
        <ul className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              className="rounded-full bg-abyss/70 px-3 py-1 font-mono text-[0.625rem] text-mint backdrop-blur-sm"
              key={tag}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <h3 className="mb-2 font-display text-lg font-bold text-ink">
        <a
          className="after:absolute after:inset-0 after:content-[''] hover:text-accent"
          href={project.liveLink}
          rel="noreferrer"
          target="_blank"
        >
          {project.title}
        </a>
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-ink-muted">{project.description}</p>

      <div className="mt-auto flex items-center gap-5 font-mono text-[0.625rem] uppercase tracking-[0.2em]">
        <span className="inline-flex items-center gap-1.5 text-accent">
          Live demo
          <FiArrowUpRight aria-hidden="true" />
        </span>
        <a
          className="relative z-10 text-ink-subtle transition-colors hover:text-mint"
          href={project.codeLink}
          rel="noreferrer"
          target="_blank"
        >
          Source
        </a>
      </div>
    </motion.article>
  )
}

export default ProjectCard
