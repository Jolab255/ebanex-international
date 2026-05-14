import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ArrowRight,
  Send,
  Loader2,
  CheckCircle,
  ChevronDown,
  Edit2,
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { sendTrainingEnrollment } from '../../lib/api';
import { TurnstileCaptcha } from '../common';
import { TRAINING_PROGRAMS, TrainingProgram } from '../../constants/trainingData';

const TZS_TO_USD = 2600;

interface EnrollmentFormData {
  fullName: string;
  email: string;
  phone: string;
  institution: string;
  selectedProgramSlug: string;
  sessionType: 'Physical' | 'Online';
  trainingType: 'Group' | 'Individual';
  groupSize: number;
  acceptedTerms: boolean;
  website: string; // Honeypot
  captchaToken: string;
}

interface EnrollmentFormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  institution?: string;
  acceptedTerms?: string;
  form?: string;
}

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  program: TrainingProgram | null;
  themeColor?: string;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  program,
  themeColor = '#00BFFF',
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [showPriceNotice, setShowPriceNotice] = useState(false);
  const [formData, setFormData] = useState<EnrollmentFormData>({
    fullName: '',
    email: '',
    phone: '',
    institution: '',
    selectedProgramSlug: program?.slug || '',
    sessionType: 'Physical',
    trainingType: 'Individual',
    groupSize: 1,
    acceptedTerms: false,
    website: '',
    captchaToken: '',
  });
  const [errors, setErrors] = useState<EnrollmentFormErrors>({});

  // Reset form when program prop changes
  useEffect(() => {
    if (program) {
      setFormData((prev) => ({ ...prev, selectedProgramSlug: program.slug }));
    }
  }, [program]);

  const isCisa = formData.selectedProgramSlug === 'cisa' || 
                 (TRAINING_PROGRAMS[formData.selectedProgramSlug]?.title || '').includes('CISA');

  const calculateTotalCostFormatted = () => {
    const programPrice = TRAINING_PROGRAMS[formData.selectedProgramSlug]?.price;
    if (!programPrice) return 'Contact for Quote';
    const count = formData.trainingType === 'Individual' ? 1 : (formData.groupSize || 1);
    const total = count * programPrice;
    const usd = (total / TZS_TO_USD).toFixed(0);
    return `${total.toLocaleString()} TZS (Approx. $${usd} USD)`;
  };

  const totalCostDisplay = calculateTotalCostFormatted();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
      setErrors((prev) => ({ ...prev, [name]: undefined, form: undefined }));
      return;
    }

    const nextFormData = { ...formData, [name]: value };
    const nextIsCisa = nextFormData.selectedProgramSlug === 'cisa' || 
                       (TRAINING_PROGRAMS[nextFormData.selectedProgramSlug]?.title || '').includes('CISA');

    if (nextIsCisa) {
      const currentIsCisa = formData.selectedProgramSlug === 'cisa' || 
                           (TRAINING_PROGRAMS[formData.selectedProgramSlug]?.title || '').includes('CISA');
      if (!currentIsCisa || (name === 'selectedProgramSlug' && value === 'cisa')) {
        setShowPriceNotice(true);
      }
    }

    if (name === 'groupSize') {
      const val = parseInt(value) || 1;
      setFormData((prev) => ({ ...prev, [name]: Math.max(1, val) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    
    setErrors((prev) => ({ ...prev, [name]: undefined, form: undefined }));
  };

  const validateStep = (step: number): boolean => {
    const nextErrors: EnrollmentFormErrors = {};

    if (step === 1) {
      if (!formData.fullName.trim()) nextErrors.fullName = 'Full name is required.';
      if (!formData.email.trim()) {
        nextErrors.email = 'Email is required.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        nextErrors.email = 'Enter a valid email.';
      }
      if (!formData.phone.trim()) nextErrors.phone = 'Phone number is required.';
    }

    if (step === 2) {
      if (!formData.selectedProgramSlug) nextErrors.form = 'Please select a program.';
      if (formData.trainingType === 'Group' && !formData.institution.trim()) {
        nextErrors.institution = 'Institution name is required for group training.';
      }
    }

    if (step === 3) {
      if (!formData.acceptedTerms) {
        nextErrors.acceptedTerms = 'You must accept the terms.';
      }
      if (!formData.captchaToken) {
        nextErrors.form = 'Please complete the security check.';
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    if (e) e.preventDefault();

    // Validate all steps before submission
    if (!validateStep(1) || !validateStep(2) || !validateStep(3)) {
      // If validation fails on an earlier step, move back to it
      if (!validateStep(1)) setCurrentStep(1);
      else if (!validateStep(2)) setCurrentStep(2);
      return;
    }

    // Honeypot
    if (formData.website) {
      setSuccessMessage('Thank you for enrolling! We will contact you shortly.');
      resetForm();
      return;
    }

    setIsSubmitting(true);
    setErrors((prev) => ({ ...prev, form: undefined }));

    const programTitle =
      TRAINING_PROGRAMS[formData.selectedProgramSlug]?.title || 'Unknown Program';

    const result = await sendTrainingEnrollment({
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      institution: formData.institution.trim() || 'N/A',
      program: programTitle,
      sessionType: formData.sessionType,
      trainingType: formData.trainingType,
      groupSize: formData.trainingType === 'Group' ? formData.groupSize : 1,
      totalCost: isCisa ? totalCostDisplay : 'Contact for Quote',
      website: formData.website,
      captchaToken: formData.captchaToken,
    });

    setIsSubmitting(false);

    if (result.ok) {
      setSuccessMessage(
        'Thank you for enrolling! We have received your details and will contact you shortly with further information.',
      );
      resetForm();
    } else {
      setErrors((prev) => ({
        ...prev,
        form: result.error || 'Unable to process enrollment. Please try again.',
      }));
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      institution: '',
      selectedProgramSlug: program?.slug || '',
      sessionType: 'Physical',
      trainingType: 'Individual',
      groupSize: 1,
      acceptedTerms: false,
      website: '',
      captchaToken: '',
    });
    setCurrentStep(1);
    setShowPriceNotice(false);
  };

  if (!isOpen) return null;

  const allPrograms = Object.values(TRAINING_PROGRAMS);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 lg:p-8"
          >
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              onClick={() => !isSubmitting && onClose()}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-black border-[4px] sm:border-[6px] shadow-[20px_20px_0px_0px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col max-h-[90vh]"
              style={{ borderColor: themeColor }}
            >
              <div className="p-4 sm:p-6 overflow-y-auto scrollbar-hide">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors z-10"
                  style={{ '--hover-color': themeColor } as React.CSSProperties}
                >
                  <X size={20} className="hover:text-[var(--hover-color)]" />
                </button>

                <div className="relative mb-4 sm:mb-6">
                  <span className="text-[11px] font-black uppercase tracking-[0.4em] mb-1 block" style={{ color: themeColor }}>
                    Step {currentStep} of 3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tighter leading-none">
                    {currentStep === 1 && <>Personal <span style={{ color: themeColor }}>Details</span></>}
                    {currentStep === 2 && <>Training <span style={{ color: themeColor }}>Details</span></>}
                    {currentStep === 3 && <>Confirm <span style={{ color: themeColor }}>Enrollment</span></>}
                  </h2>
                  <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-1 h-10" style={{ backgroundColor: themeColor }} />
                </div>

                {errors.form && (
                  <div className="mb-4 p-3 bg-red-500/10 border-l-4 border-red-500 text-red-500 text-[12px] font-bold uppercase tracking-widest">
                    {errors.form}
                  </div>
                )}

                <div className="space-y-4">
                  {currentStep === 1 && (
                    <div className="space-y-3">
                      <div className="grid md:grid-cols-2 gap-2 sm:gap-3">
                        <div className="space-y-1 group">
                          <label className="text-[9px] font-black uppercase tracking-widest ml-1" style={{ color: themeColor }}>
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className={cn(
                              'w-full bg-white/5 border-[2px] border-white/10 p-1.5 sm:p-2 text-white font-bold text-[10px] sm:text-[12px] outline-none transition-all placeholder:text-white/20',
                              errors.fullName ? 'border-red-500' : 'focus:border-[var(--theme-color)]',
                            )}
                            style={{ '--theme-color': themeColor } as React.CSSProperties}
                            placeholder="YOUR FULL NAME"
                          />
                          {errors.fullName && (
                            <p className="text-[9px] text-red-500 font-black uppercase mt-1">
                              {errors.fullName}
                            </p>
                          )}
                        </div>
                        <div className="space-y-1 group">
                          <label className="text-[9px] font-black uppercase tracking-widest ml-1" style={{ color: themeColor }}>
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={cn(
                              'w-full bg-white/5 border-[2px] border-white/10 p-1.5 sm:p-2 text-white font-bold text-[10px] sm:text-[12px] outline-none transition-all placeholder:text-white/20',
                              errors.email ? 'border-red-500' : 'focus:border-[var(--theme-color)]',
                            )}
                            style={{ '--theme-color': themeColor } as React.CSSProperties}
                            placeholder="EMAIL@INSTITUTION.COM"
                          />
                          {errors.email && (
                            <p className="text-[9px] text-red-500 font-black uppercase mt-1">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-2 sm:gap-3">
                        <div className="space-y-1 group">
                          <label className="text-[9px] font-black uppercase tracking-widest ml-1" style={{ color: themeColor }}>
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={cn(
                              'w-full bg-white/5 border-[2px] border-white/10 p-1.5 sm:p-2 text-white font-bold text-[10px] sm:text-[12px] outline-none transition-all placeholder:text-white/20',
                              errors.phone ? 'border-red-500' : 'focus:border-[var(--theme-color)]',
                            )}
                            style={{ '--theme-color': themeColor } as React.CSSProperties}
                            placeholder="+255 --- --- ---"
                          />
                          {errors.phone && (
                            <p className="text-[9px] text-red-500 font-black uppercase mt-1">
                              {errors.phone}
                            </p>
                          )}
                        </div>
                        <div className="space-y-1 group">
                          <label className="text-[9px] font-black uppercase tracking-widest ml-1" style={{ color: themeColor }}>
                            Institution (Required for Group Training)
                          </label>
                          <input
                            type="text"
                            name="institution"
                            value={formData.institution}
                            onChange={handleInputChange}
                            className={cn(
                              'w-full bg-white/5 border-[2px] border-white/10 p-1.5 sm:p-2 text-white font-bold text-[10px] sm:text-[12px] outline-none transition-all placeholder:text-white/20',
                              errors.institution ? 'border-red-500' : 'focus:border-[var(--theme-color)]',
                            )}
                            style={{ '--theme-color': themeColor } as React.CSSProperties}
                            placeholder="ORGANIZATION NAME"
                          />
                          {errors.institution && (
                            <p className="text-[9px] text-red-500 font-black uppercase mt-1">
                              {errors.institution}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <label className="text-[9px] font-black uppercase tracking-widest ml-1" style={{ color: themeColor }}>
                          Select Training Program
                        </label>
                        <div className="relative">
                          <select
                            name="selectedProgramSlug"
                            value={formData.selectedProgramSlug}
                            onChange={handleInputChange}
                            className="w-full bg-white/5 border-[2px] border-white/10 p-1.5 sm:p-2 text-white font-bold text-[10px] sm:text-[12px] focus:border-[var(--theme-color)] outline-none appearance-none cursor-pointer uppercase tracking-tight"
                            style={{ '--theme-color': themeColor } as React.CSSProperties}
                          >
                            <option value="" className="bg-black">
                              -- CHOOSE A PROGRAM --
                            </option>
                            {allPrograms.map((p) => (
                              <option key={p.slug} value={p.slug} className="bg-black">
                                {p.title}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: themeColor }}>
                            <ChevronDown size={14} />
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-2 sm:gap-3">
                        <div className="space-y-1">
                          <label className="text-[9px] font-black uppercase tracking-widest ml-1" style={{ color: themeColor }}>
                            Session Preference
                          </label>
                          <div className="relative">
                            <select
                              name="sessionType"
                              value={formData.sessionType}
                              onChange={handleInputChange}
                              className="w-full bg-white/5 border-[2px] border-white/10 p-1.5 sm:p-2 text-white font-bold text-[10px] sm:text-[12px] focus:border-[var(--theme-color)] outline-none appearance-none cursor-pointer uppercase tracking-tight"
                              style={{ '--theme-color': themeColor } as React.CSSProperties}
                            >
                              <option value="Physical" className="bg-black">
                                Physical (In-Person)
                              </option>
                              <option value="Online" className="bg-black">
                                Online (Virtual)
                              </option>
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: themeColor }}>
                              <ChevronDown size={14} />
                            </div>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-black uppercase tracking-widest ml-1" style={{ color: themeColor }}>
                            Training Type
                          </label>
                          <div className="relative">
                            <select
                              name="trainingType"
                              value={formData.trainingType}
                              onChange={handleInputChange}
                              className="w-full bg-white/5 border-[2px] border-white/10 p-1.5 sm:p-2 text-white font-bold text-[10px] sm:text-[12px] focus:border-[var(--theme-color)] outline-none appearance-none cursor-pointer uppercase tracking-tight"
                              style={{ '--theme-color': themeColor } as React.CSSProperties}
                            >
                              <option value="Group" className="bg-black">
                                Group Training
                              </option>
                              <option value="Individual" className="bg-black">
                                Individual Training
                              </option>
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: themeColor }}>
                              <ChevronDown size={14} />
                            </div>
                          </div>
                        </div>
                      </div>

                      {formData.trainingType === 'Group' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="space-y-3"
                        >
                          <div className="space-y-1 group">
                            <label className="text-[9px] font-black uppercase tracking-widest ml-1" style={{ color: themeColor }}>
                              Institution Name
                            </label>
                            <input
                              type="text"
                              name="institution"
                              value={formData.institution}
                              onChange={handleInputChange}
                              className={cn(
                                'w-full bg-white/5 border-[2px] border-white/10 p-1.5 sm:p-2 text-white font-bold text-[10px] sm:text-[12px] outline-none transition-all placeholder:text-white/20',
                                errors.institution ? 'border-red-500' : 'focus:border-[var(--theme-color)]',
                              )}
                              style={{ '--theme-color': themeColor } as React.CSSProperties}
                              placeholder="ORGANIZATION NAME"
                            />
                            {errors.institution && (
                              <p className="text-[9px] text-red-500 font-black uppercase mt-1">
                                {errors.institution}
                              </p>
                            )}
                          </div>

                          <div className="space-y-1">
                            <label className="text-[9px] font-black uppercase tracking-widest ml-1" style={{ color: themeColor }}>
                              Number of People in Group
                            </label>
                            <input
                              type="number"
                              name="groupSize"
                              min="1"
                              value={formData.groupSize}
                              onChange={handleInputChange}
                              className="w-full bg-white/5 border-[2px] border-white/10 p-1.5 sm:p-2 text-white font-bold text-[10px] sm:text-[12px] focus:border-[var(--theme-color)] outline-none transition-all"
                              style={{ '--theme-color': themeColor } as React.CSSProperties}
                            />
                          </div>
                        </motion.div>
                      )}

                      {/* Live Price Preview in Step 2 */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="p-3 bg-white/5 border-l-4 border-white/20 mt-2"
                        style={{ borderLeftColor: themeColor }}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-[9px] font-black uppercase opacity-60" style={{ color: themeColor }}>Estimated Investment</p>
                            <p className="text-[14px] font-black text-white uppercase tracking-tight">
                              {totalCostDisplay}
                            </p>
                          </div>
                          {isCisa && (
                            <div className="text-right">
                              <p className="text-[8px] font-bold text-white/40 uppercase tracking-widest">Fee Structure</p>
                              <p className="text-[9px] font-black text-white/80 uppercase">1,000,000 TZS / Person</p>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-3">
                      <div className="bg-white/5 border-[2px] border-white/10 overflow-hidden">
                        <div className="p-3 space-y-4">
                          {/* Personal Information Section */}
                          <div className="relative group">
                            <div className="flex justify-between items-center mb-1.5">
                              <p className="text-[9px] font-black uppercase tracking-widest" style={{ color: themeColor }}>01. Personal Info</p>
                              <button 
                                onClick={() => setCurrentStep(1)}
                                className="flex items-center gap-1 text-[8px] font-black uppercase hover:text-white transition-colors opacity-60 hover:opacity-100"
                                style={{ color: themeColor }}
                              >
                                <Edit2 size={8} /> Edit
                              </button>
                            </div>
                            <div className="grid grid-cols-3 gap-2 pl-2 border-l-2 border-white/10">
                              <div>
                                <p className="text-[7px] font-black text-white/30 uppercase tracking-widest mb-0.5">Name</p>
                                <p className="text-[10px] font-bold text-white uppercase truncate">{formData.fullName}</p>
                              </div>
                              <div>
                                <p className="text-[7px] font-black text-white/30 uppercase tracking-widest mb-0.5">Email/Phone</p>
                                <p className="text-[10px] font-bold text-white truncate">{formData.email}</p>
                                <p className="text-[9px] text-white/60">{formData.phone}</p>
                              </div>
                              <div>
                                <p className="text-[7px] font-black text-white/30 uppercase tracking-widest mb-0.5">Institution</p>
                                <p className="text-[10px] font-bold text-white uppercase truncate">{formData.institution || 'N/A'}</p>
                              </div>
                            </div>
                          </div>

                          {/* Training Details Section */}
                          <div className="relative group">
                            <div className="flex justify-between items-center mb-1.5">
                              <p className="text-[9px] font-black uppercase tracking-widest" style={{ color: themeColor }}>02. Training Details</p>
                              <button 
                                onClick={() => setCurrentStep(2)}
                                className="flex items-center gap-1 text-[8px] font-black uppercase hover:text-white transition-colors opacity-60 hover:opacity-100"
                                style={{ color: themeColor }}
                              >
                                <Edit2 size={8} /> Edit
                              </button>
                            </div>
                            <div className="pl-2 border-l-2 border-white/10 grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-[7px] font-black text-white/30 uppercase tracking-widest mb-0.5">Program Selected</p>
                                <p className="text-[10px] font-bold text-white uppercase leading-tight">
                                  {TRAINING_PROGRAMS[formData.selectedProgramSlug]?.title || 'Unknown'}
                                </p>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div>
                                  <p className="text-[7px] font-black text-white/30 uppercase tracking-widest mb-0.5">Delivery</p>
                                  <p className="text-[10px] font-bold text-white uppercase">{formData.trainingType} / {formData.sessionType}</p>
                                </div>
                                {formData.trainingType === 'Group' && (
                                  <div>
                                    <p className="text-[7px] font-black text-white/30 uppercase tracking-widest mb-0.5">Size</p>
                                    <p className="text-[10px] font-bold text-white uppercase">{formData.groupSize}</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Total Investment Highlight */}
                        <div className="px-3 py-3 bg-white/5 border-t border-white/10 flex justify-between items-center">
                          <div>
                            <p className="text-[8px] font-black uppercase tracking-[0.2em] mb-0.5" style={{ color: themeColor }}>Total Investment</p>
                            <p className="text-lg font-black text-white leading-none">
                              {totalCostDisplay}
                            </p>
                          </div>
                          <CheckCircle size={14} className="opacity-20" />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="flex items-start gap-2 cursor-pointer group">
                          <div className="relative flex items-center mt-0.5">
                            <input
                              type="checkbox"
                              name="acceptedTerms"
                              checked={formData.acceptedTerms}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <div className={cn(
                              "w-3.5 h-3.5 border-2 transition-all flex items-center justify-center",
                              formData.acceptedTerms ? "border-black" : "border-white/20 group-hover:border-[var(--theme-color)]"
                            )}
                            style={{ 
                              backgroundColor: formData.acceptedTerms ? themeColor : 'transparent',
                              '--theme-color': themeColor 
                            } as React.CSSProperties}>
                              {formData.acceptedTerms && <CheckCircle size={10} className="text-black" />}
                            </div>
                          </div>
                          <span className="text-[9px] sm:text-[10px] font-bold text-white/60 uppercase leading-tight select-none">
                            I confirm accuracy and agree to Ebanex training policies.
                          </span>
                        </label>
                        {errors.acceptedTerms && (
                          <p className="text-[8px] text-red-500 font-black uppercase">{errors.acceptedTerms}</p>
                        )}
                      </div>

                      <div className="flex justify-center py-1">
                        <TurnstileCaptcha
                          size="normal"
                          onVerify={(token) =>
                            setFormData((prev) => ({ ...prev, captchaToken: token }))
                          }
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3 pt-2">
                    {currentStep > 1 && (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex-1 py-2 sm:py-3 border-[2px] border-white/20 text-white font-black uppercase tracking-[0.2em] text-[10px] sm:text-[11px] flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                      >
                        Back
                      </button>
                    )}
                    
                    {currentStep < 3 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="flex-[2] py-2 sm:py-3 border-[2px] border-black text-black font-black uppercase tracking-[0.2em] text-[10px] sm:text-[11px] flex items-center justify-center gap-2 hover:bg-white transition-all active:scale-95"
                        style={{ backgroundColor: themeColor }}
                      >
                        Continue <ArrowRight size={12} />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={(e) => handleSubmit(e)}
                        disabled={isSubmitting}
                        className="flex-[2] py-2 sm:py-3 border-[2px] border-black text-black font-black uppercase tracking-[0.2em] text-[10px] sm:text-[11px] flex items-center justify-center gap-2 hover:bg-white transition-all active:scale-95 disabled:opacity-50"
                        style={{ backgroundColor: themeColor }}
                      >
                        {isSubmitting ? (
                          <>Processing... <Loader2 className="w-3 h-3 animate-spin" /></>
                        ) : (
                          <>Submit Enrollment <Send size={12} /></>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Notification */}
      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-[2100] flex items-center justify-center px-4 pointer-events-none"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <div className="relative border-[10px] border-black p-8 sm:p-12 max-w-lg w-full text-center shadow-[20px_20px_0px_0px_rgba(0,0,0,0.5)] pointer-events-auto" style={{ backgroundColor: themeColor }}>
              <button
                onClick={() => setSuccessMessage(null)}
                className="absolute top-4 right-4 text-black/40 hover:text-black transition-colors"
              >
                <X size={24} />
              </button>

              <div className="bg-black w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12" style={{ color: themeColor }} />
              </div>

              <h3 className="text-black font-black text-2xl uppercase mb-4 tracking-tighter">
                Enrollment Successful
              </h3>
              <p className="text-black font-bold uppercase tracking-widest text-sm leading-relaxed">
                {successMessage}
              </p>

              <button
                onClick={() => {
                  setSuccessMessage(null);
                  onClose();
                }}
                className="mt-10 w-full py-4 bg-black font-black uppercase tracking-[0.2em] text-[12px] hover:bg-white hover:text-black transition-all"
                style={{ color: themeColor }}
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Price Notice Modal */}
      <AnimatePresence>
        {showPriceNotice && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2200] flex items-center justify-center p-4"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative border-[10px] border-black p-8 max-w-md w-full text-center shadow-[20px_20px_0px_0px_rgba(0,0,0,0.5)]"
              style={{ backgroundColor: themeColor }}
            >
              <h3 className="text-black font-black text-xl uppercase mb-4">Training Cost Notice</h3>
              <p className="text-black font-bold text-sm mb-6 uppercase tracking-tight leading-relaxed">
                The investment for the {isCisa ? 'CISA' : 'this'} program is <br />
                <span className="text-2xl font-black">1,000,000 TZS</span> <br />
                per person (Approx. $385 USD)
              </p>
              <button
                onClick={() => setShowPriceNotice(false)}
                className="w-full py-3 bg-black font-black uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all"
                style={{ color: themeColor }}
              >
                I Understand & Accept
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
