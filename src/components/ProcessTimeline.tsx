import React from 'react';
import { CLIENT_JOURNEY } from '../data/content';

export const ProcessTimeline: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  return (
    <div className="relative">
      {/* Desktop connecting guideline */}
      <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-brand-blue-800 via-brand-orange-500 to-brand-blue-800 -translate-y-1/2 z-0 opacity-20" />

      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 relative z-10 ${
        compact ? 'gap-3' : 'gap-4'
      }`}>
        {CLIENT_JOURNEY.map((item, idx) => (
          <div
            key={item.step}
            className="group bg-white rounded-xl p-5 border border-slate-200/80 shadow-subtle hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-4">
                <span className="w-9 h-9 rounded-lg bg-brand-blue-50 text-brand-blue-800 font-heading font-extrabold text-xs flex items-center justify-center group-hover:bg-brand-orange-500 group-hover:text-white transition-colors duration-300">
                  {item.step}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Step 0{idx + 1}
                </span>
              </div>

              {/* Title */}
              <h4 className="font-heading font-bold text-sm sm:text-base text-slate-900 group-hover:text-brand-blue-800 transition-colors mb-2">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-slate-600 text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Bottom accent pill */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-semibold text-brand-orange-600">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange-500"></span>
              <span>Prime Due Diligence</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
