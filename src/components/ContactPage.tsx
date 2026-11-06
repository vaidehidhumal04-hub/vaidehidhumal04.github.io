import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, FileDown, ArrowUpRight, MessageSquare, Clock } from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Project Collaboration',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inquiryOptions = [
    'Project Collaboration',
    'Full-Time Architectural Role / Hiring',
    'Technical Working Drawings & BOQ',
    '3D Architectural Visualization & BIM',
    'General Inquiry',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name.';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please specify a subject.';
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Please provide a detailed message (at least 10 characters).';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Prepare mailto link format so email client opens with all formatted text
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.inquiryType}: ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}\n\nSent via Vaidehi Dhumal Architectural Portfolio`
    );
    const mailtoUrl = `mailto:${RESUME_DATA.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Trigger client mailto dispatch
      window.location.href = mailtoUrl;
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: 'Project Collaboration',
      subject: '',
      message: '',
    });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto py-6">
      {/* Header */}
      <div className="pb-6 border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-1">
          <span>Inquiries & Collaboration</span>
          <span aria-hidden="true">·</span>
          <span>Pune, India</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-['Outfit'] text-neutral-900 dark:text-neutral-50">
          Get in Touch
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-2 max-w-2xl">
          Available for innovative architectural projects, residential & commercial developments,
          technical construction documentation, and 3D visualization assignments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Left Column: Direct Coordinates & Status */}
        <div className="md:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              Direct Channels
            </h3>

            {/* Email Box */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono uppercase text-neutral-400">Direct Email</span>
              <div className="flex items-center justify-between gap-2 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
                <a
                  href={`mailto:${RESUME_DATA.email}`}
                  className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 hover:underline truncate"
                >
                  {RESUME_DATA.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="p-1.5 rounded text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Phone Box */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono uppercase text-neutral-400">Direct Phone</span>
              <div className="flex items-center justify-between gap-2 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
                <a
                  href={`tel:${RESUME_DATA.phone.replace(/\s+/g, '')}`}
                  className="text-xs sm:text-sm font-mono font-semibold text-neutral-900 dark:text-neutral-100 hover:underline"
                >
                  {RESUME_DATA.phone}
                </a>
                <a
                  href={`tel:${RESUME_DATA.phone.replace(/\s+/g, '')}`}
                  className="p-1.5 rounded text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Location & Response Time */}
            <div className="space-y-3 pt-2 text-xs text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>Base: Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>Typical response time: Within 24 business hours</span>
              </div>
            </div>
          </div>

          {/* Quick PDF Downloads Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              Portfolio Assets
            </h3>
            <div className="space-y-2">
              <a
                href={RESUME_DATA.portfolioPdfPath}
                download="Vaidehi_Dhumal_Architectural_Portfolio.pdf"
                className="flex items-center justify-between p-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all text-xs font-medium text-neutral-800 dark:text-neutral-200"
              >
                <div className="flex items-center gap-2.5">
                  <FileDown className="w-4 h-4 text-neutral-500" />
                  <span>Complete Portfolio PDF (41 Pages)</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>

              <a
                href={RESUME_DATA.pdfPath}
                download="Vaidehi_Dhumal_Resume.pdf"
                className="flex items-center justify-between p-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all text-xs font-medium text-neutral-800 dark:text-neutral-200"
              >
                <div className="flex items-center gap-2.5">
                  <FileDown className="w-4 h-4 text-neutral-500" />
                  <span>Curriculum Vitae (PDF)</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Functional Interactive Contact Form */}
        <div className="md:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-['Outfit'] text-neutral-900 dark:text-neutral-50">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <strong>{formData.name}</strong>. Your default mail client has been opened with your inquiry formatted to <strong>{RESUME_DATA.email}</strong>.
                </p>
                <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950 text-left text-xs text-neutral-600 dark:text-neutral-400 max-w-md mx-auto space-y-1">
                  <div><strong>Subject:</strong> {formData.subject}</div>
                  <div><strong>Inquiry:</strong> {formData.inquiryType}</div>
                  <div className="truncate"><strong>From:</strong> {formData.email}</div>
                </div>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <h3 className="text-lg font-bold font-['Outfit'] text-neutral-900 dark:text-neutral-50">
                    Send an Architectural Inquiry
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    Fill out the specifications below to initiate a discussion.
                  </p>
                </div>

                {/* Inquiry Typology Select */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1.5">
                    Nature of Inquiry
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100"
                  >
                    {inquiryOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name & Email 2-column grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1.5">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ar. Rajesh Mehta"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      className={`w-full px-3.5 py-2.5 text-xs rounded-lg border bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-neutral-300 dark:border-neutral-700 focus:ring-neutral-900 dark:focus:ring-neutral-100'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. rajesh@studioarchitects.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      className={`w-full px-3.5 py-2.5 text-xs rounded-lg border bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-neutral-300 dark:border-neutral-700 focus:ring-neutral-900 dark:focus:ring-neutral-100'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1.5">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Residential Villa Renovation / Job Opportunity"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: '' });
                      }}
                      className={`w-full px-3.5 py-2.5 text-xs rounded-lg border bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 ${
                        errors.subject
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-neutral-300 dark:border-neutral-700 focus:ring-neutral-900 dark:focus:ring-neutral-100'
                      }`}
                    />
                    {errors.subject && <p className="text-[11px] text-red-500 mt-1">{errors.subject}</p>}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1.5">
                    Project Brief or Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide details about the project typology, location, timeline, or firm requirements..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 text-xs rounded-lg border bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 ${
                      errors.message
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-neutral-300 dark:border-neutral-700 focus:ring-neutral-900 dark:focus:ring-neutral-100'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-white transition-all cursor-pointer disabled:opacity-50 shadow-xs"
                  >
                    {isSubmitting ? (
                      <span>Formatting & Launching...</span>
                    ) : (
                      <>
                        <span>Send Architectural Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-neutral-400 dark:text-neutral-500 text-center mt-2.5">
                    Directly addresses Vaidehi Dhumal at {RESUME_DATA.email}
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
