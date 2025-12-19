import React from 'react';
import { useParams } from 'react-router-dom';
import BoatCard from '../components/ui/BoatCard';
import { getBoatsByCategory } from '../data/boats';
import { Filter } from 'lucide-react';
import SEO from '../components/SEO';

const Category = () => {
  const { type } = useParams();
  const [boats, setBoats] = React.useState([]);
  const [showFilter, setShowFilter] = React.useState(false);
  const [priceRange, setPriceRange] = React.useState([0, 50000]);
  const [selectedCapacity, setSelectedCapacity] = React.useState('all');

  React.useEffect(() => {
    const fetchBoats = () => {
      try {
        const data = getBoatsByCategory(type);
        setBoats(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBoats();
    window.scrollTo(0, 0);
  }, [type]);

  // Filter Logic
  const filteredBoats = boats.filter(boat => {
    // Parse price (remove non-numeric chars)
    const parsedPrice = parseInt(boat.price.replace(/[^0-9]/g, ''));
    // If price is non-numeric (e.g. "Price varies"), treat as 0 or always show
    const price = isNaN(parsedPrice) ? 0 : parsedPrice;
    
    // Capacity check (simple check if string contains the number or 'all')
    const capacityMatch = selectedCapacity === 'all' || boat.capacity.includes(selectedCapacity);
    
    return price >= priceRange[0] && price <= priceRange[1] && capacityMatch;
  });

  // Beautify title
  const title = type?.replace('-', ' ');

  return (
    <div className="pt-28 pb-16 min-h-screen bg-yaami-black">
      <SEO title={`${title.charAt(0).toUpperCase() + title.slice(1)} Booking`} description={`Browse our premium ${title} options in Alleppey.`} />
      {/* Header */}
      <div className="container mx-auto px-6 mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 capitalize">
          <span className="text-yaami-gold capitalize">{title}</span> Booking
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Browse our selection of premium {title} options. Choose the one that suits your group size and budget.
        </p>
      </div>

      {/* Filter / Sort Bar */}
      <div className="container mx-auto px-6 mb-8">
         <div className="flex justify-between items-center border-b border-gray-800 pb-4">
            <div className="text-gray-400 text-sm">Showing {filteredBoats.length} Results</div>
            <button 
              onClick={() => setShowFilter(!showFilter)}
              className="flex items-center gap-2 text-yaami-gold text-sm font-medium hover:text-white transition-colors"
            >
                <Filter size={16} /> {showFilter ? 'Hide Filter' : 'Filter'}
            </button>
         </div>
         
         {/* Filter Panel */}
         {showFilter && (
            <div className="mt-4 p-6 bg-gray-900/50 rounded-lg border border-gray-800 grid md:grid-cols-2 gap-6 animate-fade-in-down">
                <div>
                    <label className="block text-gray-400 text-sm mb-2">Max Price: ₹{priceRange[1]}</label>
                    <input 
                        type="range" 
                        min="1000" 
                        max="50000" 
                        step="500"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                        className="w-full accent-yaami-gold h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>₹1000</span>
                        <span>₹50000</span>
                    </div>
                </div>

                <div>
                    <label className="block text-gray-400 text-sm mb-2">Capacity</label>
                    <select 
                        value={selectedCapacity}
                        onChange={(e) => setSelectedCapacity(e.target.value)}
                        className="w-full bg-gray-800 border border-gray-700 text-white rounded px-3 py-2 text-sm focus:outline-none focus:border-yaami-gold"
                    >
                        <option value="all">Any Capacity</option>
                        <option value="2">2 People</option>
                        <option value="4">4 People</option>
                        <option value="6">6 People</option>
                        <option value="8">8+ People</option>
                    </select>
                </div>
            </div>
         )}
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBoats.length > 0 ? (
          filteredBoats.map(boat => (
            <BoatCard 
              key={boat.id}
              id={boat.id}
              title={boat.title}
              image={boat.image}
              price={boat.price}
              capacity={boat.capacity}
              rating={boat.rating}
              nav={`/details/${boat.id}`}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-gray-500">
            No boats found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
