import React from 'react';
import SEO from '../components/layout/SEO';

const Careers: React.FC = () => {
    return (
        <>
            <SEO
                title="Careers"
                description="Join Ebanex International. Explore opportunities for professional trainers, consulting specialists, and internships."
                keywords="careers, jobs, ebanex careers, professional trainers, consulting jobs, internships"
            />
            <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-slate-950 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <header className="mb-12">
                        <h1 className="text-[clamp(2rem,5vw,3.75rem)] font-bold font-heading mb-6 text-white">
                            Join <span className="text-blue-500">Ebanex</span>
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl">
                            Build your career with a global leader in professional development and institutional advisory.
                        </p>
                    </header>
                    <div className="glass p-12 rounded-2xl border-white/5 text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">Open Positions</h2>
                        <p className="text-slate-400">We are currently updating our job listings. Please check back soon for opportunities.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Careers;
