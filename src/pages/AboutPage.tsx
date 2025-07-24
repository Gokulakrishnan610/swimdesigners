import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutPage = () => {
  // Dynamically import all product images
  const productImages = import.meta.glob('/src/assets/product/*.png', { eager: true });
  const imageEntries = Object.entries(productImages);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Banner */}
      <section className="relative h-[340px] md:h-[400px] flex items-center justify-center overflow-hidden" data-aos="fade-down" data-aos-duration="1200">
        <img
          src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&fit=crop&w=1500&q=80"
          alt="About Us Banner"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-blue-900/60" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-2">About us</h1>
          <p className="text-lg md:text-xl text-blue-100 font-medium">Get to know Veni Enterprises</p>
        </div>
        {/* Decorative wave */}
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#f9fafb" d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,58.7C672,43,768,21,864,16C960,11,1056,21,1152,32C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"/></svg>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-8 sm:py-12 grid md:grid-cols-2 gap-6 md:gap-10 items-center">
        {/* Info Block */}
        <div data-aos="fade-right" data-aos-duration="1200">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Veni Enterprises is a 2013 established service provider, supplier, trader and distributor of swimming pool construction and swimming pool accessories. Located at Tamil Nadu (India), we undertake turnkey projects for swimming pools. Our service areas include Swimming Pool Construction and Swimming Pool Designer Services. We have professed designers, engineers and construction experts, who work in close coordination to offer full designing, construction, and installation services to our clients in a committed time. From concept design, working drawings, excavation to construction and filtration plant installation, etc., all activities are carried out in most proficient manner by our industrial experts.
          </p>
          <div className="flex items-center space-x-6">
            <div className="bg-blue-800 text-white rounded-2xl px-6 py-4 shadow-lg flex flex-col items-center" data-aos="zoom-in" data-aos-delay="200">
              <span className="text-3xl md:text-4xl font-extrabold">25+</span>
              <span className="text-xs uppercase tracking-wider mt-1">Years Experience</span>
            </div>
            <div className="bg-white rounded-2xl px-6 py-4 shadow-lg flex flex-col items-center border border-blue-100" data-aos="zoom-in" data-aos-delay="400">
              <span className="text-3xl md:text-4xl font-extrabold text-blue-800">100%</span>
              <span className="text-xs uppercase tracking-wider mt-1 text-blue-800">Quality Service</span>
            </div>
          </div>
        </div>
        {/* Image Block */}
        <div className="flex flex-col gap-6" data-aos="fade-left" data-aos-duration="1200">
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <img src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&fit=crop&w=600&q=80" alt="Pool Service" className="w-full h-56 object-cover" />
          </div>
          <div className="flex gap-4">
            <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white w-1/2">
              <img src="https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&fit=crop&w=300&q=80" alt="Pool Cleaning" className="w-full h-32 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white w-1/2">
              <img src="https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&fit=crop&w=300&q=80" alt="Pool Maintenance" className="w-full h-32 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="max-w-4xl mx-auto px-4 pb-8 sm:pb-16" data-aos="fade-up" data-aos-duration="1200">
        <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">Domain Expertise</h3>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Serving our clients from different domains enables us to prove our excellence and become the leading service provider among our industrial contemporaries. Owing to our business expertise we specialize in providing excellent results through our designed swimming pools and other products. Understanding exact demands of our clients, our designers and other technicians strive to deliver services as per their requirements to provide optimum satisfaction. From planning, designing, construction and installation, all procedures are followed in a streamlined manner that proves our industrial credibility.
        </p>
        <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">Infrastructure & Quality</h3>
        <p className="text-gray-700 leading-relaxed">
          We are backed by a robust infrastructural base, which gives our professionals a number of facilities to keep smooth activities within the organization. With all infrastructural units at our support, procurement, quality testing, delivering and construction services are done in an uninterrupted manner. Also, all procured goods are tested for possessing required attributes to avoid any error on our part. Working under the supervision of our quality controllers, we have given optimum level of satisfaction to our valued clients.
        </p>
      </section>

      {/* Our Products Section */}
      <section className="max-w-6xl mx-auto px-4 pb-12 sm:pb-20" data-aos="fade-up" data-aos-duration="1200">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-10">Our Products</h2>
        <Slider {...sliderSettings}>
          {imageEntries.map(([path, module], index) => (
            <div
              key={path}
              className="bg-white rounded-2xl shadow-lg overflow-hidden p-4 flex items-center justify-center hover:shadow-xl transition-shadow duration-300 mx-2"
            >
              <img
                src={(module as any).default}
                alt={`Product ${index + 1}`}
                className="h-24 md:h-32 object-contain"
              />
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default AboutPage; 