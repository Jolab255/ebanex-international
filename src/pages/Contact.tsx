
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { sendContactInquiry } from '../lib/api';

interface ContactFormState {
  fullName: string;
  email: string;
  service: string;
  message: string;
}

interface ContactFormErrors {
  fullName?: string;
  email?: string;
  service?: string;
  message?: string;
  form?: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactFormState>({
    fullName: '',
    email: '',
    service: 'Corporate Training',
    message: '',
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

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

    if (!form.service.trim()) {
      nextErrors.service = 'Please select a service.';
    }

    if (!form.message.trim()) {
      nextErrors.message = 'Please tell us how we can help.';
    } else if (form.message.trim().length < 20) {
      nextErrors.message = 'Message should be at least 20 characters.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage(null);

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
        form: result.error ?? 'Unable to send your inquiry. Please try again.',
      }));
      return;
    }

    setSuccessMessage('Thank you. Your inquiry has been received, and our team will get back to you shortly.');
    setForm({
      fullName: '',
      email: '',
      service: 'Corporate Training',
      message: '',
    });
  };

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
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              {errors.form && (
                <div className="mb-2 rounded-xl border border-red-500/40 bg-red-950/40 px-4 py-3 text-sm text-red-200">
                  {errors.form}
                </div>
              )}
              {successMessage && (
                <div className="mb-2 rounded-xl border border-emerald-500/40 bg-emerald-950/40 px-4 py-3 text-sm text-emerald-200">
                  {successMessage}
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-purple-500 transition-colors outline-none"
                    placeholder="John Doe"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="text-xs text-red-400">
                      {errors.fullName}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Work Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-purple-500 transition-colors outline-none"
                    placeholder="john@enterprise.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Institutional Service</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-purple-500 transition-colors outline-none appearance-none"
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? 'service-error' : undefined}
                >
                  <option value="Corporate Training">Corporate Training</option>
                  <option value="Cyber Lab Access">Cyber Lab Access</option>
                  <option value="Strategic Advisory">Strategic Advisory</option>
                  <option value="Research Partnership">Research Partnership</option>
                </select>
                {errors.service && (
                  <p id="service-error" className="text-xs text-red-400">
                    {errors.service}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-purple-500 transition-colors outline-none min-h-[150px]"
                  placeholder="How can we help you?"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-xs text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-purple-600 rounded-xl font-bold text-white flex items-center justify-center gap-2 hover:bg-purple-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
