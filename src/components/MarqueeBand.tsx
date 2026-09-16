import { motion } from 'framer-motion'

type MarqueeBandProps = {
  items: string[]
  duration?: number
}

function MarqueeGroup({ items }: { items: string[] }) {
  return (
    <div className="flex shrink-0 items-center gap-3 pr-3">
      {items.map((item) => (
        <span className="flex items-center gap-3" key={item}>
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.3em] text-ink-subtle">
            {item}
          </span>
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-mint" />
        </span>
      ))}
    </div>
  )
}

function MarqueeBand({ items, duration = 28 }: MarqueeBandProps) {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y border-line/15 bg-surface py-3"
    >
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        className="flex w-max"
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        <MarqueeGroup items={items} />
        <MarqueeGroup items={items} />
      </motion.div>
    </div>
  )
}

export default MarqueeBand
