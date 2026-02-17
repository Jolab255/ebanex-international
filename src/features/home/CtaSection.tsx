import React from 'react';

const CtaSection: React.FC = () => (
  <section className="py-16 sm:py-24 lg:py-32 relative">
    <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000')] bg-fixed bg-cover opacity-10 grayscale" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
      <div className="glass p-8 sm:p-12 lg:p-16 xl:p-20 rounded-lg sm:rounded-sm border-white/5 text-center">
        <h2 className="text-[clamp(1.5rem,5vw,4.5rem)] font-black font-heading mb-8 sm:mb-12 tracking-tighter text-white whitespace-nowrap">
          SECURE YOUR <span className="text-purple-500">INSTITUTIONAL</span> LEGACY.
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
          <button className="h-12 sm:h-14 lg:h-16 px-6 sm:px-8 lg:px-12 bg-white text-slate-950 font-black uppercase tracking-widest text-xs sm:text-sm hover:bg-purple-600 hover:text-white transition-all">
            Request Consultation
          </button>
          <button className="h-12 sm:h-14 lg:h-16 px-6 sm:px-8 lg:px-12 border border-white/20 font-black uppercase tracking-widest text-xs sm:text-sm hover:bg-white hover:text-slate-950 transition-all text-white">
            Join Academy
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default CtaSection;

