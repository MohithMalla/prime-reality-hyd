import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { BRAND, NAV_LINKS, SERVICES } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-slate-800/80">
          {/* Column 1: Brand & Positioning */}
          <div className="space-y-5">
            <Link to="/" className="inline-flex items-center gap-3 bg-white p-2.5 rounded-xl shadow-sm">
              <img
                src="/images/prime-realty-logo.png"
                alt="Prime Realty Hyderabad Logo"
                className="h-10 w-auto object-contain"
              />
              <div>
                <span className="block font-heading font-extrabold text-brand-blue-800 text-base leading-tight">
                  PRIME <span className="text-brand-orange-500">REALTY</span>
                </span>
                <span className="block text-[11px] font-script font-semibold text-slate-600">
                  {BRAND.tagline}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              <span className="text-white font-semibold block mb-1">{BRAND.positioning}</span>
              Dedicated real estate advisory for residential plots, luxury villas, modern apartments, farm plots, and commercial properties across Hyderabad's key growth corridors.
            </p>

            {/* Social Media Links (Facebook and Instagram strictly verified) */}
            <div className="pt-2">
              <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Follow Us
              </span>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href={BRAND.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-brand-blue-800 hover:border-brand-blue-700 transition-all duration-200"
                  aria-label="Prime Realty Hyderabad Facebook"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href={BRAND.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-brand-orange-500 hover:border-brand-orange-500 transition-all duration-200"
                  aria-label="Prime Realty Hyderabad Instagram"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-5 tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-brand-orange-500 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-brand-orange-500 transition-colors" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Advisory Services */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-5 tracking-tight">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-slate-400 hover:text-brand-orange-500 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-brand-orange-500 transition-colors" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Business Hours */}
          <div className="space-y-5">
            <h4 className="font-heading font-bold text-white text-base mb-5 tracking-tight">
              Contact & Hours
            </h4>

            {/* Direct Contact */}
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${BRAND.phone}`}
                className="flex items-start gap-3 text-slate-300 hover:text-brand-orange-500 transition-colors group"
              >
                <Phone className="w-4 h-4 mt-1 text-brand-orange-500 flex-shrink-0" />
                <span>+91 {BRAND.phone}</span>
              </a>

              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-start gap-3 text-slate-300 hover:text-brand-orange-500 transition-colors group break-all"
              >
                <Mail className="w-4 h-4 mt-1 text-brand-orange-500 flex-shrink-0" />
                <span>{BRAND.email}</span>
              </a>

              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-4 h-4 mt-1 text-brand-orange-500 flex-shrink-0" />
                <span className="leading-relaxed">
                  {BRAND.address.line1}, {BRAND.address.line2}, {BRAND.address.city} - {BRAND.address.pincode}
                </span>
              </div>
            </div>

            {/* Business Hours */}
            <div className="pt-2 border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-white uppercase tracking-wider mb-2">
                <Clock className="w-3.5 h-3.5 text-brand-orange-500" />
                <span>Business Hours</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-400">
                {BRAND.hours.map((h, i) => (
                  <li key={i} className="flex justify-between">
                    <span>{h.days}</span>
                    <span className="text-slate-300 font-medium">{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* National Highways & Hyderabad Coverage Strip */}
        <div className="py-8 border-b border-slate-800/80">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange-400 block mb-1">
                Extensive Regional Coverage
              </span>
              <h5 className="font-heading font-extrabold text-white text-sm sm:text-base">
                Entire City of Hyderabad & All 8 National Highway Corridors
              </h5>
            </div>
            <Link
              to="/property-solutions"
              className="text-xs font-bold text-brand-orange-400 hover:text-white transition-colors flex items-center gap-1.5 self-start lg:self-center"
            >
              <span>Explore Coverage Maps & Properties</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-medium">
              <strong className="text-brand-orange-400 font-bold">Mumbai Highway (NH-65):</strong> Patancheru, Sangareddy, Sadashivpet, Zaheerabad
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-medium">
              <strong className="text-brand-orange-400 font-bold">Bengaluru Highway (NH-44):</strong> Shamshabad, Kothur, Shadnagar, Balanagar, Jadcherla
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-medium">
              <strong className="text-brand-orange-400 font-bold">Shankarpally & Vikarabad:</strong> Mokila, Shankarpally, Chevella, Ananthagiri Hills
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-medium">
              <strong className="text-brand-orange-400 font-bold">Srisailam Highway (NH-765):</strong> Tukkuguda, Maheshwaram, Mansanpally, Kadthal, Kalwakurthy
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-medium">
              <strong className="text-brand-orange-400 font-bold">Vijayawada Highway (NH-65):</strong> LB Nagar, Hayathnagar, Pedda Amberpet, Choutuppal
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-medium">
              <strong className="text-brand-orange-400 font-bold">Warangal Highway (NH-163):</strong> Uppal, Pocharam, Ghatkesar, Bibinagar, Bhongir, Yadagirigutta
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-medium">
              <strong className="text-brand-orange-400 font-bold">Medchal Highway (NH-44 North):</strong> Kompally, Kandlakoya IT Park, Medchal, Toopran
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-medium">
              <strong className="text-brand-orange-400 font-bold">Shamirpet Highway:</strong> Alwal, Bolarum, Shamirpet, Genome Valley, Rajiv Rahadari
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-medium">
              <strong className="text-brand-orange-400 font-bold">In-City Hubs:</strong> Hitec City, Gachibowli, Financial District, Kokapet, Jubilee Hills, Banjara Hills, Begumpet, Erragadda
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Prime Realty Hyderabad. All Rights Reserved.</p>
          <p className="text-slate-400 italic font-script text-base">
            "{BRAND.tagline}"
          </p>
        </div>
      </div>
    </footer>
  );
};
