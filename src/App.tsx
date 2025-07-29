import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import WhyChoose from './components/WhyChoose';
import Quote from './components/Quote';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import Iridescence from './components/Iridescence';

function App() {
  return (
    <Router>
      <div className="App relative min-h-screen">
        {/* Global Iridescence Background */}
        <div className="fixed inset-0 opacity-30 pointer-events-none z-0">
          <Iridescence 
            color={[0.15, 0.4, 0.8]} // More visible blue
            speed={0.4}
            amplitude={0.08}
            mouseReact={false}
          />
        </div>

        <Routes>
          <Route path="/" element={
            <div className="relative z-10">
              <Header />
              <Hero />
              <About />
              <Services />
              <Products />
              <Gallery />
              <Testimonials />
              <WhyChoose />
              <Quote />
              <Footer />
            </div>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;