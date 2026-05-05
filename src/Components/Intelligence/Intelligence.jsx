import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Container from '../../assets/Container.png';

export default function Intelligence() {
  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left: Dashboard Image */}
          <div className="flex-1 w-full relative flex justify-center items-center">
            {/* Background Glow - slightly smaller to match new image size */}
            <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full transform -translate-x-1/8 translate-y-1/4 -z-10 w-[80%] h-[80%] mx-auto"></div>

            {/* Image Wrapper: Added max-w-[85%] to reduce size slightly */}
            <div className="relative w-full max-w-[85%] rounded-2xl bg-slate-900 shadow-2xl overflow-hidden border border-slate-800 transform lg:rotate-[-1deg] hover:rotate-0 transition-transform duration-500 shadow-slate-900/20">
              {/* Window Controls */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-800">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
              </div>
              <img
                src={Container}
                alt="Intelligence Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 w-full flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 tracking-tight leading-tight max-w-sm">
              The Intelligence Behind the Interface
            </h2>

            <div className="flex flex-col gap-8 mb-10">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Predictive Scoring</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    AI-driven lead scoring helps your team focus on the deals most likely to close.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Omnichannel History</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Every touchpoint — email, call, and chat — unified in a single editorial timeline.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Enterprise Security</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Military-grade encryption and granular role-based access controls as standard.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <a href="#" className="inline-flex items-center text-indigo-600 font-bold hover:text-indigo-700 transition-colors">
                Explore all features <span className="ml-2">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}