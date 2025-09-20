import React from 'react';
import SkillTag from './SkillTag.jsx';

const About = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Figma", "Tailwind CSS", "Bootstrap", "Solidity (beginner)"];

  return (
    <section id="about" className="py-48 bg-slate-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue-400 to-purple-600"></div>
      
      <div className="max-w-7xl mx-auto w-[92%]">
        <div className="mb-36">
          <h2 className="block text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent text-center mb-14 relative tracking-tight">
            About Me
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-600 rounded-3xl"></div>
          </h2>
          <div className="block text-center text-slate-300 text-3xl font-normal max-w-5xl mx-auto leading-relaxed">
            <p>I'm a frontend developer specializing in React JS and Tailwind CSS. I love building delightful user experiences and i'm currently diving deep into blockchain development and Solidity to bridge traditional web apps with decentralized technologies.</p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-32 items-start">
          <div className="bg-white/10 backdrop-blur-[10px] border border-white/20 rounded-3xl p-16">
            <h3 className="font-bold text-5xl mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent tracking-tight">
              Get to know me!
            </h3>
            <div>
              <p className="text-3xl leading-relaxed text-slate-300 mb-10">
                My background is in community management and Web3 technology. I have a bachelor's degree in Education (Accounting) from university. When I'm not coding or analyzing smart contracts, I take care of my cats and enjoy watching anime.
              </p>
            </div>
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-14 py-6 text-2xl font-medium rounded-full transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              Contact
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-[10px] border border-white/20 rounded-3xl p-16">
            <h3 className="font-bold text-5xl mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent tracking-tight">
              My Skills
            </h3>
            <div className="flex flex-wrap gap-6">
              {skills.map((skill, index) => (
                <SkillTag key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;