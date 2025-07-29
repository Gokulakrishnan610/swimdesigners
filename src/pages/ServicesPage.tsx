import React from 'react';
import { Star, ArrowRight, PenTool, Settings, Waves, Shield, Zap, Award, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Services from '../components/Services';
import Quote from '../components/Quote';
import Iridescence from '../components/Iridescence';

const ServicesPage = () => {
  const services = [
    {
      icon: PenTool,
      title: 'Pool Design & Consultation',
      description: 'Expert consultation and custom design services for all types of swimming pools. From concept to completion, we bring your vision to life.',
      features: ['Custom Designs', '3D Visualization', 'Expert Consultation', 'Site Analysis'],
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: Settings,
      title: 'Pool Equipment & Accessories',
      description: 'Complete range of premium pool equipment and accessories to enhance your swimming experience and ensure safety.',
      features: ['Safety Equipment', 'Filtration Systems', 'Chemical Treatment', 'Automation'],
      image: 'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      color: 'from-green-500 to-cyan-400'
    },
    {
      icon: Waves,
      title: 'Pool Construction',
      description: 'Professional construction services with premium materials and expert craftsmanship for durable, beautiful pools.',
      features: ['Premium Materials', 'Expert Installation', 'Quality Guaranteed', 'Timeline Management'],
      image: 'https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      color: 'from-purple-500 to-blue-400'
    },
    {
      icon: Shield,
      title: 'Pool Maintenance',
      description: 'Comprehensive maintenance services to keep your pool pristine and safe throughout the year.',
      features: ['Regular Cleaning', 'Water Treatment', 'Equipment Service', 'Seasonal Care'],
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      color: 'from-orange-500 to-red-400'
    },
    {
      icon: Zap,
      title: 'Waterproofing Solutions',
      description: 'Advanced waterproofing materials and techniques to ensure your pool remains leak-free and durable.',
      features: ['Premium Materials', 'Expert Application', 'Long-term Protection', 'Warranty'],
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      color: 'from-indigo-500 to-purple-400'
    },
    {
      icon: Award,
      title: 'Spa Construction',
      description: 'Luxury spa construction services to create your perfect relaxation oasis with premium features.',
      features: ['Custom Spas', 'Premium Features', 'Relaxation Design', 'Hydrotherapy'],
      image: 'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      color: 'from-pink-500 to-rose-400'
    }
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
            alt="Services Background"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-cyan-700/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-blue-900/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 border-2 border-blue-500 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-cyan-500 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Star size={16} />
            <span>Our Services</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Pool Solutions</span>
            <br />
            for Every Need
          </h1>
          
          <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
            From design to maintenance, we provide complete swimming pool services with premium quality and expert craftsmanship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 transform flex items-center justify-center space-x-2">
              <span>Explore Services</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105">
              <span>Get Quote</span>
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 relative overflow-hidden">
        {/* Iridescence Background */}
        <div className="absolute inset-0 opacity-60">
          <Iridescence 
            color={[0.3, 0.7, 1.0]} // Brighter blue color
            speed={0.6}
            amplitude={0.1}
            mouseReact={true}
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
              <span>Service Categories</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              What We
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"> Offer</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Comprehensive swimming pool services designed to meet all your needs, from initial design to ongoing maintenance.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <service.icon size={28} className="text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle size={16} className="text-blue-500" />
                            <span className="text-sm text-gray-600 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <button className="group/btn flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                        <span>Learn More</span>
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Service Image */}
                  <div className="mt-6 rounded-2xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Component */}
      <Services />

      {/* Quote Component */}
      <Quote />
    </div>
  );
};

export default ServicesPage; 