import React from 'react';
import SEO from '../components/layout/SEO';

const Partnerships: React.FC = () => {
    return (
        <>
            <SEO
                title="Strategic Partnerships"
                description="Collaborating with international certification bodies, universities, and technology vendors to deliver world-class training."
                keywords="partnerships, strategic collaboration, ebanex partners, certification bodies, technology vendors"
            />
            <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-slate-950 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <header className="mb-12">
                        <h1 className="text-[clamp(2rem,5vw,3.75rem)] font-bold font-heading mb-6 text-white">
                            Strategic <span className="text-blue-500">Partnerships</span>
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl">
                            Collaborating with global leaders to deliver world-class training and solutions.
                        </p>
                    </header>
                    <div className="glass p-12 rounded-2xl border-white/5 text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">Under Development</h2>
                        <p className="text-slate-400">Information about our strategic partners and collaboration opportunities will be updated soon.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Partnerships;
