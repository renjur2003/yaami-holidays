import React from 'react';
import Button from '../ui/Button';
import BookingModal from '../common/BookingModal';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image - Placeholder for Kerala Backwaters */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2532&auto=format&fit=crop')" 
        }}
      ></div>

      {/* Overlay - Gradient Black to Transparent to Gold Tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-yaami-black"></div>
      
      {/* Content */}
      <div className="relative h-full container mx-auto px-6 flex flex-col justify-center items-center text-center pt-20">
        <h5 className="text-yaami-gold font-serif text-xl md:text-2xl mb-4 tracking-widest animate-fade-in-up">WELCOME TO ALLEPPEY</h5>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight max-w-4xl drop-shadow-2xl">
          Book Your <span className="text-yaami-gold italic">Premium</span> Boat Experience
        </h1>
        
        {/* Subheading Categories */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-gray-300 text-sm md:text-lg mb-10 font-medium uppercase tracking-wide">
          <span>Houseboat</span>
          <span className="text-yaami-gold">•</span>
          <span>Shikara</span>
          <span className="text-yaami-gold">•</span>
          <span>Speed Boat</span>
          <span className="text-yaami-gold">•</span>
          <span>Kayaking</span>
        </div>

        {/* CTA */}
        <div className="flex flex-col md:flex-row gap-4">
          <Button variant="primary" className="text-lg px-8 py-4" onClick={() => setIsModalOpen(true)}>
            Book Your Ride
          </Button>
          <Button 
            variant="outline" 
            className="text-lg px-8 py-4 backdrop-blur-sm bg-black/30"
            onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Packages
          </Button>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-yaami-gold/70">
         <span className="text-xs tracking-widest uppercase mb-2 block">Scroll</span>
         <div className="w-[1px] h-12 bg-gradient-to-b from-yaami-gold to-transparent mx-auto"></div>
      </div>
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Hero;
