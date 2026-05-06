import React, { useEffect } from 'react';
import { Star, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookDemo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
      


      {/* Main Content */}
      <main className="flex-grow flex items-stretch">
        <div className="flex flex-col lg:flex-row w-full">
          
          {/* Left Form Side */}
          <div className="lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center">
             <div className="max-w-md mx-auto w-full">
                 <div className="flex items-center gap-3 mb-8">
                    <div className="flex text-amber-400">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <Star className="w-4 h-4 fill-amber-400" />
                        <Star className="w-4 h-4 fill-amber-400" />
                        <Star className="w-4 h-4 fill-amber-400" />
                        <Star className="w-4 h-4 fill-amber-400" />
                    </div>
                    <div className="text-xs text-slate-600 font-bold">4.7 <span className="text-slate-400 font-normal">star rating with 3,249 reviews</span></div>
                 </div>

                 <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                    Every doc, every deal, made easier with OzenCRM
                 </h1>

                 <p className="text-lg text-slate-500 mb-12 leading-relaxed">
                    Schedule a personalized session to see how we help growing teams automate their entire document workflow.
                 </p>

                 <form className="space-y-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                        <div className="flex-1">
                            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">WORK EMAIL</label>
                            <input 
                                type="email" 
                                placeholder="name@company.com" 
                                className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">PHONE NUMBER</label>
                            <input 
                                type="tel" 
                                placeholder="+91-999 555 0000" 
                                className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                            />
                        </div>
                    </div>

                    <button type="button" className="w-full bg-[#3B30C8] hover:bg-indigo-700 text-white py-4 rounded-xl font-bold transition-all shadow-xl shadow-indigo-200 mt-4">
                        Book My 1:1 Demo
                    </button>
                    
                    <p className="text-center text-[10px] text-slate-400 font-medium uppercase tracking-widest mt-4">
                        No credit card required. Free 14-day trial included after demo.
                    </p>
                 </form>
             </div>
          </div>

          {/* Right Dark Side */}
          <div className="lg:w-1/2 bg-[#262C34] relative flex items-center justify-center p-8 md:p-16">
             {/* Glow effect */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-indigo-500/20 to-teal-500/10 blur-3xl pointer-events-none"></div>

             <div className="bg-[#1C2128] border border-slate-700 shadow-2xl rounded-3xl p-10 md:p-14 max-w-lg w-full relative z-10">
                 <div className="inline-block px-3 py-1 rounded-full bg-indigo-900/50 border border-indigo-700/50 text-indigo-300 text-[10px] font-bold tracking-widest uppercase mb-8">
                    PERSONALIZED SESSION
                 </div>
                 
                 <h3 className="text-3xl font-bold text-white mb-10 tracking-tight leading-tight">
                    No pitch. Just your use case, solved in real-time
                 </h3>

                 <ul className="space-y-6 mb-12">
                    <li className="flex items-start gap-4">
                        <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-emerald-400" />
                        </div>
                        <span className="text-slate-300 text-sm">A live session tailored to your company</span>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-emerald-400" />
                        </div>
                        <span className="text-slate-300 text-sm">Help identifying blockers in your current process</span>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-emerald-400" />
                        </div>
                        <span className="text-slate-300 text-sm">A walkthrough of key features and integrations</span>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-emerald-400" />
                        </div>
                        <span className="text-slate-300 text-sm">Honest answers, no sales pressure</span>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-emerald-400" />
                        </div>
                        <span className="text-slate-300 text-sm">No commitment required</span>
                    </li>
                 </ul>

                 <div className="pt-8 border-t border-slate-700 flex items-center gap-4">
                    <img src="https://ui-avatars.com/api/?name=Sarah&background=0D8ABC&color=fff" className="w-12 h-12 rounded-xl" alt="Sarah" />
                    <div>
                        <h5 className="text-white font-bold text-sm">Meet Sarah</h5>
                        <p className="text-slate-400 text-xs">Solutions Architect at LucidCRM</p>
                    </div>
                 </div>
             </div>
          </div>

        </div>
      </main>

    </div>
  );
};

export default BookDemo;
