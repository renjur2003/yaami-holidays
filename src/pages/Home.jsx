import React from 'react';
import Hero from '../components/home/Hero';
import CategorySection from '../components/home/CategorySection';
import FeaturedOffers from '../components/home/FeaturedOffers';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <div>
      <SEO title="Home" description="Book premium houseboats, shikara rides, and kayak tours in Alleppey backwaters with Yaami Holidays." />
      <Hero />
      <CategorySection />
      <FeaturedOffers />
    </div>
  );
};

export default Home;
