import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Star, ArrowRight, Award, Users, Clock, Shield } from 'lucide-react';
import Header from '../components/Header';
import About from '../components/About';
import WhyChoose from '../components/WhyChoose';
import Testimonials from '../components/Testimonials';
import Iridescence from '../components/Iridescence';

const AboutPage = () => {
  // Dynamically import all product images
  const productImages = import.meta.glob('/src/assets/product/*.png', { eager: true });
  const imageEntries = Object.entries(productImages);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const stats = [
    { icon: Award, number: "11+", label: "Years Experience", color: "from-blue-500 to-cyan-400" },
    { icon: Users, number: "500+", label: "Happy Clients", color: "from-green-500 to-cyan-400" },
    { icon: Clock, number: "250+", label: "Projects Completed", color: "from-purple-500 to-blue-400" },
    { icon: Shield, number: "4.9/5", label: "Customer Rating", color: "from-orange-500 to-red-400" }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
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
            src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="About Us Background"
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
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Star size={16} />
            <span>About Veni Enterprises</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Creating
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Extraordinary</span>
            <br />
            Swimming Experiences
          </h1>
          
          <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
            Since 2013, we've been transforming backyards into stunning swimming oases with our expertise in pool design, construction, and maintenance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 transform flex items-center justify-center space-x-2">
              <span>Learn More</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105">
              <span>Our Services</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 relative overflow-hidden">
        {/* Iridescence Background */}
        <div className="absolute inset-0 opacity-25">
          <Iridescence 
            color={[0.15, 0.4, 0.8]} // Blue color
            speed={0.4}
            amplitude={0.08}
            mouseReact={false}
          />
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 border-2 border-blue-500 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-cyan-500 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
          </div>

        {/* Additional Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-cyan-600/5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/3 to-cyan-500/3"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
              <Star size={16} />
              <span>Our Achievements</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Numbers That
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"> Speak</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Our track record of success and customer satisfaction speaks for itself.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={32} className="text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Component */}
      <About />

      {/* Why Choose Us Component */}
      <WhyChoose />

      {/* Testimonials Component */}
      <Testimonials />
    </div>
  );
};

export default AboutPage; 