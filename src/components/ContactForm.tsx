import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  propertyType: string;
  location: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  propertyType?: string;
  location?: string;
  message?: string;
}

const PROPERTY_OPTIONS = [
  "Residential Plot",
  "Villa",
  "Apartment",
  "Farm Plot",
  "Commercial Property",
  "Investment Consultation",
  "Other"
];

const LOCATION_OPTIONS = [
  "Entire City of Hyderabad / Central Hubs",
  "West Hyderabad (Hitec City, Gachibowli, Kokapet, Tellapur)",
  "North Hyderabad (Kompally, Bachupally, Medchal)",
  "East & South Hyderabad (Uppal, LB Nagar, Shamshabad)",
  "Mumbai Highway (NH-65 - Patancheru, Sangareddy, Sadashivpet)",
  "Bengaluru Highway (NH-44 - Shamshabad, Kothur, Shadnagar)",
  "Shankarpally & Vikarabad Corridor (Mokila, Chevella)",
  "Srisailam Highway (NH-765 - Tukkuguda, Maheshwaram, Kadthal)",
  "Vijayawada Highway (NH-65 - Hayathnagar, Choutuppal)",
  "Warangal Highway (NH-163 - Ghatkesar, Bibinagar, Bhongir)",
  "Medchal Highway (NH-44 - Kompally, Kandlakoya, Medchal)",
  "Shamirpet Highway (Rajiv Rahadari - Genome Valley)",
  "Other / Open to Suggestions"
];

export const ContactForm: React.FC<{ defaultRequirement?: string }> = ({ defaultRequirement }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    propertyType: defaultRequirement || '',
    location: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    const cleanPhone = formData.phone.replace(/[\s-+()]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      newErrors.phone = 'Enter a valid 10-digit Indian phone number (e.g. 7901324546)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.propertyType) {
      newErrors.propertyType = 'Please select a preferred property requirement';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your property requirement';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide at least 10 characters describing your requirement';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Frontend simulation of smooth submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      propertyType: '',
      location: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-premium text-center animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-sm">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-2">
          Enquiry Received Successfully
        </h3>

        <p className="text-slate-600 max-w-md mx-auto mb-6 text-sm sm:text-base leading-relaxed">
          Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span>. A Prime Realty property advisor will review your <span className="font-semibold text-brand-blue-800">{formData.propertyType}</span> requirement and reach out to you shortly.
        </p>

        <div className="bg-slate-50 rounded-xl p-4 max-w-sm mx-auto text-left text-xs text-slate-600 space-y-1.5 mb-6 border border-slate-200">
          <div><span className="font-semibold text-slate-700">Phone:</span> {formData.phone}</div>
          <div><span className="font-semibold text-slate-700">Email:</span> {formData.email}</div>
          <div><span className="font-semibold text-slate-700">Requirement:</span> {formData.propertyType}</div>
        </div>

        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-blue-800 hover:bg-brand-blue-900 text-white font-semibold text-sm transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Submit Another Enquiry</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-premium" noValidate>
      <div className="mb-6">
        <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-1">
          Request a Consultation
        </h3>
        <p className="text-slate-600 text-sm">
          Share your criteria. Our advisors will connect with verified options and clear guidance.
        </p>
      </div>

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Full Name <span className="text-brand-orange-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="e.g. Rajesh Sharma"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
              errors.fullName
                ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                : 'border-slate-200 focus:border-brand-blue-800 focus:ring-brand-blue-100'
            }`}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Phone Number & Email (2-Col on tablet/desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Phone Number <span className="text-brand-orange-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="e.g. 7901324546"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.phone
                  ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                  : 'border-slate-200 focus:border-brand-blue-800 focus:ring-brand-blue-100'
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Email Address <span className="text-brand-orange-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="e.g. name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.email
                  ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                  : 'border-slate-200 focus:border-brand-blue-800 focus:ring-brand-blue-100'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        {/* Preferred Property Type & Corridor Dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="propertyType" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Preferred Property Requirement <span className="text-brand-orange-500">*</span>
            </label>
            <select
              id="propertyType"
              value={formData.propertyType}
              onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
              className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.propertyType
                  ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                  : 'border-slate-200 focus:border-brand-blue-800 focus:ring-brand-blue-100'
              }`}
            >
              <option value="">Select Property Type</option>
              {PROPERTY_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.propertyType && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.propertyType}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="location" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Target Location / Highway Corridor
            </label>
            <select
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-blue-800 focus:ring-brand-blue-100 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 transition-all"
            >
              <option value="">Select Area / Highway Corridor</option>
              {LOCATION_OPTIONS.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Property Requirement / Details <span className="text-brand-orange-500">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Tell us about your budget, preferred highway corridor (e.g. Mumbai Highway, Bengaluru Highway, Shankarpally/Vikarabad, Srisailam Highway, Warangal Highway), or size..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
              errors.message
                ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                : 'border-slate-200 focus:border-brand-blue-800 focus:ring-brand-blue-100'
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 rounded-lg bg-brand-orange-500 hover:bg-brand-orange-600 active:bg-brand-orange-700 text-white font-bold text-sm tracking-wide shadow-md hover:shadow-glow-orange transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Submitting Your Enquiry...</span>
            </>
          ) : (
            <>
              <span>Submit Enquiry</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="text-[11px] text-slate-600 text-center mt-3">
          Your contact information is strictly confidential and used solely to assist with your real estate enquiry.
        </p>
      </div>
    </form>
  );
};
