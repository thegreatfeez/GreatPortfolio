import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="grid lg:grid-cols-[1.2fr_1fr] gap-24 mb-32 last:mb-0 bg-white/10 backdrop-blur-[10px] border border-white/20 rounded-3xl p-16 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-3xl hover:shadow-blue-500/20">
      <div className="overflow-hidden rounded-2xl relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-10 z-10"></div>
        <img 
          src={project.images[0]} 
          alt={`${project.title} Screenshot`}
          className="w-full block object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="flex justify-center flex-col items-start lg:items-start text-center lg:text-left">
        <h3 className="font-bold text-5xl mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent tracking-tight">
          {project.title}
        </h3>
        <p className="text-3xl text-slate-300 leading-relaxed mb-12">
          {project.shortDescription}
        </p>
        <Link 
          to={`/project/${project.id}`}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-14 py-6 text-2xl font-medium rounded-full transition-all duration-300 hover:transform hover:-translate-y-1"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;