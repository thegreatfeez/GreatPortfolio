import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from './AppContext.jsx';

const Header = () => {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useAppContext();

  return (
    <header className="fixed w-full z-50 bg-white/10 backdrop-blur-[20px] border-b border-white/20">
      <div className="flex items-center justify-between px-8 py-6 lg:px-20">
        <Link 
          to="/" 
          className="flex items-center cursor-pointer transition-all duration-300 hover:scale-105"
          onClick={closeMobileMenu}
        >
          <div className="w-20 h-20 lg:w-16 lg:h-16 rounded-full overflow-hidden mr-6 lg:mr-5 bg-gradient-to-br from-blue-500 to-purple-600 p-[2px] relative">
            <div className="absolute inset-[2px] bg-slate-900 rounded-full z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
              alt="Adams Afeez" 
              className="w-full h-full object-cover rounded-full relative z-20"
            />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent tracking-tight">
            Adams Afeez
          </span>
        </Link>
        
        <nav className="hidden md:flex">
          <ul className="flex">
            <li>
              <Link 
                to="/" 
                className="px-10 py-6 inline-block text-white font-medium transition-all duration-300 rounded-3xl relative overflow-hidden hover:text-blue-400 hover:-translate-y-1"
              >
                Home
              </Link>
            </li>
            <li>
              <a 
                href="#projects" 
                className="px-10 py-6 inline-block text-white font-medium transition-all duration-300 rounded-3xl relative overflow-hidden hover:text-blue-400 hover:-translate-y-1"
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="px-10 py-6 inline-block text-white font-medium transition-all duration-300 rounded-3xl relative overflow-hidden hover:text-blue-400 hover:-translate-y-1"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="px-10 py-6 inline-block text-white font-medium transition-all duration-300 rounded-3xl relative overflow-hidden hover:text-blue-400 hover:-translate-y-1"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="md:hidden w-12 cursor-pointer" onClick={toggleMobileMenu}>
          <img 
            src={`data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>')}`}
            alt="Menu" 
            className={`w-full filter brightness-0 invert ${isMobileMenuOpen ? 'hidden' : 'block'}`}
          />
          <img 
            src={`data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>')}`}
            alt="Close" 
            className={`w-full filter brightness-0 invert ${isMobileMenuOpen ? 'block' : 'hidden'}`}
          />
        </div>
      </div>

      <div className={`md:hidden bg-white/10 backdrop-blur-[20px] border-b border-white/20 absolute w-full top-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <ul>
          <li>
            <Link 
              to="/" 
              className="block px-12 py-10 text-white text-right border-b border-white/20 font-medium transition-all duration-300 hover:text-blue-400 hover:bg-white/10"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <a 
              href="#projects" 
              className="block px-12 py-10 text-white text-right border-b border-white/20 font-medium transition-all duration-300 hover:text-blue-400 hover:bg-white/10"
              onClick={closeMobileMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="block px-12 py-10 text-white text-right border-b border-white/20 font-medium transition-all duration-300 hover:text-blue-400 hover:bg-white/10"
              onClick={closeMobileMenu}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="block px-12 py-10 text-white text-right font-medium transition-all duration-300 hover:text-blue-400 hover:bg-white/10"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;