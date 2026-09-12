import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  TrendingUp, 
  Users, 
  Compass, 
  CheckSquare, 
  FileText, 
  Handshake, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { ServiceItem } from '../data/content';

const ICON_MAP: Record<string, React.ReactNode> = {
  Home: <Home className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Compass: <Compass className="w-6 h-6" />,
  CheckSquare: <CheckSquare className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  Handshake: <Handshake className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
};

export const ServiceCard: React.FC<{ service: ServiceItem }> = ({ service }) => {
  return (
    <div className="group relative bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-subtle hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
      {/* Accent hover line */}
      <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-brand-blue-800 to-brand-orange-500 rounded-b opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Icon & ID */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-xl bg-brand-blue-50 text-brand-blue-800 flex items-center justify-center group-hover:bg-brand-orange-50 group-hover:text-brand-orange-500 transition-colors duration-300">
            {ICON_MAP[service.iconName] || <Home className="w-6 h-6" />}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-brand-blue-800 transition-colors mb-3">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-5">
          {service.shortDesc}
        </p>

        {/* Features List */}
        <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Trigger */}
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue-800 group-hover:text-brand-orange-500 transition-colors"
      >
        <span>Enquire About Service</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};
