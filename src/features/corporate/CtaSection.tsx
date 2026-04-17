import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-black overflow-hidden relative">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00BFFF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="glass p-12 sm:p-20 rounded-sm border-white/5 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight mb-8"
              >
                Ready to <span className="text-[#00BFFF]">Strengthen</span> <br />
                Your Institution?
              </motion.h2>
              <p className="text-white/60 text-lg font-light mb-12 leading-relaxed">
                Contact our institutional advisory team to discuss customized capacity-building 
                programs tailored to your organization's specific goals and challenges.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white/80">
                  <div className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center text-[#00BFFF]">
                    <Mail size={18} />
                  </div>
                  <span className="font-light tracking-wide">advisory@ebanexint.co.tz</span>
                </div>
                <div className="flex items-center gap-4 text-white/80">
                  <div className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center text-[#00BFFF]">
                    <Phone size={18} />
                  </div>
                  <span className="font-light tracking-wide">+255 745 326 627</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-[#00BFFF] p-10 sm:p-12 text-black"
              >
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-6">Inquiry form</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="text" 
                    placeholder="FULL NAME"
                    className="w-full bg-black/10 border-b border-black/20 py-3 px-0 placeholder:text-black/40 focus:outline-none focus:border-black transition-colors font-bold text-xs uppercase tracking-widest"
                  />
                  <input 
                    type="text" 
                    placeholder="ORGANIZATION"
                    className="w-full bg-black/10 border-b border-black/20 py-3 px-0 placeholder:text-black/40 focus:outline-none focus:border-black transition-colors font-bold text-xs uppercase tracking-widest"
                  />
                  <input 
                    type="email" 
                    placeholder="EMAIL ADDRESS"
                    className="w-full bg-black/10 border-b border-black/20 py-3 px-0 placeholder:text-black/40 focus:outline-none focus:border-black transition-colors font-bold text-xs uppercase tracking-widest"
                  />
                  <textarea 
                    placeholder="HOW CAN WE HELP?"
                    rows={3}
                    className="w-full bg-black/10 border-b border-black/20 py-3 px-0 placeholder:text-black/40 focus:outline-none focus:border-black transition-colors font-bold text-xs uppercase tracking-widest resize-none"
                  ></textarea>
                  <button className="w-full h-14 bg-black text-white font-black text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all mt-8 flex items-center justify-center gap-3">
                    Submit Inquiry <ArrowRight size={16} />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
