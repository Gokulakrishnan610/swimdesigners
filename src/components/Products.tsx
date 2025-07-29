import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import Iridescence from './Iridescence';

const Products = () => {
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
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-blue-500 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-cyan-500 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
      </div>

      {/* Additional Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-cyan-600/5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/3 to-cyan-500/3"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Star size={16} />
            <span>Our Products</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Premium
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"> Pool Products</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of high-quality swimming pool equipment, accessories, and materials.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product Categories */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">🏊</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Pool Equipment</h3>
            <p className="text-gray-600 mb-6">
              Complete range of filtration systems, pumps, heaters, and essential pool equipment.
            </p>
            <button className="group/btn flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
              <span>Explore Products</span>
              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">🛡️</span>
              </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Safety Accessories</h3>
            <p className="text-gray-600 mb-6">
              Safety equipment, covers, alarms, and accessories to ensure pool safety.
            </p>
            <button className="group/btn flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
              <span>Explore Products</span>
              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>
              </div>

          <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">🧪</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Chemical Treatment</h3>
            <p className="text-gray-600 mb-6">
              Premium chemicals and treatment solutions for crystal clear, healthy pool water.
            </p>
            <button className="group/btn flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
              <span>Explore Products</span>
              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;