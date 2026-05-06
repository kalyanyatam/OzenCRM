import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#F8FAFC] pt-16 pb-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-slate-800">OzenCRM</h2>
            <p className="text-slate-500 text-sm leading-relaxed pr-4">
              Elevating sales management through visual silence and executive clarity.
            </p>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[11px] font-bold text-slate-600 tracking-widest uppercase">Company</h3>
            <Link to="/product" className="text-slate-500 text-sm hover:text-slate-900 transition-colors">Product</Link>
            <Link to="/api" className="text-slate-500 text-sm hover:text-slate-900 transition-colors">API</Link>
            <Link to="/pricing" className="text-slate-500 text-sm hover:text-slate-900 transition-colors">Pricing</Link>
          </div>

          {/* Column 3: Resources */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[11px] font-bold text-slate-600 tracking-widest uppercase">Resources</h3>
            <Link to="#" className="text-slate-500 text-sm hover:text-slate-900 transition-colors">Documentation</Link>
            <Link to="#" className="text-slate-500 text-sm hover:text-slate-900 transition-colors">Help Center</Link>
            <Link to="#" className="text-slate-500 text-sm hover:text-slate-900 transition-colors">API Reference</Link>
          </div>

          {/* Column 4: Social Media Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[11px] font-bold text-slate-600 tracking-widest uppercase">Social Media Links</h3>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="text-center text-slate-500 text-sm font-medium">
          © 2026 OzenCRM. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
