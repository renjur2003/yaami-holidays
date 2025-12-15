import React from 'react';
import Button from '../ui/Button';
import { Tag, Clock } from 'lucide-react';
import BookingModal from '../common/BookingModal';

const FeaturedOffers = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedBoat, setSelectedBoat] = React.useState(null);
  const [initialMessage, setInitialMessage] = React.useState('');

  const handleBookNow = (boatType, message = '') => {
    setSelectedBoat(boatType);
    setInitialMessage(message);
    setIsModalOpen(true);
  };

  return (
    <section className="py-24 bg-yaami-dark border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12">
          <div>
             <h4 className="text-yaami-gold uppercase tracking-widest text-sm font-semibold mb-2">Exclusive Packages</h4>
             <h2 className="text-3xl md:text-4xl font-serif text-white font-bold">Limited Time Offers</h2>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">View All Offers</Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Offer Card 1 */}
          <div className="bg-black/50 border border-gray-800 rounded-2xl p-8 flex flex-col md:flex-row gap-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-yaami-gold text-black text-xs font-bold px-3 py-1 rounded-bl-lg z-10">Day Cruise Deal</div>
            
            <div className="w-full md:w-1/3 h-48 md:h-auto rounded-xl overflow-hidden shrink-0">
               <img 
                 src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2069&auto=format&fit=crop" 
                 alt="Honeymoon Package" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
               />
            </div>
            
            <div className="flex flex-col justify-center">
               <h3 className="text-2xl font-serif font-bold text-white mb-2">Romantic Honeymoon</h3>
               <p className="text-gray-400 text-sm mb-4">
                 Premium 1-bedroom Houseboat + Candle Light Dinner + Flower Decoration.
               </p>
               <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
                  <div className="flex items-center gap-1"><Clock size={14} /> 1 Days / 1 Night</div>
                  <div className="flex items-center gap-1 text-yaami-gold"><Tag size={14} /> Save ₹3000</div>
               </div>
               <Button onClick={() => handleBookNow('Houseboat', 'Enquiry for Exclusive Package: Romantic Honeymoon')} variant="primary" className="self-start text-sm py-2 px-5">Book Now</Button>
            </div>
          </div>

          {/* Offer Card 2 */}
          <div className="bg-black/50 border border-gray-800 rounded-2xl p-8 flex flex-col md:flex-row gap-6 relative overflow-hidden group">
             <div className="absolute top-0 right-0 bg-yaami-gold text-black text-xs font-bold px-3 py-1 rounded-bl-lg z-10">Day Cruise Deal</div>
             
             <div className="w-full md:w-1/3 h-48 md:h-auto rounded-xl overflow-hidden shrink-0">
               <img 
                 src="/shikara-sunset-offer.png" 
                 alt="Shikara Sunset" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
               />
            </div>
            
            <div className="flex flex-col justify-center">
               <h3 className="text-2xl font-serif font-bold text-white mb-2">Sunset Shikara Ride</h3>
               <p className="text-gray-400 text-sm mb-4">
                 3 Hour Evening Cruise + Tea & Snacks. Witness the magical sunset.
               </p>
               <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
                  <div className="flex items-center gap-1"><Clock size={14} /> 3 Hours</div>
                  <div className="flex items-center gap-1 text-yaami-gold"><Tag size={14} /> Special Price</div>
               </div>
               <Button onClick={() => handleBookNow('Shikara', 'Enquiry for Exclusive Package: Sunset Shikara Ride')} variant="primary" className="self-start text-sm py-2 px-5">Book Now</Button>
            </div>
          </div>
        </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedBoat={selectedBoat} 
        initialMessage={initialMessage}
      />
    </section>
  );
};

export default FeaturedOffers;
