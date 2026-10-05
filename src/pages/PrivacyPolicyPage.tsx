import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  FileText, 
  Lock, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { CTASection } from '../components/CTASection';
import { BRAND } from '../data/content';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        badge="Legal & Compliance"
        title="Privacy Policy –"
        highlightText="Prime Realty Hyderabad"
        subtitle="Learn how Prime Realty Hyderabad collects, uses, and safeguards your personal data across our website, advertisements, and lead communication channels."
        breadcrumbCurrent="Privacy Policy"
        bgImage="/images/office.jpg"
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Info Card */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 mb-12 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange-600 block mb-1">
                  Official Policy Document
                </span>
                <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900">
                  Privacy Policy – Prime Realty Hyderabad
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs self-start sm:self-center">
                <FileText className="w-4 h-4 text-brand-blue-800" />
                <span>Effective Date: 4 October 2026</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Prime Realty Hyderabad respects your privacy and is committed to protecting the personal information you provide through our website, advertisements, lead forms, phone calls, WhatsApp, or other communication channels.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-10 text-slate-700 text-sm sm:text-base leading-relaxed">
            
            {/* 1. Information Collection */}
            <div className="border-b border-slate-100 pb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-brand-blue-50 text-brand-blue-800 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  01
                </div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900">
                  Information We Collect
                </h3>
              </div>
              <p className="mb-4">
                When you submit an enquiry, we may collect information voluntarily provided by you, including but not limited to:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange-500 flex-shrink-0" />
                  <span>Full Name</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange-500 flex-shrink-0" />
                  <span>Phone / Mobile Number</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange-500 flex-shrink-0" />
                  <span>Email Address</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange-500 flex-shrink-0" />
                  <span>Property Preferences & Corridor Focus</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange-500 flex-shrink-0" />
                  <span>Budget & Investment Timeline</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange-500 flex-shrink-0" />
                  <span>Other Information Voluntarily Shared</span>
                </div>
              </div>
            </div>

            {/* 2. How We Use Information */}
            <div className="border-b border-slate-100 pb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-brand-blue-50 text-brand-blue-800 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  02
                </div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900">
                  How We Use Your Information
                </h3>
              </div>
              <p className="mb-4">
                We use the collected information strictly for legitimate real estate advisory and customer service purposes:
              </p>
              <ul className="space-y-3 pl-1">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange-500 mt-2 flex-shrink-0" />
                  <span><strong>Respond to enquiries:</strong> Promptly address your questions regarding properties, plots, villas, apartments, or farmland.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange-500 mt-2 flex-shrink-0" />
                  <span><strong>Provide project collateral:</strong> Share project brochures, layout maps, pricing sheets, RERA/HMDA approval details, and real-time inventory availability.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange-500 mt-2 flex-shrink-0" />
                  <span><strong>Coordinate appointments:</strong> Schedule organized site visits, property inspections, and one-on-one advisory consultations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange-500 mt-2 flex-shrink-0" />
                  <span><strong>Relevant communication:</strong> Contact you via phone, WhatsApp, or email regarding verified properties and real estate services aligned with your specific enquiry.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange-500 mt-2 flex-shrink-0" />
                  <span><strong>Service & campaign improvement:</strong> Enhance our customer support experience, response quality, and marketing efficiency.</span>
                </li>
              </ul>
            </div>

            {/* 3. Sharing of Information */}
            <div className="border-b border-slate-100 pb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-brand-blue-50 text-brand-blue-800 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  03
                </div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900">
                  Information Sharing & Disclosure
                </h3>
              </div>
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 mb-4 text-emerald-950 font-medium">
                We do not sell or rent your personal information to third parties.
              </div>
              <p>
                Information may be shared with relevant developers, property partners, or service providers only when necessary to respond to your enquiry or provide the requested real estate service, subject to applicable law.
              </p>
            </div>

            {/* 4. Advertising Platforms & Third Parties */}
            <div className="border-b border-slate-100 pb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-brand-blue-50 text-brand-blue-800 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  04
                </div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900">
                  Third-Party Services & Advertising (Google Ads)
                </h3>
              </div>
              <p>
                Our website and advertising campaigns may use services provided by third-party platforms such as Google for advertising, analytics, and lead generation (including Google Ads Lead Forms). These services may process information according to their respective privacy policies.
              </p>
            </div>

            {/* 5. Data Security */}
            <div className="border-b border-slate-100 pb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-brand-blue-50 text-brand-blue-800 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  05
                </div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900">
                  Data Protection & Security
                </h3>
              </div>
              <p>
                We take reasonable measures to protect personal information from unauthorized access, misuse, or disclosure. However, no internet-based transmission or storage system can be guaranteed to be completely secure.
              </p>
            </div>

            {/* 6. User Rights & Opt-out */}
            <div className="border-b border-slate-100 pb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-brand-blue-50 text-brand-blue-800 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  06
                </div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900">
                  Your Rights & Opt-Out Preferences
                </h3>
              </div>
              <p>
                You may contact us at any time to request correction or deletion of personal information you have provided to us, or to request that we stop contacting you for marketing purposes.
              </p>
            </div>

            {/* 7. Corporate Credentials & Contact Desk */}
            <div className="bg-brand-navy-950 text-white rounded-2xl p-6 sm:p-8 shadow-premium">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange-400 block mb-2">
                Business Information
              </span>
              <h3 className="font-heading font-extrabold text-xl text-white mb-6">
                Prime Realty Hyderabad
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-brand-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="block text-slate-400 text-xs font-medium">Business Name</span>
                    <span className="font-bold text-white">{BRAND.name}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-brand-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="block text-slate-400 text-xs font-medium">Official Website</span>
                    <span className="font-bold text-white">primerealtyhyderabad.in</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-brand-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="block text-slate-400 text-xs font-medium">Contact Number</span>
                    <a href={`tel:${BRAND.phone}`} className="font-bold text-white hover:text-brand-orange-400 transition-colors">
                      +91 {BRAND.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="block text-slate-400 text-xs font-medium">Location</span>
                    <span className="font-bold text-white">Hyderabad, Telangana, India</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800 text-xs text-slate-400 leading-relaxed">
                By using our website or submitting an enquiry, you acknowledge this Privacy Policy.
                <div className="mt-2 text-brand-orange-400 font-semibold">
                  Last Updated: 4 October 2026
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Have Questions About Our Privacy Terms?"
        subtitle="Our team is dedicated to transparent, secure real estate advisory across Hyderabad."
        buttonText="Contact Support Desk"
      />
    </div>
  );
};
