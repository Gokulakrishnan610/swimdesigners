import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Users, Award, Clock, CheckCircle } from 'lucide-react';
import Iridescence from './Iridescence';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Premium Swimming Pool Solutions",
      subtitle: "Transform your space with our expert pool design and construction services",
      features: ["Custom Design", "Expert Installation", "Premium Materials"],
      image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    },
    {
      title: "Professional Pool Maintenance",
      subtitle: "Keep your pool crystal clear with our comprehensive maintenance services",
      features: ["Regular Cleaning", "Chemical Balance", "Equipment Service"],
      image: "https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    },
    {
      title: "Quality Pool Equipment",
      subtitle: "Premium pool equipment and accessories for optimal performance",
      features: ["Filtration Systems", "Heating Solutions", "Safety Equipment"],
      image: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-0">
      {/* Iridescence Background */}
      <div className="absolute inset-0 opacity-60">
        <Iridescence 
          color={[0.3, 0.7, 1.0]} // Brighter blue color
          speed={0.6}
          amplitude={0.1}
          mouseReact={true}
        />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={slides[currentSlide].image}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-cyan-700/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-blue-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-500 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-cyan-500 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
              <Star size={16} />
              <span>Welcome to Veni Enterprises</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              {slides[currentSlide].title}
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              {slides[currentSlide].subtitle}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-3 mb-8">
              {slides[currentSlide].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium">
                  <CheckCircle size={16} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 transform flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105">
                <span>Learn More</span>
              </button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 text-center text-white">
              <Users size={32} className="mx-auto mb-4 text-cyan-400" />
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm text-white/80">Happy Clients</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 text-center text-white">
              <Award size={32} className="mx-auto mb-4 text-cyan-400" />
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-sm text-white/80">Projects Completed</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 text-center text-white">
              <Star size={32} className="mx-auto mb-4 text-cyan-400" />
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-sm text-white/80">Customer Rating</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 text-center text-white">
              <Clock size={32} className="mx-auto mb-4 text-cyan-400" />
              <div className="text-3xl font-bold mb-2">11+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;