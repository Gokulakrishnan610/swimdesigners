import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Clock, Star, CheckCircle } from 'lucide-react';
import StarBorder from './StarBorder';
import gallery1 from '../assets/gallery/17149847152680625.jpg';
const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ years: 0, clients: 0, support: 24, quality: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { years: 11, clients: 500, support: 24, quality: 100 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounters({
        years: Math.floor(targets.years * easeOut),
        clients: Math.floor(targets.clients * easeOut),
        support: targets.support,
        quality: Math.floor(targets.quality * easeOut)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepDuration);
  };

  const features = [
    "World-class swimming pool services",
    "11+ years of industry experience", 
    "500+ satisfied customers",
    "24/7 customer support",
    "Premium quality materials",
    "Professional installation team"
  ];

  return (
    <section className="py-20 bg-white/70" ref={sectionRef} data-aos="fade-up">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-500 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-cyan-500 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <div>
              <span className="text-blue-600 font-semibold text-lg animate-fadeInUp">Welcome</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 leading-tight animate-slideInLeft">
                ENJOY SAFE AND AFFORDABLE
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 animate-gradient">
                  DIVING AND SWIMMING WITH US!
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                Incorporated in the year 2013, Veni Enterprises is a trusted trader, supplier and service provider of swimming pool spare parts and construction services of swimming pools. Based at Tamil Nadu (India), we have garnered a huge client base by delivering world-class swimming pool services.
              </p>

              <p className="text-gray-600 leading-relaxed animate-fadeInUp" style={{ animationDelay: '400ms' }}>
                We are offering Swimming Pool Construction Services, swimming pool accessories, Branded water Proofing Materials etc. to our clients spread across the country. We have hired professionals, who have rich on-site construction knowledge and experience that enables us to meet the industrial standards in a significant manner.
              </p>
            </div>

            {/* Features List */}
            <div className="grid md:grid-cols-2 gap-4 animate-fadeInUp" style={{ animationDelay: '600ms' }}>
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 group hover:bg-white hover:shadow-lg p-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <CheckCircle className="text-green-500 flex-shrink-0 group-hover:animate-pulse" size={20} />
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {[
                { icon: Award, value: counters.years, suffix: '+', label: 'Years Experience', color: 'text-blue-600', iconBg: 'bg-blue-100' },
                { icon: Users, value: counters.clients, suffix: '+', label: 'Happy Clients', color: 'text-green-600', iconBg: 'bg-green-100' },
                { icon: Clock, value: counters.support, suffix: '/7', label: 'Support', color: 'text-purple-600', iconBg: 'bg-purple-100' },
                { icon: Star, value: counters.quality, suffix: '%', label: 'Quality', color: 'text-yellow-600', iconBg: 'bg-yellow-100' }
              ].map((stat, index) => (
                <StarBorder
                  key={index}
                  className="flex flex-col items-center justify-center min-h-[260px] min-w-[180px] px-6 py-8 rounded-3xl shadow-xl border-none bg-transparent group transition-all duration-300 hover:scale-105 mx-4"
                  color="#60a5fa"
                  speed="8s"
                >
                  <div className={`flex items-center justify-center w-20 h-20 mb-6 rounded-full ${stat.iconBg} bg-white/40 backdrop-blur-md shadow-md`}>
                    <stat.icon size={36} className={`${stat.color}`} />
                  </div>
                  <div className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-gray-600 text-base font-medium text-center leading-tight">
                    {stat.label}
                  </div>
                </StarBorder>
              ))}
            </div>
          </div>

          {/* Right Content - Image with Experience Badge */}
          <div className={`relative transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`} style={{ animationDelay: '300ms' }}>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <img
                src={gallery1}
                alt="Swimming Pool Construction"
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-500 hover:rotate-12 group">
              <div className="text-center">
                <div className="text-4xl font-bold group-hover:animate-pulse">{counters.years}</div>
                <div className="text-sm font-semibold">YEARS</div>
                <div className="text-sm font-semibold">EXPERIENCE</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-4 right-4 bg-white p-4 rounded-full shadow-lg animate-float">
              <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
            </div>
            
            <div className="absolute top-1/2 -right-4 bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-full shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              <Star className="text-white" size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;