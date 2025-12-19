import React from 'react';
import { Users, Star } from 'lucide-react';
import Button from './Button';
import { Link } from 'react-router-dom';

const BoatCard = ({ 
  id,
  title = "Premium Houseboat", 
  image, 
  price = "₹5,000", 
  nav = "/details/1",
  capacity = "2-4",
  rating = 4.8
}) => {
  return (
    <div className="group bg-yaami-dark rounded-xl overflow-hidden border border-gray-800 hover:border-yaami-gold/50 transition-all duration-300 hover:-translate-y-1 shadow-xl">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image || "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2069&auto=format&fit=crop"} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-yaami-gold text-sm font-medium">
          <Star size={14} fill="#D4AF37" /> {rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-yaami-gold transition-colors">{title}</h3>
        
        <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
          <div className="flex items-center gap-1">
            <Users size={16} className="text-yaami-gold" />
            <span>{capacity} Guests</span>
          </div>
          <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
          <div>All Meals Included</div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-xs text-gray-500 block">Starting from</span>
            <span className="text-lg font-bold text-white">{price}</span>
          </div>
          <Link to={nav}>
            <Button variant="outline" className="py-2 px-4 text-sm">View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BoatCard;
