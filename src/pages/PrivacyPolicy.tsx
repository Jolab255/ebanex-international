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
              <p>Ebanex International collects personal and institutional information necessary to deliver training programs, advisory services, and respond to inquiries. This includes information provided through contact forms, registration forms, and direct communication.</p>
            </section>

            <section>
              <h2 className="text-[#00BFFF] font-black text-lg mb-4">2. Use of Information</h2>
              <p>We use your information solely for the following purposes:</p>
              <ul className="list-disc ml-4 mt-2 space-y-2">
                <li>Delivering training programs and advisory services</li>
                <li>Responding to your inquiries and requests</li>
                <li>Communicating directly with you in relation to your participation, inquiries, or service delivery</li>
                <li>Improving our services and user experience</li>
              </ul>
              <p className="mt-2">We do not sell, rent, or trade your personal data to third parties.</p>
            </section>

            <section>
              <h2 className="text-[#00BFFF] font-black text-lg mb-4">3. Data Sharing</h2>
              <p>We may engage trusted third-party service providers (such as hosting, email, or analytics providers) to support our operations. These providers are only given access to the information necessary to perform their functions and are required to maintain appropriate data protection standards.</p>
              <p className="mt-2">We do not share personal data with third parties for marketing or unrelated purposes.</p>
            </section>

            <section>
              <h2 className="text-[#00BFFF] font-black text-lg mb-4">4. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your data against unauthorized access, disclosure, alteration, or loss. This includes the use of secure systems and, where applicable, encrypted communications.</p>
            </section>

            <section>
              <h2 className="text-[#00BFFF] font-black text-lg mb-4">5. Data Retention</h2>
              <p>We retain personal data only for as long as necessary to fulfill the purposes for which it was collected or to meet legal and operational requirements. Data that is no longer required is securely deleted or anonymized.</p>
            </section>

            <section>
              <h2 className="text-[#00BFFF] font-black text-lg mb-4">6. Your Rights</h2>
              <p>If you have any questions about your data or would like to update or remove your information, you may contact us using the details below, and we will reasonably assist, subject to applicable legal and operational requirements.</p>
            </section>

            <section>
              <h2 className="text-[#00BFFF] font-black text-lg mb-4">7. Cookies</h2>
              <p>Our website may use cookies to enhance user experience and analyze website usage. You can manage or disable cookies through your browser settings.</p>
            </section>

            <section>
              <h2 className="text-[#00BFFF] font-black text-lg mb-4">8. Contact Information</h2>
              <p>For any privacy-related inquiries, please contact:</p>
              <p className="mt-2">Ebanex International</p>
              <p>19 Mori Street, Sinza, Dar es Salaam</p>
              <p>Email: info@ebanexint.co.tz</p>
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
