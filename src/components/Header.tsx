import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Facebook, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="fixed w-full z-50 top-0 left-0 transition-all duration-500">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-900/90 via-blue-800/90 to-cyan-800/90 backdrop-blur-md text-white py-2 px-4 text-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} className="text-cyan-300" />
              <span className="font-medium">+91 9176203070</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Mail size={14} className="text-cyan-300" />
              <span className="font-medium">veni.enter@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden lg:inline text-cyan-100 font-medium">Follow Us:</span>
            <div className="flex space-x-3">
              <Facebook size={16} className="hover:text-cyan-300 cursor-pointer transition-all duration-300 hover:scale-110" />
              <Linkedin size={16} className="hover:text-cyan-300 cursor-pointer transition-all duration-300 hover:scale-110" />
              <Twitter size={16} className="hover:text-cyan-300 cursor-pointer transition-all duration-300 hover:scale-110" />
              <Instagram size={16} className="hover:text-cyan-300 cursor-pointer transition-all duration-300 hover:scale-110" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`w-full transition-all duration-500 ${
        isScrolled
          ? 'bg-white/20 backdrop-blur-xl border-b border-white/20 shadow-lg py-2'
          : 'bg-white/10 backdrop-blur-lg border-b border-white/10 shadow-md py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600/90 to-cyan-500/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-white/20">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-white drop-shadow-lg">VENI ENTERPRISES</h1>
                <p className="text-xs text-white/80 font-medium">Swimming Pool Experts</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
              <Link
                key={item.name}
                to={item.path}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 relative group ${
                    isActive 
                      ? 'text-white bg-white/20 shadow-sm backdrop-blur-sm' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-cyan-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="bg-gradient-to-r from-blue-600/90 to-cyan-500/90 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 transform border border-white/20">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-white/10 transition-all duration-300"
          >
              {isMenuOpen ? (
              <X size={24} className="text-white" />
              ) : (
              <Menu size={24} className="text-white" />
              )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="bg-white/10 backdrop-blur-lg border-t border-white/10 px-4 py-6 space-y-2 shadow-lg">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
              <Link
                key={item.name}
                to={item.path}
                  className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-white bg-white/20 border-l-4 border-cyan-400' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </Link>
              );
            })}
            <div className="pt-4">
              <button className="w-full bg-gradient-to-r from-blue-600/90 to-cyan-500/90 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 border border-white/20">
                Get Quote
              </button>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;