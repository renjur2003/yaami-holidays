import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url, type = 'website', schema }) => {
    const siteTitle = "Yaami Holidays | Premium Houseboat & Boat Rentals Alleppey";
    const siteDescription = "Experience the best of Alleppey with Yaami Holidays. Premium Houseboats, Shikara rides, and Kayaking. Book directly for the best rates.";
    
    // Construct full image URL if relative path is provided
    const metaImage = image ? (image.startsWith('http') ? image : `https://yaamiholidays.com${image}`) : 'https://yaamiholidays.com/logo-round.png';
    const metaUrl = url ? `https://yaamiholidays.com${url}` : 'https://yaamiholidays.com';

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title ? `${title} | Yaami Holidays` : siteTitle}</title>
            <meta name="description" content={description || siteDescription} />
            <meta name="keywords" content={keywords || "Alleppey Houseboats, Kerala Boat Booking, Shikara Ride, Kayaking Alleppey, Yaami Holidays"} />
            <link rel="canonical" href={metaUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:title" content={title || siteTitle} />
            <meta property="og:description" content={description || siteDescription} />
            <meta property="og:image" content={metaImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={metaUrl} />
            <meta name="twitter:title" content={title || siteTitle} />
            <meta name="twitter:description" content={description || siteDescription} />
            <meta name="twitter:image" content={metaImage} />

            {/* Structured Data (JSON-LD) */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
