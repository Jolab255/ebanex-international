import React, { useState, useRef, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, ArrowRight, MessageSquare, Globe, ShieldCheck, CheckCircle, ChevronDown, X } from 'lucide-react';
import { SEO } from '../components/layout';
import { Squares, ScrollReveal } from '../components/animations';
import { sendContactInquiry } from '../lib/api';
import { cn } from '../lib/utils';

interface ContactFormState {
  fullName: string;
  email: string;
  service: string;
  message: string;
  website: string; // Honeypot field
}

interface ContactFormErrors {
  fullName?: string;
  email?: string;
  service?: string;
  message?: string;
  form?: string;
}

const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preSelectedService = searchParams.get('service');

  const [form, setForm] = useState<ContactFormState>({
    fullName: '',
    email: '',
    service: preSelectedService || 'Corporate Training',
    message: '',
    website: '', // Initialize honeypot
  });

  // Update form if search params change
  useEffect(() => {
    if (preSelectedService) {
      setForm(prev => ({ ...prev, service: preSelectedService }));
    }
  }, [preSelectedService]);

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const formRef = useRef(null);
  const infoRef = useRef(null);
  const isFormInView = useInView(formRef, { once: false, margin: "-100px" });
  const isInfoInView = useInView(infoRef, { once: false, margin: "-100px" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined, form: undefined }));
    setSuccessMessage(null);
  };

  const validate = (): boolean => {
    const nextErrors: ContactFormErrors = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = 'Full name is required.';
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Work email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!form.message.trim()) {
      nextErrors.message = 'Please tell us how we can help.';
    } else if (form.message.trim().length < 10) {
      nextErrors.message = 'Message is too short.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage(null);

    // Honeypot check: Bots will fill this, humans won't see it
    if (form.website) {
      console.log('Bot detected via honeypot');
      // Silently fail or pretend it worked
      setSuccessMessage('Your inquiry has been received. Our team will contact you shortly.');
      setForm({ fullName: '', email: '', service: 'Corporate Training', message: '', website: '' });
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);
    setErrors((prev) => ({ ...prev, form: undefined }));

    const result = await sendContactInquiry({
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      service: form.service.trim(),
      message: form.message.trim(),
    });

    setIsSubmitting(false);

    if (!result.ok) {
      setErrors((prev) => ({
        ...prev,
        form: result.error ?? 'Unable to send inquiry. Please try again.',
      }));
      return;
    }

    setSuccessMessage('Your inquiry has been received. Our team will contact you shortly.');
    setForm({
      fullName: '',
      email: '',
      service: 'Corporate Training',
      message: '',
    });
  };

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <SEO 
        title="Contact Expert | Ebanex International"
        description="Connect with our global advisory team in Dar es Salaam for elite training, cyber lab access, and institutional consulting."
        canonical="https://ebanexint.co.tz/contact"
      />

      {/* 1. Hero Header */}
      <section className="relative pt-16 pb-2 sm:pt-20 sm:pb-4 bg-[linear-gradient(135deg,#000000_50%,#00C4D4_50%)] overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Squares speed={0.13} squareSize={40} direction="diagonal" borderColor="rgba(255,255,255,0.08)" hoverFillColor="rgba(255,255,255,0.05)" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
            <div className="inline-block bg-black py-3 px-8 border-4 border-black mb-4 shadow-[10px_10px_0px_0px_rgba(0,196,212,0.1)]">
                <ScrollReveal yOffset={10}>
                    <h1 className="text-3xl sm:text-5xl font-black font-heading text-white uppercase tracking-tighter">
                        Contact <span className="text-[#00C4D4]">Expert</span>
                    </h1>
                </ScrollReveal>
            </div>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-2xl mx-auto bg-black py-2 px-6 border-2 border-black text-slate-300 font-medium text-[10px] sm:text-sm uppercase tracking-widest w-fit"
            >
                Institutional Excellence. Global Resilience. Direct Access.
            </motion.div>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="relative z-20 py-12 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <Squares speed={0.13} squareSize={40} direction="diagonal" borderColor="rgba(255,255,255,0.1)" hoverFillColor="rgba(255,255,255,0.05)" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Info */}
          <div ref={infoRef} className="lg:col-span-5 space-y-10">
            <ScrollReveal yOffset={10}>
              <div className="space-y-4">
                <h2 className="text-2xl font-black uppercase border-b-4 border-[#00C4D4] inline-block mb-2">Inquiry Channels</h2>
                <p className="text-slate-400 text-base font-medium leading-relaxed">
                  Connect with our specialized departments in Dar es Salaam directly or use the secure form for institutional requests.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-5">
                {[
                    { icon: <Globe />, title: 'Global HQ', content: 'Dar es Salaam, Tanzania', label: 'Institutional Office' },
                    { icon: <Mail />, title: 'Institutional Email', content: 'info@ebanexint.co.tz', label: '24/7 Monitoring' },
                    { icon: <Phone />, title: 'Direct Line', content: '+255 745 326 627', label: 'Global Support' },
                    { icon: <ShieldCheck />, title: 'Inquiries', content: 'info@ebanexint.co.tz', label: 'General Affairs' }
                ].map((item, i) => (
                    <motion.div 
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInfoInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: i * 0.1 }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-[#00C4D4] transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
                        <div className="relative p-5 border-[3px] border-black bg-[#0a1628] flex items-center gap-5" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                            <div className="w-10 h-10 bg-black flex items-center justify-center text-[#00C4D4] border-2 border-[#00C4D4]/30 group-hover:border-[#00C4D4] transition-colors">
                                {item.icon}
                            </div>
                            <div className="flex-grow">
                                <span className="text-[9px] font-black uppercase text-[#00C4D4] tracking-widest block mb-0.5">{item.label}</span>
                                <h4 className="font-black text-white uppercase text-xs tracking-tight">{item.title}</h4>
                                <p className="text-slate-300 text-xs font-bold">{item.content}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div ref={formRef} className="lg:col-span-7">
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={isFormInView ? { opacity: 1, x: 0 } : {}}
                className="relative"
            >
              <div className="absolute inset-0 bg-[#00C4D4] transform translate-x-3 translate-y-3" />
              <div className="relative p-8 sm:p-10 border-[10px] border-black bg-[#0a1628]" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                <h3 className="text-2xl font-black text-white uppercase mb-6 tracking-tighter flex items-center gap-4">
                    <MessageSquare className="text-[#00C4D4]" /> Secure Transmission
                </h3>
                
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  {/* Honeypot field - hidden from users */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      value={form.website}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </div>
                  {errors.form && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-red-500/20 border-2 border-red-500 text-red-200 text-xs font-black uppercase tracking-widest">
                      {errors.form}
                    </motion.div>
                  )}
                  
                  <AnimatePresence>
                    {successMessage && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-0 z-[2000] flex items-center justify-center px-4 pointer-events-none"
                      >
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                        <div className="relative bg-[#00C4D4] border-[10px] border-black p-8 sm:p-12 max-w-lg w-full text-center shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] pointer-events-auto">
                          <button 
                            onClick={() => setSuccessMessage(null)}
                            className="absolute top-4 right-4 text-black/40 hover:text-black transition-colors"
                          >
                            <X size={24} />
                          </button>
                          
                          <div className="bg-black w-20 h-20 flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-12 h-12 text-[#00C4D4]" />
                          </div>
                          
                          <h3 className="text-black font-black text-2xl uppercase mb-4 tracking-tighter">Transmission Successful</h3>
                          <p className="text-black font-bold uppercase tracking-widest text-xs leading-relaxed">
                            {successMessage}
                          </p>
                          
                          <button 
                            onClick={() => setSuccessMessage(null)}
                            className="mt-10 w-full py-4 bg-black text-[#00C4D4] font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-black transition-all"
                          >
                            Close Transmission
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-1.5 group">
                      <label className="text-[9px] font-black uppercase text-[#00C4D4] tracking-widest ml-1">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        className={cn(
                            "w-full bg-black border-[3px] border-black p-3.5 text-white font-bold text-sm focus:border-[#00C4D4] outline-none transition-all placeholder:text-white/20",
                            errors.fullName && "border-red-500"
                        )}
                        placeholder="EXECUTIVE NAME"
                      />
                      {errors.fullName && <p className="text-[10px] text-red-500 font-black uppercase mt-1">{errors.fullName}</p>}
                    </div>
                    
                    <div className="space-y-1.5 group">
                      <label className="text-[9px] font-black uppercase text-[#00C4D4] tracking-widest ml-1">Corporate Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={cn(
                            "w-full bg-black border-[3px] border-black p-3.5 text-white font-bold text-sm focus:border-[#00C4D4] outline-none transition-all placeholder:text-white/20",
                            errors.email && "border-red-500"
                        )}
                        placeholder="OFFICIAL@ENTERPRISE.COM"
                      />
                      {errors.email && <p className="text-[10px] text-red-500 font-black uppercase mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-[#00C4D4] tracking-widest ml-1">Inquiry Category</label>
                    <div className="relative">
                        <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className="w-full bg-black border-[3px] border-black p-3.5 text-white font-bold text-sm focus:border-[#00C4D4] outline-none appearance-none cursor-pointer uppercase tracking-tight"
                        >
                            <option value="Corporate Training">Corporate Training</option>
                            <option value="Cyber Lab Access">Cyber Lab Access</option>
                            <option value="Strategic Advisory">Strategic Advisory</option>
                            <option value="Research Partnership">Research Partnership</option>
                            {/* Dynamically add the pre-selected course if it doesn't match the above */}
                            {preSelectedService && !['Corporate Training', 'Cyber Lab Access', 'Strategic Advisory', 'Research Partnership'].includes(preSelectedService) && (
                                <option value={preSelectedService}>{preSelectedService}</option>
                            )}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#00C4D4]">
                            <ChevronDown size={18} />
                        </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-[#00C4D4] tracking-widest ml-1">Institutional Request Details</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className={cn(
                        "w-full bg-black border-[3px] border-black p-3.5 text-white font-bold text-sm focus:border-[#00C4D4] outline-none transition-all placeholder:text-white/20 min-h-[140px] resize-none",
                        errors.message && "border-red-500"
                      )}
                      placeholder="DESCRIBE YOUR ORGANIZATIONAL NEEDS..."
                    />
                    {errors.message && <p className="text-[9px] text-red-500 font-black uppercase mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#00C4D4] border-4 border-black text-black font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:bg-white transition-all active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Transmitting...' : 'Send Inquiry'} <Send size={18} />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="min-h-[40vh] py-16 relative flex flex-col items-center justify-center px-4 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <Squares speed={0.13} squareSize={40} direction="diagonal" borderColor="rgba(255,255,255,0.08)" hoverFillColor="rgba(255,255,255,0.05)" />
        </div>
        <div className="max-w-4xl w-full p-10 border-[10px] border-black relative z-10 text-center bg-[#0a1628]" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
            <ScrollReveal yOffset={10}>
                <h2 className="text-3xl font-black text-white uppercase mb-5 leading-tight tracking-tighter">Ready for <span className="text-[#00C4D4]">Institutional</span> Growth?</h2>
            </ScrollReveal>
            <p className="text-white/80 mb-8 max-w-lg mx-auto font-medium uppercase tracking-widest text-[11px] leading-relaxed">Our experts are prepared to tailor a solution for your unique operational requirements.</p>
            <Link to="/training" className="inline-flex items-center gap-3 bg-[#00C4D4] border-4 border-black text-black px-8 py-3.5 font-black uppercase text-[10px] tracking-[0.2em] hover:bg-white transition-all">
                Explore Programs <ArrowRight size={14} />
            </Link>
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C4D4]/10 blur-3xl pointer-events-none" />
        </div>
      </section>
    </div>
  );
};

export default Contact;
