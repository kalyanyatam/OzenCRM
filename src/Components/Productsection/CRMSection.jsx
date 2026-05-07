import React from 'react';
import { Target, BarChart3, MapPin, Activity, CheckCircle2, Users, Calendar, Zap, PieChart, TrendingUp, Presentation, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import dashboardImg from '../../assets/ozencrm_dashboard.png';

const CRMSection = () => {
    return (
        <div className="w-full bg-white font-sans text-slate-900">
            
            {/* Hero Section */}
            <section className="relative w-full pt-20 pb-24 overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
                        
                        <div className="flex-1 flex flex-col items-start z-10 w-full lg:max-w-xl">
                            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-cyan-100 text-teal-800 font-bold tracking-wide text-[11px] uppercase mb-8 shadow-sm">
                                CRM EXCELLENCE
                            </div>

                            <h1 className="text-5xl lg:text-[64px] font-bold leading-[1.05] tracking-tight text-slate-900 mb-6">
                                Turn Every Interaction Into <span className="text-indigo-600">Revenue</span>
                            </h1>

                            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg">
                                Manage leads, track deals, and close faster with a CRM built to give you complete visibility and control over your sales pipeline.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                                <a href="https://ipixelzen.com/register" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-300 text-base shadow-lg shadow-indigo-600/20 text-center">
                                    Start Free Trial
                                </a>
                                <Link to="/book-demo" className="w-full sm:w-auto px-8 py-4 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-all duration-300 text-base text-center">
                                    Book a Demo
                                </Link>
                            </div>
                        </div>

                        <div className="flex-1 w-full relative">
                            <div className="relative rounded-3xl bg-slate-900 shadow-2xl overflow-hidden border border-slate-800 transform lg:translate-x-8">
                                <img
                                    src={dashboardImg}
                                    alt="Ozen CRM Dashboard"
                                    className="w-full h-auto object-cover opacity-90"
                                />
                            </div>

                            <div className="absolute -bottom-8 lg:left-0 -left-4 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 z-20">
                                <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center">
                                    <Activity className="w-6 h-6 text-teal-500" />
                                </div>
                                <div>
                                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Live Conversion</div>
                                    <div className="text-2xl font-black text-slate-900">+24.8%</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Value Prop Section */}
            <section className="w-full py-24 bg-[#f8fafc]">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-24">
                        
                        <div className="flex-1 max-w-xl">
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 leading-tight tracking-tight">
                                Most CRMs store data.<br/>
                                <span className="text-indigo-600">OzenCRM helps you convert it into revenue.</span>
                            </h2>
                            
                            <div className="flex flex-col gap-5">
                                {[
                                    "Capture, organize, and nurture leads effortlessly",
                                    "Track every deal with full pipeline visibility",
                                    "Make smarter decisions with real-time insights"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                                            <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
                                        </div>
                                        <p className="text-slate-600 font-medium">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex-1 w-full max-w-lg">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-center aspect-[4/3]">
                                    <TrendingUp className="w-6 h-6 text-indigo-600 mb-4" />
                                    <h4 className="font-bold text-slate-900 text-lg">Growth Index</h4>
                                    <p className="text-slate-400 text-xs mt-1">Real-time performance metrics</p>
                                </div>
                                <div className="bg-[#a7f3d0] p-8 rounded-3xl shadow-sm flex flex-col justify-center aspect-[4/3]">
                                    <Lightbulb className="w-6 h-6 text-teal-800 mb-4" />
                                    <h4 className="font-bold text-teal-900 text-lg">AI Lead Scoring</h4>
                                    <p className="text-teal-700 text-xs mt-1">Priority matching</p>
                                </div>
                                <div className="bg-indigo-600 p-8 rounded-3xl shadow-sm flex flex-col justify-center aspect-[4/3]">
                                    <Target className="w-6 h-6 text-white mb-4" />
                                    <h4 className="font-bold text-white text-lg">Pipeline</h4>
                                    <p className="text-indigo-200 text-xs mt-1">Automated stages</p>
                                </div>
                                <div className="bg-[#e2e8f0] p-8 rounded-3xl shadow-sm flex flex-col justify-center aspect-[4/3]">
                                    <MapPin className="w-6 h-6 text-slate-700 mb-4" />
                                    <h4 className="font-bold text-slate-900 text-lg">Geo-Tracking</h4>
                                    <p className="text-slate-500 text-xs mt-1">Territory management</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="w-full py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">Precision Tools for Modern Sales</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">Engineered to remove friction at every stage of the customer lifecycle.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {[
                            { icon: <Target />, title: "Lead Management", desc: "Capture leads from multiple sources directly into your pipeline. No more missed follow-ups or lost opportunities." },
                            { icon: <Presentation />, title: "Sales Pipeline Visualization", desc: "See where every deal stands in real-time. Identify bottlenecks instantly and move deals forward with precision." },
                            { icon: <Users />, title: "Contact & Account Management", desc: "All customer data in one place. Access communication history, documents, and key relationships in a single view." },
                            { icon: <Calendar />, title: "Task & Activity Tracking", desc: "Never miss a call or meeting. OzenCRM syncs with your calendar and reminds you of critical next steps." },
                            { icon: <Zap />, title: "Automation & Workflows", desc: "Automate repetitive tasks like data entry and email follow-ups, allowing your team to focus on actual selling." },
                            { icon: <BarChart3 />, title: "Reports & Insights", desc: "Track performance and forecast revenue with high-fidelity dashboards. Know exactly what's working and what's not." }
                        ].map((feat, i) => (
                            <div key={i} className="flex flex-col group">
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {React.cloneElement(feat.icon, { className: "w-6 h-6" })}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Decision Making Engine */}
            <section className="w-full py-24 bg-[#f8fafc]">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        
                        <div className="flex-1 w-full grid grid-cols-2 gap-6">
                            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 flex flex-col justify-between aspect-[4/5] hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-50 self-end">
                                    <TrendingUp className="w-5 h-5 text-indigo-400" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">Predict Closure</h4>
                                    <p className="text-slate-500 text-xs">Strong win signals with active deal probability.</p>
                                </div>
                            </div>
                            <div className="bg-indigo-700 rounded-[32px] p-8 shadow-xl flex flex-col justify-between aspect-[4/5] hover:-translate-y-2 transition-transform duration-300 transform translate-y-8">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 self-end">
                                    <Target className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Drive Revenue</h4>
                                    <p className="text-indigo-200 text-xs">Identify your most profitable channels instantly.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 max-w-xl lg:pl-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                                Your CRM =<br/>Decision-Making Engine.
                            </h2>
                            <p className="text-lg text-slate-500 mb-12">
                                OzenCRM goes beyond logging events. We surface the truth about your business so you can act with confidence.
                            </p>

                            <div className="flex flex-col gap-8">
                                {[
                                    { icon: <Target />, title: "Know which leads are worth your time", desc: "Our proprietary AI scoring prioritizes high-intent buyers." },
                                    { icon: <PieChart />, title: "Predict deal closures instead of guessing", desc: "Historical data analysis provides accurate revenue forecasting." },
                                    { icon: <Activity />, title: "Identify what's actually driving revenue", desc: "Deep attribute insights for every dollar closed." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5">
                                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                                            {React.cloneElement(item.icon, { className: "w-5 h-5 text-indigo-600" })}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-slate-500 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="w-full py-32 bg-white text-center px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        Stop Managing Data.<br/>Start Closing Deals.
                    </h2>
                    <p className="text-lg text-slate-500 mb-10">
                        Join 50,000+ high-growth companies that use OzenCRM to scale their revenue operations.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="https://ipixelzen.com/register" className="w-full sm:w-auto px-8 py-4 bg-indigo-700 text-white font-bold rounded-xl hover:bg-indigo-800 transition-all duration-300 text-base shadow-lg shadow-indigo-700/20 text-center">
                            Start Free Trial
                        </a>
                        <Link to="/book-demo" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-bold rounded-xl hover:bg-slate-50 border border-slate-200 transition-all duration-300 text-base text-center">
                            Book a Demo
                        </Link>
                    </div>
                    <p className="mt-6 text-xs text-slate-400 font-medium">No credit card required. 14-day free trial. Cancel anytime.</p>
                </div>
            </section>

        </div>
    );
};

export default CRMSection;
