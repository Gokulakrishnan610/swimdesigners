import React from 'react';
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter, Instagram, ArrowRight } from 'lucide-react';
const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT US', path: '/about' },
  { name: 'SERVICES', path: '/services' },
  { name: 'PRODUCTS', path: '/products' },
  { name: 'GALLERY', path: '/gallery' },
  { name: 'CONTACT US', path: '/contact' },
];
const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Products Offered */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">PRODUCTS OFFERED</h3>
            <p className="text-white/80 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              We offer world-class designing, construction and installation services for swimming pools. Find our offered services from below section. Swimming Pool Construction, Swimming Pool Services
            </p>
            <div className="flex space-x-4">
              <Facebook size={18} className="sm:w-5 sm:h-5 hover:text-blue-300 hover:scale-110 cursor-pointer transition-all duration-300" />
              <Twitter size={18} className="sm:w-5 sm:h-5 hover:text-blue-300 hover:scale-110 cursor-pointer transition-all duration-300" />
              <Linkedin size={18} className="sm:w-5 sm:h-5 hover:text-blue-300 hover:scale-110 cursor-pointer transition-all duration-300" />
              <Instagram size={18} className="sm:w-5 sm:h-5 hover:text-blue-300 hover:scale-110 cursor-pointer transition-all duration-300" />
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">LINKS</h3>
            <ul className="space-y-2 sm:space-y-3">
              {['HOME', 'ABOUT US', 'SERVICES', 'PRODUCTS', 'GALLERY', 'CONTACT US'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-white/80 hover:text-white transition-colors duration-200 flex items-center space-x-2 group text-sm sm:text-base"
                  >
                    <ArrowRight size={14} className="sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Offered */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">SERVICES OFFERED</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-300 mt-1 flex-shrink-0 sm:w-5 sm:h-5" />
                <div>
                  <p className="text-white/80 text-xs sm:text-sm">
                    <strong>ADDRESS :</strong> No.-18, Thiruverkadu Main Road, Opposite RMK Super Market, M.G.R.Puram, Ayapakkam, Chennai - 600077.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-300 sm:w-5 sm:h-5" />
                <p className="text-white/80 text-xs sm:text-sm">
                  <strong>PHONE :</strong> +91 9176203070 / 7358342429
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-300 sm:w-5 sm:h-5" />
                <p className="text-white/80 text-xs sm:text-sm">
                  <strong>MAIL :</strong> venienter@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">NEWSLETTER SIGNUP</h3>
            <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">
              Subscribe to Our Newsletter to get Important News, Amazing Offers & Inside Scoops:
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
              />
              <button className="bg-blue-700 hover:bg-blue-600 hover:shadow-lg px-4 sm:px-6 py-2 sm:py-3 rounded-r-lg transition-all duration-200">
                <ArrowRight size={16} className="sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-6">
          <p className="text-center text-white/60 text-xs sm:text-sm">
            Copyrights 2016 . Venis Enterprises. All Rights Reserved. Designed by{' '}
            <span className="text-blue-300">Veni Enterprises</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;