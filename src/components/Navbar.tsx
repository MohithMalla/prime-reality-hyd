import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { BRAND, NAV_LINKS } from '../data/content';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-subtle py-3 border-b border-slate-100'
          : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <img
              src="/images/prime-realty-logo.png"
              alt="Prime Realty Hyderabad Logo"
              className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <span className="block font-heading font-extrabold text-brand-blue-800 text-lg leading-tight tracking-tight">
                PRIME <span className="text-brand-orange-500">REALTY</span>
              </span>
              <span className="block text-xs font-script font-semibold text-slate-700 tracking-wide">
                {BRAND.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'text-brand-orange-500 bg-brand-orange-50/80 font-bold'
                      : 'text-slate-700 hover:text-brand-blue-800 hover:bg-brand-blue-50/60'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${BRAND.phone}`}
              className="flex items-center gap-2 text-sm font-semibold text-brand-blue-800 hover:text-brand-orange-500 transition-colors"
              title="Call Prime Realty"
            >
              <div className="w-8 h-8 rounded-full bg-brand-blue-50 flex items-center justify-center text-brand-blue-800">
                <Phone className="w-4 h-4" />
              </div>
              <span>{BRAND.phone}</span>
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-brand-orange-500 hover:bg-brand-orange-600 text-white text-sm font-semibold shadow-sm hover:shadow-glow-orange transition-all duration-200"
            >
              <span>Talk to an Expert</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={`tel:${BRAND.phone}`}
              className="p-2 rounded-lg bg-brand-blue-50 text-brand-blue-800"
              aria-label="Call Prime Realty"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? 'text-brand-orange-500 bg-brand-orange-50 font-bold'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-5 pt-5 border-t border-slate-100 flex flex-col gap-3">
            <a
              href={`tel:${BRAND.phone}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-brand-blue-50 text-brand-blue-800 font-bold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 {BRAND.phone}</span>
            </a>

            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-brand-orange-500 text-white font-bold text-sm shadow-md"
            >
              <span>Talk to an Expert</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
