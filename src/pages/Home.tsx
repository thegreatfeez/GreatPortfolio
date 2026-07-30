import Bento from '../components/Bento'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import MarqueeBand from '../components/MarqueeBand'
import Navbar from '../components/Navbar'
import Spotlight from '../components/Spotlight'
import { tickerItems } from '../data.ts'

function Home() {
  return (
    <div className="min-h-screen bg-[#0c0e17] text-[#e1e4ff]">
      <Navbar />
      <main className="pt-20" id="home">
        <MarqueeBand items={tickerItems} />
        <Hero />
        <Spotlight />
        <Bento />
      </main>
      <Footer />
    </div>
  )
}

export default Home
