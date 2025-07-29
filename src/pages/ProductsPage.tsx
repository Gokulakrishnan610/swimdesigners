import React, { useState } from 'react';
import { Star, ArrowRight, Package, Shield, Zap, Award, Search, Filter } from 'lucide-react';
import Header from '../components/Header';
import Products from '../components/Products';
import Quote from '../components/Quote';
import Iridescence from '../components/Iridescence';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

const productData = [
  {
    category: 'Cleaning Accessories or Cleaning Equipment',
    products: [
      {
        name: 'Aluminium Vacuum Head 33cm',
        image: '/src/assets/product/17149969145446318.png',
        price: 'Rs - 3150 + 18% Tax',
          description: 'High-quality aluminium vacuum head for efficient pool cleaning',
      },
      {
        name: 'Aluminium vacuum head 45cm',
        image: '/src/assets/product/17149969145126421.png',
        price: 'Rs - 3960 + 18% Tax',
          description: 'Larger aluminium vacuum head for bigger pools',
      },
      {
        name: 'Cleaning Hose 10mtr(Self Floating Hose)',
        image: '/src/assets/product/17149969144366520.png',
        price: 'Rs - 3050 + 18% Tax',
          description: 'Self-floating cleaning hose for easy pool maintenance',
      },
      {
        name: 'Cleaning Hose 12mtr(Self Floating Hose)',
        image: '/src/assets/product/17149969143810816.png',
        price: 'Rs - 3450 + 18% Tax',
          description: 'Extended self-floating cleaning hose',
      },
      {
        name: 'Cleaning Hose 15mtr(Self Floating Hose)',
        image: '/src/assets/product/17149969143678623.png',
        price: 'Rs - 3960 + 18% Tax',
          description: 'Long self-floating cleaning hose for large pools',
      },
      {
        name: 'Cleaning Hose 30mtr(Self Floating Hose)',
        image: '/src/assets/product/17149969143205417.png',
        price: 'Rs - 7840 + 18% Tax',
          description: 'Extra long self-floating cleaning hose',
      },
      {
        name: 'Telescopic Handle 4.8Mtrs(2x2.4Mtrs)',
        image: '/src/assets/product/1714996914246122.png',
        price: 'Rs - 2870 + 18% Tax',
          description: 'Adjustable telescopic handle for pool cleaning',
      },
      {
        name: 'Telescopic Handle 9.0Mtrs(3x3mtrs)',
        image: '/src/assets/product/1714996914456124.png',
        price: 'Rs - 5230 + 18% Tax',
          description: 'Extended telescopic handle for deep pools',
      },
      {
          name: 'Plastic Straight 10" Brush',
        image: '/src/assets/product/1714996914851519.png',
          price: 'Contact for price',
          description: 'Plastic brush for gentle pool surface cleaning',
      },
      {
        name: 'Algae Brush (Metal Brush)',
        image: '/src/assets/product/17149969132972212.png',
        price: 'Rs - 1140 + 18% Tax',
          description: 'Metal brush for removing stubborn algae',
      },
      {
        name: 'Test Kit For Chlorine and Ph (Liquid Type)',
        image: '/src/assets/product/17149969132506711.png',
        price: 'Rs - 570 + 18% Tax',
          description: 'Professional water testing kit for chlorine and pH levels',
      },
    ],
  },
  {
    category: 'Swimming Pool Chemicals',
    products: [
      {
        name: 'Tcca 90 (50Kgs Plastic Drum)',
        image: '/src/assets/product/1714996897540279.png',
        price: 'Rs - 170 + 18% Tax',
          description: 'High-concentration chlorine tablets for pool sanitization',
      },
      {
        name: 'Tcca 90 (25Kgs Plastic Drum)',
        image: '/src/assets/product/1714996897487674.png',
        price: 'Rs - 175 + 18% Tax',
          description: 'Medium-size chlorine tablets for regular pool maintenance',
      },
    ],
  },
  ];

  const categories = ['All', ...productData.map(cat => cat.category)];

  const filteredProducts = productData
    .filter(cat => selectedCategory === 'All' || cat.category === selectedCategory)
    .flatMap(cat => cat.products)
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-0">
        {/* Iridescence Background */}
        <div className="absolute inset-0 opacity-60">
          <Iridescence 
            color={[0.3, 0.7, 1.0]} // Brighter blue color
            speed={0.8}
            amplitude={0.15}
            mouseReact={true}
          />
        </div>

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Products Background"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-cyan-700/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-blue-900/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-500 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-cyan-500 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Star size={16} />
            <span>Our Products</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Premium
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Pool Products</span>
            <br />
            & Equipment
          </h1>
          
          <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality swimming pool equipment, accessories, and materials for all your pool needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 transform flex items-center justify-center space-x-2">
              <span>Explore Products</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105">
              <span>Get Quote</span>
            </button>
          </div>
      </div>
    </section>

      {/* Products Listing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 relative overflow-hidden">
        {/* Iridescence Background for Products Section */}
        <div className="absolute inset-0 opacity-40">
          <Iridescence 
            color={[0.2, 0.5, 0.9]} // Brighter blue for better visibility
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
              <span>Product Catalog</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"> Products</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Browse through our comprehensive collection of pool equipment, chemicals, and accessories.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mt-8"></div>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:shadow-lg ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                        : 'bg-white/80 backdrop-blur-sm border border-white/50 hover:bg-white hover:shadow-lg'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Product Image */}
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {product.name}
                    </h3>
                    
                    {product.description && (
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {product.description}
                      </p>
                    )}

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-blue-600">
                        {product.price || 'Contact for price'}
                      </span>
                      
                      <button className="group/btn bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 transform flex items-center space-x-2 text-sm">
                        <span>Inquire</span>
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-400 to-gray-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Products Found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search terms or category filter.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Results Count */}
          {filteredProducts.length > 0 && (
            <div className="text-center mt-12">
              <p className="text-gray-600">
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                {searchTerm && ` matching "${searchTerm}"`}
              </p>
            </div>
          )}
        </div>
    </section>

      {/* Products Component */}
      <Products />

      {/* Quote Component */}
      <Quote />
  </div>
);
};

export default ProductsPage; 