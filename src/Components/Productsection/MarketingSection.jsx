import React from 'react';
import { Megaphone, Users, TrendingUp, Zap, Target, Activity, CheckCircle2, ShieldCheck, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/hr_dashboard.png';
import analyticsImg from '../../assets/ozencrm_dark_ui.png';
import filterImg from '../../assets/team_management.png';

const MarketingSection = () => {
    return (
        <div className="w-full bg-white font-sans text-slate-900">
            
            {/* Hero Section */}
            <section className="relative w-full pt-16 pb-20 overflow-hidden bg-[#f8fafc]">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-16">
                        
                        <div className="flex-1 w-full relative">
                            <div className="bg-[#0f4a5c] w-full aspect-square rounded-[40px] p-8 md:p-12 flex items-center justify-center relative shadow-2xl">
                                <img src={heroImg} alt="Marketing Dashboard" className="rounded-xl shadow-2xl w-full h-auto object-cover transform translate-x-4 translate-y-4" />
                            </div>
                            
                            {/* Floating card */}
                            <div className="absolute -bottom-8 lg:left-8 -left-4 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 z-20">
                                <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center">
                                    <Activity className="w-6 h-6 text-teal-500" />
                                </div>
                                <div>
                                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Live Conversion</div>
                                    <div className="text-2xl font-black text-slate-900">+24.8%</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 w-full lg:max-w-xl flex flex-col items-start z-10">
                            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold tracking-wide text-[10px] uppercase mb-8 shadow-sm">
                                MARKETING INTELLIGENCE
                            </div>

                            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                                Turn Campaigns Into <span className="text-indigo-600">Qualified Revenue</span>
                            </h1>

                            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg">
                                Attract the right audience, align marketing efforts directly with sales outcomes, and convert engagement into qualified pipeline.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                                <Link to="/free-trial" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-300 text-base shadow-lg shadow-indigo-600/20 text-center">
                                    Start Free Trial
                                </Link>
                                <Link to="/book-demo" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl hover:bg-slate-50 border border-slate-200 transition-all duration-300 text-base text-center">
                                    Book a Demo
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Feature Row */}
            <section className="w-full py-16 bg-[#f8fafc] border-b border-slate-200">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex flex-col gap-4">
                        <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                            <Target className="w-5 h-5 text-indigo-600" />
                        </div>
                        <h4 className="font-bold text-slate-900 text-lg">Attract the right audience, not just more traffic</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">Focus on quality over quantity. Target the specific industries and personas most likely to convert to closed won deals.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                            <Zap className="w-5 h-5 text-indigo-600" />
                        </div>
                        <h4 className="font-bold text-slate-900 text-lg">Convert engagement into qualified leads</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">Automatically grade and route inbound inquiries to the right sales rep the moment they show buying intent.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                            <ShieldCheck className="w-5 h-5 text-indigo-600" />
                        </div>
                        <h4 className="font-bold text-slate-900 text-lg">Align marketing efforts directly with sales outcomes</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">Cross the divide. Measure campaigns by pipeline generated, not just impressions, with native CRM connectivity.</p>
                    </div>
                </div>
            </section>

            {/* The Revenue-First Feature Set */}
            <section className="w-full py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">The Revenue-First Feature Set</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">We give marketing teams the data they need to stop focusing on vanity metrics and start driving true growth.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {/* Row 1 */}
                        <div className="md:col-span-7 bg-[#f8fafc] p-10 rounded-[32px] border border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group">
                            <div className="flex-1">
                                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-6 text-indigo-600">
                                    <Megaphone className="w-6 h-6" />
                                </div>
                                <h4 className="font-bold text-slate-900 text-xl mb-3">Campaign Management</h4>
                                <p className="text-slate-500 text-sm max-w-sm leading-relaxed">Plan, execute, and track omni-channel marketing campaigns from a single unified workspace.</p>
                            </div>
                            <div className="w-32 h-20 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                                <PieChart className="text-slate-300 w-8 h-8" />
                            </div>
                        </div>
                        <div className="md:col-span-5 bg-[#f8fafc] p-10 rounded-[32px] border border-slate-100">
                            <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-6 text-indigo-600">
                                <Users className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-slate-900 text-xl mb-3">Lead Gen & Capture</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">Create beautiful, high-converting landing pages and lead forms without writing a single line of code.</p>
                        </div>

                        {/* Row 2 */}
                        <div className="md:col-span-4 bg-[#f8fafc] p-10 rounded-[32px] border border-slate-100">
                            <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-6 text-indigo-600">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-slate-900 text-lg mb-3">Lead Scoring</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">Automatically grade leads based on behavior and fit, so your sales team knows exactly who to call first.</p>
                        </div>
                        <div className="md:col-span-4 bg-[#f8fafc] p-10 rounded-[32px] border border-slate-100">
                            <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-6 text-indigo-600">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-slate-900 text-lg mb-3">Marketing Automation</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">Build powerful visual workflows to nurture leads, send drip campaigns, and trigger internal alerts.</p>
                        </div>
                        <div className="md:col-span-4 bg-[#f8fafc] p-10 rounded-[32px] border border-slate-100">
                            <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-6 text-indigo-600">
                                <Target className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-slate-900 text-lg mb-3">Audience Segmentation</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">Create highly targeted lists based on firmographics, behavior, and custom behavioral attributes.</p>
                        </div>

                        {/* Row 3 - Large Analytics Card */}
                        <div className="md:col-span-12 bg-indigo-600 rounded-[32px] p-12 flex flex-col md:flex-row items-center justify-between shadow-xl shadow-indigo-600/20 gap-12 mt-4 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                            
                            <div className="flex-1 relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-8 backdrop-blur-md">
                                    <Activity className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="font-bold text-white text-3xl mb-4">Performance Analytics</h4>
                                <p className="text-indigo-100 text-lg max-w-md leading-relaxed">
                                    Pageviews are vanity metrics. Margin is sanity. See exact revenue attribution models directly inside the campaign builder workflow.
                                </p>
                            </div>
                            <div className="flex-1 w-full relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-10">
                                <img src={analyticsImg} alt="Performance Analytics" className="w-full aspect-[4/3] object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Revenue Filter */}
            <section className="w-full py-24 bg-[#f8fafc]">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    <div className="flex-1 w-full max-w-xl">
                        <h3 className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4">The Brutal Truth</h3>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">The Revenue Filter</h2>
                        <p className="text-lg text-slate-500 mb-12 leading-relaxed">
                            Most CRMs just collect data. OzenCRM filters it through a revenue-centric lens, ensuring you aren't wasting time on leads that will never buy.
                        </p>

                        <div className="flex flex-col gap-10">
                            <div className="flex gap-5 items-start">
                                <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center shrink-0">
                                    <CheckCircle2 className="w-6 h-6 text-teal-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg mb-2">Prioritize high-converting leads</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Stop wasting time on bad prospects. Our AI highlights leads that actually match your ideal customer profile.</p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-start">
                                <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center shrink-0">
                                    <CheckCircle2 className="w-6 h-6 text-teal-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg mb-2">Connect campaigns to closed deals</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Full-funnel attribution tracks every marketing dollar spent to revenue generated.</p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-start">
                                <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center shrink-0">
                                    <CheckCircle2 className="w-6 h-6 text-teal-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg mb-2">Stop wasting budget on low-quality traffic</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Automatically pause underperforming campaigns and reallocate budget to what works.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full">
                        <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-slate-200">
                            <img src={filterImg} alt="Revenue Filter" className="w-full aspect-square md:aspect-[4/3] object-cover" />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent p-10 pt-32">
                                <p className="text-white text-lg font-medium italic mb-4 leading-relaxed">"OzenCRM has allowed us to see which exact marketing campaigns are turning into pipeline. It's a game changer."</p>
                                <p className="text-indigo-300 text-sm font-bold tracking-wide">— Sarah J., VP of Growth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-32 bg-white px-6">
                <div className="max-w-5xl mx-auto bg-indigo-600 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden shadow-xl shadow-indigo-600/20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10 tracking-tight leading-tight">
                        Stop Chasing Leads.<br/>Start Generating Revenue.
                    </h2>
                    <p className="text-indigo-100 text-lg mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed">
                        Join thousands of revenue-driven marketing teams that use OzenCRM to scale their impact and drive consistent growth.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                        <Link to="/free-trial" className="w-full sm:w-auto px-10 py-4 bg-white text-indigo-900 font-bold rounded-xl hover:bg-slate-50 transition-all duration-300 text-base shadow-lg hover:-translate-y-1 text-center">
                            Start Free Trial
                        </Link>
                        <Link to="/book-demo" className="w-full sm:w-auto px-10 py-4 bg-indigo-800 text-white font-bold rounded-xl border border-indigo-500 hover:bg-indigo-900 transition-all duration-300 text-base text-center">
                            Book a Demo
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default MarketingSection;
