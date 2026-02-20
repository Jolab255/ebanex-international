import React from 'react';
import SEO from '../components/layout/SEO';

const Research: React.FC = () => {
    return (
        <>
            <SEO
                title="Research & Insights"
                description="Ebanex International's thought leadership, industry research publications, and cybersecurity trend analysis."
                keywords="cybersecurity research, industry insights, whitepapers, trend analysis, ebanex research"
            />
            <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-slate-950 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <header className="mb-12">
                        <h1 className="text-[clamp(2rem,5vw,3.75rem)] font-bold font-heading mb-6 text-white">
                            Research & <span className="text-blue-500">Insights</span>
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl">
                            Knowledge and thought leadership to drive institutional capacity building and cybersecurity resilience.
                        </p>
                    </header>
                    <div className="glass p-12 rounded-2xl border-white/5 text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
                        <p className="text-slate-400">Our latest research publications and industry insights will be available here shortly.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Research;
