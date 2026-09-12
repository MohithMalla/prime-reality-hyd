import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  TrendingUp, 
  Award, 
  Eye, 
  HeartHandshake, 
  Layers, 
  ArrowRight,
  CheckCircle2,
  Phone
} from 'lucide-react';
import { BRAND, CLIENT_JOURNEY } from '../data/content';
import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/SectionHeader';
import { CTASection } from '../components/CTASection';

export const WhyPrimeRealtyPage: React.FC = () => {
  const trustSections = [
    {
      id: "genuine-properties",
      number: "01",
      title: "Genuine & Carefully Selected Properties",
      subtitle: "Screened against legal, civic, and regulatory standards.",
      desc: "In an expansive market like Hyderabad, many properties suffer from ambiguous titles, unauthorized layout demarcations, or unresolved master-plan encumbrances. At Prime Realty, we apply rigorous preliminary filtering. We demand verified layout sanction letters (HMDA/DTCP/GHMC), RERA registration numbers, 30-year link documentation, and revenue verification before a property enters our active recommendation list.",
      points: [
        "Rigorous preliminary legal documentation check",
        "Master plan and zoning classification verification",
        "Clear boundary demarcations and physical possession sanity",
        "Direct builder and developer integrity check",
      ],
      image: "/images/documentation.jpg",
    },
    {
      id: "high-growth-locations",
      number: "02",
      title: "High-Growth Locations",
      subtitle: "Capitalizing on proven infrastructural momentum.",
      desc: "Sustainable value creation in real estate depends heavily on civic infrastructure. We focus on Hyderabad's most promising economic corridors—including the Outer Ring Road (ORR) growth belt, the Financial District expansion zones, Mokila, Shankarpally, Shamshabad, and Kompally. We evaluate actual road widening timelines, metro rail extensions, water connectivity grids, and IT corridor spillover.",
      points: [
        "Outer Ring Road (ORR) exit connectivity analysis",
        "Upcoming Radial Road and Regional Ring Road (RRR) proximity",
        "Workplace hub commute assessments",
        "Zoning and industrial-buffer segregation checks",
      ],
      image: "/images/hyderabad-city.jpg",
    },
    {
      id: "professional-guidance",
      number: "03",
      title: "Professional Property Guidance",
      subtitle: "Data-grounded counsel without hype or sales pressure.",
      desc: "Too often, real estate advice is dominated by aggressive sales tactics and exaggerated claims. Prime Realty takes an advisory-first stance. We assess your budget, family milestones, lifestyle aspirations, and horizon before presenting options. We discuss the downsides and risks of each property as candidly as the advantages.",
      points: [
        "Unbiased comparative property evaluations",
        "Micro-market price benchmarking against authentic registries",
        "Honest discussions on pros, cons, and timelines",
        "Tailored options matched to your exact financial profile",
      ],
      image: "/images/property-evaluation.jpg",
    },
    {
      id: "transparent-communication",
      number: "04",
      title: "Transparent Communication",
      subtitle: "Complete clarity on pricing, approvals, and timelines.",
      desc: "Trust is won through radical transparency. We break down the complete financial commitment of your property purchase—including base costs, registration stamp duty, clubhouse fees, maintenance reserves, and mutation expenses—upfront. No surprise line items, no hidden markups, and no vague answers.",
      points: [
        "Comprehensive total cost of ownership breakdown",
        "Clear disclosure of regulatory approvals and pending sanctions",
        "Direct coordination with builder documentation teams",
        "Written clarity on all transaction milestones",
      ],
      image: "/images/property-consultation.jpg",
    },
    {
      id: "dedicated-client-support",
      number: "05",
      title: "Dedicated Client Support",
      subtitle: "A single point of contact focused entirely on your success.",
      desc: "You won't be passed around between call center agents. At Prime Realty, each client is paired with a dedicated property advisor who manages your search, schedules private escorted site visits, liaises with developers, and ensures your questions are answered promptly.",
      points: [
        "Dedicated personal real estate advisor",
        "Organized, chauffeured private site inspections",
        "Direct WhatsApp and telephone access to your advisor",
        "Responsive, respectful communication at your pace",
      ],
      image: "/images/site-visit.jpg",
    },
    {
      id: "end-to-end-assistance",
      number: "06",
      title: "End-to-End Assistance",
      subtitle: "Comprehensive partnership from first call to post-registration.",
      desc: "Our involvement doesn't conclude when an agreement is drafted. We accompany you through legal vetting, sub-registrar office registration, revenue record mutation, and physical handover inspections. For plots and farm acreage, we even assist with boundary fencing and utility coordination.",
      points: [
        "Legal draft review and registration coordination",
        "Mutation, Dharani portal, and municipal tax transfer assistance",
        "Physical possession checklist walkthrough",
        "Ongoing portfolio reviews and advisory whenever needed",
      ],
      image: "/images/office.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        badge="Trust & Credibility"
        title="Real Estate Decisions Backed by"
        highlightText="Guidance and Trust"
        subtitle="Discover why property buyers and investors across Hyderabad rely on Prime Realty for transparent advisory, verified properties, and seamless acquisition."
        breadcrumbCurrent="Why Prime Realty"
        bgImage="/images/luxury-villa.jpg"
      />

      {/* 1. SIX MAJOR TRUST SECTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          <SectionHeader
            centered
            eyebrow="The Prime Foundation"
            title="Six Guiding Pillars Behind Every"
            highlightedTitle="Transaction"
            subtitle="How we safeguard your hard-earned capital and deliver peace of mind across every property engagement."
            className="mb-16"
          />

          {trustSections.map((section, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={section.id}
                id={section.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Local Photographic Evidence */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-premium border border-slate-200">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-[360px] sm:h-[400px] object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="w-10 h-10 rounded-xl bg-brand-orange-500 text-white font-heading font-extrabold text-sm flex items-center justify-center shadow-md">
                        {section.number}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Section Content */}
                <div className={`lg:col-span-7 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-orange-600 block mb-1">
                      Pillar {section.number}
                    </span>
                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {section.title}
                    </h2>
                    <p className="text-sm font-semibold text-brand-blue-800 mt-1">
                      {section.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {section.desc}
                  </p>

                  <div className="pt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                      {section.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-brand-orange-500 flex-shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. THE PREMIUM CLIENT JOURNEY TIMELINE */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            centered
            eyebrow="The End-to-End Roadmap"
            title="The Prime Realty Client Journey:"
            highlightedTitle="01 to 07"
            subtitle="A transparent, chronological framework ensuring every stage of your acquisition is thoroughly verified and guided."
            className="mb-16"
          />

          <div className="space-y-4">
            {CLIENT_JOURNEY.map((stepItem, sIdx) => (
              <div
                key={stepItem.step}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col md:flex-row md:items-center gap-6"
              >
                {/* Step badge */}
                <div className="w-14 h-14 rounded-2xl bg-brand-blue-50 text-brand-blue-800 font-heading font-extrabold text-xl flex items-center justify-center flex-shrink-0">
                  {stepItem.step}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-orange-600 block mb-1">
                    Stage 0{sIdx + 1}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">
                    {stepItem.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {stepItem.desc}
                  </p>
                </div>

                {/* Right tag */}
                <div className="hidden lg:block text-right">
                  <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                    Quality Assured
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <CTASection
        title="Speak With Prime Realty"
        subtitle="Experience property advisory rooted in facts, due diligence, and authentic client commitment across Hyderabad."
        buttonText="Book a One-on-One Session"
      />
    </div>
  );
};
