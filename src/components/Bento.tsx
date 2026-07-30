import { motion } from 'framer-motion'
import { FiCpu, FiShare2 } from 'react-icons/fi'
import { MdShield } from 'react-icons/md'
import { audits } from '../data.ts'

function Bento() {
  return (
    <section className="bg-[#101320] px-6 py-14 md:px-12" id="audits">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
        <motion.article
          className="relative col-span-2 overflow-hidden rounded-2xl border border-[#6e7494]/10 bg-[#14192a] p-8"
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -4 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="mb-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[#afb9ce]">
            <motion.span
              animate={{ opacity: [1, 0.35, 1] }}
              className="h-2 w-2 rounded-full bg-[#6debdf]"
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            {audits.statusLabel}
          </div>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            className="mb-4 text-[#6debdf]"
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <MdShield className="text-3xl" />
          </motion.div>
          <h3 className="mb-4 font-['Space_Grotesk'] text-2xl font-bold">
            {audits.title}
          </h3>
          <p className="text-sm leading-relaxed text-[#a3a9cc]">
            {audits.description}
          </p>
        </motion.article>
        <motion.article
          className="flex flex-col justify-between rounded-2xl bg-[#191e35] p-8"
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -4 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          >
            <FiShare2 className="text-3xl text-[#bdc7dc]" />
          </motion.div>
          <div>
            <h4 className="mb-2 font-['Space_Grotesk'] text-xl font-bold">
              {audits.crossChain.title}
            </h4>
            <p className="text-xs leading-relaxed text-[#a3a9cc]">
              {audits.crossChain.description}
            </p>
          </div>
        </motion.article>
        <motion.article
          className="flex flex-col justify-between rounded-2xl border border-[#6e7494]/10 bg-gradient-to-br from-[#191e35] to-[#14192a] p-8"
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -4 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          >
            <FiCpu className="text-3xl text-[#c4fff7]" />
          </motion.div>
          <div>
            <h4 className="mb-4 font-['Space_Grotesk'] text-xl font-bold">
              {audits.aiWorkflow.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {audits.aiWorkflow.items.map((item) => (
                <span
                  className="rounded-full bg-[#1e2440]/80 px-3 py-1 text-[10px] font-['Roboto_Mono'] uppercase tracking-wider text-[#a3a9cc]"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}

export default Bento
