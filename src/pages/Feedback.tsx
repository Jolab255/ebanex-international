import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Star,
  MessageSquare,
  CheckCircle,
  X,
  Send,
  ChevronDown,
  ShieldCheck,
  User,
  Mail,
  Zap,
} from 'lucide-react';
import { SEO } from '../components/layout';
import { Squares, ScrollReveal } from '../components/animations';
import { TurnstileCaptcha } from '../components/common';
import { sendFeedback } from '../lib/api';
import { cn } from '../lib/utils';

interface FeedbackFormState {
  fullName: string;
  email: string;
  rating: string;
  category: string;
  message: string;
  website: string; // Honeypot
  captchaToken: string;
}

interface FeedbackFormErrors {
  fullName?: string;
  email?: string;
  rating?: string;
  message?: string;
  form?: string;
}

const Feedback: React.FC = () => {
  const [form, setForm] = useState<FeedbackFormState>({
    fullName: '',
    email: '',
    rating: '5',
    category: 'Training Program',
    message: '',
    website: '',
    captchaToken: '',
  });

  const [errors, setErrors] = useState<FeedbackFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: false, margin: '-100px' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined, form: undefined }));
  };

  const setRating = (val: number) => {
    setForm((prev) => ({ ...prev, rating: String(val) }));
    setErrors((prev) => ({ ...prev, rating: undefined }));
  };

  const validate = (): boolean => {
    const nextErrors: FeedbackFormErrors = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = 'Your name is required.';
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!form.message.trim()) {
      nextErrors.message = 'Please provide your feedback details.';
    } else if (form.message.trim().length < 5) {
      nextErrors.message = 'Feedback is too short.';
    }

    if (!form.captchaToken) {
      nextErrors.form = 'Please complete the security check.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.website) {
      setSuccessMessage('Thank you for your feedback! It helps us improve our services.');
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);
    const result = await sendFeedback({
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      rating: form.rating,
      category: form.category,
      message: form.message.trim(),
      website: form.website,
      captchaToken: form.captchaToken,
    });

    setIsSubmitting(false);

    if (!result.ok) {
      setErrors((prev) => ({
        ...prev,
        form: result.error ?? 'Unable to submit feedback. Please try again.',
      }));
      return;
    }

    setSuccessMessage('Thank you for your feedback! It helps us improve our services.');
    setForm({
      fullName: '',
      email: '',
      rating: '5',
      category: 'Training Program',
      message: '',
      website: '',
      captchaToken: '',
    });
  };

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <SEO
        title="Client Feedback | Ebanex International"
        description="Share your experience with Ebanex International. Your feedback drives our excellence in training and advisory."
        canonical="https://ebanexint.co.tz/feedback"
      />

      {/* Hero Header */}
      <section className="relative pt-16 pb-2 sm:pt-20 sm:pb-4 bg-[linear-gradient(135deg,#000000_50%,#00BFFF_50%)] overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Squares
            speed={0.13}
            squareSize={40}
            direction="diagonal"
            borderColor="rgba(255,255,255,0.08)"
            hoverFillColor="rgba(255,255,255,0.05)"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-block bg-black py-3 px-8 border-4 border-black mb-4 shadow-[10px_10px_0px_0px_rgba(0,191,255,0.1)]">
            <ScrollReveal yOffset={10}>
              <h1 className="text-3xl sm:text-5xl font-black font-heading text-white uppercase tracking-tighter">
                Client <span className="text-[#00BFFF]">Feedback</span>
              </h1>
            </ScrollReveal>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto bg-black py-2 px-6 border-2 border-black text-slate-300 font-medium text-[10px] sm:text-sm uppercase tracking-widest w-fit"
          >
            Your Insight. Our Continuous Improvement.
          </motion.div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="relative z-20 py-12 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Squares
            speed={0.13}
            squareSize={40}
            direction="diagonal"
            borderColor="rgba(255,255,255,0.1)"
            hoverFillColor="rgba(255,255,255,0.05)"
          />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#00BFFF] transform translate-x-3 translate-y-3" />
            <div
              className="relative p-6 sm:p-10 border-[4px] sm:border-[10px] border-black bg-[#0a1628]"
              style={{
                background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)',
              }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#00BFFF] flex items-center justify-center text-black">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tighter">
                    Service Experience
                  </h3>
                  <p className="text-[#00BFFF] text-[9px] font-black uppercase tracking-widest">
                    Help us serve you better
                  </p>
                </div>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                {/* Honeypot */}
                <div className="hidden">
                  <input
                    type="text"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    tabIndex={-1}
                  />
                </div>

                {errors.form && (
                  <div className="p-4 bg-red-500/10 border-2 border-red-500 text-red-200 text-[10px] font-black uppercase tracking-widest">
                    {errors.form}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-[#00BFFF] tracking-widest flex items-center gap-2">
                      <User size={12} /> Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="YOUR NAME"
                      className={cn(
                        'w-full bg-black border-2 border-black p-3 text-white font-bold text-xs focus:border-[#00BFFF] outline-none transition-all placeholder:text-white/20',
                        errors.fullName && 'border-red-500',
                      )}
                    />
                    {errors.fullName && (
                      <p className="text-[8px] text-red-500 font-black uppercase">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-[#00BFFF] tracking-widest flex items-center gap-2">
                      <Mail size={12} /> Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="EMAIL@EXAMPLE.COM"
                      className={cn(
                        'w-full bg-black border-2 border-black p-3 text-white font-bold text-xs focus:border-[#00BFFF] outline-none transition-all placeholder:text-white/20',
                        errors.email && 'border-red-500',
                      )}
                    />
                    {errors.email && (
                      <p className="text-[8px] text-red-500 font-black uppercase">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-[#00BFFF] tracking-widest flex items-center gap-2">
                      <Zap size={12} /> Category
                    </label>
                    <div className="relative">
                      <select
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        className="w-full bg-black border-2 border-black p-3 text-white font-bold text-xs focus:border-[#00BFFF] outline-none appearance-none cursor-pointer uppercase"
                      >
                        <option value="Training Program">Training Program</option>
                        <option value="Institutional Advisory">Institutional Advisory</option>
                        <option value="Cyber Lab Experience">Cyber Lab Experience</option>
                        <option value="Conference & Events">Conference & Events</option>
                        <option value="Customer Support">Customer Support</option>
                        <option value="Other">Other</option>
                      </select>
                      <ChevronDown
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#00BFFF] pointer-events-none"
                        size={16}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-[#00BFFF] tracking-widest flex items-center gap-2">
                      <Star size={12} /> Rating
                    </label>
                    <div className="flex items-center gap-2 bg-black border-2 border-black p-2.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="focus:outline-none transition-transform active:scale-110"
                        >
                          <Star
                            size={20}
                            className={cn(
                              'transition-colors',
                              Number(form.rating) >= star
                                ? 'fill-[#00BFFF] text-[#00BFFF]'
                                : 'text-white/20',
                            )}
                          />
                        </button>
                      ))}
                      <span className="ml-auto text-[#00BFFF] font-black text-xs">
                        {form.rating}/5
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-[#00BFFF] tracking-widest flex items-center gap-2">
                    <ShieldCheck size={12} /> Your Experience
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="TELL US WHAT YOU LIKED OR HOW WE CAN IMPROVE..."
                    className={cn(
                      'w-full bg-black border-2 border-black p-3 text-white font-bold text-xs focus:border-[#00BFFF] outline-none transition-all placeholder:text-white/20 min-h-[120px] resize-none',
                      errors.message && 'border-red-500',
                    )}
                  />
                  {errors.message && (
                    <p className="text-[8px] text-red-500 font-black uppercase">{errors.message}</p>
                  )}
                </div>

                <div className="flex justify-center scale-90">
                  <TurnstileCaptcha
                    onVerify={(token) => setForm((prev) => ({ ...prev, captchaToken: token }))}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#00BFFF] border-4 border-black text-black font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 hover:bg-white transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Feedback'} <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center px-4"
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSuccessMessage(null)}
            />
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative bg-[#00BFFF] border-[10px] border-black p-8 sm:p-12 max-w-lg w-full text-center shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]"
            >
              <button
                onClick={() => setSuccessMessage(null)}
                className="absolute top-4 right-4 text-black/40 hover:text-black transition-colors"
              >
                <X size={24} />
              </button>
              <div className="bg-black w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-[#00BFFF]" />
              </div>
              <h3 className="text-black font-black text-2xl uppercase mb-4 tracking-tighter">
                Feedback Received
              </h3>
              <p className="text-black font-bold uppercase tracking-widest text-xs leading-relaxed">
                {successMessage}
              </p>
              <button
                onClick={() => setSuccessMessage(null)}
                className="mt-10 w-full py-4 bg-black text-[#00BFFF] font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-black transition-all"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Feedback;
