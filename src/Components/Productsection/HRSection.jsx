import React from 'react';
import { AlignLeft, Scissors, Activity, Share2, Component } from 'lucide-react';
import { Link } from 'react-router-dom';
import hrdash from '../../assets/hr.png';
import hrfloat from '../../assets/hr float.png';
import teamManagementImg from '../../assets/teamManagement.png'

const HRSection = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative w-full pt-16 pb-20 overflow-hidden bg-white">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-50/50 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/4"></div>

                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                        <div className="flex-1 flex flex-col items-start z-10 w-full lg:max-w-xl">
                            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-600 font-bold tracking-wide text-xs uppercase mb-8 shadow-sm">
                                OZEN HR IS NOW AVAILABLE
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-slate-900 mb-6">
                                Build Strong Teams. <span className="text-indigo-600 block mt-2">Drive Stronger Customer Relationships.</span>
                            </h1>

                            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                                Your customers are only as good as your people. Manage hiring, performance, payroll, and employee engagement — all inside the powerful Ozen platform.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                                <Link to="/book-demo" className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 hover:shadow-lg hover:scale-105 transition-all duration-300 text-base text-center">
                                    Book a Demo
                                </Link>
                                <Link to="/free-trial" className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 font-medium rounded-xl hover:bg-slate-50 hover:shadow-md transition-all duration-300 text-base border border-slate-200 text-center">
                                    Start Free Trial
                                </Link>
                            </div>
                        </div>

                        <div className="flex-1 w-full relative flex justify-center">
                            <div className="relative w-full max-w-[560px] rounded-3xl bg-white shadow-2xl p-2 border border-slate-100 z-10 transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src={hrdash}
                                    alt="Ozen HR Dashboard"
                                    className="w-full h-auto rounded-2xl object-contain"
                                />
                            </div>

                            <div className="absolute -bottom-8 -left-2 lg:-left-8 z-20 w-[180px] sm:w-[220px] lg:w-[250px]">
                                <img
                                    src={hrfloat}
                                    alt="Retention Insight"
                                    className="w-full h-auto drop-shadow-2xl animate-bounce"
                                    style={{ animationDuration: "3s" }}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Value Prop */}
            <section className="w-full py-20 bg-[#f8fafc]">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-24">

                        <div className="flex-1 max-w-xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                                Stop treating HR as back-office admin.
                            </h2>
                            <p className="text-lg text-slate-500 leading-relaxed">
                                With Ozen HR, you aren't just managing people—you're driving <span className="text-indigo-600 font-semibold cursor-pointer underline underline-offset-4 decoration-indigo-200 hover:decoration-indigo-600 transition-colors">measurable growth metrics</span>. We bridge the gap between people operations and revenue operations.
                            </p>
                        </div>

                        <div className="flex-1 flex flex-col gap-8 w-full">

                            <div className="flex items-start gap-5 group">
                                <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <AlignLeft className="w-5 h-5 text-indigo-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Drive Outcomes</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Connect individual goals to company-wide OKRs. Seamlessly connect revenue targets.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <Scissors className="w-5 h-5 text-indigo-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Eliminate Silos</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Tired of multiple disconnected tools? Bring payroll, time off, and performance all under one roof.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="w-full py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">

                    <div className="text-center mb-16">
                        <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-3">Ozen HR Platform</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Precision Intelligence for Every Stage</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">

                        <div className="md:col-span-7 bg-[#f8fafc] rounded-3xl p-10 flex flex-col justify-between border border-slate-100 overflow-hidden relative group">
                            <div className="relative z-10">
                                <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center mb-6">
                                    <span className="text-indigo-600 font-bold text-lg">✦</span>
                                </div>
                                <h4 className="text-2xl font-bold text-slate-900 mb-2">Smart Employee Management</h4>
                                <p className="text-slate-500 max-w-sm mb-8">One platform for your entire workforce. Track directory, performance, and equipment automatically.</p>
                            </div>
                            <div className="relative w-full h-[280px] rounded-2xl overflow-hidden shadow-2xl group-hover:-translate-y-2 transition-transform duration-500 mt-auto">
                                <img src={teamManagementImg} alt="Team Management Interface" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        <div className="md:col-span-5 bg-[#f8fafc] rounded-3xl p-10 flex flex-col border border-slate-100 relative group">
                            <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center mb-6">
                                <span className="text-indigo-600 font-bold text-lg">◴</span>
                            </div>
                            <h4 className="text-2xl font-bold text-slate-900 mb-2">Attendance & Leave Automation</h4>
                            <p className="text-slate-500 mb-12">Custom policies, multi-tier approvals, and automatic sync with Slack and calendars.</p>

                            <div className="mt-auto bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm font-bold text-slate-900">Total PTO Balance</span>
                                    <span className="text-xs font-semibold px-2 py-1 bg-emerald-50 text-emerald-600 rounded">APPROVED</span>
                                </div>
                                <div className="text-3xl font-black text-indigo-600">120h <span className="text-sm font-medium text-slate-400">/ 160h</span></div>
                            </div>
                        </div>

                        <div className="md:col-span-4 bg-[#f8fafc] rounded-3xl p-8 border border-slate-100 flex flex-col justify-between">
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">Payroll Simplified</h4>
                                <p className="text-slate-500 text-sm">Automated sync with accounting. No more CSV wrestling and manual data entry.</p>
                            </div>
                            <div className="mt-8">
                                <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-indigo-600 w-[75%] rounded-full"></div>
                                </div>
                                <div className="flex justify-between mt-2 text-xs font-bold text-slate-400">
                                    <span>Processing</span>
                                    <span className="text-indigo-600">75% Complete</span>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-4 bg-[#f8fafc] rounded-3xl p-8 border border-slate-100 flex flex-col justify-between">
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">Performance Tracking</h4>
                                <p className="text-slate-500 text-sm">360° reviews, OKR tracking, and continuous feedback directly inside the employee profile.</p>
                            </div>
                            <div className="flex items-center justify-between mt-8">
                                <div className="flex -space-x-3">
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"></div>
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-indigo-200"></div>
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-teal-200"></div>
                                </div>
                                <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full">+12 Reviews</span>
                            </div>
                        </div>

                        <div className="md:col-span-4 bg-indigo-700 rounded-3xl p-8 shadow-xl relative overflow-hidden flex flex-col justify-between group">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
                            <div className="relative z-10">
                                <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                                    <span className="text-white font-bold text-lg">★</span>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">Recruitment Pipeline</h4>
                                <p className="text-indigo-100 text-sm">Manage applicants, schedule interviews, and issue offers with full pipeline transparency.</p>
                            </div>
                            <div className="relative z-10 mt-8 flex items-center justify-between text-white group-hover:translate-x-2 transition-transform duration-300">
                                <span className="font-bold text-sm">Explore ATS →</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Integration */}
            <section className="w-full py-24 bg-[#f0fdfa]/30">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                        <div className="flex-1 max-w-xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 tracking-tight leading-tight">
                                Deeply connected to CRM intelligence.
                            </h2>

                            <div className="flex flex-col gap-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-1">
                                        <Activity className="w-4 h-4 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 font-bold mb-1">See which employees drive revenue</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            Don't guess who your top performers are. Ozen CRM automatically attributes closed revenue back to the sales rep or account manager in Ozen HR.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-1">
                                        <Share2 className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 font-bold mb-1">Connect performance with retention</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            Identify burnout before it happens. Our AI analyzes activity rates alongside PTO requests to flag employees at risk of leaving.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 w-full flex justify-center lg:justify-end">
                            <div className="w-full max-w-md aspect-square bg-[#f8fafc] border border-slate-200 rounded-3xl flex flex-col items-center justify-center p-8 text-center shadow-sm">
                                <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg mb-6 shadow-indigo-600/30">
                                    <Component className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">One Unified Schema</h3>
                                <p className="text-slate-500 text-sm leading-relaxed max-w-[280px]">
                                    No brittle integrations. Employees created in Ozen HR are immediately available as users in Ozen CRM.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="w-full bg-[#1e1b4b] py-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/40 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Turn Your Team Into Your Biggest Growth Engine
                    </h2>
                    <p className="text-lg text-indigo-200 mb-10 max-w-2xl mx-auto">
                        Start optimizing your workforce intelligence today. No hidden setup fees, no complex integrations.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/free-trial" className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-900 font-bold rounded-xl hover:bg-slate-50 hover:shadow-lg transition-all duration-300 text-base text-center">
                            Start Free Trial
                        </Link>
                        <Link to="/book-demo" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all duration-300 text-base text-center">
                            Book a Demo
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HRSection;
