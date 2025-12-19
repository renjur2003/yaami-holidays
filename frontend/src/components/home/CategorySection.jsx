import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'houseboat',
    title: 'Luxury Houseboats',
    description: 'Float through the backwaters in a premium air-conditioned houseboat with private chef.',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2069&auto=format&fit=crop',
    icon: '🚢'
  },
  {
    id: 'shikara',
    title: 'Shikara Rides',
    description: 'Intimate open-boat experience perfect for couples and small families to explore narrow canals.',
    image: '/shikara-card.png',
    icon: '🛶'
  },
  {
    id: 'speed-boat',
    title: 'Speed Boats',
    description: 'Thrill-seeking adventure across the vast Vembanad Lake.',
    image: '/speed-boat-card.png',
    icon: '🚤'
  },
  {
    id: 'kayaking',
    title: 'Kayaking',
    description: 'Paddle through the untouched village canals and experience local life up close.',
    image: '/kayak.jpg', // User uploaded
    icon: '🚣'
  }
];

const CategorySection = () => {
  return (
    <section id="categories" className="py-24 bg-yaami-black relative">
       {/* Background decorative elements */}
       <div className="absolute top-0 right-0 w-96 h-96 bg-yaami-gold/5 rounded-full blur-3xl -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
           <h4 className="text-yaami-gold uppercase tracking-widest text-sm font-semibold mb-2">Our Fleet</h4>
           <h2 className="text-4xl md:text-5xl font-serif text-white font-bold">Choose Your Experience</h2>
           <div className="w-24 h-1 bg-yaami-gold mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {categories.map((cat, index) => (
             <Link key={cat.id} to={`/category/${cat.id}`} className="group relative rounded-2xl overflow-hidden h-96 cursor-pointer">
                {/* Image */}
                <div className="absolute inset-0">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                   <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform origin-left duration-300">{cat.icon}</span>
                   <h3 className="text-2xl font-serif font-bold text-white mb-2">{cat.title}</h3>
                   <p className="text-gray-300 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                     {cat.description}
                   </p>
                   <div className="flex items-center gap-2 text-yaami-gold font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                     Explore Fleet <ArrowRight size={16} />
                   </div>
                </div>
             </Link>
           ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
