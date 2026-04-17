import React from 'react';
import { ReactLenis } from 'lenis/react';
import { SEO } from '../components/layout';
import {
  NewsFeed,
} from '../features/news';

const News: React.FC = () => {
  return (
    <ReactLenis root>
      <SEO 
        title="News & Events | Ebanex International"
        description="Stay updated with Ebanex International's latest training announcements, webinars, and industry updates."
        keywords="news, events, webinars, training announcements, ebanex news"
        canonical="https://ebanexint.co.tz/news"
      />
      <main className="bg-black">
        <NewsFeed />
      </main>
    </ReactLenis>
  );
};

export default News;
