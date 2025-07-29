import React from 'react';
import { Star, Shield, Clock, Award, Users, Zap } from 'lucide-react';
import Iridescence from './Iridescence';

const WhyChoose = () => {
  const reasons = [
    {
      icon: Award,
      title: "11+ Years Experience",
      description: "Over a decade of expertise in swimming pool design and construction",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "Premium materials and expert craftsmanship for lasting results",
      color: "from-green-500 to-cyan-400"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We complete projects on schedule with professional efficiency",
      color: "from-purple-500 to-blue-400"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with specialized pool construction skills",
      color: "from-orange-500 to-red-400"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Latest technology and modern design approaches",
      color: "from-indigo-500 to-purple-400"
    },
    {
      icon: Star,
      title: "Customer Satisfaction",
      description: "500+ happy clients with 4.9/5 average rating",
      color: "from-pink-500 to-rose-400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 relative overflow-hidden">
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
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-500 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-cyan-500 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
      </div>

      {/* Additional Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-cyan-600/5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/3 to-cyan-500/3"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Star size={16} />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            The
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"> Veni Advantage</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Discover why hundreds of satisfied customers choose Veni Enterprises for their swimming pool projects.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mt-8"></div>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
              {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <reason.icon size={28} className="text-white" />
              </div>

              {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {reason.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                  {reason.description}
              </p>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Award size={24} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">11+</div>
            <div className="text-gray-600 text-sm">Years Experience</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Users size={24} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600 text-sm">Happy Clients</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Star size={24} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">250+</div>
            <div className="text-gray-600 text-sm">Projects Completed</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Shield size={24} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-gray-600 text-sm">Quality Guaranteed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;