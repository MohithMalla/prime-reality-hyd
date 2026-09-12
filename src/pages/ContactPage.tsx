import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { BRAND } from '../data/content';
import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/SectionHeader';
import { ContactForm } from '../components/ContactForm';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const propertyParam = searchParams.get('property') || '';
  const serviceParam = searchParams.get('service') || '';
  const defaultRequirement = propertyParam || serviceParam || '';

  return (
    <div className="min-h-screen">
      <PageHero
        badge="Connect With Us"
        title="Let's Start Your"
        highlightText="Property Journey"
        subtitle="Have questions about a location, layout approval, or investment opportunity? Reach out to Prime Realty Hyderabad for objective, expert guidance."
        breadcrumbCurrent="Contact Us"
        bgImage="/images/office.jpg"
      />

      <section className="py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Contact Information & Corporate Credentials */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange-600 block mb-2">
                  Head Office & Advisory Desk
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Prime Realty Hyderabad
                </h2>
                <p className="text-brand-orange-500 font-script font-semibold text-lg mt-1">
                  "{BRAND.tagline}"
                </p>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  We welcome buyers, investors, and landowners to visit our office or schedule a personalized video/phone consultation.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${BRAND.phone}`}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:border-brand-blue-800 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue-50 text-brand-blue-800 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange-50 group-hover:text-brand-orange-500 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Direct Telephone
                    </span>
                    <span className="block text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-blue-800 transition-colors">
                      +91 {BRAND.phone}
                    </span>
                    <span className="block text-xs text-slate-500 mt-0.5">
                      Click to initiate a direct voice call
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:border-brand-blue-800 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue-50 text-brand-blue-800 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange-50 group-hover:text-brand-orange-500 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Official Email
                    </span>
                    <span className="block text-sm sm:text-base font-bold text-slate-900 group-hover:text-brand-blue-800 transition-colors break-all">
                      {BRAND.email}
                    </span>
                    <span className="block text-xs text-slate-500 mt-0.5">
                      Send your property enquiry or documents
                    </span>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-subtle">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange-50 text-brand-orange-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Registered Address
                    </span>
                    <span className="block text-sm font-semibold text-slate-900 leading-snug mt-1">
                      {BRAND.address.line1}
                    </span>
                    <span className="block text-xs text-slate-600">
                      {BRAND.address.line2}, {BRAND.address.city} - {BRAND.address.pincode}
                    </span>
                  </div>
                </div>
              </div>

              {/* Business Hours Table */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800 mb-4">
                  <Clock className="w-4 h-4 text-brand-orange-500" />
                  <span>Business Working Hours</span>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm">
                  {BRAND.hours.map((h, i) => (
                    <div key={i} className="flex items-center justify-between pb-2 border-b border-slate-100 last:border-b-0 last:pb-0">
                      <span className="text-slate-600 font-medium">{h.days}</span>
                      <span className="text-slate-900 font-bold">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Social Media Channels */}
              <div className="p-6 rounded-2xl bg-brand-navy-950 text-white shadow-premium">
                <span className="block text-xs uppercase tracking-wider text-brand-orange-400 font-bold mb-2">
                  Verified Social Channels
                </span>
                <p className="text-xs text-slate-300 mb-4">
                  Stay updated with our latest property walk-throughs and corridor insights.
                </p>

                <div className="flex items-center gap-3">
                  <a
                    href={BRAND.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white border border-white/10 transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span>Facebook</span>
                  </a>

                  <a
                    href={BRAND.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-brand-orange-500 hover:bg-brand-orange-600 text-xs font-semibold text-white transition-colors shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Interactive Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm defaultRequirement={defaultRequirement} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
