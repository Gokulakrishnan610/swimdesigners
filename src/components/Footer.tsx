import React from 'react';
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter, Instagram, ArrowRight, Star, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Pool Design & Consultation',
    'Pool Construction',
    'Equipment & Accessories',
    'Maintenance Services',
    'Waterproofing Solutions',
    'Spa Construction'
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-500 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-cyan-500 rounded-full"></div>
      </div>

      {/* Additional Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-cyan-600/10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-cyan-500/5"></div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">VENI ENTERPRISES</h3>
                <p className="text-sm text-gray-300">Swimming Pool Experts</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of premium swimming pool design, construction, and maintenance services. 
              Creating extraordinary swimming experiences since 2013.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg">
                <Facebook size={18} />
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg">
                <Twitter size={18} />
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg">
                <Linkedin size={18} />
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg">
                <Instagram size={18} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
              <ArrowRight size={20} className="text-cyan-400" />
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <div className="w-1 h-1 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
              <Shield size={20} className="text-cyan-400" />
              <span>Our Services</span>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <div className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2 group cursor-pointer">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-sm">{service}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
              <Clock size={20} className="text-cyan-400" />
              <span>Contact Info</span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    No. 18, Thiruverkadu Main Road, Opposite RMK Super Market, M.G.R.Puram, Ayapakkam, Chennai - 600077
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Phone size={16} />
                </div>
                <p className="text-gray-300 text-sm">
                  +91 9176203070 / 7358342429
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Mail size={16} />
                </div>
                <p className="text-gray-300 text-sm">
                  veni.enter@gmail.com
                </p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4 flex items-center space-x-2">
                <Star size={16} className="text-cyan-400" />
                <span>Newsletter</span>
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Subscribe for updates and special offers
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <button className="bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 rounded-r-xl hover:shadow-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-gray-700">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">11+</div>
            <div className="text-gray-300 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-gray-300 text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">250+</div>
            <div className="text-gray-300 text-sm">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">4.9</div>
            <div className="text-gray-300 text-sm">Customer Rating</div>
          </div>
        </div> */}
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Veni Enterprises. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
              <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Terms of Service</span>
              <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Cookie Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;