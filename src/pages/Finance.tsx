import Roadmap from '../components/Roadmap'
import { financePage } from '../data.ts'

const tickerItems = [
  ...financePage.items.map((item) => item.title),
  ...new Set(financePage.items.flatMap((item) => item.tags)),
]

function Finance() {
  return (
    <Roadmap
      page={financePage}
      placeholderLabel="No entries published yet — this page fills up as each piece of research is finished"
      tickerItems={tickerItems}
    />
  )
}

export default Finance
