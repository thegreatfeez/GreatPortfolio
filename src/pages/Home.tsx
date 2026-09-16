import AuditBand from '../components/AuditBand'
import Disciplines from '../components/Disciplines'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Learning from '../components/Learning'
import MarqueeBand from '../components/MarqueeBand'
import Navbar from '../components/Navbar'
import Spotlight from '../components/Spotlight'
import { tickerItems } from '../data.ts'

function Home() {
  return (
    <div className="min-h-screen bg-abyss text-ink" id="top">
      <Navbar />
      <main className="pt-20">
        <MarqueeBand items={tickerItems} />
        <Hero />
        <Disciplines />
        <Spotlight />
        <Learning />
        <AuditBand />
      </main>
      <Footer />
    </div>
  )
}

export default Home
