import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Compass, 
  CheckCircle2, 
  Building2, 
  Phone,
  Sparkles,
  Award,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { 
  BRAND, 
  PROPERTY_CATEGORIES, 
  SERVICES, 
  TRUST_FACTORS 
} from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import { PropertyCard } from '../components/PropertyCard';
import { ServiceCard } from '../components/ServiceCard';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { CTASection } from '../components/CTASection';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-slate-950">
        {/* Local Hero Photograph with Gradient Scrims */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-real-estate.jpg"
            alt="Prime Realty Hyderabad Luxury Architecture"
            className="w-full h-full object-cover object-center transform scale-102 transition-transform duration-1000"
          />
          {/* Multi-stage Scrim for pristine typography readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-950/95 via-brand-navy-950/80 to-transparent lg:w-3/4" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950 via-transparent to-brand-navy-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Positioning Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-white/10 border border-white/20 text-brand-orange-400 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange-400" />
              <span>{BRAND.positioning}</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] drop-shadow-sm">
              Find the Right Property.{' '}
              <span className="text-brand-orange-400 block mt-1">
                Build the Right Future.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl">
              Professional real estate guidance for plots, villas, apartments, farm plots and commercial properties across Hyderabad and its rapidly developing surrounding areas.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-brand-orange-500 hover:bg-brand-orange-600 active:scale-98 text-white font-bold text-sm sm:text-base shadow-glow-orange transition-all duration-200"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 active:scale-98 text-white font-semibold text-sm sm:text-base backdrop-blur-md transition-all duration-200"
              >
                <span>Talk to an Expert</span>
              </Link>
            </div>

            {/* Micro Highlights */}
            <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-orange-400 flex-shrink-0" />
                <span>Legally Vetted Properties</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-brand-orange-400 flex-shrink-0" />
                <span>High-Growth Corridors</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Building2 className="w-4 h-4 text-brand-orange-400 flex-shrink-0" />
                <span>End-to-End Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION — TRUSTED REAL ESTATE GUIDANCE */}
      <section className="py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeader
                eyebrow="Our Approach"
                title="Trusted Real Estate Guidance Across"
                highlightedTitle="Hyderabad"
                subtitle="At Prime Realty Hyderabad, our philosophy is anchored in our tagline: 'your choice our service'. We do not push arbitrary listings; we provide structured advisory so you make decisions with clarity, legal security, and confidence."
              />

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-slate-200/80 shadow-subtle">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue-50 text-brand-blue-800 flex items-center justify-center flex-shrink-0 font-bold">
                    01
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-sm mb-1">
                      Objective, Research-Backed Guidance
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      We analyze micro-market rate trends, upcoming arterial connectivity, and growth drivers to match properties to your genuine requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-slate-200/80 shadow-subtle">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange-50 text-brand-orange-600 flex items-center justify-center flex-shrink-0 font-bold">
                    02
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-sm mb-1">
                      Strict Legal & Approval Verification
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Every layout and residential development is screened for clear titles, encumbrance clearances, and statutory approvals (HMDA/RERA/DTCP).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-slate-200/80 shadow-subtle">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue-50 text-brand-blue-800 flex items-center justify-center flex-shrink-0 font-bold">
                    03
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-sm mb-1">
                      Dedicated One-on-One Client Advisory
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      You work directly with knowledgeable property specialists who escort you for on-ground site visits, paperwork, and registration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue-800 hover:text-brand-orange-500 transition-colors"
                >
                  <span>Learn more about Prime Realty's philosophy</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Photographic Feature Display */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-premium border border-slate-200">
                <img
                  src="/images/property-consultation.jpg"
                  alt="Prime Realty Property Consultation in Hyderabad"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-orange-400 block mb-1">
                    Client-First Consultation
                  </span>
                  <p className="text-sm font-semibold text-white/90">
                    Transparent discussions, detailed master plans, and zero-pressure decision frameworks.
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 bg-white p-4 rounded-xl shadow-xl border border-slate-200 max-w-xs">
                <div className="w-10 h-10 rounded-lg bg-brand-orange-500 text-white flex items-center justify-center flex-shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-heading font-bold text-xs text-slate-900">Your Choice, Our Service</span>
                  <span className="block text-[11px] text-slate-600">Pure client-focused partnership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION — PROPERTY CATEGORIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeader
              eyebrow="Asset Portfolio"
              title="Explore Our Core"
              highlightedTitle="Property Categories"
              subtitle="Whether you are acquiring prime plotted land, luxury independent villas, modern apartments, managed farm plots, or commercial retail spaces, we curate options designed around your objectives."
            />

            <Link
              to="/property-solutions"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 hover:border-brand-blue-800 text-brand-blue-800 text-xs font-bold uppercase tracking-wider transition-colors flex-shrink-0"
            >
              <span>View All Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 5 Visual Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROPERTY_CATEGORIES.map((cat) => (
              <PropertyCard key={cat.id} category={cat} />
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link
              to="/property-solutions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-blue-800 text-white text-sm font-semibold shadow-sm"
            >
              <span>Explore All Property Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. SECTION — OUR SERVICES */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            centered
            eyebrow="Full-Spectrum Advisory"
            title="Comprehensive Services for Every Stage of Your"
            highlightedTitle="Purchase"
            subtitle="From initial market exploration to on-ground site inspections, document verification, and post-registration support, Prime Realty is your end-to-end partner."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 4).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-blue-800 hover:bg-brand-blue-900 text-white text-sm font-bold shadow-md transition-colors"
            >
              <span>View All 8 Advisory Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. SECTION — PROPERTY JOURNEY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            centered
            eyebrow="Transparent Roadmap"
            title="Your Structured"
            highlightedTitle="Property Journey"
            subtitle="We break down complex real estate transactions into seven clear, verified, and guided steps."
            className="mb-14"
          />

          <ProcessTimeline />
        </div>
      </section>

      {/* 6. SECTION — WHY PRIME REALTY (6 Trust Factors) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            centered
            eyebrow="The Prime Standard"
            title="Why Discerning Buyers Choose"
            highlightedTitle="Prime Realty"
            subtitle="Built on integrity, thorough due diligence, and authentic client care. Here is how we safeguard your real estate decisions."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TRUST_FACTORS.map((factor, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-subtle hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-orange-50 text-brand-orange-600 flex items-center justify-center mb-5 font-bold">
                  {idx + 1}
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900 mb-2.5">
                  {factor.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {factor.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECTION — CTA */}
      <CTASection
        title="Let's Find Your Next Opportunity"
        subtitle="Explore opportunities based on location, budget and investment objectives across Hyderabad's premier corridors."
        buttonText="Contact Prime Realty"
      />
    </div>
  );
};
