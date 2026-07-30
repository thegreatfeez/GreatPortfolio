import { motion } from 'framer-motion'
import type { Project } from '../data.ts'

type ProjectCardProps = {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      className="group flex flex-col gap-3"
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-[#1e2440]">
        <img
          className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
          src={project.image}
          alt={project.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e17] to-transparent opacity-70" />
        <div className="absolute bottom-4 left-4 flex gap-2">
          {project.tags.map((tag) => (
            <span
              className="rounded-full bg-[#1e2440]/80 px-3 py-1 text-[10px] font-['Roboto_Mono'] text-[#7cfaed]"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <h5 className="font-['Space_Grotesk'] text-xl font-bold transition-colors group-hover:text-[#bdc7dc]">
        {project.title}
      </h5>
      <p className="text-sm leading-relaxed text-[#a3a9cc]">
        {project.description}
      </p>
    </motion.article>
  )
}

export default ProjectCard
