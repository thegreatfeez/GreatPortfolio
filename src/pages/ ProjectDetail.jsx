import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useAppContext } from './AppContext.jsx';
import ImageSlider from './ImageSlider.jsx';
import SkillTag from './SkillTag.jsx';

const ProjectDetail = () => {
  const { id } = useParams();
  const { projects } = useAppContext();
  const project = projects.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  useEffect(() => {
    document.title = `Case Study of ${project.title} | Adams Afeez`;
    
    return () => {
      document.title = 'Adams Afeez | Frontend Developer | Web3 & Blockchain Enthusiast | Emerging Solidity Developer';
    };
  }, [project.title]);

  return (
    <div className="bg-slate-900 min-h-screen">
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden pt-32">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23667eea' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="py-80 max-w-6xl w-[92%] mx-auto text-center relative z-10">
          <h1 className="text-7xl lg:text-9xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent text-center tracking-tight leading-tight mb-12">
            {project.title}
          </h1>
          <div className="max-w-5xl mx-auto mb-20">
            <p className="text-slate-300 text-3xl text-center leading-relaxed font-light">
              {project.shortDescription}
            </p>
          </div>
          <div>
            <a 
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-16 py-7 text-3xl font-semibold rounded-full border-none transition-all duration-300 relative overflow-hidden hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/40"
            >
              Live Link
            </a>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-6xl mx-auto w-[92%]">
          <div className="mb-24">
            <ImageSlider images={project.images} projectTitle={project.title} />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-28 bg-white/10 backdrop-blur-[10px] border border-white/20 rounded-3xl p-16">
              <h3 className="font-bold text-5xl mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent tracking-tight">
                Project Overview
              </h3>
              <div>
                {project.fullDescription.map((paragraph, index) => (
                  <p key={index} className="text-3xl leading-relaxed text-slate-300 mb-10 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            <div className="mb-28 bg-white/10 backdrop-blur-[10px] border border-white/20 rounded-3xl p-16">
              <h3 className="font-bold text-5xl mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent tracking-tight">
                Tools Used
              </h3>
              <div className="flex flex-wrap gap-6">
                {project.tools.map((tool, index) => (
                  <SkillTag key={index} skill={tool} />
                ))}
              </div>
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-[10px] border border-white/20 rounded-3xl p-16">
              <h3 className="font-bold text-5xl mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent tracking-tight">
                See Live
              </h3>
              <a 
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-14 py-6 text-2xl font-medium rounded-full mr-8 transition-all duration-300 hover:transform hover:-translate-y-1 inline-block mb-8 lg:mb-0"
              >
                Live Link
              </a>
              <a 
                href={project.codeLink}
                target="_blank"
                rel="noreferrer"
                className="bg-transparent text-blue-400 border-2 border-blue-400 px-14 py-6 text-2xl font-medium rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:border-transparent hover:transform hover:-translate-y-1 inline-block"
              >
                Code Link
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;