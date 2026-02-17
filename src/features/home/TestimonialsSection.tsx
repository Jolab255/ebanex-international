import React from 'react';

const TestimonialsSection: React.FC = () => (
  <section className="py-24 bg-slate-950/50 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <span className="text-purple-500 font-bold uppercase tracking-widest text-xs block mb-4">
          Success Stories
        </span>
        <h2 className="text-4xl font-black font-heading text-white">IMPACT & TESTIMONIALS</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass p-10 rounded-2xl border-white/5">
          <p className="text-slate-400 italic mb-8">
            &quot;Ebanex transformed our cybersecurity posture through rigorous training and strategic advisory. Their
            hands-on approach is unparalleled.&quot;
          </p>
          <div>
            <p className="font-bold text-white">Chief Information Security Officer</p>
            <p className="text-purple-500 text-sm">National Financial Institution</p>
          </div>
        </div>
        <div className="glass p-10 rounded-2xl border-white/5">
          <p className="text-slate-400 italic mb-8">
            &quot;The institutional capacity building programs delivered by Ebanex have significantly improved our
            operational efficiency and digital readiness.&quot;
          </p>
          <div>
            <p className="font-bold text-white">Director of Human Resources</p>
            <p className="text-purple-500 text-sm">Strategic Government Agency</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

