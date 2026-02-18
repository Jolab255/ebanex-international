import React from 'react';
import { motion } from 'framer-motion';

const CtaSection: React.FC = () => (
  <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-slate-950">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto h-full min-h-[600px] lg:min-h-[700px]">
      <div className="grid lg:grid-cols-2 h-full min-h-[600px] lg:min-h-[700px]">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[300px] lg:h-full overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-transparent z-10 lg:hidden" />
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop"
            alt="Professional team collaboration"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent z-10" />

          {/* Decorative Elements */}
          <div className="absolute bottom-10 left-10 z-20 hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 backdrop-blur-sm flex items-center justify-center border border-purple-500/30">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-purple-400"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Enterprise Security</p>
                <p className="text-slate-400 text-xs">Trusted by 500+ companies</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <div className="flex items-center justify-center p-8 lg:p-16">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-lg"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-purple-400 text-sm font-medium uppercase tracking-wider">
                Call to Action
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            >
              Ready to strengthen your{' '}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                workforce
              </span>{' '}
              and secure your organization?
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-slate-400 text-base sm:text-lg mb-10 leading-relaxed"
            >
              Take the first step towards comprehensive cybersecurity training and institutional
              excellence. Our programs are tailored to meet your organization's unique needs.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-row gap-3 sm:gap-4"
            >
              {/* Primary Button */}
              <button className="h-12 sm:h-14 px-3 sm:px-5 lg:px-6 bg-white text-slate-950 rounded-sm font-bold text-[10px] sm:text-xs uppercase tracking-[0.15em] hover:bg-purple-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-xl active:scale-95 whitespace-nowrap">
                Explore Training
              </button>

              {/* Secondary Button */}
              <button className="h-12 sm:h-14 px-3 sm:px-5 lg:px-6 border border-white/10 text-white rounded-sm font-bold text-[10px] sm:text-xs uppercase tracking-[0.15em] hover:bg-white/5 hover:border-purple-500 transition-all transform hover:-translate-y-1 active:scale-95 whitespace-nowrap">
                Request Training
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-10 pt-8 border-t border-white/10"
            >
              <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm">
                <div className="flex items-center gap-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-green-400"
                  >
                    <path
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-green-400"
                  >
                    <path
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-green-400"
                  >
                    <path
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>24/7 Support</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default CtaSection;
