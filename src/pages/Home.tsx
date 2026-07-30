import Bento from '../components/Bento'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Spotlight from '../components/Spotlight'

function Home() {
  return (
    <div className="min-h-screen bg-[#0c0e17] text-[#e1e4ff]">
      <Navbar />
      <main className="pt-24" id="home">
        <Hero />
        <Spotlight />
        <Bento />
      </main>
      <Footer />
    </div>
  )
}

export default Home
