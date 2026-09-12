import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { BRAND } from '../data/content';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Let's Find Your Next Opportunity",
  subtitle = "Professional real estate guidance tailored to your location preferences, budget parameters, and long-term objectives across Hyderabad.",
  buttonText = "Contact Prime Realty",
}) => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-blue-900 via-brand-navy-900 to-brand-navy-950 text-white relative overflow-hidden">
      {/* Background patterns and glows */}
      <div className="absolute inset-0 bg-pattern-grid opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-brand-orange-500/20 border border-brand-orange-400/30 text-brand-orange-300">
          <ShieldCheck className="w-4 h-4 text-brand-orange-400" />
          <span>Your Trusted Growth Partner</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl mx-auto mb-5">
          {title}
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-orange-500 hover:bg-brand-orange-600 active:scale-98 text-white font-bold text-sm sm:text-base shadow-glow-orange transition-all duration-200"
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`tel:${BRAND.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 active:scale-98 text-white font-semibold text-sm sm:text-base backdrop-blur-sm transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-brand-orange-400" />
            <span>Call +91 {BRAND.phone}</span>
          </a>
        </div>

        <p className="mt-8 text-xs text-slate-300 italic font-script text-base">
          "{BRAND.tagline}"
        </p>
      </div>
    </section>
  );
};
