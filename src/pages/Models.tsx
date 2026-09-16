import Roadmap from '../components/Roadmap'
import { modelsPage } from '../data.ts'

const tickerItems = [
  ...modelsPage.items.map((item) => item.title),
  ...new Set(modelsPage.items.flatMap((item) => item.tags)),
]

function Models() {
  return (
    <Roadmap
      page={modelsPage}
      placeholderLabel="No entries published yet — this page fills up as each experiment is finished"
      tickerItems={tickerItems}
    />
  )
}

export default Models
