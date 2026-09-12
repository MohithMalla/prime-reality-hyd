import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  TrendingUp, 
  Users, 
  Compass, 
  CheckSquare, 
  FileText, 
  Handshake, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Calendar
} from 'lucide-react';
import { SERVICES, BRAND } from '../data/content';
import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/SectionHeader';
import { CTASection } from '../components/CTASection';

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  Home: <Home className="w-7 h-7" />,
  TrendingUp: <TrendingUp className="w-7 h-7" />,
  Users: <Users className="w-7 h-7" />,
  Compass: <Compass className="w-7 h-7" />,
  CheckSquare: <CheckSquare className="w-7 h-7" />,
  FileText: <FileText className="w-7 h-7" />,
  Handshake: <Handshake className="w-7 h-7" />,
  ShieldCheck: <ShieldCheck className="w-7 h-7" />,
};

export const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <PageHero
        badge="Full-Service Advisory"
        title="Professional Real Estate Solutions"
        highlightText="Under One Roof"
        subtitle="End-to-end expertise spanning property sales, investment advisory, site visit coordination, documentation due diligence, and dedicated after-sales support across Hyderabad."
        breadcrumbCurrent="Services"
        bgImage="/images/property-consultation.jpg"
      />

      {/* 1. ALL 8 SERVICES SHOWCASE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            centered
            eyebrow="Our Capabilities"
            title="Complete Range of Professional"
            highlightedTitle="Property Services"
            subtitle="Explore how our eight distinct advisory practices support individual homebuyers, seasoned investors, and commercial enterprises."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {SERVICES.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                className="group relative bg-slate-50/70 hover:bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                {/* Number index indicator */}
                <span className="absolute top-8 right-8 font-heading font-extrabold text-3xl text-slate-200 group-hover:text-brand-orange-200 transition-colors">
                  0{idx + 1}
                </span>

                <div>
                  {/* Service Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 text-brand-blue-800 flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-orange-50 group-hover:text-brand-orange-500 group-hover:border-brand-orange-200 transition-colors duration-300">
                    {SERVICE_ICONS[service.iconName] || <Home className="w-7 h-7" />}
                  </div>

                  {/* Title & Short Desc */}
                  <h3 className="font-heading font-bold text-2xl text-slate-900 group-hover:text-brand-blue-800 transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-brand-orange-600 font-semibold text-xs uppercase tracking-wider mb-4">
                    {service.shortDesc}
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.fullDesc}
                  </p>

                  {/* Feature Bullets */}
                  <div className="border-t border-slate-200/60 pt-5 mb-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                      Key Highlights & Deliverables:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-brand-orange-500 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Bottom Actions */}
                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue-800 group-hover:text-brand-orange-500 transition-colors"
                  >
                    <span>Request Assistance</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <a
                    href={`tel:${BRAND.phone}`}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-900 flex items-center gap-1.5"
                    title="Direct Call"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-brand-orange-500" />
                    <span>Call Advisor</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. OUR ADVISORY ASSURANCE */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200 shadow-premium">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue-50 text-brand-blue-800">
                  <ShieldCheck className="w-4 h-4" />
                  <span>The Prime Advisory Assurance</span>
                </div>

                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Transparent, Fee-Structured, & Due-Diligence Driven
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Every property we represent or recommend is cross-verified for layout sanction orders, clear title link chains, encumbrance certificates, and RERA registration status. We do not make speculative return promises—our mission is safeguarding your investment and securing your peace of mind.
                </p>

                <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
                  <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">
                    HMDA Layouts Checked
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">
                    RERA Registration Verified
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">
                    Link Documents Screened
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">
                    Zero Artificial Urgency
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-bold text-sm shadow-md transition-all text-center"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Service Consultation</span>
                </Link>

                <a
                  href={`tel:${BRAND.phone}`}
                  className="flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-brand-blue-50 hover:bg-brand-blue-100 text-brand-blue-800 font-bold text-sm transition-colors text-center"
                >
                  <PhoneCall className="w-4 h-4 text-brand-orange-500" />
                  <span>Call Us at +91 {BRAND.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Discuss Your Property Goals?"
        subtitle="Connect with our experienced consultants for tailored advice on sales, investments, or documentation across Hyderabad."
        buttonText="Book an Advisory Session"
      />
    </div>
  );
};
