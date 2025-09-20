import React from 'react';

const SocialIcon = ({ href, src, alt }) => {
  return (
    <div className="w-22 h-22 mb-4 last:mb-0">
      <a 
        href={href} 
        target="_blank" 
        rel="noreferrer" 
        className="w-full h-full flex items-center justify-center transition-all duration-300 rounded-full relative overflow-hidden hover:scale-110"
      >
        <img src={src} alt={alt} className="w-10 h-10 filter brightness-0 invert transition-all duration-300" />
      </a>
    </div>
  );
};

export default SocialIcon;