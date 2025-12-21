import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    // You could also open WhatsApp with the message here
    const text = `Name: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/918547964084?text=${text}`, '_blank');
  };

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Yaami Holidays for booking enquiries. Call +91 85479 64084 or visit our office in Alleppey."
        keywords="Contact Yaami Holidays, Houseboat Booking Number, Alleppey Tourism Contact, Boat Rental Phone"
      />
       {/* Hero Section */}
       <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/contact/hero-bg.png" 
            alt="Kerala Backwaters" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto font-light"
          >
            Get in touch to plan your perfect getaway
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair font-bold text-yellow-500 mb-8">Get In Touch</h2>
            <p className="text-gray-300 mb-12 text-lg font-light leading-relaxed">
              Have questions about our houseboats, packages, or booking process? We're here to help! Reach out to us through any of the channels below.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-full bg-yellow-900/20 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors duration-300">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">Office Address</h3>
                  <p className="text-gray-400 font-light">
                  Chungam Outpost, Pallathuruthy,<br />
                  Alappuzha, Kerala – 688011
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-full bg-yellow-900/20 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors duration-300">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">Phone</h3>
                  <p className="text-gray-400 font-light text-lg">+91 85479 64084</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-full bg-yellow-900/20 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors duration-300">
                  <span className="text-2xl">✉️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">Email</h3>
                  <p className="text-gray-400 font-light text-lg">yaamiholidays@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-zinc-900 p-8 rounded-2xl border border-white/5 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-yellow-500 text-sm font-semibold mb-2 ml-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-zinc-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors duration-300 hover:border-white/20"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-yellow-500 text-sm font-semibold mb-2 ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-zinc-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors duration-300 hover:border-white/20"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-yellow-500 text-sm font-semibold mb-2 ml-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-zinc-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors duration-300 hover:border-white/20"
                  placeholder="Inquiry Subject"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-yellow-500 text-sm font-semibold mb-2 ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-zinc-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors duration-300 hover:border-white/20 resize-none"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold py-4 rounded-lg shadow-lg hover:shadow-yellow-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
