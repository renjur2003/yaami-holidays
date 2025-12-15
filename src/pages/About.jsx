import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/about/hero-bg.png" 
            alt="Kerala Backwaters" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 mb-6"
          >
            About Yaami Holidays
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto font-light"
          >
            Curating unforgettable experiences in the heart of God's Own Country
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-600 to-yellow-900 opacity-30 blur-2xl rounded-full" />
            <img 
              src="/about/luxury-houseboat.png" 
              alt="Luxury Houseboat" 
              className="relative w-full rounded-2xl shadow-2xl border border-white/10"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair font-bold text-yellow-500 mb-6">Who We Are</h2>
            <p className="text-gray-300 leading-relaxed mb-6 font-light text-lg">
              Yaami Holidays is a premier tourism company based in Alappuzha, specializing in luxury houseboat cruises and authentic backwater experiences. We believe that travel is not just about visiting a place, but about immersing yourself in its soul.
            </p>
            <p className="text-gray-300 leading-relaxed font-light text-lg">
              With years of expertise in the industry, our fleet ranges from cozy one-bedroom romantic getaways to expansive multi-bedroom floating palaces, all equipped with modern amenities and staffed by experienced crew members dedicated to your comfort.
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-yellow-500 mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Fleet",
                description: "Our houseboats and shikaras are fastidiously maintained to ensure the highest standards of safety and luxury.",
                icon: "⛵"
              },
              {
                title: "Authentic Cuisine",
                description: "Savor the taste of Kerala with freshly prepared traditional dishes made from locally sourced ingredients.",
                icon: "🍛"
              },
              {
                title: "24/7 Support",
                description: "Our dedicated team is always available to assist you, ensuring a seamless and worry-free vacation.",
                icon: "🎧"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 hover:border-yellow-500/50 transition-colors duration-300 group"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">{item.title}</h3>
                <p className="text-gray-400 font-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
