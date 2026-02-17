import React from 'react';

const TestimonialsSection: React.FC = () => (
  <section className="py-12 sm:py-16 lg:py-24 bg-slate-950/50 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <span className="text-purple-500 font-bold uppercase tracking-widest text-[clamp(0.625rem,1.5vw,0.75rem)] block mb-3 sm:mb-4">
          Success Stories
        </span>
        <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-black font-heading text-white whitespace-nowrap">IMPACT &amp; TESTIMONIALS</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        <div className="glass p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl border-white/5">
          <p className="text-slate-400 italic mb-6 sm:mb-8 text-sm sm:text-base">
            &quot;Ebanex transformed our cybersecurity posture through rigorous training and strategic advisory. Their
            hands-on approach is unparalleled.&quot;
          </p>
          <div>
            <p className="font-bold text-white text-sm sm:text-base">Chief Information Security Officer</p>
            <p className="text-purple-500 text-xs sm:text-sm">National Financial Institution</p>
          </div>
        </div>
        <div className="glass p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl border-white/5">
          <p className="text-slate-400 italic mb-6 sm:mb-8 text-sm sm:text-base">
            &quot;The institutional capacity building programs delivered by Ebanex have significantly improved our
            operational efficiency and digital readiness.&quot;
          </p>
          <div>
            <p className="font-bold text-white text-sm sm:text-base">Director of Human Resources</p>
            <p className="text-purple-500 text-xs sm:text-sm">Strategic Government Agency</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

