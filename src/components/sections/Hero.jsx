import React from 'react';
import SocialIcon from '../UI/SocialIcon.jsx';
const Hero = () => {
  return (
    <section className="relative min-h-screen max-h-[120rem] overflow-hidden bg-gradient-radial from-slate-800 to-slate-900">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat animate-pulse" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'float 20s ease-in-out infinite'
        }}></div>
      </div>

      <div className="hidden lg:block fixed top-1/2 left-0 transform -translate-y-1/2 bg-white/10 backdrop-blur-[15px] border border-white/20 border-l-0 rounded-r-3xl py-8">
        <div className="space-y-4">
          <SocialIcon href="https://www.linkedin.com/in/thegreatfeez/" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
          <SocialIcon href="https://github.com/thegreatfeez" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
          <SocialIcon href="https://x.com/thegreatfeez" src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
          <SocialIcon href="https://www.tiktok.com/@thegreatfeez" src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" />
          <SocialIcon href="https://www.instagram.com/thegreatfeez/" src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-6xl w-[92%] text-center lg:static lg:pt-96 lg:pb-52 lg:mx-auto lg:transform-none">
        <h1 className="text-7xl lg:text-9xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent text-center tracking-tight leading-tight mb-16">
          Hey, My name is Adams Afeez
        </h1>
        <div className="max-w-5xl mx-auto mb-20">
          <p className="text-slate-300 text-3xl text-center leading-relaxed font-light">
            I am a frontend developer specializing in <strong className="text-white">React JS</strong> and <strong className="text-white">Tailwind CSS</strong>. I love building delightful user experiences and I am currently diving deep into <strong className="text-white">blockchain development</strong> and <strong className="text-white">Solidity</strong> to bridge traditional web apps with decentralized technologies.
          </p>
        </div>
        <div>
          <a 
            href="#projects" 
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-16 py-7 text-3xl font-semibold rounded-full border-none transition-all duration-300 relative overflow-hidden hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/40"
          >
            See my projects
          </a>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <div className="w-12 h-20 border-2 border-white/50 rounded-3xl bg-white/10 backdrop-blur-[10px] relative">
          <div className="w-2 h-2 absolute top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;