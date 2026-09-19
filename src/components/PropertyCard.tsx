import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Check } from 'lucide-react';
import { PropertyCategory } from '../data/content';

export const PropertyCard: React.FC<{ category: PropertyCategory }> = ({ category }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-subtle hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
      <div>
        {/* Local Photograph with Tag */}
        <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-100">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

          {/* Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 text-brand-blue-800 shadow-sm backdrop-blur-sm">
              {category.tag}
            </span>
          </div>

          {/* Bottom Title on Image */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="font-heading font-extrabold text-2xl text-white drop-shadow-md">
              {category.title}
            </h3>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7">
          <p className="text-slate-600 text-sm leading-relaxed mb-5">
            {category.summary}
          </p>

          {/* Key highlights */}
          <div className="space-y-2 mb-5">
            {category.highlights.slice(0, 2).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Prime Corridors */}
          <div className="pt-4 border-t border-slate-100 mb-6">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              <MapPin className="w-3.5 h-3.5 text-brand-orange-500" />
              <span>Key Corridors & Highways</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {category.locations.slice(0, 4).map((loc, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700"
                >
                  {loc}
                </span>
              ))}
              {category.locations.length > 4 && (
                <span className="px-2 py-1 rounded-md text-[10px] font-bold bg-brand-orange-50 text-brand-orange-600">
                  +{category.locations.length - 4} more corridors
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Link */}
      <div className="p-6 sm:px-7 sm:pb-7 pt-0 flex items-center justify-between border-t border-slate-100/80">
        <Link
          to={`/property-solutions#${category.id}`}
          className="text-xs font-bold text-brand-blue-800 hover:text-brand-orange-500 transition-colors flex items-center gap-1.5"
        >
          <span>Explore Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <Link
          to="/contact"
          className="px-3.5 py-1.5 rounded-lg bg-brand-orange-50 hover:bg-brand-orange-500 text-brand-orange-600 hover:text-white text-xs font-bold transition-all duration-200"
        >
          Enquire
        </Link>
      </div>
    </div>
  );
};
