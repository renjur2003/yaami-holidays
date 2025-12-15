import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title} | Yaami Holidays</title>
      <meta name="description" content={description || "Premium boat booking services in Alleppey. Houseboats, Shikara, and more."} />
    </Helmet>
  );
};

export default SEO;
