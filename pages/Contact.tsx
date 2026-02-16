
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl font-bold font-heading mb-8">Let's <span className="text-purple-500">Connect.</span></h1>
            <p className="text-xl text-slate-400 mb-12">
              Have questions about our training programs or institutional advisory? 
              Our global team is ready to assist.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-purple-400">
                  <MapPin />
                </div>
                <div>
                  <h4 className="font-bold">Global Headquarters</h4>
                  <p className="text-slate-400">122 Financial District, Cyber City</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-purple-400">
                  <Mail />
                </div>
                <div>
                  <h4 className="font-bold">Email Us</h4>
                  <p className="text-slate-400">advisory@ebanex.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-purple-400">
                  <Phone />
                </div>
                <div>
                  <h4 className="font-bold">Call Center</h4>
                  <p className="text-slate-400">+1 (800) EBANEX-INTL</p>
                </div>
              </div>
            </div>
            
            <div className="h-64 rounded-3xl bg-slate-800 border border-white/5 overflow-hidden flex items-center justify-center text-slate-500">
               Interactive Global Map Interface
            </div>
          </div>

          <div className="glass p-12 rounded-[2.5rem] border-white/5 self-start">
            <h3 className="text-2xl font-bold mb-8">Send an Inquiry</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-purple-500 transition-colors outline-none" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Work Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-purple-500 transition-colors outline-none" placeholder="john@enterprise.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Institutional Service</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-purple-500 transition-colors outline-none appearance-none">
                  <option>Corporate Training</option>
                  <option>Cyber Lab Access</option>
                  <option>Strategic Advisory</option>
                  <option>Research Partnership</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Message</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-purple-500 transition-colors outline-none min-h-[150px]" placeholder="How can we help you?" />
              </div>
              <button className="w-full py-4 bg-purple-600 rounded-xl font-bold text-white flex items-center justify-center gap-2 hover:bg-purple-500 transition-colors">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
