import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Dynamically import all gallery images
  const galleryImagesImport = import.meta.glob('/src/assets/gallery/*.{jpg,jpeg,png}', { eager: true });
  const galleryImageEntries = Object.entries(galleryImagesImport).sort(([a], [b]) => a.localeCompare(b));
  
  // Use actual gallery images if available, otherwise fallback to placeholder images
  const galleryImages = galleryImageEntries.length > 0 
    ? galleryImageEntries.map(([path, mod], index) => ({
        src: (mod as any).default,
        alt: `Gallery Image ${index + 1}`
      }))
    : [
        {
          src: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800",
          alt: "Modern Pool Design"
        },
        {
          src: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=800",
          alt: "Luxury Resort Pool"
        },
        {
          src: "https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&cs=tinysrgb&w=800",
          alt: "Night Pool Lighting"
        },
        {
          src: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800",
          alt: "Infinity Pool"
        },
        {
          src: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800",
          alt: "Pool Construction"
        },
        {
          src: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=800",
          alt: "Pool Maintenance"
        },
        {
          src: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800",
          alt: "Custom Pool Design"
        },
        {
          src: "https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&cs=tinysrgb&w=800",
          alt: "Pool Equipment"
        }
      ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section className="py-12 sm:py-20 bg-white/70" data-aos="fade-up" data-aos-duration="1200">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our Gallery
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/400x300?text=Gallery+Image';
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
                      <span className="text-sm sm:text-xl">+</span>
                    </div>
                    <p className="text-xs sm:text-sm">View Image</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white hover:text-gray-300 hover:scale-110 transition-all duration-200"
              >
                <X size={24} className="sm:w-8 sm:h-8" />
              </button>

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 hover:scale-110 transition-all duration-200"
              >
                <ChevronLeft size={24} className="sm:w-8 sm:h-8" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 hover:scale-110 transition-all duration-200"
              >
                <ChevronRight size={24} className="sm:w-8 sm:h-8" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm sm:text-base">
                {selectedImage + 1} / {galleryImages.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;