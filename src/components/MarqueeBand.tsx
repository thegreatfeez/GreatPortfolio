import { motion } from 'framer-motion'

type MarqueeBandProps = {
  items: string[]
  duration?: number
}

function MarqueeGroup({ items, hidden }: { items: string[]; hidden?: boolean }) {
  return (
    <div aria-hidden={hidden} className="flex shrink-0 items-center gap-3 pr-3">
      {items.map((item) => (
        <span className="flex items-center gap-3" key={item}>
          <span className="font-['Roboto_Mono'] text-xs uppercase tracking-[0.3em] text-[#6e7494]">
            {item}
          </span>
          <span className="h-1 w-1 rounded-full bg-[#6debdf]" />
        </span>
      ))}
    </div>
  )
}

function MarqueeBand({ items, duration = 24 }: MarqueeBandProps) {
  return (
    <div className="overflow-hidden border-y border-[#6e7494]/10 bg-[#101320] py-3">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        className="flex w-max"
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        <MarqueeGroup items={items} />
        <MarqueeGroup hidden items={items} />
      </motion.div>
    </div>
  )
}

export default MarqueeBand
