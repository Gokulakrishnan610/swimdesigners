import React, { useState } from 'react';
import { Mail, MapPin, Phone, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[340px] md:h-[400px] flex items-center justify-center overflow-hidden" data-aos="fade-down" data-aos-duration="1200">
        <img
          src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&fit=crop&w=1500&q=80"
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-blue-900/60" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-2">Contact Us</h1>
          <p className="text-lg md:text-xl text-blue-100 font-medium">We'd love to hear from you!</p>
        </div>
        {/* Decorative wave */}
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#f9fafb" d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,58.7C672,43,768,21,864,16C960,11,1056,21,1152,32C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"/></svg>
      </section>

      {/* Contact Section */}
      <section className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8" data-aos="fade-right" data-aos-duration="1200">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Send us a message</h2>
          {submitted ? (
            <div className="text-green-600 font-semibold text-lg">Thank you for contacting us!</div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-blue-900 font-medium mb-1">Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="block text-blue-900 font-medium mb-1">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="block text-blue-900 font-medium mb-1">Phone</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="block text-blue-900 font-medium mb-1">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={4} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400" />
              </div>
              <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 shadow-lg">Send Message</button>
            </form>
          )}
        </div>
        {/* Contact Info */}
        <div className="space-y-8" data-aos="fade-left" data-aos-duration="1200">
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-700" />
              <span className="text-blue-900 font-medium">No: 18, Thiruverkadu Main Road, Opposite RMK Super Market, M.G.R.Puram, Ayapakkam, Chennai - 600077</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-blue-700" />
              <span className="text-blue-900 font-medium">+91 9176203070 / 7358342429</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-blue-700" />
              <span className="text-blue-900 font-medium">veni.enter@gmail.com</span>
            </div>
          </div>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#" className="text-blue-700 hover:text-blue-900"><Facebook size={28} /></a>
            <a href="#" className="text-blue-700 hover:text-blue-900"><Linkedin size={28} /></a>
            <a href="#" className="text-blue-700 hover:text-blue-900"><Twitter size={28} /></a>
            <a href="#" className="text-blue-700 hover:text-blue-900"><Instagram size={28} /></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 