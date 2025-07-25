import React from 'react';
import { Waves, Settings, PenTool, ArrowRight } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const Services = () => {
  const services = [
    {
      icon: <PenTool size={40} />,
      title: 'Swimming Pool Consultant',
      description: 'We offer a first class design & construction service for all type of swimming pools. In turnkey projects, we provide various services like concept design, working drawings and design.',
      color: 'bg-white',
      textColor: 'text-gray-900'
    },
    {
      icon: <Settings size={40} />,
      title: 'Swimming Pool Equipments',
      description: 'Veni Enterprises offers the following Pool Accessories: Pool Safety Equipment, Ladders, Lounge Chairs, Lighting Solution, Chemical Treatment. Pool accessories are a way to inject fun into your pool and its surrounding area.',
      color: 'bg-white',
      textColor: 'text-gray-900'
    },
    {
      icon: <Waves size={40} />,
      title: 'Swimming Pool Designs',
      description: 'Lorem ipsum dolor sit amet, alique consectetur adipiscing elit. Nyc priotic vulputate libero et velit odioim quam eveniet non dolorem totam',
      color: 'bg-white',
      textColor: 'text-gray-900'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-transparent" data-aos="fade-up" data-aos-duration="1200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-blue-600 font-semibold text-lg">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            OUR BEST SWIMMING POOL SERVICES FOR YOU!
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <SpotlightCard
              key={index}
              className={`${service.color} ${service.textColor} p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group`}
              spotlightColor="rgba(0, 229, 255, 0.6)"
            >


              <div className="relative z-20">
                {/* Icon */}
                <div className="text-blue-600 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Read More Link */}
                <div className="flex items-center space-x-2 group/link cursor-pointer">
                  <span className="text-blue-600 font-semibold">
                    Read More
                  </span>
                  <ArrowRight 
                    size={16} 
                    className="text-blue-600 transform group-hover/link:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;