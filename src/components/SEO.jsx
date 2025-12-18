import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title ? `${title} | Yaami Holidays` : 'Yaami Holidays | Houseboat & Boat Rentals Alleppey'}</title>
      <meta name="description" content={description || "Premium boat booking services in Alleppey. Houseboats, Shikara rides, and Backwater adventures."} />
    </Helmet>
  );
};

export default SEO;
