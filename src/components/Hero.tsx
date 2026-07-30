import { Link } from 'react-router-dom'
import { motion, type Variants } from 'framer-motion'
import { FiTerminal } from 'react-icons/fi'
import { FaShieldHeart } from 'react-icons/fa6'
import { capabilities, metrics, site } from '../data.ts'

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-14 pt-6 md:px-12 md:pb-20 md:pt-8">
      <motion.div
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0], scale: [1, 1.08, 0.96, 1] }}
        className="pointer-events-none absolute right-0 top-20 -z-10 h-[480px] w-[480px] rounded-full bg-[#bdc7dc]/10 blur-[120px]"
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        animate="show"
        className="grid gap-12 md:grid-cols-12"
        initial="hidden"
        variants={container}
      >
        <div className="md:col-span-8">
          <motion.div className="mb-6 flex items-center gap-3" variants={item}>
            <span className="h-px w-12 bg-[#6e7494]/40" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#939eb4]">
              {site.role}
            </span>
          </motion.div>
          <motion.h1
            className="mb-6 max-w-3xl font-['Space_Grotesk'] text-4xl font-bold leading-tight text-[#e1e4ff] md:text-[3.5rem]"
            variants={item}
          >
            {site.headline}{' '}
            <span className="text-[#939eb4]">{site.headlineAccent}</span>
          </motion.h1>
          <motion.p
            className="mb-8 max-w-2xl text-lg leading-relaxed text-[#a3a9cc]"
            variants={item}
          >
            {site.summary}
          </motion.p>
          <motion.div className="flex flex-wrap items-center gap-6" variants={item}>
            <Link
              className="rounded-md bg-[#bdc7dc] px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] text-[#374152] shadow-lg shadow-[#bdc7dc]/10"
              to="/projects"
            >
              {site.ctaPrimary}
            </Link>
          </motion.div>
        </div>

        <aside className="flex flex-col gap-6 md:col-span-4">
          <motion.div
            className="rounded-xl border border-[#6e7494]/10 bg-[#101320] p-6"
            variants={item}
          >
            <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#6e7494]">
              <FiTerminal className="text-[#6debdf]" />
              Capabilities
            </div>
            <ul className="space-y-3 font-['Roboto_Mono'] text-[13px] text-[#a3a9cc]">
              {capabilities.map((capability) => (
                <li
                  className="flex items-center justify-between border-b border-[#6e7494]/10 pb-2"
                  key={capability.label}
                >
                  <span>{capability.label}</span>
                  <span className="text-[#6debdf]">{capability.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="rounded-xl border border-[#6e7494]/10 bg-[#101320] p-6"
            variants={item}
          >
            <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#6e7494]">
              <FaShieldHeart className="text-[#ee7d77]" />
              Vulnerability Metrics
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-['Space_Grotesk'] text-4xl font-bold text-[#e1e4ff]">
                {metrics.assetsSecured}
              </span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#6e7494]">
                {metrics.assetsSecuredLabel}
              </span>
            </div>
          </motion.div>
        </aside>
      </motion.div>
    </section>
  )
}

export default Hero
