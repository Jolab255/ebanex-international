import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Zap, Activity } from 'lucide-react';

const CyberLab: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-[#010409]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-24 lg:mb-32">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-block px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-[clamp(0.625rem,1.5vw,0.75rem)] font-bold mb-4 sm:mb-6">
              LIVE ENVIRONMENT
            </div>
            <h1 className="text-[clamp(0.85rem,5vw,3.75rem)] font-bold font-heading mb-6 sm:mb-8 whitespace-nowrap overflow-hidden text-ellipsis">
              The Cyber <span className="text-green-500">Nexus.</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed mb-6 sm:mb-8">
              Immerse yourself in our world-class Cyber Lab. This isn&apos;t just a classroom;
              it&apos;s a technical proving ground designed for real-world simulation and
              offensive/defensive strategy.
            </p>
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-green-600 hover:bg-green-500 text-white rounded-lg font-bold text-sm sm:text-base transition-all">
              Request Lab Access
            </button>
          </motion.div>
          <div className="relative">
            <div className="absolute -inset-4 bg-green-500/10 blur-[100px] rounded-full" />
            <div className="relative glass border-green-500/20 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-green-900/20">
              <div className="bg-slate-900 px-3 sm:px-4 py-2 flex gap-2 border-b border-white/5">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm space-y-2 text-green-400">
                <p className="">$ ebanex-lab status --check-all</p>
                <p className="opacity-60">[OK] Internal Node Resilience: 99.9%</p>
                <p className="opacity-60">[OK] Encryption Protocols: AES-256 Enabled</p>
                <p className="opacity-60">[OK] Simulation Modules: 48 Active</p>
                <p className="text-white mt-4">System ready for enterprise engagement...</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              title: 'Threat Simulation',
              icon: <Zap className="text-green-500" />,
              desc: 'Simulating complex APT campaigns in a safe, air-gapped environment.',
            },
            {
              title: 'Incident Ops',
              icon: <Activity className="text-green-500" />,
              desc: 'Real-time response training using industry-standard SIEM tools.',
            },
            {
              title: 'Reverse Engineering',
              icon: <Cpu className="text-green-500" />,
              desc: 'Deep-dive analysis of malware and legacy software structures.',
            },
            {
              title: 'Vulnerability Lab',
              icon: <Terminal className="text-green-500" />,
              desc: 'Hands-on exploitation techniques and remediation strategies.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-white/5 bg-slate-900/50 hover:bg-green-500/5 transition-colors"
            >
              <div className="mb-3 sm:mb-4">{item.icon}</div>
              <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CyberLab;
