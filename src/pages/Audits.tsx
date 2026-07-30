import {
  MdDiamond,
  MdGridView,
  MdLock,
  MdShield,
  MdTerminal,
  MdToken,
  MdVerifiedUser,
} from 'react-icons/md'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { auditsPage } from '../data.ts'

const auditIconMap = {
  token: MdToken,
  diamond: MdDiamond,
  lock: MdLock,
  grid: MdGridView,
} as const

const highlightIconMap = {
  verified: MdVerifiedUser,
  terminal: MdTerminal,
  shield: MdShield,
} as const

const complexityStyles = {
  high: 'text-[#bb5551] border-[#bb5551]/20',
  medium: 'text-[#bdc7dc] border-[#bdc7dc]/20',
  low: 'text-[#6debdf] border-[#6debdf]/20',
} as const

function Audits() {
  const audits = auditsPage.audits

  return (
    <div className="min-h-screen bg-[#0c0e17] text-[#e1e4ff]">
      <Navbar />
      <main className="mx-auto min-h-screen max-w-7xl px-8 pb-20 pt-32">
        <header className="mb-12 grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="mb-6 font-['Space_Grotesk'] text-5xl font-bold leading-[1.1] tracking-tight text-[#e1e4ff] md:text-7xl">
              {auditsPage.title}
              <br />
              <span className="text-[#bdc7dc]/60">
                {auditsPage.titleAccent}
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[#a3a9cc]">
              {auditsPage.description}
            </p>
          </div>
        </header>

        <section className="overflow-hidden rounded-xl bg-[#101320] shadow-2xl shadow-[#bdc7dc]/5 ring-1 ring-[#404664]/10">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-[#404664]/10 bg-[#1e2440]/30">
                  {auditsPage.tableHeadings.map((heading, index) => (
                    <th
                      className={`px-8 py-5 text-[0.6875rem] uppercase tracking-[0.15em] text-[#6e7494] ${
                        index === auditsPage.tableHeadings.length - 1
                          ? 'text-right'
                          : ''
                      }`}
                      key={heading}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#404664]/5">
                {audits.length === 0 && (
                  <tr>
                    <td
                      className="px-8 py-10 text-sm text-[#a3a9cc]"
                      colSpan={auditsPage.tableHeadings.length}
                    >
                      No audits recorded yet.
                    </td>
                  </tr>
                )}
                {audits.map((audit, index) => {
                  const Icon = auditIconMap[audit.icon]
                  const complexityLabel =
                    audit.complexity.charAt(0).toUpperCase() +
                    audit.complexity.slice(1)
                  return (
                    <tr
                      className="group transition-colors duration-300 hover:bg-[#191e35]/40"
                      key={`${audit.name}-${index}`}
                    >
                      <td className="px-8 py-8">
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#404664]/20 bg-[#1e2440]">
                            {audit.iconUrl ? (
                              <img
                                className="h-6 w-6 object-contain"
                                src={audit.iconUrl}
                                alt={`${audit.name} icon`}
                              />
                            ) : (
                              <Icon className="text-[#bdc7dc]" />
                            )}
                          </div>
                          <div>
                            <div className="font-['Space_Grotesk'] font-bold text-[#e1e4ff]">
                              {audit.name}
                            </div>
                            <div className="font-['Roboto_Mono'] text-[0.625rem] text-[#404664]">
                              {audit.category}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-8">
                        <span
                          className={`flex w-fit items-center gap-2 rounded-full border bg-[#1e2440] px-3 py-1 text-[0.625rem] uppercase tracking-widest ${complexityStyles[audit.complexity]}`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              audit.complexity === 'high'
                                ? 'bg-[#bb5551]'
                                : audit.complexity === 'medium'
                                  ? 'bg-[#bdc7dc]'
                                  : 'bg-[#6debdf]'
                            }`}
                          />
                          {complexityLabel}
                        </span>
                      </td>
                      <td className="px-8 py-8">
                        <p className="max-w-xs text-sm leading-relaxed text-[#a3a9cc]">
                          {audit.findings}
                        </p>
                      </td>
                      <td className="px-8 py-8">
                        <span className="font-['Roboto_Mono'] text-sm font-bold text-[#6debdf]">
                          {audit.reward}
                        </span>
                      </td>
                      <td className="px-8 py-8 text-right">
                        {audit.actionUrl ? (
                          <a
                            className="inline-flex items-center gap-2 text-[#bdc7dc] transition-colors hover:text-[#e1e4ff]"
                            href={audit.actionUrl}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <span className="border-b border-[#bdc7dc]/20 pb-0.5 text-[0.6875rem] uppercase tracking-widest transition-all">
                              {audit.actionLabel}
                            </span>
                          </a>
                        ) : (
                          <span className="text-[0.6875rem] uppercase tracking-widest text-[#6e7494]">
                            No report
                          </span>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-24 grid gap-12 md:grid-cols-3">
          {auditsPage.highlights.map((highlight) => {
            const Icon = highlightIconMap[highlight.icon]
            return (
              <div className="space-y-6" key={highlight.title}>
                <div className="text-[#3d4759]">
                  <Icon className="text-4xl" />
                </div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold">
                  {highlight.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#a3a9cc]">
                  {highlight.description}
                </p>
              </div>
            )
          })}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Audits
