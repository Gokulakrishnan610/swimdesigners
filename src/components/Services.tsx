import React from 'react';
import { PenTool, Settings, Waves, ArrowRight, Shield, Zap, Star, Users, Clock, Award } from 'lucide-react';
import Iridescence from './Iridescence';

const Services = () => {
  const services = [
    {
      icon: PenTool,
      title: 'Pool Design & Consultation',
      description: 'Expert consultation and custom design services for all types of swimming pools. From concept to completion, we bring your vision to life.',
      features: ['Custom Designs', '3D Visualization', 'Expert Consultation'],
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: Settings,
      title: 'Pool Equipment & Accessories',
      description: 'Complete range of premium pool equipment and accessories to enhance your swimming experience and ensure safety.',
      features: ['Safety Equipment', 'Filtration Systems', 'Chemical Treatment'],
      color: 'from-green-500 to-cyan-400'
    },
    {
      icon: Waves,
      title: 'Pool Construction',
      description: 'Professional construction services with premium materials and expert craftsmanship for durable, beautiful pools.',
      features: ['Premium Materials', 'Expert Installation', 'Quality Guaranteed'],
      color: 'from-purple-500 to-blue-400'
    },
    {
      icon: Shield,
      title: 'Pool Maintenance',
      description: 'Comprehensive maintenance services to keep your pool pristine and safe throughout the year.',
      features: ['Regular Cleaning', 'Water Treatment', 'Equipment Service'],
      color: 'from-orange-500 to-red-400'
    },
    {
      icon: Zap,
      title: 'Waterproofing Solutions',
      description: 'Advanced waterproofing materials and techniques to ensure your pool remains leak-free and durable.',
      features: ['Premium Materials', 'Expert Application', 'Long-term Protection'],
      color: 'from-indigo-500 to-purple-400'
    },
    {
      icon: Award,
      title: 'Spa Construction',
      description: 'Luxury spa construction services to create your perfect relaxation oasis with premium features.',
      features: ['Custom Spas', 'Premium Features', 'Relaxation Design'],
      color: 'from-pink-500 to-rose-400'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Iridescence Background */}
      <div className="absolute inset-0 opacity-50">
        <Iridescence 
          color={[0.25, 0.6, 1.0]} // Blue color
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
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/3 via-transparent to-cyan-600/3"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/2 to-cyan-500/2"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Star size={16} />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"> Pool Solutions</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            From design to maintenance, we provide complete swimming pool services with premium quality and expert craftsmanship.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mt-8"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={28} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                      <span className="text-sm text-gray-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="group/btn flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Pool Project?</h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Get a free consultation and quote from our expert team. We'll help you create the perfect swimming pool for your space.
            </p>
            <button className="group bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 transform flex items-center space-x-2 mx-auto">
              <span>Get Free Quote</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;