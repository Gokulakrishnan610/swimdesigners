import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const GalleryPage = () => {
  // Dynamically import all gallery images (jpg, jpeg, png)
  const galleryImages = import.meta.glob('/src/assets/gallery/*.{jpg,jpeg,png}', { eager: true });
  // Sort images by filename for consistency
  const imageEntries = Object.entries(galleryImages).sort(([a], [b]) => a.localeCompare(b));
  const imageUrls = imageEntries.map(([_, mod]) => (mod as any).default);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[280px] sm:h-[340px] md:h-[400px] flex items-center justify-center overflow-hidden" data-aos="fade-down" data-aos-duration="1200">
        <img
          src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&fit=crop&w=1500&q=80"
          alt="Gallery Banner"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-blue-900/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-2">Gallery</h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 font-medium">Our Work & Projects</p>
        </div>
        {/* Decorative wave */}
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#f9fafb" d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,58.7C672,43,768,21,864,16C960,11,1056,21,1152,32C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"/></svg>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-2 sm:px-4 py-8 sm:py-12">
        {/* Masonry style */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-3 sm:gap-4 [column-fill:_balance]">
          {imageEntries.map(([path, mod], i) => (
            <div
              key={path}
              className="mb-3 sm:mb-4 break-inside-avoid relative group overflow-hidden rounded-lg sm:rounded-2xl shadow-lg cursor-pointer"
              data-aos="zoom-in-up"
              data-aos-delay={i * 60}
              onClick={() => { setOpen(true); setIndex(i); }}
            >
              <img
                src={(mod as any).default}
                alt={`Gallery ${i + 1}`}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                style={{ aspectRatio: '4/3' }}
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3 sm:p-4">
                <span className="text-white text-sm sm:text-lg font-semibold drop-shadow-lg">Photo {i + 1}</span>
              </div>
            </div>
          ))}
        </div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={imageUrls.map((src) => ({ src }))}
          on={{ view: ({ index: i }) => setIndex(i) }}
        />
      </section>
    </div>
  );
};

export default GalleryPage; 