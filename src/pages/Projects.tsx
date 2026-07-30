import { motion } from 'framer-motion'
import {
  MdAccountBalance,
  MdArrowOutward,
  MdCode,
  MdHub,
  MdSecurity,
} from 'react-icons/md'
import Footer from '../components/Footer'
import MarqueeBand from '../components/MarqueeBand'
import Navbar from '../components/Navbar'
import { projectsPage } from '../data.ts'

const tickerItems = Array.from(
  new Set(projectsPage.projects.flatMap((project) => project.tags)),
)

const projectIconMap = {
  code: MdCode,
  bank: MdAccountBalance,
  security: MdSecurity,
  hub: MdHub,
} as const

const statusToneStyles = {
  primary: {
    dot: 'bg-[#bdc7dc]',
    text: 'text-[#a3a9cc]',
    glow: 'shadow-[0_0_8px_rgba(189,199,220,0.4)]',
  },
  tertiary: {
    dot: 'bg-[#6debdf]',
    text: 'text-[#a3a9cc]',
    glow: 'shadow-[0_0_8px_rgba(110,235,223,0.5)]',
  },
  error: {
    dot: 'bg-[#bb5551]',
    text: 'text-[#a3a9cc]',
    glow: 'shadow-[0_0_8px_rgba(187,85,81,0.5)]',
  },
} as const

function Projects() {
  const projects = projectsPage.projects

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0c0e17] text-[#e1e4ff]">
      <motion.div
        animate={{ x: [0, -25, 20, 0], y: [0, 20, -15, 0], scale: [1, 1.1, 0.95, 1] }}
        className="pointer-events-none absolute left-0 top-24 -z-10 h-[420px] w-[420px] rounded-full bg-[#6debdf]/10 blur-[120px]"
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <Navbar />
      <main className="pt-20">
        <MarqueeBand items={tickerItems} />
        <div className="mx-auto max-w-7xl px-8 pb-24 pt-12">
          <header className="mb-20 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="mb-8 font-['Space_Grotesk'] text-5xl font-bold leading-none tracking-tight text-[#e1e4ff] md:text-7xl">
              {projectsPage.title}
              <br />
              {projectsPage.titleAccent}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[#a3a9cc] md:text-xl">
              {projectsPage.description}
            </p>
          </div>
        </header>

        <section className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = projectIconMap[project.icon]
            const tone = statusToneStyles[project.status.tone]

            return (
              <motion.a
                className="group relative flex flex-col overflow-hidden rounded-lg bg-[#101320] p-8 transition-colors duration-500 hover:bg-[#191e35]"
                href={project.liveLink}
                initial={{ opacity: 0, y: 24 }}
                key={project.id}
                rel="noreferrer"
                target="_blank"
                transition={{ duration: 0.5, delay: (index % 2) * 0.1, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -6 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div
                  className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-15 transition-opacity duration-500 group-hover:opacity-25"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0c0e17] via-transparent to-[#0c0e17]/80" />
                <div className="pointer-events-none absolute right-0 top-0 p-4 opacity-10 transition-opacity group-hover:opacity-20">
                  <Icon className="text-8xl text-[#e1e4ff]" />
                </div>
                <div className="mb-12 flex items-center justify-between">
                  <span className="font-['Roboto_Mono'] text-[0.65rem] uppercase tracking-[0.3em] text-[#6e7494]">
                    ID: {project.id}
                  </span>
                  <div className="flex items-center space-x-2">
                    <motion.div
                      animate={{ opacity: [1, 0.35, 1] }}
                      className={`h-2 w-2 rounded-full ${tone.dot} ${tone.glow}`}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <span
                      className={`text-[0.6875rem] uppercase tracking-wider ${tone.text}`}
                    >
                      {project.status.label}
                    </span>
                  </div>
                </div>
                <h3 className="mb-4 font-['Space_Grotesk'] text-2xl font-bold text-[#e1e4ff] transition-colors group-hover:text-[#bdc7dc]">
                  {project.name}
                </h3>
                <p className="mb-8 flex-grow text-sm leading-relaxed text-[#a3a9cc]">
                  {project.description}
                </p>
                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      className="rounded bg-[#1e2440] px-3 py-1 font-['Roboto_Mono'] text-[0.625rem] uppercase tracking-wider text-[#bdc7dc]"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center font-['Space_Grotesk'] text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-[#bdc7dc] transition-all group-hover:underline group-hover:underline-offset-8">
                  View Live Project
                  <MdArrowOutward className="ml-2 text-sm" />
                </div>
              </motion.a>
            )
          })}
        </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Projects
