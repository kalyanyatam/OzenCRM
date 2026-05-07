import React from 'react';
import { Share2, Target, CreditCard, Sliders, BarChart2, PieChart, Activity, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import dashboardImg from '../../assets/ozencrm_dark_ui.png';

const CampaignsSection = () => {
    return (
        <div className="w-full bg-white font-sans text-slate-900">
            
            {/* Hero Section */}
            <section className="relative w-full pt-16 pb-20 overflow-hidden bg-slate-50">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                        
                        <div className="flex-1 lg:max-w-xl flex flex-col items-start z-10">
                            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 font-bold tracking-wide text-[10px] uppercase mb-8 shadow-sm">
                                CAMPAIGN INTELLIGENCE
                            </div>
                            
                            <h1 className="text-5xl lg:text-[68px] font-bold tracking-tight text-slate-900 mb-6 leading-[1.05]">
                                Run Campaigns With <span className="text-indigo-600 block">Total Control</span> — Not Guesswork
                            </h1>
                            
                            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg">
                                Plan, execute, and track every campaign with precision — and know exactly how it impacts your leads, pipeline, and revenue.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                                <Link to="/book-demo" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-300 text-base shadow-lg shadow-indigo-600/20 text-center">
                                    Book a Demo
                                </Link>
                                <a href="https://ipixelzen.com/register" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl hover:bg-slate-50 border border-slate-200 transition-all duration-300 text-base text-center">
                                    Start Free Trial
                                </a>
                            </div>
                        </div>
                        
                        <div className="flex-1 w-full relative perspective-1000">
                            <div className="rounded-[40px] p-2 bg-white shadow-2xl border border-slate-100 relative transform lg:-rotate-1">
                                <img src={dashboardImg} alt="Campaign Dashboard" className="w-full h-auto rounded-[32px] object-cover" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Strategic Visibility Section */}
            <section className="w-full py-24 bg-[#f8fafc]">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <div className="text-indigo-600 font-bold text-xs tracking-widest uppercase mb-4">Strategic Visibility</div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Stop Wasting Budget.<br/>Start Scaling What Works.</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-100 flex flex-col items-start hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center mb-8 text-teal-600">
                                <MapPin className="w-6 h-6"/>
                            </div>
                            <h4 className="font-bold text-slate-900 text-xl mb-3">Know Source Origins</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">No more "direct traffic" black holes. Trace every lead back to the specific creative, link, or campaign that triggered it.</p>
                        </div>
                        
                        <div className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-100 flex flex-col items-start hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8 text-indigo-600">
                                <Activity className="w-6 h-6"/>
                            </div>
                            <h4 className="font-bold text-slate-900 text-xl mb-3">Real-Time Performance</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">Live streaming data feeds allow you to kill underperforming ads and shift budget to winners before the day ends.</p>
                        </div>
                        
                        <div className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-100 flex flex-col items-start hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center mb-8 text-purple-600">
                                <PieChart className="w-6 h-6"/>
                            </div>
                            <h4 className="font-bold text-slate-900 text-xl mb-3">Actual ROI Metrics</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">Go beyond clicks. Connect marketing spend directly to closed-won revenue through deep CRM integration.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Execution Engine Section */}
            <section className="w-full py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
                        <div>
                            <div className="text-indigo-600 font-bold text-xs tracking-widest uppercase mb-4">The Platform</div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">The Execution Engine</h2>
                        </div>
                        <p className="text-slate-500 max-w-lg lg:text-right leading-relaxed">
                            Comprehensive tools designed to take your campaign strategy from conceptual planning to high-velocity execution.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: <Share2 />, title: "Multi-Channel Execution", desc: "Sync email, SMS, and digital ads into a single cohesive narrative across every touchpoint." },
                            { icon: <Target />, title: "End-to-End Tracking", desc: "Follow the entire journey from the first impression to the final closed-won signature." },
                            { icon: <PieChart />, title: "Revenue Attribution", desc: "Assign precise revenue weight to every interaction using first, last, or linear models." },
                            { icon: <CreditCard />, title: "Budget & Spend Control", desc: "Automated rules to cap spend on under-performing segments and maximize your CAC efficiency." },
                            { icon: <Sliders />, title: "A/B Testing & Optimization", desc: "Deploy variations simultaneously. Let our AI engine automatically scale the winning version." },
                            { icon: <BarChart2 />, title: "Live Performance Dashboard", desc: "Dynamic visuals that tell the real story of your campaign health in seconds, not hours." }
                        ].map((f, i) => (
                            <div key={i} className="bg-white p-10 rounded-[32px] border border-slate-100 hover:shadow-lg hover:border-indigo-100 transition-all duration-300">
                                <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 mb-8">
                                    {React.cloneElement(f.icon, { className: "w-6 h-6" })}
                                </div>
                                <h4 className="font-bold text-slate-900 text-lg mb-3">{f.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Activity vs Business Impact Section */}
            <section className="w-full py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    
                    <div className="flex-1 w-full">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 tracking-tight">
                            Activity <span className="text-slate-400 font-medium">vs.</span> <span className="text-indigo-600 italic">Business Impact</span>
                        </h2>
                        
                        <div className="flex flex-col gap-10">
                            {[
                                { title: "Not Just Clicks", desc: "We track actual pipeline revenue, ensuring your marketing efforts are generating profit, not just noise." },
                                { title: "Not Just Impressions", desc: "Reach is vanity. Conversion is sanity. We focus the interface on the actions that build your business." },
                                { title: "Not Just Reports", desc: "Static PDFs are dead. Get actionable insights that tell you exactly what to change in your strategy tomorrow." }
                            ].map((m, i) => (
                                <div key={i} className="flex items-start gap-5">
                                    <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center shrink-0 mt-1 text-rose-500">
                                        <ChevronRight className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg mb-2">{m.title}</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="flex-1 w-full">
                        <div className="bg-slate-50 rounded-[40px] p-12 lg:p-16 border border-slate-100 relative">
                            <div className="text-indigo-600 font-bold text-[10px] tracking-widest uppercase mb-8">The Brutal Truth</div>
                            <p className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight italic mb-10">
                                "Every Campaign Should Justify Its Cost. If you can't measure it, you shouldn't be running it."
                            </p>
                            <div className="h-px w-full bg-slate-200 mb-8"></div>
                            <p className="text-slate-500 text-sm font-medium">100% of high-growth CMOs prioritize ROI attribution over volume.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-32 bg-white px-6">
                <div className="max-w-5xl mx-auto bg-indigo-700 rounded-[40px] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-indigo-600/20">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/50 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/50 rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2"></div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 relative z-10 tracking-tight">
                        Stop Running Campaigns Blind.
                    </h2>
                    <p className="text-indigo-200 text-lg mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed">
                        Join 1,200+ marketing teams that use OzenCRM to turn their ad spend into predictable revenue machines.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                        <button className="w-full sm:w-auto px-10 py-4 bg-white text-indigo-900 font-bold rounded-xl hover:bg-slate-50 transition-all duration-300 text-base shadow-lg hover:-translate-y-1">
                            Get Started Now
                        </button>
                        <button className="w-full sm:w-auto px-10 py-4 bg-indigo-600 text-white font-bold rounded-xl border border-indigo-500 hover:bg-indigo-500 transition-all duration-300 text-base">
                            Talk to an Expert
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default CampaignsSection;
