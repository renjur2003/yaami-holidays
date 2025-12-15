import axios from 'axios';

const newBoats = [
  {
    category: 'kayaking',
    title: 'Sunrise Kayak Expedition',
    description: 'Paddle through the morning mist in the narrow canals of Kainakary.',
    image: 'https://images.unsplash.com/photo-1544551763-46a8723ba3f9?q=80&w=2074&auto=format&fit=crop',
    price: '800', 
    capacity: '1 Person',
    rating: 4.9,
    amenities: ['Life Jacket', 'Trainer', 'Water Bottle', 'Waterproof Bag']
  },
  {
    category: 'kayaking',
    title: 'Couple Kayaking Adventure',
    description: 'Double kayak experience perfect for couples to explore at their own pace.',
    image: 'https://images.unsplash.com/photo-1520116468816-95b69f847357?q=80&w=2069&auto=format&fit=crop',
    price: '1500', 
    capacity: '2 People',
    rating: 4.8,
    amenities: ['Double Kayak', 'Safety Gear', 'Map Guide', 'GoPro (Optional)']
  },
  {
    category: 'motor-boat',
    title: 'Group Motor Boat Cruise',
    description: 'Cover more distance and see the best of Alleppey in less time.',
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2069&auto=format&fit=crop',
    price: '1200',
    capacity: '10 Guests',
    rating: 4.5,
    amenities: ['Music System', 'Roof Cover', 'Local Guide', 'Life Vests']
  },
  {
    category: 'motor-boat',
    title: 'Private Speed Motor Tour',
    description: 'Exclusive boat for small families to visit Pathiramanal Island.',
    image: 'https://images.unsplash.com/photo-1567606400611-e633d7b42025?q=80&w=1972&auto=format&fit=crop',
    price: '2000',
    capacity: '5 Guests',
    rating: 4.7,
    amenities: ['Comfort Seating', 'Island Stopover', 'Snacks']
  }
];

const seedBoats = async () => {
    console.log('Seeding Kayaking and Motor Boats (Robust Mode)...');
    let successCount = 0;
    
    for (const boat of newBoats) {
        try {
            await axios.post('http://localhost:5000/api/boats', boat);
            console.log(`[SUCCESS] Added: ${boat.title}`);
            successCount++;
        } catch (error) {
            console.error(`[FAILED] ${boat.title}:`, error.response ? error.response.data : error.message);
        }
    }
    console.log(`Seeding complete! ${successCount}/${newBoats.length} added.`);
};

seedBoats();
