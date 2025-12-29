import React from 'react';
import Hero from '../components/home/Hero';
import CategorySection from '../components/home/CategorySection';
import FeaturedOffers from '../components/home/FeaturedOffers';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <div>
      <SEO 
        title="Best Houseboat & Shikara Booking in Alleppey"
        description="Official booking for Yaami Holidays. Premium Alleppey Houseboats, Luxury Shikara Rides, and Kayaking Tours. Direct owners, best rates, and 24/7 service."
        keywords="Alleppey Houseboat Booking, Shikara Ride Alleppey, Best Houseboat Kerala, Kayaking Alappuzha, Yaami Holidays, Boat Rental"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Yaami Holidays",
          "image": "https://yaamiholidays.com/logo-round.png",
          "logo": "https://yaamiholidays.com/logo-round.png",
          "sameAs": [
            "https://www.instagram.com/yaamiholidays",
            "https://www.facebook.com/share/16scXgwW6B/?mibextid=wwXIfr"
          ],
          "description": "Premium Houseboat and Boat Rental Service in Alleppey",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Alleppey",
            "addressRegion": "Kerala",
            "addressCountry": "IN"
          },
          "priceRange": "$$",
          "telephone": "+917736243083",
          "url": "https://yaamiholidays.com"
        }}
      />
      <Hero />
      <CategorySection />
      <FeaturedOffers />
    </div>
  );
};

export default Home;
