import React from 'react';

const Footer = () => {
  const socialLinks = [
    { href: "https://www.linkedin.com/in/thegreatfeez/", src: "https://cdn-icons-png.flaticon.com/512/174/174857.png", alt: "LinkedIn" },
    { href: "https://github.com/thegreatfeez", src: "https://cdn-icons-png.flaticon.com/512/25/25231.png", alt: "GitHub" },
    { href: "https://x.com/thegreatfeez", src: "https://cdn-icons-png.flaticon.com/512/733/733579.png", alt: "Twitter" },
    { href: "https://www.tiktok.com/@thegreatfeez", src: "https://cdn-icons-png.flaticon.com/512/3046/3046121.png", alt: "TikTok" },
    { href: "https://www.instagram.com/thegreatfeez/", src: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", alt: "Instagram" }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue-400 to-purple-600"></div>
      
      <div className="max-w-7xl mx-auto w-[92%]">
        <div className="flex justify-between py-32 lg:flex-row flex-col">
          <div className="order-2 lg:order-1 lg:mb-0 mb-20">
            <h2 className="text-4xl font-semibold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent tracking-tight mb-8">
              Social
            </h2>
            <div className="flex gap-6 flex-wrap">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-16 h-16 p-4 bg-white/10 backdrop-blur-[10px] border border-white/20 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-1 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:shadow-2xl hover:shadow-blue-500/30"
                >
                  <img src={social.src} alt={social.alt} className="w-full h-full filter brightness-0 invert" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-2/5 order-1 lg:order-2 max-w-2xl bg-white/10 backdrop-blur-[10px] border border-white/20 rounded-3xl p-12">
            <h4 className="text-4xl font-semibold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent tracking-tight mb-8">
              Adams Afeez
            </h4>
            <p className="text-slate-300 text-2xl leading-relaxed">
              A frontend developer specializing in React and Tailwind CSS, currently expanding into Web3 development.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;