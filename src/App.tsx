import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Products from './components/Products';
import WhyChoose from './components/WhyChoose';
import Quote from './components/Quote';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import WaterWaveBackground from './components/WaterWaveBackground';
import EnhancedWaterEffect from './components/EnhancedWaterEffect';
import ReactWaterWaveComponent from './components/ReactWaterWave';
import PassiveWaterWave from './components/PassiveWaterWave';
import CustomWaterWave from './components/CustomWaterWave';
import NaturalWaterWave from './components/NaturalWaterWave';
//import Iridescence from './components/Iridescence';

function App() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    function updateHeaderHeight() {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    }
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    window.addEventListener('scroll', updateHeaderHeight);
    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
      window.removeEventListener('scroll', updateHeaderHeight);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen -mt-0">
        <div ref={headerRef}>
          <Header />
        </div>
        <div style={{ height: headerHeight }} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              {/* Natural Water Wave with jQuery.ripples */}
              <div className="fixed inset-0 -z-10 w-full h-full">
                <NaturalWaterWave
                  dropRadius={40}
                  perturbance={0.08}
                  resolution={1024}
                  interactive={true}
                  crossOrigin=""
                >
                  <div className="w-full h-full" />
                </NaturalWaterWave>
              </div>
              <About />
              <Services />
              <Gallery />
              <Testimonials />
              <Products />
              <WhyChoose />
              <Quote />
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;