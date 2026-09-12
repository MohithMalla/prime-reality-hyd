import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';
import { BRAND } from '../data/content';

export const MobileStickyCTA: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-2xl safe-area-pb">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${BRAND.phone}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-brand-blue-800 text-white font-semibold text-xs sm:text-sm active:scale-98 transition-transform shadow-sm"
        >
          <Phone className="w-4 h-4 text-brand-orange-400" />
          <span>Call Now</span>
        </a>

        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-semibold text-xs sm:text-sm active:scale-98 transition-transform shadow-sm"
        >
          <Calendar className="w-4 h-4" />
          <span>Enquire Now</span>
        </Link>
      </div>
    </div>
  );
};
