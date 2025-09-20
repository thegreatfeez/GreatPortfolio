import React from 'react';

const SkillTag = ({ skill }) => {
  return (
    <div className="px-10 py-5 text-2xl bg-white/10 backdrop-blur-[10px] border border-white/20 rounded-3xl font-medium text-white transition-all duration-300 relative overflow-hidden hover:transform hover:-translate-y-1 hover:text-white hover:shadow-2xl hover:shadow-blue-400/30 group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0 -z-10"></div>
      {skill}
    </div>
  );
};

export default SkillTag;