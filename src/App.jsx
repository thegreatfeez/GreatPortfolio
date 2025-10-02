import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import ProjectDetail from "./pages/ProjectDetail.jsx";
import { AppProvider } from './context/AppContext.jsx';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <div className="bg-slate-900 text-white font-sans leading-relaxed overflow-x-hidden">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;