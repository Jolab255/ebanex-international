import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    canonical?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, canonical }) => {
    const siteTitle = 'Ebanex International';
    const fullTitle = `${title} | ${siteTitle}`;

    return (
        <HelmetProvider>
            <Helmet>
                <title>{fullTitle}</title>
                <meta name="description" content={description} />
                {keywords && <meta name="keywords" content={keywords} />}
                <meta property="og:title" content={fullTitle} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={fullTitle} />
                <meta name="twitter:description" content={description} />
                {canonical && <link rel="canonical" href={canonical} />}
            </Helmet>
        </HelmetProvider>
    );
};

export default SEO;
