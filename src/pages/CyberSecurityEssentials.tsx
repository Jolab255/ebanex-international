import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Award,
  DollarSign,
  Users,
  CheckCircle,
  AlertCircle,
  Shield,
  ArrowRight,
  X,
  ArrowLeft,
  Send,
  Loader2,
  FileText,
  Globe,
  Lock,
  Building,
  Check,
  ChevronDown
} from 'lucide-react';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { SEO } from '../components/layout';
import { Squares } from '../components/animations';
import { TurnstileCaptcha } from '../components/common';
import { sendCyberSecurityEssentialsRegistration } from '../lib/api';
import { cn } from '../lib/utils';


// Import assets
import cyberImg from '../assets/cybersecurity-skills.jpg';

interface RegistrationState {
  fullName: string;
  jobTitle: string;
  organization: string;
  department: string;
  email: string;
  phone: string;
  participantsCount: string;
  participantCategory: string;
  preferredPayment: 'Early Bird Fee' | 'Standard Fee' | '';
  invoiceRequired: 'Yes' | 'No' | '';
  specialRequests: string;
  website: string; // Honeypot
  captchaToken: string;
}

interface FormErrors {
  fullName?: string;
  jobTitle?: string;
  organization?: string;
  email?: string;
  phone?: string;
  participantsCount?: string;
  participantCategory?: string;
  preferredPayment?: string;
  invoiceRequired?: string;
  form?: string;
}

const CyberSecurityEssentials: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isOverviewExpanded, setIsOverviewExpanded] = useState(false);
  const [isExpertContactVisible, setIsExpertContactVisible] = useState(false);

  const [formData, setFormData] = useState<RegistrationState>({
    fullName: '',
    jobTitle: '',
    organization: '',
    department: '',
    email: '',
    phone: '',
    participantsCount: '1',
    participantCategory: '',
    preferredPayment: '',
    invoiceRequired: '',
    specialRequests: '',
    website: '',
    captchaToken: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const themeColor = '#00BFFF';

  // Lock scrolling when the form modal is open
  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isFormOpen]);

  // Clear errors.form after 4 seconds
  useEffect(() => {
    if (errors.form) {
      const timer = setTimeout(() => {
        setErrors((prev) => ({ ...prev, form: undefined }));
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [errors.form]);

  // Handle form field changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined, form: undefined }));
  };

  // Handle direct selection for custom button-based components
  const selectPreferredPayment = (value: 'Early Bird Fee' | 'Standard Fee') => {
    setFormData((prev) => ({ ...prev, preferredPayment: value }));
    setErrors((prev) => ({ ...prev, preferredPayment: undefined, form: undefined }));
  };

  const selectInvoiceRequired = (value: 'Yes' | 'No') => {
    setFormData((prev) => ({ ...prev, invoiceRequired: value }));
    setErrors((prev) => ({ ...prev, invoiceRequired: undefined, form: undefined }));
  };

  // Step-specific Validation
  const validateStep = (step: number): boolean => {
    const nextErrors: FormErrors = {};

    if (step === 1) {
      if (!formData.fullName.trim()) nextErrors.fullName = 'Full Name is required.';
      if (!formData.jobTitle.trim()) nextErrors.jobTitle = 'Job Title is required.';
      if (!formData.organization.trim()) nextErrors.organization = 'Organization is required.';
      
      if (!formData.email.trim()) {
        nextErrors.email = 'Email Address is required.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        nextErrors.email = 'Enter a valid email address.';
      }

      if (!formData.phone.trim()) {
        nextErrors.phone = 'Phone / WhatsApp is required.';
      }
    }

    if (step === 2) {
      const countNum = parseInt(formData.participantsCount, 10);
      if (!formData.participantsCount.trim()) {
        nextErrors.participantsCount = 'Number of participants is required.';
      } else if (isNaN(countNum) || countNum < 1) {
        nextErrors.participantsCount = 'Must be at least 1 participant.';
      }

      if (!formData.participantCategory) {
        nextErrors.participantCategory = 'Please select a category.';
      }

      if (!formData.preferredPayment) {
        nextErrors.preferredPayment = 'Please choose your payment category.';
      }

      if (!formData.invoiceRequired) {
        nextErrors.invoiceRequired = 'Please specify if you require an invoice.';
      }
    }

    if (step === 3) {
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

    // Honeypot anti-spam check
    if (formData.website) {
      console.log('Bot registration detected.');
      setSuccessMessage('Thank you for registering! We have received your details.');
      setIsFormOpen(false);
      return;
    }

    // Validate all steps before submitting
    if (!validateStep(1) || !validateStep(2) || !validateStep(3)) {
      if (!validateStep(1)) setCurrentStep(1);
      else if (!validateStep(2)) setCurrentStep(2);
      return;
    }

    setIsSubmitting(true);
    setErrors((prev) => ({ ...prev, form: undefined }));

    try {
      const response = await sendCyberSecurityEssentialsRegistration({
        fullName: formData.fullName.trim(),
        jobTitle: formData.jobTitle.trim(),
        organization: formData.organization.trim(),
        department: formData.department.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        participantsCount: parseInt(formData.participantsCount, 10) || 1,
        participantCategory: formData.participantCategory,
        preferredPayment: formData.preferredPayment,
        invoiceRequired: formData.invoiceRequired === 'Yes' ? 'Yes, please send a formal invoice' : 'No, invoice not required',
        specialRequests: formData.specialRequests.trim(),
        website: formData.website,
        captchaToken: formData.captchaToken,
      });

      if (response.ok) {
        setSuccessMessage(
          'Thank you for registering! We have received your details and our team will contact you promptly with payment instructions and further details.'
        );
        setIsFormOpen(false); // Close form popup
        setCurrentStep(1); // Reset back to step 1
        // Reset form
        setFormData({
          fullName: '',
          jobTitle: '',
          organization: '',
          department: '',
          email: '',
          phone: '',
          participantsCount: '1',
          participantCategory: '',
          preferredPayment: '',
          invoiceRequired: '',
          specialRequests: '',
          website: '',
          captchaToken: '',
        });
      } else {
        setErrors((prev) => ({
          ...prev,
          form: response.error || 'Something went wrong. Please check your network connection and try again.'
        }));
      }
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        form: 'The registration service is temporarily offline. Please contact info@ebanexint.co.tz directly.'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const overviewParagraphs = [
    "As organizations navigate an increasingly hostile threat landscape, safeguarding data and systems has transcended IT departments to become a core business necessity. Ebanex International's Cyber Security Essentials training is designed specifically to bridge the gap between technical security principles and real-world workplace application.",
    "This intensive 5-day training equips IT professionals, auditors, compliance officers, and business managers with the practical competencies required to identify operational vulnerabilities, mitigate social engineering vectors, and align company operations with leading standards.",
    "Led by seasoned practitioners, the course balances instruction with interactive labs and real-world breach analyses. Upon successful completion, participants earn 40 CPE hours along with a professional education certificate recognized for capacity building."
  ];

  const firstParagraph = overviewParagraphs[0];
  const remainingParagraphs = overviewParagraphs.slice(1);



  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <SEO
        title="Cyber Security Essentials | Ebanex International"
        description="Real-world cybersecurity skills for every professional. Register today for the Ebanex Cyber Security Essentials capacity building program."
        keywords="Cyber Security Essentials, Cybersecurity Training, IT audit, Tanzania, Ebanex, Capacity Building"
      />

      {/* Hero Section (Diagonal Two-Tone Layout) */}
      <section className="relative pt-6 pb-0 overflow-hidden bg-[linear-gradient(135deg,#000000_50%,#00BFFF_50%)]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Squares
            speed={0.13}
            squareSize={40}
            direction="diagonal"
            borderColor="rgba(255,255,255,0.08)"
            hoverFillColor="rgba(255,255,255,0.05)"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pb-20">
          <div className="max-w-5xl">
            {/* Header Title with Black BG */}
            <div className="inline-block bg-black py-4 px-8 border border-white/10 mb-[-2rem] ml-4 lg:ml-0 relative z-50 shadow-2xl">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white uppercase tracking-tighter leading-[0.9]">
                Cyber Security <span className="text-[#00BFFF]">Essentials</span>
              </h1>
            </div>

            <div className="relative w-full flex flex-col lg:flex-row items-center">
              
              {/* Mobile-only event image */}
              <div className="block md:hidden w-full px-4 mt-12 mb-[-4rem] relative z-20">
                <div className="relative aspect-video w-full">
                  <div className="absolute inset-0 bg-[#00BFFF]/5 z-20 pointer-events-none" />
                  <img
                    src={cyberImg}
                    alt="Cyber Security Essentials"
                    className="w-full h-full object-cover border-[6px] border-black shadow-[-10px_10px_0px_0px_rgba(0,191,255,0.1)]"
                  />
                </div>
              </div>

              {/* Left Column: Details & Actions */}
              <div className="w-full lg:w-[70%] relative z-40">
                <div
                  className="p-6 sm:p-10 border-[8px] border-black shadow-2xl relative overflow-visible ml-4 lg:ml-0 mt-24 lg:mt-20"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)',
                  }}
                >
                  <div className="relative z-10">
                    <p className="text-base sm:text-lg text-white/90 font-medium leading-relaxed mb-8">
                      Secure your seat today. Complete the registration form to enroll in the Cyber Security Essentials Training hosted by Ebanex International in Morogoro, Tanzania from 29 June to 03 July 2026.
                    </p>
                    
                    <div className="flex flex-row gap-3 w-full">
                      <button
                        onClick={() => {
                          setCurrentStep(1);
                          setIsFormOpen(true);
                        }}
                        className="flex-1 sm:flex-none justify-center h-12 px-3 sm:px-6 bg-[#00BFFF] text-black font-black text-[8px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest hover:bg-white transition-all flex items-center gap-1.5 sm:gap-2 group shadow-[0_0_20px_rgba(0,191,255,0.4)]"
                      >
                        <span className="whitespace-nowrap">Register Now</span>
                        <ArrowRight
                          size={12}
                          className="group-hover:translate-x-1 transition-transform shrink-0"
                        />
                      </button>

                      <div className="relative flex-1 sm:flex-none">
                        <button
                          onClick={() => setIsExpertContactVisible(!isExpertContactVisible)}
                          className={`w-full h-12 px-3 sm:px-6 border-2 font-black text-[8px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest transition-all flex items-center justify-center gap-1.5 sm:gap-2 z-50 relative ${
                            isExpertContactVisible
                              ? 'bg-white text-black border-white'
                              : 'border-white/20 text-white hover:bg-white hover:text-black'
                          }`}
                        >
                          {isExpertContactVisible ? (
                            <span className="flex items-center gap-1.5 sm:gap-2 justify-center">
                              Close Options <X size={12} className="shrink-0" />
                            </span>
                          ) : (
                            <span className="whitespace-nowrap">Speak to an Expert</span>
                          )}
                        </button>

                        <AnimatePresence>
                          {isExpertContactVisible && (
                            <div className="absolute bottom-full left-0 mb-4 flex flex-col gap-2 z-[100] min-w-[200px]">
                              {[
                                {
                                  label: 'WhatsApp Expert',
                                  icon: <FaWhatsapp size={14} />,
                                  href: 'https://wa.me/255755963001',
                                  color: '#25D366',
                                },
                                {
                                  label: 'Call Specialist',
                                  icon: <FaPhoneAlt size={14} />,
                                  href: 'tel:+255755963001',
                                  color: '#00BFFF',
                                },
                                {
                                  label: 'Email Advisory',
                                  icon: <FaEnvelope size={14} />,
                                  href: 'mailto:info@ebanexint.co.tz',
                                  color: '#FFFFFF',
                                },
                              ].map((option, i) => (
                                <motion.a
                                  key={option.label}
                                  href={option.href}
                                  target={option.href.startsWith('http') ? '_blank' : undefined}
                                  rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{
                                    opacity: 0,
                                    y: 10,
                                    transition: { delay: (2 - i) * 0.05 },
                                  }}
                                  transition={{ delay: i * 0.1, duration: 0.3 }}
                                  className="group flex items-center gap-3 bg-black border border-white/10 p-3 hover:border-[#00BFFF] transition-colors shadow-2xl"
                                >
                                  <div
                                    className="w-8 h-8 flex items-center justify-center border border-white/10 group-hover:border-[#00BFFF]/50 transition-colors"
                                    style={{ color: option.color }}
                                  >
                                    {option.icon}
                                  </div>
                                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white group-hover:text-[#00BFFF] transition-colors">
                                    {option.label}
                                  </span>
                                </motion.a>
                              ))}
                            </div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#00BFFF]/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                </div>
              </div>

              {/* Background Image (Stacked on the right) */}
              <div className="absolute right-[-10%] lg:right-[-15%] top-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] lg:w-[550px] aspect-square z-10 hidden md:block opacity-90 lg:opacity-100">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-[#00BFFF]/5 z-20 pointer-events-none" />
                  <img
                    src={cyberImg}
                    alt="Cyber Security Essentials"
                    className="w-full h-full object-cover border-[10px] border-black shadow-[-20px_20px_0px_0px_rgba(0,191,255,0.1)]"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Decorative background overlay glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-2/3 bg-[#00BFFF]/5 blur-[100px] rounded-full pointer-events-none" />
      </section>

      {/* Overview Section */}
      <section id="overview" className="relative z-20 bg-black pt-16 sm:pt-24 pb-12 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Squares
            speed={0.13}
            squareSize={40}
            direction="diagonal"
            borderColor="rgba(255,255,255,0.08)"
            hoverFillColor="rgba(255,255,255,0.05)"
          />
        </div>
        
        <div className="w-full px-4 sm:px-6 lg:px-[100px] relative z-10">
          <motion.div {...fadeInUp}>
            <div className="w-full">
              <div
                className="w-full p-6 sm:p-10 border-[8px] border-black shadow-2xl relative"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)',
                }}
              >
                <div className="mb-8">
                  <div className="inline-block bg-black py-4 px-8 border border-white/10 shadow-2xl">
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading text-white uppercase tracking-tighter leading-[0.9]">
                      Overview
                    </h2>
                  </div>
                </div>
                
                <p className="text-white/90 text-lg font-light leading-relaxed text-justify">
                  {firstParagraph}
                </p>

                <AnimatePresence>
                  {isOverviewExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      {remainingParagraphs.map((para, i) => (
                        <p
                          key={i}
                          className="text-white/90 text-lg font-light leading-relaxed text-justify mt-8"
                        >
                          {para}
                        </p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {remainingParagraphs.length > 0 && (
                  <motion.button
                    onClick={() => setIsOverviewExpanded(!isOverviewExpanded)}
                    className="mt-8 text-[#00BFFF] hover:text-white font-black flex items-center gap-2 transition-colors uppercase tracking-widest text-xs"
                  >
                    {isOverviewExpanded ? 'Show Less' : 'Read More'}
                    <motion.span animate={{ rotate: isOverviewExpanded ? 180 : 0 }}>
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </motion.button>
                )}

                {/* Feature Cards Grid inside Overview block */}
                <div className="flex justify-center w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-12 relative p-1 border-[4px] border-black shadow-xl overflow-hidden bg-black/40 max-w-4xl w-full"
                  >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 p-4 items-stretch">
                      {[
                        { label: 'Real-World Expertise', icon: <Globe size={18} /> },
                        { label: 'Technical Depth', icon: <Lock size={18} /> },
                        { label: 'Practical Solutions', icon: <CheckCircle size={18} /> },
                        { label: 'Global Standards', icon: <Building size={18} /> },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="p-3 border border-white/10 hover:border-[#00BFFF]/30 transition-colors flex flex-col items-center text-center h-full min-h-[100px] justify-center"
                          style={{
                            background: 'rgba(255,255,255,0.03)',
                          }}
                        >
                          <div className="text-[#00BFFF] mb-2">{item.icon}</div>
                          <div className="text-[8px] font-black uppercase tracking-widest leading-tight text-white">
                            {item.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Decorative accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Registration Details Card Section */}
      <section className="relative z-20 bg-black pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Squares
            speed={0.13}
            squareSize={40}
            direction="diagonal"
            borderColor="rgba(255,255,255,0.08)"
            hoverFillColor="rgba(255,255,255,0.05)"
          />
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-[100px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full bg-black border-[8px] border-black shadow-2xl overflow-hidden relative"
            style={{ borderColor: themeColor }}
          >
            <div
              className="p-8 sm:p-12 relative z-10 flex flex-col gap-10"
              style={{
                background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)',
              }}
            >
              {/* Top Row: Title/Info and Action Button */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-8 border-b border-white/10">
                <div className="text-start">
                  <div className="inline-block bg-black py-2 px-4 border border-white/10 mb-3">
                    <span className="text-[#00BFFF] text-[10px] font-black uppercase tracking-[0.3em]">
                      Registration Open
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tighter leading-none mb-3">
                    Cyber Security <span className="text-[#00BFFF]">Essentials</span> Training
                  </h3>
                  <p className="text-white/70 text-sm font-normal leading-relaxed max-w-2xl">
                    Secure your seat for this intensive capacity-building program. Complete the stepwise form to enroll and receive payment instructions.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setCurrentStep(1);
                    setIsFormOpen(true);
                  }}
                  className="w-full lg:w-auto flex-shrink-0 h-14 px-10 bg-[#00BFFF] text-black font-black text-xs uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 group shadow-[0_0_25px_rgba(0,191,255,0.3)]"
                >
                  Register Now
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>

              {/* Bottom Grid: 4 Info Cards spanning full width */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    label: 'Early Bird Fee',
                    value: 'TZS 1,000,000',
                    sub: 'Before 25th June 2026',
                    highlight: true,
                  },
                  {
                    label: 'Standard Fee',
                    value: 'TZS 1,200,000',
                    sub: 'After 25th June 2026',
                  },
                  {
                    label: 'Dates & Duration',
                    value: '29 Jun – 03 Jul 2026',
                    sub: '5 Full Days (40 CPE Hours)',
                  },
                  {
                    label: 'Venue',
                    value: 'Timeless Hotel',
                    sub: 'Morogoro, Tanzania',
                  },
                ].map((info, idx) => (
                  <div
                    key={idx}
                    className={`p-6 border flex flex-col justify-between min-h-[120px] transition-all duration-300 text-start ${
                      info.highlight
                        ? 'bg-[#00BFFF]/5 border-[#00BFFF]/30 hover:border-[#00BFFF]/60 shadow-[0_0_15px_rgba(0,191,255,0.05)]'
                        : 'bg-black/30 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[9px] font-black uppercase tracking-wider text-white/40">
                          {info.label}
                        </span>
                        {info.highlight && (
                          <span className="bg-[#00BFFF]/10 text-[#00BFFF] text-[7px] font-black uppercase px-2 py-0.5 tracking-wider border border-[#00BFFF]/20">
                            Recommended
                          </span>
                        )}
                      </div>
                      <div className="text-white font-black text-lg uppercase tracking-tight mb-1">
                        {info.value}
                      </div>
                    </div>
                    <div className="text-white/60 text-[10px] font-light mt-auto">
                      {info.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative background glow elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00BFFF]/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00BFFF]/5 blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      </section>
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-3 sm:p-4 overflow-hidden" data-lenis-prevent>
            
            {/* Backdrop shadow overlay */}
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              onClick={() => !isSubmitting && setIsFormOpen(false)}
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-black border-[4px] sm:border-[6px] shadow-[20px_20px_0px_0px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col max-h-[96vh] sm:max-h-[92vh]"
              style={{ borderColor: themeColor }}
            >
              
              {/* Close Button */}
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors z-10"
                style={{ '--hover-color': themeColor } as React.CSSProperties}
              >
                <X size={20} className="hover:text-[var(--hover-color)]" />
              </button>

              {/* Form Content Area (NO SCROLLING - overflow-hidden) */}
              <div className="flex-grow p-5 sm:p-6 overflow-hidden flex flex-col justify-between">
                
                {/* Step headers inside the card (CISA layout style) */}
                <div className="relative mb-4 sm:mb-6 pl-4 border-l-4 shrink-0" style={{ borderColor: themeColor }}>
                  <span className="text-[11px] font-black uppercase tracking-[0.4em] mb-1 block" style={{ color: themeColor }}>
                    Step {currentStep} of 3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tighter leading-none">
                    {currentStep === 1 && <>Participant <span style={{ color: themeColor }}>Details</span></>}
                    {currentStep === 2 && <>Training & <span style={{ color: themeColor }}>Fees Details</span></>}
                    {currentStep === 3 && <>Confirm & <span style={{ color: themeColor }}>Submit</span></>}
                  </h2>
                </div>

                {/* Error banner */}
                <AnimatePresence>
                  {errors.form && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-4 p-2 bg-red-500/20 border border-red-500 text-red-200 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shrink-0"
                    >
                      <AlertCircle size={14} className="text-red-500 shrink-0" />
                      <span>{errors.form}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={(e) => e.preventDefault()} className="flex-grow flex flex-col justify-between space-y-4" noValidate>
                  
                  {/* Honeypot field */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      value={formData.website}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </div>

                  {/* STEP 1: Participant / Contact Person Details */}
                  {currentStep === 1 && (
                    <div className="space-y-3 flex-grow flex flex-col justify-center">
                      
                      {/* Full Name & Job Title */}
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="space-y-1 group">
                          <label htmlFor="fullName" className="text-[9px] font-black uppercase tracking-widest ml-1" style={{ color: themeColor }}>
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className={cn(
                              'w-full bg-white/5 border-[2px] border-white/10 p-1.5 sm:p-2 text-white font-bold text-[10px] sm:text-[12px] outline-none transition-all placeholder:text-white/20',
                              errors.fullName ? 'border-red-500' : 'focus:border-[var(--theme-color)]'
                            )}
                            style={{ '--theme-color': themeColor } as React.CSSProperties}
                            placeholder="Amina Juma Hassan"
                          />
                          {errors.fullName && (
                            <p className="text-[9px] text-red-500 font-black uppercase mt-1">{errors.fullName}</p>
                          )}
                        </div>

                        <div className="space-y-1 group">
                          <label htmlFor="jobTitle" className="text-[9px] font-black uppercase tracking-widest ml-1" style={{ color: themeColor }}>
                            Job Title / Position
                          </label>
                          <input
                            type="text"
                            id="jobTitle"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleChange}
                            className={cn(
                              'w-full bg-white/5 border-[2px] border-white/10 p-1.5 sm:p-2 text-white font-bold text-[10px] sm:text-[12px] outline-none transition-all placeholder:text-white/20',
                              errors.jobTitle ? 'border-red-500' : 'focus:border-[var(--theme-color)]'
                            )}
                            style={{ '--theme-color': themeColor } as React.CSSProperties}
                            placeholder="IT Manager"
                          />
                          {errors.jobTitle && (
                            <p className="text-[9px] text-red-500 font-black uppercase mt-1">{errors.jobTitle}</p>
                          )}
                        </div>
                      </div>

                      {/* Organization & Department */}
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="space-y-1 group">
                          <label htmlFor="organization" className="text-[9px] font-black uppercase tracking-widest ml-1" style={{ color: themeColor }}>
                            Organization / Institution
                          </label>
                          <input
                            type="text"
                            id="organization"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            className={cn(
                              'w-full bg-white/5 border-[2px] border-white/10 p-1.5 sm:p-2 text-white font-bold text-[10px] sm:text-[12px] outline-none transition-all placeholder:text-white/20',
                              errors.organization ? 'border-red-500' : 'focus:border-[var(--theme-color)]'
                            )}
                            style={{ '--theme-color': themeColor } as React.CSSProperties}
                            placeholder="Tanzania Revenue Authority"
                          />
                          {errors.organization && (
                            <p className="text-[9px] text-red-500 font-black uppercase mt-1">{errors.organization}</p>
                          )}
                        </div>

                        <div className="space-y-1 group">
                          <label htmlFor="department" className="text-[9px] font-black uppercase tracking-widest ml-1" style={{ color: themeColor }}>
                            Department <span className="text-slate-600 font-medium">(Optional)</span>
                          </label>
                          <input
                            type="text"
                            id="department"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            className="w-full bg-white/5 border-[2px] border-white/10 p-1.5 sm:p-2 text-white font-bold text-[10px] sm:text-[12px] focus:border-[var(--theme-color)] outline-none transition-all placeholder:text-white/20"
                            style={{ '--theme-color': themeColor } as React.CSSProperties}
                            placeholder="e.g. ICT Department"
                          />
                        </div>
                      </div>

                      {/* Email & Phone */}
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="space-y-1 group">
                          <label htmlFor="email" className="text-[9px] font-black uppercase tracking-widest ml-1" style={{ color: themeColor }}>
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={cn(
                              'w-full bg-white/5 border-[2px] border-white/10 p-1.5 sm:p-2 text-white font-bold text-[10px] sm:text-[12px] outline-none transition-all placeholder:text-white/20',
                              errors.email ? 'border-red-500' : 'focus:border-[var(--theme-color)]'
                            )}
                            style={{ '--theme-color': themeColor } as React.CSSProperties}
                            placeholder="a.hassan@tra.go.tz"
                          />
                          {errors.email && (
                            <p className="text-[9px] text-red-500 font-black uppercase mt-1">{errors.email}</p>
                          )}
                        </div>

                        <div className="space-y-1 group">
                          <label htmlFor="phone" className="text-[9px] font-black uppercase tracking-widest ml-1" style={{ color: themeColor }}>
                            Phone / WhatsApp
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={cn(
                              'w-full bg-white/5 border-[2px] border-white/10 p-1.5 sm:p-2 text-white font-bold text-[10px] sm:text-[12px] outline-none transition-all placeholder:text-white/20',
                              errors.phone ? 'border-red-500' : 'focus:border-[var(--theme-color)]'
                            )}
                            style={{ '--theme-color': themeColor } as React.CSSProperties}
                            placeholder="+255 7XX XXX XXX"
                          />
                          {errors.phone && (
                            <p className="text-[9px] text-red-500 font-black uppercase mt-1">{errors.phone}</p>
                          )}
                        </div>
                      </div>

                    </div>
                  )}

                  {/* STEP 2: Training & Fees Details (Optimized Grids) */}
                  {currentStep === 2 && (
                    <div className="space-y-4 flex-grow flex flex-col justify-center">
                      
                      {/* Row 1: Participants Count & Participant Category */}
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="space-y-1 group">
                          <label htmlFor="participantsCount" className="text-[9px] font-black uppercase tracking-widest ml-1" style={{ color: themeColor }}>
                            Number of Participants
                          </label>
                          <input
                            type="number"
                            id="participantsCount"
                            name="participantsCount"
                            min="1"
                            value={formData.participantsCount}
                            onChange={handleChange}
                            className={cn(
                              'w-full bg-white/5 border-[2px] border-white/10 p-1.5 sm:p-2 text-white font-bold text-[10px] sm:text-[12px] outline-none transition-all placeholder:text-white/20',
                              errors.participantsCount ? 'border-red-500' : 'focus:border-[var(--theme-color)]'
                            )}
                            style={{ '--theme-color': themeColor } as React.CSSProperties}
                            placeholder="e.g. 3"
                          />
                          {errors.participantsCount && (
                            <p className="text-[9px] text-red-500 font-black uppercase mt-1">{errors.participantsCount}</p>
                          )}
                        </div>

                        <div className="space-y-1">
                          <label htmlFor="participantCategory" className="text-[9px] font-black uppercase tracking-widest ml-1" style={{ color: themeColor }}>
                            Participant Category
                          </label>
                          <div className="relative">
                            <select
                              id="participantCategory"
                              name="participantCategory"
                              value={formData.participantCategory}
                              onChange={handleChange}
                              className={cn(
                                'w-full bg-white/5 border-[2px] border-white/10 p-1.5 sm:p-2 text-white font-bold text-[10px] sm:text-[12px] focus:border-[var(--theme-color)] outline-none appearance-none cursor-pointer uppercase tracking-tight',
                                errors.participantCategory && 'border-red-500'
                              )}
                              style={{ '--theme-color': themeColor } as React.CSSProperties}
                            >
                              <option value="" className="bg-black">— SELECT CATEGORY —</option>
                              <option value="IT Professional" className="bg-black">IT Professional / Sys Admin</option>
                              <option value="Auditor / Compliance" className="bg-black">IT Auditor / Auditor</option>
                              <option value="Risk & Compliance Manager" className="bg-black">Risk & Compliance Team</option>
                              <option value="Corporate Executive" className="bg-black">Manager / Director</option>
                              <option value="Operational Staff" className="bg-black">Operational / Security Staff</option>
                              <option value="Other" className="bg-black">Other Category</option>
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: themeColor }}>
                              <ChevronDown size={14} />
                            </div>
                          </div>
                          {errors.participantCategory && (
                            <p className="text-[9px] text-red-500 font-black uppercase mt-1">{errors.participantCategory}</p>
                          )}
                        </div>
                      </div>

                      {/* Row 2: Parallel Columns for Preferred Payment & Invoice Requirement */}
                      <div className="grid md:grid-cols-2 gap-4">
                        
                        {/* Preferred Payment Column */}
                        <div className="space-y-2">
                          <label className="text-[9px] font-black uppercase tracking-widest ml-1" style={{ color: themeColor }}>
                            Preferred Payment Category
                          </label>
                          <div className="space-y-2">
                            <div
                              onClick={() => selectPreferredPayment('Early Bird Fee')}
                              className={cn(
                                'border-[2px] p-2 sm:p-2.5 cursor-pointer flex items-center justify-between transition-all relative overflow-hidden group',
                                formData.preferredPayment === 'Early Bird Fee'
                                  ? 'border-[#00BFFF] bg-[#00BFFF]/5'
                                  : 'border-white/10 bg-white/5 hover:border-white/20'
                              )}
                            >
                              <div className="flex items-center gap-2">
                                <div className={cn(
                                  'w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors',
                                  formData.preferredPayment === 'Early Bird Fee' ? 'border-[#00BFFF]' : 'border-slate-600'
                                )}>
                                  {formData.preferredPayment === 'Early Bird Fee' && (
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#00BFFF]" />
                                  )}
                                </div>
                                <div className="text-left">
                                  <span className="text-[10px] font-black uppercase text-white tracking-wide block">
                                    Early Bird Fee
                                  </span>
                                  <span className="text-[8px] text-slate-500 uppercase tracking-widest block">
                                    Before 25th June
                                  </span>
                                </div>
                              </div>
                              <span className="text-[10px] font-black text-[#00BFFF]">TZS 1M</span>
                            </div>

                            <div
                              onClick={() => selectPreferredPayment('Standard Fee')}
                              className={cn(
                                'border-[2px] p-2 sm:p-2.5 cursor-pointer flex items-center justify-between transition-all relative overflow-hidden group',
                                formData.preferredPayment === 'Standard Fee'
                                  ? 'border-[#00BFFF] bg-[#00BFFF]/5'
                                  : 'border-white/10 bg-white/5 hover:border-white/20'
                              )}
                            >
                              <div className="flex items-center gap-2">
                                <div className={cn(
                                  'w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors',
                                  formData.preferredPayment === 'Standard Fee' ? 'border-[#00BFFF]' : 'border-slate-600'
                                )}>
                                  {formData.preferredPayment === 'Standard Fee' && (
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#00BFFF]" />
                                  )}
                                </div>
                                <div className="text-left">
                                  <span className="text-[10px] font-black uppercase text-white tracking-wide block">
                                    Standard Fee
                                  </span>
                                  <span className="text-[8px] text-slate-500 uppercase tracking-widest block">
                                    After 25th June
                                  </span>
                                </div>
                              </div>
                              <span className="text-[10px] font-black text-slate-400">TZS 1.2M</span>
                            </div>
                          </div>
                          {errors.preferredPayment && (
                            <p className="text-[9px] text-red-500 font-black uppercase mt-1">{errors.preferredPayment}</p>
                          )}
                        </div>

                        {/* Invoice Requirement Column */}
                        <div className="space-y-2">
                          <label className="text-[9px] font-black uppercase tracking-widest ml-1" style={{ color: themeColor }}>
                            Require Formal Invoice?
                          </label>
                          <div className="space-y-2">
                            <div
                              onClick={() => selectInvoiceRequired('Yes')}
                              className={cn(
                                'border-[2px] p-2.5 sm:p-3 cursor-pointer flex items-center gap-2 transition-all group',
                                formData.invoiceRequired === 'Yes'
                                  ? 'border-[#00BFFF] bg-[#00BFFF]/5'
                                  : 'border-white/10 bg-white/5 hover:border-white/20'
                              )}
                            >
                              <div className={cn(
                                'w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors',
                                formData.invoiceRequired === 'Yes' ? 'border-[#00BFFF]' : 'border-slate-600'
                              )}>
                                {formData.invoiceRequired === 'Yes' && (
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#00BFFF]" />
                                )}
                              </div>
                              <span className="text-[10px] font-bold uppercase tracking-tight text-white">
                                Yes, send invoice
                              </span>
                            </div>

                            <div
                              onClick={() => selectInvoiceRequired('No')}
                              className={cn(
                                'border-[2px] p-2.5 sm:p-3 cursor-pointer flex items-center gap-2 transition-all group',
                                formData.invoiceRequired === 'No'
                                  ? 'border-[#00BFFF] bg-[#00BFFF]/5'
                                  : 'border-white/10 bg-white/5 hover:border-white/20'
                              )}
                            >
                              <div className={cn(
                                'w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors',
                                formData.invoiceRequired === 'No' ? 'border-[#00BFFF]' : 'border-slate-600'
                              )}>
                                {formData.invoiceRequired === 'No' && (
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#00BFFF]" />
                                )}
                              </div>
                              <span className="text-[10px] font-bold uppercase tracking-tight text-white">
                                No, not required
                              </span>
                            </div>
                          </div>
                          {errors.invoiceRequired && (
                            <p className="text-[9px] text-red-500 font-black uppercase mt-1">{errors.invoiceRequired}</p>
                          )}
                        </div>

                      </div>

                    </div>
                  )}

                  {/* STEP 3: Confirm & Submit (Review Details - Compact View) */}
                  {currentStep === 3 && (
                    <div className="space-y-3 flex-grow flex flex-col justify-center">
                      
                      {/* Summary Table */}
                      <div className="p-3 border-[2px] bg-white/5 border-white/10 space-y-2 text-[10px]">
                        <h4 className="font-black uppercase tracking-widest border-b border-white/10 pb-1.5 flex items-center gap-1.5" style={{ color: themeColor }}>
                          <FileText size={11} /> Review Registration Details
                        </h4>
                        
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                          <div>
                            <span className="text-slate-500 uppercase tracking-widest text-[8px] block">Full Name</span>
                            <span className="font-bold text-white uppercase">{formData.fullName}</span>
                          </div>
                          <div>
                            <span className="text-slate-500 uppercase tracking-widest text-[8px] block">Job Title & Org</span>
                            <span className="font-bold text-white uppercase">{formData.jobTitle} @ {formData.organization}</span>
                          </div>
                          <div>
                            <span className="text-slate-500 uppercase tracking-widest text-[8px] block">Email & Phone</span>
                            <span className="font-bold text-white">{formData.email} · {formData.phone}</span>
                          </div>
                          <div>
                            <span className="text-slate-500 uppercase tracking-widest text-[8px] block">Participants</span>
                            <span className="font-bold uppercase" style={{ color: themeColor }}>{formData.participantsCount} ({formData.participantCategory})</span>
                          </div>
                          <div>
                            <span className="text-slate-500 uppercase tracking-widest text-[8px] block">Payment Plan</span>
                            <span className="font-bold uppercase" style={{ color: themeColor }}>{formData.preferredPayment}</span>
                          </div>
                          <div>
                            <span className="text-slate-500 uppercase tracking-widest text-[8px] block">Invoice Requirement</span>
                            <span className="font-bold uppercase" style={{ color: themeColor }}>{formData.invoiceRequired === 'Yes' ? 'Yes, Send Invoice' : 'No Invoice'}</span>
                          </div>
                        </div>
                      </div>

                      {/* Special Requests or Comments */}
                      <div className="space-y-1">
                        <label htmlFor="specialRequests" className="text-[9px] font-black uppercase tracking-widest ml-1" style={{ color: themeColor }}>
                          Special requirements, dietary needs, or comments? <span className="text-slate-600 font-medium">(Optional)</span>
                        </label>
                        <textarea
                          id="specialRequests"
                          name="specialRequests"
                          rows={2}
                          value={formData.specialRequests}
                          onChange={handleChange}
                          className="w-full bg-white/5 border-[2px] border-white/10 p-2 text-white font-bold text-xs focus:border-[#00BFFF] outline-none transition-all placeholder:text-white/20 resize-none"
                          placeholder="e.g. Dietary needs, accommodations..."
                        />
                      </div>

                      {/* Captcha validation */}
                      <div className="flex justify-center scale-75 pt-1.5 shrink-0">
                        <TurnstileCaptcha
                          onVerify={(token) => setFormData((prev) => ({ ...prev, captchaToken: token }))}
                        />
                      </div>

                    </div>
                  )}

                  {/* Navigation Buttons (Back / Continue / Submit - CISA modal style) */}
                  <div className="flex gap-3 pt-4 border-t border-white/10 shrink-0">
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
                          <>Submit Registration <Send size={12} /></>
                        )}
                      </button>
                    )}
                  </div>

                  {currentStep === 3 && (
                    <p className="text-[8px] text-slate-500 uppercase tracking-widest text-center px-4 leading-relaxed shrink-0">
                      By submitting this form, you consent to being contacted by Ebanex International regarding this training.
                    </p>
                  )}

                </form>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Success Notification Modal */}
      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center px-4"
          >
            <div className="absolute inset-0 bg-black/85 backdrop-blur-md" onClick={() => setSuccessMessage(null)} />
            
            <div className="relative bg-[#00BFFF] border-[10px] border-black p-8 sm:p-12 max-w-lg w-full text-center shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] z-10">
              <button
                onClick={() => setSuccessMessage(null)}
                className="absolute top-4 right-4 text-black/40 hover:text-black transition-colors"
                aria-label="Close success modal"
              >
                <X size={24} />
              </button>

              <div className="bg-black w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-[#00BFFF]" />
              </div>

              <h3 className="text-black font-black text-2xl uppercase mb-4 tracking-tighter">
                Registration Submitted
              </h3>
              <p className="text-black font-bold uppercase tracking-widest text-xs leading-relaxed">
                {successMessage}
              </p>

              <div className="mt-8 border-t border-black/10 pt-6 text-[9px] text-black/60 uppercase tracking-wider font-bold">
                🔒 Secured transaction  ·  Ebanex International
              </div>

              <button
                onClick={() => setSuccessMessage(null)}
                className="mt-8 w-full py-4 bg-black text-[#00BFFF] font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-black transition-all"
              >
                Done
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default CyberSecurityEssentials;
