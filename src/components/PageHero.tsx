import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  badge: string;
  title: string;
  highlightText?: string;
  subtitle: string;
  breadcrumbCurrent: string;
  bgImage?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  title,
  highlightText,
  subtitle,
  breadcrumbCurrent,
  bgImage,
}) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 bg-brand-navy-950 text-white overflow-hidden">
      {/* Background Graphic or Image */}
      {bgImage ? (
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt={title}
            className="w-full h-full object-cover object-center opacity-25 filter saturate-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-950 via-brand-navy-950/90 to-brand-navy-900/80" />
        </div>
      ) : (
        <div className="absolute inset-0 z-0 opacity-10 bg-pattern-grid" />
      )}

      {/* Subtle Glows */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-brand-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-80 h-80 bg-brand-orange-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-medium" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-brand-orange-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-brand-orange-400 font-semibold">{breadcrumbCurrent}</span>
        </nav>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-brand-blue-900/80 border border-brand-blue-700/60 text-brand-orange-400 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-brand-orange-500 animate-pulse"></span>
          <span>{badge}</span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-3xl leading-[1.15]">
          {title}{' '}
          {highlightText && (
            <span className="text-brand-orange-400">
              {highlightText}
            </span>
          )}
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
};
