import { FiCpu, FiShare2 } from 'react-icons/fi'
import { MdShield } from 'react-icons/md'
import { audits } from '../data.ts'

function Bento() {
  return (
    <section className="bg-[#101320] px-6 py-14 md:px-12" id="audits">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
        <article className="relative col-span-2 overflow-hidden rounded-2xl border border-[#6e7494]/10 bg-[#14192a] p-8">
          <div className="mb-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[#afb9ce]">
            <span className="h-2 w-2 rounded-full bg-[#6debdf]" />
            {audits.statusLabel}
          </div>
          <div className="mb-4 text-[#6debdf]">
            <MdShield className="text-3xl" />
          </div>
          <h3 className="mb-4 font-['Space_Grotesk'] text-2xl font-bold">
            {audits.title}
          </h3>
          <p className="text-sm leading-relaxed text-[#a3a9cc]">
            {audits.description}
          </p>
        </article>
        <article className="flex flex-col justify-between rounded-2xl bg-[#191e35] p-8">
          <FiShare2 className="text-3xl text-[#bdc7dc]" />
          <div>
            <h4 className="mb-2 font-['Space_Grotesk'] text-xl font-bold">
              {audits.crossChain.title}
            </h4>
            <p className="text-xs leading-relaxed text-[#a3a9cc]">
              {audits.crossChain.description}
            </p>
          </div>
        </article>
        <article className="flex flex-col justify-between rounded-2xl border border-[#6e7494]/10 bg-gradient-to-br from-[#191e35] to-[#14192a] p-8">
          <FiCpu className="text-3xl text-[#c4fff7]" />
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
        </article>
      </div>
    </section>
  )
}

export default Bento
