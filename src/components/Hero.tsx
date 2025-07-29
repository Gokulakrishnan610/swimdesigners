import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "SWIMMING POOL DESIGNS",
      subtitle: "Transform your backyard into a luxury oasis"
    },
    {
      image: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "LUXURY POOL CONSTRUCTION",
      subtitle: "Premium quality construction services"
    },
    {
      image: "https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "POOL MAINTENANCE",
      subtitle: "Complete maintenance and support services"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden" data-aos="fade-up">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        </div>
      ))}

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-2 sm:p-4 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 transform hover:rotate-12 group"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6 group-hover:animate-pulse" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-2 sm:p-4 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 transform hover:-rotate-12 group"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6 group-hover:animate-pulse" />
      </button>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 w-full">
          <div className="max-w-3xl">
            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              <div className="bg-gradient-to-r from-cyan-500/90 to-blue-600/90 backdrop-blur-sm p-4 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl transform hover:scale-105 transition-all duration-500 shadow-2xl border border-white/20">
                <div className="space-y-4 sm:space-y-6">
                  <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-slideInLeft">
                    {slides[currentSlide].title.split(' ').map((word, index) => (
                      <span
                        key={index}
                        className="inline-block transform hover:scale-110 transition-transform duration-300 cursor-default"
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        {word}{' '}
                      </span>
                    ))}
                  </h1>
                  
                  <div className="w-16 sm:w-24 h-1 bg-white animate-expandWidth"></div>
                  
                  <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed animate-fadeInUp">
                    {slides[currentSlide].subtitle}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                    <button className="group bg-white text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-blue-50 hover:text-blue-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative overflow-hidden text-sm sm:text-base">
                      <span className="relative z-10">Get Free Quote</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </button>
                    
                    <button className="group flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base">
                      <Play size={16} className="sm:w-5 sm:h-5 group-hover:animate-pulse" />
                      <span>Watch Video</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75 hover:scale-110'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 animate-bounce">
        <div className="w-4 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-0.5 h-2 sm:h-3 bg-white rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;