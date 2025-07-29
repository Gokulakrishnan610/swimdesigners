import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Praveen",
      text: "I like your pool, your work was completely finishable and awesome size...",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Mahesh G",
      text: "Veni Ent designed, They are very good in quality, sticking to design, timely delivery, and prompt after sales service support.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "John Rajkumar",
      text: "Good services and good technical support. Overall a good experience",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-white/70" data-aos="fade-up" data-aos-duration="1200">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our Testimonial
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative group cursor-pointer hover:scale-[1.02]"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-blue-200 group-hover:text-blue-300 transition-colors">
                <Quote size={24} className="sm:w-8 sm:h-8" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4 sm:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed italic text-sm sm:text-base">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-blue-200 group-hover:border-blue-400 transition-colors duration-300"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Satisfied Customer</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;