import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, projectTitle }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + images.length) % images.length);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  if (images.length === 1) {
    return (
      <div className="bg-white/10 backdrop-blur-[10px] border border-white/20 rounded-3xl p-8">
        <img 
          src={images[0]} 
          alt={`${projectTitle} Screenshot`} 
          className="w-full rounded-2xl"
        />
      </div>
    );
  }

  return (
    <div 
      className="relative bg-white/10 backdrop-blur-[10px] border border-white/20 rounded-3xl p-8 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full flex-shrink-0 px-2">
              <img 
                src={image} 
                alt={`${projectTitle} Screenshot ${index + 1}`} 
                className="w-full h-96 object-contain bg-slate-800 rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-12 transform -translate-y-1/2 bg-blue-500/80 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl z-10 transition-all duration-300 hover:bg-blue-500 hover:scale-110"
      >
        ❮
      </button>

      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-12 transform -translate-y-1/2 bg-blue-500/80 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl z-10 transition-all duration-300 hover:bg-blue-500 hover:scale-110"
      >
        ❯
      </button>

      <div className="flex justify-center gap-4 mt-8">
        {images.map((_, index) => (
          <span 
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-gradient-to-r from-blue-400 to-purple-600 scale-120' 
                : 'bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;