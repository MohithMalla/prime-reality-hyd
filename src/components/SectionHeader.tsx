import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  highlightedTitle?: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  highlightedTitle,
  subtitle,
  centered = false,
  dark = false,
  className = '',
}) => {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-brand-orange-50 border border-brand-orange-200/60 text-brand-orange-600">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange-500"></span>
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className={`font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
        dark ? 'text-white' : 'text-slate-900'
      }`}>
        {title}{' '}
        {highlightedTitle && (
          <span className="text-brand-orange-500 relative inline-block">
            {highlightedTitle}
            <span className="absolute bottom-1 left-0 right-0 h-1 bg-brand-orange-200/40 -z-10 rounded"></span>
          </span>
        )}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
          dark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
