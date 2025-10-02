import React from 'react';
import { useAppContext } from '../../context/AppContext.jsx';
import ProjectCard from './ProjectCard.jsx';

const Projects = () => {
  const { projects } = useAppContext();

  return (
    <section id="projects" className="py-48 bg-slate-900">
      <div className="max-w-7xl mx-auto w-[92%]">
        <div className="mb-44">
          <h2 className="block text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent text-center mb-14 relative tracking-tight">
            Projects
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-600 rounded-3xl"></div>
          </h2>
          <p className="block text-center text-slate-300 text-3xl font-normal max-w-5xl mx-auto leading-relaxed">
            All my projects include links to the code and live version. Click the button to learn more about each one.
          </p>
        </div>
        
        <div>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;