import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Target, 
  Compass, 
  Eye, 
  CheckCircle2, 
  ArrowRight,
  Award,
  Users,
  MapPin,
  Building
} from 'lucide-react';
import { BRAND } from '../data/content';
import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/SectionHeader';
import { CTASection } from '../components/CTASection';
import { LocationsCoverageSection } from '../components/LocationsCoverageSection';

export const AboutPage: React.FC = () => {
  const approachSteps = [
    {
      step: "01",
      name: "Understand",
      desc: "We begin by conducting an in-depth requirement discovery—identifying your family lifestyle needs, financial parameters, commuting preferences, and investment timeline.",
    },
    {
      step: "02",
      name: "Guide",
      desc: "Our advisors provide clear, data-grounded insights into Hyderabad's evolving growth corridors, comparing micro-markets, upcoming infrastructure, and pricing benchmarks.",
    },
    {
      step: "03",
      name: "Evaluate",
      desc: "We perform multi-tier due diligence on shortlisted options, verifying land titles, RERA/HMDA approvals, layout sanction orders, and builder execution capabilities.",
    },
    {
      step: "04",
      name: "Decide",
      desc: "With transparent facts, comparative analyses, and accompanied on-ground inspections, we empower you to decide without artificial urgency or sales pressure.",
    },
    {
      step: "05",
      name: "Support",
      desc: "From drafting sale agreements and registration coordination to physical possession, mutation, and long-term advice, our partnership endures.",
    },
  ];

  const values = [
    {
      title: "Integrity & Due Diligence",
      desc: "We treat your capital with the same respect as our own. If a property has regulatory ambiguities or title questions, we do not recommend it.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-blue-800" />,
    },
    {
      title: "Client-Centric Service",
      desc: "Our tagline 'your choice our service' means our advice is strictly aligned with your criteria, never influenced by quota targets.",
      icon: <Target className="w-6 h-6 text-brand-orange-500" />,
    },
    {
      title: "Market Transparency",
      desc: "We communicate realistic timelines, actual development status, and transparent pricing structures with absolute clarity.",
      icon: <Eye className="w-6 h-6 text-brand-blue-800" />,
    },
    {
      title: "Long-Term Growth Focus",
      desc: "We prioritize locations backed by permanent infrastructure—such as the Outer Ring Road and government growth nodes—for enduring value.",
      icon: <Compass className="w-6 h-6 text-brand-orange-500" />,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <PageHero
        badge="About Prime Realty Hyderabad"
        title="Building Trust Through Better"
        highlightText="Real Estate Decisions"
        subtitle="Professional property advisory committed to clarity, legal security, and thoughtful guidance across Hyderabad's most promising residential and commercial locations."
        breadcrumbCurrent="About Us"
        bgImage="/images/hyderabad-city.jpg"
      />

      {/* 1. WHO WE ARE & WHAT WE DO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-premium border border-slate-200">
                <img
                  src="/images/office.jpg"
                  alt="Prime Realty Hyderabad Advisory Office"
                  className="w-full h-[480px] object-cover"
                />
              </div>

              {/* Inset Quote Card */}
              <div className="mt-4 bg-brand-navy-950 text-white p-6 rounded-xl shadow-lg border border-slate-800">
                <p className="font-heading font-bold text-sm sm:text-base text-brand-orange-400 mb-1">
                  "your choice our service"
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Headquartered in Erragadda / Motinagar, Prime Realty serves clients across the Greater Hyderabad metropolitan area and high-potential peri-urban growth belts.
                </p>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-brand-orange-50 text-brand-orange-600">
                  <span>Who We Are</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Your Dedicated Real Estate Partner in Hyderabad
                </h2>
                <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                  Prime Realty Hyderabad is a specialized real estate advisory firm founded to bridge the gap between discerning property seekers and legally secure, high-potential property developments.
                </p>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  Navigating the Hyderabad real estate market—spanning HMDA plotted communities, high-rise gated enclaves, luxury villas, and agricultural farm acreage—requires reliable on-ground insight. We act as your consultative advocate, ensuring you never make an uninformed property commitment.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">
                  What We Do
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  We provide end-to-end guidance across the entire property acquisition lifecycle:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange-500 flex-shrink-0" />
                    <span>Plotted Land & Gated Layout Selection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange-500 flex-shrink-0" />
                    <span>Independent Villa & Duplex Advisory</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange-500 flex-shrink-0" />
                    <span>High-Rise Luxury Apartment Guidance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange-500 flex-shrink-0" />
                    <span>Farm Land & Managed Plot Solutions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange-500 flex-shrink-0" />
                    <span>Commercial & Retail Space Evaluation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange-500 flex-shrink-0" />
                    <span>Statutory Document & Title Verification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR 5-STAGE APPROACH */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            centered
            eyebrow="Our Methodology"
            title="A Disciplined, Five-Stage"
            highlightedTitle="Consultative Approach"
            subtitle="How we replace ambiguity and sales noise with structured clarity and dependable execution."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {approachSteps.map((s, idx) => (
              <div
                key={s.step}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-blue-50 text-brand-blue-800 font-heading font-extrabold text-sm flex items-center justify-center mb-4">
                    {s.step}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                    {s.name}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] font-bold text-brand-orange-600 uppercase tracking-wider">
                  Phase 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR CORE VALUES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            centered
            eyebrow="Guiding Principles"
            title="The Values That Define Every"
            highlightedTitle="Interaction"
            subtitle="In an industry often crowded with conflicting promises, we adhere to straightforward professional ethics."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-brand-blue-200 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5">
                  {val.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900 mb-2.5">
                  {val.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CLIENTS CHOOSE US */}
      <section className="py-20 bg-brand-navy-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange-400 block mb-2">
              The Prime Realty Distinction
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">
              Why Buyers and Investors Partner with Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-sm">
              <span className="font-heading text-3xl font-extrabold text-brand-orange-400 block mb-3">01</span>
              <h3 className="font-heading font-bold text-lg text-white mb-2">
                Uncompromising Due Diligence
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We independently verify RERA registration numbers, master plan zoning, encumbrance certificates, and builder approvals before bringing any option to your table.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-sm">
              <span className="font-heading text-3xl font-extrabold text-brand-orange-400 block mb-3">02</span>
              <h3 className="font-heading font-bold text-lg text-white mb-2">
                Deep Micro-Market Knowledge
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                From the Financial District and Kokapet to all 8 National Highway growth corridors (Mumbai, Bengaluru, Srisailam, Vijayawada, Warangal, Medchal, Shankarpally/Vikarabad, and Shamirpet), we track genuine infrastructural and civic progress.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-sm">
              <span className="font-heading text-3xl font-extrabold text-brand-orange-400 block mb-3">03</span>
              <h3 className="font-heading font-bold text-lg text-white mb-2">
                Zero High-Pressure Sales
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We believe the right property sells itself when backed by verified facts. Our advisors are trained to inform, clarify, and guide—never to coerce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LOCATIONS & HIGHWAYS COVERAGE */}
      <LocationsCoverageSection />

      {/* CTA */}
      <CTASection
        title="Experience Clear Real Estate Advisory"
        subtitle="Speak with an advisor at Prime Realty Hyderabad and discover properties carefully chosen for your criteria."
        buttonText="Schedule a Consultation"
      />
    </div>
  );
};
