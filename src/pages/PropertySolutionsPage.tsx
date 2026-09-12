import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Check, 
  AlertCircle, 
  ArrowRight, 
  Compass, 
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { PROPERTY_CATEGORIES, HOW_WE_HELP_CHOOSE, BRAND } from '../data/content';
import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/SectionHeader';
import { CTASection } from '../components/CTASection';

export const PropertySolutionsPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <PageHero
        badge="Curated Property Portfolio"
        title="Property Opportunities Designed"
        highlightText="Around Your Goals"
        subtitle="Explore detailed advisory across residential plotted developments, luxury villas, modern apartments, managed farm plots, and commercial assets across Hyderabad."
        breadcrumbCurrent="Property Solutions"
        bgImage="/images/hero-real-estate.jpg"
      />

      {/* 1. FIVE MAJOR PROPERTY SECTIONS */}
      <div className="py-16 lg:py-24 space-y-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {PROPERTY_CATEGORIES.map((category, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <section
                key={category.id}
                id={category.id}
                className="scroll-mt-32 pt-8 border-t first:border-t-0 border-slate-200"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Large Local Photograph */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-premium border border-slate-200 group">
                      <img
                        src={category.image}
                        alt={`${category.title} in Hyderabad`}
                        className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 text-brand-blue-800 shadow-md backdrop-blur-sm">
                          {category.tag}
                        </span>
                      </div>

                      {/* Inset Corridor Pill */}
                      <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md p-3.5 rounded-xl text-white text-xs flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-brand-orange-400 flex-shrink-0" />
                          <span className="font-semibold">{category.locations[0]} & {category.locations[1]}</span>
                        </div>
                        <span className="text-[10px] text-brand-orange-300 font-bold uppercase">Prime Belt</span>
                      </div>
                    </div>
                  </div>

                  {/* Category Details & Due Diligence */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-orange-600 block mb-2">
                        Category 0{idx + 1}
                      </span>
                      <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        {category.title}
                      </h2>
                      <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                        {category.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80">
                      <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-blue-800 mb-3">
                        Key Features & Standards
                      </h4>
                      <div className="space-y-2">
                        {category.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Considerations (Advisory Due Diligence) */}
                    <div className="space-y-2.5">
                      <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-brand-orange-500" />
                        <span>Key Considerations Before Purchasing:</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                        {category.keyConsiderations.map((consideration, cIdx) => (
                          <div key={cIdx} className="flex items-start gap-1.5">
                            <span className="text-brand-orange-500 font-bold">•</span>
                            <span>{consideration}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Actions */}
                    <div className="pt-2 flex items-center gap-4">
                      <Link
                        to={`/contact?property=${encodeURIComponent(category.title)}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
                      >
                        <span>Enquire About {category.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <a
                        href={`tel:${BRAND.phone}`}
                        className="text-xs font-bold text-slate-600 hover:text-brand-blue-800 transition-colors"
                      >
                        Call: +91 {BRAND.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* 2. SECTION — HOW WE HELP YOU CHOOSE */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            centered
            eyebrow="Advisory Framework"
            title="How We Help You Choose the"
            highlightedTitle="Right Property"
            subtitle="Real estate should never be a guess. We systematically evaluate six foundational factors before recommending an acquisition."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HOW_WE_HELP_CHOOSE.map((factor, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-subtle hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-blue-50 text-brand-blue-800 font-heading font-extrabold text-sm flex items-center justify-center mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                  {factor.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {factor.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 max-w-2xl mx-auto text-center bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-xs text-slate-500 leading-relaxed italic">
              "We provide objective market intelligence, civic infrastructure updates, and legal verification so our clients can make educated, sustainable real estate choices without speculative promises."
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Find the Solution Tailored to You"
        subtitle="Speak with a Prime Realty property specialist today for an objective evaluation of your criteria."
        buttonText="Book a Property Review"
      />
    </div>
  );
};
