import React from 'react';

const CtaSection: React.FC = () => (
  <section className="py-32 relative">
    <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000')] bg-fixed bg-cover opacity-10 grayscale" />
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="glass p-20 rounded-sm border-white/5 text-center">
        <h2 className="text-5xl lg:text-7xl font-black font-heading mb-12 tracking-tighter text-white">
          SECURE YOUR <span className="text-purple-500">INSTITUTIONAL</span> LEGACY.
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <button className="h-16 px-12 bg-white text-slate-950 font-black uppercase tracking-widest text-sm hover:bg-purple-600 hover:text-white transition-all">
            Request Consultation
          </button>
          <button className="h-16 px-12 border border-white/20 font-black uppercase tracking-widest text-sm hover:bg-white hover:text-slate-950 transition-all text-white">
            Join Academy
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default CtaSection;

