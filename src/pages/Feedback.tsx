import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  CheckCircle,
  X,
  Send,
  ShieldCheck,
  BookOpen,
  ArrowRight,
  ClipboardCheck,
  Shield,
  Code,
  Activity,
  Lock,
} from 'lucide-react';
import { SEO } from '../components/layout';
import { Squares } from '../components/animations';
import { TurnstileCaptcha } from '../components/common';
import { sendFeedback } from '../lib/api';
import { cn } from '../lib/utils';

type RatingValue = 'Excellent' | 'Very Good' | 'Good' | 'Fair' | 'Poor' | '';

interface Domain {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

const domains: Domain[] = [
  {
    id: 'Domain 1',
    name: 'Information Systems Auditing Process',
    description: 'Planning, execution, and reporting of IT audit engagements based on international standards.',
    icon: <ClipboardCheck size={20} />,
  },
  {
    id: 'Domain 2',
    name: 'Governance and Management of IT',
    description: 'IT governance frameworks, strategic alignment, and resource management to ensure business value.',
    icon: <Shield size={20} />,
  },
  {
    id: 'Domain 3',
    name: 'Information Systems Acquisition, Development and Implementation',
    description: 'Methodologies for system development lifecycle (SDLC) and infrastructure change management.',
    icon: <Code size={20} />,
  },
  {
    id: 'Domain 4',
    name: 'Information Systems Operations and Business Resilience',
    description: 'Service level management, data operations, and business continuity strategies.',
    icon: <Activity size={20} />,
  },
  {
    id: 'Domain 5',
    name: 'Protection of Information Assets',
    description: 'Policies and controls ensuring confidentiality, integrity, and availability of information assets.',
    icon: <Lock size={20} />,
  },
];

interface FeedbackFormState {
  trainingProgram: string;
  presentationSkills: RatingValue;
  knowledge: RatingValue;
  confidence: RatingValue;
  engagement: RatingValue;
  timeManagement: RatingValue;
  message: string;
  website: string; // Honeypot
  captchaToken: string;
}

interface FeedbackFormErrors {
  presentationSkills?: string;
  knowledge?: string;
  confidence?: string;
  engagement?: string;
  timeManagement?: string;
  message?: string;
  form?: string;
}

const ratingOptions: RatingValue[] = ['Excellent', 'Very Good', 'Good', 'Fair', 'Poor'];

const Feedback: React.FC = () => {
  const [step, setStep] = useState<'selection' | 'form'>('selection');
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);

  const [form, setForm] = useState<FeedbackFormState>({
    trainingProgram: '',
    presentationSkills: '',
    knowledge: '',
    confidence: '',
    engagement: '',
    timeManagement: '',
    message: '',
    website: '',
    captchaToken: '',
  });

  const [errors, setErrors] = useState<FeedbackFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const formRef = useRef(null);

  // Prevent background scrolling when modal is active
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

  const handleDomainSelect = (domain: Domain) => {
    setSelectedDomain(domain);
    setForm((prev) => ({ ...prev, trainingProgram: `CISA – ${domain.id}: ${domain.name}` }));
    setStep('form');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined, form: undefined }));
  };

  const handleRatingChange = (name: keyof FeedbackFormState, value: RatingValue) => {
    setForm((prev) => ({ 
      ...prev, 
      [name]: prev[name] === value ? '' : value 
    }));
    setErrors((prev) => ({ ...prev, [name]: undefined, form: undefined }));
  };

  const validate = (): boolean => {
    const nextErrors: FeedbackFormErrors = {};

    if (!form.presentationSkills) nextErrors.presentationSkills = 'Selection required.';
    if (!form.knowledge) nextErrors.knowledge = 'Selection required.';
    if (!form.confidence) nextErrors.confidence = 'Selection required.';
    if (!form.engagement) nextErrors.engagement = 'Selection required.';
    if (!form.timeManagement) nextErrors.timeManagement = 'Selection required.';

    if (!form.captchaToken) {
      nextErrors.form = 'Security check required.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.website) {
      setSuccessMessage('Thank you for your feedback — your input helps us improve future sessions.');
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);
    const result = await sendFeedback({
      ...form,
      message: form.message.trim(),
    });

    setIsSubmitting(false);

    if (!result.ok) {
      setErrors((prev) => ({
        ...prev,
        form: result.error ?? 'Unable to submit evaluation.',
      }));
      return;
    }

    setSuccessMessage('Thank you for your feedback — your input helps us improve future sessions.');
    setForm({
      trainingProgram: '',
      presentationSkills: '',
      knowledge: '',
      confidence: '',
      engagement: '',
      timeManagement: '',
      message: '',
      website: '',
      captchaToken: '',
    });
    setStep('selection');
  };

  const RatingRow = ({
    label,
    name,
    error,
  }: {
    label: string;
    name: keyof FeedbackFormState;
    error?: string;
  }) => (
    <div className="space-y-3 p-4 bg-white/[0.02] border border-white/5 group hover:border-[#00BFFF]/30 transition-colors">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
        <div className="space-y-1.5 flex-grow">
          <h4 className="text-xs sm:text-sm font-black text-white uppercase tracking-widest">{label}</h4>
          <span className="text-[8px] font-bold text-slate-500 uppercase tracking-[0.2em] italic block">
            Please tick (✓) one:
          </span>
        </div>
        
        <div className="grid grid-cols-5 gap-1.5 sm:gap-3 flex-shrink-0">
          {ratingOptions.map((opt) => (
            <div key={opt} className="flex flex-col items-center gap-2">
              <span className="text-[7px] sm:text-[8px] font-black text-[#00BFFF] uppercase tracking-tighter whitespace-nowrap opacity-60 group-hover:opacity-100 transition-opacity">
                {opt}
              </span>
              <button
                type="button"
                onClick={() => handleRatingChange(name, opt)}
                className={cn(
                  'w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center border-2 transition-all active:scale-90',
                  form[name] === opt
                    ? 'bg-[#00BFFF] border-[#00BFFF] text-black shadow-[0_0_15px_rgba(0,191,255,0.4)]'
                    : 'bg-black/40 border-white/10 text-transparent hover:border-white/30'
                )}
              >
                {form[name] === opt ? (
                   <CheckCircle size={16} strokeWidth={3} />
                ) : (
                  <div className="w-2 h-2 border border-white/20" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
      {error && <p className="text-[8px] text-red-500 font-black uppercase mt-1">{error}</p>}
    </div>
  );

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <SEO
        title="Trainer Evaluation | Ebanex International"
        description="Anonymous professional evaluation for CISA domains."
        canonical="https://ebanexint.co.tz/feedback"
      />

      <section className="relative z-20 pt-12 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Squares
            speed={0.13}
            squareSize={40}
            direction="diagonal"
            borderColor="rgba(255,255,255,0.05)"
            hoverFillColor="rgba(255,255,255,0.03)"
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#00BFFF]/30 bg-[#00BFFF]/5 mb-4">
              <MessageSquare size={12} className="text-[#00BFFF]" />
              <span className="text-[9px] font-black text-[#00BFFF] uppercase tracking-[0.2em]">Evaluation Portal</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter flex items-center justify-center sm:justify-start gap-4 mb-3">
              Trainer <span className="text-[#00BFFF]">Evaluation</span>
            </h2>
            <p className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-widest leading-relaxed max-w-2xl">
              Your insights drive our excellence. Please select the specific CISA domain to provide your professional feedback on the facilitator's performance.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {domains.map((domain, idx) => (
              <motion.button
                key={domain.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => handleDomainSelect(domain)}
                className="group relative w-full text-left"
              >
                <div className="absolute inset-0 bg-[#00BFFF] transform translate-x-1 translate-y-1 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform" />
                <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 border-2 border-black bg-[#0a1628] hover:bg-[#0c1e36] transition-all overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_2px,3px_100%]" />
                  <div className="flex items-start sm:items-center gap-5 relative z-10">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-black/40 border border-[#00BFFF]/20 flex items-center justify-center text-[#00BFFF] group-hover:border-[#00BFFF]/50 group-hover:scale-105 transition-all">
                      {React.cloneElement(domain.icon as React.ReactElement, { size: 18 })}
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[9px] font-black text-[#00BFFF] uppercase tracking-widest block opacity-70">
                        {domain.id}
                      </span>
                      <h4 className="text-sm sm:text-base font-black text-white uppercase tracking-tight group-hover:text-[#00BFFF] transition-colors leading-tight">
                        {domain.name}
                      </h4>
                      <p className="text-[9px] text-slate-400 font-medium uppercase leading-relaxed max-w-xl">
                        {domain.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative z-10 flex flex-shrink-0 items-center justify-end sm:mt-0 mt-2">
                    <div className="flex items-center gap-3 py-2 px-4 bg-black/40 border-2 border-white/10 group-hover:border-[#00BFFF] transition-all active:scale-95">
                      <span className="text-[9px] font-black text-white uppercase tracking-[0.2em]">
                        Continue
                      </span>
                      <ArrowRight
                        size={14}
                        className="text-[#00BFFF] group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluation Modal */}
      <AnimatePresence>
        {step === 'form' && (
          <div className="fixed inset-0 z-[1000]">
            {/* Backdrop Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setStep('selection')}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Scrollable Container */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed inset-0 overflow-y-auto"
              data-lenis-prevent
            >
              <div className="flex min-h-full items-center justify-center p-4 sm:p-6 pointer-events-none">
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.95 }}
                  className="relative w-full max-w-3xl shadow-[0_0_100px_rgba(0,0,0,0.8)] pointer-events-auto my-6"
                  ref={formRef}
                >
                  <div
                    className="relative p-5 sm:p-8 border-[3px] sm:border-[4px] border-black bg-[#0a1628]"
                    style={{
                      background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)',
                    }}
                  >
                    <button
                      onClick={() => setStep('selection')}
                      className="absolute top-3 right-3 sm:top-5 sm:right-5 text-white/50 hover:text-[#00BFFF] transition-colors p-2 z-[1010]"
                    >
                      <X size={20} />
                    </button>

                    <div className="mb-10 space-y-6">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-xl sm:text-3xl font-black text-white uppercase tracking-tighter flex items-baseline gap-3 leading-none">
                          <span className="text-[#00BFFF] text-3xl sm:text-5xl italic">A.</span>
                          <span>How would you rate the Facilitator?</span>
                        </h3>
                        <div className="h-1 w-16 bg-[#00BFFF]" />
                      </div>
                      
                      <div className="py-4 border-y border-[#00BFFF]/10">
                        <p className="text-[10px] sm:text-[11px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed">
                          Rate the facilitator by ticking <span className="text-[#00BFFF] font-black underline underline-offset-4">(✓)</span> the appropriate boxes below based on your training experience.
                        </p>
                      </div>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                      {errors.form && (
                        <div className="p-4 bg-red-500/10 border-2 border-red-500 text-red-200 text-[10px] font-black uppercase tracking-widest">
                          {errors.form}
                        </div>
                      )}

                      <div className="space-y-3">
                        <RatingRow label="Facilitator's presentation skills" name="presentationSkills" error={errors.presentationSkills} />
                        <RatingRow label="Facilitator's knowledge on subject" name="knowledge" error={errors.knowledge} />
                        <RatingRow label="Facilitator's confidence in the subject" name="confidence" error={errors.confidence} />
                        <RatingRow label="Facilitator's ability to involve / engage the class" name="engagement" error={errors.engagement} />
                        <RatingRow label="Time Management" name="timeManagement" error={errors.timeManagement} />
                      </div>

                      <div className="pt-8 mt-8 border-t border-white/10 space-y-6">
                        <div className="flex flex-col gap-2">
                          <h3 className="text-xl sm:text-3xl font-black text-white uppercase tracking-tighter flex items-baseline gap-3 leading-none">
                            <span className="text-[#00BFFF] text-3xl sm:text-5xl italic">B.</span>
                            <span>Comments & Suggestions</span>
                          </h3>
                          <div className="h-1 w-16 bg-[#00BFFF]" />
                        </div>
                        <div className="space-y-4">
                          <div className="bg-white/[0.02] border border-white/5 p-6 space-y-4">
                            <label className="text-[10px] font-black uppercase text-[#00BFFF] tracking-widest flex items-center gap-2">
                              <MessageSquare size={14} /> Detailed Insights
                            </label>
                            <textarea
                              name="message"
                              value={form.message}
                              onChange={handleChange}
                              placeholder="WHAT COULD WE DO BETTER? YOUR THOUGHTS ARE INVALUABLE..."
                              className={cn(
                                'w-full bg-black/50 border-2 border-black p-4 text-white font-bold text-xs focus:border-[#00BFFF] outline-none transition-all placeholder:text-white/20 min-h-[140px] resize-none',
                                errors.message && 'border-red-500',
                              )}
                            />
                            {errors.message && (
                              <p className="text-[8px] text-red-500 font-black uppercase">{errors.message}</p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center pt-4 opacity-80 hover:opacity-100 transition-opacity">
                        <div className="scale-75 sm:scale-90">
                          <TurnstileCaptcha size="normal" onVerify={(token) => setForm((prev) => ({ ...prev, captchaToken: token }))} />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-[#00BFFF] border-[3px] border-black text-black font-black uppercase tracking-[0.2em] text-[9px] flex items-center justify-center gap-3 hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all active:scale-[0.98] disabled:opacity-50"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Evaluation'} <Send size={16} />
                      </button>
                    </form>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Success Modal */}
      <AnimatePresence>
        {successMessage && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSuccessMessage(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative bg-[#00BFFF] border-[10px] border-black p-8 sm:p-14 max-w-lg w-full text-center shadow-[0_0_50px_rgba(0,191,255,0.3)] z-10"
            >
              <div className="bg-black w-24 h-24 flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <CheckCircle className="w-14 h-14 text-[#00BFFF]" />
              </div>
              <h3 className="text-black font-black text-3xl uppercase mb-6 tracking-tighter">
                Insight Recorded
              </h3>
              <p className="text-black font-bold uppercase tracking-widest text-[10px] sm:text-xs leading-relaxed mb-10">
                {successMessage}
              </p>
              <button
                onClick={() => setSuccessMessage(null)}
                className="w-full py-5 bg-black text-[#00BFFF] font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-black transition-all"
              >
                Return to Portal
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Feedback;
