import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'CONTACT US', path: '/contact' },
  ];

  return (
    <div className="fixed w-full z-50 top-0 left-0 transition-all duration-500">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm animate-slideDown">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 animate-fadeInLeft">
              <Phone size={16} className="animate-pulse" />
              <span>(491) -9176203070</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 animate-fadeInRight">
            <span className="hidden md:inline">Stay Connected :</span>
            <div className="flex space-x-2">
              <Facebook size={16} className="hover:text-blue-300 cursor-pointer transition-all duration-300 hover:scale-125 hover:rotate-12" />
              <Linkedin size={16} className="hover:text-blue-300 cursor-pointer transition-all duration-300 hover:scale-125 hover:rotate-12" />
              <Twitter size={16} className="hover:text-blue-300 cursor-pointer transition-all duration-300 hover:scale-125 hover:rotate-12" />
              <Instagram size={16} className="hover:text-blue-300 cursor-pointer transition-all duration-300 hover:scale-125 hover:rotate-12" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`w-full transition-all duration-500 ${
        isScrolled
          ? 'bg-white/30 backdrop-blur-lg border-b border-white/30 shadow-xl py-2'
          : 'bg-white/30 backdrop-blur-lg border-b border-white/30 shadow-xl py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center animate-fadeInLeft">
            <img src="/image/pic.png" alt="VENI ENTERPRISES Logo" className="h-16 w-auto object-contain" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 animate-fadeInUp">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 bg-blue-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 transform scale-110"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 animate-fadeInRight"
          >
            <div className="relative">
              {isMenuOpen ? (
                <X size={24} className="transform rotate-180 transition-transform duration-300" />
              ) : (
                <Menu size={24} className="transform transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="bg-white border-t px-4 py-4 space-y-4 shadow-lg">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 transform hover:translate-x-2 hover:scale-105 p-2 rounded-lg hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;