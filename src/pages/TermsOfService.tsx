import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/layout';
import { Squares } from '../components/animations';

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white pt-24 pb-16">
      <SEO 
        title="Terms of Service | Ebanex International"
        description="Terms and conditions for utilizing Ebanex International's training and advisory services."
        canonical="https://ebanexint.co.tz/terms"
      />
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Squares speed={0.1} squareSize={40} direction="diagonal" borderColor="rgba(255,255,255,0.05)" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0a1628] border-[10px] border-black p-8 sm:p-12 shadow-[20px_20px_0px_0px_rgba(0,196,212,0.1)]"
          style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}
        >
          <h1 className="text-3xl sm:text-5xl font-black uppercase mb-8 tracking-tighter border-b-4 border-[#00BFFF] inline-block">Terms of Service</h1>
          
          <div className="space-y-8 text-white/80 font-medium leading-relaxed uppercase tracking-widest text-[11px]">
            <section>
              <h2 className="text-[#00BFFF] font-black text-lg mb-4">1. Engagement</h2>
              <p>By accessing Ebanex International services, you agree to comply with our institutional protocols and professional standards. Our training and advisory solutions are delivered under strict confidentiality and excellence guidelines.</p>
            </section>

            <section>
              <h2 className="text-[#00BFFF] font-black text-lg mb-4">2. Intellectual Property</h2>
              <p>All curricula, training materials, and advisory frameworks are the exclusive intellectual property of Ebanex International. Unauthorized duplication or distribution is prohibited by institutional protocol and international law.</p>
            </section>

            <section>
              <h2 className="text-[#00BFFF] font-black text-lg mb-4">3. Service Delivery</h2>
              <p>Ebanex International reserves the right to modify training delivery formats (classroom, virtual, hybrid) to ensure optimal results and compliance with global safety or operational standards.</p>
            </section>

            <section>
              <h2 className="text-[#00BFFF] font-black text-lg mb-4">4. Liability</h2>
              <p>While we provide elite cybersecurity and digital transformation training, the application of these skills within an organization remains the responsibility of the client entity. Ebanex is not liable for outcomes following institutional implementation.</p>
            </section>

            <section>
              <h2 className="text-[#00BFFF] font-black text-lg mb-4">5. Governing Law</h2>
              <p>These terms are governed by the laws of the United Republic of Tanzania, with institutional oversight from our Global HQ in Dar es Salaam.</p>
            </section>

            <div className="pt-8 border-t border-white/10 mt-12">
              <p className="text-[9px]">Last Updated: April 2026</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
