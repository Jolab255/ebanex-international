import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/layout';
import { Squares } from '../components/animations';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white pt-24 pb-16">
      <SEO 
        title="Privacy Policy | Ebanex International"
        description="Privacy policy and data protection protocols for Ebanex International."
        canonical="https://ebanexint.co.tz/privacy"
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
          <h1 className="text-3xl sm:text-5xl font-black uppercase mb-8 tracking-tighter border-b-4 border-[#00BFFF] inline-block">Privacy Policy</h1>
          
          <div className="space-y-8 text-white/80 font-medium leading-relaxed uppercase tracking-widest text-[11px]">
            <section>
              <h2 className="text-[#00BFFF] font-black text-lg mb-4">1. Data Collection</h2>
              <p>Ebanex International collects institutional and personal information necessary for training delivery, advisory services, and operational excellence. This includes data provided through inquiry forms and institutional training requests.</p>
            </section>

            <section>
              <h2 className="text-[#00BFFF] font-black text-lg mb-4">2. Information Usage</h2>
              <p>Your data is used exclusively to provide specialized training, maintain communication, and optimize our institutional strengthening solutions. We do not sell or trade your data with third parties.</p>
            </section>

            <section>
              <h2 className="text-[#00BFFF] font-black text-lg mb-4">3. Data Security</h2>
              <p>We implement advanced security protocols to protect your information from unauthorized access, consistent with our cybersecurity mission. This includes encrypted transmission and secure storage infrastructure.</p>
            </section>

            <section>
              <h2 className="text-[#00BFFF] font-black text-lg mb-4">4. Cookie Policy</h2>
              <p>Our website utilizes cookies and specialized tracking to enhance institutional intelligence and user experience. Users can manage these protocols via their browser settings.</p>
            </section>

            <section>
              <h2 className="text-[#00BFFF] font-black text-lg mb-4">5. Contact Information</h2>
              <p>For inquiries regarding our data protocols, contact our HQ at 19 Mori Street, Sinza, Dar es Salaam, or email info@ebanexint.co.tz.</p>
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

export default PrivacyPolicy;
