import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Audits from './pages/Audits'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/audits" element={<Audits />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
