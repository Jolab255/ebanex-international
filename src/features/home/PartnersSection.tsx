import React from 'react';

const PartnersSection: React.FC = () => (
  <section className="py-24 border-b border-white/5 bg-slate-950">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-600 block mb-4">
          Strategic &amp; Institutional Partners
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-40 hover:opacity-100 transition-opacity duration-700 items-center">
        {['GOVERNMENTAL', 'FINANCIAL', 'DEFENSE', 'INDUSTRIAL', 'ACADEMIC', 'GLOBAL'].map((label) => (
          <div
            key={label}
            className="text-center group p-4 border border-white/5 rounded-lg hover:border-purple-500/30 transition-all"
          >
            <div className="text-xl font-black font-heading tracking-tighter group-hover:text-white transition-colors text-slate-500">
              PARTNER
            </div>
            <div className="text-[10px] font-bold text-slate-600 mt-1">{label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;

