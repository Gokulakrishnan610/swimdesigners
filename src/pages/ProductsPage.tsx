import React from 'react';

// Example product data structure
const productData = [
  {
    category: 'Cleaning Accessories or Cleaning Equipment',
    products: [
      {
        name: 'Aluminium Vacuum Head 33cm',
        image: '/src/assets/product/17149969145446318.png',
        price: 'Rs - 3150 + 18% Tax',
        description: '',
      },
      {
        name: 'Aluminium vacuum head 45cm',
        image: '/src/assets/product/17149969145126421.png',
        price: 'Rs - 3960 + 18% Tax',
        description: '',
      },
      {
        name: 'Cleaning Hose 10mtr(Self Floating Hose)',
        image: '/src/assets/product/17149969144366520.png',
        price: 'Rs - 3050 + 18% Tax',
        description: '',
      },
      {
        name: 'Cleaning Hose 12mtr(Self Floating Hose)',
        image: '/src/assets/product/17149969143810816.png',
        price: 'Rs - 3450 + 18% Tax',
        description: '',
      },
      {
        name: 'Cleaning Hose 15mtr(Self Floating Hose)',
        image: '/src/assets/product/17149969143678623.png',
        price: 'Rs - 3960 + 18% Tax',
        description: '',
      },
      {
        name: 'Cleaning Hose 30mtr(Self Floating Hose)',
        image: '/src/assets/product/17149969143205417.png',
        price: 'Rs - 7840 + 18% Tax',
        description: '',
      },
      {
        name: 'Telescopic Handle 4.8Mtrs(2x2.4Mtrs)',
        image: '/src/assets/product/1714996914246122.png',
        price: 'Rs - 2870 + 18% Tax',
        description: '',
      },
      {
        name: 'Telescopic Handle 9.0Mtrs(3x3mtrs)',
        image: '/src/assets/product/1714996914456124.png',
        price: 'Rs - 5230 + 18% Tax',
        description: '',
      },
      {
        name: 'Plastic Straight 10” Brush',
        image: '/src/assets/product/1714996914851519.png',
        price: '',
        description: '',
      },
      {
        name: 'Algae Brush (Metal Brush)',
        image: '/src/assets/product/17149969132972212.png',
        price: 'Rs - 1140 + 18% Tax',
        description: '',
      },
      {
        name: 'Test Kit For Chlorine and Ph (Liquid Type)',
        image: '/src/assets/product/17149969132506711.png',
        price: 'Rs - 570 + 18% Tax',
        description: '',
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
        description: '',
      },
      {
        name: 'Tcca 90 (25Kgs Plastic Drum)',
        image: '/src/assets/product/1714996897487674.png',
        price: 'Rs - 175 + 18% Tax',
        description: '',
      },
    ],
  },
  // Add more categories and products as needed
];

const ProductsPage = () => (
  <div className="bg-gray-50">
    {/* Hero Banner */}
    <section className="relative h-[340px] md:h-[400px] flex items-center justify-center overflow-hidden" data-aos="fade-down" data-aos-duration="1200">
      <img
        src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&fit=crop&w=1500&q=80"
        alt="Products Banner"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
      />
      <div className="absolute inset-0 bg-blue-900/60" />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-2">Products</h1>
      </div>
      {/* Decorative wave */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#f9fafb" d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,58.7C672,43,768,21,864,16C960,11,1056,21,1152,32C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"/></svg>
    </section>

    {/* Product Categories */}
    <section className="max-w-7xl mx-auto px-4 py-12">
      {productData.map((cat, i) => (
        <div key={cat.category} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up" data-aos-delay={i * 100}>{cat.category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {cat.products.map((prod, j) => (
              <div
                key={prod.name}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-4 hover:shadow-2xl transition-shadow duration-300"
                data-aos="zoom-in"
                data-aos-delay={j * 80}
              >
                <img src={prod.image} alt={prod.name} className="h-32 object-contain mb-4" />
                <h3 className="text-lg font-semibold text-blue-900 mb-1 text-center">{prod.name}</h3>
                {prod.price && <p className="text-sm text-blue-700 font-medium mb-1 text-center">Price: {prod.price}</p>}
                {prod.description && <p className="text-xs text-gray-600 text-center">{prod.description}</p>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  </div>
);

export default ProductsPage; 