import React from 'react';
import { CheckCircle, Users, DollarSign, Star } from 'lucide-react';

const WhyChoose = () => {
  const features = [
    {
      icon: <CheckCircle size={48} />,
      title: "Quality Services",
      description: "We provide world-class quality services with attention to every detail"
    },
    {
      icon: <Users size={48} />,
      title: "Experienced Team",
      description: "Our team has over 11 years of experience in pool construction"
    },
    {
      icon: <DollarSign size={48} />,
      title: "Affordable Pricing",
      description: "Competitive pricing without compromising on quality"
    },
    {
      icon: <Star size={48} />,
      title: "Quality Product",
      description: "We use only the best materials and equipment for lasting results"
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-white/70" data-aos="fade-up" data-aos-duration="1200">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-blue-600 font-semibold text-base sm:text-lg">Why Choose</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 sm:mt-4 mb-4 sm:mb-6">
            WHY CHOOSE SWIMMING POOL
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group p-6 sm:p-8 rounded-xl sm:rounded-2xl transition-all duration-300 bg-white/30 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-2xl hover:bg-white/40 cursor-pointer hover:scale-[1.02] hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="text-blue-600 mb-4 sm:mb-6 flex justify-center group-hover:scale-110 group-hover:text-blue-700 transition-all duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-12 lg:h-12">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;