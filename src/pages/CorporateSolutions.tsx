import React from 'react';
import SEO from '../components/layout/SEO';

const CorporateSolutions: React.FC = () => {
    return (
        <>
            <SEO
                title="Corporate & Institutional Solutions"
                description="Customized capacity-building and advisory solutions aligned with institutional strategies and workforce development goals."
                keywords="corporate training, institutional support, workforce development, organizational resilience, ebanex corporate"
            />
            <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-slate-950 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <header className="mb-12">
                        <h1 className="text-[clamp(2rem,5vw,3.75rem)] font-bold font-heading mb-6 text-white">
                            Corporate <span className="text-blue-500">Solutions</span>
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl">
                            Partnering with organizations to design and deliver customized capacity-building and advisory solutions.
                        </p>
                    </header>
                    <div className="glass p-12 rounded-2xl border-white/5 text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">Tailored for your Institution</h2>
                        <p className="text-slate-400">Detailed information about our corporate and institutional solutions will be available here.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CorporateSolutions;
