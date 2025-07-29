import React from 'react';

const ServicesPage = () => (
  <div className="bg-gray-50">
    {/* Hero Banner */}
    <section className="relative h-[280px] sm:h-[340px] md:h-[400px] flex items-center justify-center overflow-hidden" data-aos="fade-down" data-aos-duration="1200">
      <img
        src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&fit=crop&w=1500&q=80"
        alt="Services Banner"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
      />
      <div className="absolute inset-0 bg-blue-900/60" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-2">Our Services</h1>
        <p className="text-base sm:text-lg md:text-xl text-blue-100 font-medium">What we offer at Veni Enterprises</p>
      </div>
      {/* Decorative wave */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#f9fafb" d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,58.7C672,43,768,21,864,16C960,11,1056,21,1152,32C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"/></svg>
    </section>

    {/* Services Sections */}
    <section className="max-w-5xl mx-auto px-2 sm:px-4 py-8 sm:py-12 space-y-8 sm:space-y-12">
      {/* Swimming Pool Consultant and Contractor */}
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 grid md:grid-cols-2 gap-6 sm:gap-8 items-center" data-aos="fade-up" data-aos-duration="1200">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-3 sm:mb-4">Swimming Pool Consultant and Contractor</h2>
          <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
            We offer a first class design & construction service for all type of swimming pools. In turnkey projects, we provide various services like concept design, working drawings and design, excavation, construction, swimming pool waterproofing, glass mosaic tiling, filtration plant installation and commissioning of swimming pool with maximum satisfaction of the money you have spent.
          </p>
          <ul className="list-disc pl-5 text-blue-800 space-y-1 text-sm sm:text-base">
            <li>Swimming Pool Designs</li>
            <li>Swimming Pool Consultation</li>
            <li>Swimming Pool Equipment</li>
          </ul>
        </div>
        <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border-4 border-white">
          <img src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&fit=crop&w=600&q=80" alt="Consultant" className="w-full h-48 sm:h-64 object-cover" />
        </div>
      </div>

      {/* Swimming Pool Equipments */}
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 grid md:grid-cols-2 gap-6 sm:gap-8 items-center" data-aos="fade-up" data-aos-duration="1200">
        <div className="order-2 md:order-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-3 sm:mb-4">Swimming Pool Equipments</h2>
          <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
            Veni Enterprises offers the following Pool Accessories: Pool Safety Equipment, Ladders, Lounge Chairs, Lighting Solution, Chemical Treatment. Pool accessories are a way to inject fun into your pool and its surrounding area. A diving board or even an inflatable water slide can add hours of endless fun to a summer day.
          </p>
          <ul className="list-disc pl-5 text-blue-800 space-y-1 text-sm sm:text-base">
            <li>Pool Equipments</li>
            <li>Readymade Swimming Pool</li>
            <li>Swimming Pool Tiles</li>
            <li>Swimming Pool Water Proofing</li>
          </ul>
        </div>
        <div className="order-1 md:order-2 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border-4 border-white">
          <img src="https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&fit=crop&w=600&q=80" alt="Equipments" className="w-full h-48 sm:h-64 object-cover" />
        </div>
      </div>

      {/* Swimming Pool Designs */}
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 grid md:grid-cols-2 gap-6 sm:gap-8 items-center" data-aos="fade-up" data-aos-duration="1200">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-3 sm:mb-4">Swimming Pool Designs</h2>
          <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
            We provide a wide range of swimming pool design ideas, including rooftop pools, in-ground pools, spa construction, and more. Our team specializes in modern swimming pool construction and designer services to bring your vision to life.
          </p>
          <ul className="list-disc pl-5 text-blue-800 space-y-1 text-sm sm:text-base">
            <li>Swimming Pool Construction</li>
            <li>Rooftop Swimming Pool Construction</li>
            <li>In Ground Pool</li>
            <li>Spa Construction Services</li>
            <li>Modern Swimming Pool Construction</li>
            <li>Swimming Pool Designer</li>
          </ul>
        </div>
        <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border-4 border-white">
          <img src="https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&fit=crop&w=600&q=80" alt="Pool Designs" className="w-full h-48 sm:h-64 object-cover" />
        </div>
      </div>
    </section>
  </div>
);

export default ServicesPage; 