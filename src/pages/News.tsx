import React from 'react';
import SEO from '../components/layout/SEO';

const News: React.FC = () => {
    return (
        <>
            <SEO
                title="News & Events"
                description="Stay updated with Ebanex International's latest training announcements, webinars, and industry updates."
                keywords="news, events, webinars, training announcements, ebanex news"
            />
            <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-slate-950 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <header className="mb-12">
                        <h1 className="text-[clamp(2rem,5vw,3.75rem)] font-bold font-heading mb-6 text-white">
                            News & <span className="text-blue-500">Events</span>
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl">
                            Latest updates, webinars, and professional forums from Ebanex International.
                        </p>
                    </header>
                    <div className="glass p-12 rounded-2xl border-white/5 text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">Latest Updates</h2>
                        <p className="text-slate-400">Our news section is being updated with the latest events and announcements.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;
