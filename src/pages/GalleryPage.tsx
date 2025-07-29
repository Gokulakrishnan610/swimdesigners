import React, { useState } from 'react';
import { Star, ArrowRight, Image, Filter, X } from 'lucide-react';
import Header from '../components/Header';
import Gallery from '../components/Gallery';
import Iridescence from '../components/Iridescence';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ['All', 'Construction', 'Maintenance', 'Equipment', 'Completed Projects'];
  
  const galleryImages = [
    { src: '/src/assets/gallery/1714979680118782.jpg', category: 'Construction', title: 'Pool Construction Process' },
    { src: '/src/assets/gallery/1714979680378061.jpg', category: 'Completed Projects', title: 'Luxury Pool Design' },
    { src: '/src/assets/gallery/1714979680526163.jpg', category: 'Maintenance', title: 'Pool Maintenance Service' },
    { src: '/src/assets/gallery/17149796811085617.jpg', category: 'Equipment', title: 'Pool Equipment Installation' },
    { src: '/src/assets/gallery/1714979681127035.jpg', category: 'Completed Projects', title: 'Modern Pool Design' },
    { src: '/src/assets/gallery/1714979681127176.jpg', category: 'Construction', title: 'Construction Site' },
    { src: '/src/assets/gallery/1714979681132747.jpg', category: 'Maintenance', title: 'Water Treatment' },
    { src: '/src/assets/gallery/1714979681147848.jpg', category: 'Equipment', title: 'Filtration System' },
    { src: '/src/assets/gallery/1714979681232220.jpg', category: 'Completed Projects', title: 'Residential Pool' },
    { src: '/src/assets/gallery/17149796812531812.jpg', category: 'Construction', title: 'Foundation Work' },
    { src: '/src/assets/gallery/17149796812797510.jpg', category: 'Maintenance', title: 'Cleaning Service' },
    { src: '/src/assets/gallery/17149796813071711.jpg', category: 'Equipment', title: 'Safety Equipment' },
    { src: '/src/assets/gallery/17149796813495914.jpg', category: 'Completed Projects', title: 'Commercial Pool' },
    { src: '/src/assets/gallery/17149796813695418.jpg', category: 'Construction', title: 'Tiling Process' },
    { src: '/src/assets/gallery/17149796813877015.jpg', category: 'Maintenance', title: 'Chemical Balance' },
    { src: '/src/assets/gallery/1714979681401404.jpg', category: 'Equipment', title: 'Heating System' },
    { src: '/src/assets/gallery/17149796814424616.jpg', category: 'Completed Projects', title: 'Infinity Pool' },
    { src: '/src/assets/gallery/1714979681480119.jpg', category: 'Construction', title: 'Structural Work' },
    { src: '/src/assets/gallery/1714979681704619.jpg', category: 'Maintenance', title: 'Equipment Service' },
    { src: '/src/assets/gallery/1714984715117326.jpg', category: 'Completed Projects', title: 'Luxury Villa Pool' },
    { src: '/src/assets/gallery/17149847151329728.jpg', category: 'Construction', title: 'Excavation Work' },
    { src: '/src/assets/gallery/17149847151685227.jpg', category: 'Maintenance', title: 'Water Testing' },
    { src: '/src/assets/gallery/17149847152228122.jpg', category: 'Equipment', title: 'Automation System' },
    { src: '/src/assets/gallery/17149847152680625.jpg', category: 'Completed Projects', title: 'Hotel Pool' },
    { src: '/src/assets/gallery/17149847152689930.jpg', category: 'Construction', title: 'Plumbing Work' },
    { src: '/src/assets/gallery/17149847152905229.jpg', category: 'Maintenance', title: 'Filter Cleaning' },
    { src: '/src/assets/gallery/17149847153819823.jpg', category: 'Equipment', title: 'Lighting System' },
    { src: '/src/assets/gallery/17149847153875734.jpeg', category: 'Completed Projects', title: 'Spa Pool' },
    { src: '/src/assets/gallery/1714984715418436.jpeg', category: 'Construction', title: 'Finishing Work' },
    { src: '/src/assets/gallery/17149847154703331.jpeg', category: 'Maintenance', title: 'Seasonal Service' },
    { src: '/src/assets/gallery/17149847154781524.jpg', category: 'Equipment', title: 'Control Panel' },
    { src: '/src/assets/gallery/17149847164164345.jpeg', category: 'Completed Projects', title: 'Private Pool' }
  ];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-0">
        {/* Iridescence Background */}
        <div className="absolute inset-0 opacity-40">
          <Iridescence 
            color={[0.2, 0.5, 0.9]} // Blue color
            speed={0.6}
            amplitude={0.1}
            mouseReact={true}
          />
        </div>

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Gallery Background"
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
            <span>Our Gallery</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Project
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Gallery</span>
          </h1>
          
          <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
            Explore our portfolio of completed projects, construction processes, and maintenance services showcasing our expertise and quality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 transform flex items-center justify-center space-x-2">
              <span>View Gallery</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105">
              <span>Get Quote</span>
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Filter Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 relative overflow-hidden">
        {/* Iridescence Background */}
        <div className="absolute inset-0 opacity-25">
          <Iridescence 
            color={[0.15, 0.4, 0.8]} // Blue color
            speed={0.4}
            amplitude={0.08}
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
              <span>Project Portfolio</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"> Work</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Browse through our extensive collection of completed projects, construction processes, and maintenance services.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mt-8"></div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:shadow-lg flex items-center space-x-2 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                    : 'bg-white/80 backdrop-blur-sm border border-white/50 hover:bg-white hover:shadow-lg'
                }`}
              >
                <Filter size={16} />
                <span>{category}</span>
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="font-semibold text-sm">{image.title}</h3>
                    <p className="text-xs text-white/80">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center mt-12">
            <p className="text-gray-600">
              Showing {filteredImages.length} image{filteredImages.length !== 1 ? 's' : ''}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="w-full h-auto max-h-[90vh] object-contain rounded-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}

      {/* Gallery Component */}
      <Gallery />
    </div>
  );
};

export default GalleryPage; 