import React, { useEffect } from 'react';
import { Sparkles, Gauge, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FreeTrial = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 flex flex-col relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-50 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>



      {/* Main Content */}
      <main className="flex-grow flex items-center py-12 px-6 md:px-12 relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 w-full items-center">
          
          {/* Left Text Side */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold tracking-widest uppercase mb-8">
              <span className="w-4 h-4 bg-indigo-200 rounded text-indigo-700 flex items-center justify-center text-[10px]">📅</span> NEXT GEN CRM
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              Book an <br />
              <span className="text-[#3B30C8]">OzenCRM</span> Demo
            </h1>
            
            <p className="text-lg text-slate-600 mb-12 max-w-md leading-relaxed">
              Experience the clarity of visual CRM design. In this 1-on-1 session, we'll map your business workflow to our Lucid architecture to eliminate technical friction.
            </p>

            <div className="space-y-8">
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center shrink-0">
                     <Sparkles className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-900 mb-1">Tailored Solutions</h4>
                     <p className="text-sm text-slate-500">See how OzenCRM adapts to your specific vertical.</p>
                  </div>
               </div>

               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center shrink-0">
                     <Gauge className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-900 mb-1">Efficiency Audit</h4>
                     <p className="text-sm text-slate-500">Identify bottlenecks in your current lead management.</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Form Side */}
          <div className="lg:w-1/2 w-full max-w-lg">
             <div className="bg-white p-10 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 relative">
                
                {/* Tiny flag accent */}
                <div className="absolute top-8 left-0 w-3 h-4 bg-orange-400 rounded-r-sm"></div>
                <div className="absolute top-12 left-0 w-3 h-4 bg-green-500 rounded-r-sm"></div>
                
                <h3 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">Reserve your slot</h3>
                <p className="text-slate-500 text-sm mb-8">Free 30-minute introductory walkthrough.</p>

                <form className="space-y-6">
                   <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">WORK EMAIL</label>
                      <input 
                        type="email" 
                        placeholder="name@company.com" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      />
                   </div>

                   <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">PHONE NUMBER</label>
                      <div className="flex">
                         <div className="px-3 py-3 border border-slate-200 border-r-0 rounded-l-xl bg-slate-50 flex items-center gap-2 text-slate-600 font-medium">
                            <span className="text-lg leading-none">🇮🇳</span> +91 <ChevronDownIcon />
                         </div>
                         <input 
                           type="tel" 
                           placeholder="(999) 000-1234" 
                           className="w-full px-4 py-3 rounded-r-xl border border-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                         />
                      </div>
                   </div>

                   <button type="button" className="w-full bg-[#3B30C8] hover:bg-indigo-700 text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 mt-4">
                      Schedule Your Demo <ArrowRight className="w-4 h-4" />
                   </button>
                </form>

                <div className="mt-10 flex items-center gap-4">
                   <div className="flex -space-x-3">
                      <img src="https://ui-avatars.com/api/?name=JD&background=random" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="user" />
                      <img src="https://ui-avatars.com/api/?name=AM&background=random" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="user" />
                      <img src="https://ui-avatars.com/api/?name=RJ&background=random" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="user" />
                   </div>
                   <p className="text-xs text-slate-500 font-medium">Joined by <strong className="text-slate-900">2,400+</strong> teams this month.</p>
                </div>
             </div>
          </div>

        </div>
      </main>

    </div>
  );
};

const ChevronDownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

export default FreeTrial;
