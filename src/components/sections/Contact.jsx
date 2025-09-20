import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-48 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-radial from-blue-500/10 to-transparent animate-spin" style={{animation: 'rotate 20s linear infinite'}}></div>
      
      <div className="max-w-7xl mx-auto w-[92%] relative z-10">
        <div className="mb-36">
          <h2 className="block text-7xl font-bold bg-gradient-to-r from-white to-slate-100 bg-clip-text text-transparent text-center mb-14 relative tracking-tight">
            Contact
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-600 rounded-3xl"></div>
          </h2>
          <p className="block text-center text-white/90 text-3xl font-normal max-w-5xl mx-auto leading-relaxed">
            Please reach out if you have any questions! I'm happy to jump on a video call to brainstorm projects and ideas. Send me an email at adamsafeez4@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;