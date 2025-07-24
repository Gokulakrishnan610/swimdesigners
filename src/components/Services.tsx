import React from 'react';
import { Waves, Settings, PenTool, ArrowRight } from 'lucide-react';

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
      color: 'bg-gradient-to-br from-blue-900 to-blue-800',
      textColor: 'text-white',
      featured: true
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
    <section className="py-20 bg-white/70" data-aos="fade-up" data-aos-duration="1200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-lg">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            OUR BEST SWIMMING POOL SERVICES FOR YOU!
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.color} ${service.textColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group`}
            >
              {/* Background Pattern for Featured Service */}
              {service.featured && (
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
                  <div className="absolute top-20 right-10 w-16 h-16 border border-white rounded-full"></div>
                  <div className="absolute bottom-10 left-20 w-12 h-12 border border-white rounded-full"></div>
                  <div className="absolute bottom-20 right-20 w-8 h-8 border border-white rounded-full"></div>
                </div>
              )}

              <div className="relative z-10">
                {/* Icon */}
                <div className={`${service.featured ? 'text-white' : 'text-blue-600'} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

                {/* Description */}
                <p className={`${service.featured ? 'text-white/90' : 'text-gray-600'} mb-6 leading-relaxed`}>
                  {service.description}
                </p>

                {/* Read More Link */}
                <div className="flex items-center space-x-2 group/link cursor-pointer">
                  <span className={`${service.featured ? 'text-white' : 'text-blue-600'} font-semibold`}>
                    Read More
                  </span>
                  <ArrowRight 
                    size={16} 
                    className={`${service.featured ? 'text-white' : 'text-blue-600'} transform group-hover/link:translate-x-1 transition-transform`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;