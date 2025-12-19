export const boats = [
  {
    id: 1,
    category: 'houseboat',
    title: 'Royal 2 Bedroom Premium',
    description: 'Perfect for couples. Includes AC bedroom, private deck, and full-time chef. Note: Prices vary depending on the number of guests , ride duration and season time .',
    image: '/boats/royal-2-bedroom/main.jpg',
    images: [
      '/boats/royal-2-bedroom/main.jpg',
      '/boats/royal-2-bedroom/bedroom-1.jpg',
      '/boats/royal-2-bedroom/bedroom-2.jpg',
      '/boats/royal-2-bedroom/dining.jpg',
      '/boats/royal-2-bedroom/bathroom.jpg'
    ],
    price: '₹19,000',
    capacity: '4-6 Guests',
    rating: 4.8,
    amenities: ['AC Room', 'Private Deck', 'Welcome Drink', 'Lunch/Dinner/Breakfast', 'TV & Music']
  },
  {
    id: 2,
    category: 'houseboat',
    title: '5 Bedroom Premium Boat',
    description: 'Ideal for families. Spacious living area and upper deck view. Note: Prices vary depending on the number of guests , ride duration and season time .',
    image: '/boats/5-bedroom/main-new.png',
    images: [
      '/boats/5-bedroom/main-new.png',
      '/boats/5-bedroom/bedroom-1.jpg',
      '/boats/5-bedroom/bedroom-2.jpg',
      '/boats/5-bedroom/corridor.jpg',
      '/boats/5-bedroom/lounge.jpg'
    ],
    price: '₹25,000',
    capacity: '10-14 Guests',
    rating: 4.7,
    amenities: ['AC Rooms', 'Upper Deck', 'Kerala Meals', 'Music System', 'Attached Bathrooms', '24/7 Power Backup']
  },
  {
    id: 3,
    category: 'shikara',
    title: 'Pearl of the East Shikara Cruise',
    description: 'Drift through the emerald backwaters in our premium open-air Shikara. Perfect for sunset views and village life exploration. Note: Rates start at ₹1,000/hr but vary by season and peak times - please check availability for today\'s best offer.',
    image: '/boats/shikara-pearl/main.jpg',
    images: [
      '/boats/shikara-pearl/main.jpg',
      '/boats/shikara-pearl/family.jpg',
      '/boats/shikara-pearl/interior.jpg',
      '/boats/shikara-pearl/sunset.jpg'
    ],
    price: '₹1,000/hr',
    capacity: '6-10 Guests',
    rating: 4.9,
    amenities: ['Seating Comfort', 'Life Jackets', 'Guide', 'Music System']
  },
  {
    id: 4,
    category: 'shikara',
    title: 'Varamben Cruise',
    description: 'Witness the serene village life and bird watching. Note: Rates start at ₹1,000/hr but vary by season and time - this is not a fixed rate.',
    image: '/boats/varamben/main.png',
    images: [
      '/boats/varamben/main.png',
      '/boats/varamben/1.png',
      '/boats/varamben/2.png',
      '/boats/varamben/3.png'
    ],
    price: '₹1,000/hr',
    capacity: '6-10 Guests',
    rating: 4.6,
    amenities: ['Seating Comfort', 'Guide', 'Music System']
  },
  {
    id: 5,
    category: 'speed-boat',
    title: 'Lake Thrill Rider',
    description: 'Enjoy a high-speed ride across Vembanad Lake. Note: Prices vary depending on the number of guests and ride duration.',
    image: '/boats/lake-thrill/main.jpg',
    images: [
      '/boats/lake-thrill/main.jpg',
      '/boats/lake-thrill/action.jpg',
      '/boats/lake-thrill/side-view.jpg',
      '/boats/lake-thrill/generated.png'
    ],
    price: '₹2,100',
    capacity: '7 Guests',
    rating: 4.8,
    amenities: ['Safety Gear', 'Expert Driver', 'Life Jackets', 'Music System', 'Sightseeing']
  },
  {
    id: 6,
    category: 'houseboat',
    title: '2 Bedroom Luxury',
    description: 'Luxurious houseboat experience with premium amenities. Perfect for small families or groups. Note: Prices vary depending on the number of guests , ride duration and season time .',
    image: '/boats/2-bedroom-luxury/main.jpg',
    images: [
      '/boats/2-bedroom-luxury/main.jpg',
      '/boats/2-bedroom-luxury/bedroom-1.jpg',
      '/boats/2-bedroom-luxury/bedroom-2.jpg',
      '/boats/2-bedroom-luxury/living-1.jpg',
      '/boats/2-bedroom-luxury/living-2.jpg'
    ],
    price: '₹30,000',
    capacity: '4-6 Guests',
    rating: 4.9,
    amenities: ['AC Rooms', 'Private Deck', 'Welcome Drink', 'Lunch/Dinner/Breakfast', 'TV & Music', 'Upper Deck']
  },
  {
    id: 7,
    category: 'kayaking',
    title: 'Backwater Kayaking Expedition',
    description: 'Explore the hidden canals and narrow waterways of Alleppey. Experience the village life up close in our premium kayaks. Note: Prices vary up and down depending on the season and time.',
    image: '/boats/kayak/main.jpg',
    images: [
      '/boats/kayak/main.jpg',
      '/boats/kayak/action.png',
      '/boats/kayak/scenic.png',
      '/boats/kayak/sunset.png'
    ],
    price: '₹1,500',
    capacity: '2 Guests',
    rating: 4.9,
    amenities: ['Life Jackets', 'Guide', 'Waterproof Bag', 'Refreshments']
  }
];

export const getBoatsByCategory = (category) => {
  return boats.filter(boat => boat.category === category);
};

export const getBoatById = (id) => {
  return boats.find(boat => boat.id === parseInt(id));
};
