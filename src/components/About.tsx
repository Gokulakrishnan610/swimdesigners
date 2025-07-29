import React, { useEffect, useRef } from 'react';
import { Star, ArrowRight, Shield, Zap, Users, Clock, Award, CheckCircle } from 'lucide-react';
import Iridescence from './Iridescence';

const About = () => {
  const countersRef = useRef<HTMLDivElement>(null);
  const counters = useRef<{ [key: string]: number }>({
    projects: 0,
    clients: 0,
    rating: 0,
    experience: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targets = {
            projects: 1000,
            clients: 500,
            rating: 4.9,
            experience: 11
          };

          Object.keys(targets).forEach(key => {
            const target = targets[key as keyof typeof targets];
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              counters.current[key] = current;
              
              const element = document.getElementById(`counter-${key}`);
              if (element) {
                if (key === 'rating') {
                  element.textContent = current.toFixed(1);
                } else {
                  element.textContent = Math.floor(current).toString();
                }
              }
            }, 16);
          });
        }
      });
    });

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Premium Quality Materials",
      description: "Only the finest materials used in all our projects"
    },
    {
      icon: Zap,
      title: "Expert Installation",
      description: "Professional team with 11+ years experience"
    },
    {
      icon: Users,
      title: "500+ Happy Clients",
      description: "Trusted by customers nationwide"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round the clock customer service"
    },
    {
      icon: Award,
      title: "Industry Certified",
      description: "Meeting highest industry standards"
    },
    {
      icon: Star,
      title: "4.9/5 Rating",
      description: "Consistently excellent reviews"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Iridescence Background */}
      <div className="absolute inset-0 opacity-50">
        <Iridescence 
          color={[0.25, 0.6, 1.0]} // Brighter blue color
          speed={0.5}
          amplitude={0.1}
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
              <Star size={16} />
              <span>About Us</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Leading
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"> Pool Solutions</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              With over 11 years of experience, Veni Enterprises has been at the forefront of swimming pool design, construction, and maintenance. We specialize in creating exceptional pool experiences using premium waterproofing materials. Our team of certified professionals ensures every project meets the highest industry standards.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <feature.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 transform flex items-center space-x-2">
              <span>Learn More About Us</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right Content - Stats */}
          <div ref={countersRef}>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Award size={28} className="text-white" />
                </div>
                <div id="counter-projects" className="text-4xl font-bold text-gray-900 mb-2">0</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users size={28} className="text-white" />
                </div>
                <div id="counter-clients" className="text-4xl font-bold text-gray-900 mb-2">0</div>
                <div className="text-gray-600 font-medium">Happy Clients</div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Star size={28} className="text-white" />
                </div>
                <div id="counter-rating" className="text-4xl font-bold text-gray-900 mb-2">0</div>
                <div className="text-gray-600 font-medium">Customer Rating</div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Clock size={28} className="text-white" />
                </div>
                <div id="counter-experience" className="text-4xl font-bold text-gray-900 mb-2">0</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
            </div>

            {/* Image Section */}
            <div className="mt-8 relative">
              <img
                src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Pool Construction"
                className="w-full h-64 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-4 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold">11+</div>
                <div className="text-sm">Years of</div>
                <div className="text-sm">Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;