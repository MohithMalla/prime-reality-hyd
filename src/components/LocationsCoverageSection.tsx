import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Navigation, 
  ArrowRight, 
  Building2, 
  Compass, 
  ChevronRight
} from 'lucide-react';
import { NATIONAL_HIGHWAYS, HYDERABAD_ZONES, BRAND } from '../data/content';
import { SectionHeader } from './SectionHeader';

export const LocationsCoverageSection: React.FC<{
  title?: string;
  highlightedTitle?: string;
  subtitle?: string;
  className?: string;
  compact?: boolean;
}> = ({
  title = "Coverage Across Hyderabad &",
  highlightedTitle = "All National Highways",
  subtitle = "From prime in-city residential & IT micro-markets to high-growth plotted corridors along all 8 national highway arterial belts, Prime Realty offers verified advisory coverage.",
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState<'highways' | 'city'>('highways');
  const [selectedCorridorId, setSelectedCorridorId] = useState<string>(NATIONAL_HIGHWAYS[0].id);

  const selectedCorridor = NATIONAL_HIGHWAYS.find((h) => h.id === selectedCorridorId) || NATIONAL_HIGHWAYS[0];

  return (
    <section className={`py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden ${className}`}>
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-brand-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeader
            eyebrow="Extensive Geographic Reach"
            title={title}
            highlightedTitle={highlightedTitle}
            subtitle={subtitle}
            dark
          />

          {/* Toggle Tab */}
          <div className="flex items-center p-1 bg-slate-800/90 rounded-xl border border-slate-700/80 self-start md:self-end">
            <button
              onClick={() => setActiveTab('highways')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeTab === 'highways'
                  ? 'bg-brand-orange-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>All 8 National Highways</span>
            </button>
            <button
              onClick={() => setActiveTab('city')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeTab === 'city'
                  ? 'bg-brand-orange-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Entire Hyderabad City</span>
            </button>
          </div>
        </div>

        {/* TAB 1: ALL 8 NATIONAL HIGHWAYS */}
        {activeTab === 'highways' && (
          <div className="space-y-8">
            {/* Quick Pill Ribbon for all 8 Highways */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
              {NATIONAL_HIGHWAYS.map((highway) => {
                const isSelected = highway.id === selectedCorridorId;
                return (
                  <button
                    key={highway.id}
                    onClick={() => setSelectedCorridorId(highway.id)}
                    className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                      isSelected
                        ? 'bg-brand-blue-800/80 border-brand-orange-500 text-white shadow-lg ring-1 ring-brand-orange-500/50'
                        : 'bg-slate-800/60 border-slate-700/70 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                    }`}
                  >
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-orange-400 block mb-1">
                      {highway.highwayCode}
                    </span>
                    <span className="text-xs font-bold leading-tight line-clamp-2">
                      {highway.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Featured Active Corridor Card */}
            <div className="bg-slate-800/90 rounded-2xl border border-slate-700/80 p-6 sm:p-8 lg:p-10 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-brand-orange-500 text-white">
                      {selectedCorridor.highwayCode}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-700 text-slate-300">
                      {selectedCorridor.direction}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                    {selectedCorridor.name} Corridor
                  </h3>
                  
                  <p className="text-brand-orange-300 text-sm sm:text-base font-medium">
                    {selectedCorridor.headline}
                  </p>

                  <div className="pt-2">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      <MapPin className="w-4 h-4 text-brand-orange-400" />
                      <span>Key Hubs, Towns & Micro-Markets Along This Highway:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedCorridor.keyAreas.map((area, aIdx) => (
                        <span
                          key={aIdx}
                          className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900/90 border border-slate-700/70 text-slate-200"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-700/80">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Growth Catalysts & Connectivity:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {selectedCorridor.growthDrivers}
                    </p>
                  </div>
                </div>

                {/* Right Quick Summary & CTA */}
                <div className="lg:col-span-5 bg-slate-900/90 rounded-xl p-6 border border-slate-700/70 space-y-5">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-orange-400 block mb-2">
                      Asset Classes Available
                    </span>
                    <ul className="space-y-2 text-xs text-slate-200">
                      {selectedCorridor.propertyTypes.map((pt, ptIdx) => (
                        <li key={ptIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange-400 flex-shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-300 space-y-1">
                    <p className="font-semibold text-white">Full Legal Due Diligence</p>
                    <p>HMDA / RERA / DTCP layout screening, 30-year link doc checks & sub-registrar office registration coordination.</p>
                  </div>

                  <div className="pt-2">
                    <Link
                      to={`/contact?property=${encodeURIComponent(selectedCorridor.name + ' Corridor')}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-orange-500 hover:bg-brand-orange-600 text-white text-xs sm:text-sm font-bold shadow-md transition-all duration-200"
                    >
                      <span>Enquire on {selectedCorridor.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid Overview of All 8 Highways */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {NATIONAL_HIGHWAYS.map((hw) => (
                <div
                  key={hw.id}
                  onClick={() => setSelectedCorridorId(hw.id)}
                  className={`cursor-pointer p-5 rounded-xl border transition-all duration-200 ${
                    hw.id === selectedCorridorId
                      ? 'bg-slate-800 border-brand-orange-500'
                      : 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800/70 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-brand-blue-800/80 text-brand-orange-300">
                      {hw.highwayCode}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {hw.direction}
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-sm text-white mb-2">
                    {hw.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2 mb-3">
                    {hw.keyAreas.slice(0, 5).join(", ")}...
                  </p>
                  <div className="flex items-center text-[11px] font-bold text-brand-orange-400">
                    <span>Explore highway</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: ENTIRE CITY OF HYDERABAD */}
        {activeTab === 'city' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HYDERABAD_ZONES.map((zone) => (
              <div
                key={zone.id}
                className="bg-slate-800/90 rounded-2xl p-6 sm:p-7 border border-slate-700/80 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="w-4 h-4 text-brand-orange-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-orange-400">
                      Hyderabad Urban Zone
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white mb-1">
                    {zone.zone}
                  </h3>
                  
                  <p className="text-xs text-brand-orange-300 font-medium mb-4">
                    {zone.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {zone.description}
                  </p>

                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Prominent Micro-Markets & Localities:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {zone.majorAreas.map((loc, lIdx) => (
                        <span
                          key={lIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-900/90 border border-slate-700/60 text-slate-200"
                        >
                          {loc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/80 flex items-center justify-between">
                  <Link
                    to={`/contact?property=${encodeURIComponent(zone.zone)}`}
                    className="text-xs font-bold text-brand-orange-400 hover:text-brand-orange-300 transition-colors flex items-center gap-1.5"
                  >
                    <span>Enquire for {zone.zone.split(' ')[0]} Hubs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <span className="text-[10px] text-slate-400 uppercase font-semibold">
                    Prime Realty Advisory
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Banner with Office & Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-brand-blue-950 via-slate-800 to-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-orange-500/20 text-brand-orange-400 flex items-center justify-center flex-shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base sm:text-lg text-white">
                Looking for a specific layout or corridor not listed?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Our advisors cover every mandal, highway junction, and municipal ward across the Greater Hyderabad Region.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={`tel:${BRAND.phone}`}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-bold text-xs sm:text-sm transition-colors"
            >
              Call: +91 {BRAND.phone}
            </a>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-bold text-xs sm:text-sm shadow-md transition-colors"
            >
              Get Custom Shortlist
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
