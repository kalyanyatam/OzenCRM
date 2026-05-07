// SubNav.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    Users, Briefcase, Megaphone, Rocket,
    CheckCircle2,
    UserCheck, CalendarClock, BarChart2,
    PieChart, Handshake, Bell,
    Mail, MousePointerClick, TrendingUp,
    Send, Target, Zap,
} from "lucide-react";

const tabs = [
    {
        id: "crm",
        label: "CRM",
        sublabel: "Sales & Relationships",
        icon: Briefcase,
        tag: "Popular",
        description: "Close more deals with a pipeline built for modern sales teams.",
        features: [
            { icon: PieChart,      text: "Visual deal pipeline & stages" },
            { icon: Handshake,     text: "Contact & account management" },
            { icon: Bell,          text: "Follow-up reminders & alerts" },
            { icon: CheckCircle2,  text: "Revenue forecasting & reports" },
        ],
    },
    {
        id: "hr",
        label: "HR",
        sublabel: "People & Workforce",
        icon: Users,
        tag: "Core",
        description: "Streamline every stage of the employee lifecycle from hire to retire.",
        features: [
            { icon: UserCheck,     text: "Smart onboarding workflows" },
            { icon: CalendarClock, text: "Leave & attendance tracking" },
            { icon: BarChart2,     text: "Performance reviews & OKRs" },
            { icon: CheckCircle2,  text: "Payroll & compliance automation" },
        ],
    },
    {
        id: "marketing",
        label: "Marketing",
        sublabel: "Reach & Engagement",
        icon: Megaphone,
        tag: null,
        description: "Attract, nurture and convert leads with data-driven marketing tools.",
        features: [
            { icon: Mail,              text: "Email & SMS broadcast builder" },
            { icon: MousePointerClick, text: "Landing page & form builder" },
            { icon: TrendingUp,        text: "Lead scoring & segmentation" },
            { icon: CheckCircle2,      text: "Multi-channel analytics" },
        ],
    },
    {
        id: "campaigns",
        label: "Campaigns",
        sublabel: "Launch & Automate",
        icon: Rocket,
        tag: "New",
        description: "Design, schedule and automate campaigns that run while you sleep.",
        features: [
            { icon: Send,         text: "Drag-and-drop campaign builder" },
            { icon: Target,       text: "Audience targeting & A/B tests" },
            { icon: Zap,          text: "Trigger-based automation flows" },
            { icon: CheckCircle2, text: "Real-time performance dashboard" },
        ],
    },
];

const SubNav = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("crm");

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const tab = params.get("tab");
        if (tab && tabs.find((t) => t.id === tab)) setActiveTab(tab);
    }, [location]);

    return (
        <div className="w-full bg-[#f8fafc] border-y border-slate-100 py-8">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">

                {/* Section label */}
                <p className="text-center text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-6">
                    Explore Modules
                </p>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;

                        return (
                            <Link
                                key={tab.id}
                                to={`/product?tab=${tab.id}`}
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                                    group flex flex-col gap-5 p-6 rounded-2xl border
                                    transition-all duration-200
                                    ${isActive
                                        ? "bg-white border-indigo-200 shadow-[0_6px_24px_rgba(67,56,202,0.10)]"
                                        : "bg-white border-slate-200 hover:border-indigo-200 hover:shadow-lg"
                                    }
                                `}
                            >
                                {/* Card header */}
                                <div className="flex items-start justify-between">
                                    <div
                                        className={`
                                            w-12 h-12 rounded-xl flex items-center justify-center shrink-0
                                            transition-all duration-200
                                            ${isActive
                                                ? "bg-indigo-600 shadow-md shadow-indigo-200"
                                                : "bg-slate-100 group-hover:bg-indigo-50"
                                            }
                                        `}
                                    >
                                        <Icon
                                            className={`w-5 h-5 transition-colors duration-200 ${
                                                isActive
                                                    ? "text-white"
                                                    : "text-slate-500 group-hover:text-indigo-600"
                                            }`}
                                        />
                                    </div>

                                    {tab.tag && (
                                        <span
                                            className={`
                                                text-[10px] font-bold px-2 py-1 rounded-lg leading-none
                                                ${tab.tag === "Popular"
                                                    ? "bg-indigo-50 text-indigo-600"
                                                    : tab.tag === "New"
                                                    ? "bg-emerald-50 text-emerald-600"
                                                    : "bg-slate-100 text-slate-500"
                                                }
                                            `}
                                        >
                                            {tab.tag}
                                        </span>
                                    )}
                                </div>

                                {/* Title + description */}
                                <div>
                                    <h3
                                        className={`text-[17px] font-bold tracking-tight mb-1 transition-colors duration-200 ${
                                            isActive
                                                ? "text-[#4338ca]"
                                                : "text-slate-900 group-hover:text-[#4338ca]"
                                        }`}
                                    >
                                        {tab.label}
                                    </h3>
                                    <p className="text-[12px] text-slate-400 font-medium leading-none mb-2">
                                        {tab.sublabel}
                                    </p>
                                    <p className="text-[13px] text-slate-500 leading-relaxed">
                                        {tab.description}
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className={`w-full h-px ${isActive ? "bg-indigo-100" : "bg-slate-100"}`} />

                                {/* Feature bullets */}
                                <ul className="flex flex-col gap-2.5">
                                    {tab.features.map((f, i) => {
                                        const FIcon = f.icon;
                                        return (
                                            <li key={i} className="flex items-center gap-2.5">
                                                <FIcon
                                                    className={`w-3.5 h-3.5 shrink-0 ${
                                                        isActive ? "text-indigo-500" : "text-slate-400 group-hover:text-indigo-400"
                                                    }`}
                                                />
                                                <span className="text-[12.5px] text-slate-600 font-medium leading-snug">
                                                    {f.text}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>

                                {/* Bottom CTA hint */}
                                <div className={`mt-auto flex items-center gap-1.5 text-[12px] font-semibold transition-colors duration-200 ${
                                    isActive ? "text-indigo-600" : "text-slate-400 group-hover:text-indigo-500"
                                }`}>
                                    <span>Explore {tab.label}</span>
                                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SubNav;
