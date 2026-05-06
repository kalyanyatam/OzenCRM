import React, { useEffect } from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Activity, 
  RefreshCcw, 
  UserCheck, 
  Code,
  CheckCircle2,
  Terminal,
  ArrowRight,
  Puzzle,
  Share2,
  Box
} from 'lucide-react';

const APIPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white font-sans text-slate-900 pb-20">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold tracking-wide mb-6">
              <Code className="w-4 h-4" /> DEVELOPER FIRST
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              OzenCRM API
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Connect your sales and customer data to any external system using the OzenCRM API. Seamlessly sync leads, interactions, and business metrics in minutes.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-16">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-indigo-600/30">
                Get API Key
              </button>
              <button className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-8 py-3.5 rounded-xl font-bold transition-all border border-slate-200">
                Read the Docs
              </button>
            </div>

            <div className="flex gap-12">
              <div>
                <div className="text-2xl font-black text-indigo-900">99.9%</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-2">Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-black text-indigo-900">&lt;45ms</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-2">Latency</div>
              </div>
              <div>
                <div className="text-2xl font-black text-indigo-900">TLS 1.3</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-2">Security</div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative w-full">
            {/* Fake Code Editor Window */}
            <div className="bg-[#1C2128] rounded-2xl shadow-2xl overflow-hidden border border-slate-700/50 w-full relative z-10">
              <div className="flex justify-between items-center px-4 py-3 bg-[#22272E] border-b border-slate-700/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EC6A5F]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#F4BF50]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#61C554]"></div>
                </div>
                <div className="text-xs text-slate-400 font-mono tracking-wider">POST /v1/leads/sync</div>
                <div className="w-12"></div> {/* Spacer for centering */}
              </div>
              <div className="p-6 text-sm font-mono text-[#ADBAC7] overflow-x-auto">
                <pre>
                  <code>
{'{'}<br/>
&nbsp;&nbsp;<span className="text-[#79C0FF]">"action"</span>: <span className="text-[#A5D6FF]">"customer_sync"</span>,<br/>
&nbsp;&nbsp;<span className="text-[#79C0FF]">"payload"</span>: {'{'}<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#79C0FF]">"leads"</span>: [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#79C0FF]">"id"</span>: <span className="text-[#79C0FF]">8921</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#79C0FF]">"email"</span>: <span className="text-[#A5D6FF]">"alex@executive.com"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#79C0FF]">"status"</span>: <span className="text-[#A5D6FF]">"qualified"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#79C0FF]">"value"</span>: <span className="text-[#79C0FF]">45000</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br/>
&nbsp;&nbsp;&nbsp;&nbsp;],<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#79C0FF]">"timestamp"</span>: <span className="text-[#A5D6FF]">"2024-08-12T10:00:00Z"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#79C0FF]">"notarize"</span>: <span className="text-[#FFA657]">true</span><br/>
&nbsp;&nbsp;{'}'}<br/>
{'}'}
                  </code>
                </pre>
              </div>
              <div className="px-4 py-2 bg-[#22272E] border-t border-slate-700/50 text-[10px] text-slate-500 font-mono flex justify-between">
                <span>UTF-8 • JSON</span>
              </div>
            </div>
            
            {/* Floating Element */}
            <div className="absolute -bottom-8 -right-8 bg-white p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-4 z-20 min-w-[280px]">
              <div className="bg-emerald-100 p-2.5 rounded-full">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold text-slate-900">Sync Secured</div>
                <div className="text-xs text-slate-400 font-medium">Aug 12, 10:00:02</div>
                <div className="mt-3 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[10px] font-bold text-emerald-600 tracking-wider">SUCCESS</span>
                  <span className="text-[10px] text-slate-400 font-medium">2ms</span>
                </div>
              </div>
            </div>
            
            {/* Left Top Floating Icon */}
            <div className="absolute -top-6 -left-6 bg-slate-900 w-16 h-16 rounded-2xl shadow-xl flex items-center justify-center border border-slate-800 z-20">
                <div className="text-blue-400 font-bold text-sm tracking-wider">API</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Feature Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all border-b-[6px] border-b-indigo-500">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-6">
              <Zap className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Real-time Webhooks</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Get instant notifications whenever a deal is closed, a lead is captured, or a team member leaves a comment.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all border-b-[6px] border-b-teal-500">
            <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-6">
              <ShieldCheck className="w-5 h-5 text-teal-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">OAuth 2.0 Security</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Enterprise-grade security protocols ensuring that your customer data remains private and protected at all times.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all border-b-[6px] border-b-purple-500">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center mb-6">
              <Activity className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Rate Limiting</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Generous rate limits designed for large-scale enterprise synchronizations and high-frequency data operations.
            </p>
          </div>
        </div>
      </section>

      {/* Connected Ecosystem */}
      <section className="w-full bg-slate-50 py-24 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-800 text-[10px] font-bold mb-6 tracking-widest uppercase shadow-sm">
              CONNECTED ECOSYSTEM
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              Request a notarization inside Salesforce, HubSpot, Pipedrive and more
            </h2>
            <p className="text-lg text-slate-600">
              Bridge the gap between your CRM and legal compliance. Secure, legally-binding notarizations triggered directly from the tools your team already uses every day.
            </p>
          </div>

          {/* Integration Layout */}
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
            
            {/* Left side 3 boxes */}
            <div className="lg:w-5/12 flex flex-col gap-6">
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                      <RefreshCcw className="w-6 h-6 text-indigo-600"/>
                  </div>
                  <div>
                      <h4 className="font-bold text-slate-900 mb-1">Bi-directional Sync</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">Automatically update deal status and attach signed documents back to your CRM records.</p>
                  </div>
               </div>

               <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-6 h-6 text-blue-600"/>
                  </div>
                  <div>
                      <h4 className="font-bold text-slate-900 mb-1">Identity Verification</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">Enterprise-grade KBA and ID proofing integrated directly into the signing workflow.</p>
                  </div>
               </div>

               <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
                      <Code className="w-6 h-6 text-purple-600"/>
                  </div>
                  <div>
                      <h4 className="font-bold text-slate-900 mb-1">Developer API</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">Custom-built integrations for your specific stack with our robust GraphQL API.</p>
                  </div>
               </div>
            </div>

            {/* Right side Diagram Mockup */}
            <div className="lg:w-7/12 relative h-[450px] w-full flex items-center justify-center bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] rounded-3xl">
                
                <div className="absolute top-10 right-40 bg-white p-5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-4 z-10 animate-pulse" style={{animationDuration: '4s'}}>
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500"><Box className="w-5 h-5"/></div>
                    <div>
                        <div className="font-bold text-sm text-slate-900">Salesforce</div>
                        <div className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider">ACTIVE SYNC</div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 ml-4"/>
                </div>

                <div className="absolute top-32 left-10 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4 z-10 opacity-70 blur-[1px]">
                    <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-500"><Share2 className="w-4 h-4"/></div>
                    <div className="w-16 h-2 bg-slate-100 rounded-full"></div>
                </div>

                {/* Central Ozen API Block */}
                <div className="relative z-30 bg-indigo-600 text-white w-64 p-8 rounded-3xl shadow-[0_20px_50px_rgba(79,70,229,0.4)] flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform duration-500">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-md">
                        <Share2 className="w-8 h-8 text-white"/>
                    </div>
                    <h3 className="font-bold text-xl mb-1">Ozen API</h3>
                    <p className="text-indigo-200 text-xs mb-6">The Command Center</p>
                    <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden mb-2">
                        <div className="bg-emerald-400 h-full w-[70%]"></div>
                    </div>
                    <span className="text-[10px] text-indigo-200">12 Active Integrations</span>
                </div>

                <div className="absolute bottom-10 right-10 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4 z-10">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">P</div>
                    <div>
                        <div className="font-bold text-sm text-slate-900">PayPal</div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">LINK ACCOUNT</div>
                    </div>
                </div>

                <div className="absolute bottom-20 left-20 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 z-10">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><Activity className="w-3 h-3"/></div>
                    <div className="w-12 h-2 bg-slate-100 rounded-full"></div>
                </div>

            </div>

          </div>
        </div>
      </section>

      {/* Explore Integrations Banner */}
      <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="bg-white rounded-2xl border-2 border-indigo-600 p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg shadow-indigo-100">
              <div className="flex items-center gap-6">
                  <div className="flex -space-x-4">
                      <div className="w-12 h-12 rounded-full border-2 border-white bg-indigo-50 flex items-center justify-center"><Box className="w-5 h-5 text-indigo-400"/></div>
                      <div className="w-12 h-12 rounded-full border-2 border-white bg-teal-50 flex items-center justify-center"><Puzzle className="w-5 h-5 text-teal-400"/></div>
                      <div className="w-12 h-12 rounded-full border-2 border-white bg-purple-50 flex items-center justify-center"><Share2 className="w-5 h-5 text-purple-400"/></div>
                  </div>
                  <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">Explore 50+ more integrations</h3>
                      <p className="text-slate-500 text-sm">Find the perfect workflows for your specific business needs.</p>
                  </div>
              </div>
              <button className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-3 rounded-xl font-bold transition-colors whitespace-nowrap shadow-md">
                  Browse Marketplace →
              </button>
          </div>
      </section>

      {/* Developer Sandbox */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-100">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-bold tracking-widest uppercase mb-6">
              DEVELOPER SANDBOX
            </div>
            <h2 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Test for free
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Get familiar with the notarization process, integrate the software into your applications, and ensure compatibility with existing systems before making a purchase.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                Full API access in sandbox
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                No credit card required
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                24/7 developer support
              </li>
            </ul>

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-indigo-200">
              Create free sandbox
            </button>
            <p className="text-xs text-slate-400 font-medium italic mt-4 ml-2">No time limit. 100 free requests included.</p>
          </div>

          <div className="lg:w-1/2 w-full relative">
            <div className="bg-[#2D333B] rounded-2xl shadow-2xl overflow-hidden border border-[#444C56]">
              <div className="flex items-center px-4 py-3 bg-[#22272E] border-b border-[#444C56]">
                 <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EC6A5F]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#F4BF50]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#61C554]"></div>
                </div>
              </div>
              <div className="p-8 text-sm font-mono text-[#ADBAC7] overflow-x-auto">
                <pre>
                  <code>
<span className="text-[#85E89D]">POST</span> /v1/notary/sandbox<br/><br/>
{'{'}<br/>
&nbsp;&nbsp;<span className="text-[#79C0FF]">"document_id"</span>: <span className="text-[#A5D6FF]">"DOC_0892_SANDBOX"</span>,<br/>
&nbsp;&nbsp;<span className="text-[#79C0FF]">"client_ref"</span>: <span className="text-[#A5D6FF]">"legal_test_01"</span>,<br/>
&nbsp;&nbsp;<span className="text-[#79C0FF]">"parameters"</span>: {'{'}<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#79C0FF]">"priority"</span>: <span className="text-[#A5D6FF]">"high"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#79C0FF]">"notary_type"</span>: <span className="text-[#A5D6FF]">"remote_online"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#79C0FF]">"webhook"</span>: <span className="text-[#A5D6FF]">"https://api.yourdomain.com/listen"</span><br/>
&nbsp;&nbsp;{'}'}<br/>
{'}'}
                  </code>
                </pre>
              </div>
            </div>

            {/* Top Right Floating */}
            <div className="absolute -top-6 -right-6 bg-white p-3 px-5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="bg-emerald-100 p-1.5 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">RESPONSE</div>
                <div className="text-sm font-bold text-slate-900">200 Success</div>
              </div>
            </div>

            {/* Bottom Left Floating Latency Chart */}
            <div className="absolute -bottom-10 -left-10 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 w-64">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">LATENCY METRICS</span>
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded-md">LIVE</span>
                </div>
                <div className="flex items-end gap-2 h-16 mb-2">
                    <div className="w-1/5 bg-slate-100 rounded-sm h-[40%]"></div>
                    <div className="w-1/5 bg-slate-100 rounded-sm h-[60%]"></div>
                    <div className="w-1/5 bg-indigo-500 rounded-sm h-[90%]"></div>
                    <div className="w-1/5 bg-slate-100 rounded-sm h-[50%]"></div>
                    <div className="w-1/5 bg-slate-100 rounded-sm h-[30%]"></div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500 font-medium">Avg: 142ms</span>
                    <span className="text-xs text-emerald-500 font-medium">Status: Optimal</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Create Notarization Requests */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-10 border-t border-slate-100">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm relative">
                <div className="flex items-center justify-between mb-8">
                    <div className="bg-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg"><Share2 className="w-6 h-6"/></div>
                    <div className="flex-1 border-b-2 border-dashed border-indigo-200 mx-4 relative">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-indigo-400">
                            <Zap className="w-4 h-4"/>
                        </div>
                    </div>
                    <div className="bg-teal-100 w-12 h-12 rounded-xl flex items-center justify-center text-teal-600"><ShieldCheck className="w-6 h-6"/></div>
                </div>
                <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                    <span>OZENCRM</span>
                    <span>LIVE NOTARY</span>
                </div>

                <div className="bg-[#1C2128] rounded-xl shadow-xl overflow-hidden border border-slate-700/50 mt-8">
                    <div className="flex justify-between items-center px-4 py-2 bg-[#22272E] border-b border-slate-700/50">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#EC6A5F]"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-[#F4BF50]"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-[#61C554]"></div>
                        </div>
                        <div className="text-[10px] text-slate-500 font-mono">POST /v1/notarizations</div>
                    </div>
                    <div className="p-6 text-xs font-mono text-[#ADBAC7]">
                        <pre>
                            <code>
<span className="text-[#FF7B72]">const</span> response = <span className="text-[#FF7B72]">await</span> ozen.notary.create({'{'}<br/>
&nbsp;&nbsp;<span className="text-[#79C0FF]">"document_type"</span>: <span className="text-[#A5D6FF]">"Real Estate Deed"</span>,<br/>
&nbsp;&nbsp;<span className="text-[#79C0FF]">"signer"</span>: {'{'}<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#79C0FF]">"email"</span>: <span className="text-[#A5D6FF]">"alex.smith@example.com"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#79C0FF]">"identity_method"</span>: <span className="text-[#A5D6FF]">"KBA+ID_Verification"</span><br/>
&nbsp;&nbsp;{'}'},<br/>
&nbsp;&nbsp;<span className="text-[#79C0FF]">"webhook_url"</span>: <span className="text-[#A5D6FF]">"https://api.yourcrm.com/hooks"</span><br/>
{'}'});
                            </code>
                        </pre>
                    </div>
                </div>
                
                {/* Floating Status */}
                <div className="absolute bottom-6 left-2 bg-white/90 backdrop-blur-md p-3 px-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3">
                    <div className="bg-emerald-100 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-emerald-600"/></div>
                    <div>
                        <div className="text-xs font-bold text-slate-900">Request Initiated</div>
                        <div className="text-[10px] text-slate-500">Notary matching in progress...</div>
                    </div>
                </div>
            </div>

            <div>
               <div className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-[10px] font-bold tracking-widest uppercase mb-4">
                  DEVELOPER API
               </div>
               <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                 Create notarization <span className="text-indigo-600 block">requests</span>
               </h2>
               <p className="text-lg text-slate-600">
                 Use this endpoint to connect with a commissioned notary, ready to complete online notarizations for your signers nationwide and within minutes.
               </p>
            </div>
          </div>
      </section>

      {/* Get Notarization Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-slate-100">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 md:order-1">
               <div className="inline-block px-3 py-1 rounded-full border border-slate-200 text-slate-600 text-[10px] font-bold tracking-widest uppercase mb-4">
                  END-TO-END NOTARIZATION
               </div>
               <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                 Get notarization request details
               </h2>
               <p className="text-lg text-slate-600 mb-8">
                 Retrieve a comprehensive payload of session history, participant data, and document status for any active or archived request.
               </p>

               <ul className="space-y-6">
                 <li className="flex items-start gap-4">
                   <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-slate-900" /></div>
                   <div>
                     <h4 className="font-bold text-slate-900">Real-time Status Tracking</h4>
                     <p className="text-sm text-slate-500">Monitor signature progress and witness verification timestamps.</p>
                   </div>
                 </li>
                 <li className="flex items-start gap-4">
                   <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-slate-900" /></div>
                   <div>
                     <h4 className="font-bold text-slate-900">Audit Trail Integrity</h4>
                     <p className="text-sm text-slate-500">Access cryptographically signed logs for every document interaction.</p>
                   </div>
                 </li>
                 <li className="flex items-start gap-4">
                   <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-slate-900" /></div>
                   <div>
                     <h4 className="font-bold text-slate-900">Multi-party Metadata</h4>
                     <p className="text-sm text-slate-500">Details for all signers, witnesses, and legal representatives involved.</p>
                   </div>
                 </li>
               </ul>
            </div>

            <div className="order-1 md:order-2 bg-[#2D333B] rounded-2xl shadow-2xl overflow-hidden border border-[#444C56]">
                <div className="flex items-center justify-between px-4 py-3 bg-[#22272E] border-b border-[#444C56]">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#EC6A5F]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#F4BF50]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#61C554]"></div>
                    </div>
                    <div className="text-xs text-slate-400 font-mono">notarization_v1.json</div>
                    <button className="text-xs text-slate-400 hover:text-white border border-slate-600 px-3 py-1 rounded-md transition-colors flex items-center gap-1">
                        <Share2 className="w-3 h-3" /> Copy
                    </button>
                </div>
                <div className="p-6 text-xs font-mono text-[#ADBAC7] overflow-x-auto">
                    <pre>
                        <code>
{'{'}<br/>
&nbsp;&nbsp;<span className="text-[#79C0FF]">"request_id"</span>: <span className="text-[#A5D6FF]">"not_8x72k9qP"</span>,<br/>
&nbsp;&nbsp;<span className="text-[#79C0FF]">"status"</span>: <span className="text-[#A5D6FF]">"completed"</span>,<br/>
&nbsp;&nbsp;<span className="text-[#79C0FF]">"document_type"</span>: <span className="text-[#A5D6FF]">"Warranty Deed"</span>,<br/>
&nbsp;&nbsp;<span className="text-[#79C0FF]">"participants"</span>: [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;{'{'}<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#79C0FF]">"role"</span>: <span className="text-[#A5D6FF]">"signer"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#79C0FF]">"name"</span>: <span className="text-[#A5D6FF]">"Eleanor Vance"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#79C0FF]">"verified"</span>: <span className="text-[#FFA657]">true</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br/>
&nbsp;&nbsp;],<br/>
&nbsp;&nbsp;<span className="text-[#79C0FF]">"timestamps"</span>: {'{'}<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#79C0FF]">"created_at"</span>: <span className="text-[#A5D6FF]">"2024-05-12T10:00:00Z"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#79C0FF]">"notarized_at"</span>: <span className="text-[#A5D6FF]">"2024-05-12T10:15:42Z"</span><br/>
&nbsp;&nbsp;{'}'},<br/>
&nbsp;&nbsp;<span className="text-[#79C0FF]">"audit_hash"</span>: <span className="text-[#A5D6FF]">"sha256:8f4...e92"</span><br/>
{'}'}
                        </code>
                    </pre>
                </div>
            </div>

          </div>
      </section>

    </div>
  );
};

export default APIPage;
