import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 relative overflow-hidden" data-aos="fade-up" data-aos-duration="1200">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Pool Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <span className="text-cyan-300 font-semibold text-lg">Products Offered</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 leading-tight">
              WE PROVIDE THE BEST POOL SERVICE FOR
              <br />
              <span className="text-cyan-300">YOUR DAILY LIFE STYLE!</span>
            </h2>
            
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              We are backed by a robust infrastructural base, which gives our professionals a number of facilities to keep smooth activities within the organization. With all infrastructural units at our support, procurement, quality testing, delivering and construction services are done in an uninterrupted manner.
            </p>

            <p className="text-white/80 leading-relaxed">
              Also, all procured goods are tested for possessing required attributes to avoid any error on our part. Working under the supervision of our quality controllers, we have given optimum level of satisfaction to our valued clients.
            </p>
          </div>

          {/* Right Content - Quote Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              GET A FREE QUOTE
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter Mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-4 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
              >
                <span>SUBMIT</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;