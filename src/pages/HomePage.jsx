import React from 'react';
import Hero from '../components/sections/Hero.jsx';
import Projects from '../components/sections/Projects.jsx';
import About from '../components/sections/About.jsx';
import Contact from '../components/sections/Contact.jsx';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default HomePage;