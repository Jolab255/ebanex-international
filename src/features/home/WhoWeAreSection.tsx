import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const WhoWeAreSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section className="pt-12 pb-32 lg:pt-16 lg:pb-40 bg-slate-950 relative z-20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-black leading-none uppercase tracking-tighter text-[clamp(2.5rem,12vw,5rem)] bg-center bg-no-repeat bg-clip-text text-transparent select-none filter brightness-125 animate-bg-pan"
          style={{
            backgroundImage:
              "url('https://assets.avant.org.au/cdf6134c-01d7-0292-26f5-2f5cf1db96f8/4645803d-67d3-4662-9f18-816e532b82a1/Responding-to-a-cyber-security-incident.jpg')",
            WebkitBackgroundClip: 'text',
          }}
        >
          E b a n e x - I n t e r n a t i o n a l
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8"
        >
          <span className="text-purple-500 font-bold uppercase tracking-[0.4em] text-[20px] block">
            Who We Are
          </span>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div style={{ y: backgroundY }} className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-500 blur-[50px] rounded-full" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative h-[350px] lg:h-[450px]">
          <div className="absolute inset-0 z-0 overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200"
              className="w-full h-full object-cover opacity-60"
              alt="Cybersecurity infrastructure"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
            <div className="absolute inset-0 bg-slate-950/40" />
          </div>

          <div className="absolute bottom-0 left-0 w-full translate-y-1/2 z-10 px-6 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="glass p-8 lg:p-10 rounded-[0.5rem] border border-white/10 max-w-4xl w-full shadow-2xl backdrop-blur-3xl overflow-hidden relative"
            >
              <div className="absolute top-0 left-0  w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

              <div className="space-y-6 text-slate-100 text-base font-light leading-relaxed relative z-10 text-justify">
                <p>
                  Ebanex International is a multidisciplinary consulting and training firm focused on building skilled
                  professionals, resilient institutions, and digitally secure organizations.
                </p>
                <p>
                  Founded by professionals with strong expertise in information technology, cybersecurity, training, and
                  organizational development, Ebanex provides practical, industry-aligned learning and advisory
                  solutions tailored to institutional needs.
                </p>
                <p>
                  We combine technical expertise, leadership development, and institutional capacity building to help
                  organizations adapt, grow, and thrive in an evolving digital environment.
                </p>
              </div>

              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10 text-center mt-20">
              <motion.h2
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-black leading-none uppercase tracking-tighter text-[clamp(2.5rem,12vw,5rem)] bg-center bg-no-repeat bg-clip-text text-transparent select-none filter brightness-125 animate-bg-pan"
                style={{
                  backgroundImage:
                    "url('https://assets.avant.org.au/cdf6134c-01d7-0292-26f5-2f5cf1db96f8/4645803d-67d3-4662-9f18-816e532b82a1/Responding-to-a-cyber-security-incident.jpg')",
                  WebkitBackgroundClip: 'text',
                }}
              >
                W h y - E b a n e x
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-8"
              >
                <span className="text-purple-500 font-bold uppercase tracking-[0.4em] text-[20px] block">
                  Global Expertise
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;

