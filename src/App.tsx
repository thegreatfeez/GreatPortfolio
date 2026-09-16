import { MotionConfig } from 'framer-motion'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Audits from './pages/Audits'
import Finance from './pages/Finance'
import Home from './pages/Home'
import Models from './pages/Models'
import Projects from './pages/Projects'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/audits" element={<Audits />} />
          <Route path="/models" element={<Models />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/security" element={<Navigate replace to="/audits" />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  )
}

export default App
