import React from 'react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="w-full bg-slate-900 pt-24 pb-32 overflow-hidden relative">
      {/* Background glow effects */}
      <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -bottom-1/2 left-1/4 w-1/2 h-full bg-indigo-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute top-0 right-1/4 w-1/3 h-1/2 bg-purple-600/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Ready to transform your CRM experience?
          </h2>
          
          <p className="text-lg text-slate-400 mb-12">
            Join over 10,000+ teams growing their revenue with OzenCRM's executive toolset.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a href="https://ipixelzen.com/register" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 hover:scale-105 hover:shadow-lg hover:shadow-indigo-600/20 transition-all duration-300 text-base text-center">
              Start Free Trial
            </a>
            <Link to="/book-demo" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all duration-300 text-base border border-transparent text-center">
              Book a Demo
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
