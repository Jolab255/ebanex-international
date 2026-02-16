
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Zap, Activity } from 'lucide-react';

const CyberLab: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#010409]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold mb-6">
              LIVE ENVIRONMENT
            </div>
            <h1 className="text-6xl font-bold font-heading mb-8">The Cyber <span className="text-green-500">Nexus.</span></h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              Immerse yourself in our world-class Cyber Lab. This isn't just a classroom; 
              it's a technical proving ground designed for real-world simulation and offensive/defensive strategy.
            </p>
            <button className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-lg font-bold transition-all">
              Request Lab Access
            </button>
          </motion.div>
          <div className="relative">
             <div className="absolute -inset-4 bg-green-500/10 blur-[100px] rounded-full" />
             <div className="relative glass border-green-500/20 rounded-2xl overflow-hidden shadow-2xl shadow-green-900/20">
                <div className="bg-slate-900 px-4 py-2 flex gap-2 border-b border-white/5">
                   <div className="w-3 h-3 rounded-full bg-red-500/50" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                   <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="p-6 font-mono text-sm space-y-2 text-green-400">
                   <p className="">$ ebanex-lab status --check-all</p>
                   <p className="opacity-60">[OK] Internal Node Resilience: 99.9%</p>
                   <p className="opacity-60">[OK] Encryption Protocols: AES-256 Enabled</p>
                   <p className="opacity-60">[OK] Simulation Modules: 48 Active</p>
                   <p className="text-white mt-4">System ready for enterprise engagement...</p>
                </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { title: 'Threat Simulation', icon: <Zap className="text-green-500" />, desc: 'Simulating complex APT campaigns in a safe, air-gapped environment.' },
             { title: 'Incident Ops', icon: <Activity className="text-green-500" />, desc: 'Real-time response training using industry-standard SIEM tools.' },
             { title: 'Reverse Engineering', icon: <Cpu className="text-green-500" />, desc: 'Deep-dive analysis of malware and legacy software structures.' },
             { title: 'Vulnerability Lab', icon: <Terminal className="text-green-500" />, desc: 'Hands-on exploitation techniques and remediation strategies.' }
           ].map((item, idx) => (
             <div key={idx} className="p-8 rounded-2xl border border-white/5 bg-slate-900/50 hover:bg-green-500/5 transition-colors">
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default CyberLab;
