import React, { useState, useEffect } from 'react';
import { CheckCircle2, ChevronRight, HelpCircle, ShieldCheck, Fingerprint, RefreshCcw, Cloud, Zap, Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white font-sans text-slate-900 pb-20">
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-bold tracking-widest uppercase mb-8">
          <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
          THE FUTURE OF LEGAL TECH
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
          Affordable, scalable <br />
          <span className="text-indigo-600">notary solutions</span>
        </h1>
        
        <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          Create, manage, eSign, and notarize documents online with ease. No extra charges per signer or seal. Volume discounts apply.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-indigo-200 w-full sm:w-auto">
            Launch Notarization
          </button>
          <button className="text-slate-600 font-bold hover:text-slate-900 transition-colors">
            View Pricing Matrix
          </button>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Pricing for every scale
            </h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              Streamline your executive operations with a transparent pricing model built for modern legal and administrative teams.
            </p>
            
            {/* Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={`font-bold text-sm ${!isYearly ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
              <button 
                onClick={() => setIsYearly(!isYearly)}
                className="w-14 h-8 bg-slate-200 rounded-full relative p-1 transition-colors"
              >
                <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${isYearly ? 'translate-x-6' : 'translate-x-0'}`}></div>
              </button>
              <div className="flex items-center gap-2">
                <span className={`font-bold text-sm ${isYearly ? 'text-slate-900' : 'text-slate-400'}`}>Yearly</span>
                <span className="bg-teal-100 text-teal-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">SAVE 20%</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow flex flex-col">
              <div className="text-indigo-600 text-[11px] font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                <RefreshCcw className="w-3 h-3" /> PROFESSIONAL
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Bring your own notary</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow">
                Perfect for large organizations with an existing notary workforce looking for seamless digital orchestration.
              </p>
              
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-slate-900">${isYearly ? '55' : '69'}</span>
                <span className="text-slate-400 font-medium"> /per month</span>
              </div>
              
              <Link to="/book-demo" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-bold transition-colors text-center block">
                Book demo
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow flex flex-col">
              <div className="text-teal-600 text-[11px] font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                <ShieldCheck className="w-3 h-3" /> ENTERPRISE
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Use our notaries</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow">
                Ideal for growing teams needing on-demand access to a verified network of 50,000+ legal professionals.
              </p>
              
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-slate-900">$25</span>
                <span className="text-slate-400 font-medium"> /per session</span>
              </div>
              
              <Link to="/book-demo" className="w-full bg-white text-slate-900 border-2 border-slate-200 hover:border-slate-300 py-4 rounded-xl font-bold transition-colors text-center block">
                Book demo
              </Link>
            </div>
          </div>
          
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-24 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h4 className="text-[11px] font-bold tracking-widest uppercase text-slate-400">KEY FEATURE COMPARISON</h4>
          </div>
          
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-center justify-between py-6 border-b border-slate-100">
              <div className="flex items-start gap-4 w-1/2">
                <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 mt-1">
                  <Zap className="w-4 h-4 text-indigo-500" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">Automatic placement</h5>
                  <p className="text-xs text-slate-500">Smart routing based on availability and jurisdiction.</p>
                </div>
              </div>
              <div className="w-1/4 text-center flex flex-col items-center">
                <CheckCircle2 className="w-6 h-6 text-indigo-600 mb-1 fill-indigo-100" />
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Included</span>
              </div>
              <div className="w-1/4 text-center flex flex-col items-center">
                <CheckCircle2 className="w-6 h-6 text-indigo-600 mb-1 fill-indigo-100" />
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Included</span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center justify-between py-6 border-b border-slate-100">
              <div className="flex items-start gap-4 w-1/2">
                <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 mt-1">
                  <Fingerprint className="w-4 h-4 text-indigo-500" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">Mobile e-sign</h5>
                  <p className="text-xs text-slate-500">Signature capture on any smartphone or tablet.</p>
                </div>
              </div>
              <div className="w-1/4 text-center flex flex-col items-center">
                <CheckCircle2 className="w-6 h-6 text-indigo-600 mb-1 fill-indigo-100" />
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Included</span>
              </div>
              <div className="w-1/4 text-center flex flex-col items-center">
                <CheckCircle2 className="w-6 h-6 text-indigo-600 mb-1 fill-indigo-100" />
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Included</span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center justify-between py-6 border-b border-slate-100">
              <div className="flex items-start gap-4 w-1/2">
                <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 mt-1">
                  <ShieldCheck className="w-4 h-4 text-indigo-500" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">Secure ID verification</h5>
                  <p className="text-xs text-slate-500">Biometric and government-issued ID matching.</p>
                </div>
              </div>
              <div className="w-1/4 text-center flex flex-col items-center">
                <CheckCircle2 className="w-6 h-6 text-indigo-600 mb-1 fill-indigo-100" />
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Included</span>
              </div>
              <div className="w-1/4 text-center flex flex-col items-center">
                <CheckCircle2 className="w-6 h-6 text-indigo-600 mb-1 fill-indigo-100" />
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Included</span>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center justify-between py-6 border-b border-slate-100">
              <div className="flex items-start gap-4 w-1/2">
                <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 mt-1">
                  <RefreshCcw className="w-4 h-4 text-indigo-500" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">Live editing</h5>
                  <p className="text-xs text-slate-500">Real-time collaborative document adjustment.</p>
                </div>
              </div>
              <div className="w-1/4 text-center flex flex-col items-center">
                <div className="w-6 h-0.5 bg-slate-300 mb-2 mt-3"></div>
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Add-on</span>
              </div>
              <div className="w-1/4 text-center flex flex-col items-center">
                <CheckCircle2 className="w-6 h-6 text-indigo-600 mb-1 fill-indigo-100" />
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Included</span>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex items-center justify-between py-6 border-b border-slate-100">
              <div className="flex items-start gap-4 w-1/2">
                <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 mt-1">
                  <Cloud className="w-4 h-4 text-indigo-500" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">SOC2 Compliance</h5>
                  <p className="text-xs text-slate-500">Enterprise-grade security and audit trails.</p>
                </div>
              </div>
              <div className="w-1/4 text-center flex flex-col items-center">
                <CheckCircle2 className="w-6 h-6 text-indigo-600 mb-1 fill-indigo-100" />
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Included</span>
              </div>
              <div className="w-1/4 text-center flex flex-col items-center">
                <CheckCircle2 className="w-6 h-6 text-indigo-600 mb-1 fill-indigo-100" />
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Included</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Banners */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* CTA Banner */}
          <div className="lg:w-2/3 bg-[#3B30C8] rounded-3xl p-12 text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight max-w-lg">
                Ready to modernize your seal?
              </h2>
              <p className="text-indigo-200 mb-10 max-w-md">
                Join 500+ enterprises that trust NotaryFlow for their daily documentation needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://ipixelzen.com/register" className="bg-white text-indigo-900 hover:bg-indigo-50 px-6 py-3.5 rounded-xl font-bold transition-colors text-center inline-block">
                  Get started Today
                </a>
                <Link to="/book-demo" className="bg-indigo-800 hover:bg-indigo-700 text-white border border-indigo-700 px-6 py-3.5 rounded-xl font-bold transition-colors text-center inline-block">
                  Schedule Demo
                </Link>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-30 transform translate-x-1/3 -translate-y-1/3"></div>
          </div>

          {/* Support Banner */}
          <div className="lg:w-1/3 bg-white rounded-3xl p-10 border border-slate-100 shadow-md flex flex-col justify-center items-center text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-6 bg-slate-200 border-4 border-white shadow-lg">
               <img src="https://ui-avatars.com/api/?name=James+D&background=0D8ABC&color=fff" alt="Support" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-bold text-slate-900 mb-3 text-xl">Dedicated Support</h4>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              Our executive concierge team is available 24/7 for Enterprise accounts.
            </p>
            <button className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors flex items-center gap-1 text-sm">
              Speak with an advisor <ChevronRight className="w-4 h-4"/>
            </button>
          </div>
          
        </div>
      </section>

      {/* Unified Ecosystem Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Info Card */}
          <div className="lg:col-span-2 bg-slate-50 rounded-3xl p-10 border border-slate-100 flex flex-col justify-between">
             <div>
                <div className="text-indigo-600 text-[11px] font-bold tracking-widest uppercase mb-6">
                  UNIFIED ECOSYSTEM
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight max-w-md">
                  One platform for every legal touchpoint.
                </h3>
                <p className="text-slate-500 mb-10 max-w-md leading-relaxed">
                  From initial drafting to final seal, maintain a single source of truth for your legal documents.
                </p>
             </div>
             
             {/* Mockup Placeholder */}
             <div className="w-full h-64 bg-[#1E2329] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden relative mt-4">
                 {/* Fake UI Sidebar */}
                 <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-[#161B22] border-r border-slate-700 p-4">
                     <div className="w-16 h-3 bg-slate-700 rounded mb-6"></div>
                     <div className="space-y-3">
                         <div className="w-full h-4 bg-indigo-600/20 rounded"></div>
                         <div className="w-full h-4 bg-slate-800 rounded"></div>
                         <div className="w-full h-4 bg-slate-800 rounded"></div>
                     </div>
                 </div>
                 {/* Fake Main Content */}
                 <div className="absolute left-1/4 right-0 top-0 bottom-0 p-6 flex flex-col gap-4">
                     <div className="w-1/3 h-4 bg-slate-700 rounded"></div>
                     <div className="w-full h-32 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                         <div className="w-12 h-12 rounded bg-slate-700"></div>
                     </div>
                 </div>
             </div>
          </div>

          {/* Side Cards */}
          <div className="flex flex-col gap-8">
             <div className="bg-[#3B30C8] rounded-3xl p-10 text-white flex-1 flex flex-col justify-between shadow-lg">
                <div>
                   <ShieldCheck className="w-8 h-8 text-indigo-300 mb-6" />
                   <h4 className="font-bold text-xl mb-3">Zero-Tax Compliance</h4>
                   <p className="text-indigo-200 text-sm leading-relaxed mb-8">
                     Encrypted archives and real-time audit trails ensure every notarization is globally enforceable.
                   </p>
                </div>
                <div>
                   <div className="text-4xl font-extrabold mb-1">99.9%</div>
                   <div className="text-[10px] text-indigo-300 font-bold uppercase tracking-widest">VALIDATION SUCCESS RATE</div>
                </div>
             </div>
          </div>
          
        </div>
      </section>

      {/* Additional Features Row */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-10">
         <div className="grid md:grid-cols-2 gap-8">
             <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100 flex flex-col justify-between shadow-sm">
                 <div className="mb-8">
                     <h4 className="font-bold text-xl text-slate-900 mb-3">No Per-Seal Fees</h4>
                     <p className="text-slate-500 text-sm leading-relaxed">
                         We believe in transparent pricing. Fixed monthly rates for high-volume accounts.
                     </p>
                 </div>
                 <div className="flex items-end justify-between">
                     <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-colors">
                        Create free sandbox
                     </button>
                     <div className="text-sm font-bold text-slate-600 flex items-center gap-2 cursor-pointer hover:text-slate-900">
                        <Code className="w-4 h-4"/> View Docs
                     </div>
                 </div>
                 
                 <div className="flex gap-8 mt-10 border-t border-slate-200 pt-6">
                    <div>
                        <div className="text-2xl font-extrabold text-slate-900 mb-1">2.4s</div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">AVG. MATCH TIME</div>
                    </div>
                    <div>
                        <div className="text-2xl font-extrabold text-slate-900 mb-1">99.9%</div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">UPTIME SLA</div>
                    </div>
                 </div>
             </div>

             <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm flex items-center gap-8">
                 <div className="w-1/2 h-48 bg-slate-200 rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-slate-800 rounded-xl m-2 border border-slate-700 transform rotate-2"></div>
                    <div className="absolute inset-0 bg-white rounded-xl m-2 border border-slate-200 shadow-md flex items-center justify-center">
                        <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-lg shadow-amber-600/30">SEAL</div>
                    </div>
                 </div>
                 <div className="w-1/2">
                    <h4 className="font-bold text-xl text-slate-900 mb-3">Effortless eSigning</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Send documents to signers anywhere in the world. Our interface is so intuitive, it needs zero training.
                    </p>
                    <button className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors text-sm flex items-center gap-1">
                        Learn more about the signature flow <ArrowRight className="w-3 h-3"/>
                    </button>
                 </div>
             </div>
         </div>
      </section>

    </div>
  );
};

export default PricingPage;
