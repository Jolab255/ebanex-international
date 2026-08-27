import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X, Send, ArrowRight, ClipboardCheck, ArrowLeft } from 'lucide-react';
import { SEO } from '../components/layout';
import { Squares } from '../components/animations';
import { TurnstileCaptcha } from '../components/common';
import { sendWorkshopEvaluation, WorkshopEvaluationPayload } from '../lib/api';
import { cn } from '../lib/utils';

type RatingValue = 'Excellent' | 'Very Good' | 'Good' | 'Fair' | 'Poor' | '';

const ratingOptions: RatingValue[] = ['Excellent', 'Very Good', 'Good', 'Fair', 'Poor'];

const initialForm: WorkshopEvaluationPayload = {
  fullName: '', organization: '', jobTitle: '', contact: '',
  day1: '', day2: '', day3: '', day4: '', day5: '',
  relevance: '', balance: '', usefulness: '', depth: '',
  knowledge: '', clearly: '', responsiveness: '', pace: '', materials: '',
  suitability: '', setup: '', food: '', tea: '', environment: '', cleanliness: '', registration: '', value: '',
  overall: '',
  q1: '', q2: '', q3: '', q4: '', q5: '', q6: '',
  website: '', captchaToken: '',
};

const WorkshopEvaluation: React.FC = () => {
  const [step, setStep] = useState<'selection' | 'form'>('selection');
  const [formStep, setFormStep] = useState(1);
  const [form, setForm] = useState<WorkshopEvaluationPayload>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const formRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (step === 'form' || successMessage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [step, successMessage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleRatingChange = (name: keyof WorkshopEvaluationPayload, value: RatingValue) => {
    setForm(prev => ({ ...prev, [name]: prev[name] === value ? '' : value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };
  
  const handleRadioChange = (name: keyof WorkshopEvaluationPayload, value: string) => {
    setForm(prev => ({ ...prev, [name]: prev[name] === value ? '' : value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateStep = (): boolean => {
    const nextErrors: Record<string, string> = {};
    if (formStep === 1) {
      if (!form.fullName) nextErrors.fullName = 'Required';
    }
    if (formStep === 5) {
      if (!form.captchaToken) nextErrors.form = 'Security check required.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setFormStep(prev => prev + 1);
      if (formRef.current) formRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    setFormStep(prev => prev - 1);
    if (formRef.current) formRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.website) {
      setSuccessMessage('Thank you for your feedback!');
      return;
    }
    if (!validateStep()) {
       return;
    }
    setIsSubmitting(true);
    const result = await sendWorkshopEvaluation(form);
    setIsSubmitting(false);

    if (!result.ok) {
      setErrors(prev => ({ ...prev, form: result.error ?? 'Unable to submit evaluation.' }));
      return;
    }
    setSuccessMessage('Thank you for your feedback — your input helps us improve future sessions.');
    setForm(initialForm);
    setStep('selection');
    setFormStep(1);
  };

  const RatingRow = ({ label, name }: { label: string; name: keyof WorkshopEvaluationPayload }) => (
    <div className="space-y-2 p-2 sm:p-3 bg-white/[0.02] border border-white/5 group hover:border-[#00BFFF]/30 transition-colors">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 sm:gap-4">
        <div className="flex-grow">
          <h4 className="text-[10px] sm:text-xs font-black text-white uppercase tracking-widest">{label}</h4>
        </div>
        <div className="grid grid-cols-5 gap-1.5 sm:gap-2 flex-shrink-0">
          {ratingOptions.map(opt => (
            <div key={opt} className="flex flex-col items-center gap-2">
              <span className="text-[7px] sm:text-[8px] font-black text-[#00BFFF] uppercase tracking-tighter whitespace-nowrap opacity-60 group-hover:opacity-100 transition-opacity">
                {opt}
              </span>
              <button
                type="button"
                onClick={() => handleRatingChange(name, opt)}
                className={cn(
                  'w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center border-2 transition-all active:scale-90',
                  form[name] === opt
                    ? 'bg-[#00BFFF] border-[#00BFFF] text-black shadow-[0_0_15px_rgba(0,191,255,0.4)]'
                    : 'bg-black/40 border-white/10 text-transparent hover:border-white/30'
                )}
              >
                {form[name] === opt ? <CheckCircle size={14} strokeWidth={3} /> : <div className="w-1.5 h-1.5 border border-white/20" />}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <SEO title="Workshop Evaluation | Ebanex International" />
      <section className="relative z-20 pt-12 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Squares speed={0.13} squareSize={40} direction="diagonal" borderColor="rgba(255,255,255,0.05)" hoverFillColor="rgba(255,255,255,0.03)" />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="mb-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#00BFFF]/30 bg-[#00BFFF]/5 mb-4">
              <ClipboardCheck size={12} className="text-[#00BFFF]" />
              <span className="text-[9px] font-black text-[#00BFFF] uppercase tracking-[0.2em]">Workshop Evaluation</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter flex items-center justify-center sm:justify-start gap-4 mb-3">
              Participant <span className="text-[#00BFFF]">Evaluation</span>
            </h2>
            <p className="text-[10px] sm:text-xs text-[#00BFFF] font-black uppercase tracking-widest leading-relaxed mb-4">
              Practical IT Audit Workshop | 24 – 28 August 2026 | Zanzibar Beach Resort
            </p>
            <p className="text-sm text-slate-300 max-w-2xl mx-auto sm:mx-0 leading-relaxed mb-6">
              Thank you for attending the Practical IT Audit Workshop! Your feedback is incredibly valuable to us. Please take a few minutes to complete this evaluation form honestly. Your insights help us improve the quality of future training programs, refine our materials, and ensure we continue delivering excellent value. All responses are treated confidentially.
            </p>
          </div>
          <motion.button onClick={() => { setStep('form'); setFormStep(1); }} className="group relative w-full text-left">
            <div className="absolute inset-0 bg-[#00BFFF] transform translate-x-1 translate-y-1 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform" />
            <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 border-2 border-black bg-[#0a1628] hover:bg-[#0c1e36] transition-all">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-black/40 border border-[#00BFFF]/20 flex items-center justify-center text-[#00BFFF]">
                  <ClipboardCheck size={20} />
                </div>
                <div>
                  <h4 className="text-base font-black text-white uppercase tracking-tight group-hover:text-[#00BFFF] transition-colors">Start Evaluation</h4>
                  <p className="text-[9px] text-slate-400 uppercase max-w-xl">Complete your feedback form for the workshop.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 py-2 px-4 bg-black/40 border-2 border-white/10 group-hover:border-[#00BFFF] transition-all">
                <span className="text-[9px] font-black text-white uppercase tracking-[0.2em]">Open Form</span>
                <ArrowRight size={14} className="text-[#00BFFF] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.button>
        </div>
      </section>

      <AnimatePresence>
        {step === 'form' && (
          <div className="fixed inset-0 z-[1000]">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setStep('selection')} className="fixed inset-0 bg-black/80 backdrop-blur-md" />
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="fixed inset-0 overflow-y-auto" data-lenis-prevent ref={formRef}>
              <div className="flex min-h-full items-center justify-center p-4 sm:p-6 pointer-events-none">
                <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="relative w-full max-w-4xl shadow-[0_0_100px_rgba(0,0,0,0.8)] pointer-events-auto my-6">
                  <div className="relative p-5 sm:p-8 border-[3px] sm:border-[4px] border-black bg-[#0a1628]" style={{ background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)' }}>
                    <button onClick={() => setStep('selection')} className="absolute top-3 right-3 sm:top-5 sm:right-5 text-white/50 hover:text-[#00BFFF] transition-colors p-2 z-[1010]"><X size={20} /></button>
                    
                    <div className="mb-8 border-b border-white/10 pb-6">
                       <h2 className="text-2xl font-black uppercase text-[#00BFFF] mb-2">Participant Evaluation Form</h2>
                       <div className="flex items-center gap-3">
                          <p className="text-xs text-slate-300 uppercase">Step {formStep} of 5</p>
                          <div className="flex-1 h-1 bg-black overflow-hidden flex">
                             <div className="h-full bg-[#00BFFF] transition-all duration-300" style={{ width: `${(formStep / 5) * 100}%` }} />
                          </div>
                       </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                      {errors.form && <div id="form-error-msg" className="p-4 bg-red-500/10 border-2 border-red-500 text-red-200 text-[10px] font-black uppercase tracking-widest">{errors.form}</div>}

                      {formStep === 1 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                          <h3 className="text-xl font-black text-white uppercase border-b border-[#00BFFF]/30 pb-2">Participant Details</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            <div>
                               <input type="text" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full Name *" className={cn("w-full bg-black/50 border p-3 text-sm text-white focus:border-[#00BFFF] outline-none", errors.fullName ? "border-red-500" : "border-white/10")} required />
                               {errors.fullName && <p className="text-red-500 text-[10px] uppercase font-bold mt-1">{errors.fullName}</p>}
                            </div>
                            <input type="text" name="organization" value={form.organization} onChange={handleChange} placeholder="Organization" className="w-full bg-black/50 border border-white/10 p-3 text-sm text-white focus:border-[#00BFFF] outline-none" />
                            <input type="text" name="jobTitle" value={form.jobTitle} onChange={handleChange} placeholder="Job Title" className="w-full bg-black/50 border border-white/10 p-3 text-sm text-white focus:border-[#00BFFF] outline-none" />
                            <input type="text" name="contact" value={form.contact} onChange={handleChange} placeholder="Email / Phone" className="w-full bg-black/50 border border-white/10 p-3 text-sm text-white focus:border-[#00BFFF] outline-none" />
                          </div>
                        </motion.div>
                      )}

                      {formStep === 2 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-2">
                          <h3 className="text-xl font-black text-white uppercase border-b border-[#00BFFF]/30 pb-2 mb-4">A. Workshop Content</h3>
                          <RatingRow label="Day 1: Identity and Access Management Audits" name="day1" />
                          <RatingRow label="Day 2: Network Security and Firewall Audits" name="day2" />
                          <RatingRow label="Day 3: Database, Server and OS Security Audits" name="day3" />
                          <RatingRow label="Day 4: Backup, Recovery and Cyber Resilience Audits" name="day4" />
                          <RatingRow label="Day 5: Vulnerability and Patch Management Audits" name="day5" />
                          <RatingRow label="Relevance of content to your day-to-day work" name="relevance" />
                          <RatingRow label="Balance between theory and hands-on practical sessions" name="balance" />
                          <RatingRow label="Usefulness of practical/hands-on exercises" name="usefulness" />
                          <RatingRow label="Depth and clarity of technical explanations" name="depth" />
                        </motion.div>
                      )}

                      {formStep === 3 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-2">
                          <h3 className="text-xl font-black text-white uppercase border-b border-[#00BFFF]/30 pb-2 mb-4">B. Facilitator(s) and Delivery</h3>
                          <RatingRow label="Facilitator's knowledge of subject matter" name="knowledge" />
                          <RatingRow label="Facilitator's ability to explain concepts clearly" name="clearly" />
                          <RatingRow label="Facilitator's responsiveness to questions" name="responsiveness" />
                          <RatingRow label="Pace of the sessions (not too fast / not too slow)" name="pace" />
                          <RatingRow label="Quality of training materials and handouts" name="materials" />
                        </motion.div>
                      )}

                      {formStep === 4 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-2">
                          <h3 className="text-xl font-black text-white uppercase border-b border-[#00BFFF]/30 pb-2 mb-4">C. Venue, Food and Logistics</h3>
                          <RatingRow label="Suitability of the venue (Zanzibar Beach Resort)" name="suitability" />
                          <RatingRow label="Training room set-up and comfort" name="setup" />
                          <RatingRow label="Food and meals provided" name="food" />
                          <RatingRow label="Tea/coffee breaks and refreshments" name="tea" />
                          <RatingRow label="Hotel environment and hospitality" name="environment" />
                          <RatingRow label="Cleanliness and general ambience" name="cleanliness" />
                          <RatingRow label="Registration and overall organization" name="registration" />
                          <RatingRow label="Value for money (workshop fee vs. content received)" name="value" />
                        </motion.div>
                      )}

                      {formStep === 5 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                          <div className="space-y-4">
                            <h3 className="text-xl font-black text-white uppercase border-b border-[#00BFFF]/30 pb-2">D. Overall Assessment</h3>
                            <RatingRow label="Overall rating of the workshop" name="overall" />
                          </div>
                          
                          <div className="space-y-6 pt-4">
                             <div className="space-y-2">
                                <label className="text-xs font-bold text-[#00BFFF] uppercase">1. What did you like most about this workshop?</label>
                                <textarea name="q1" value={form.q1} onChange={handleChange} className="w-full bg-black/50 border border-white/10 p-3 text-sm text-white focus:border-[#00BFFF] outline-none min-h-[80px]" />
                             </div>
                             <div className="space-y-2">
                                <label className="text-xs font-bold text-[#00BFFF] uppercase">2. What could be improved in future workshops?</label>
                                <textarea name="q2" value={form.q2} onChange={handleChange} className="w-full bg-black/50 border border-white/10 p-3 text-sm text-white focus:border-[#00BFFF] outline-none min-h-[80px]" />
                             </div>
                             <div className="space-y-2">
                                <label className="text-xs font-bold text-[#00BFFF] uppercase">3. What other IT audit/cybersecurity topics would you like covered?</label>
                                <textarea name="q3" value={form.q3} onChange={handleChange} className="w-full bg-black/50 border border-white/10 p-3 text-sm text-white focus:border-[#00BFFF] outline-none min-h-[80px]" />
                             </div>
                             <div className="space-y-2">
                                <label className="text-xs font-bold text-[#00BFFF] uppercase block mb-3">4. Would you recommend this workshop to a colleague?</label>
                                <div className="flex gap-4">
                                    <button type="button" onClick={() => handleRadioChange('q4', 'Yes')} className={cn("px-6 py-2 border-2 text-xs font-bold uppercase", form.q4 === 'Yes' ? 'bg-[#00BFFF] border-[#00BFFF] text-black' : 'border-white/20 text-white hover:border-white/50')}>Yes</button>
                                    <button type="button" onClick={() => handleRadioChange('q4', 'No')} className={cn("px-6 py-2 border-2 text-xs font-bold uppercase", form.q4 === 'No' ? 'bg-[#00BFFF] border-[#00BFFF] text-black' : 'border-white/20 text-white hover:border-white/50')}>No</button>
                                </div>
                             </div>
                             <div className="space-y-2">
                                <label className="text-xs font-bold text-[#00BFFF] uppercase block mb-3">5. Would you be interested in attending future workshops?</label>
                                <div className="flex gap-4">
                                    <button type="button" onClick={() => handleRadioChange('q5', 'Yes')} className={cn("px-6 py-2 border-2 text-xs font-bold uppercase", form.q5 === 'Yes' ? 'bg-[#00BFFF] border-[#00BFFF] text-black' : 'border-white/20 text-white hover:border-white/50')}>Yes</button>
                                    <button type="button" onClick={() => handleRadioChange('q5', 'No')} className={cn("px-6 py-2 border-2 text-xs font-bold uppercase", form.q5 === 'No' ? 'bg-[#00BFFF] border-[#00BFFF] text-black' : 'border-white/20 text-white hover:border-white/50')}>No</button>
                                </div>
                             </div>
                             <div className="space-y-2">
                                <label className="text-xs font-bold text-[#00BFFF] uppercase">6. Any additional comments or suggestions?</label>
                                <textarea name="q6" value={form.q6} onChange={handleChange} className="w-full bg-black/50 border border-white/10 p-3 text-sm text-white focus:border-[#00BFFF] outline-none min-h-[80px]" />
                             </div>
                          </div>
                          
                          <div className="flex justify-center pt-4">
                            <TurnstileCaptcha size="normal" onVerify={token => setForm(prev => ({ ...prev, captchaToken: token }))} />
                          </div>
                        </motion.div>
                      )}

                      <div className="flex gap-4 pt-6 mt-6 border-t border-white/10">
                        {formStep > 1 && (
                          <button type="button" onClick={handlePrev} className="px-6 py-4 bg-transparent border-[3px] border-white/20 text-white font-black uppercase tracking-[0.2em] text-[9px] flex items-center gap-3 hover:border-white transition-all active:scale-[0.98]">
                            <ArrowLeft size={16} /> Back
                          </button>
                        )}
                        {formStep < 5 ? (
                          <button type="button" onClick={handleNext} className="flex-1 py-4 bg-[#00BFFF] border-[3px] border-black text-black font-black uppercase tracking-[0.2em] text-[9px] flex items-center justify-center gap-3 hover:bg-white transition-all active:scale-[0.98]">
                            Next Step <ArrowRight size={16} />
                          </button>
                        ) : (
                          <button type="submit" disabled={isSubmitting} className="flex-1 py-4 bg-[#00BFFF] border-[3px] border-black text-black font-black uppercase tracking-[0.2em] text-[9px] flex items-center justify-center gap-3 hover:bg-white transition-all active:scale-[0.98] disabled:opacity-50">
                            {isSubmitting ? 'Submitting...' : 'Submit Evaluation'} <Send size={16} />
                          </button>
                        )}
                      </div>
                    </form>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {successMessage && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center px-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSuccessMessage(null)} className="absolute inset-0 bg-black/90 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative bg-[#00BFFF] border-[10px] border-black p-8 sm:p-14 max-w-lg w-full text-center z-10">
              <CheckCircle className="w-14 h-14 text-black mx-auto mb-4" />
              <h3 className="text-black font-black text-3xl uppercase mb-4 tracking-tighter">Insight Recorded</h3>
              <p className="text-black font-bold uppercase tracking-widest text-[10px] sm:text-xs leading-relaxed mb-8">{successMessage}</p>
              <button onClick={() => setSuccessMessage(null)} className="w-full py-5 bg-black text-[#00BFFF] font-black uppercase text-[10px] hover:bg-white hover:text-black transition-all">Return to Portal</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorkshopEvaluation;
